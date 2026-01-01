// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://changeroa.github.io',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ko',
        locales: {
          en: 'en',
          ko: 'ko',
        },
      },
    }),
  ],
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});