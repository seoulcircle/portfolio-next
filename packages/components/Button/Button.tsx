/** @jsxImportSource @emotion/react */
// import { ComponentProps } from "react";
import S from "./Button.styles";

import { ComponentPropsWithRef, ElementType, ReactNode } from "react";
export type ButtonVariant =
  | "primary"
  | "outline"
  | "danger"
  | "icon"
  | "texticon";

type ButtonOwnProps = {
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
};

// 제네릭으로 as prop에 따라 타입 결정
export type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
} & ButtonOwnProps &
  Omit<ComponentPropsWithRef<T>, keyof ButtonOwnProps>;

export const Button = <T extends ElementType = "button">({
  as,
  variant = "primary",
  icon,
  children,
  iconPosition = "left",
  ...props
}: ButtonProps<T>) => {
  const isIconLeft = icon && iconPosition === "left";
  const isIconRight = icon && iconPosition === "right";

  const Component = as || "button";

  return (
    <S.Button as={Component} $variant={variant} {...props}>
      {isIconLeft && <S.IconWrapper>{icon}</S.IconWrapper>}
      {children}
      {isIconRight && <S.IconWrapper>{icon}</S.IconWrapper>}
    </S.Button>
  );
};

// 테스트
