import { Meta, StoryObj } from "@storybook/react";
import TextButton from "./TextButton";
import { ArrowRight } from "lucide-react";

const meta: Meta<typeof TextButton> = {
  title: "Button/TextButton",
  component: TextButton,
  tags: ["autodocs"], // addon-docs용
  argTypes: {
    variant: {
      control: "radio",
      options: ["black", "white"],
    },
    size: {
      control: "radio",
      options: ["xs", "sm", "md", "lg"],
    },
    icon: { control: false },
    showIcon: { control: "boolean", name: "icon" },
  },
};
export default meta;

type Story = StoryObj<typeof TextButton>;

export const ToggleIcon: Story = {
  args: {
    children: "DEMO",
    showIcon: true,
  },
  render: ({ showIcon, ...args }) => (
    <TextButton
      {...args}
      icon={showIcon ? <ArrowRight size={18} /> : undefined}
    />
  ),
};

export const Primary: Story = {
  args: {
    children: "DEMO",
    variant: "black",
    size: "md",
    href: "/",
    showIcon: true,
  },
  render: ({ showIcon, ...args }) => (
    <TextButton
      {...args}
      icon={showIcon ? <ArrowRight size={18} /> : undefined}
    />
  ),
};
