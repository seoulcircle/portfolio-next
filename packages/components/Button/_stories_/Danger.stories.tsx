import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";

const meta: Meta<typeof Button> = {
  title: "Component/Button/3. Danger",
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
    variant: "danger",
  },
};

export const Hover: Story = {
  args: {
    as: "button",
    children: "Hover",
    variant: "danger",
    className: "pseudo-hover",
  },
};

export const Active: Story = {
  args: {
    as: "button",
    children: "Active",
    variant: "danger",
    className: "pseudo-active",
  },
};

export const Focus: Story = {
  args: {
    as: "button",
    children: "Focus",
    variant: "danger",
    className: "pseudo-focus",
  },
};

export const Disabled: Story = {
  args: {
    as: "button",
    children: "Disabled",
    variant: "danger",
    disabled: true,
  },
};
