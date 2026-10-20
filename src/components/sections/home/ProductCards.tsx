import Link from "next/link";
import { HOME, LINKS, PRODUCTS, ZEYA_DANGER, SITE } from "@/content";
import { asset } from "@/lib/asset";
import { Reveal } from "@/components/motion/Reveal";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { Pill } from "@/components/ui/Pill";
import { SectionHead } from "@/components/ui/SectionHead";
import { WhatsAppChat } from "@/components/ui/WhatsAppChat";

function Card({ name, status, line, stage, tone, links }: {
  name: string; status: string; line: string; stage: React.ReactNode; tone: "tint" | "mint"; links: React.ReactNode;
}) {
  return (
    <Reveal as="article" className="flex overflow-hidden rounded-[14px] border border-line bg-mist transition-[transform,box-shadow] duration-500 fine:hover:-translate-y-1.5 fine:hover:shadow-[0_30px_60px_-25px_rgba(42,10,58,.25)] max-[900px]:flex-col">
      <div className={`flex flex-[0_0_46%] items-end justify-center overflow-hidden px-5 pt-[34px] ${tone === "tint" ? "bg-tint" : "bg-mint/10"}`}>{stage}</div>
      <div className="flex flex-col justify-center px-8 pt-[30px] pb-[34px]">
        <h3 className="mb-2.5 text-[34px] font-bold tracking-[-0.035em]">{name}</h3>
        <p className="mb-3"><Pill>{status}</Pill></p>
        <p className="mb-[22px] text-lg text-ink-soft">{line}</p>
        <div className="flex flex-wrap gap-[22px] font-semibold">{links}</div>
      </div>
    </Reveal>
  );
}

export function ProductCards() {
  const p = HOME.products;
  const link = "text-purple-deep hover:underline underline-offset-4";
  return (
    <section className="relative py-[140px]">
      <div className="mx-auto max-w-[1240px] px-7">
        <SectionHead label={p.label} title={p.title} intro={p.intro} />
        <div className="grid gap-7 min-[901px]:grid-cols-2">
          <Card name={PRODUCTS.zeya.name} status={PRODUCTS.zeya.status} line={PRODUCTS.zeya.cardLine} tone="tint"
            stage={<PhoneFrame size="card"><WhatsAppChat messages={ZEYA_DANGER} label={p.zeyaPhoneLabel} /></PhoneFrame>}
            links={<><a className={link} href={LINKS.chatZeya}>{PRODUCTS.zeya.chatLabel} →</a><Link className="text-ink-soft hover:text-purple-deep" href="/products/#zeya">{p.aboutZeya}</Link></>} />
          <Card name={PRODUCTS.kintaraa.name} status={PRODUCTS.kintaraa.status} line={PRODUCTS.kintaraa.cardLine} tone="mint"
            stage={<PhoneFrame size="card"><img src={asset(PRODUCTS.kintaraa.image.src)} alt={PRODUCTS.kintaraa.image.alt} width={600} height={1118} loading="lazy" className="w-full bg-white" /></PhoneFrame>}
            links={<><Link className={link} href={LINKS.partner}>{SITE.partnerLabel} →</Link><a className="text-ink-soft hover:text-purple-deep" href={LINKS.kintaraa}>{PRODUCTS.kintaraa.visitLabel}</a></>} />
        </div>
      </div>
    </section>
  );
}
