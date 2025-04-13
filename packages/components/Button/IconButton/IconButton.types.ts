import { ButtonHTMLAttributes, ReactElement } from "react";
import { LucideProps } from "lucide-react";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement<LucideProps>;
  href?: string;
  size?: "sm" | "md" | "lg";
}
