import Link from "next/link";
import { HOME, LINKS, SITE } from "@/content";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function EngineeringSplit() {
  const e = HOME.engineering;
  return (
    <section className="border-y border-line bg-mist py-[140px]">
      <div className="mx-auto grid max-w-[1240px] items-start gap-16 px-7 min-[901px]:grid-cols-[.9fr_1.4fr]">
        <Reveal className="min-[901px]:sticky min-[901px]:top-[110px]">
          <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase">{e.label}</span>
          <h2 className="mt-4 mb-[18px] text-[clamp(32px,3.6vw,48px)] leading-[1.05] font-bold tracking-[-0.04em]">{e.title}</h2>
          <p className="text-[19px] text-ink-soft">{e.intro}</p>
        </Reveal>
        <div>
          <Reveal className="grid gap-x-9 border-t border-line min-[901px]:grid-cols-2">
            {e.services.map((s) => (
              <div key={s.title} className="border-b border-line py-6">
                <h3 className="mb-1.5 text-[19px] font-semibold tracking-[-0.02em]">{s.title}</h3>
                <p className="text-base text-ink-soft">{s.body}</p>
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-9 grid gap-4 min-[901px]:grid-cols-3">
            {e.promises.map((p) => (
              <div key={p.title} className="rounded-xl border border-line bg-white p-[18px] text-[15.5px] text-ink-soft">
                <h3 className="mb-1 text-[16.5px] font-semibold text-ink"><span aria-hidden="true" className="mr-2 text-mint-deep">✓</span>{p.title}</h3>
                {p.body}
              </div>
            ))}
          </Reveal>
          <Reveal className="mt-7 flex flex-wrap items-center gap-[18px]">
            <Button href={LINKS.startProject} magnetic arrow>{SITE.startLabel}</Button>
            <Link href="/engineering/#how" className="font-semibold text-purple-deep hover:underline underline-offset-4">{e.howLabel} →</Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
