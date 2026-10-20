import type { Metadata } from "next";
import { ENGINEERING, LINKS, SITE } from "@/content";
import { FinalCta } from "@/components/layout/FinalCta";
import { Reveal } from "@/components/motion/Reveal";
import { Aurora } from "@/components/ui/PageHero";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Button } from "@/components/ui/Button";
import { Problems } from "@/components/sections/engineering/Problems";
import { Services } from "@/components/sections/engineering/Services";
import { Process } from "@/components/sections/engineering/Process";
import { Models } from "@/components/sections/engineering/Models";
import { Faq } from "@/components/sections/engineering/Faq";

export const metadata: Metadata = { title: ENGINEERING.meta.title, description: ENGINEERING.meta.description };

export default function EngineeringPage() {
  const h = ENGINEERING.hero;
  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-[90px]">
        <Aurora />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-16 px-7 min-[901px]:grid-cols-[1fr_1.05fr]">
          <div>
            <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase">{h.label}</span>
            <h1 className="mt-[22px] mb-6 text-[clamp(40px,4.4vw,66px)] leading-[0.98] font-bold tracking-[-0.055em]">{h.title} <span className="text-muted">{h.accent}</span></h1>
            <p className="mb-[34px] max-w-[560px] text-xl text-ink-soft">{h.intro}</p>
            <div className="flex flex-wrap gap-3">
              <Button href={LINKS.startProject} magnetic arrow>{SITE.startLabel}</Button>
              <Button href="#how" variant="ghost">{h.howLabel}</Button>
            </div>
          </div>
          <Reveal className="min-[901px]:[transform:perspective(1400px)_rotateY(-6deg)_rotateX(2deg)]">
            <BrowserFrame url={h.shot.url} src={h.shot.src} alt={h.shot.alt} />
          </Reveal>
        </div>
      </section>
      <Problems />
      <Services />
      <Process />
      <Models />
      <Faq />
      <FinalCta />
    </>
  );
}
