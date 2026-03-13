import { TrendingUp, DollarSign, ShoppingBag, BarChart2, Instagram, Users, Lock } from "lucide-react";
import { cn } from "@/lib/utils/cn";

// ─── Platform Signal Overlays ─────────────────────────────────────────────────
// Each overlay is styled to look like an authentic platform notification
// as it would appear on a YouTube thumbnail.

export function YouTubeRevenueOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-lg bg-[#0f0f0f]/95 border border-white/10 p-3 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF0000]">
            <svg viewBox="0 0 24 24" className="h-3 w-3 fill-white">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.84 4.84 0 0 1-1-.07z" />
            </svg>
          </div>
          <span className="text-[10px] font-medium text-white/60">YouTube Studio</span>
        </div>
        <p className="text-xs text-white/50 mb-1">Monthly revenue</p>
        <div className="flex items-end justify-between">
          <span className="text-xl font-bold tracking-tight text-white">$24,180</span>
          <span className="text-xs font-medium text-[#4ADE80] flex items-center gap-0.5">
            <TrendingUp className="h-3 w-3" />
            +34.2%
          </span>
        </div>
        <div className="mt-2 h-1 w-full rounded-full bg-white/10">
          <div className="h-full w-[78%] rounded-full bg-[#FF0000]" />
        </div>
      </div>
    </div>
  );
}

export function StripePayoutOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-lg bg-[#0A2540]/95 border border-[#635BFF]/30 p-3 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-[#635BFF]">
            <DollarSign className="h-3 w-3 text-white" />
          </div>
          <span className="text-[10px] font-medium text-white/60">Stripe</span>
          <span className="ml-auto rounded-full bg-[#4ADE80]/20 px-1.5 py-0.5 text-[9px] font-medium text-[#4ADE80]">Paid</span>
        </div>
        <p className="text-[10px] text-white/40 mb-0.5">Payout to Chase ••4521</p>
        <p className="text-lg font-bold tracking-tight text-white">$8,420.00</p>
        <p className="mt-1.5 text-[9px] text-white/40">Arrives Oct 14 · 847 transactions</p>
      </div>
    </div>
  );
}

export function SubscriberMilestoneOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[200px] rounded-xl bg-[#0f0f0f]/95 border border-white/10 p-4 shadow-overlay backdrop-blur-sm text-center">
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FF0000] to-[#FF6B6B]">
          <Users className="h-5 w-5 text-white" />
        </div>
        <p className="text-[9px] font-medium text-white/50 uppercase tracking-wider mb-1">Milestone reached</p>
        <p className="text-2xl font-bold tracking-tighter text-white">100K</p>
        <p className="text-xs text-white/50">Subscribers</p>
        <div className="mt-3 flex items-center justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#FF0000]" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ShopifySalesOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-lg bg-[#1A1A2E]/95 border border-[#96BF48]/30 p-3 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-[#96BF48]">
            <ShoppingBag className="h-3 w-3 text-white" />
          </div>
          <span className="text-[10px] font-medium text-white/60">Shopify</span>
          <span className="ml-auto text-[9px] text-white/40">Today</span>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <p className="text-[9px] text-white/40">Revenue</p>
            <p className="text-sm font-bold text-white">$3,240</p>
          </div>
          <div>
            <p className="text-[9px] text-white/40">Orders</p>
            <p className="text-sm font-bold text-white">147</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <TrendingUp className="h-3 w-3 text-[#96BF48]" />
          <span className="text-[10px] text-[#96BF48] font-medium">+218% vs yesterday</span>
        </div>
      </div>
    </div>
  );
}

export function CTRAnalyticsOverlay() {
  const bars = [42, 58, 38, 71, 65, 80, 55];
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-lg bg-[#0f0f0f]/95 border border-white/10 p-3 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-medium text-white/60">Click-through rate</span>
          <BarChart2 className="h-3.5 w-3.5 text-white/30" />
        </div>
        <div className="flex items-end justify-between mb-1">
          <span className="text-xl font-bold tracking-tight text-white">8.4%</span>
          <span className="text-[10px] text-[#4ADE80] font-medium">+2.1%</span>
        </div>
        <div className="flex items-end gap-0.5 h-10 mt-2">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                backgroundColor: i === 5 ? "#C9A96E" : "rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
        <p className="mt-1.5 text-[9px] text-white/30">Last 7 days · 48K impressions</p>
      </div>
    </div>
  );
}

export function InstagramAlertOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#0f0f0f]/95 border border-white/10 p-3 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737]">
            <Instagram className="h-3.5 w-3.5 text-white" />
          </div>
          <div>
            <p className="text-[10px] font-medium text-white">New followers</p>
            <p className="text-[9px] text-white/40">Instagram</p>
          </div>
          <div className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-[#FD1D1D] text-[9px] font-bold text-white">
            +
          </div>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-2xl font-bold tracking-tight text-white">2,847</span>
          <span className="mb-1 text-xs text-[#4ADE80]">today</span>
        </div>
        <div className="mt-2 flex -space-x-1.5">
          {["#E879F9", "#818CF8", "#FB923C", "#34D399", "#60A5FA"].map((c, i) => (
            <div
              key={i}
              className="h-5 w-5 rounded-full border-2 border-[#0f0f0f]"
              style={{ backgroundColor: c }}
            />
          ))}
          <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0f0f0f] bg-white/10 text-[8px] text-white/60">
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export function GrowthChartOverlay() {
  const points = [15, 22, 18, 35, 28, 45, 38, 62, 55, 88];
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-lg bg-[#0a0a0a]/95 border border-white/10 p-3 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-medium text-white/60">Channel growth</span>
          <span className="rounded-full bg-[#4ADE80]/20 px-1.5 py-0.5 text-[9px] font-medium text-[#4ADE80]">
            Viral
          </span>
        </div>
        <div className="flex items-end gap-1.5 mb-2">
          <span className="text-xl font-bold tracking-tight text-white">+842%</span>
          <span className="mb-0.5 text-xs text-[#4ADE80]">this week</span>
        </div>
        <div className="flex items-end gap-0.5 h-10">
          {points.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                backgroundColor: i >= 7 ? "#4ADE80" : "rgba(74,222,128,0.25)",
              }}
            />
          ))}
        </div>
        <p className="mt-1.5 text-[9px] text-white/30">Views · Last 10 days</p>
      </div>
    </div>
  );
}

