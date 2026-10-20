import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const css = readFileSync("src/app/globals.css", "utf8");
const token = (name: string) => css.match(new RegExp(`--color-${name}: (#[0-9a-f]{6})`))![1];

function lum(hex: string) {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
const contrast = (a: string, b: string) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
/** `fg` at `alpha` over `bg`, as hex. */
function over(fg: string, alpha: number, bg: string) {
  const ch = (h: string, i: number) => parseInt(h.slice(i, i + 2), 16);
  return "#" + [1, 3, 5].map((i) => Math.round(ch(fg, i) * alpha + ch(bg, i) * (1 - alpha)).toString(16).padStart(2, "0")).join("");
}

describe("colour contrast", () => {
  it("mint-deep small text passes AA on the status pill over tint, mist and white", () => {
    for (const bg of [token("tint"), token("mist"), "#ffffff"]) {
      expect(contrast(token("mint-deep"), over(token("mint"), 0.1, bg))).toBeGreaterThanOrEqual(4.5);
    }
  });
  it("dark sections switch the focus ring to a light colour", () => {
    expect(css).toMatch(/\.on-dark :focus-visible\s*\{[^}]*outline-color:\s*var\(--color-mint\)/);
  });
});
