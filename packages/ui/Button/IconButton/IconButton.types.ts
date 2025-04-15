import { ReactElement } from "react";
import { LucideProps } from "lucide-react";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactElement<LucideProps>;
  href?: string;
  size?: "sm" | "md" | "lg";
}
