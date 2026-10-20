import { ENGINEERING } from "@/content";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

export function Process() {
  const p = ENGINEERING.process;
  return (
    <section id="how" aria-labelledby="eng-how" className="scroll-mt-20 border-y border-line bg-mist py-[140px]">
      <div className="mx-auto max-w-[1240px] px-7">
        <SectionHead id="eng-how" label={p.label} title={p.title} intro={p.intro} />
        <Reveal>
          <ol aria-label={p.label} className="relative grid gap-[22px] min-[901px]:grid-cols-5 min-[901px]:gap-0 min-[901px]:before:absolute min-[901px]:before:inset-x-0 min-[901px]:before:top-[9px] min-[901px]:before:h-0.5 min-[901px]:before:bg-[linear-gradient(90deg,var(--color-purple-deep),var(--color-line))]">
            {p.steps.map((s) => (
              <li key={s.title} className="relative pl-8 before:absolute before:top-0 before:left-0 before:h-4 before:w-4 before:rounded-full before:border-[3px] before:border-purple-deep before:bg-white min-[901px]:pt-9 min-[901px]:pr-5 min-[901px]:pl-0">
                <h3 className="mb-1.5 text-[19px] font-semibold tracking-[-0.02em]">{s.title}</h3>
                <p className="text-[15.5px] text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
