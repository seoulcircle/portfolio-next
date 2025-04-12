import { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

export interface TextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactElement;
  iconPosition?: "left" | "right";
  href?: string;
  variant?: "black" | "white";
  size?: "xs" | "sm" | "md" | "lg";
  showIcon?: boolean;
}
