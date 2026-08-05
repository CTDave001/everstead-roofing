/**
 * Single source of truth for business facts that appear in more than one place.
 *
 * The rating below is rendered visibly in the hero AND emitted as schema.org
 * aggregateRating in BaseLayout. Google requires those two to match — a rating in
 * structured data that a visitor cannot see on the page is a manual-action risk.
 * Keep them in sync by only ever changing this file.
 */

export const reviews = {
  ratingValue: 5,
  reviewCount: 50,
  /**
   * Public Google Business profile URL. When set, the hero rating badge becomes a
   * link to the reviews. Leave null to render the badge as plain text.
   */
  profileUrl: null as string | null,
};
