import type { Metadata } from "next";
import { WORK, ZEYA_DANGER } from "@/content";
import { FinalCta } from "@/components/layout/FinalCta";
import { JumpLinks, PageHero } from "@/components/ui/PageHero";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { WhatsAppChat } from "@/components/ui/WhatsAppChat";
import { CaseStudy } from "@/components/sections/work/CaseStudy";

export const metadata: Metadata = { title: WORK.meta.title, description: WORK.meta.description };

export default function WorkPage() {
  const [koa, ocs] = WORK.studies;
  return (
    <>
      <PageHero label={WORK.hero.label} title={WORK.hero.title} accent={WORK.hero.accent} intro={WORK.hero.intro}>
        <JumpLinks links={[{ label: koa.title, href: "#koa" }, { label: ocs.title, href: "#ocs" }]} />
      </PageHero>
      <CaseStudy study={koa} secondShot={<BrowserFrame url={WORK.koaPortal.url} src={WORK.koaPortal.src} alt={WORK.koaPortal.alt} />} />
      <CaseStudy study={ocs} alt
        secondShot={<div className="flex items-end justify-center overflow-hidden rounded-[14px] bg-tint px-5 pt-[26px]"><PhoneFrame size="card"><WhatsAppChat messages={ZEYA_DANGER} label={WORK.zeyaPhoneLabel} /></PhoneFrame></div>} />
      <FinalCta />
    </>
  );
}
