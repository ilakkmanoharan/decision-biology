import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/founder", destination: "/", permanent: false }];
  },
};

export default nextConfig;
