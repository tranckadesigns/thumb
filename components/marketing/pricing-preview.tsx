import Link from "next/link";
import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils/cn";

const features = [
  "Full library access — 180+ PSD assets",
  "All 12 asset categories",
  "New assets added every month",
  "Full commercial license included",
  "Instant download — no queue, no credits",
  "Photoshop CC+ & Affinity Photo compatible",
];

export function PricingPreviewSection() {
  return (
    <section className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-medium tracking-widest text-content-muted uppercase">
              Pricing
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-content-primary md:text-4xl">
              Simple, honest pricing.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-content-secondary">
              No credits, no tiers, no upsells. Pick monthly or annual — both
              unlock the full library from day one.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* ── Monthly ───────────────────────────────────── */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-base-elevated p-8">
              <div>
                <p className="text-sm font-medium text-content-muted">Monthly</p>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-5xl font-semibold tracking-tightest text-content-primary">
                    $19
                  </span>
                  <span className="text-sm text-content-muted">/ month</span>
                </div>
                <p className="mt-2 text-xs text-content-muted">
                  Billed monthly · Cancel anytime
                </p>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-content-muted" />
                    <span className="text-sm text-content-secondary">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  href="/signup"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "w-full justify-center active:scale-[0.97] transition-transform"
                  )}
                >
                  Get started monthly
                </Link>
              </div>
            </div>
          </Reveal>

          {/* ── Annual (featured) ─────────────────────────── */}
          <Reveal delay={80}>
            <div
              className="relative flex h-full flex-col rounded-2xl bg-base-elevated p-8"
              style={{
                border: "1px solid rgba(201,169,110,0.35)",
                boxShadow: "0 0 70px -15px rgba(201,169,110,0.18), inset 0 0 0 1px rgba(201,169,110,0.06)",
              }}
            >
              {/* Best value badge */}
              <div className="absolute -top-3.5 right-6">
                <span className="rounded-full bg-accent px-3.5 py-1 text-[11px] font-semibold text-[#0a0a0a]">
                  Best value · Save 35%
                </span>
              </div>

              <div>
                <p className="text-sm font-medium text-content-muted">Annual</p>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-5xl font-semibold tracking-tightest text-content-primary">
                    $149
                  </span>
                  <span className="text-sm text-content-muted">/ year</span>
                </div>
                <div className="mt-2 flex items-center gap-2.5">
                  <span className="text-xs text-content-muted">$12.42 / month</span>
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent">
                    vs $228/yr on monthly
                  </span>
                </div>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-content-secondary">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Link
                  href="/signup"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "w-full justify-center active:scale-[0.97] transition-transform"
                  )}
                >
                  Get annual — best value
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <p className="mt-8 text-center text-sm text-content-muted">
            No contracts · Instant access after signup · Cancel from your account page anytime
          </p>
        </Reveal>
      </div>
    </section>
  );
}
