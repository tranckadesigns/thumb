"use client";

import { cn } from "@/lib/utils/cn";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "fade";
}

export function Reveal({ children, className }: RevealProps) {
  return <div className={cn(className)}>{children}</div>;
}
