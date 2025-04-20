// Input.tsx
import { InputHTMLAttributes } from "react";
import * as S from "./Input.styles";
import { XCircle, AlertCircle } from "lucide-react";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: boolean;
  labelMessage?: string;
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
  label,
  errorMessage,
  labelMessage,
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
      {label && labelMessage && (
        <S.LabelMessage>
          <span>{labelMessage}</span>
        </S.LabelMessage>
      )}
      <S.InputContainer>
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
            <XCircle size={20} />
          </S.ClearButton>
        )}
      </S.InputContainer>
      {error && errorMessage && (
        <S.ErrorMessage>
          <AlertCircle size={14} />
          <span>{errorMessage}</span>
        </S.ErrorMessage>
      )}
    </S.Container>
  );
};