export function AlertBannerOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#1a0a00]/95 border border-[#FBBF24]/30 p-4 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="h-2 w-2 rounded-full bg-[#FBBF24]" style={{ animation: "pulse 1.5s infinite" }} />
          <span className="text-[9px] font-semibold tracking-widest text-[#FBBF24] uppercase">Live alert</span>
        </div>
        <p className="text-sm font-bold text-white leading-tight mb-1">Video going viral</p>
        <p className="text-[10px] text-white/50 mb-3">+48,240 views in the last hour</p>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1 rounded-full bg-white/10">
            <div className="h-full w-[82%] rounded-full bg-[#FBBF24]" />
          </div>
          <span className="text-[9px] text-[#FBBF24] font-medium">82%</span>
        </div>
      </div>
    </div>
  );
}

export function BestWorstOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] overflow-hidden rounded-lg shadow-overlay">
        <div className="grid grid-cols-2">
          <div className="bg-[#081808]/95 border border-[#4ADE80]/20 p-3 backdrop-blur-sm">
            <p className="text-[9px] font-bold tracking-widest text-[#4ADE80] uppercase mb-2">Best</p>
            <p className="text-lg font-bold text-white">$24,180</p>
            <p className="text-[9px] text-white/40 mt-0.5 mb-2">Revenue</p>
            <div className="flex items-center gap-1">
              <TrendingUp className="h-2.5 w-2.5 text-[#4ADE80]" />
              <span className="text-[9px] font-medium text-[#4ADE80]">+312%</span>
            </div>
          </div>
          <div className="bg-[#1a0808]/95 border border-[#F87171]/20 p-3 backdrop-blur-sm">
            <p className="text-[9px] font-bold tracking-widest text-[#F87171] uppercase mb-2">Worst</p>
            <p className="text-lg font-bold text-white/60">$2,140</p>
            <p className="text-[9px] text-white/40 mt-0.5 mb-2">Revenue</p>
            <div className="flex items-center gap-1">
              <TrendingUp className="h-2.5 w-2.5 text-[#F87171] rotate-180" />
              <span className="text-[9px] font-medium text-[#F87171]">-78%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RatingStarsOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[200px] rounded-xl bg-[#0f0f0f]/95 border border-white/10 p-4 shadow-overlay backdrop-blur-sm text-center">
        <p className="text-[9px] font-medium tracking-widest text-white/40 uppercase mb-2">Overall rating</p>
        <div className="text-3xl font-bold tracking-tighter text-white mb-0.5">9.4</div>
        <p className="text-[10px] text-white/40 mb-2.5">out of 10</p>
        <div className="flex items-center justify-center gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} viewBox="0 0 12 12" className="h-3.5 w-3.5 fill-[#FBBF24]">
              <path d="M6 0l1.5 4H12l-3.7 2.7 1.4 4.3L6 8.4l-3.7 2.6 1.4-4.3L0 4h4.5z" />
            </svg>
          ))}
        </div>
        <p className="text-[9px] text-white/30">2,847 reviews</p>
      </div>
    </div>
  );
}

export function CountdownTimerOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#0a0a1a]/95 border border-[#818CF8]/30 p-4 shadow-overlay backdrop-blur-sm text-center">
        <p className="text-[9px] font-semibold tracking-widest text-[#818CF8] uppercase mb-3">Ends in</p>
        <div className="flex items-center justify-center gap-2">
          {[
            { val: "23", label: "HRS" },
            { val: "14", label: "MIN" },
            { val: "08", label: "SEC" },
          ].map(({ val, label }, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex h-10 w-12 items-center justify-center rounded-lg border border-[#818CF8]/20 bg-[#1a1a3a]">
                <span className="font-mono text-xl font-bold tracking-tighter text-white">{val}</span>
              </div>
              <span className="mt-1 text-[8px] tracking-widest text-white/30">{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[9px] text-white/40">Limited time only</p>
      </div>
    </div>
  );
}

export function ChallengeProgressOverlay() {
  const days = 22;
  const total = 30;
  const pct = Math.round((days / total) * 100);
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#0f0f0f]/95 border border-white/10 p-3.5 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className="text-sm">🔥</span>
          <span className="text-[10px] font-semibold text-white/60">30-Day Challenge</span>
        </div>
        <div className="flex items-end justify-between mb-2">
          <div>
            <span className="text-2xl font-bold tracking-tight text-white">Day {days}</span>
            <span className="text-sm text-white/40"> / {total}</span>
          </div>
          <span className="text-xs font-semibold text-[#FB923C]">{pct}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-white/10">
          <div
            className="h-full rounded-full"
            style={{
              width: `${pct}%`,
              background: "linear-gradient(90deg, #FB923C, #FBBF24)",
            }}
          />
        </div>
        <p className="mt-2 text-[9px] text-white/30">8 days remaining · Keep going</p>
      </div>
    </div>
  );
}

export function PollResultOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#0f0f0f]/95 border border-white/10 p-3.5 shadow-overlay backdrop-blur-sm">
        <p className="text-[9px] font-semibold tracking-widest text-white/40 uppercase mb-2">Poll results</p>
        <p className="text-xs font-medium text-white mb-3">Which strategy worked best?</p>
        {[
          { label: "Shorts first", pct: 78, color: "#C9A96E" },
          { label: "Long-form first", pct: 22, color: "rgba(255,255,255,0.15)" },
        ].map(({ label, pct, color }) => (
          <div key={label} className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-[10px] text-white/60">{label}</span>
              <span className="text-[10px] font-semibold text-white">{pct}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10">
              <div
                className="h-full rounded-full"
                style={{ width: `${pct}%`, backgroundColor: color }}
              />
            </div>
          </div>
        ))}
        <p className="mt-1 text-[9px] text-white/30">14,820 votes</p>
      </div>
    </div>
  );
}

