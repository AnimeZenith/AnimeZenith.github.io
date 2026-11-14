import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://iqbaal123321.github.io',
  base: '/Animeupdates',
  integrations: [sitemap()],
  output: 'static',
  build: { format: 'directory' }
});
