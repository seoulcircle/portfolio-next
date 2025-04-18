import { Color } from "./Color";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Color> = {
  title: "Design Tokens/Color",
  component: Color,
};

export default meta;

type Story = StoryObj<typeof Color>;

export const 기본: Story = {
  render: () => <Color />,
};
