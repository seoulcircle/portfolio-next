import React from "react";
import { ThemeProvider } from "@emotion/react";

import type { Preview } from "@storybook/react";
import "../packages/styles/theme-light.css";
import "../packages/styles/theme-dark.css";
import "../packages/styles/alias.css";
import "../packages/styles/base.css";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: "alphabetical", // 기본 오름차순 보장
      },
    },
  },
  decorators: [
    (Story, context) => {
      const mode = context.globals.theme || "light";
      document.documentElement.setAttribute("data-theme", mode);
      document.body.style.backgroundColor = mode === "dark" ? "#000" : "#fff";

      return (
        <ThemeProvider theme={{ mode }}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
