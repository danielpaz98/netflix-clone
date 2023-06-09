/// <reference types="@emotion/react/types/css-prop" />

import "@emotion/react";
// TYPES
import type { DefaultTheme } from "~/styles";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends DefaultTheme {}
}
