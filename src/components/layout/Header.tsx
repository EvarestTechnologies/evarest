"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { LINKS, NAV, SITE } from "@/content";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "./MobileMenu";

/** Site header. Over the home hero photo (or with overPhoto) text is white until the page scrolls 30px. */
export function Header({ overPhoto = false }: { overPhoto?: boolean }) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    menuButton.current?.focus();
  }, []);

  const light = (overPhoto || path === "/") && !solid;
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${solid ? "bg-white/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : ""}`}>
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-7">
          <Logo onDark={light} />
          <nav aria-label="Main" className="hidden gap-[30px] font-medium min-[901px]:flex">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined}
                className={`transition-colors hover:text-purple-deep ${path === n.href ? "text-purple-deep" : light ? "text-white" : "text-ink-soft"}`}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden min-[901px]:block">
            <Button href={LINKS.startProject} magnetic arrow>{SITE.startLabel}</Button>
          </div>
          <button ref={menuButton} type="button" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-[10px] border border-line bg-white min-[901px]:hidden">
            <span className="block h-0.5 w-[18px] bg-ink" />
            <span className="block h-0.5 w-[18px] bg-ink" />
            <span className="block h-0.5 w-[18px] bg-ink" />
          </button>
        </div>
      </header>
      {open && <MobileMenu onClose={close} />}
    </>
  );
}