export function ReactionBubbleOverlay() {
  const reactions = [
    { emoji: "🔥", count: "2.4K" },
    { emoji: "😂", count: "1.1K" },
    { emoji: "💀", count: "847" },
    { emoji: "🤯", count: "634" },
    { emoji: "❤️", count: "521" },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#0f0f0f]/95 border border-white/10 p-3 shadow-overlay backdrop-blur-sm">
        <p className="text-[9px] font-medium text-white/40 mb-2.5">Top reactions · 5,506 total</p>
        <div className="flex flex-wrap gap-1.5">
          {reactions.map(({ emoji, count }) => (
            <div
              key={emoji}
              className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1"
            >
              <span className="text-xs">{emoji}</span>
              <span className="text-[10px] font-medium text-white/60">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BeforeAfterOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] overflow-hidden rounded-lg border border-white/10 shadow-overlay">
        <div className="grid grid-cols-2 divide-x divide-white/10">
          <div className="bg-[#1a1a1a]/95 p-3 backdrop-blur-sm">
            <p className="text-[9px] font-bold tracking-widest text-white/40 uppercase mb-2">Before</p>
            <p className="text-xl font-bold text-white/50">3.2%</p>
            <p className="text-[9px] text-white/30 mt-0.5">CTR</p>
            <p className="mt-2 text-xs font-semibold text-[#F87171]">$840/mo</p>
          </div>
          <div className="bg-[#081808]/95 p-3 backdrop-blur-sm">
            <p className="text-[9px] font-bold tracking-widest text-[#4ADE80] uppercase mb-2">After</p>
            <p className="text-xl font-bold text-white">8.9%</p>
            <p className="text-[9px] text-white/30 mt-0.5">CTR</p>
            <p className="mt-2 text-xs font-semibold text-[#4ADE80]">$24,180/mo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AdSenseRevenueOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-lg bg-[#0f0f0f]/95 border border-[#4285F4]/20 p-3 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-[#4285F4]">
            <span className="text-[9px] font-bold text-white">G</span>
          </div>
          <span className="text-[10px] font-medium text-white/60">AdSense</span>
          <span className="ml-auto text-[9px] text-white/40">Today</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-[9px] text-white/40">Estimated earnings</span>
            <span className="text-xs font-bold text-white">$142.80</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[9px] text-white/40">Page RPM</span>
            <span className="text-[10px] font-semibold text-[#4285F4]">$4.21</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[9px] text-white/40">Impressions</span>
            <span className="text-[10px] text-white/60">33,920</span>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1">
          <TrendingUp className="h-3 w-3 text-[#4ADE80]" />
          <span className="text-[9px] text-[#4ADE80]">+18% vs last week</span>
        </div>
      </div>
    </div>
  );
}

export function PayPalPayoutOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#001435]/95 border border-[#009cde]/20 p-3.5 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#009cde]">
            <span className="text-[10px] font-bold text-white">P</span>
          </div>
          <span className="text-[10px] font-medium text-white/70">PayPal</span>
          <span className="ml-auto rounded-full bg-[#4ADE80]/20 px-1.5 py-0.5 text-[9px] font-medium text-[#4ADE80]">Received</span>
        </div>
        <p className="text-[10px] text-white/40 mb-0.5">You received money from</p>
        <p className="text-xs text-white/80 font-medium mb-2">sponsor@brand.com</p>
        <p className="text-2xl font-bold tracking-tight text-white">$2,450.00</p>
        <p className="mt-1.5 text-[9px] text-white/30">Available in your balance · Just now</p>
      </div>
    </div>
  );
}

export function LiveTickerOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#0f0f0f]/95 border border-white/10 p-3.5 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-[#FF0000]" style={{ animation: "pulse 1.5s infinite" }} />
            <span className="text-[9px] font-semibold tracking-widest text-[#FF0000] uppercase">Live</span>
          </div>
          <span className="text-[9px] text-white/40">Subscribers</span>
        </div>
        <div className="text-center">
          <p className="text-3xl font-black tracking-tighter text-white font-mono">284,719</p>
          <div className="mt-1.5 flex items-center justify-center gap-1">
            <TrendingUp className="h-3 w-3 text-[#4ADE80]" />
            <span className="text-[10px] text-[#4ADE80] font-medium">+847 today</span>
          </div>
        </div>
        <div className="mt-2.5 h-px w-full bg-white/10" />
        <p className="mt-1.5 text-center text-[9px] text-white/30">Updating in real-time</p>
      </div>
    </div>
  );
}

