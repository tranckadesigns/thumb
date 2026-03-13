"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  raw: string;
  label: string;
}

function AnimatedStat({ raw, label }: AnimatedStatProps) {
  const [displayed, setDisplayed] = useState("0");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const prefix = raw.startsWith("~") ? "~" : "";
    const numStr = raw.replace(/^~/, "").replace(/[^0-9,]/g, "").replace(/,/g, "");
    const suffix = raw.replace(/^~?[\d,]+/, "");
    const target = parseInt(numStr, 10);

    if (isNaN(target)) {
      setDisplayed(raw);
      return;
    }

    const duration = 1600;
    const startTime = performance.now();

    function tick(now: number) {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(eased * target);
      const formatted = current >= 1000 ? current.toLocaleString() : String(current);
      setDisplayed(prefix + formatted + suffix);
      if (t < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [raw]);

  return (
    <div className="flex flex-col items-center px-6 py-8 text-center">
      <span className="text-2xl font-semibold tracking-tightest text-content-primary tabular-nums">
        {displayed}
      </span>
      <span className="mt-1 text-xs text-content-muted">{label}</span>
    </div>
  );
}

export function StatsStrip() {
  const stats = [
    { raw: "180+", label: "PSD assets" },
    { raw: "12",   label: "Categories" },
    { raw: "1,200+", label: "Creators" },
    { raw: "~60s", label: "Avg. edit time" },
  ];

  return (
    <div className="border-y border-border bg-base-surface">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 divide-x divide-y divide-border md:grid-cols-4 md:divide-y-0">
          {stats.map((s) => (
            <AnimatedStat key={s.label} raw={s.raw} label={s.label} />
          ))}
        </div>
      </div>
    </div>
  );
}
