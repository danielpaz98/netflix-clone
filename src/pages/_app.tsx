import Head from "next/head";
// PLUGINS
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@emotion/react";
// THEME
import { theme } from "~/theme";
// TYPES
import type { Session } from "next-auth";
// STYLES
import "~/global.css";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component?.layout ?? ((page) => page);
  const pageTitle = Component.title ?? "Netflix";

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <SessionProvider session={session as Session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </ThemeProvider>
  );
}
