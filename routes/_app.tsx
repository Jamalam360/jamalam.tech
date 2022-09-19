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

        <meta charSet="utf-8" />

        <title>Jamalam's Portfolio</title>
        <meta name="title" content="Jamalam's Portfolio" />
        <meta
          name="description"
          content="Jamalam's personal developer portfolio - Minecraft, Web, & Discord."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Jamalam's Portfolio" />
        <meta
          property="og:description"
          content="Jamalam's personal developer portfolio - Minecraft, Web, & Discord."
        />
        <meta
          property="og:image"
          content="/og.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Jamalam's Portfolio" />
        <meta
          property="twitter:description"
          content="Jamalam's personal developer portfolio - Minecraft, Web, & Discord."
        />
        <meta
          property="twitter:image"
          content="/og.png"
        />
      </Head>
      <Component />
    </div>
  );
}
