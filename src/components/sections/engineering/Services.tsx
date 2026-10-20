import { ENGINEERING } from "@/content";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function Services() {
  const s = ENGINEERING.services;
  return (
    <section aria-labelledby="eng-services" className="py-[140px]">
      <div className="mx-auto max-w-[1240px] px-7">
        <SectionHead id="eng-services" label={s.label} title={s.title} />
        <Reveal className="grid border-t border-l border-line min-[901px]:grid-cols-3">
          {s.items.map((it) => (
            <div key={it.title} className="border-r border-b border-line px-[30px] py-8 transition-colors fine:hover:bg-mist">
              <h3 className="mb-2.5 text-[21px] font-semibold tracking-[-0.02em]">{it.title}</h3>
              <p className="mb-3.5 text-ink-soft">{it.body}</p>
              <small className="block font-mono text-xs leading-[1.6] text-muted">{it.examples}</small>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
