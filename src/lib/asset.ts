/**
 * Prefixes a public-directory path with the deployment's basePath.
 *
 * Next rewrites its own build output for basePath, but not paths we author
 * ourselves — an <Image src="/images/…"> or a url() inside CSS is emitted
 * verbatim and 404s while the site is served from a subdirectory. Anything
 * pointing into `public/` must go through here.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path.startsWith("/")) {
    throw new Error(`asset() needs a root-relative path, received "${path}"`);
  }
  return `${basePath}${path}`;
}
