import Link from "next/link";
import type { ReactNode } from "react";
import { Magnetic } from "@/components/motion/Magnetic";

const STYLES = {
  primary: "bg-purple-deep text-white hover:bg-purple-deep/90",
  ghost: "border-[1.5px] border-purple-deep/25 bg-white text-ink hover:border-purple-deep hover:text-purple-deep",
  light: "bg-white text-ink hover:bg-tint",
  ghostLight: "border-[1.5px] border-white/50 text-white hover:border-white",
} as const;

export function Button({
  href,
  variant = "primary",
  magnetic = false,
  arrow = false,
  className = "",
  children,
}: {
  href: string;
  variant?: keyof typeof STYLES;
  magnetic?: boolean;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const external = href.startsWith("http");
  const cls = `group inline-flex h-12 items-center gap-2.5 rounded-full px-[22px] font-semibold transition-colors ${STYLES[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>}
    </>
  );
  const link = external ? (
    <a href={href} className={cls}>{inner}</a>
  ) : (
    <Link href={href} className={cls}>{inner}</Link>
  );
  return magnetic ? <Magnetic strength={0.25}>{link}</Magnetic> : link;
}
