import { z } from "zod";
import { START_OPTIONS, TOPICS } from "@/content/contact";

export type EnquiryTopic = (typeof TOPICS)[number];

export const enquirySchema = z.object({
  topic: z.enum(TOPICS),
  name: z.string().trim().min(1, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address."),
  organisation: z.string().trim().max(160).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please tell us a little more (at least 10 characters).").max(4000),
  start: z.enum(START_OPTIONS).optional().or(z.literal("")),
});

export type Enquiry = z.infer<typeof enquirySchema>;

/** Only the exact value "partner" selects the partnership topic. Anything else is a project. */
export function topicFromQuery(t: string | null): EnquiryTopic {
  return t === "partner" ? "Product partnership" : "Engineering project";
}
