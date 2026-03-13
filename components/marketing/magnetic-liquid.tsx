'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

interface Particle {
  x: number
  y: number
  px: number // previous x for streak
  py: number // previous y for streak
  vx: number
  vy: number
  size: number
  alpha: number
  life: number
  maxLife: number
  hue: number // slight color variation
}

const MAX_PARTICLES = 30
const PROXIMITY = 224

export function MagneticLiquid({ targetId }: { targetId: string }) {
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let mx = -9999, my = -9999
    let particles: Particle[] = []
    let raf: number
    let frame = 0

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', onMove)

    const spawn = (tx: number, ty: number): Particle => {
      // Spawn spread out in a wide cloud around cursor — not a single point
      const spawnAngle = Math.random() * Math.PI * 2
      const spawnRadius = 30 + Math.random() * 70
      const px = mx + Math.cos(spawnAngle) * spawnRadius
      const py = my + Math.sin(spawnAngle) * spawnRadius

      // Direction from spawn point toward button
      const dx = tx - px
      const dy = ty - py
      const d = Math.max(Math.hypot(dx, dy), 1)

      // Tangential component creates spiral orbiting motion (all counterclockwise)
      const tangSpeed = 0.4 + Math.random() * 0.6
      const tangX = -(dy / d) * tangSpeed
      const tangY = (dx / d) * tangSpeed

      // Tiny outward nudge so particles don't immediately shoot to button
      const outX = -(dx / d) * (0.1 + Math.random() * 0.3)
      const outY = -(dy / d) * (0.1 + Math.random() * 0.3)

      const maxLife = 100 + Math.random() * 100

      return {
        x: px, y: py,
        px: px, py: py,
        vx: tangX + outX,
        vy: tangY + outY,
        size: 0.6 + Math.random() * 1.0,
        alpha: 0.2 + Math.random() * 0.4,
        life: maxLife,
        maxLife,
        hue: Math.random() * 20 - 10, // slight warm/cool variation
      }
    }

    const tick = () => {
      const target = document.getElementById(targetId)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (target && mx > -999) {
        const rect = target.getBoundingClientRect()
        const tx = rect.left + rect.width / 2
        const ty = rect.top + rect.height / 2
        const mouseDist = Math.hypot(mx - tx, my - ty)
        // Use actual button rectangle — particles flow to real edges, not an oversized circle
        const pad = 3
        const inBtn = (x: number, y: number) =>
          x > rect.left - pad && x < rect.right + pad &&
          y > rect.top - pad && y < rect.bottom + pad

        const isNear = mouseDist < PROXIMITY
        const onBtn = inBtn(mx, my)

        if (isNear && !onBtn && particles.length < MAX_PARTICLES) {
          frame++
          if (frame % 3 === 0) {
            particles.push(spawn(tx, ty))
          }
        }

        particles = particles.filter(p => {
          const dx = tx - p.x
          const dy = ty - p.y
          const d = Math.max(Math.hypot(dx, dy), 1)
          const atEdge = inBtn(p.x, p.y)

          if (!atEdge) {
            // Gravity: gentle at distance, strong up close — portal pull
            const pull = Math.min(0.18, 60 / (d * d) * 50)
            p.vx += (dx / d) * pull
            p.vy += (dy / d) * pull

            // Anti-gravity: subtle upward float for weightless feel
            p.vy -= 0.012

            // Damping — fluid resistance
            p.vx *= 0.975
            p.vy *= 0.975

            // Store previous position for streak
            p.px = p.x
            p.py = p.y

            p.x += p.vx
            p.y += p.vy
            p.life -= 1
          } else {
            p.px = p.x
            p.py = p.y
            p.life -= 10
          }

          if (p.life <= 0) return false

          // Smooth fade in and out
          const age = p.maxLife - p.life
          const fadeIn = Math.min(1, age / 20)
          const fadeOut = Math.min(1, p.life / 30)
          const opacity = p.alpha * fadeIn * fadeOut

          const speed = Math.hypot(p.x - p.px, p.y - p.py)
          const streakLen = Math.max(1.5, speed * 3)
          const angle = Math.atan2(p.y - p.py, p.x - p.px)
          const x0 = p.x - Math.cos(angle) * streakLen
          const y0 = p.y - Math.sin(angle) * streakLen
          const g2 = 169 + Math.round(p.hue * 2)

          ctx.save()
          // Bloom: wide soft glow layer
          ctx.globalAlpha = opacity * 0.3
          ctx.strokeStyle = `rgb(201, ${g2}, 110)`
          ctx.lineWidth = p.size * 3.5
          ctx.lineCap = 'round'
          ctx.filter = 'blur(2px)'
          ctx.beginPath()
          ctx.moveTo(x0, y0)
          ctx.lineTo(p.x, p.y)
          ctx.stroke()
          // Core: sharp bright streak
          ctx.globalAlpha = opacity
          ctx.filter = 'none'
          ctx.strokeStyle = `rgb(228, 200, 148)`
          ctx.lineWidth = p.size
          ctx.beginPath()
          ctx.moveTo(x0, y0)
          ctx.lineTo(p.x, p.y)
          ctx.stroke()
          ctx.restore()

          return true
        })
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [mounted, targetId])

  if (!mounted) return null

  return createPortal(
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}
    />,
    document.body
  )
}
