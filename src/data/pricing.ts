/**
 * Christmas lighting rates — single source of truth.
 *
 * This figure previously lived as a hardcoded "$400-$1,500" in six places:
 * HolidayPricing, HolidayFAQ, the lights page Service schema, the city page
 * Service schema, the cost blog post, and two CTA overrides. That range did not
 * match the actual rate card and could not survive a rate change without one of
 * the six drifting. Everything now derives from here.
 *
 * Pricing model: (linear feet x rate) + material uplift, then Washington sales
 * tax stated separately. Tax is never folded into a displayed price — it is not
 * revenue, it varies by delivery address, and quoting tax-inclusive would
 * misrepresent both the price and the business.
 *
 * The rate ladder is real and dated, which makes it the one piece of urgency on
 * this site that is not manufactured. Do not soften it in copy and do not let a
 * tier quietly lapse — a deadline that passes without the price actually moving
 * trains customers to disbelieve the next one.
 */

export interface RateTier {
  /** Short label used in tables and headings. */
  label: string;
  /** Dollars per linear foot of roofline. */
  rate: number;
  /** Plain-language deadline, used in urgency copy. */
  deadline: string;
  /**
   * Instant this tier takes over, as an ISO string with an explicit offset.
   * `null` marks the opening tier, which is in force until the next one starts.
   *
   * The offset is written out rather than left to the runtime because builds
   * happen on UTC machines (Vercel, GitHub Actions) while the deadlines are
   * promises made in Pacific time. `2026-10-01T00:00:00-07:00` is unambiguous;
   * `new Date('2026-10-01')` on a UTC builder is seven hours early and would
   * raise the rate while it was still 30 September in Vancouver.
   */
  startsAt: string | null;
}

/**
 * Rate ladder for the 2026 season.
 *
 * Which tier is live is derived from the build clock, not a hand-flipped flag.
 * That removes the failure mode where nobody remembers to flip it on 1 October
 * and the site keeps promising a rate the business has stopped honouring.
 *
 * The catch, and it is the important one: this is a STATIC site. The comparison
 * runs at build time and then freezes into HTML. Correct dates therefore depend
 * on something rebuilding the site after each boundary — see
 * .github/workflows/scheduled-rebuild.yml, which pokes a Vercel deploy hook
 * daily at 07:05 UTC (00:05 Pacific). Both boundaries below fall minutes before
 * that, so the first build of the day picks up the new rate.
 *
 * If that workflow is disabled or its secret goes missing, the site silently
 * keeps selling the old rate. That is the one thing to check if a deadline
 * passes and nothing changes.
 */
export const rateTiers: RateTier[] = [
  { label: 'Book by Sept 30', rate: 6.5, deadline: 'September 30', startsAt: null },
  { label: 'October', rate: 7.25, deadline: 'October 31', startsAt: '2026-10-01T00:00:00-07:00' },
  { label: 'November', rate: 7.95, deadline: 'end of season', startsAt: '2026-11-01T00:00:00-07:00' },
];

/** Percentage added to cover materials. Shown as a line item, never buried. */
export const materialUpliftPct = 8;

/** Roofline lengths used for the worked examples on the pricing table. */
export const exampleRooflines = [120, 160, 200, 250, 320];

/**
 * The tier in force at build time: the last one whose start instant has passed.
 *
 * PRICING_TIER override exists for two real cases — previewing how the site reads
 * at a later tier before that date arrives, and freezing the rate deliberately if
 * a deadline needs to be honoured past its date. Set it to a tier label, e.g.
 * `PRICING_TIER="October" npm run build`. An unrecognised value is ignored rather
 * than throwing, because a typo in an env var should not take a build down mid-season.
 */
function resolveCurrentTier(): RateTier {
  const override = import.meta.env.PRICING_TIER;
  if (override) {
    const match = rateTiers.find((t) => t.label === override);
    if (match) return match;
  }

  const now = Date.now();
  let live = rateTiers[0];
  for (const tier of rateTiers) {
    if (tier.startsAt && Date.parse(tier.startsAt) <= now) live = tier;
  }
  return live;
}

export const currentTier = resolveCurrentTier();

/** True when `tier` is the one currently being sold. */
export function isCurrentTier(tier: RateTier): boolean {
  return tier.label === currentTier.label;
}
export const lowestRate = Math.min(...rateTiers.map((t) => t.rate));
export const highestRate = Math.max(...rateTiers.map((t) => t.rate));

/** Total before Washington sales tax, for a given roofline and rate. */
export function estimateTotal(linearFeet: number, rate: number): number {
  return linearFeet * rate * (1 + materialUpliftPct / 100);
}

/** Whole dollars. Estimates to the cent imply a precision a photo quote does not have. */
export function formatDollars(value: number): string {
  return `$${Math.round(value).toLocaleString('en-US')}`;
}

/**
 * Standard qualifier for any displayed price. Washington requires sales tax to be
 * stated separately, and every price on this site is quoted pre-tax.
 */
export const taxNote = 'Plus Washington sales tax, shown separately on every quote.';

/**
 * Markdown cannot import from here, so these rates are duplicated by hand in:
 *
 *   src/content/blog/christmas-light-installation-cost-vancouver-wa.md
 *
 * That post publishes the full rate ladder and a worked table. It is the one
 * place that will silently drift when a rate changes — update it in the same
 * commit, or the site contradicts itself on the exact figure customers compare.
 */
