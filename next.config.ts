import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://web.telegram.org;",
          },
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM https://web.telegram.org/",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
