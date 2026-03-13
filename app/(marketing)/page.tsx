import Link from "next/link";
import {
  ChevronRight,
  Layers,
  Zap,
  RefreshCw,
  Download,
  Pencil,
  Search,
  Check,
  Shield,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import {
  AssetCard,
  YouTubeRevenueOverlay,
  ChallengeProgressOverlay,
  BestWorstOverlay,
  CountdownTimerOverlay,
  SubscriberMilestoneOverlay,
  GrowthChartOverlay,
  AlertBannerOverlay,
  InstagramAlertOverlay,
  ShopifySalesOverlay,
  CTRAnalyticsOverlay,
  RatingStarsOverlay,
  ReactionBubbleOverlay,
  PollResultOverlay,
} from "@/components/marketing/asset-overlays";
import { TestimonialsSection } from "@/components/marketing/testimonials";
import { PsdShowcase } from "@/components/marketing/psd-showcase";
import { FAQSection } from "@/components/marketing/faq";
import { StatsStrip } from "@/components/marketing/stats-strip";
import { ForCreatorsSection } from "@/components/marketing/for-creators";
import { PricingPreviewSection } from "@/components/marketing/pricing-preview";
import { cn } from "@/lib/utils/cn";

// ─── YouTube Thumbnail Mockup ─────────────────────────────────────────────────

interface ThumbnailMockupProps {
  thumbnailTitle: string;
  videoTitle: string;
  channel: string;
  views: string;
  gradient: string;
  accentColor: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  OverlayComponent: React.ComponentType<any>;
  assetName: string;
  overlayPos?: "right" | "center";
}

function ThumbnailMockup({
  thumbnailTitle,
  videoTitle,
  channel,
  views,
  gradient,
  accentColor,
  OverlayComponent,
  assetName,
  overlayPos = "right",
}: ThumbnailMockupProps) {
  const posClass =
    overlayPos === "right"
      ? "absolute right-3 top-[8%] h-[84%] w-[46%]"
      : "absolute left-1/2 top-1/2 h-[72%] w-[54%] -translate-x-1/2 -translate-y-1/2";

  return (
    <div>
      <div className="relative aspect-video overflow-hidden rounded-xl border border-border transition-colors duration-300 hover:border-border-strong">
        <div className="absolute inset-0" style={{ background: gradient }} />
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full opacity-30"
          style={{ background: `radial-gradient(circle, ${accentColor}50 0%, transparent 70%)` }}
        />
        <div className="absolute left-4 top-4 max-w-[48%]">
          <p
            className="font-black text-xl leading-[1.18] text-white uppercase"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,1), 0 1px 3px rgba(0,0,0,1)" }}
          >
            {thumbnailTitle}
          </p>
        </div>
        <div className={posClass}>
          <div className="relative h-full w-full">
            <OverlayComponent />
          </div>
        </div>
        <div className="absolute bottom-2.5 left-3">
          <div className="flex items-center gap-1.5 rounded-full border border-white/5 bg-black/75 px-2.5 py-1 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span className="text-[9px] text-white/55">Asset used:</span>
            <span className="text-[9px] font-semibold text-accent">{assetName}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-start gap-2.5 px-0.5">
        <div
          className="h-8 w-8 flex-shrink-0 rounded-full border border-border"
          style={{ background: `linear-gradient(135deg, ${accentColor}25 0%, transparent 100%)` }}
        />
        <div className="min-w-0 flex-1">
          <p className="line-clamp-2 text-sm font-medium leading-tight text-content-primary">
            {videoTitle}
          </p>
          <p className="mt-0.5 text-xs text-content-muted">
            {channel} · {views}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function HeroSection() {
  const includes = [
    "Fully layered .PSD files",
    "Commercial license included",
    "New assets added monthly",
    "Instant download, no queue",
  ];

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(201,169,110,0.12) 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-[10%] top-[20%] h-72 w-72 rounded-full opacity-[0.035] blur-3xl animate-float"
        style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute right-[8%] top-[35%] h-56 w-56 rounded-full opacity-[0.025] blur-3xl animate-float-delayed"
        style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-5xl text-center">

          <Reveal>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-base-surface px-3.5 py-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                style={{ animation: "accentDot 3s ease-in-out infinite" }}
              />
              <span className="text-xs tracking-wide text-content-secondary">
                Members-only PSD library · Instant download
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tightest text-content-primary md:text-6xl lg:text-7xl">
              Premium PSD assets for{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #B8935A 0%, #C9A96E 30%, #DFC088 50%, #C9A96E 70%, #B8935A 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 3s linear infinite",
                }}
              >
                YouTube thumbnails.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-content-secondary">
              The only library built specifically for YouTube thumbnail overlays.
              Fully layered PSDs — revenue notifications, subscriber milestones,
              countdowns, comparisons, and more. Customize in under 60 seconds.
            </p>
          </Reveal>

          <Reveal delay={230}>
            <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                  <span className="text-xs text-content-muted">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                id="hero-get-access"
                href="/signup"
                className={cn(buttonVariants({ size: "lg" }), "active:scale-[0.97] transition-transform")}
              >
                Get access
              </Link>
              <Link
                href="/pricing"
                className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "active:scale-[0.97] transition-transform")}
              >
                View pricing
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <p className="mt-5 text-sm text-content-muted">
              Trusted by{" "}
              <span className="text-content-secondary">1,200+</span> YouTube creators
              {" · "}
              <span className="text-content-secondary">180+</span> assets across{" "}
              <span className="text-content-secondary">12</span> categories
            </p>
          </Reveal>
        </div>

        {/* Product preview grid */}
        <div className="mt-20">
          <Reveal>
            <p className="mb-6 text-center text-[11px] font-medium tracking-widest text-content-muted uppercase">
              From the library
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { type: "revenue" as const, title: "YouTube Revenue Notification" },
              { type: "milestone" as const, title: "Subscriber Milestone Popup" },
              { type: "bestworst" as const, title: "Best vs Worst Comparison" },
              { type: "countdown" as const, title: "Countdown Timer Overlay" },
              { type: "challenge" as const, title: "Challenge Progress Bar" },
              { type: "reaction" as const, title: "Reaction Bubbles" },
            ].map(({ type, title }, i) => (
              <div
                key={type}
                style={{
                  opacity: 0,
                  animation: `slideUp 0.55s cubic-bezier(0.16,1,0.3,1) ${500 + i * 90}ms forwards`,
                }}
              >
                <AssetCard overlayType={type} title={title} />
              </div>
            ))}
          </div>
          <Reveal delay={400}>
            <div className="mt-10 flex justify-center">
              <a
                href="/login"
                className="inline-flex items-center gap-2.5 rounded-full border border-border bg-base-elevated px-6 py-3 text-sm font-medium text-content-primary transition-colors duration-200 hover:border-border-strong hover:bg-base-surface"
              >
                Explore the full library
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-content-muted">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── 3. Problem ───────────────────────────────────────────────────────────────

