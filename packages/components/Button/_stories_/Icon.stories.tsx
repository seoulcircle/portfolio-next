import type { Meta } from "@storybook/react";
import { Button } from "../Button";
import { Plus } from "lucide-react";
import S from "../Button.styles";

const meta: Meta<typeof Button> = {
  title: "Component/Button/Icon",
  component: Button,
};

export default meta;

export const IconOnly = () => {
  const states = [
    { label: "Enabled", props: {} },
    { label: "Hover", props: { className: "pseudo-hover" } },
    { label: "Active", props: { className: "pseudo-active" } },
    { label: "Focus", props: { className: "pseudo-focus" } },
    { label: "Disabled", props: { disabled: true } },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {states.map(({ label, props }) => (
        <div
          key={label}
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <S.Label>{label}</S.Label>
          <Button
            variant="primary"
            icon={<Plus size={16} />}
            aria-label={label}
            {...props}
          />
        </div>
      ))}
    </div>
  );
};
