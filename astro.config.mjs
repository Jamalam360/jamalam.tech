import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";

export default defineConfig({
  site: "https://jamalam.tech",
  base: "/",
  integrations: [
    tailwind(),
    sitemap(),
    preact(),
    image(),
    prefetch(),
    robotsTxt({
      host: "jamalam.tech",
    }),
    compress(),
  ],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "material-ocean",
    },
  },
});
