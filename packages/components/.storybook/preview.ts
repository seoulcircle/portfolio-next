import type { Preview } from "@storybook/react";
import "../../styles/theme-light.css";
import "../../styles/theme-dark.css";
import "../../styles/alias.css";

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
