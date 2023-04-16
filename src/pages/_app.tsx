import Head from "next/head";
// PLUGINS
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
// THEME
import { theme } from "~/theme";
// STYLES
import "~/global.css";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component?.layout ?? ((page) => page);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{Component.title}</title>
      </Head>

      <SessionProvider session={session}>{getLayout(<Component {...pageProps} />)}</SessionProvider>
    </ThemeProvider>
  );
}
