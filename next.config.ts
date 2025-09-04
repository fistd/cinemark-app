import type { NextConfig } from "next";

const isGH = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGH ? '/cinemark-app' : undefined,
  assetPrefix: isGH ? '/cinemark-app/' : undefined,
};

export default nextConfig;
