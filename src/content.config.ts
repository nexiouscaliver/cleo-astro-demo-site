import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.md' }),
  schema: z.object({
    seoDescription: z.string().optional(),
    seoTitle: z.string().optional(),
    title: z.string(),
    description: z.string(),
    order: z.number(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    seoDescription: z.string().optional(),
    seoTitle: z.string().optional(),
    title: z.string(),
    // Optional on purpose: real sites ship posts without one.
    description: z.string().optional(),
    author: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { services, blog };
