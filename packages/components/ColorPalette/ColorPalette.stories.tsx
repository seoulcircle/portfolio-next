import { ColorPalette } from "./ColorPalette";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ColorPalette> = {
  title: "Design Tokens/ColorPalette",
  component: ColorPalette,
};

export default meta;

type Story = StoryObj<typeof ColorPalette>;

export const 기본: Story = {
  render: () => <ColorPalette />,
};
