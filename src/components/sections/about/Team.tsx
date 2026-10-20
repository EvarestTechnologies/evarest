import { ABOUT, FOUNDERS } from "@/content";
import { asset } from "@/lib/asset";
import { Reveal } from "@/components/motion/Reveal";

const LI = "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3v-11zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1v5.36h-4v-4.75c0-1.13-.02-2.59-1.58-2.59-1.58 0-1.82 1.23-1.82 2.5v4.84h-4v-11z";

export function Team() {
  const t = ABOUT.team;
  return (
    <section className="border-t border-line bg-mist pt-[110px] pb-[120px]">
      <div className="mx-auto max-w-[1240px] px-7">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase">{t.label}</span>
            <h2 className="mt-3.5 text-[clamp(32px,3.6vw,48px)] leading-[1.05] font-bold tracking-[-0.04em]">{t.title}</h2>
          </div>
          <p className="max-w-[380px] text-ink-soft">{t.intro}</p>
        </div>
        <ul className="grid gap-4 min-[601px]:grid-cols-2 min-[601px]:gap-[26px] min-[901px]:grid-cols-4">
          {FOUNDERS.map((f) => (
            <Reveal as="li" key={f.name} className="group grid grid-cols-[112px_1fr] gap-x-4 rounded-2xl border border-line bg-white p-3 pb-[18px] transition-[transform,box-shadow] duration-500 fine:hover:-translate-y-1 fine:hover:shadow-[0_26px_50px_-28px_rgba(42,10,58,.3)] min-[601px]:block">
              <div className="row-span-2 aspect-[4/5] overflow-hidden rounded-[10px] bg-tint min-[601px]:mb-4">
                <img src={asset(f.photo)} alt={f.name} width={320} height={320} loading="lazy"
                  className="h-full w-full object-cover transition-[filter,transform] duration-700 fine:grayscale fine:group-hover:scale-[1.04] fine:group-hover:grayscale-0" />
              </div>
              <div className="flex items-center justify-between gap-2.5 pt-1 min-[601px]:px-1.5 min-[601px]:pt-0">
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em]">{f.name}</h3>
                  <span className="mt-0.5 block text-[14.5px] text-muted">{f.role}</span>
                </div>
                <a href={f.linkedin} aria-label={`${f.name} on LinkedIn`} className="grid h-[38px] w-[38px] flex-none place-items-center rounded-[10px] border border-line text-purple-deep hover:bg-tint">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[17px] w-[17px]"><path d={LI} /></svg>
                </a>
              </div>
              <p className="mt-2 text-[14.5px] leading-normal text-ink-soft min-[601px]:mx-1.5 min-[601px]:mt-3">{f.bio}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
