import { ENGINEERING } from "@/content";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function Problems() {
  const p = ENGINEERING.problems;
  return (
    <section aria-labelledby="eng-problems" className="border-t border-line bg-mist py-[110px]">
      <div className="mx-auto max-w-[1240px] px-7">
        <SectionHead id="eng-problems" label={p.label} title={p.title} />
        <Reveal className="grid gap-[18px] min-[901px]:grid-cols-3">
          {p.items.map((it) => (
            <figure key={it.quote} className="rounded-[14px] border border-line bg-white p-[26px]">
              <blockquote className="mb-3 text-[19px] leading-[1.35] font-semibold tracking-[-0.015em]">{it.quote}</blockquote>
              <figcaption className="text-[15.5px] text-ink-soft"><span aria-hidden="true" className="font-bold text-mint-deep">→ </span>{it.answer}</figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
