// Input.tsx
import { InputHTMLAttributes } from "react";
import * as S from "./Input.styles";
import { XCircle, AlertCircle } from "lucide-react";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  onClear?: () => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

export const Input = ({
  value,
  onChange,
  placeholder,
  disabled,
  error,
  errorMessage,
  onClear,
  ...rest
}: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onClear?.();
  };

  return (
    <S.Container disabled={disabled} error={error}>
      <S.InputField
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        error={error}
        {...rest}
      />
      {value && !disabled && (
        <S.ClearButton type="button" onClick={handleClear}>
          <XCircle size={18} />
        </S.ClearButton>
      )}
      {error && errorMessage && (
        <S.ErrorMessage>
          <AlertCircle size={14} />
          <span>{errorMessage}</span>
        </S.ErrorMessage>
      )}
    </S.Container>
  );
};
