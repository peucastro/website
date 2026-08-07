import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
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

  integrations: [icon(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
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
