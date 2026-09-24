// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages under a project path. Mirrors a production Astro
// marketing site: static output, trailing-slash URLs, @astrojs/sitemap.
export default defineConfig({
  site: 'https://nexiouscaliver.github.io',
  base: '/cleo-astro-demo-site/',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
