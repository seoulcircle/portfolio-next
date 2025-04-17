import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Component/Toggle",
  component: Toggle,
};
export default meta;

type Story = StoryObj<typeof Toggle>;

export type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

const ToggleWrapper = (args: ToggleProps) => {
  const [checked, setChecked] = useState(false);
  return <Toggle {...args} checked={checked} onChange={setChecked} />;
};

export const Default: Story = {
  render: ToggleWrapper,
};

export const Disabled: Story = {
  args: {
    checked: true,
    disabled: true,
    onChange: () => {},
  },
};
