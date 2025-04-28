import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Plus, X, Check } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Component/Button/4. Icon",
  component: Button,
  argTypes: {
    icon: {
      control: { type: "select" },
      options: ["none", "plus", "x", "check"],
    },
  },
} satisfies Meta<typeof Button>;

const iconMap = {
  plus: <Plus size={17} />,
  x: <X size={16} />,
  check: <Check size={16} />,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const IconWithText: Story = {
  args: {
    as: "button",
    children: "버튼",
    icon: "plus", // string으로 설정
    iconPosition: "left",
  },
  render: (args) => {
    const resolvedIcon =
      args.icon === "none"
        ? undefined
        : iconMap[args.icon as keyof typeof iconMap];

    const labelMap = {
      plus: "추가",
      x: "닫기",
      check: "확인",
    };
    const states = [
      { label: "Enabled", props: {} },
      { label: "Hover", props: { className: "pseudo-hover" } },
      { label: "Active", props: { className: "pseudo-active" } },
      { label: "Focus", props: { className: "pseudo-focus" } },
      { label: "Disabled", props: { disabled: true } },
    ];
    const accessibleLabel =
      args.icon && args.icon !== "none"
        ? labelMap[args.icon as keyof typeof labelMap]
        : "아이콘 버튼";

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {states.map(({ label, props }) => (
          <div
            key={label}
            style={{ display: "flex", alignItems: "center", gap: "1rem" }}
          >
            <span style={{ width: 80, color: "var(--gray-90)" }}>{label}</span>
            <Button
              {...args}
              icon={resolvedIcon}
              {...props}
              aria-label={accessibleLabel}
            />
          </div>
        ))}
      </div>
    );
  },
};
