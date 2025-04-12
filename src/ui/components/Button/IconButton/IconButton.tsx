import React from "react";
import * as S from "./IconButton.styles";
import Link from "next/link";
import { IconButtonProps } from "./IconButton.types";

const IconButton = ({ icon, href, ...props }: IconButtonProps) => {
  const content = <S.Button {...props}>{icon}</S.Button>;

  return href ? (
    <Link href={href} passHref legacyBehavior>
      {content}
    </Link>
  ) : (
    content
  );
};

export default IconButton;
