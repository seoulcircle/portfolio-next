// src/styles/theme.ts
import "@emotion/react";

// export const theme = {
//   pointBlue: "#0064FF",
//   pointGrey: "#202632",
//   black: {
//     veryDark: "#141414",
//     darker: "#181818",
//     lighter: "#2F2F2F",
//   },
//   white: {
//     lighter: "#fff",
//     darker: "#e5e5e5",
//   },
// } as const;

// export type ThemeType = typeof theme;

// declare module "@emotion/react" {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   export interface Theme extends ThemeType {}
// }

export const breakpoints = {
  mobile: "639px",
  tablet: "800px",
  desktop: "1024px",
};
