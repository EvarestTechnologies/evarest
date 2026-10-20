import type { Metadata } from "next";
import { LINKS, PRODUCTS, ZEYA_CHECKIN, ZEYA_DANGER } from "@/content";
import { asset } from "@/lib/asset";
import { FinalCta } from "@/components/layout/FinalCta";
import { JumpLinks, PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { WhatsAppChat } from "@/components/ui/WhatsAppChat";
import { ProductSection } from "@/components/sections/products/ProductSection";
import { ZeyaPrivacy } from "@/components/sections/products/ZeyaPrivacy";
import { PartnerCards } from "@/components/sections/products/PartnerCards";

export const metadata: Metadata = { title: "Products · Evarest", description: PRODUCTS.hero.intro };

export default function ProductsPage() {
  const { hero, zeya, kintaraa } = PRODUCTS;
  return (
    <>
      <PageHero label={hero.label} title={hero.title} accent={hero.accent} intro={hero.intro}>
        <JumpLinks links={[{ label: zeya.name, href: "#zeya" }, { label: kintaraa.name, href: "#kintaraa" }]} />
      </PageHero>
      <ProductSection id="zeya" name={zeya.name} status={zeya.status} summary={zeya.summary} points={zeya.points} mirrored={false}
        stage={<PhoneFrame size="large"><WhatsAppChat large messages={[ZEYA_CHECKIN, ...ZEYA_DANGER]} label="ZEYA on WhatsApp: a check-in at 23 weeks, then an urgent reply with Kenya's emergency numbers after a message about heavy bleeding" /></PhoneFrame>}
        extra={
          <>
            <ol aria-label="How ZEYA handles a message" className="mb-[30px] flex flex-wrap items-center gap-2.5 font-mono text-[13px]">
              {zeya.flow.map((step, i) => (
                <li key={step} className="flex items-center gap-2.5">
                  {i > 0 && <span aria-hidden="true" className="text-muted">→</span>}
                  <span className={`rounded-lg border px-3 py-2 ${i === 1 ? "border-ink bg-ink text-white" : "border-line bg-white"}`}>{step}</span>
                </li>
              ))}
            </ol>
          </>
        }
        actions={<>
          <Button href={LINKS.chatZeya} magnetic arrow>{zeya.chatLabel}</Button>
          <Button href="#zeya-privacy" variant="ghost">{zeya.moreLabel}</Button>
          <p className="mt-[22px] w-full text-sm text-muted">{zeya.safety}</p>
        </>}
        after={<ZeyaPrivacy />} />
      <ProductSection id="kintaraa" name={kintaraa.name} status={kintaraa.status} summary={kintaraa.summary} points={kintaraa.points} mirrored
        stage={<PhoneFrame size="large"><img src={asset(kintaraa.image.src)} alt={kintaraa.image.alt} width={600} height={1118} loading="lazy" className="w-full bg-white" /></PhoneFrame>}
        actions={<>
          <Button href={LINKS.kintaraa} magnetic arrow>{kintaraa.visitLabel}</Button>
          <Button href={LINKS.partner} variant="ghost">{kintaraa.pilotLabel}</Button>
        </>} />
      <PartnerCards />
      <FinalCta />
    </>
  );
}
