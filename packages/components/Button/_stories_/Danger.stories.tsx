import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta: Meta<typeof Button> = {
  title: "Component/Button/Danger",
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
    variant: "danger",
  },
};

export const Hover: Story = {
  args: {
    children: "Hover",
    variant: "danger",
    className: "pseudo-hover",
  },
};

export const Active: Story = {
  args: {
    children: "Active",
    variant: "danger",
    className: "pseudo-active",
  },
};

export const Focus: Story = {
  args: {
    children: "Focus",
    variant: "danger",
    className: "pseudo-focus",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    variant: "danger",
    disabled: true,
  },
};
