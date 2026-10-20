// The Evarest mark (wireframe mountain and mint trail) and wordmark, from public/brand.
export const Mountain = ({ className = '', strokeWidth = 9 }: { className?: string; strokeWidth?: number }) => (
  <svg viewBox="105 120 290 175" className={className} aria-hidden="true">
    <path
      d="M 120 280 L 380 280 M 120 280 L 185 200 L 220 245 M 185 200 L 175 280 M 120 280 L 195 255 L 175 280 M 205 225 L 250 145 L 325 280 M 250 145 L 225 185 L 250 190 L 210 260 M 225 280 L 250 240 L 275 280 M 270 250 L 315 195 L 380 280 M 315 195 L 340 280"
      stroke="#A015DC"
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <g transform="rotate(-45, 250, 200)" stroke="#50E3C2" strokeWidth={strokeWidth} strokeLinecap="round">
      <line x1="210" y1="205" x2="215" y2="205" />
      <line x1="225" y1="205" x2="232" y2="205" />
      <line x1="242" y1="205" x2="275" y2="205" />
      <line x1="285" y1="205" x2="292" y2="205" />
      <line x1="302" y1="205" x2="309" y2="205" />
      <line x1="250" y1="193" x2="285" y2="193" />
      <line x1="295" y1="193" x2="302" y2="193" />
      <line x1="312" y1="193" x2="319" y2="193" />
      <line x1="329" y1="193" x2="336" y2="193" />
    </g>
  </svg>
);

const Logo = ({ onDark = false }: { onDark?: boolean }) => (
  <span className="flex items-center gap-2">
    <Mountain className="w-9 h-auto" />
    <span className={`text-lg font-bold tracking-[0.2em] ${onDark ? 'text-white' : 'text-brand-navy'}`}>
      EVAR<span className={onDark ? 'text-brand-cyan-400' : 'text-brand-cyan-600'}>EST</span>
    </span>
  </span>
);

export default Logo;
