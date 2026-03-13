import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  ChevronRight,
  Layers,
  Zap,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FeaturedPlanCard } from "@/components/marketing/featured-plan-card";
import { Separator } from "@/components/ui/separator";
import { AssetCard } from "@/components/marketing/asset-overlays";
import { siteConfig } from "@/lib/config/site";
import { cn } from "@/lib/utils/cn";

export const metadata: Metadata = {
  title: "Pricing",
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const planFeatures = [
  "Full library — all 100+ assets",
  "All 12 categories included",
  "Fully layered Adobe Photoshop PSD",
  "Commercial license included",
  "New assets added every month",
  "Unlimited downloads, no credits",
];

const includedFeatures = [
  "Full library access — all assets, always",
  "Fully layered Adobe Photoshop PSD files",
  "New assets added every month across all categories",
  "Revenue, Subscribers, Growth, Alerts, Social, Commerce, Analytics, Challenges, Comparisons, Ratings, Timers, Reactions — and growing",
  "Commercial license — use in client work and YouTube channels",
  "Unlimited downloads, no credit system",
  "Instant access from the moment you subscribe",
  "Access to all future asset releases",
];

const faqs = [
  {
    q: "What file formats are included?",
    a: "All assets are provided as fully layered Adobe Photoshop PSD files. Every element — text, colors, shapes, and effects — is independently editable. A JPG preview is also included with each asset.",
  },
  {
    q: "Do I need design experience to use these?",
    a: "No. Every asset is built for speed. Open in Photoshop, click the number or text layer, type your value, and export. Most edits take under 60 seconds.",
  },
  {
    q: "Can I use these assets commercially?",
    a: "Yes. Your membership includes a commercial license. Use the assets in your own YouTube channel, for client projects, or in any commercial work.",
  },
  {
    q: "Are there download limits?",
    a: "No. Once you're a member, you can download any asset in the library as many times as you need. There are no credits, no caps, and no restrictions.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from your account dashboard at any time. You keep full access until the end of your current billing period — no penalties, no hassle.",
  },
];

const pricingTestimonials = [
  {
    quote:
      "My CTR jumped from 4.2% to 8.9% after switching to these assets. No other template site comes close.",
    name: "Sophie L.",
    handle: "512K subscribers",
    initials: "SL",
    color: "#818CF8",
  },
  {
    quote:
      "I was spending hours making these overlays from scratch. Now I'm done in five minutes. Worth every penny.",
    name: "Dani R.",
    handle: "98K subscribers",
    initials: "DR",
    color: "#34D399",
  },
  {
    quote:
      "These look exactly like real platform notifications. My audience actually thinks the revenue numbers are real screenshots.",
    name: "Jordan K.",
    handle: "1.2M subscribers",
    initials: "JK",
    color: "#FB923C",
  },
];

const productHighlights = [
  {
    icon: Layers,
    heading: "Fully layered PSD",
    body: "Every element on its own named layer. Text, backgrounds, effects, icons — all independently editable. No flattened files.",
  },
  {
    icon: Zap,
    heading: "Edit in under 60 seconds",
    body: "Click the number layer. Type your value. Export. The assets are built for speed without sacrificing visual quality.",
  },
  {
    icon: RefreshCw,
    heading: "Growing library",
    body: "New assets added every month across all 12 categories. Your subscription keeps pace with new content automatically.",
  },
  {
    icon: ShieldCheck,
    heading: "Commercial license",
    body: "Use every asset in your own channel, for clients, or in any commercial work. No attribution required.",
  },
];

const libraryPreviewAssets: {
  overlayType: "revenue" | "payout" | "milestone" | "bestworst" | "countdown" | "challenge";
  title: string;
}[] = [
  { overlayType: "revenue", title: "YouTube Revenue Alert" },
  { overlayType: "payout", title: "Stripe Payout Overlay" },
  { overlayType: "milestone", title: "Subscriber Milestone" },
  { overlayType: "bestworst", title: "Best vs Worst Comparison" },
  { overlayType: "countdown", title: "Countdown Timer" },
  { overlayType: "challenge", title: "Challenge Progress" },
];

// ─── Components ───────────────────────────────────────────────────────────────

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" className="h-3 w-3 fill-accent">
          <path d="M6 0l1.5 4H12l-3.7 2.7 1.4 4.3L6 8.4l-3.7 2.6 1.4-4.3L0 4h4.5z" />
        </svg>
      ))}
    </div>
  );
}

