import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Matches any domain
      },
      {
        protocol: "http",
        hostname: "**", // Matches any non-secure domain if required
      },
    ],
  },
};

export default nextConfig;
