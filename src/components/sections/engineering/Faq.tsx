import { ENGINEERING } from "@/content";
import { SectionHead } from "@/components/ui/SectionHead";

export function Faq() {
  const f = ENGINEERING.faq;
  return (
    <section aria-labelledby="eng-faq" className="border-t border-line py-[140px]">
      <div className="mx-auto max-w-[1240px] px-7">
        <SectionHead id="eng-faq" label={f.label} title={f.title} />
        <div className="max-w-[860px]">
          {f.items.map((it) => (
            <details key={it.q} className="group border-b border-line py-[22px]">
              <summary className="flex cursor-pointer list-none justify-between gap-5 text-xl font-semibold tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
                {it.q}
                <span aria-hidden="true" className="text-[26px] leading-none font-normal text-purple-deep transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 max-w-[720px] text-ink-soft">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