export function OneMilOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[200px] rounded-xl border border-[#C9A96E]/30 p-4 shadow-overlay backdrop-blur-sm text-center" style={{ background: "linear-gradient(135deg, #1a1200 0%, #0f0f0f 100%)" }}>
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A96E]/50" style={{ background: "linear-gradient(135deg, #C9A96E, #8B6914)" }}>
          <span className="text-base">🏆</span>
        </div>
        <p className="text-[9px] font-semibold tracking-widest text-[#C9A96E] uppercase mb-1">Milestone</p>
        <p className="text-3xl font-black tracking-tighter text-white">1M</p>
        <p className="text-xs text-[#C9A96E]/80 font-medium">Subscribers</p>
        <div className="mt-2.5 flex justify-center gap-1">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-1 w-6 rounded-full bg-[#C9A96E]/40" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function WeeklyGainOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-lg bg-[#0f0f0f]/95 border border-white/10 p-3 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-medium text-white/60">This week</span>
          <span className="rounded-full bg-[#4ADE80]/15 px-1.5 py-0.5 text-[9px] font-medium text-[#4ADE80]">+24%</span>
        </div>
        <div className="flex items-end gap-2 mb-3">
          <span className="text-2xl font-bold tracking-tight text-white">+12,480</span>
          <span className="mb-0.5 text-xs text-white/50">subs</span>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <p className="text-[9px] text-white/30">Last week</p>
            <p className="text-xs text-white/50 font-medium">+10,040</p>
          </div>
          <div className="h-6 w-px bg-white/10" />
          <div>
            <p className="text-[9px] text-white/30">Best day</p>
            <p className="text-xs text-white/50 font-medium">+2,847</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ViewsMilestoneOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[210px] rounded-xl bg-[#0f0f0f]/95 border border-white/10 p-4 shadow-overlay backdrop-blur-sm text-center">
        <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#60A5FA] to-[#3B82F6]">
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-white" style={{ height: "18px", width: "18px" }}>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <p className="text-[9px] font-semibold tracking-widest text-[#60A5FA] uppercase mb-1">Views milestone</p>
        <p className="text-2xl font-black tracking-tighter text-white">10M</p>
        <p className="text-xs text-white/50">Total views</p>
        <div className="mt-3 rounded-lg bg-white/5 px-3 py-1.5">
          <p className="text-[9px] text-[#4ADE80]">🎉 Reached in 8 months</p>
        </div>
      </div>
    </div>
  );
}

export function ChannelStatsOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-lg bg-[#0f0f0f]/95 border border-white/10 p-3 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-[#FF0000]" />
          <span className="text-[10px] font-medium text-white/60">Channel overview</span>
        </div>
        <div className="grid grid-cols-3 gap-1 text-center">
          <div className="rounded-md bg-white/5 p-2">
            <p className="text-sm font-bold text-white">2.4M</p>
            <p className="text-[8px] text-white/40 mt-0.5">Views</p>
          </div>
          <div className="rounded-md bg-white/5 p-2">
            <p className="text-sm font-bold text-white">284K</p>
            <p className="text-[8px] text-white/40 mt-0.5">Subs</p>
          </div>
          <div className="rounded-md bg-white/5 p-2">
            <p className="text-sm font-bold text-white">41K</p>
            <p className="text-[8px] text-white/40 mt-0.5">Hours</p>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1">
          <TrendingUp className="h-3 w-3 text-[#4ADE80]" />
          <span className="text-[9px] text-[#4ADE80]">All-time best month</span>
        </div>
      </div>
    </div>
  );
}

export function BreakingNewsOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] overflow-hidden rounded-lg shadow-overlay">
        <div className="bg-[#CC0000] px-3 py-1.5 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-white" style={{ animation: "pulse 1s infinite" }} />
          <span className="text-[10px] font-black tracking-widest text-white uppercase">Breaking</span>
        </div>
        <div className="bg-[#0f0f0f]/95 border border-t-0 border-white/10 p-3 backdrop-blur-sm">
          <p className="text-sm font-bold text-white leading-snug mb-1.5">YouTube changes the algorithm — again</p>
          <p className="text-[10px] text-white/50">Shorts creators impacted first · 2 hours ago</p>
          <div className="mt-2.5 h-px w-full bg-white/10" />
          <p className="mt-2 text-[9px] text-white/30">Channel News · Live coverage</p>
        </div>
      </div>
    </div>
  );
}

export function NotificationCardOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#0a0f1a]/95 border border-[#60A5FA]/20 p-3.5 shadow-overlay backdrop-blur-sm">
        <div className="flex gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#60A5FA]/15 border border-[#60A5FA]/20">
            <span className="text-sm">📢</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-white mb-0.5">Important update</p>
            <p className="text-[10px] text-white/50 leading-relaxed">Your video just crossed 1M impressions this week.</p>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[9px] text-white/30">Just now · YouTube Studio</span>
          <span className="rounded-full bg-[#60A5FA]/15 px-2 py-0.5 text-[9px] text-[#60A5FA]">New</span>
        </div>
      </div>
    </div>
  );
}

export function TwitterCardOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#0f0f0f]/95 border border-white/10 p-3 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#60A5FA] to-[#3B82F6]" />
          <div>
            <p className="text-[10px] font-semibold text-white">YourChannel</p>
            <p className="text-[9px] text-white/40">@yourchannel</p>
          </div>
          <div className="ml-auto">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-white/40">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
        </div>
        <p className="text-[10px] text-white/80 leading-relaxed mb-2.5">This one video made $24K in a single month. Here&apos;s the exact framework I used 🧵</p>
        <div className="flex items-center gap-3 text-white/40">
          <span className="text-[9px]">💬 847</span>
          <span className="text-[9px]">🔁 2.4K</span>
          <span className="text-[9px]">❤️ 18.2K</span>
          <span className="text-[9px]">👁 421K</span>
        </div>
      </div>
    </div>
  );
}

