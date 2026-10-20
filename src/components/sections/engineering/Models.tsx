import { ENGINEERING, LINKS, SITE } from "@/content";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";

export function Models() {
  const m = ENGINEERING.models;
  return (
    <section aria-labelledby="eng-models" className="py-[140px]">
      <div className="mx-auto max-w-[1240px] px-7">
        <SectionHead id="eng-models" label={m.label} title={m.title} />
        <Reveal className="grid gap-5 min-[901px]:grid-cols-3">
          {m.items.map((it) => (
            <div key={it.title} data-featured={it.featured ? "true" : "false"}
              className={`flex flex-col rounded-2xl border p-[30px] ${it.featured ? "border-ink bg-ink text-white" : "border-line bg-white"}`}>
              <h3 className="mb-2.5 text-[22px] font-semibold tracking-[-0.02em]">{it.title}</h3>
              <p className={`mb-[18px] flex-1 ${it.featured ? "text-white/75" : "text-ink-soft"}`}>{it.body}</p>
              <span className={`border-t pt-3.5 font-mono text-xs ${it.featured ? "border-white/15 text-mint" : "border-line text-muted"}`}>{it.bestFor}</span>
            </div>
          ))}
        </Reveal>
        <div className="mt-7 flex flex-wrap items-center gap-[18px] text-ink-soft">
          <Button href={LINKS.startProject} magnetic arrow>{SITE.startLabel}</Button>
          <span>{m.price}</span>
        </div>
      </div>
    </section>
  );
}