function ProblemSection() {
  const pains = [
    {
      title: "Building from scratch",
      desc: "Custom overlay graphics take 1–2 hours per video — time that compounds fast across a busy upload schedule.",
    },
    {
      title: "Generic template sites",
      desc: "Most template sites don't understand thumbnails. The results look like dashboard widgets, not authentic platform notifications.",
    },
    {
      title: "Hiring designers",
      desc: "Outsourcing every thumbnail isn't a system. It's expensive, slow, and creates a bottleneck on every video.",
    },
  ];

  return (
    <section className="border-t border-border bg-base-surface px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-medium tracking-widest text-content-muted uppercase">
              The problem
            </p>
            <h2 className="text-3xl font-semibold leading-snug tracking-tight text-content-primary md:text-4xl">
              High-performing thumbnails take time
              <br className="hidden sm:block" /> most creators don&apos;t have.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-content-secondary">
              Revenue overlays, subscriber milestones, countdown timers — these
              details drive clicks. But making them look authentic is exactly
              where most creators get stuck.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {pains.map((pain, i) => (
            <Reveal key={pain.title} delay={i * 80}>
              <div className="flex flex-col gap-3 rounded-xl border border-error/10 bg-error/[0.03] p-6 transition-colors duration-200 hover:border-error/20">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-error/15 text-[10px] font-bold text-error">
                  ✕
                </div>
                <p className="text-sm font-semibold text-content-primary">{pain.title}</p>
                <p className="text-sm leading-relaxed text-content-secondary">{pain.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Solution ──────────────────────────────────────────────────────────────

function SolutionSection() {
  const attributes = [
    {
      icon: Layers,
      title: "Fully layered PSD",
      desc: "Every element on its own named layer — text, backgrounds, effects, icons. Nothing merged, nothing flattened.",
    },
    {
      icon: Zap,
      title: "Swap any number in seconds",
      desc: "Click the text layer, type your value, export. Most assets take under 60 seconds to customize for your video.",
    },
    {
      icon: Download,
      title: "Instant download",
      desc: "No export queues, no waiting. Click download and the PSD is yours immediately. Works on any upload schedule.",
    },
    {
      icon: RefreshCw,
      title: "New assets monthly",
      desc: "The library grows every month across all 12 categories. Your subscription includes everything added, automatically.",
    },
  ];

  return (
    <section className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-medium tracking-widest text-content-muted uppercase">
              What Vaulted provides
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-content-primary md:text-4xl">
              The library that actually
              <br />
              understands thumbnails.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-content-secondary">
              Every asset is purpose-built for the thumbnail format — not
              adapted from a UI kit or repurposed from a template pack.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {attributes.map((attr, i) => {
            const Icon = attr.icon;
            return (
              <Reveal key={attr.title} delay={i * 80}>
                <div className="group flex flex-col gap-4 rounded-xl border border-border bg-base-surface p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/20 hover:bg-base-elevated hover:shadow-elevated">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-base-elevated transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/5">
                    <Icon className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="mb-1.5 text-sm font-semibold text-content-primary">{attr.title}</p>
                    <p className="text-sm leading-relaxed text-content-secondary">{attr.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Comparison ────────────────────────────────────────────────────────────

const comparisonRows = [
  {
    label: "Designed for",
    theirs: "Generic UI kits adapted for thumbnails",
    ours: "Built from scratch for YouTube thumbnails",
  },
  {
    label: "File format",
    theirs: "Flat PNG or JPEG — nothing is editable",
    ours: "Fully layered PSD — every element on its own layer",
  },
  {
    label: "Edit speed",
    theirs: "Needs a designer, or hours on your own",
    ours: "Click a text layer, type your number. Under 60 seconds.",
  },
  {
    label: "Library updates",
    theirs: "One-time purchase — static, never grows",
    ours: "New assets every month, included automatically",
  },
  {
    label: "Exclusivity",
    theirs: "Sold to thousands — same look as everyone else",
    ours: "Members-only library, curated and controlled",
  },
  {
    label: "License",
    theirs: "Personal use only — no commercial rights",
    ours: "Full commercial license — clients and sponsors included",
  },
];

function ComparisonSection() {
  return (
    <section className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-medium tracking-widest text-content-muted uppercase">
              Why creators switch
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-content-primary md:text-4xl">
              Not all thumbnail assets
              <br />
              are built the same.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-content-secondary">
              Most template packs are designed for aesthetics, not performance.
              Vaulted is the only library built specifically around what actually
              drives clicks on YouTube.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="overflow-hidden rounded-2xl border border-border">
            {/* Column headers */}
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-border bg-base-surface">
              <div className="px-6 py-4" />
              <div className="border-l border-border px-6 py-4">
                <p className="text-xs font-medium text-content-muted">Other template packs</p>
              </div>
              <div className="border-l border-accent/20 bg-accent/[0.04] px-6 py-4">
                <p className="text-xs font-semibold text-accent">Vaulted</p>
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, i) => (
              <div
                key={row.label}
                className={cn(
                  "grid grid-cols-[1fr_1fr_1fr] border-b border-border last:border-b-0",
                  i % 2 === 0 ? "bg-base" : "bg-base-surface"
                )}
              >
                {/* Attribute label */}
                <div className="flex items-center px-6 py-4">
                  <p className="text-sm font-medium text-content-primary">{row.label}</p>
                </div>

                {/* Theirs */}
                <div className="flex items-start gap-2.5 border-l border-border px-6 py-4">
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-error/10 text-[9px] font-bold text-error">
                    ✕
                  </span>
                  <p className="text-sm leading-relaxed text-content-muted">{row.theirs}</p>
                </div>

                {/* Ours */}
                <div className="flex items-start gap-2.5 border-l border-accent/20 bg-accent/[0.04] px-6 py-4">
                  <span className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-[9px] font-bold text-accent">
                    ✓
                  </span>
                  <p className="text-sm leading-relaxed text-content-secondary">{row.ours}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/signup"
              className={cn(
                buttonVariants({ size: "lg" }),
                "active:scale-[0.97] transition-transform"
              )}
            >
              Start with Vaulted
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── 6. Category Showcase ─────────────────────────────────────────────────────

const categoryData = [
  { name: "Revenue", assets: 4, Overlay: YouTubeRevenueOverlay, desc: "Earnings, payouts & income notifications" },
  { name: "Subscribers", assets: 4, Overlay: SubscriberMilestoneOverlay, desc: "Milestone popups & live counters" },
  { name: "Growth", assets: 3, Overlay: GrowthChartOverlay, desc: "Views, charts & channel performance" },
  { name: "Alerts", assets: 3, Overlay: AlertBannerOverlay, desc: "Live alerts, breaking news & warnings" },
  { name: "Social", assets: 3, Overlay: InstagramAlertOverlay, desc: "Instagram, Twitter & TikTok proof" },
  { name: "Commerce", assets: 3, Overlay: ShopifySalesOverlay, desc: "Sales, products & ecommerce data" },
  { name: "Analytics", assets: 3, Overlay: CTRAnalyticsOverlay, desc: "CTR, impressions & watch time" },
  { name: "Challenges", assets: 3, Overlay: ChallengeProgressOverlay, desc: "Progress bars, streaks & day trackers" },
  { name: "Comparisons", assets: 3, Overlay: BestWorstOverlay, desc: "Before/after & best vs worst frames" },
  { name: "Ratings", assets: 3, Overlay: RatingStarsOverlay, desc: "Stars, scores & review summaries" },
  { name: "Timers", assets: 3, Overlay: CountdownTimerOverlay, desc: "Countdown clocks & live event timers" },
  { name: "Reactions", assets: 4, Overlay: ReactionBubbleOverlay, desc: "Polls, votes & emoji reactions" },
];

function CategoryShowcaseSection() {
  return (
    <section className="border-t border-border bg-base-surface px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-medium tracking-widest text-content-muted uppercase">
              Browse the library
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-content-primary md:text-4xl">
              12 categories.
              <br />
              Every thumbnail format covered.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-content-secondary">
              One subscription. Instant access to every category, every asset —
              with new additions every month.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {categoryData.map(({ name, assets, Overlay, desc }, i) => (
            <Reveal key={name} delay={i * 40}>
              <div className="group">
                <div className="relative overflow-hidden rounded-xl border border-border bg-base-elevated aspect-video transition-all duration-300 group-hover:border-border-strong group-hover:shadow-elevated">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#111] to-[#181818]" />
                  <Overlay />
                  <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                </div>
                <div className="mt-2.5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-content-primary">{name}</p>
                    <span className="text-[11px] text-content-muted">{assets} assets</span>
                  </div>
                  <p className="mt-0.5 text-xs text-content-muted/70 leading-relaxed">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm text-content-muted">
            New assets added monthly across all categories · Included in every subscription
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── 7. How It Works ──────────────────────────────────────────────────────────

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Browse the library",
      description: "Filter by category, preview every asset in detail, and find exactly what your video needs.",
    },
    {
      number: "02",
      icon: Download,
      title: "Download the PSD",
      description: "One click to download the fully layered Photoshop file. No credits, no export queues — yours instantly.",
    },
    {
      number: "03",
      icon: Pencil,
      title: "Edit and export",
      description: "Open in Photoshop, click the number layer, type your value, export. Done in under 60 seconds.",
    },
  ];

  return (
    <section className="border-t border-border px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-medium tracking-widest text-content-muted uppercase">
              How it works
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-content-primary md:text-4xl">
              From library to finished thumbnail
              <br className="hidden sm:block" /> in three steps.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={i * 100}>
                <div
                  className={cn(
                    "group px-0 md:px-10",
                    i === 0 && "md:pl-0",
                    i === steps.length - 1 && "md:pr-0",
                    i < steps.length - 1 && "border-b border-border pb-12 md:border-b-0 md:border-r md:pb-0"
                  )}
                >
                  <span className="select-none text-5xl font-bold tracking-tightest text-border-strong">
                    {step.number}
                  </span>
                  <div className="mt-5 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-base-elevated transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/5">
                    <Icon className="h-4 w-4 text-accent" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-content-primary">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-content-secondary">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 7. Real Thumbnails ───────────────────────────────────────────────────────

const thumbnailData: ThumbnailMockupProps[] = [
  {
    thumbnailTitle: "HOW I MADE $24K THIS MONTH",
    videoTitle: "How I Made $24,180 From YouTube This Month (Full Revenue Breakdown)",
    channel: "MarkBuilds",
    views: "1.2M views",
    gradient: "linear-gradient(135deg, #180d00 0%, #2a1400 55%, #120a00 100%)",
    accentColor: "#FF8C00",
    OverlayComponent: YouTubeRevenueOverlay,
    assetName: "Revenue Alert",
    overlayPos: "right",
  },
  {
    thumbnailTitle: "30-DAY CHALLENGE: Day 22",
    videoTitle: "I Did This Every Day For 30 Days Straight — Here's What Happened",
    channel: "SophieDaily",
    views: "847K views",
    gradient: "linear-gradient(135deg, #000d18 0%, #001625 55%, #000a14 100%)",
    accentColor: "#FB923C",
    OverlayComponent: ChallengeProgressOverlay,
    assetName: "Challenge Progress",
    overlayPos: "right",
  },
  {
    thumbnailTitle: "BEST vs WORST Strategies",
    videoTitle: "I Tested Every YouTube Growth Strategy — Here's What Actually Works",
    channel: "JordanKodes",
    views: "2.4M views",
    gradient: "linear-gradient(135deg, #050d05 0%, #091509 55%, #040b04 100%)",
    accentColor: "#4ADE80",
    OverlayComponent: BestWorstOverlay,
    assetName: "Comparison Frame",
    overlayPos: "center",
  },
  {
    thumbnailTitle: "Going LIVE In...",
    videoTitle: "LIVE in 24 Hours — Don't Miss This (Biggest Stream of the Year)",
    channel: "NinaLive",
    views: "430K views",
    gradient: "linear-gradient(135deg, #06040e 0%, #0a0820 55%, #060414 100%)",
    accentColor: "#818CF8",
    OverlayComponent: CountdownTimerOverlay,
    assetName: "Countdown Timer",
    overlayPos: "center",
  },
];

function RealThumbnailsSection() {
  return (
    <section className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-medium tracking-widest text-content-muted uppercase">
              The library in action
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-content-primary md:text-4xl">
              Real thumbnails.
              <br />Real assets.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-content-secondary">
              Every asset is built to look platform-native — like a real YouTube
              notification, not a widget dropped from a dashboard.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {thumbnailData.map((t, i) => (
            <Reveal key={t.assetName} delay={i * 80}>
              <ThumbnailMockup {...t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 9. What's Included ──────────────────────────────────────────────────────

function WhatsIncludedSection() {
  const tiles = [
    {
      icon: Layers,
      label: "Fully layered PSD",
      desc: "Every element on its own named layer. Click, type, export. Done.",
    },
    {
      icon: RefreshCw,
      label: "New assets monthly",
      desc: "The library grows every month. Everything added is yours automatically.",
    },
    {
      icon: Download,
      label: "Instant download",
      desc: "One click. No export queue, no credits. The file is yours immediately.",
    },
    {
      icon: Shield,
      label: "Commercial license",
      desc: "Use in your own videos, for clients, or any sponsored content.",
    },
  ];

  return (
    <section className="border-t border-border bg-base-surface px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-14 text-center">
            <p className="mb-4 text-xs font-medium tracking-widest text-content-muted uppercase">
              Your membership
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-content-primary md:text-4xl">
              One subscription. Full access.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-content-secondary">
              No per-asset fees, no credits, no hidden tiers. Subscribe once
              and every asset in the library — past and future — is yours.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map(({ icon: Icon, label, desc }, i) => (
            <Reveal key={label} delay={i * 70}>
              <div className="group rounded-xl border border-border bg-base-elevated p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-elevated">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-base-surface transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/5">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <p className="mb-1.5 text-sm font-semibold text-content-primary">{label}</p>
                <p className="text-sm leading-relaxed text-content-secondary">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/signup"
              className={cn(buttonVariants({ size: "lg" }), "active:scale-[0.97] transition-transform")}
            >
              Get access
            </Link>
            <Link
              href="/pricing"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "active:scale-[0.97] transition-transform")}
            >
              See pricing
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── 9. CTA ──────────────────────────────────────────────────────────────────

function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-border px-6 py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(201,169,110,0.08) 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.03] blur-3xl animate-float"
        style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="mb-5 text-xs font-medium tracking-widest text-content-muted uppercase">
            Ready to upgrade?
          </p>
          <h2 className="text-4xl font-semibold tracking-tightest text-content-primary md:text-5xl">
            Your thumbnails
            <br />
            deserve better.
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-content-secondary">
            Join 1,200+ YouTube creators using Vaulted to build scroll-stopping
            thumbnails in minutes, not hours.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/signup"
              className={cn(buttonVariants({ size: "xl" }), "active:scale-[0.97] transition-transform")}
            >
              Get access
            </Link>
            <Link
              href="/pricing"
              className={cn(buttonVariants({ variant: "outline", size: "xl" }), "active:scale-[0.97] transition-transform")}
            >
              See pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-content-muted">
            Monthly from $19 · Yearly from $149 · Cancel anytime
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* 1 — Hook: headline + live preview */}
      <HeroSection />

      {/* 2 — Quick credibility */}
      <StatsStrip />

      {/* 3 — Show the product immediately, before explaining it */}
      <RealThumbnailsSection />

      {/* 4 — Show the full library breadth */}
      <CategoryShowcaseSection />

      {/* 5 — Now that they've seen it, the problem lands harder */}
      <ProblemSection />

      {/* 6 — Us vs them */}
      <ComparisonSection />

      {/* 7 — How simple it actually is */}
      <HowItWorksSection />

      {/* 8 — Who exactly it's for (self-identification) */}
      <ForCreatorsSection />

      {/* 9 — What the membership includes */}
      <WhatsIncludedSection />

      {/* 10 — Show the PSD quality up close */}
      <PsdShowcase />

      {/* 11 — Social proof */}
      <TestimonialsSection />

      {/* 12 — Price (after trust is established) */}
      <PricingPreviewSection />

      {/* 13 — Handle last objections */}
      <FAQSection />

      {/* 14 — Close */}
      <CtaSection />
    </>
  );
}
