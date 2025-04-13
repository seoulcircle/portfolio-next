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
      "@components": require("path").resolve(
        __dirname,
        "../../packages/components"
      ),
      "@hooks": require("path").resolve(__dirname, "../../packages/hooks"),
      "@ui": require("path").resolve(__dirname, "../../packages/ui"),
      "@styles": require("path").resolve(__dirname, "../../packages/styles"),
      "@theme": require("path").resolve(__dirname, "../../packages/theme"),
      "@animations": require("path").resolve(
        __dirname,
        "../../packages/animations"
      ),
      "@": require("path").resolve(__dirname, "./src"),
    };
    return config;
  },
};

export default nextConfig;
