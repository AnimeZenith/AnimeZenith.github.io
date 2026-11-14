import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://animeupdates.pages.dev',
  integrations: [sitemap()],
  output: 'static',
  build: { format: 'directory' }
});

