import type { Metadata } from "next";
import { ZEYA_PRIVACY, type PolicyText } from "@/content";

export const metadata: Metadata = { title: "ZEYA privacy policy · Evarest", description: "How ZEYA, Evarest Technologies' pregnancy companion on WhatsApp, collects, uses and protects your information." };

function Text({ t }: { t: PolicyText }) {
  return t.lead ? <><strong className="text-ink">{t.lead}</strong> {t.text}</> : <>{t.text}</>;
}

export default function ZeyaPrivacyPage() {
  const p = ZEYA_PRIVACY;
  return (
    <article className="mx-auto max-w-[760px] px-7 pt-40 pb-[110px] text-[17px] leading-[1.7] text-ink-soft">
      <h1 className="mb-6 text-[clamp(36px,4.4vw,56px)] leading-[1.05] font-bold tracking-[-0.045em] text-ink">{p.title}</h1>
      <ul className="mb-12 grid gap-1 border-y border-line py-5 text-[15.5px]">
        {p.meta.map((m, i) => <li key={i}><Text t={m} /></li>)}
      </ul>
      {p.sections.map((s) => (
        <section key={s.heading} className="mb-10">
          <h2 className="mb-3 text-[22px] font-semibold tracking-[-0.02em] text-ink">{s.heading}</h2>
          {s.blocks.map((b, i) =>
            b.type === "p" ? (
              <p key={i} className="mb-4"><Text t={b} /></p>
            ) : (
              <ul key={i} className="mb-4 list-disc space-y-2 pl-6">
                {b.items.map((it, j) => <li key={j}><Text t={it} /></li>)}
              </ul>
            ),
          )}
        </section>
      ))}
    </article>
  );
}
