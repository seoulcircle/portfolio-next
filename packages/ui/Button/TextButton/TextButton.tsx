import React from "react";
import * as S from "./TextButton.styles";
import Link from "next/link";
import { TextButtonProps } from "./TextButton.types";

const TextButton = ({
  children,
  icon,
  iconPosition = "right",
  href,
  variant = "black",
  ...props
}: TextButtonProps) => {
  const content = (
    <>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </>
  );

  const button = (
    <S.Button variant={variant} {...props}>
      {content}
    </S.Button>
  );

  return href ? <Link href={href}>{button}</Link> : button;
};

export default TextButton;
