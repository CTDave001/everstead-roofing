/**
 * Services offered, in display order.
 *
 * `summary` is the one-liner used on the homepage cards. `points` are the
 * detail bullets shown on /services.
 *
 * Every claim in `points` is drawn from something the site already states
 * elsewhere (the FAQ, the promise and trust sections, or the schema.org
 * serviceType list). Nothing here asserts a warranty term, material, or
 * timeline that was not already published.
 *
 * `slug` doubles as the anchor on /services and as the future route if these
 * are ever split into individual pages.
 */

export interface Service {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'free-inspection',
    title: 'Free Inspection',
    summary:
      "Schedule a complimentary inspection, and our team will assess your roof's condition at your convenience.",
    points: [
      'Completely free and no-obligation',
      'Detailed written quote, no pressure',
      'An honest call on whether you need a repair or a replacement',
    ],
    icon: 'inspection',
  },
  {
    slug: 'roof-repair',
    title: 'Roof Repair',
    summary:
      'Leak fixes, flashing upgrades, venting corrections, and emergency tarping to stop water fast.',
    points: [
      'Leak tracing and permanent repair',
      'Flashing upgrades and venting corrections',
      'Emergency tarping, with expedited scheduling',
    ],
    icon: 'repair',
  },
  {
    slug: 'roof-replacement',
    title: 'Roof Replacement',
    summary:
      'Architectural asphalt, metal, and designer shingles—installed with precision and built for decades.',
    points: [
      'Asphalt, architectural, metal, slate, tile, and flat systems',
      '25-year warranty covering both materials and workmanship',
      'Typically starting within one to two weeks of signing',
    ],
    icon: 'replacement',
  },
  {
    slug: 'maintenance-plan',
    title: 'Maintenance Plan',
    summary:
      'Annual inspections, moss treatment, and preventative care to extend the life of your roof.',
    points: [
      'Annual inspection on a schedule you set',
      'Moss treatment, a necessity in the Pacific Northwest',
      'Preventative care that catches problems while they are cheap',
    ],
    icon: 'maintenance',
  },
  {
    slug: 'damage-repairs',
    title: 'Damage Repairs',
    summary:
      "From minor leaks to major damage, we restore your roof's integrity using top-tier materials.",
    points: [
      'Storm and wind damage restoration',
      'Assistance with insurance claims',
      'Top-tier materials on every repair',
    ],
    icon: 'damage',
  },
  {
    slug: 'flashing-venting',
    title: 'Flashing & Venting',
    summary:
      'Prevent leaks and extend roof life with professional flashing and venting enhancements.',
    points: [
      'Chimney, valley, and sidewall flashing',
      'Intake and exhaust venting corrections',
      'Attic airflow that protects the deck above it',
    ],
    icon: 'flashing',
  },
];

/** Single-path icon geometry, keyed by the `icon` field above. */
export const serviceIcons: Record<string, string> = {
  inspection: 'M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 8v6M8 11h6',
  repair:
    'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
  replacement: 'M3 9l9-7 9 7M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9M9 21v-6h6v6',
  maintenance:
    'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83',
  damage: 'M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-8 3v7c0 6 8 10 8 10s2.97-1.49 5.38-4',
  flashing: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
};
