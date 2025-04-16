import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "Design Tokens/Typography",
  component: Typography,
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["p", "h1", "h2", "h3", "h4", "span"],
    },
    variant: {
      control: { type: "select" },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "body",
        "button",
        "caption-1",
        "caption-2",
      ],
    },
    weight: {
      control: { type: "select" },
      options: ["light", "regular", "medium", "bold"],
    },
    textAlign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    truncate: {
      control: "boolean",
    },
    italic: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
};

export default meta;

export const Playground: StoryObj<typeof Typography> = {
  args: {
    as: "p",
    variant: "body",
    weight: "regular",
    textAlign: "left",
    truncate: false,
    italic: false,
    children: "This is an example of a Typography component",
  },
};
