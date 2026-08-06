import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eversteadroofing.com',
  /**
   * The Christmas lights page used to live at /holiday, which carried no keyword
   * signal. It moved to /christmas-light-installation-vancouver-wa.
   *
   * On a static build Astro renders these as meta-refresh stub pages, which is a
   * weaker signal than a real 301. The real 301 lives in vercel.json for this
   * deploy, and in public/_redirects should the site ever move to Netlify or
   * Cloudflare Pages. Both are evaluated before static files are served, so this
   * stub is only ever the last-resort fallback.
   */
  redirects: {
    '/holiday': '/christmas-light-installation-vancouver-wa',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
