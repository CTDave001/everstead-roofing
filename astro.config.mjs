import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  /**
   * MUST match the hostname the site is actually served from.
   *
   * This was the apex while Vercel serves www, so every canonical, og:url,
   * sitemap entry and schema URL pointed at a hostname that 307s elsewhere.
   * Google had to follow a redirect to resolve every canonical on the site, and
   * a 307 is explicitly temporary — it tells crawlers not to consolidate
   * signals onto the target. On a domain with no authority to spare, that split
   * the little there is across two hostnames and wasted crawl budget.
   *
   * Everything else derives from here via `Astro.site` rather than repeating the
   * literal, which is how the six copies of this string drifted in the first
   * place. If the primary domain ever changes in Vercel, change it here and
   * nowhere else — except public/robots.txt, which cannot import.
   */
  site: 'https://www.eversteadroofing.com',
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
    /**
     * No `lastmod` here, deliberately.
     *
     * It used to be `lastmod: new Date()`, which stamped every URL in the sitemap
     * with the build time — asserting that all 23 pages changed every time
     * anything deployed. That is false for all but one or two of them, and a
     * lastmod a crawler can demonstrate is wrong is worse than no lastmod: it
     * teaches Google to discount the signal for this site entirely. Which matters
     * precisely when it is needed, e.g. updating the displays guide with confirmed
     * dates in November and wanting it recrawled quickly.
     *
     * Astro's sitemap integration cannot read content-collection dates from here
     * (config is evaluated before content loads), so per-page truth is not
     * available without hand-maintaining a map. Omitting it lets Google fall back
     * on its own change detection, which is accurate. For an urgent recrawl, use
     * "Request indexing" in Search Console rather than a sitemap hint.
     *
     * `priority` is also gone: it was a uniform 0.7 on every URL, which conveys no
     * relative ranking at all, and Google has said for years that it ignores it.
     */
    sitemap({
      changefreq: 'weekly',
    }),
  ],
});
