/* eslint-disable @typescript-eslint/no-require-imports */

const path = require("path");
/* eslint-enable @typescript-eslint/no-require-imports */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@components": path.resolve(__dirname, "../../packages/components"),
      "@hooks": path.resolve(__dirname, "../../packages/hooks"),
      "@ui": path.resolve(__dirname, "../../packages/ui"),
      "@styles": path.resolve(__dirname, "../../packages/styles"),
      "@theme": path.resolve(__dirname, "../../packages/theme"),
      "@animations": path.resolve(__dirname, "../../packages/animations"),
      "@": path.resolve(__dirname),
    };

    return config;
  },
};

module.exports = nextConfig;
