"use client";

import { motion, useReducedMotion, useSpring } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { hasFinePointer } from "@/lib/pointer";

const SPRING = { stiffness: 260, damping: 18, mass: 0.6 };

/**
 * Pulls its child toward the pointer when the pointer comes within `radius`
 * pixels, by `strength` of the distance. Mouse and trackpad only.
 */
export function Magnetic({
  children,
  strength = 0.3,
  radius = 140,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  radius?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);

  useEffect(() => {
    if (reduced || !hasFinePointer()) return;
    const onMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const near = Math.hypot(dx, dy) < radius;
      x.set(near ? dx * strength : 0);
      y.set(near ? dy * strength : 0);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced, radius, strength, x, y]);

  return (
    <motion.div ref={ref} style={{ x, y }} className={`inline-block ${className}`.trim()}>
      {children}
    </motion.div>
  );
}
