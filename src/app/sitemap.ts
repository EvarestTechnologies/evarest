import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const ROUTES = ["", "products/", "engineering/", "work/", "about/", "contact/", "zeya/privacy/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({ url: `https://evarestke.com/${r}`, changeFrequency: "monthly", priority: r === "" ? 1 : 0.7 }));
}
