import type { ReactNode } from "react";
import type { WorkStudy } from "@/content";
import { Reveal } from "@/components/motion/Reveal";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { Button } from "@/components/ui/Button";

export function CaseStudy({ study, alt = false, secondShot }: { study: WorkStudy; alt?: boolean; secondShot: ReactNode }) {
  return (
    <section id={study.id} aria-labelledby={`${study.id}-title`} className={`scroll-mt-20 border-t border-line py-[100px] ${alt ? "bg-mist" : ""}`}>
      <div className="mx-auto max-w-[1240px] px-7">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase">{study.tag}</span>
            <h2 id={`${study.id}-title`} className="mt-3 text-[clamp(40px,5vw,72px)] leading-none font-bold tracking-[-0.05em]">{study.title}</h2>
          </div>
          <Button href={study.link.href} variant="ghost" arrow>{study.link.label}</Button>
        </Reveal>
        <Reveal className="mb-14 grid auto-rows-[minmax(300px,440px)] gap-5 min-[901px]:grid-cols-[1.5fr_1fr]">
          <BrowserFrame url={study.shot.url} src={study.shot.src} alt={study.shot.alt} />
          {secondShot}
        </Reveal>
        <div className="grid gap-7 min-[901px]:grid-cols-[300px_1fr] min-[901px]:gap-16">
          <Reveal className="border-t-2 border-ink pt-[18px]">
            <dl className="grid gap-4">
              {study.glance.map((g) => (
                <div key={g.label}>
                  <dt className="font-mono text-[11.5px] tracking-[0.1em] text-muted uppercase">{g.label}</dt>
                  <dd className="mt-[3px] font-semibold text-ink">{g.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal>
            {study.story.map((s) => (
              <div key={s.heading}>
                <h3 className="mb-2.5 text-[22px] font-semibold tracking-[-0.02em]">{s.heading}</h3>
                <p className="mb-[30px] max-w-[700px] text-lg leading-[1.65] text-ink-soft">{s.body}</p>
              </div>
            ))}
            <ul aria-label="Skills" className="flex flex-wrap gap-2">
              {study.tags.map((t) => (
                <li key={t} className="rounded-lg border border-line bg-white px-[11px] py-[7px] font-mono text-[12.5px] text-ink-soft">{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
