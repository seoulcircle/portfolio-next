import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { useState } from "react";

type CheckboxProps = React.ComponentProps<typeof Checkbox>;

const meta: Meta<typeof Checkbox> = {
  title: "Component/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

const Template = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(args.checked ?? false);

  const handleChange = (newChecked: boolean) => {
    setChecked(newChecked);
  };

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const Default = () => {
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Checkbox label="체크박스 1" checked={checked1} onChange={setChecked1} />
      <Checkbox label="체크박스 2" checked={checked2} onChange={setChecked2} />
      <Checkbox label="체크박스 3" checked={checked3} onChange={setChecked3} />
    </div>
  );
};
export const Disabled: Story = {
  render: Template,
  args: {
    label: "비활성 체크박스",
    disabled: true,
    checked: false,
  },
};

export const DisabledChecked: Story = {
  render: Template,
  args: {
    label: "비활성 체크박스",
    disabled: true,
    checked: true,
  },
};
