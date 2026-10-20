export type RoadPoint = { x: number; y: number };

/** Stops spaced evenly from 70 to width - 70, alternating between a high and a low bend. */
export function roadPoints(count: number, width: number, height: number): RoadPoint[] {
  const top = Math.round((height * 130) / 420);
  const bottom = Math.round((height * 300) / 420);
  const step = count > 1 ? (width - 140) / (count - 1) : 0;
  return Array.from({ length: count }, (_, i) => ({ x: 70 + i * step, y: i % 2 ? bottom : top }));
}

/** An SVG path that passes through each point with a horizontal tangent, plus a short lead-in and lead-out. */
export function roadPath(pts: RoadPoint[]): string {
  if (pts.length === 0) return "";
  const half = pts.length > 1 ? (pts[1].x - pts[0].x) / 2 : 0;
  let d = `M ${pts[0].x - 50} ${pts[0].y} L ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1];
    const b = pts[i];
    d += ` C ${a.x + half} ${a.y}, ${b.x - half} ${b.y}, ${b.x} ${b.y}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L ${last.x + 50} ${last.y}`;
}
