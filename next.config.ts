import type { NextConfig } from "next";

//allow images from all sources in remote patterns and
//resolve this error - [ ⨯ The requested resource "https://placehold.co/600x400" has type "image/svg+xml" but dangerouslyAllowSVG is disabled ] with dangerouslyAllowSVG: true

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  experimental: {
    ppr: "incremental",
  },
  // devindicators will help us visualize what is happening with ppr
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
