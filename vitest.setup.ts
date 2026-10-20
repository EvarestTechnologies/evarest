import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

// Vitest globals are off, so Testing Library cannot register its own cleanup.
afterEach(() => cleanup());

// jsdom has no matchMedia. Fine pointer defaults to false (a touch device);
// tests opt in with setFinePointer(true).
let finePointer = false;
let reducedMotion = false;
(globalThis as { setFinePointer?: (v: boolean) => void }).setFinePointer = (v) => {
  finePointer = v;
};
(globalThis as { setReducedMotion?: (v: boolean) => void }).setReducedMotion = (v) => {
  reducedMotion = v;
};
afterEach(() => {
  finePointer = false;
  reducedMotion = false;
});
window.matchMedia = (query: string) =>
  ({
    matches: query.includes("pointer: fine")
      ? finePointer
      : query.includes("prefers-reduced-motion: reduce")
        ? reducedMotion
        : false,
    media: query,
    onchange: null,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => false,
  }) as MediaQueryList;

// motion's whileInView and useInView need IntersectionObserver. This stub
// reports every element as in view immediately.
class IO {
  constructor(private cb: IntersectionObserverCallback) {}
  observe(el: Element) {
    this.cb([{ isIntersecting: true, target: el } as IntersectionObserverEntry], this as never);
  }
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
vi.stubGlobal("IntersectionObserver", IO);
