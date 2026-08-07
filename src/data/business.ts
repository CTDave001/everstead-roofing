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
 * Opening hours.
 *
 * Being open at the moment someone searches is one of the strongest local pack
 * signals there is — experts rank it top five. Lights get researched on weekday
 * evenings and at weekends, which is exactly when the old Mon–Fri 8–6 marked the
 * business closed.
 *
 * Two sets, switched on the build clock, same mechanism as the pricing tiers in
 * src/data/pricing.ts and dependent on the same daily rebuild workflow. Extended
 * hours are a seasonal commitment, so they expire on their own rather than
 * relying on someone remembering to take them down in January.
 *
 * Sunday is deliberately NOT in the schema. "By appointment" is not an open
 * hour, and publishing it as one would send people to a phone nobody is sitting
 * by. It is stated in visible copy instead, where it can be explained.
 *
 * These have to match the Google Business Profile exactly. A profile saying one
 * thing and a website saying another is the sort of mismatch that makes an AI
 * assistant pick a competitor with cleaner signals.
 */
const SEASON_STARTS = '2026-08-06T00:00:00-07:00';
const SEASON_ENDS = '2027-01-15T00:00:00-08:00';

export interface OpeningHours {
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

export const standardHours: OpeningHours = {
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '08:00',
  closes: '18:00',
};

export const seasonHours: OpeningHours = {
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  opens: '08:00',
  closes: '20:00',
};

const now = Date.now();
const inSeason = now >= Date.parse(SEASON_STARTS) && now < Date.parse(SEASON_ENDS);

export const currentHours: OpeningHours = inSeason ? seasonHours : standardHours;

/** Human-readable hours for the footer. Kept in step with the schema above. */
export const hoursLabel = inSeason
  ? 'Mon–Sat, 8am–8pm'
  : 'Mon–Fri, 8am–6pm';

/** Shown alongside the hours. Empty out of season, when it does not apply. */
export const hoursNote = inSeason ? 'Sundays by appointment' : '';

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
