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

/**
 * Permanent architectural LED lighting — a separate product, priced separately.
 *
 * Positioned at the premium end on purpose. In a category where the buyer cannot
 * evaluate the hardware, price is the main quality signal available to them:
 * Gemstone sits around $22-25/ft installed and JellyFish around $25-35/ft plus a
 * controller, which at the top end works out near $44/ft all-in. Pricing low
 * would read as cheaper diodes rather than as a bargain, and would contradict
 * everything this page argues about independence and build quality.
 *
 * This deliberately gives up the "cheapest option" argument. At $29 the page
 * could claim to undercut a typical quote outright; at $35 it cannot, and should
 * not try. The comparison is same-tier — our all-in figure against an equivalent
 * per-foot rate once its controller is added — and the page says plainly that we
 * are not the cheapest in the market. A premium price defended by a value
 * argument convinces nobody.
 *
 * The rate is ALL-IN and includes the controller. Most of the market quotes a
 * per-foot figure plus a $650-850 controller, which makes the headline smaller
 * than the invoice. Folding it in is the same decision as including January
 * removal in the seasonal price, and the only version consistent with publishing
 * a rate card at all.
 *
 * Margin note: at an all-in cost near $10/ft this is roughly 71% gross, and
 * about 36 installs to reach a $250k target. If that cost figure turns out to be
 * materials-only with labour on top, true margin is closer to 49% — still
 * workable, but revisit this number rather than absorbing it. The founding rate
 * below is the intended discount lever, not the headline.
 */
export const permanentRate = 35;

/**
 * Introductory rate for the first installs, offered in exchange for photography
 * rights and a review.
 *
 * Deliberately a named programme rather than a lower published price. A new
 * company has no portfolio and no reviews, and reviews are the strongest local
 * ranking factor there is — so the discount buys the two assets that cannot be
 * bought any other way. Discounting the headline rate instead would buy neither
 * and would permanently reset what the service appears to be worth.
 */
export const permanentFoundingRate = 30;

/** Roofline lengths used in the permanent lighting worked examples. */
export const permanentExamples = [120, 160, 200, 250, 320];

/** Permanent install total. No material uplift — the rate is already all-in. */
export function permanentTotal(linearFeet: number, rate = permanentRate): number {
  return linearFeet * rate;
}

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
