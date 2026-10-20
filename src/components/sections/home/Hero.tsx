import { preload } from "react-dom";
import { HOME, LINKS, SITE } from "@/content";
import { asset } from "@/lib/asset";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/motion/Parallax";

const WIDTHS = [640, 828, 1280, 1920, 2560];

export function Hero() {
  const h = HOME.hero;
  const srcSet = WIDTHS.map((w) => `${asset(`${h.image.src}-${w}.webp`)} ${w}w`).join(", ");
  // The hero photo is the largest paint: ask for it in the document head, before the CSS and scripts.
  preload(asset(`${h.image.src}-1920.webp`), { as: "image", imageSrcSet: srcSet, imageSizes: "100vw", fetchPriority: "high" });
  return (
    <section className="on-dark relative flex min-h-screen items-end overflow-hidden pt-[130px] pb-[90px] text-white">
      <Parallax speed={0.25} className="absolute inset-0">
        <img src={asset(`${h.image.src}-1920.webp`)} srcSet={srcSet} sizes="100vw" alt={h.image.alt} width={1920} height={1280}
          loading="eager" fetchPriority="high" className="h-full w-full object-cover object-[center_35%]" />
      </Parallax>
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,8,38,.8)_0%,rgba(26,8,38,.52)_32%,rgba(26,8,38,.12)_60%,rgba(26,8,38,0)_100%),linear-gradient(0deg,rgba(26,8,38,.55)_0%,transparent_40%),linear-gradient(180deg,rgba(26,8,38,.35)_0%,transparent_18%)] max-[900px]:bg-[linear-gradient(0deg,rgba(26,8,38,.92)_0%,rgba(26,8,38,.7)_55%,rgba(26,8,38,.35)_100%)]" />
      <div className="relative mx-auto w-full max-w-[1240px] px-7">
        <div className="max-w-[920px]">
          <span className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-3.5 py-[7px] font-mono text-[12.5px] backdrop-blur-sm">
            <i className="h-[7px] w-[7px] rounded-full bg-mint shadow-[0_0_0_4px_rgba(80,227,194,.25)]" />
            {h.tag}
          </span>
          <h1 className="mb-7 text-[clamp(40px,5vw,72px)] leading-[0.95] font-bold tracking-[-0.055em]">
            <span className="block">{h.line1}</span>
            <span className="block text-white/70">{h.line2}</span>
          </h1>
          <p className="mb-[34px] max-w-[560px] text-xl text-white/85">{h.sub}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={LINKS.startProject} variant="light" magnetic arrow>{SITE.startLabel}</Button>
            <Button href={LINKS.partner} variant="ghostLight">{SITE.partnerLabel}</Button>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-[22px] gap-y-2 font-mono text-[13px] text-white/80">
            {h.proof.map((p) => (
              <li key={p}><span aria-hidden="true" className="mr-2 text-mint">✓</span>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
