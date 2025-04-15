import React, { forwardRef } from "react";
import * as S from "./Badge.styles";
import { BadgeProps } from "./Badge.types";

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, isActive, onClick, ...props }, ref) => {
    return (
      <S.BadgeItem ref={ref} isActive={isActive} onClick={onClick} {...props}>
        {children}
      </S.BadgeItem>
    );
  }
);

Badge.displayName = "Badge";
export default Badge;
