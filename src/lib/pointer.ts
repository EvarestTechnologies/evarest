import { useSyncExternalStore } from "react";

const QUERY = "(hover: hover) and (pointer: fine)";

/** A mouse or trackpad that can hover. Touch screens return false. */
export function hasFinePointer(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia(QUERY).matches
  );
}

const subscribe = (onChange: () => void) => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return () => {};
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};

/**
 * hasFinePointer() as a hook. It uses useSyncExternalStore rather than
 * setState in an effect, which the project's react-hooks lint rules forbid.
 * The server snapshot is false, so hover-only UI never renders into static HTML.
 */
export function useFinePointer(): boolean {
  return useSyncExternalStore(subscribe, hasFinePointer, () => false);
}
