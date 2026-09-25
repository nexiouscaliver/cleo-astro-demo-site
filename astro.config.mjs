// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Mirrors a production Astro marketing site: static output, trailing-slash URLs,
// @astrojs/sitemap. Vercel (the production host) serves it at the domain root; the
// GitHub Pages mirror sets DEPLOY_TARGET=github-pages and lives under a project path.
const pages = process.env.DEPLOY_TARGET === 'github-pages';

export default defineConfig({
  site: pages ? 'https://nexiouscaliver.github.io' : 'https://cleo-astro-demo-site.vercel.app',
  base: pages ? '/cleo-astro-demo-site/' : '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
