import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
  transpilePackages: [
    "@1chooo/ui",
    "@1chooo/activity-calendar",
    "@1chooo/github-calendar",
  ],
  turbopack: {
    root: path.join(__dirname, "../.."),
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
 
module.exports = withBundleAnalyzer(nextConfig);
