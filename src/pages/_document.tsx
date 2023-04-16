import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
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
