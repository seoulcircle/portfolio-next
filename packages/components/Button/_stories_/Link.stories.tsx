import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Plus, X, Check } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Component/Button/5. Link",
  component: Button,
  argTypes: {
    icon: {
      control: { type: "select" },
      options: ["none", "plus", "x", "check"],
    },
  },
};

const iconMap = {
  plus: <Plus size={16} />,
  x: <X size={16} />,
  check: <Check size={16} />,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const AnchorButton: Story = {
  args: {
    as: "a",
    href: "https://example.com",
    target: "_blank",
    rel: "noopener noreferrer",
    children: "링크 버튼",
    icon: "plus", // 드롭다운에서 선택 가능
    iconPosition: "left",
    variant: "outline",
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
      { label: "Disabled", props: { "aria-disabled": true, tabIndex: -1 } }, // <a>는 disabled prop 안 먹히므로 대체
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
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                label === "Disabled" ? e.preventDefault() : undefined
              }
              aria-label={accessibleLabel}
            />
          </div>
        ))}
      </div>
    );
  },
};
