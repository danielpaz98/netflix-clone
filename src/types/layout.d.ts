// TYPES
import type { NextPage } from "next";
import type { AppProps } from "next/app";

declare global {
  type NextPageWithLayout = NextPage & {
    title?: string;
    layout?: (page: React.ReactElement) => JSX.Element;
  };

  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
  };
}
