import { ABOUT } from "@/content";
import { asset } from "@/lib/asset";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";

export function PhotoBand() {
  const p = ABOUT.photo;
  return (
    <section className="relative h-[46vh] overflow-hidden min-[901px]:h-[min(78vh,720px)]">
      <Parallax speed={0.18} className="absolute inset-0">
        <img src={asset(p.src)} alt={p.alt} width={2000} height={1339} loading="lazy" className="h-full w-full object-cover object-[center_40%]" />
      </Parallax>
      <span className="absolute bottom-6 left-7 rounded-full bg-ink/55 px-3 py-[7px] font-mono text-[12.5px] text-white backdrop-blur-sm">{p.caption}</span>
    </section>
  );
}

export function VisionMission() {
  const rows = [
    { ...ABOUT.vision, big: true },
    { ...ABOUT.mission, big: false },
  ];
  return (
    <section className="py-[70px] min-[601px]:py-[120px]">
      <div className="mx-auto max-w-[1240px] px-7">
        {rows.map((r) => (
          <Reveal key={r.label} className="grid items-baseline gap-[18px] border-t border-line py-[30px] last:border-b min-[601px]:py-11 min-[901px]:grid-cols-[220px_1fr] min-[901px]:gap-10">
            <h2 className="flex items-center gap-2.5 font-mono text-[13px] font-medium tracking-[0.12em] text-muted uppercase before:h-0.5 before:w-[22px] before:bg-mint">{r.label}</h2>
            <p className={r.big ? "text-[clamp(26px,3vw,42px)] leading-[1.15] font-semibold tracking-[-0.035em] text-ink" : "text-[clamp(22px,2.3vw,32px)] leading-[1.15] font-medium tracking-[-0.035em] text-ink-soft"}>{r.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
