import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "faculty.kiit.ac.in",
      },
      {
        protocol: "https",
        hostname: "kiit.ac.in",
      }
    ]
  }
};

export default nextConfig;
