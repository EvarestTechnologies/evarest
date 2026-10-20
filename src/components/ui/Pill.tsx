import type { ReactNode } from "react";

export function Pill({ children }: { children: ReactNode }) {
  return <span className="inline-block rounded-full border border-mint/40 bg-mint/10 px-[11px] py-1.5 font-mono text-xs leading-[1.45] text-mint-deep">{children}</span>;
}
