"use client";

import { useEffect, useState } from "react";
import { Layers, Type, MousePointer2, Sliders } from "lucide-react";

// ─── Phase config ─────────────────────────────────────────────────────────────
//
// 0  idle        cursor hovers over canvas overlay (arrow)
// 1  hover-layer cursor moves to "Revenue Value" in layers panel
// 2  text-tool   cursor moves back to canvas text, switches to I-beam
// 3  selected    double-click — text highlighted blue
// 4  typing      new value being typed
// 5  to-font     cursor moves up to font size in options bar
// 6  font-change font size updates 18 → 22, text grows in canvas
// 7  done        cursor retreats, final state shown

const DURATIONS = [1500, 700, 550, 450, 1450, 650, 650, 2100];
const TOTAL = 8;

// [left%, top%] relative to the content container (everything below title bar)
const CURSOR: { left: string; top: string }[] = [
  { left: "34%",  top: "53%" }, // 0  idle — on canvas overlay
  { left: "80%",  top: "59%" }, // 1  hover layer in panel
  { left: "29%",  top: "48%" }, // 2  I-beam on canvas text
  { left: "29%",  top: "48%" }, // 3  text selected
  { left: "29%",  top: "48%" }, // 4  typing
  { left: "20%",  top: "5%"  }, // 5  options bar — font size
  { left: "20%",  top: "5%"  }, // 6  font change
  { left: "45%",  top: "43%" }, // 7  done — moved away
];

const STATUS = [
  "Select: Move Tool",
  "Layers — hover: Revenue Value",
  "T  Text Tool — double-click to edit",
  "Text Tool — layer selected",
  "Editing: Revenue Value",
  "Options bar — Font Size",
  "Font Size: 18pt → 22pt",
  "Select: Move Tool",
];

// ─── Cursor SVGs ──────────────────────────────────────────────────────────────

