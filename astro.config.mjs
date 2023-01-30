import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

//TODO: Lighthouse testing
//TODO: Deploy

// https://astro.build/config
export default defineConfig({
  site: "https://jamalam.tech",
  base: "/",
  integrations: [
    tailwind(),
    sitemap(),
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
      theme: "material-default",
    },
  },
  output: "server",
  adapter: cloudflare(),
});
