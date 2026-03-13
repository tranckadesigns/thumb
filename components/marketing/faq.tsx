"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const faqs = [
  {
    q: "Do I need Adobe Photoshop?",
    a: "Yes — these are fully layered .PSD files designed for Adobe Photoshop CC and above. Most assets also open in Affinity Photo, though layer compatibility may vary.",
  },
  {
    q: "What exactly is a PSD overlay?",
    a: "A PSD overlay is a Photoshop file you place on top of your thumbnail photo. It's pre-designed to look like a real platform notification — revenue card, subscriber milestone, countdown timer, and more. You swap in your numbers and export. Done.",
  },
  {
    q: "How long does it take to customize an asset?",
    a: "Under 60 seconds for most assets. Click the text layer, type your number, export. Every layer is clearly named so there's no hunting around.",
  },
  {
    q: "Do I need design experience?",
    a: "None. If you can click a layer and type a number, you can use any asset in the library. These are built for creators, not designers.",
  },
  {
    q: "Can I use these commercially — in sponsored videos or for clients?",
    a: "Yes. Every subscription includes a full commercial license. Use the assets in your own YouTube content, for clients, or in any monetized video.",
  },
  {
    q: "How often are new assets added?",
    a: "New assets are added every month across all 12 categories. Everything added while your subscription is active is yours automatically — no extra cost, no extra steps.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no lock-in. Cancel from your account page whenever you want. You keep full access until the end of your billing period.",
  },
  {
    q: "What's the difference between monthly and yearly?",
    a: "Same full access either way. Yearly is billed once and works out significantly cheaper per month. Most serious creators go yearly.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="border-t border-border bg-base-surface px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-medium tracking-widest text-content-muted uppercase">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-content-primary md:text-4xl">
            Questions answered.
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden border border-border bg-base-elevated transition-colors duration-200 hover:border-border-strong"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm font-medium text-content-primary pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-content-muted transition-transform duration-200",
                    open === i && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  open === i ? "max-h-48" : "max-h-0"
                )}
              >
                <p className="px-6 pb-5 text-sm leading-relaxed text-content-secondary">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
