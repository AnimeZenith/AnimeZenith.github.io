import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://animezenith.github.io',
  integrations: [sitemap()],
  output: 'static',
  build: { format: 'directory' }
});
