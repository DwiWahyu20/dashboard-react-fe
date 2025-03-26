import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY
  },
  output: process.env.IS_OUTPUT_EXPORT ? "export" : "standalone",
  // basePath: "/",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        basePath: false,
        permanent: false,
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.justboil.me",
      },
    ],
  },
};

export default nextConfig;
