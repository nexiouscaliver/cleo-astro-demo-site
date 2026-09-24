# cleo-astro-demo-site

Sandbox Astro 7 marketing site used to exercise CLEO's code channel end to end
(fix → PR → CI → merge → deployed output). Its structure mirrors a real client's
Astro site: a base layout owning `<head>` and site-wide JSON-LD, content
collections for services and blog posts rendered through `[slug].astro`
routes, `@astrojs/sitemap`, and static `public/robots.txt` + `public/llms.txt`.

- `npm run build` — static build to `dist/`
- `npm run seo:check` — post-build gate: invalid JSON-LD, missing title or
  canonical, or a wrong `<h1>` count fail CI; content gaps are warnings
- Merges to `main` deploy to GitHub Pages
