"use client";

import { useRef, useState, type FormEvent } from "react";
import { CONTACT, CONTACT_PAGE, START_OPTIONS, TOPICS } from "@/content";
import { enquirySchema, type EnquiryTopic } from "@/lib/validation";
import { sendEnquiry, type FieldErrors, type FormStatus } from "./form-state";
import { Field, inputClass } from "./Field";

const F = CONTACT_PAGE.form;

export function EnquiryForm({ accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "", initialTopic = "Engineering project", minDelayMs = 3000 }: {
  accessKey?: string; initialTopic?: EnquiryTopic; minDelayMs?: number;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [mountedAt] = useState(() => Date.now());
  const thanks = useRef<HTMLDivElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    if (String(form.get("company_website") ?? "") !== "") return;
    const parsed = enquirySchema.safeParse(Object.fromEntries(form));
    if (!parsed.success) {
      const fe = parsed.error.flatten().fieldErrors;
      setErrors(Object.fromEntries(Object.entries(fe).map(([k, v]) => [k, v?.[0]])) as FieldErrors);
      return;
    }
    setErrors({});
    if (Date.now() - mountedAt < minDelayMs) return;
    if (!accessKey) return setStatus("unconfigured");
    setStatus("sending");
    const ok = await sendEnquiry(accessKey, parsed.data);
    setStatus(ok ? "sent" : "error");
    if (ok) requestAnimationFrame(() => thanks.current?.focus());
  }

  if (status === "sent") {
    return (
      <div ref={thanks} tabIndex={-1} role="status" className="px-2.5 py-10 text-center">
        <b className="mb-2 block text-2xl tracking-[-0.02em]">{F.sentTitle}</b>
        {F.sentBody}
      </div>
    );
  }

  const invalid = Object.keys(errors).length > 0;
  const err = (k: keyof FieldErrors) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `f-${k}-error` : undefined });
  const mailto = <a className="font-semibold text-purple-deep underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>;
  return (
    <form onSubmit={onSubmit} noValidate className="relative">
      {invalid && <p role="alert" className="mb-4 rounded-lg bg-tint px-3.5 py-2.5 text-sm text-ink">{F.errorSummary}</p>}
      <fieldset className="mb-[22px]">
        <legend className="mb-2 font-semibold text-ink">{F.topicLegend}</legend>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <label key={t} className="cursor-pointer rounded-full border border-line bg-mist px-4 py-2.5 font-medium has-checked:border-ink has-checked:bg-ink has-checked:text-white has-focus-visible:outline-2 has-focus-visible:outline-purple-deep">
              <input type="radio" name="topic" value={t} defaultChecked={t === initialTopic} className="sr-only" />
              {F.topicLabels[t]}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-x-4 min-[901px]:grid-cols-2">
        <Field id="f-name" label={F.name} error={errors.name}><input id="f-name" name="name" autoComplete="name" className={inputClass} {...err("name")} /></Field>
        <Field id="f-email" label={F.email} error={errors.email}><input id="f-email" name="email" type="email" autoComplete="email" className={inputClass} {...err("email")} /></Field>
      </div>
      <Field id="f-org" label={F.organisation} optional={F.optional}><input id="f-org" name="organisation" autoComplete="organization" className={inputClass} /></Field>
      <Field id="f-message" label={F.message} error={errors.message}>
        <textarea id="f-message" name="message" placeholder={F.messagePlaceholder} className={`${inputClass} min-h-[140px] resize-y`} {...err("message")} />
      </Field>
      <Field id="f-start" label={F.start} optional={F.optional}>
        <select id="f-start" name="start" defaultValue="" className={inputClass}>
          <option value="">{F.startPlaceholder}</option>
          {START_OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
      </Field>
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px]" />
      <button type="submit" disabled={status === "sending"} className="inline-flex h-[54px] w-full items-center justify-center gap-2.5 rounded-full bg-purple-deep text-[17px] font-semibold text-white hover:bg-purple-deep/90 disabled:opacity-60">
        {status === "sending" ? F.sending : <>{F.submit} <span aria-hidden="true">→</span></>}
      </button>
      {status === "unconfigured" && <p role="alert" className="mt-3 text-center text-sm">{F.unconfigured} {mailto}.</p>}
      {status === "error" && <p role="alert" className="mt-3 text-center text-sm">{F.failed} {mailto}.</p>}
      <p className="mt-3 text-center text-[13px] text-muted">{F.privacy}</p>
    </form>
  );
}
