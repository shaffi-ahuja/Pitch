import type { NextConfig } from "next";
  
  //allow images from all sources in remote patterns and
//resolve this error - [ ⨯ The requested resource "https://placehold.co/600x400" has type "image/svg+xml" but dangerouslyAllowSVG is disabled ] with dangerouslyAllowSVG: true
  
const nextConfig: NextConfig = {


  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'*'
      },
    ]
  }
};

export default nextConfig;
