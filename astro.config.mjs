import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://jamalam360.github.io/jamalam.tech",
  integrations: [tailwind(), sitemap(), preact(), image(), prefetch()],
});
