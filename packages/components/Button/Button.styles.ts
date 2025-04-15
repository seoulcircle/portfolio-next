/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const variantStyle = {
  primary: css`
    background: var(--blue-30);
    color: var(--white);
    border: none;

    &:hover,
    &.pseudo-hover {
      background: var(--blue-40);
    }

    &:active,
    &.pseudo-active {
      background: var(--blue-50);
    }

    &:focus-visible,
    &.pseudo-focus {
      background: var(--blue-30);
      border: 2px solid var(--blue-20);
    }

    &:disabled {
      background: var(--gray-20);
      color: var(--gray-40);
    }
  `,
  outline: css`
    background: transparent;
    color: var(--blue-30);
    border: 1px solid var(--blue-30);

    &:hover,
    &.pseudo-hover {
      background: var(--blue-10);
    }

    &:active,
    &.pseudo-active {
      background: var(--blue-20);
    }

    &:focus-visible,
    &.pseudo-focus {
      outline: 2px solid #85b8ff;
    }

    &:disabled {
      background: transparent;
      border: 1px solid var(--gray-20);
      color: var(--gray-40);
    }
  `,
  danger: css`
    background: var(--red-30);
    color: white;
    border: none;

    &:hover,
    &.pseudo-hover {
      background: var(--red-40);
    }

    &:active,
    &.pseudo-active {
      background: var(--red-50);
    }

    &:focus-visible,
    &.pseudo-focus {
      outline: 2px solid var(--blue-20);
    }

    &:disabled {
      background: var(--gray-20);
      color: var(--gray-40);
    }
  `,
  icon: css`
    background: transparent;
    color: var(--blue-30);
    border: 1px solid var(--blue-30);

    &:hover,
    &.pseudo-hover {
      background: var(--blue-10);
    }

    &:active,
    &.pseudo-active {
      background: var(--blue-20);
    }

    &:focus-visible,
    &.pseudo-focus {
      outline: 2px solid #85b8ff;
    }

    &:disabled {
      background: transparent;
      border: 1px solid var(--gray-20);
      color: var(--gray-40);
    }
  `,
  texticon: css`
    background: var(--red-30);
    color: white;
    border: none;

    &:hover,
    &.pseudo-hover {
      background: var(--red-40);
    }

    &:active,
    &.pseudo-active {
      background: var(--red-50);
    }

    &:focus-visible,
    &.pseudo-focus {
      outline: 2px solid var(--blue-20);
    }

    &:disabled {
      background: var(--gray-20);
      color: var(--gray-40);
    }
  `,
} as const;

const Button = styled.button<{ $variant: keyof typeof variantStyle }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition:
    background 0.2s,
    border 0.2s;

  ${({ $variant }) => variantStyle[$variant]}

  &:disabled {
    cursor: not-allowed;
  }
`;

const Label = styled.span`
  width: 80px;
  font-size: 14px;
  color: var(--color-text);
`;

const IconWrapper = styled.span`
  display: inline-flex;
  margin-right: 0.5rem;
`;

const S = {
  Button,
  Label,
  IconWrapper,
};

export default S;
