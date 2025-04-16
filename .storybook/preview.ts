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
      const theme = context.globals.theme || "light";
      document.documentElement.setAttribute("data-theme", theme);
      const background = theme === "dark" ? "#000000" : "#ffffff";
      document.body.style.backgroundColor = background;

      return Story();
    },
  ],
};

export default preview;
