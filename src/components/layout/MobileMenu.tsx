"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { LINKS, NAV, SITE } from "@/content";

export function MobileMenu({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label="Menu" className="fixed inset-0 z-[60] flex flex-col gap-[22px] bg-white px-7 pt-[100px] pb-7 text-[26px] font-semibold tracking-[-0.02em] text-ink">
      <button ref={closeRef} type="button" aria-label="Close menu" onClick={onClose} className="absolute top-[18px] right-5 h-11 w-11 text-3xl">
        ×
      </button>
      {NAV.map((n) => (
        <Link key={n.href} href={n.href} onClick={onClose}>
          {n.label}
        </Link>
      ))}
      <Link href={LINKS.startProject} onClick={onClose} className="mt-2 inline-flex h-12 items-center self-start rounded-full bg-purple-deep px-[22px] text-[17px] text-white">
        {SITE.startLabel} →
      </Link>
    </div>
  );
}
