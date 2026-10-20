"use client";

import { useSearchParams } from "next/navigation";
import { topicFromQuery } from "@/lib/validation";
import { EnquiryForm } from "./EnquiryForm";

/** Reads ?t= so "Partner with us" links open the form on the partnership topic. */
export function FormFromQuery() {
  const t = useSearchParams().get("t");
  return <EnquiryForm key={t ?? ""} initialTopic={topicFromQuery(t)} />;
}
