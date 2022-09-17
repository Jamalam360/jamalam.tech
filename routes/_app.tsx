/** @jsx h */
import { h } from "preact";
import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
        <link
          href="/global.css"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <title>Jamalam's Portfolio</title>
        <meta charSet="utf-8" />

        <meta name="description" content="Jamalam's Portfolio" />
        <meta name="author" content="Jamalam" />
        <meta property="og:title" content="Jamalam's Portfolio" />
        <meta property="og:site_name" content="Jamalam's Portfolio" />
        <meta property="og:url" content="https://jamalam.tech" />
        <meta
          property="og:description"
          content="Jamalam's personal developer portfolio."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://og-image.xyz/og/Jamalam's Portfolio/Jamalam's personal {{n}}developer portfolio./jamalam.tech/https/menlo/shatteredfeelings/{{h}}000000/data.png"
        />
      </Head>
      <Component />
    </div>
  );
}
