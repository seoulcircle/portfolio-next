/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const typographyStyle = (token: string) => css`
  font-family: var(--typography-${token}-font-family);
  font-size: var(--typography-${token}-font-size);
  font-weight: var(--typography-${token}-font-weight);
  line-height: var(--typography-${token}-line-height);
  letter-spacing: var(--typography-${token}-letter-spacing);
  text-transform: var(--typography-${token}-text-case);
  text-decoration: var(--typography-${token}-text-decoration);
`;
