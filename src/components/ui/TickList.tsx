import type { Point } from "@/content";

export function TickList({ items }: { items: readonly Point[] }) {
  return (
    <ul className="mb-[30px] grid gap-3.5">
      {items.map((p) => (
        <li key={p.title} className="grid grid-cols-[28px_1fr] gap-3 text-[16.5px] text-ink-soft">
          <i aria-hidden="true" className="grid h-7 w-7 place-items-center rounded-lg border border-line bg-white font-bold text-mint-deep not-italic">✓</i>
          <div>
            <b className="block text-[17px] text-ink">{p.title}</b>
            {p.body}
          </div>
        </li>
      ))}
    </ul>
  );
}
