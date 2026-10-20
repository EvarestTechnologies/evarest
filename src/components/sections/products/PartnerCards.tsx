import { LINKS, PRODUCTS, SITE } from "@/content";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/SectionHead";

export function PartnerCards() {
  const p = PRODUCTS.partners;
  return (
    <section className="border-t border-line py-[110px]">
      <div className="mx-auto max-w-[1240px] px-7">
        <SectionHead label={p.label} title={p.title} intro={p.intro} />
        <Reveal className="grid gap-5 min-[901px]:grid-cols-3">
          {p.cards.map((c) => (
            <div key={c.title} className="rounded-[14px] border border-line bg-white p-7">
              <h3 className="mb-2 text-xl font-semibold tracking-[-0.02em]">{c.title}</h3>
              <p className="text-ink-soft">{c.body}</p>
            </div>
          ))}
        </Reveal>
        <div className="mt-[34px]"><Button href={LINKS.partner} magnetic arrow>{SITE.partnerLabel}</Button></div>
      </div>
    </section>
  );
}
