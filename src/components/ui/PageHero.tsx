import type { ReactNode } from "react";

/** The soft purple and mint glow behind page heroes. */
export function Aurora() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-[-10%] top-[-20%] h-[90%] bg-[radial-gradient(40%_50%_at_20%_30%,rgba(160,21,220,.18),transparent_70%),radial-gradient(35%_45%_at_75%_25%,rgba(80,227,194,.22),transparent_70%),radial-gradient(30%_40%_at_55%_70%,rgba(160,21,220,.10),transparent_70%)] blur-[20px]" />
  );
}

export function PageHero({ label, title, accent, intro, children }: { label: string; title: string; accent: string; intro?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden pt-[170px] pb-[60px]">
      <Aurora />
      <div className="relative mx-auto max-w-[1240px] px-7">
        <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase">{label}</span>
        <h1 className="mt-[22px] mb-[26px] max-w-[1000px] text-[clamp(42px,6vw,88px)] leading-[0.98] font-bold tracking-[-0.055em]">
          {title} <span className="text-muted">{accent}</span>
        </h1>
        {intro && <p className="max-w-[720px] text-xl text-ink-soft">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function JumpLinks({ links }: { links: readonly { label: string; href: string }[] }) {
  return (
    <div className="mt-[30px] flex flex-wrap gap-2.5">
      {links.map((l) => (
        <a key={l.href} href={l.href} className="rounded-full border border-line bg-white px-[18px] py-2.5 font-semibold hover:border-purple-deep/25 hover:text-purple-deep">{l.label}</a>
      ))}
    </div>
  );
}
