import type { ReactNode } from "react";

export function Field({ id, label, optional, error, children }: { id: string; label: string; optional?: string; error?: string; children: ReactNode }) {
  return (
    <div className="mb-[18px]">
      <label htmlFor={id} className="mb-2 block text-[15px] font-semibold text-ink">
        {label} {optional && <span className="font-normal text-muted">{optional}</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-[13px] text-purple-deep">{error}</p>}
    </div>
  );
}

export const inputClass =
  "w-full rounded-[10px] border border-[color-mix(in_srgb,var(--color-line),var(--color-ink)_8%)] bg-white px-3.5 py-[13px] text-base text-ink focus:border-purple-deep focus:shadow-[0_0_0_4px_rgba(134,29,175,.12)] focus:outline-none aria-[invalid=true]:border-purple-deep";
