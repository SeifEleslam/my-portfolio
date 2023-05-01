import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="The place where I show my work and the progress in my career"
        />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
