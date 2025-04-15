import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta: Meta<typeof Button> = {
  title: "Component/Button/Outline",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    children: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Enabled: Story = {
  args: {
    children: "Enabled",
    variant: "outline",
  },
};

export const Hover: Story = {
  args: {
    children: "Hover",
    variant: "outline",
    className: "pseudo-hover",
  },
};

export const Active: Story = {
  args: {
    children: "Active",
    variant: "outline",
    className: "pseudo-active",
  },
};

export const Focus: Story = {
  args: {
    children: "Focus",
    variant: "outline",
    className: "pseudo-focus",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "outline",
    disabled: true,
  },
};
