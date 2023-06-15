// VARIABLES
import { breakpoints, colors, fontSize } from "./variables";

export const theme = {
  breakpoints,
  colors,
  fontSize,
  gradients: {
    shaded: {
      100: "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0, transparent)",
      200: "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent)",
    },
  },
} as const;

export type DefaultTheme = typeof theme;