export function TikTokFYPOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[200px] rounded-xl bg-[#010101]/95 border border-white/10 p-3.5 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-[#010101] border border-white/20">
              <span className="text-[10px] font-bold text-white">T</span>
            </div>
            <span className="text-[10px] font-medium text-white/70">TikTok</span>
          </div>
          <span className="rounded-full bg-[#FF2D55]/15 px-1.5 py-0.5 text-[9px] font-semibold text-[#FF2D55]">FYP</span>
        </div>
        <div className="flex items-end gap-2 mb-2">
          <span className="text-2xl font-black tracking-tight text-white">4.8M</span>
          <span className="mb-0.5 text-xs text-white/50">views</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-[10px] text-white/50">❤️ 847K</span>
          <span className="text-[10px] text-white/50">💬 12.4K</span>
          <span className="text-[10px] text-white/50">↗️ 84K</span>
        </div>
      </div>
    </div>
  );
}

export function DigitalSaleOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#0f0f0f]/95 border border-[#4ADE80]/20 p-3.5 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#4ADE80]/15">
            <span className="text-sm">💰</span>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-white">New sale!</p>
            <p className="text-[9px] text-white/40">Gumroad · Just now</p>
          </div>
          <span className="ml-auto text-base font-black text-[#4ADE80]">$97</span>
        </div>
        <div className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-2">
          <p className="text-[10px] font-medium text-white/80 truncate">YouTube Growth Blueprint</p>
          <p className="text-[9px] text-white/40 mt-0.5">Digital download · Instant delivery</p>
        </div>
        <p className="mt-2 text-[9px] text-white/30">Total sales today: $2,134</p>
      </div>
    </div>
  );
}

export function CourseEnrollmentOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-lg bg-[#0f0f0f]/95 border border-white/10 p-3 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-sm">🎓</span>
          <span className="text-[10px] font-medium text-white/60">Enrollment</span>
          <span className="ml-auto rounded-full bg-[#4ADE80]/15 px-1.5 py-0.5 text-[9px] text-[#4ADE80] font-medium">Open</span>
        </div>
        <div className="flex items-end gap-2 mb-1">
          <span className="text-2xl font-bold text-white">847</span>
          <span className="mb-0.5 text-xs text-white/50">students</span>
        </div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] text-white/40">Goal: 1,000 seats</span>
          <span className="text-[9px] font-semibold text-[#C9A96E]">84.7%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-white/10">
          <div className="h-full rounded-full" style={{ width: "84.7%", background: "linear-gradient(90deg, #C9A96E, #FBBF24)" }} />
        </div>
        <p className="mt-1.5 text-[9px] text-white/30">153 seats remaining</p>
      </div>
    </div>
  );
}

