export const theme = {
  breakpoints: {
    xs: "340px",
    mobile: "500px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px",
  },
  colors: {
    brand: "#e50914",
    white: "#fff",
    black: "#000",
  },
} as const;

export type Theme = typeof theme;
