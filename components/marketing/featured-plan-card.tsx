'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { Check, ChevronRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils/cn'
import { siteConfig } from '@/lib/config/site'

const planFeatures = [
  'Full library — all 100+ assets',
  'All 12 categories included',
  'Fully layered Adobe Photoshop PSD',
  'Commercial license included',
  'New assets added every month',
  'Unlimited downloads, no credits',
]

export function FeaturedPlanCard() {
  const plan = siteConfig.plans.yearly
  const cardRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const btn = btnRef.current
    if (!btn) return

    const rect = btn.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const dist = Math.hypot(dx, dy)
    const proximity = 180

    if (dist < proximity) {
      const pull = 1 - dist / proximity
      btn.style.transform = `translate(${dx * 0.15 * pull}px, ${dy * 0.15 * pull}px)`
      btn.style.boxShadow = `0 0 ${pull * 35}px ${pull * 8}px rgba(201,169,110,${pull * 0.55})`
    } else {
      btn.style.transform = 'translate(0px, 0px)'
      btn.style.boxShadow = 'none'
    }
  }

  const handleMouseLeave = () => {
    const btn = btnRef.current
    if (!btn) return
    btn.style.transform = 'translate(0px, 0px)'
    btn.style.boxShadow = 'none'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col rounded-xl border border-accent/40 bg-base-surface shadow-elevated overflow-hidden transition-colors"
      style={{ animation: 'borderGlow 4s ease-in-out infinite' }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/70 to-transparent" />

      {/* Badge */}
      <div className="absolute top-4 right-4">
        <Badge variant="default" className="px-3 py-1 text-xs">
          Best value
        </Badge>
      </div>

      <div className="p-8">
        <p className="mb-1 text-xs font-medium tracking-widest text-content-muted uppercase">
          {plan.label}
        </p>

        <div className="flex items-end gap-1.5">
          <span className="text-4xl font-semibold tracking-tighter text-content-primary">
            ${plan.price}
          </span>
          <span className="mb-1 text-sm text-content-muted">/{plan.interval}</span>
        </div>

        <div className="mt-2 space-y-0.5">
          <p className="text-sm text-accent font-medium">
            {siteConfig.plans.yearly.savings} — $12.42/mo equivalent
          </p>
          <p className="text-xs text-content-muted">Billed annually. Cancel anytime.</p>
        </div>

        {/* Magnetic button */}
        <div
          ref={btnRef}
          style={{
            transition: 'transform 0.25s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.25s ease',
          }}
          className="mt-7"
        >
          <Link
            href="/signup"
            className={cn(buttonVariants({ variant: 'default', size: 'lg' }), 'w-full justify-center')}
          >
            Get started
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Feature list */}
      <div className="border-t border-border/60 px-8 pb-8 pt-6">
        <ul className="space-y-3">
          {planFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-accent/15">
                <Check className="h-2.5 w-2.5 text-accent" />
              </div>
              <span className="text-sm text-content-secondary">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
