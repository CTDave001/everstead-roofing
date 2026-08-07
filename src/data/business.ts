/**
 * Single source of truth for business facts that appear in more than one place.
 *
 * The rating below is rendered visibly in the hero. It is ALSO emitted as
 * schema.org aggregateRating in BaseLayout, but only once `profileUrl` is set.
 *
 * Google requires the visible rating and the marked-up rating to match, and it
 * treats review markup a visitor cannot independently verify as self-serving —
 * a documented manual-action risk that would apply sitewide, since that schema
 * block renders on every page. Setting profileUrl is what makes the numbers
 * checkable, so it is the switch that turns the markup on.
 *
 * Before setting it: confirm ratingValue and reviewCount match what the linked
 * Google profile actually shows. A mismatch is worse than no markup at all.
 */

/**
 * Public profiles on other platforms, emitted as schema.org `sameAs`.
 *
 * This is entity consolidation: it tells Google, and the models that ground on
 * Google, that the Yelp listing, the Facebook page, the BBB record and this site
 * are all one business rather than four similar ones.
 *
 * It matters more in 2026 than it used to. Over 60% of citations in AI Overviews
 * come from non-Google sources, and assistants cross-check a business across
 * directories before recommending it — an inconsistent phone number in one place
 * is enough for a model to skip you in favour of a safer answer.
 *
 * Add the real URLs as each listing is claimed. NAP on every one of them must
 * match the footer exactly: Everstead Roofing Co, 4200 SE Columbia Way Suite F,
 * Vancouver, WA 98661, (360) 342-9525. A listing with a stale address is worse
 * than no listing, because it actively contradicts the others.
 *
 * Priority order for home services, by measured impact: Yelp, Bing Places, Apple
 * Business Connect, Facebook, then Angi, Houzz, HomeAdvisor and BBB.
 */
export const profiles: string[] = [
  // 'https://www.yelp.com/biz/...',
  // 'https://www.facebook.com/...',
  // 'https://www.bbb.org/us/wa/vancouver/profile/...',
];

export const reviews = {
  ratingValue: 5,
  reviewCount: 50,
  /**
   * Public Google Business profile URL. When set, the hero rating badge becomes a
   * link to the reviews AND aggregateRating is emitted in structured data. Leave
   * null to render the badge as plain text and omit the markup entirely.
   */
  profileUrl: null as string | null,
};
