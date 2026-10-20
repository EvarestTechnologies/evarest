import { HOME, LINKS } from "@/content";
import { asset } from "@/lib/asset";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHead } from "@/components/ui/SectionHead";

function Case({ id, tag, title, body, link, href, image }: {
  id: string; tag: string; title: string; body: string; link: string; href: string; image: { src: string; alt: string };
}) {
  return (
    <Reveal as="article" aria-labelledby={id} className="overflow-hidden rounded-[14px] border border-line bg-white transition-[transform,box-shadow] duration-500 fine:hover:-translate-y-[5px] fine:hover:shadow-[0_30px_60px_-28px_rgba(42,10,58,.3)]">
      <div className="aspect-video overflow-hidden border-b border-line bg-mist">
        <img src={asset(image.src)} alt={image.alt} loading="lazy" width={1434} height={806} className="h-full w-full object-cover object-top" />
      </div>
      <div className="px-7 pt-[26px] pb-[30px]">
        <span className="font-mono text-xs text-muted">{tag}</span>
        <h3 id={id} className="mt-2 mb-2.5 text-[26px] font-bold tracking-[-0.03em]">{title}</h3>
        <p className="mb-[18px] text-ink-soft">{body}</p>
        <a href={href} className="font-semibold text-purple-deep hover:underline underline-offset-4">{link} →</a>
      </div>
    </Reveal>
  );
}

export function WorkCards() {
  const w = HOME.work;
  return (
    <section className="relative overflow-hidden bg-mist py-[120px]">
      <Parallax speed={0.15} className="absolute inset-0">
        <img src={asset(w.background)} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover object-right-bottom" />
      </Parallax>
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,248,252,.94)_0%,rgba(250,248,252,.82)_45%,rgba(250,248,252,.35)_100%)] max-[900px]:bg-mist/90" />
      <div className="relative mx-auto max-w-[1240px] px-7">
        <SectionHead label={w.label} title={w.title} intro={w.intro} />
        <div className="grid gap-7 min-[901px]:grid-cols-2">
          <Case id="home-koa" {...w.koa} href={LINKS.koa} />
          <Case id="home-ocs" {...w.ocs} href={LINKS.chatZeya} />
        </div>
      </div>
    </section>
  );
}
