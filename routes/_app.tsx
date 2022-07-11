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
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link
          href="/global.css"
          rel="stylesheet"
        />
      </Head>
      <Component />
    </div>
  );
}
