"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { useReducedMotionPref } from "@/lib/reduced-motion";

/**
 * Fades its content up when it scrolls into view. With `curtain`, images inside unveil bottom to top.
 * The static HTML is always visible: hiding starts only after mount, and never under reduced motion.
 */
export function Reveal({
  as: Tag = "div",
  curtain = false,
  className = "",
  children,
  ...rest
}: {
  as?: ElementType;
  curtain?: boolean;
  className?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotionPref();
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");

  useEffect(() => {
    if (reduced || !ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    const raf = requestAnimationFrame(() => {
      setState((s) => (s === "static" ? "hidden" : s));
      io.observe(el);
    });
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [reduced]);

  const hidden = state === "hidden";
  const motion = state === "static" ? "" : "transition-[opacity,transform,clip-path] duration-[800ms] ease-out-soft";
  const look = curtain
    ? `[&_img]:transition-[clip-path] [&_img]:duration-[1100ms] [&_img]:ease-out-soft ${hidden ? "[&_img]:[clip-path:inset(100%_0_0_0)]" : ""}`
    : hidden
      ? "opacity-0 translate-y-6"
      : "";
  return (
    <Tag ref={ref} className={`${motion} ${look} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
