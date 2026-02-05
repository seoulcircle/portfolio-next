import React, { cloneElement, isValidElement } from "react";
import * as S from "./IconButton.styles";
import Link from "next/link";
import { IconButtonProps } from "./IconButton.types";
import { LucideProps } from "lucide-react";

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = "md",
  href,
  ...props
}: IconButtonProps) => {
  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
  } as const;

  const finalIconSize = sizeMap[size];
  const sizedIcon = isValidElement<LucideProps>(icon)
    ? cloneElement(icon, { size: finalIconSize })
    : null;

  const button = <S.Button {...props}>{sizedIcon}</S.Button>;

  return href ? <Link href={href}>{button}</Link> : button;
};

export default IconButton;
