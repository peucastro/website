import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";

export default defineConfig({
  site: "https://peucastro.me",
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
