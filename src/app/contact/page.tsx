import type { Metadata } from "next";
import { Suspense } from "react";
import { CONTACT, CONTACT_PAGE, LINKS } from "@/content";
import { Aurora } from "@/components/ui/PageHero";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { FormFromQuery } from "@/components/contact/FormFromQuery";

export const metadata: Metadata = { title: CONTACT_PAGE.meta.title, description: CONTACT_PAGE.meta.description };

export default function ContactPage() {
  const c = CONTACT_PAGE;
  const direct = "font-semibold text-ink hover:text-purple-deep";
  return (
    <section className="relative overflow-hidden pt-40 pb-[110px]">
      <Aurora />
      <div className="relative mx-auto grid max-w-[1240px] items-start gap-7 px-7 min-[901px]:grid-cols-[.9fr_1.2fr] min-[901px]:gap-[72px]">
        <div>
          <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase">{c.label}</span>
          <h1 className="mt-[22px] mb-[22px] text-[clamp(42px,4.6vw,70px)] leading-[0.98] font-bold tracking-[-0.055em]">{c.title} <span className="text-muted">{c.accent}</span></h1>
          <p className="text-xl text-ink-soft">{c.intro}</p>
          <ul className="my-[34px] grid gap-3.5">
            {c.steps.map((s) => (
              <li key={s.title} className="grid grid-cols-[30px_1fr] gap-3 text-ink-soft">
                <i aria-hidden="true" className="grid h-[30px] w-[30px] place-items-center rounded-full bg-tint text-[13px] font-bold text-purple-deep not-italic">{s.icon}</i>
                <div><b className="block text-ink">{s.title}</b>{s.body}</div>
              </li>
            ))}
          </ul>
          <div className="grid gap-2.5 border-t border-line pt-6 text-[17px]">
            <span className="font-mono text-xs tracking-[0.08em] text-muted uppercase">{c.direct}</span>
            <a className={direct} href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a className={direct} href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            <a className={direct} href={LINKS.linkedin}>LinkedIn</a>
          </div>
        </div>
        <div className="rounded-[20px] border border-line bg-white p-6 shadow-[0_40px_80px_-50px_rgba(42,10,58,.35)] min-[901px]:p-9">
          <Suspense fallback={<EnquiryForm />}>
            <FormFromQuery />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
