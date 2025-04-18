import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { useState } from "react";

type InputProps = React.ComponentProps<typeof Input>;

const meta: Meta<typeof Input> = {
  title: "Component/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    error: { control: "boolean" },
    label: { control: "boolean" },
    disabled: { control: "boolean" },
    labelMessage: { control: "text" },
    errorMessage: { control: "text" },
    placeholder: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

const Template = (args: InputProps) => {
  const [value, setValue] = useState(args.value ?? "");
  const handleChange = (value: string) => {
    setValue(value);
  };
  return (
    <Input
      {...args}
      value={value}
      onChange={handleChange}
      onClear={() => setValue("")}
    />
  );
};

export const Default: Story = {
  render: Template,
  args: {
    label: true,
    labelMessage: "인풋 레이블",
    placeholder: "플레이스 홀더 텍스트",
  },
};

export const Filled: Story = {
  render: Template,
  args: {
    value: "사용자 입력 텍스트",
    label: true,
    labelMessage: "인풋 레이블",
    placeholder: "플레이스 홀더 텍스트",
  },
};

export const Error: Story = {
  render: Template,
  args: {
    value: "에러 상태",
    error: true,
    errorMessage: "에러 메시지",
    placeholder: "입력하세요",
    label: true,
    labelMessage: "인풋 레이블",
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    value: "비활성화 상태",
    disabled: true,
    placeholder: "입력 불가",
    label: true,
    labelMessage: "인풋 레이블",
  },
};
