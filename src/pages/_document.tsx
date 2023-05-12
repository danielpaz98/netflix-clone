import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
          rel="shortcut icon"
        />
        <link
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png"
          rel="apple-touch-icon"
        />
        <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" rel="stylesheet" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
