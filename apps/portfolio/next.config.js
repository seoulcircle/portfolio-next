/* eslint-disable @typescript-eslint/no-require-imports */
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin");
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
      "@components": path.resolve(process.cwd(), "packages/components"),
      "@hooks": path.resolve(process.cwd(), "packages/hooks"),
      "@ui": path.resolve(process.cwd(), "packages/ui"),
      "@styles": path.resolve(process.cwd(), "packages/styles"),
      "@theme": path.resolve(process.cwd(), "packages/theme"),
      "@animations": path.resolve(process.cwd(), "packages/animations"),
      "@": path.resolve(process.cwd(), "apps/portfolio"),
    };
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../../tsconfig.base.json"),
      }),
    ];
    return config;
  },
};

module.exports = nextConfig;
