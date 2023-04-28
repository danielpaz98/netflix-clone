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
    nero: "#141414",
    black_russian: "#18181b",
    charcoal: "#454545",
    night_rider: "#333333",
    dim_gray: "#737373",
    mischka: "#9ca3af",
    suva_gray: "#8c8c8c",
    warning: "#e87c03",
    error: "#b92d2b",
    success: "#5fa53f",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem;",
    "8xl": "6rem",
    "9xl": "8rem",
  },
} as const;

export type Theme = typeof theme;
