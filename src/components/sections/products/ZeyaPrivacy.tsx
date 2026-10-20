import Link from "next/link";
import { LINKS, PRODUCTS } from "@/content";
import { Reveal } from "@/components/motion/Reveal";

export function ZeyaPrivacy() {
  const p = PRODUCTS.privacy;
  return (
    <Reveal className="mx-auto mt-[70px] max-w-[1240px] px-7">
      <div id="zeya-privacy" className="grid scroll-mt-24 gap-5 border-t border-line pt-11 min-[901px]:grid-cols-[300px_1fr] min-[901px]:gap-14">
        <div>
          <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase">{p.label}</span>
          <h3 className="mt-3 text-[28px] leading-[1.1] font-bold tracking-[-0.03em]">{p.title}</h3>
        </div>
        <div>
          <div className="grid gap-x-9 gap-y-[22px] min-[901px]:grid-cols-2">
            {p.points.map((pt) => (
              <div key={pt.title}>
                <b className="mb-1 block text-ink">{pt.title}</b>
                <p className="text-base text-ink-soft">{pt.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-[26px]"><Link className="font-semibold text-purple-deep hover:underline underline-offset-4" href={LINKS.zeyaPrivacy}>{p.linkLabel} →</Link></p>
        </div>
      </div>
    </Reveal>
  );
}
