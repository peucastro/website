import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  site: "https://peucastro.me",
  integrations: [svelte(), mdx(), sitemap()],

  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "svelte",
      }),
    ],
  },

  adapter: cloudflare({
    imageService: "cloudflare",
  }),
});
