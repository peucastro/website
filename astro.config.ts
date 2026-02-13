import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";
import { SITE_METADATA } from "./src/lib/config.ts";

export default defineConfig({
  site: SITE_METADATA.siteUrl,
  trailingSlash: "always",
  output: "static",
  prefetch: {
    prefetchAll: true,
  },
  experimental: {
    clientPrerender: true,
  },
  integrations: [svelte(), sitemap()],

  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: "svelte",
        autoInstall: true,
      }),
    ],
  },

  markdown: {
    shikiConfig: {
      themes: {
        dark: "gruvbox-dark-hard",
        light: "gruvbox-light-soft",
      },
    },
  },
});
