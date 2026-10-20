import Link from "next/link";
import { MountainLines } from "./MountainLines";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" aria-label="Evarest home" className="flex items-center gap-2.5">
      <MountainLines className="h-auto w-[34px]" strokeWidth={12} withTrail />
      <span className={`font-wordmark text-[15px] font-bold tracking-[0.2em] ${onDark ? "text-white" : "text-ink"}`}>
        EVAR<span className={onDark ? "text-mint" : "text-mint-deep"}>EST</span>
      </span>
    </Link>
  );
}