function PlanCard({
  planId,
  featured,
}: {
  planId: keyof typeof siteConfig.plans;
  featured?: boolean;
}) {
  const plan = siteConfig.plans[planId];
  const isYearly = planId === "yearly";

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-xl border overflow-hidden transition-colors",
        featured
          ? "border-accent/40 bg-base-surface shadow-elevated"
          : "border-border bg-base-surface"
      )}
      style={featured ? { animation: "borderGlow 4s ease-in-out infinite" } : undefined}
    >
      {/* Top accent bar on featured card */}
      {featured && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
      )}

      {featured && (
        <div className="absolute top-4 right-4">
          <Badge variant="default" className="px-3 py-1 text-xs">
            Best value
          </Badge>
        </div>
      )}

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

        {isYearly ? (
          <div className="mt-2 space-y-0.5">
            <p className="text-sm text-accent font-medium">
              {siteConfig.plans.yearly.savings} — $12.42/mo equivalent
            </p>
            <p className="text-xs text-content-muted">Billed annually. Cancel anytime.</p>
          </div>
        ) : (
          <div className="mt-2 space-y-0.5">
            <p className="text-sm text-content-secondary">Flexible month-to-month.</p>
            <p className="text-xs text-content-muted">Cancel anytime.</p>
          </div>
        )}

        {featured ? (
          <Link
            href="/signup"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "w-full justify-center mt-7"
            )}
          >
            Get started
            <ChevronRight className="h-4 w-4" />
          </Link>
        ) : (
          <Link
            href="/signup"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "w-full justify-center mt-7"
            )}
          >
            Get started
            <ChevronRight className="h-4 w-4" />
          </Link>
        )}
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
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function PricingHero() {
  return (
    <section className="px-6 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <p className="mb-5 text-xs font-medium tracking-widest text-content-muted uppercase">
          Pricing
        </p>
        <h1 className="text-4xl font-semibold tracking-tightest text-content-primary md:text-5xl">
          One membership.
          <br />
          <span className="text-accent">Everything unlocked.</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-content-secondary">
          Instant access to 100+ fully layered PSD thumbnail assets across 12 categories.
          No tiers, no credits, no limits.
        </p>
        <div className="mt-7 flex items-center justify-center gap-2 text-xs text-content-muted">
          <span>100+ assets</span>
          <span className="opacity-30">·</span>
          <span>12 categories</span>
          <span className="opacity-30">·</span>
          <span>Commercial license</span>
          <span className="opacity-30">·</span>
          <span>New assets monthly</span>
        </div>
      </div>
    </section>
  );
}

function PricingCards() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-2xl">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <PlanCard planId="monthly" />
          <FeaturedPlanCard />
        </div>
        <p className="mt-6 text-center text-xs text-content-muted">
          Secure checkout · Cancel anytime · Instant access
        </p>
      </div>
    </section>
  );
}

