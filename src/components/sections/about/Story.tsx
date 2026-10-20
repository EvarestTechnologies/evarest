import { ABOUT } from "@/content";
import { Reveal } from "@/components/motion/Reveal";
import { Aurora } from "@/components/ui/PageHero";
import { RoadMap } from "./RoadMap";

export function Story() {
  const s = ABOUT.story;
  return (
    <section className="relative overflow-hidden pt-[170px] pb-[70px] max-[600px]:pt-[130px]">
      <Aurora />
      <div className="relative mx-auto max-w-[1240px] px-7">
        <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase">{s.label}</span>
        <h1 className="mt-[22px] mb-14 max-w-[1100px] text-[clamp(38px,4.8vw,72px)] leading-[1.02] font-bold tracking-[-0.055em]">
          {s.title} <span className="text-muted">{s.accent}</span>
        </h1>
        <Reveal className="grid gap-[18px] border-t border-line pt-[34px] min-[901px]:grid-cols-2 min-[901px]:gap-14">
          <p className="text-[25px] leading-[1.45] tracking-[-0.015em] text-ink">{s.lead}</p>
          <p className="text-[19px] leading-[1.65] text-ink-soft">{s.body}</p>
        </Reveal>
        <RoadMap />
      </div>
    </section>
  );
}
