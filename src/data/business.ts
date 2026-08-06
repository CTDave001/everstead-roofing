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
