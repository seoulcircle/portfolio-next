import { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";

import { X } from "lucide-react";

const meta: Meta<typeof IconButton> = {
  title: "Button/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    icon: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    size: "md",
  },
  render: ({ ...args }) => <IconButton {...args} icon={<X size={20} />} />,
};
