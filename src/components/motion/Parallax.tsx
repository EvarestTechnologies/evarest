"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useFinePointer } from "@/lib/pointer";
import { useReducedMotionPref } from "@/lib/reduced-motion";

/** Moves its child slower than the page. Only on hover-capable fine pointers, never under reduced motion. */
export function Parallax({ speed, className = "", children }: { speed: number; className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const [shift, setShift] = useState<number | null>(null);
  const active = fine && !reduced;

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const tick = () => {
      const box = ref.current?.parentElement?.getBoundingClientRect();
      if (!box || box.bottom < 0 || box.top > window.innerHeight) return;
      setShift((box.top + box.height / 2 - window.innerHeight / 2) * -speed);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [active, speed]);

  const style = active && shift !== null ? { transform: `translate3d(0, ${shift.toFixed(1)}px, 0) scale(${1 + speed})` } : undefined;
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
