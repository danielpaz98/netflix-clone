import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
// PLUGINS
import { ServerStyleSheet } from "styled-components";
// TYPES

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" rel="shortcut icon" />
          <link href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png" rel="apple-touch-icon" />
          <link href="https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
