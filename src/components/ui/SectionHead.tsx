export function SectionHead({ label, title, intro, className = "" }: { label: string; title: string; intro?: string; className?: string }) {
  return (
    <div className={`mb-16 max-w-[680px] ${className}`}>
      <span className="font-mono text-xs font-medium tracking-[0.12em] text-muted uppercase">{label}</span>
      <h2 className="mt-4 mb-[18px] text-[clamp(32px,3.6vw,48px)] leading-[1.05] font-bold tracking-[-0.04em]">{title}</h2>
      {intro && <p className="text-[19px] text-ink-soft">{intro}</p>}
    </div>
  );
}
