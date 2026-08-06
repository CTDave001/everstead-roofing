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
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    /** Publication date. Drives ordering; newest first. */
    date: z.coerce.date(),
    /** Shown on cards and at the top of the post. */
    excerpt: z.string(),
    draft: z.boolean().default(false),
    /**
     * Cover image, resolved against src/assets/images so Astro optimises it.
     * Also becomes the post's og:image and the `image` property on its
     * BlogPosting schema, which Google requires for article rich results.
     */
    cover: image().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { blog };