function ArrowCursor() {
  return (
    <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
      <path
        d="M1.5 1.5L1.5 13.5L4.2 10.2L6.8 15.8L8.5 15L5.9 9.5L10 9.5L1.5 1.5Z"
        fill="white"
        stroke="rgba(0,0,0,0.55)"
        strokeWidth="0.9"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IBeamCursor() {
  return (
    <svg width="10" height="20" viewBox="0 0 10 20" fill="none">
      <line x1="5" y1="0" x2="5" y2="20" stroke="white" strokeWidth="1.5" />
      <line x1="1.5" y1="0.75"  x2="8.5" y2="0.75"  stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="1.5" y1="19.25" x2="8.5" y2="19.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ─── Layer row ────────────────────────────────────────────────────────────────

function LayerRow({
  label,
  type,
  state = "default",
  indent = false,
}: {
  label: string;
  type: "group" | "text" | "shape" | "fx";
  state?: "default" | "hovered" | "selected";
  indent?: boolean;
}) {
  const icon =
    type === "group" ? "▸" : type === "text" ? "T" : type === "fx" ? "fx" : "□";

  const bg =
    state === "selected" ? "bg-[#2D6BE4] text-white" :
    state === "hovered"  ? "bg-white/10 text-white/75" :
    "text-white/40";

  return (
    <div className={`flex items-center gap-1.5 rounded px-2 py-1 transition-all duration-200 ${bg} ${indent ? "pl-5" : ""}`}>
      <span className="w-3 text-center font-mono text-[9px]">{icon}</span>
      <span className="text-[10px] font-medium truncate">{label}</span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function PsdShowcase() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t = setTimeout(
      () => setPhase((p) => (p + 1) % TOTAL),
      DURATIONS[phase]
    );
    return () => clearTimeout(t);
  }, [phase]);

  // Derived state
  const isTextTool    = phase >= 2 && phase <= 4;
  const isHoverLayer  = phase === 1;
  const isLayerSelect = phase >= 2 && phase <= 4;
  const isSelected    = phase === 3;
  const isTyping      = phase === 4;
  const isFontZone    = phase === 5 || phase === 6;
  const showNewValue  = phase >= 4;
  const showNewFont   = phase >= 6;

  const displayValue = showNewValue ? "$24,180" : "$2,140";
  const displayFont  = showNewFont  ? "22"       : "18";

  return (
    <section className="border-t border-border-subtle px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* ── Left: copy ── */}
          <div>
            <p className="mb-4 text-xs font-medium tracking-widest text-content-muted uppercase">
              Fully editable PSD
            </p>
            <h2 className="text-3xl font-semibold tracking-tighter text-content-primary md:text-4xl">
              Your numbers.
              <br />
              <span className="text-accent">Swap in seconds.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-content-secondary">
              Every asset ships as a fully layered Adobe Photoshop file. Change
              any number, color, or text in seconds — no design experience
              required.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                { icon: Layers,       text: "Fully layered — every element on its own layer" },
                { icon: Type,         text: "Editable text — swap numbers and labels instantly" },
                { icon: Sliders,      text: "Smart objects — resize without losing quality" },
                { icon: MousePointer2, text: "Click, type, export — done in under 60 seconds" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-accent/10">
                    <Icon className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm text-content-secondary">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: animated Photoshop mockup ── */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border bg-[#1C1C1E] shadow-overlay">

              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-white/5 bg-[#2C2C2E] px-3 py-2">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="ml-2 font-medium text-[10px] text-white/30">
                  revenue-overlay-v2.psd @ 100%
                </span>
              </div>

              {/* === Content container — cursor is positioned here === */}
              <div className="relative">

                {/* Animated cursor */}
                <div
                  className="pointer-events-none absolute z-20 transition-all duration-500 ease-in-out"
                  style={{ left: CURSOR[phase].left, top: CURSOR[phase].top }}
                >
                  {isTextTool ? <IBeamCursor /> : <ArrowCursor />}
                </div>

                {/* Options bar */}
                <div className="flex items-center gap-1.5 border-b border-white/5 bg-[#2C2C2E] px-3 py-1.5">
                  {/* Active tool label */}
                  <span
                    className={`w-4 text-center text-[10px] font-bold transition-colors duration-200 ${
                      isTextTool ? "text-[#C9A96E]" : "text-white/35"
                    }`}
                  >
                    {isTextTool ? "T" : "V"}
                  </span>
                  <div className="h-3 w-px bg-white/10" />
                  {/* Font family */}
                  <span
                    className={`rounded px-1.5 py-0.5 text-[9px] transition-all duration-200 ${
                      isTextTool ? "bg-white/10 text-white/60" : "bg-white/5 text-white/25"
                    }`}
                  >
                    Inter
                  </span>
                  {/* Font size — lights up in phase 5-6 */}
                  <span
                    className={`rounded px-1.5 py-0.5 text-[9px] font-semibold transition-all duration-200 ${
                      isFontZone
                        ? "bg-[#0066FF]/40 text-white outline outline-1 outline-[#0066FF]"
                        : isTextTool
                        ? "bg-white/10 text-white/60"
                        : "bg-white/5 text-white/25"
                    }`}
                  >
                    {displayFont}pt
                  </span>
                  {/* Bold / Italic */}
                  <span
                    className={`rounded px-1.5 py-0.5 text-[9px] font-bold transition-colors duration-200 ${
                      isTextTool ? "bg-white/10 text-white/55" : "bg-white/5 text-white/20"
                    }`}
                  >
                    B
                  </span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[9px] italic transition-colors duration-200 ${
                      isTextTool ? "bg-white/10 text-white/40" : "bg-white/5 text-white/15"
                    }`}
                  >
                    I
                  </span>
                  <div className="mx-0.5 h-3 w-px bg-white/10" />
                  {/* Alignment icons (decoration) */}
                  <span className="text-[9px] text-white/15">≡</span>
                  <span className="text-[9px] text-white/10">≡</span>
                </div>

                {/* Main row: toolbar + canvas + layers */}
                <div className="flex min-h-[220px]">

                  {/* Left toolbar */}
                  <div className="flex w-7 flex-col items-center gap-0.5 border-r border-white/5 bg-[#2C2C2E] py-2">
                    {/* Move/Select */}
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded transition-all duration-200 ${
                        !isTextTool ? "bg-[#C9A96E]/15" : ""
                      }`}
                    >
                      <svg width="9" height="11" viewBox="0 0 14 18" fill="none">
                        <path
                          d="M1.5 1.5L1.5 13.5L4.2 10.2L6.8 15.8L8.5 15L5.9 9.5L10 9.5L1.5 1.5Z"
                          fill={!isTextTool ? "#C9A96E" : "rgba(255,255,255,0.25)"}
                        />
                      </svg>
                    </div>
                    {/* Text tool */}
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded text-[10px] font-bold transition-all duration-200 ${
                        isTextTool
                          ? "bg-[#C9A96E]/15 text-[#C9A96E]"
                          : "text-white/25"
                      }`}
                    >
                      T
                    </div>
                    <div className="my-0.5 h-px w-4 bg-white/10" />
                    <div className="flex h-6 w-6 items-center justify-center text-[9px] text-white/15">□</div>
                    <div className="flex h-6 w-6 items-center justify-center text-[9px] text-white/10">⬙</div>
                    <div className="flex h-6 w-6 items-center justify-center text-[9px] text-white/10">◈</div>
                    <div className="flex h-6 w-6 items-center justify-center text-[9px] text-white/10">✦</div>
                  </div>

                  {/* Canvas */}
                  <div className="flex flex-1 items-center justify-center bg-[#404040] p-4">
                    <div className="relative w-full max-w-[210px] rounded-lg border border-white/10 bg-[#0f0f0f] p-3 shadow-overlay">
                      {/* Header */}
                      <div className="mb-3 flex items-center gap-1.5">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#FF0000]">
                          <svg viewBox="0 0 24 24" className="h-2.5 w-2.5 fill-white">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.84 4.84 0 0 1-1-.07z" />
                          </svg>
                        </div>
                        <span className="text-[9px] font-medium text-white/50">YouTube Studio</span>
                      </div>

                      <p className="mb-1 text-[9px] text-white/40">Monthly revenue</p>

                      {/* Animated revenue value */}
                      <div className="flex items-end justify-between">
                        <span
                          className={`font-bold tracking-tight transition-all duration-500 ${
                            isSelected
                              ? "rounded bg-[#0066FF]/40 px-0.5 text-white outline outline-1 outline-[#0066FF]"
                              : "text-white"
                          }`}
                          style={{ fontSize: showNewFont ? "19px" : "16px" }}
                        >
                          {isTyping ? (
                            <span>
                              {displayValue}
                              <span className="animate-pulse">|</span>
                            </span>
                          ) : (
                            displayValue
                          )}
                        </span>
                        <span className="text-[9px] font-medium text-[#4ADE80]">
                          {showNewValue ? "+1,028%" : "+34%"}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="mt-2 h-1 w-full rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-[#FF0000] transition-all duration-700"
                          style={{ width: showNewValue ? "96%" : "38%" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Layers panel */}
                  <div className="flex w-[140px] flex-col gap-0.5 border-l border-white/5 bg-[#232325] p-2">
                    <p className="mb-1 px-2 text-[9px] font-semibold uppercase tracking-wider text-white/30">
                      Layers
                    </p>
                    <LayerRow label="Overlay Group" type="group" />
                    <LayerRow label="Background"    type="shape" indent />
                    <LayerRow label="Header Row"    type="group" indent />
                    <LayerRow
                      label="Revenue Value"
                      type="text"
                      state={isLayerSelect ? "selected" : isHoverLayer ? "hovered" : "default"}
                      indent
                    />
                    <LayerRow label="Percent Badge" type="text"  indent />
                    <LayerRow label="Progress Bar"  type="shape" indent />
                    <LayerRow label="Drop Shadow"   type="fx"    indent />
                  </div>
                </div>

                {/* Status bar */}
                <div className="flex items-center justify-between border-t border-white/5 bg-[#2C2C2E] px-3 py-1.5">
                  <span className="text-[9px] text-white/35 transition-all duration-300">
                    {STATUS[phase]}
                  </span>
                  <span className="text-[9px] text-white/20">8 layers</span>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="pointer-events-none absolute -bottom-6 left-1/2 h-32 w-48 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