function PricingTestimonials() {
  return (
    <section className="border-t border-border-subtle px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium tracking-widest text-content-muted uppercase">
            Creator reviews
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-content-primary">
            Used by serious creators.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {pricingTestimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-xl border border-border bg-base-elevated p-6"
            >
              <Stars />
              <p className="flex-1 text-sm leading-relaxed text-content-secondary">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div
                  className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold text-base"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-xs font-semibold text-content-primary">{t.name}</p>
                  <p className="text-[10px] text-content-muted">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LibrarySnapshot() {
  return (
    <section className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium tracking-widest text-content-muted uppercase">
            What&apos;s inside
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-content-primary">
            The full library — a preview.
          </h2>
          <p className="mt-3 text-content-secondary">
            Every asset is a fully editable PSD. Swap numbers, change colors, export.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {libraryPreviewAssets.map((asset) => (
            <AssetCard
              key={asset.overlayType}
              overlayType={asset.overlayType}
              title={asset.title}
            />
          ))}
        </div>

        {/* Category pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {siteConfig.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-border bg-base-elevated px-3 py-1 text-xs text-content-muted"
            >
              {cat}
            </span>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-content-muted">
          All categories included. New assets added monthly.
        </p>
      </div>
    </section>
  );
}

function ProductHighlights() {
  return (
    <section className="border-t border-border bg-base-surface px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium tracking-widest text-content-muted uppercase">
            Built different
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-content-primary">
            Premium quality. Zero friction.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productHighlights.map((h) => {
            const Icon = h.icon;
            return (
              <div key={h.heading} className="flex flex-col gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-base-elevated">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-content-primary">{h.heading}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-content-secondary">{h.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhatIsIncluded() {
  return (
    <section className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium tracking-widest text-content-muted uppercase">
            Included in every plan
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-content-primary">
            Everything you need.
          </h2>
        </div>

        <ul className="space-y-4">
          {includedFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/15">
                <Check className="h-3 w-3 text-accent" />
              </div>
              <span className="text-sm leading-relaxed text-content-secondary">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="border-t border-border px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-medium tracking-widest text-content-muted uppercase">
            FAQ
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-content-primary">
            Common questions.
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div key={faq.q}>
              <div className="py-6">
                <h3 className="mb-3 text-sm font-semibold text-content-primary">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-content-secondary">{faq.a}</p>
              </div>
              {i < faqs.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCta() {
  return (
    <section className="border-t border-border bg-base-surface px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-5 text-xs font-medium tracking-widest text-content-muted uppercase">
          Get access
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-content-primary">
          Start building better thumbnails today.
        </h2>
        <p className="mt-4 text-content-secondary">
          Join Vaulted and unlock the full library instantly.
        </p>

        {/* Compact plan choice */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-base-elevated p-6 text-left">
            <p className="text-xs font-medium tracking-widest text-content-muted uppercase mb-3">
              Monthly
            </p>
            <p className="text-3xl font-semibold tracking-tighter text-content-primary">
              $19 <span className="text-base font-normal text-content-muted">/mo</span>
            </p>
            <p className="mt-1.5 text-xs text-content-muted">Cancel anytime.</p>
            <Link
              href="/signup?plan=monthly"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "mt-5 w-full justify-center"
              )}
            >
              Start monthly
            </Link>
          </div>

          <div className="relative rounded-xl border border-accent/40 bg-base-elevated p-6 text-left overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/70 to-transparent" />
            <div className="flex items-center gap-2 mb-3">
              <p className="text-xs font-medium tracking-widest text-content-muted uppercase">
                Yearly
              </p>
              <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium text-accent">
                Save 35%
              </span>
            </div>
            <p className="text-3xl font-semibold tracking-tighter text-content-primary">
              $149 <span className="text-base font-normal text-content-muted">/yr</span>
            </p>
            <p className="mt-1.5 text-xs text-content-muted">$12.42/mo equivalent.</p>
            <Link
              href="/signup?plan=yearly"
              className={cn(
                buttonVariants({ variant: "default", size: "sm" }),
                "mt-5 w-full justify-center"
              )}
            >
              Start yearly
            </Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-content-muted">
          Secure checkout · Instant access · Cancel anytime
        </p>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <PricingTestimonials />
      <LibrarySnapshot />
      <ProductHighlights />
      <WhatIsIncluded />
      <FaqSection />
      <PricingCta />
    </>
  );
}
