import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog posts. Add a .md file under src/content/blog/ and it appears on /blog,
 * in the homepage section, and in the sitemap automatically. The filename
 * becomes the URL: src/content/blog/moss-on-roofs.md -> /blog/moss-on-roofs
 *
 * Set `draft: true` to keep a post out of the build while you work on it.
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Publication date. Drives ordering; newest first. */
    date: z.coerce.date(),
    /** Shown on cards and at the top of the post. */
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
