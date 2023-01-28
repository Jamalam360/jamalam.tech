import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

//TODO: Lighthouse testing
//TODO: Optimizations
//TODO: Check Markdown syntax highlighting theme
//TODO: Clean out /public
//TODO: Finish timeline
//TODO: Deploy
//TODO: Non-mobile styling

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
      theme: "material-ocean",
    },
  },
  output: "server",
  adapter: cloudflare(),
});
