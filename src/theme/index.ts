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
    white: "#ffffff",
    black: "#000000",
    "suva-grey": "#8c8c8c",
    warning: "#e87c03",
    error: "#b92d2b",
    success: "#5fa53f",
  },
} as const;

export type Theme = typeof theme;
