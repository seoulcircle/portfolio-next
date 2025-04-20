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
    const pathDepth = process.env.CI ? "../../../" : "../../";

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@components": path.resolve(__dirname, `${pathDepth}packages/components`),
      "@hooks": path.resolve(__dirname, `${pathDepth}packages/hooks`),
      "@ui": path.resolve(__dirname, `${pathDepth}packages/ui`),
      "@styles": path.resolve(__dirname, `${pathDepth}packages/styles`),
      "@theme": path.resolve(__dirname, `${pathDepth}packages/theme`),
      "@animations": path.resolve(__dirname, `${pathDepth}packages/animations`),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@": path.resolve(__dirname), // apps/portfolio
    };

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "./tsconfig.base.json"),
      }),
    ];

    return config;
  },
};

module.exports = nextConfig;
