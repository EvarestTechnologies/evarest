import type { ReactNode } from "react";
import type { Point } from "@/content";
import { Reveal } from "@/components/motion/Reveal";
import { Pill } from "@/components/ui/Pill";
import { TickList } from "@/components/ui/TickList";

export function ProductSection({ id, name, status, summary, points, stage, mirrored, extra, actions, after }: {
  id: string; name: string; status: string; summary: string; points: readonly Point[];
  stage: ReactNode; mirrored: boolean; extra?: ReactNode; actions: ReactNode; after?: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 border-t border-line py-[110px] ${mirrored ? "bg-mist" : ""}`}>
      <div className={`mx-auto grid max-w-[1240px] items-center gap-10 px-7 min-[901px]:gap-20 ${mirrored ? "min-[901px]:grid-cols-[1.15fr_1fr]" : "min-[901px]:grid-cols-[1fr_1.15fr]"}`}>
        <Reveal className={`flex min-h-[460px] items-center justify-center overflow-hidden rounded-[20px] min-[901px]:min-h-[600px] ${mirrored ? "bg-mint/10 min-[901px]:order-2" : "bg-tint"}`}>{stage}</Reveal>
        <Reveal>
          <Pill>{status}</Pill>
          <h2 className="mt-4 mb-3.5 text-[clamp(40px,4.6vw,64px)] leading-none font-bold tracking-[-0.05em]">{name}</h2>
          <p className="mt-4 mb-7 max-w-[560px] text-[21px] leading-normal text-ink-soft">{summary}</p>
          <TickList items={points} />
          {extra}
          <div className="flex flex-wrap gap-3">{actions}</div>
        </Reveal>
      </div>
      {after}
    </section>
  );
}
