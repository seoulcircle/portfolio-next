export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  gray: {
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  overlay: {
    light: "rgba(0, 0, 0, 0.2)",
    dark: "rgba(0, 0, 0, 0.7)",
  },
  glass: {
    light: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    webkitBackdropFilter: "blur(10px)",
  },
} as const;
