/** Seasonal roofline lighting. Materials, installation, timer and January removal included. */
export const currentTier = { label: 'Full-service roofline lighting', rate: 8.75 };
export const rateTiers = [currentTier];
export const lowestRate = currentTier.rate;
export const highestRate = currentTier.rate;
export function isCurrentTier(tier: { rate: number }): boolean { return tier.rate === currentTier.rate; }
export const permanentRate = 35;

/** Optional introductory permanent-lighting rate for portfolio photography permission. */
export const permanentFoundingRate = 30;

/** Roofline lengths used in the permanent lighting worked examples. */
export const permanentExamples = [120, 160, 200, 250, 320];

/** Permanent install total. No material uplift — the rate is already all-in. */
export function permanentTotal(linearFeet: number, rate = permanentRate): number {
  return linearFeet * rate;
}

/** Roofline lengths used for the worked examples on the pricing table. */
export const exampleRooflines = [120, 160, 200, 250, 320];


export function estimateTotal(linearFeet: number, rate = currentTier.rate): number { return linearFeet * rate; }
export function formatDollars(value: number): string { return `$${Math.round(value).toLocaleString('en-US')}`; }
export const taxNote = 'Plus Washington sales tax. No separate material surcharge.';
