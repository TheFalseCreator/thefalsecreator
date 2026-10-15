import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://thefalsecreator.com',
  output: 'static',
  build: {
    assets: '_assets',
  },
});
