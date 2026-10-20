import { afterEach, describe, expect, it, vi } from "vitest";
import { isFirstVisit } from "./first-visit";

afterEach(() => {
  vi.unstubAllGlobals();
  sessionStorage.clear();
});

describe("isFirstVisit", () => {
  it("is true once, then false", () => {
    expect(isFirstVisit("ev-intro")).toBe(true);
    expect(isFirstVisit("ev-intro")).toBe(false);
  });
  it("is false when sessionStorage throws", () => {
    const blocked = () => {
      throw new Error("blocked");
    };
    vi.stubGlobal("sessionStorage", { getItem: blocked, setItem: blocked });
    expect(isFirstVisit("ev-intro")).toBe(false);
  });
});
