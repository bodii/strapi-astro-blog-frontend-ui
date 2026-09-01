// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: false,
    },
  },
  env: {
    schema: {
      STRAPI_BASE_URL: envField.string({ context: "server", access: "public", optional: true }),
    }
  },

  adapter: cloudflare(),
});