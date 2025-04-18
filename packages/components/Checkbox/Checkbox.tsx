// Checkbox.tsx
import { useState, InputHTMLAttributes } from "react";
import * as S from "./Checkbox.styles";

type CheckboxProps = {
  label: string;
  checked: boolean;
  disabled?: boolean;
  deletable?: boolean;
  onChange?: (checked: boolean) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked">;

export const Checkbox = ({
  label,
  checked,
  disabled = false,
  onChange,
  ...rest
}: CheckboxProps) => {
  const [focused, setFocused] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  const inputId = `checkbox-${label}`;

  return (
    <S.Label htmlFor={inputId} $disabled={disabled}>
      <S.HiddenInput
        id={inputId}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        disabled={disabled}
        {...rest}
      />
      <S.Box $checked={checked} $disabled={disabled} $focused={focused}>
        {checked && (
          <S.CheckMark viewBox="0 0 24 24">
            <polyline points="4 12 10 18 20 6" />
          </S.CheckMark>
        )}
      </S.Box>
      <S.Text>{label}</S.Text>
    </S.Label>
  );
};
