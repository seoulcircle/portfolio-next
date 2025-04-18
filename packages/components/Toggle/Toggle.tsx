import { useCallback } from "react";
import * as S from "./Toggle.styles";

export type ToggleProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export const Toggle = ({ checked, onChange, disabled }: ToggleProps) => {
  const handleClick = useCallback(() => {
    if (!disabled) onChange(!checked);
  }, [checked, disabled, onChange]);

  return (
    <S.ToggleContainer
      role="switch"
      aria-checked={checked}
      $checked={checked}
      $disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && !disabled) {
          e.preventDefault();
          onChange(!checked);
        }
      }}
    >
      <S.Thumb $checked={checked} $disabled={disabled} />
    </S.ToggleContainer>
  );
};
