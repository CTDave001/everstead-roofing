# Everstead Roofing — Premium Rebuild Design

**Date:** 2026-08-05
**Status:** Validated, ready for implementation
**Repo:** `CTDave001/everstead-roofing` (Astro 5.16.6)

---

## Brief

Rebuild the site to read as premium. Keep the existing brand identity — this is a
refinement of what exists, not a replacement. The palette is not the problem; the
execution is.

## Direction

Keep the navy / terracotta / cream palette and the existing photography. Change
typography, rhythm, and detail discipline. In the vocabulary of the directions
considered, this is "warm heritage" pulled toward editorial restraint.

Four things currently make the site read cheap:

1. Four font families load; headings are inconsistently two different faces.
2. The type scale is flat — nothing ever reads as large.
3. Every section uses identical padding, so the page has no pacing.
4. Six radius tokens and four pure-black shadows, applied inconsistently.

None of these require changing the brand.

---

## 1. Palette — unchanged

```
--color-primary   #c56125   terracotta
--color-navy      #152536
--color-cream     #f4f4eb
```

Retained exactly. This combination is already sophisticated and is not the source
of the problem.

## 2. Typography

### Current state

Four families load on every page: Inter, Montserrat, Playfair Display, and Plus
Jakarta Sans — roughly 22 weights total.

- **Playfair Display is used zero times.** Four weights downloaded for nothing.
- `--font-heading` resolves to Montserrat, but **Plus Jakarta Sans is hardcoded
  27 times**, bypassing the token system. Headings are therefore two different
  faces depending on which component rendered them.

### Target

| | Current | Target |
|---|---|---|
| Families | 4 (~22 weights) | **2** (~8 weights) |
| Display / headings | Montserrat *and* Jakarta | **Plus Jakarta Sans** |
| Body | Inter | **Inter** (unchanged) |
| Playfair Display | loaded, unused | removed |
| Hardcoded `font-family` | 27 | **0** — tokens only |

Jakarta wins over Montserrat because it is already the de facto choice in 27
places, is warmer and more contemporary, and Montserrat is the most over-used
geometric sans on the web. This is less a change than a decision to be consistent
about what is already there.

### Scale

Current steps near the top are only ~1.25x apart. Going fluid with real contrast:

```
display  clamp(2.75rem, 6vw, 4.5rem)     44 -> 72px
h1       clamp(2.25rem, 4.5vw, 3.5rem)   36 -> 56px
h2       clamp(1.75rem, 3vw, 2.5rem)     28 -> 40px
h3       1.375rem                        22px
body     1.0625rem                       17px  (unchanged)
small    0.9375rem                       15px
```

4.2x display-to-body contrast, scaling smoothly rather than snapping at
breakpoints.

Side benefits: dropping two families measurably improves first paint and removes
a layout-shift source.

## 3. Rhythm

Every `.section` is currently `padding: 80px 0`, without exception. This is the
single biggest contributor to the flat feel — no pacing, no hierarchy.

```css
.section--tight    clamp(3rem, 6vw, 4.5rem)     48 ->  72px
.section           clamp(5rem, 9vw, 7.5rem)     80 -> 120px   /* default */
.section--feature  clamp(7rem, 13vw, 10rem)    112 -> 160px
```

Assignment: support sections (trust bar, FAQ) go tight. Hero, services, and the
main CTA go feature. Everything else sits at default.

Whitespace is the premium signal. There is no substitute for it.

### Measure

The container is 1400px with no constraint on text, so paragraphs run to
punishing line lengths on wide monitors. Add `--measure: 68ch` for prose blocks;
the container stays wide for full-bleed imagery.

## 4. Detail discipline

**Radii: six tokens down to three.**

```
6px    inputs, small chips
14px   cards, panels
full   pills
```

**Shadows: retint from black to navy.** All four are currently `rgba(0,0,0,…)`,
which goes muddy grey against the cream background — precisely the cheap look.

```css
--shadow-sm: 0 1px  2px rgba(21, 37, 54, 0.06);
--shadow-md: 0 4px 16px rgba(21, 37, 54, 0.08);
--shadow-lg: 0 16px 40px rgba(21, 37, 54, 0.10);
```

Same shadows, but they now belong to the palette instead of fighting it.

---

## 5. Architecture

### The core problem

The site has two incompatible architectures:

