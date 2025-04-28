import type { StorybookConfig } from "@storybook/nextjs"; // or your builder
import path from "path";

const config: StorybookConfig = {
  stories: ["../packages/components/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-pseudo-states",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // optional: resolve alias
    config.resolve!.alias = {
      ...(config.resolve!.alias || {}),
      "@components": path.resolve(__dirname, "../packages/components"),
      "@styles": path.resolve(__dirname, "../packages/styles"),
    };
    return config;
  },
};

export default config;
