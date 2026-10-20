import { describe, expect, it } from "vitest";
import { enquirySchema, topicFromQuery } from "./validation";

describe("topicFromQuery", () => {
  it("returns Product partnership only for exactly 'partner'", () => {
    expect(topicFromQuery("partner")).toBe("Product partnership");
  });
  it.each(["PARTNER", "<script>", "", null, "project"])("returns Engineering project for %s", (t) => {
    expect(topicFromQuery(t)).toBe("Engineering project");
  });
});

describe("enquirySchema", () => {
  const ok = { topic: "Engineering project", name: "Amina", email: "amina@example.com", message: "We need an API built." };
  it("accepts a valid enquiry", () => {
    expect(enquirySchema.safeParse(ok).success).toBe(true);
  });
  it("rejects a missing name, a bad email and a short message, with field errors", () => {
    const r = enquirySchema.safeParse({ ...ok, name: "", email: "nope", message: "short" });
    expect(r.success).toBe(false);
    const fields = r.success ? {} : r.error.flatten().fieldErrors;
    expect(Object.keys(fields).sort()).toEqual(["email", "message", "name"]);
  });
});
