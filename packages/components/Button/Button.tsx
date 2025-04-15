/** @jsxImportSource @emotion/react */
import { ComponentProps } from "react";
import S from "./Button.styles";

export type ButtonVariant =
  | "primary"
  | "outline"
  | "danger"
  | "icon"
  | "texticon";

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = ({
  variant = "primary",
  icon,
  children,
  iconPosition = "left",
  ...props
}: ButtonProps) => {
  const isIconLeft = icon && iconPosition === "left";
  const isIconRight = icon && iconPosition === "right";
  return (
    <S.Button $variant={variant} disabled={props.disabled} {...props}>
      {isIconLeft && <S.IconWrapper>{icon}</S.IconWrapper>}
      {children}
      {isIconRight && <S.IconWrapper>{icon}</S.IconWrapper>}
    </S.Button>
  );
};
