import { css } from "@emotion/react";

export const pageStyles = css`
  :root {
    --ink: #111111;
    --muted: #6b6b6b;
    --paper: #ffffff;
    --accent: #e0392b;
    --gutter: clamp(16px, 3.5vw, 48px);
  }
  html {
    scroll-behavior: smooth;
  }
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
  body {
    overflow-y: auto;
    background: var(--paper);
    color: var(--ink);
  }
  body,
  body * {
    font-family: "Pretendard Variable", Pretendard, -apple-system, "Helvetica Neue", sans-serif;
  }
  ::selection {
    background: var(--accent);
    color: var(--paper);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  a:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
    border-radius: 2px;
  }
`;
