import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta: Meta<typeof Button> = {
  title: "Component/Button/1. Primary",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    children: { control: "text" },
    icon: { table: { disable: true } },
    iconPosition: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Enabled: Story = {
  args: {
    as: "button",
    children: "Enabled",
    variant: "primary",
  },
};

export const Hover: Story = {
  args: {
    as: "button",
    children: "Hover",
    variant: "primary",
    className: "pseudo-hover",
  },
};

export const Active: Story = {
  args: {
    as: "button",
    children: "Active",
    variant: "primary",
    className: "pseudo-active",
  },
};

export const Focus: Story = {
  args: {
    as: "button",
    children: "Focus",
    variant: "primary",
    className: "pseudo-focus",
  },
};

export const Disabled: Story = {
  args: {
    as: "button",
    children: "Disabled",
    variant: "primary",
    disabled: true,
  },
};
