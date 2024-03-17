import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://jamalam.tech",
  base: "/",
  output: "server",
  adapter: cloudflare(),
  markdown: {
    shikiConfig: {
      themes: {
        light: "vitesse-light",
        dark: "vitesse-dark"
      }
    }
  },
  integrations: [compress(), sitemap(), robotsTxt()]
});