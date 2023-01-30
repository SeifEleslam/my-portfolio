import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>SeifEleslam</title>
      <meta name="description" content="Created With Noble Manners" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no,"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Audiowide|Sofia|Trirong"
      />

      <link rel="icon" href="favicon.ico" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
