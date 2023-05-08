import "@emotion/react";
// TYPES
import type { DefaultTheme } from "~/theme";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends DefaultTheme {}
}
