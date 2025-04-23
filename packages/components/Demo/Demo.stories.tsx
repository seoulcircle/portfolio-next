import type { Meta, StoryObj } from "@storybook/react";
import Demo from "./Demo";

const meta: Meta<typeof Demo> = {
  title: "Demo Page/Demo",
  component: Demo,
};

export default meta;

export const DemoPage: StoryObj<typeof Demo> = {};
