// .storybook/main.ts
import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/experimental-addon-test",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@components": path.resolve(__dirname, "../../../packages/components"),
      "@hooks": path.resolve(__dirname, "../../../packages/hooks"),
      "@ui": path.resolve(__dirname, "../../../packages/ui"),
      "@styles": path.resolve(__dirname, "../../../packages/styles"),
      "@theme": path.resolve(__dirname, "../../../packages/theme"),
      "@animations": path.resolve(__dirname, "../../../packages/animations"),
      "@": path.resolve(__dirname, "../src"), // apps/portfolio/src
    };
    return config;
  },
};

export default config;
