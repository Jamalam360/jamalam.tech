import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import robotsTxt from "astro-robots-txt";
import compress from "astro-compress";
import mdx from '@astrojs/mdx';


//TODO: Migrate to Cloudflare
//TODO: Lighthouse testing
//TODO: Optimizations
//TODO: Check Markdown syntax highlighting theme
//TODO: Clean out /public
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
    mdx(),
  ],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "material-ocean",
    },
  },
});
