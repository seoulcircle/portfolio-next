import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Plus, X, Check } from "lucide-react";
import S from "../Button.styles";

const iconMap = {
  plus: <Plus size={16} />,
  x: <X size={16} />,
  check: <Check size={16} />,
};

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

export default meta;

type Story = StoryObj<typeof Button>;

export const IconOnly: Story = {
  args: {
    as: "button",
    icon: "plus", // 기본값
    variant: "icon",
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
            <S.Label>{label}</S.Label>
            <Button
              {...args}
              icon={resolvedIcon}
              aria-label={accessibleLabel}
              {...props}
            />
          </div>
        ))}
      </div>
    );
  },
};
