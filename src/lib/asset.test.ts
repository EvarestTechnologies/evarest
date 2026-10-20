import { describe, expect, it } from "vitest";
import { asset } from "./asset";

/**
 * Phase 1 serves the site from a subdirectory, and a path that misses the
 * prefix 404s silently in production — a broken cover image, or fonts quietly
 * falling back to system defaults. These tests pin the contract.
 */
describe("asset", () => {
  it("returns the path unchanged when no basePath is set", () => {
    // The suite runs without NEXT_PUBLIC_BASE_PATH, matching a root deploy.
    expect(asset("/images/fyc/baba-cover.jpg")).toBe("/images/fyc/baba-cover.jpg");
  });

  it("rejects a path that is not root-relative", () => {
    expect(() => asset("images/fyc/baba-cover.jpg")).toThrow(/root-relative/);
  });
});
