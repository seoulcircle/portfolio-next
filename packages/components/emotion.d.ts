// types/emotion.d.ts
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    mode: "light" | "dark";
  }
}
