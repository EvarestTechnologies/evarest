import type { NextConfig } from "next";

// Optional subdirectory deploys (a staging folder) set BASE_PATH. Production serves from the root.
const basePath = process.env.BASE_PATH ?? "";

// Mirrored into the client bundle so src/lib/asset.ts can prefix paths into public/.
process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig: NextConfig = {
  // Hostpinnacle cPanel serves files through Apache with no Node runtime, so the site ships as prerendered HTML.
  output: "export",
  // The export has no image optimiser; images are pre-sized WebP files in public/images.
  images: { unoptimized: true },
  // Apache resolves /about/ to /about/index.html.
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
