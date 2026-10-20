import type { Metadata } from "next";
import { CONTACT_PAGE } from "@/content";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Thank you · Evarest", robots: { index: false } };

/** Web3Forms sends visitors here after a submit made without JavaScript. */
export default function ThanksPage() {
  return (
    <section className="mx-auto max-w-[1240px] px-7 pt-48 pb-[140px]">
      <h1 className="mb-5 text-[clamp(36px,4.4vw,60px)] leading-[1.05] font-bold tracking-[-0.045em]">{CONTACT_PAGE.form.sentTitle}</h1>
      <p className="mb-8 text-xl text-ink-soft">{CONTACT_PAGE.form.sentBody}</p>
      <Button href="/" variant="ghost">Back to home</Button>
    </section>
  );
}
