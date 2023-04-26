// TYPES
import type { NextPage } from "next";
import type { AppProps } from "next/app";

declare global {
  type NextPageWithLayout<Props = {}> = NextPage<Props> & {
    title?: string;
    layout?: (page: React.ReactElement) => JSX.Element;
  };

  type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
  };
}
