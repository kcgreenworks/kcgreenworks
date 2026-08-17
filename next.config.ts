import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kcgreenworks.com" }],
        destination: "https://kcgreenworks.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
