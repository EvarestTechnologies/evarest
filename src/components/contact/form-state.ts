import type { Enquiry } from "@/lib/validation";

export type FormStatus = "idle" | "sending" | "sent" | "error" | "unconfigured";
export type FieldErrors = Partial<Record<keyof Enquiry, string>>;

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
/** Where Web3Forms sends visitors who submitted without JavaScript. */
export const THANKS_URL = "https://evarestke.com/contact/thanks/";

/** Sends an enquiry through Web3Forms. Resolves true only when Web3Forms reports success. */
export async function sendEnquiry(accessKey: string, data: Enquiry): Promise<boolean> {
  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: accessKey, subject: `Evarest website: ${data.topic}`, from_name: "evarestke.com", ...data }),
    });
    const body = (await res.json()) as { success?: boolean };
    return res.ok && body.success === true;
  } catch {
    return false;
  }
}
