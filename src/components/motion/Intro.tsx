"use client";

import { useEffect, useState } from "react";
import { isFirstVisit } from "@/lib/first-visit";
import { prefersReducedMotion } from "@/lib/reduced-motion";
import { MountainLines } from "@/components/ui/MountainLines";

const WORD = "EVAREST";

/**
 * First visit per session only: the mountain draws and EVAREST rises, then the overlay lifts.
 * Mounted after first paint, so the hero underneath is already in the static HTML.
 */
export function Intro() {
  const [phase, setPhase] = useState<"off" | "on" | "lift">("off");

  useEffect(() => {
    if (prefersReducedMotion() || !isFirstVisit("ev-intro")) return;
    const start = requestAnimationFrame(() => setPhase("on"));
    const lift = setTimeout(() => setPhase("lift"), 1000);
    const done = setTimeout(() => setPhase("off"), 1900);
    return () => {
      cancelAnimationFrame(start);
      clearTimeout(lift);
      clearTimeout(done);
    };
  }, []);

  if (phase === "off") return null;
  return (
    <div aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-[18px] bg-purple-night transition-transform delay-100 duration-[900ms] ease-out-soft ${phase === "lift" ? "-translate-y-full" : ""}`}>
      <MountainLines className="intro-draw w-[150px]" strokeWidth={6} withTrail />
      <div className="flex gap-[0.32em] font-wordmark text-[22px] font-bold tracking-[0.1em] text-white">
        {WORD.split("").map((ch, i) => (
          <span key={i} className={`intro-rise ${i > 3 ? "text-mint" : ""}`} style={{ animationDelay: `${0.3 + i * 0.04}s` }}>
            {ch}
          </span>
        ))}
      </div>
    </div>
  );
}
