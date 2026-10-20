"use client";

import { useEffect, useRef, useState } from "react";
import { ABOUT } from "@/content";
import { prefersReducedMotion } from "@/lib/reduced-motion";
import { roadPath, roadPoints } from "./road";

const W = 1440;
const H = 420;

export function RoadMap() {
  const r = ABOUT.road;
  const pts = roadPoints(r.stops.length, W, H);
  const d = roadPath(pts);
  const base = useRef<SVGPathElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const [dash, setDash] = useState<{ len: number; offset: number } | null>(null);

  useEffect(() => {
    const path = base.current;
    if (!path || typeof path.getTotalLength !== "function") return;
    const len = path.getTotalLength();
    const nowX = pts[r.stops.findIndex((s) => s.state === "now")]?.x ?? W;
    let lo = 0;
    let hi = len;
    for (let k = 0; k < 30; k++) {
      const m = (lo + hi) / 2;
      if (path.getPointAtLength(m).x < nowX) lo = m; else hi = m;
    }
    const show = () => setDash({ len, offset: len - lo });
    setDash({ len, offset: len });
    if (prefersReducedMotion()) return show();
    const io = new IntersectionObserver((es) => es.some((e) => e.isIntersecting) && (show(), io.disconnect()), { threshold: 0.3 });
    if (box.current) io.observe(box.current);
    return () => io.disconnect();
  }, [d]); // eslint-disable-line react-hooks/exhaustive-deps

  const dot = { done: "border-[4px] border-purple-deep bg-white", now: "border-[4px] border-mint bg-mint shadow-[0_0_0_8px_rgba(80,227,194,.25)]", next: "border-[3px] border-dashed border-muted/50 bg-white" };
  return (
    <div className="mt-16">
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-4">
        <h2 className="text-[22px] font-semibold tracking-[-0.02em]">{r.title}</h2>
        <div aria-hidden="true" className="flex gap-[18px] font-mono text-xs text-muted">
          <span><i className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-purple-deep" />{r.key.done}</span>
          <span><i className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-mint" />{r.key.now}</span>
          <span><i className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full border-2 border-dashed border-muted/50" />{r.key.next}</span>
        </div>
      </div>
      <div ref={box} className="relative max-[900px]:pl-[34px] min-[901px]:h-[420px] max-[900px]:before:absolute max-[900px]:before:top-1.5 max-[900px]:before:bottom-1.5 max-[900px]:before:left-2.5 max-[900px]:before:w-1.5 max-[900px]:before:rounded max-[900px]:before:bg-[linear-gradient(var(--color-purple-deep)_0_72%,var(--color-line)_72%)]">
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 hidden h-full w-full overflow-visible min-[901px]:block">
          <path ref={base} d={d} fill="none" strokeWidth={18} strokeLinecap="round" className="stroke-line" />
          <path d={d} fill="none" strokeWidth={18} strokeLinecap="round"
            className={`stroke-purple-deep transition-[stroke-dashoffset] duration-[1800ms] ease-out-soft ${dash ? "" : "opacity-0"}`}
            style={dash ? { strokeDasharray: dash.len, strokeDashoffset: dash.offset } : undefined} />
          <path d={d} fill="none" strokeWidth={2} strokeDasharray="10 12" className="stroke-white opacity-90" />
        </svg>
        <ol aria-label={r.title}>
          {r.stops.map((s, i) => {
            const up = pts[i].y < H / 2;
            return (
              <li key={s.title} className="relative mb-[22px] min-[901px]:absolute min-[901px]:top-[var(--y)] min-[901px]:left-[var(--x)] min-[901px]:mb-0 min-[901px]:w-[190px] min-[901px]:-translate-x-1/2"
                style={{ ["--x" as string]: `${(pts[i].x / W) * 100}%`, ["--y" as string]: `${(pts[i].y / H) * 100}%` }}>
                <span aria-hidden="true" className={`absolute top-0.5 -left-[35px] h-[22px] w-[22px] rounded-full min-[901px]:top-[-11px] min-[901px]:left-1/2 min-[901px]:-ml-[11px] ${dot[s.state]}`} />
                <div className={`text-[14px] leading-[1.4] text-ink-soft min-[901px]:absolute min-[901px]:inset-x-0 min-[901px]:text-center ${up ? "min-[901px]:bottom-[30px]" : "min-[901px]:top-[30px]"}`}>
                  {s.state !== "done" && <em className={`mb-1 inline-block font-mono text-[10.5px] tracking-[0.08em] not-italic uppercase ${s.state === "now" ? "text-mint-deep" : "text-muted"}`}>{s.state === "now" ? r.key.now : r.key.next}</em>}
                  <b className="mb-0.5 block text-[15.5px] tracking-[-0.01em] text-ink">{s.title}</b>
                  {s.body}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
