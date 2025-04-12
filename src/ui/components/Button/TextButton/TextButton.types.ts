import { ButtonHTMLAttributes, ReactNode } from "react";

export interface TextButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  variant?: "black" | "white";
  size?: "xs" | "sm" | "md" | "lg";
}