export function WatchTimeOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-lg bg-[#0f0f0f]/95 border border-white/10 p-3 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-medium text-white/60">Watch time</span>
          <span className="text-[9px] text-white/40">Last 28 days</span>
        </div>
        <div className="flex items-end gap-2 mb-3">
          <span className="text-xl font-bold text-white">41,280</span>
          <span className="mb-0.5 text-xs text-white/50">hours</span>
          <span className="mb-0.5 ml-auto text-xs text-[#4ADE80] font-medium">+31%</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between text-[9px]">
            <span className="text-white/40">Avg. view duration</span>
            <span className="text-white/70 font-medium">6:42</span>
          </div>
          <div className="flex justify-between text-[9px]">
            <span className="text-white/40">% viewed</span>
            <span className="text-white/70 font-medium">58.4%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ImpressionsOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-lg bg-[#0f0f0f]/95 border border-white/10 p-3 shadow-overlay backdrop-blur-sm">
        <p className="text-[10px] font-medium text-white/60 mb-3">Impressions funnel</p>
        {[
          { label: "Impressions", value: "284K", w: "100%", color: "#818CF8" },
          { label: "Clicks (CTR 8.4%)", value: "23.8K", w: "65%", color: "#60A5FA" },
          { label: "Views", value: "21.4K", w: "42%", color: "#4ADE80" },
        ].map(({ label, value, w, color }) => (
          <div key={label} className="mb-2">
            <div className="flex justify-between mb-1">
              <span className="text-[9px] text-white/40">{label}</span>
              <span className="text-[9px] font-semibold text-white">{value}</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10">
              <div className="h-full rounded-full" style={{ width: w, backgroundColor: color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HundredDayChallengeOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[200px] rounded-xl bg-[#0f0f0f]/95 border border-white/10 p-3.5 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm">🔥</span>
          <span className="text-[10px] font-semibold text-white/60">100-Day Challenge</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
              <circle cx="28" cy="28" r="24" fill="none" stroke="#FB923C" strokeWidth="4" strokeDasharray="150.8" strokeDashoffset="45.2" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-black text-white">70%</span>
          </div>
          <div>
            <p className="text-xl font-black text-white">Day 70</p>
            <p className="text-[9px] text-white/40">of 100</p>
            <p className="text-[9px] text-[#FB923C] font-medium mt-1">30 days left</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WeeklyStreakOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[200px] rounded-xl bg-[#0f0f0f]/95 border border-[#FB923C]/25 p-4 shadow-overlay backdrop-blur-sm text-center" style={{ background: "linear-gradient(145deg, #160900 0%, #0f0f0f 100%)" }}>
        <div className="text-3xl mb-1">🔥</div>
        <p className="text-3xl font-black tracking-tighter text-white">24</p>
        <p className="text-xs font-semibold text-[#FB923C]">Week Streak</p>
        <p className="mt-1.5 text-[9px] text-white/40">Upload every week · Don&apos;t break it</p>
        <div className="mt-3 flex justify-center gap-1">
          {[...Array(7)].map((_, i) => (
            <div key={i} className={`h-1.5 w-4 rounded-full ${i < 5 ? "bg-[#FB923C]" : "bg-white/10"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function OldVsNewOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] overflow-hidden rounded-lg shadow-overlay">
        <div className="grid grid-cols-2">
          <div className="bg-[#1a1a1a]/95 border border-white/10 p-3 backdrop-blur-sm">
            <p className="text-[9px] font-bold tracking-widest text-white/30 uppercase mb-2">Old method</p>
            <p className="text-lg font-bold text-white/50">$840</p>
            <p className="text-[9px] text-white/30 mt-0.5">per month</p>
            <p className="mt-2 text-[9px] text-[#F87171]">6 months work</p>
          </div>
          <div className="bg-[#081808]/95 border border-[#4ADE80]/20 p-3 backdrop-blur-sm">
            <p className="text-[9px] font-bold tracking-widest text-[#4ADE80] uppercase mb-2">New method</p>
            <p className="text-lg font-bold text-white">$24,180</p>
            <p className="text-[9px] text-white/30 mt-0.5">per month</p>
            <p className="mt-2 text-[9px] text-[#4ADE80]">Same 6 months</p>
          </div>
        </div>
        <div className="bg-[#0f0f0f]/95 border border-t-0 border-white/10 px-3 py-1.5 text-center backdrop-blur-sm">
          <span className="text-[9px] text-white/40">+2,776% improvement</span>
        </div>
      </div>
    </div>
  );
}

export function ProductScoreOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[200px] rounded-xl bg-[#0f0f0f]/95 border border-white/10 p-4 shadow-overlay backdrop-blur-sm">
        <p className="text-[9px] font-medium text-white/40 mb-3">Product score</p>
        <div className="flex items-center gap-3">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="24" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
              <circle cx="28" cy="28" r="24" fill="none" stroke="#C9A96E" strokeWidth="4" strokeDasharray="150.8" strokeDashoffset="24" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-black text-white">8.7</span>
          </div>
          <div>
            <p className="text-xs text-white/40">out of 10</p>
            <div className="mt-1 flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 12 12" className={`h-3 w-3 ${i < 4 ? "fill-[#C9A96E]" : "fill-white/10"}`}>
                  <path d="M6 0l1.5 4H12l-3.7 2.7 1.4 4.3L6 8.4l-3.7 2.6 1.4-4.3L0 4h4.5z" />
                </svg>
              ))}
            </div>
            <p className="mt-1 text-[9px] text-white/30">1,284 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppStoreRatingOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#0f0f0f]/95 border border-white/10 p-3 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] flex items-center justify-center">
            <span className="text-sm">📱</span>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-white">App Store</p>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 12 12" className="h-2.5 w-2.5 fill-[#FBBF24]">
                  <path d="M6 0l1.5 4H12l-3.7 2.7 1.4 4.3L6 8.4l-3.7 2.6 1.4-4.3L0 4h4.5z" />
                </svg>
              ))}
            </div>
          </div>
          <span className="ml-auto text-xl font-black text-white">4.9</span>
        </div>
        {[
          { stars: 5, pct: 82 },
          { stars: 4, pct: 12 },
          { stars: 3, pct: 4 },
        ].map(({ stars, pct }) => (
          <div key={stars} className="flex items-center gap-1.5 mb-1">
            <span className="text-[8px] text-white/40 w-4">{stars}★</span>
            <div className="flex-1 h-1 rounded-full bg-white/10">
              <div className="h-full rounded-full bg-[#FBBF24]" style={{ width: `${pct}%` }} />
            </div>
            <span className="text-[8px] text-white/40 w-5 text-right">{pct}%</span>
          </div>
        ))}
        <p className="mt-1.5 text-[9px] text-white/30">18,420 ratings</p>
      </div>
    </div>
  );
}

export function EventCountdownOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#0a0a1a]/95 border border-[#818CF8]/25 p-3.5 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="h-1.5 w-1.5 rounded-full bg-[#818CF8]" style={{ animation: "pulse 2s infinite" }} />
          <span className="text-[9px] font-semibold tracking-widest text-[#818CF8] uppercase">Live in</span>
        </div>
        <div className="flex items-center gap-1.5 mb-3">
          {[
            { val: "02", label: "Days" },
            { val: "14", label: "Hrs" },
            { val: "33", label: "Min" },
          ].map(({ val, label }, i) => (
            <div key={i} className="flex flex-col items-center flex-1">
              <div className="w-full flex h-9 items-center justify-center rounded-lg border border-[#818CF8]/20 bg-[#151530]">
                <span className="font-mono text-lg font-black text-white">{val}</span>
              </div>
              <span className="mt-1 text-[7px] tracking-wider text-white/30">{label}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-[9px] text-white/50 font-medium">Creator Summit 2026</p>
      </div>
    </div>
  );
}

export function StreamGoLiveOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[200px] rounded-xl bg-[#0f0f0f]/95 border border-[#FF0000]/20 p-4 shadow-overlay backdrop-blur-sm text-center">
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <div className="h-2 w-2 rounded-full bg-[#FF0000]" style={{ animation: "pulse 1s infinite" }} />
          <span className="text-[10px] font-black tracking-widest text-[#FF0000] uppercase">Going Live</span>
        </div>
        <p className="text-2xl font-black text-white mb-0.5">4:20:00</p>
        <p className="text-[9px] text-white/50 mb-3">Hours · Min · Sec</p>
        <div className="rounded-lg border border-[#FF0000]/20 bg-[#FF0000]/10 px-3 py-1.5">
          <p className="text-[10px] font-semibold text-[#FF0000]">🎮 Sunday Stream</p>
        </div>
      </div>
    </div>
  );
}

export function CommunityVoteOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#0f0f0f]/95 border border-white/10 p-3.5 shadow-overlay backdrop-blur-sm">
        <p className="text-[9px] font-semibold tracking-widest text-white/40 uppercase mb-2">Community vote</p>
        <p className="text-xs font-medium text-white mb-3">Long-form vs Shorts — what performs better?</p>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-[10px] font-semibold text-white">Long-form</span>
              <span className="text-[10px] font-black text-[#4ADE80]">73%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10">
              <div className="h-full rounded-full bg-[#4ADE80]" style={{ width: "73%" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-[10px] text-white/60">Shorts</span>
              <span className="text-[10px] font-semibold text-white/50">27%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10">
              <div className="h-full rounded-full bg-white/20" style={{ width: "27%" }} />
            </div>
          </div>
        </div>
        <p className="mt-2 text-[9px] text-white/30">24,180 votes · 6h left</p>
      </div>
    </div>
  );
}

export function LiveChatOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4">
      <div className="w-full max-w-[220px] rounded-xl bg-[#0f0f0f]/95 border border-white/10 p-3 shadow-overlay backdrop-blur-sm">
        <div className="flex items-center gap-1.5 mb-2.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#FF0000]" style={{ animation: "pulse 1s infinite" }} />
          <span className="text-[9px] font-semibold tracking-widest text-white/50 uppercase">Live chat</span>
        </div>
        <div className="space-y-1.5">
          {[
            { user: "alex_creates", color: "#60A5FA", msg: "this is insane 🤯" },
            { user: "mk_designs", color: "#4ADE80", msg: "bro I needed this tutorial" },
            { user: "sarah_yt", color: "#E879F9", msg: "first time watching, subscribed!" },
          ].map(({ user, color, msg }) => (
            <div key={user} className="flex items-start gap-1.5">
              <div className="mt-0.5 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: color }} />
              <p className="text-[9px] leading-relaxed">
                <span className="font-semibold" style={{ color }}>{user} </span>
                <span className="text-white/60">{msg}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="mt-2 rounded-lg bg-white/5 px-2 py-1 text-center">
          <p className="text-[8px] text-white/30">2,847 viewers · 12K messages</p>
        </div>
      </div>
    </div>
  );
}

// ─── Asset Card with Members Only hover ──────────────────────────────────────

export type OverlayType =
  | "revenue"
  | "payout"
  | "milestone"
  | "shopify"
  | "ctr"
  | "instagram"
  | "growth"
  | "alert"
  | "bestworst"
  | "rating"
  | "countdown"
  | "challenge"
  | "poll"
  | "reaction"
  | "beforeafter"
  | "adsense"
  | "paypal"
  | "liveticker"
  | "onemil"
  | "weeklygain"
  | "viewsmilestone"
  | "channelstats"
  | "breakingnews"
  | "notificationcard"
  | "twittercard"
  | "tiktokfyp"
  | "digitalsale"
  | "courseenrollment"
  | "watchtime"
  | "impressions"
  | "hundredday"
  | "weeklystreak"
  | "oldvsnew"
  | "productscore"
  | "appstorerating"
  | "eventcountdown"
  | "streamlive"
  | "communityvote"
  | "livechat";

const overlayMap: Record<OverlayType, () => React.ReactElement> = {
  revenue: YouTubeRevenueOverlay,
  payout: StripePayoutOverlay,
  milestone: SubscriberMilestoneOverlay,
  shopify: ShopifySalesOverlay,
  ctr: CTRAnalyticsOverlay,
  instagram: InstagramAlertOverlay,
  growth: GrowthChartOverlay,
  alert: AlertBannerOverlay,
  bestworst: BestWorstOverlay,
  rating: RatingStarsOverlay,
  countdown: CountdownTimerOverlay,
  challenge: ChallengeProgressOverlay,
  poll: PollResultOverlay,
  reaction: ReactionBubbleOverlay,
  beforeafter: BeforeAfterOverlay,
  adsense: AdSenseRevenueOverlay,
  paypal: PayPalPayoutOverlay,
  liveticker: LiveTickerOverlay,
  onemil: OneMilOverlay,
  weeklygain: WeeklyGainOverlay,
  viewsmilestone: ViewsMilestoneOverlay,
  channelstats: ChannelStatsOverlay,
  breakingnews: BreakingNewsOverlay,
  notificationcard: NotificationCardOverlay,
  twittercard: TwitterCardOverlay,
  tiktokfyp: TikTokFYPOverlay,
  digitalsale: DigitalSaleOverlay,
  courseenrollment: CourseEnrollmentOverlay,
  watchtime: WatchTimeOverlay,
  impressions: ImpressionsOverlay,
  hundredday: HundredDayChallengeOverlay,
  weeklystreak: WeeklyStreakOverlay,
  oldvsnew: OldVsNewOverlay,
  productscore: ProductScoreOverlay,
  appstorerating: AppStoreRatingOverlay,
  eventcountdown: EventCountdownOverlay,
  streamlive: StreamGoLiveOverlay,
  communityvote: CommunityVoteOverlay,
  livechat: LiveChatOverlay,
};

const overlayLabels: Record<OverlayType, string> = {
  revenue: "Revenue",
  payout: "Commerce",
  milestone: "Subscribers",
  shopify: "Commerce",
  ctr: "Analytics",
  instagram: "Social",
  growth: "Growth",
  alert: "Alerts",
  bestworst: "Comparisons",
  rating: "Ratings",
  countdown: "Timers",
  challenge: "Challenges",
  poll: "Reactions",
  reaction: "Reactions",
  beforeafter: "Comparisons",
  adsense: "Revenue",
  paypal: "Commerce",
  liveticker: "Live",
  onemil: "Milestones",
  weeklygain: "Growth",
  viewsmilestone: "Milestones",
  channelstats: "Analytics",
  breakingnews: "Alerts",
  notificationcard: "Notifications",
  twittercard: "Social",
  tiktokfyp: "Social",
  digitalsale: "Commerce",
  courseenrollment: "Education",
  watchtime: "Analytics",
  impressions: "Analytics",
  hundredday: "Challenges",
  weeklystreak: "Challenges",
  oldvsnew: "Comparisons",
  productscore: "Ratings",
  appstorerating: "Ratings",
  eventcountdown: "Timers",
  streamlive: "Live",
  communityvote: "Reactions",
  livechat: "Live",
};

const overlayColors: Record<OverlayType, string> = {
  revenue: "bg-red-500/15 text-red-400",
  payout: "bg-indigo-500/15 text-indigo-400",
  milestone: "bg-red-500/15 text-red-400",
  shopify: "bg-lime-500/15 text-lime-400",
  ctr: "bg-amber-500/15 text-amber-400",
  instagram: "bg-purple-500/15 text-purple-400",
  growth: "bg-emerald-500/15 text-emerald-400",
  alert: "bg-yellow-500/15 text-yellow-400",
  bestworst: "bg-sky-500/15 text-sky-400",
  rating: "bg-amber-500/15 text-amber-400",
  countdown: "bg-violet-500/15 text-violet-400",
  challenge: "bg-orange-500/15 text-orange-400",
  poll: "bg-pink-500/15 text-pink-400",
  reaction: "bg-rose-500/15 text-rose-400",
  beforeafter: "bg-teal-500/15 text-teal-400",
  adsense: "bg-blue-500/15 text-blue-400",
  paypal: "bg-cyan-500/15 text-cyan-400",
  liveticker: "bg-red-500/15 text-red-400",
  onemil: "bg-yellow-500/15 text-yellow-400",
  weeklygain: "bg-emerald-500/15 text-emerald-400",
  viewsmilestone: "bg-blue-500/15 text-blue-400",
  channelstats: "bg-red-500/15 text-red-400",
  breakingnews: "bg-red-600/15 text-red-500",
  notificationcard: "bg-sky-500/15 text-sky-400",
  twittercard: "bg-slate-500/15 text-slate-400",
  tiktokfyp: "bg-rose-500/15 text-rose-400",
  digitalsale: "bg-emerald-500/15 text-emerald-400",
  courseenrollment: "bg-amber-500/15 text-amber-400",
  watchtime: "bg-indigo-500/15 text-indigo-400",
  impressions: "bg-violet-500/15 text-violet-400",
  hundredday: "bg-orange-500/15 text-orange-400",
  weeklystreak: "bg-orange-500/15 text-orange-400",
  oldvsnew: "bg-teal-500/15 text-teal-400",
  productscore: "bg-yellow-500/15 text-yellow-400",
  appstorerating: "bg-yellow-500/15 text-yellow-400",
  eventcountdown: "bg-violet-500/15 text-violet-400",
  streamlive: "bg-red-500/15 text-red-400",
  communityvote: "bg-emerald-500/15 text-emerald-400",
  livechat: "bg-red-500/15 text-red-400",
};

interface AssetCardProps {
  overlayType: OverlayType;
  title: string;
  className?: string;
}

export function AssetCard({ overlayType, title, className }: AssetCardProps) {
  const OverlayComponent = overlayMap[overlayType];

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border bg-base-elevated aspect-[16/10] transition-colors duration-200 hover:border-border-strong",
        className
      )}
    >
      {/* Thumbnail background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d] via-[#111] to-[#1a1a1a]" />

      {/* Subtle texture lines suggesting thumbnail content */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end gap-1.5 opacity-20">
        <div className="h-2 w-3/4 rounded bg-white/20" />
        <div className="h-1.5 w-1/2 rounded bg-white/15" />
      </div>

      {/* Platform signal overlay */}
      <OverlayComponent />

      {/* Category badge */}
      <div className="absolute top-2.5 left-2.5">
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px] font-medium",
            overlayColors[overlayType]
          )}
        >
          {overlayLabels[overlayType]}
        </span>
      </div>

      {/* Members only lock overlay — revealed on hover */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pb-8 opacity-0 backdrop-blur-[8px] transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.82) 100%)" }}>
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
          <Lock className="h-3.5 w-3.5 text-white/60" strokeWidth={1.5} />
        </div>
        <div className="text-center">
          <p className="text-[11px] font-semibold tracking-widest text-white/80 uppercase">Members only</p>
          <p className="mt-1 text-[10px] text-white/35 tracking-wide">Subscribe to unlock</p>
        </div>
      </div>

      {/* Bottom meta bar */}
      <div className="absolute bottom-0 inset-x-0 border-t border-white/5 bg-black/50 px-3 py-2 backdrop-blur-sm">
        <p className="truncate text-xs font-medium text-white/60">{title}</p>
      </div>
    </div>
  );
}
