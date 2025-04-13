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
    <S.Button variant={variant} {...props}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </S.Button>
  );

  return href ? (
    <Link href={href} passHref legacyBehavior>
      {content}
    </Link>
  ) : (
    content
  );
};

export default TextButton;
