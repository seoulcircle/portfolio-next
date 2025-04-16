import React, { JSX } from "react";

type TypographyProps = {
  as?: keyof JSX.IntrinsicElements;
  variant?: string;
  weight?: string;
  textAlign?: "left" | "center" | "right";
  truncate?: boolean;
  italic?: boolean;
  children: React.ReactNode;
};

const Typography = ({
  as = "p",
  variant = "body",
  textAlign = "left",
  truncate = false,
  italic = false,
  children,
  weight,
}: TypographyProps) => {
  const Component = as as keyof JSX.IntrinsicElements;

  return (
    <Component
      style={{
        fontFamily: `var(--typography-${variant}-font-family)`,
        fontSize: `var(--typography-${variant}-font-size)`,
        fontWeight: weight
          ? `var(--font-weight-${weight})`
          : `var(--typography-${variant}-font-weight)`,

        lineHeight: `var(--typography-${variant}-line-height)`,
        letterSpacing: `var(--typography-${variant}-letter-spacing)`,
        textDecoration: `var(--typography-${variant}-text-decoration)`,
        textAlign,
        fontStyle: italic ? "italic" : "normal",
        whiteSpace: truncate ? "nowrap" : "normal",
        overflow: truncate ? "hidden" : "visible",
        textOverflow: truncate ? "ellipsis" : "clip",
      }}
    >
      {children}
    </Component>
  );
};

export default Typography;
