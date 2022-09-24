import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import deno from "@astrojs/deno";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), preact(), image(), prefetch()],
  output: "server",
  adapter: deno(),
});
