import { LINKS, SITE } from "@/content";
import { Button } from "@/components/ui/Button";
import { MountainLines } from "@/components/ui/MountainLines";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-[120px] text-center text-white">
      <MountainLines className="pointer-events-none absolute -bottom-10 left-1/2 w-[1100px] -translate-x-1/2 opacity-[0.14]" strokeWidth={0.8} />
      <div className="relative mx-auto max-w-[1240px] px-7">
        <h2 className="mx-auto mb-[18px] max-w-[900px] text-[clamp(40px,5.6vw,84px)] leading-[0.98] font-bold tracking-[-0.05em]">
          {SITE.final.title} <span className="text-white/60">{SITE.final.accent}</span>
        </h2>
        <p className="mx-auto mb-[38px] max-w-[560px] text-[19px] text-white/75">{SITE.final.body}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button href={LINKS.startProject} variant="light" magnetic arrow className="h-[60px] px-[30px] text-lg">{SITE.startLabel}</Button>
          <Button href={LINKS.partner} variant="ghostLight" className="h-[60px] px-[26px] text-lg">{SITE.partnerLabel}</Button>
        </div>
      </div>
    </section>
  );
}
