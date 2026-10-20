/** True the first time it is called for `key` in this browser session. False if storage is blocked. */
export function isFirstVisit(key: string): boolean {
  try {
    if (sessionStorage.getItem(key) === "1") return false;
    sessionStorage.setItem(key, "1");
    return true;
  } catch {
    return false;
  }
}
