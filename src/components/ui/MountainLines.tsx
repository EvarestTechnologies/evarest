// The wireframe mountain from public/brand/evarest-logo-transparent.svg.
const PATH =
  "M 120 280 L 380 280 M 120 280 L 185 200 L 220 245 M 185 200 L 175 280 M 120 280 L 195 255 L 175 280 M 205 225 L 250 145 L 325 280 M 250 145 L 225 185 L 250 190 L 210 260 M 225 280 L 250 240 L 275 280 M 270 250 L 315 195 L 380 280 M 315 195 L 340 280";

export function MountainLines({ className = "", strokeWidth = 1, withTrail = false }: { className?: string; strokeWidth?: number; withTrail?: boolean }) {
  return (
    <svg viewBox="105 120 290 175" className={className} aria-hidden="true" focusable="false">
      <path d={PATH} className="stroke-purple" strokeWidth={strokeWidth} fill="none" strokeLinejoin="round" strokeLinecap="round" />
      {withTrail && (
        <g transform="rotate(-45, 250, 200)" className="stroke-mint" strokeWidth={strokeWidth} strokeLinecap="round">
          <line x1="242" y1="205" x2="275" y2="205" />
          <line x1="250" y1="193" x2="285" y2="193" />
        </g>
      )}
    </svg>
  );
}