| Page | Lines | Built from |
|---|---|---|
| `index.astro` | 24 | 9 section components |
| `holiday.astro` | 26 | 6 section components |
| `about.astro` | **453** | zero components — bespoke markup |
| `contact.astro` | **330** | zero components — bespoke markup |

Any design decision must be made twice, in two idioms, and one inevitably drifts.
Normalizing this is what makes the redesign hold together rather than decaying
again in six months.

### Target component system

```
Primitives   Section · Prose · Card · Button · Badge · Icon
Sections     Hero · ServicesGrid · Promise · Trust
             Testimonials · FAQ · CTA · News
Pages        composition only — no page over ~60 lines
```

### Pages

`/` · `/services` · `/about` · `/contact` · `/privacy` · `/holiday` (seasonal) · `404`

### Services

`ServicesSection` already contains six accurate services with written
descriptions — Free Inspection, Roof Repair, Roof Replacement, Maintenance Plan,
Damage Repairs, Flashing & Venting. All six link to `/contact`. Meanwhile
`BaseLayout` schema declares **eight** service types to Google.

The site tells search engines it offers eight services while offering visitors
zero pages about any of them.

**Decision:** build `/services` as one hub page with a section per service, not
eight separate pages. Separate pages rank better long-term but are a real content
lift and are not needed to ship. Content is structured so splitting later is a
data change, not a rewrite.

This also lets `SERVICES` in the nav finally point somewhere real, instead of
being one of four things aimed at `/contact`.

## 6. Content model

Services, testimonials, FAQ, and business facts move into `src/data/` modules,
extending the `business.ts` pattern already established for the review rating.
Copy stops living inside markup.

---

## 7. Rollout

**`main` auto-deploys to the live client site. The rebuild does not happen on
`main`.**

Work happens on a branch. Vercel builds a preview URL per push. Review the real
thing, merge only when approved. Nothing reaches customers before then.

### Verification, per batch

- `npm run build` clean
- Broken-image sweep on every build (this is what caught all six live 404s)
- Zero hardcoded `font-family`; zero references to removed tokens
- Lighthouse before/after — dropping two families and 40MB of images should be
  clearly visible
- **Form smoke test on the preview before merge.** The lead form is the site's
  commercial purpose and must not break.

### Sequencing

Reviewable batches, with a checkpoint between each:

1. **Foundation** — tokens, type scale, rhythm, shadows. Few visual regressions
   expected; mostly invisible groundwork.
2. **Primitives** — build them, and normalize `about` and `contact` off their
   453/330-line monoliths.
3. **Sections** — rebuild against the new system.
4. **Services** — new `/services` hub, wire up the nav.
5. **Polish** — motion, focus states, responsive passes.

If batch 3 goes sideways, batches 1–2 still stand.

---

## Known issues, deferred by decision

- **Exposed `sk_live_` FormVault key** in client-side JS at `contact.astro`. The
  repo is public and the key is served in the live page source. Owner assessed
  the risk and chose to defer; the practical exposure is endpoint abuse. Worth
  confirming whether the key permits *reading* submissions, which would make it
  customer PII rather than spam. Proper fix: publishable domain-scoped key, or a
  server-side proxy holding the secret. **Rotate when addressed.**
- **`eversteadlogoholiday.svg` is 807KB** and is genuinely used as the logo on
  `/holiday`. An SVG that size has a raster embedded. Redraw during the rebuild.
- **Off-season popup weight.** The seasonal popup ships both variants into the
  DOM and hides one with JS, so August visitors download a 488KB Christmas photo
  they never see.
- **`HOLIDAY` nav link is a manual seasonal toggle.** Astro builds static HTML,
  so a date check evaluates at build time and goes stale until redeploy.
  Re-add in late October, or add a scheduled rebuild trigger.
- **`/holiday` remains in the sitemap year-round.**
- **Five unused files (~3.1MB) remain in `public/images`** by decision, pending
  the rebuild.

## Completed prior to this design

Shipped in `b13ab12` (2026-08-04):

- `/privacy` page added, footer-linked, in sitemap
- `og:image` fixed — was 404 on every page; now build-generated at a real
  1200x630, with declared dimensions read back from the generated file
- Four broken hero avatars replaced with a Google rating badge, sourced from
  `src/data/business.ts`, which now also feeds the schema.org `aggregateRating`
- Popup hero image fixed (referenced `.jpg`, file was `.png`)
- `HOLIDAY` nav link removed for the off-season
- 13 unreferenced duplicate images deleted — `public/images` 43MB -> 5.6MB
