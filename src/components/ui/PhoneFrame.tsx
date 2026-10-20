import type { ReactNode } from "react";

/** A phone with its bottom cut off by the card (size "card") or a whole phone ("large"). */
export function PhoneFrame({ size, children }: { size: "card" | "large"; children: ReactNode }) {
  const large = size === "large";
  return (
    <div className={`bg-ink p-2 shadow-[0_30px_60px_-25px_rgba(42,10,58,0.45)] ${large ? "w-[230px] rounded-[40px] min-[901px]:w-[280px] min-[901px]:p-2.5" : "w-[230px] rounded-t-[32px] pb-0"}`}>
      <div className={`overflow-hidden bg-wa-bg ${large ? "h-[440px] rounded-[31px] min-[901px]:h-[560px]" : "h-[330px] rounded-t-[25px]"}`}>{children}</div>
    </div>
  );
}
