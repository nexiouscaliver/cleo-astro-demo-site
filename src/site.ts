export const SITE = {
  name: 'Harbourline Digital',
  legalName: 'Harbourline Digital Pte Ltd',
  tagline: 'B2B marketing, SEO and GEO for complex sales cycles',
  sameAs: [
    'https://www.linkedin.com/company/example-harbourline',
    'https://x.com/example_harbourline',
  ],
};

/** Prefix an internal path with the deploy base (GitHub Pages project path). */
export const href = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
