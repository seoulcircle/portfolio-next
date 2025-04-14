// apps/portfolio/next.config.ts
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import path from "path";
import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config: Configuration) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@components": path.resolve(process.cwd(), "packages/components"),
      "@hooks": path.resolve(process.cwd(), "packages/hooks"),
      "@ui": path.resolve(process.cwd(), "packages/ui"),
      "@styles": path.resolve(process.cwd(), "packages/styles"),
      "@theme": path.resolve(process.cwd(), "packages/theme"),
      "@animations": path.resolve(process.cwd(), "packages/animations"),
      "@": path.resolve(process.cwd(), "apps/portfolio/src"),
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

export default nextConfig;
