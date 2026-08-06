# Christmas lights local SEO — 2026 season plan

**Written:** 6 August 2026
**Season target:** ranked and converting by **1 October 2026**, peak demand **8–20 November**
**Starting position:** near-zero domain authority, one existing lights page, no confirmed Google Business Profile

---

## The honest model of what wins here

Holiday lighting leads come from three surfaces, and they are not equally winnable from where this domain starts.

| Surface | Share of leads | What decides it | Winnable by November? |
|---|---|---|---|
| **Google map pack** (top 3 local results) | Most of them | GBP completeness, primary/secondary categories, proximity to searcher, **review count and velocity**, photos, GBP posts | **Yes.** Largely independent of domain authority. This is the highest-ROI work available and it costs nothing. |
| **Organic long-tail** ("christmas light installation cost vancouver wa", "who hangs christmas lights in camas") | Meaningful, high intent | Topical depth, page quality, on-page relevance | **Yes**, if pages ship by early September and get indexed. |
| **Organic head term** ("christmas light installation vancouver wa") | Visible but smaller than people assume | Domain authority, backlinks, age | **Unlikely.** A 0-DA domain does not outrank established competitors on the head term in ten weeks. Plan around this rather than hoping. |

**The strategic consequence:** pour effort into the map pack and long-tail. Treat head-term organic as a 2027 outcome that this season's content starts building toward. If the season needs to be filled regardless of where organic lands, paid is the bridge — see "Paid bridge" below.

---

## Priority 0 — Google Business Profile (do this week)

Nothing else on this list matters as much. A complete GBP with real reviews will out-earn every page on this site combined, and it does not care that the domain is new.

- [ ] **Confirm the profile exists and is verified.** Verification can take days to weeks, and an unverified profile cannot rank. If this is not started, it is the single most urgent item in this document — everything downstream is gated on it.
- [ ] **Keep `Roofing Contractor` as the primary category.** It is the year-round business, and October through December is Pacific Northwest storm season — the best roofing quarter of the year. Swapping the primary category to a seasonal one trades that away for a temporary lights gain, and category changes can trigger re-review and ranking instability that will not recover on this timeline.
- [ ] **Add holiday-lighting secondary categories — this is the real lever.** Secondary categories are not a consolation prize. Whitespark's 2026 local ranking factors score primary category at 227 and secondary at 173, so a secondary carries roughly three quarters of the weight. BrightLocal, across 1,050 locations, found profiles with 1 primary + 3 secondary averaged map position 5.9 versus 7.6 with no secondaries. Confirm exact labels in the category picker rather than trusting any published list; Google changes them.
- [ ] **Point the profile at the lights page.** Google reads the linked URL for relevance, which is why the page rebuild is a map-pack input and not just an organic one. Link the Service entry and every GBP Post at `/christmas-light-installation-vancouver-wa`, and consider switching the main website field to it for October through December.
- [ ] **Add "Christmas light installation" as a Service** on the profile, with a description and the $400–$1,500 range. Services are a separate field from categories and are frequently left empty; filling it is a free relevance signal.
- [ ] **Photos.** Geotagged where possible, uploaded steadily rather than in one dump. Lights photos in September signal the service is live.
- [ ] **GBP Posts, weekly from September.** Low effort, and one of the few GBP signals that rewards consistency.
- [ ] **Set the service area** to the Clark County communities listed on the lights page, so the profile and the site agree.

### The distance ceiling

Proximity is measured from 4200 SE Columbia Way, and it is the one map-pack input that cannot be optimised. Expect strong visibility for Vancouver searchers, degrading steadily toward Battle Ground, Ridgefield, and La Center. **Map pack in those towns is close to unwinnable from a Vancouver address.**

Do not spend effort fighting this. It is precisely what city organic pages are for, and it is the reason to build four good ones rather than twelve thin ones.

### What the competition actually looks like

Worth stating plainly, because it changes how much effort is warranted: roofing is one of the most competitive and most spammed local categories anywhere. Holiday lighting in a market this size is not. The field is largely handymen, landscapers, and one or two genuine operators, and a significant share of those profiles have no service list, no description, and a handful of reviews.

A fully-built profile with thirty real reviews mentioning Christmas lights would likely beat most of that field. The bar here is low in a way it never is for roofing.

### Do not put keywords in the business name

Keyword-stuffed GBP names do rank better, which is why they are everywhere. The name must match real-world signage; anything else is a guidelines violation, and competitors report it.

If spam names are outranking the profile, that is actionable through Google's business redressal complaint form. That is the legitimate version of this tactic.

### The separate-GBP question

Some holiday lighting operators run a second GBP under a distinct brand. It can work, but it requires a genuinely separate business — distinct name, its own staffed address, its own signage. Fabricating one is a guidelines violation and risks the roofing profile alongside it.

**Recommendation: do not.** Run lights as a service under the existing profile this season. Revisit in 2027 if lights becomes a real standalone operation.

---

## Priority 1 — Reviews

Review count and recency are among the strongest map-pack factors, and they take the longest to accumulate. Starting in November is starting too late.

- [ ] **Decide what is true about the current 5.0 / 50 figure.** The site displays it. Structured-data markup for it is now switched off in code until `profileUrl` in `src/data/business.ts` points at a real Google profile — see that file's comment for why. If the number is not backed by a public profile, the visible claim needs revisiting too.
- [ ] **Target a steady trickle, not a burst.** Twenty reviews arriving in one week reads as manipulation. Two or three a week from August through November does not.
- [ ] **Ask roofing customers now.** Reviews on the profile help the profile, whatever service the reviewer bought.
- [ ] **From October, ask lights customers to name the service and the neighbourhood.** This is the highest-ROI single tactic on the list and almost nobody does it deliberately.

  Review text is indexed, and Google surfaces **justifications** — the snippet shown under a map pack result reading *"Their review mentions christmas lights."* A review saying *"Everstead hung our Christmas lights in Felida"* does three jobs at once: it is a ranking signal, a relevance signal for a service the primary category does not cover, and visible social proof rendered inside the map pack itself, where a star rating alone says nothing about what was bought.

---

## Priority 2 — Get indexed fast

A new domain's biggest problem is not ranking, it is being crawled at all.

- [ ] **Google Search Console** — verify the property, submit `https://eversteadroofing.com/sitemap-index.xml`, and request indexing on the lights page and both new posts individually.
- [ ] **Bing Webmaster Tools** — worth ten minutes. Bing indexes new domains faster than Google and powers ChatGPT search results.
- [ ] **IndexNow** — Bing/Yandex support near-instant index submission. Meaningful advantage for a site publishing a seasonal cluster on a deadline.
- [ ] **Watch the `lastmod` behaviour.** `astro.config.mjs` currently stamps `lastmod: new Date()` on every URL at every build, which tells Google every page changed every time the site deploys. That trains crawlers to distrust the signal. Worth switching to real per-page modification dates before relying on `lastmod` to get seasonal updates recrawled.

---

## Priority 3 — Local links

This is what actually moves domain authority, and it is the slowest lever. Local and topically relevant beats high-DA-but-irrelevant every time.

**Realistic targets, roughly in order of ease:**

- Greater Vancouver Chamber of Commerce membership listing
- BBB profile
- Local trade and supplier directories; manufacturer "find an installer" pages
- Neighborhood Facebook groups and Nextdoor — as a genuine participant, not a link-dropper
- **The displays guide is the real play.** `/blog/clark-county-christmas-lights-displays-guide` exists to be linked to. Every November, local outlets, realtor blogs, and community groups publish or reshare "where to see lights" roundups. A genuinely good local guide gets picked up by those. Pitch it in **early November**, when those roundups are being written — not August.
- Sponsor something visible locally. A youth sports team or school event listing is a cheap, legitimate local link.

**Citations:** get NAP identical everywhere — `Everstead Roofing, 4200 SE Columbia Way Suite F, Vancouver, WA 98661, (360) 342-9525`. Inconsistent NAP across directories actively suppresses map-pack ranking. Audit before building new ones.

---

## Priority 4 — Content, past what already shipped

Shipped in this pass: the lights page rebuilt at a keyword URL with pricing, process, service area, expanded FAQ and Service schema; a cost guide; the displays guide.

**Next, in value order:**

1. **City pages — but only real ones.** Four to six, for communities with actual completed jobs, real photos, and specific local detail. Thin near-duplicate city pages are the fastest way to get a low-authority domain dismissed. `HolidayServiceArea.astro` is already built to turn an entry into a link the moment a page earns one — see the comment in that file. **Do not build twelve.**
2. **"Christmas light installation vs doing it yourself"** — captures the large undecided-homeowner segment.
3. **Permanent/year-round lighting page**, if that service is offered. Growing category, far less competition than seasonal.
4. **Commercial lighting page**, if commercial work is wanted. Different searcher, much higher ticket, and almost nobody targets it well.

---

## The calendar

| When | Focus |
|---|---|
| **Aug 6–15** | GBP verified and fully built out. GSC + Bing verified, sitemap submitted, new pages index-requested. NAP audit started. Review asks begin. |
| **Aug 16–31** | Citations cleaned and built. Chamber/BBB submitted. First city page if a real one can be supported. Reviews continuing. |
| **Sept 1–15** | Popup now live (window moved to Sept 1 in this pass). Weekly GBP posts begin. Remaining city pages. First rank check — expect long-tail movement only. |
| **Sept 16–30** | Early-bird booking push. Email/text past roofing customers — the cheapest lights leads available, and they convert far better than cold organic. |
| **Oct 1–31** | Demand ramps. Paid switched on if using it. Lights photos to GBP as jobs complete. Reviews from lights customers. |
| **Nov 1–20** | **Peak.** Pitch the displays guide to local outlets and community groups. Publish the season's confirmed dates on it. Capacity, not traffic, becomes the constraint. |
| **Dec** | Take deposits for 2027. Photograph everything — that library is next season's biggest asset. |
| **Jan** | Removals. Post-mortem: which pages drove calls, which queries landed, what to build in spring while there is time. |

---

## Paid bridge

If the season needs to be filled regardless of where organic lands:

- **Local Services Ads** are the strongest option for this category — they sit above the map pack, are pay-per-lead, and carry the Google Guaranteed badge, which matters for a business nobody has heard of.
- **Google Ads on high-intent terms** from mid-October. Every landing page shipped in this pass is already built to receive that traffic.
- Set up conversion tracking *before* October, not during it. Call tracking especially — phone is how this category converts, and untracked calls make the whole season unmeasurable.

---

## Open decisions

These were asked and not yet answered. Work proceeded on the stated assumptions; each one changes what happens next.

1. **GBP status.** Assumed a real business with a profile to build out. If there is no profile, Priority 0 becomes the only thing that matters this week.
2. **Service area.** Assumed Vancouver plus close-in Clark County. Adding Portland metro is a much larger and much more competitive market and would need its own plan.
3. **Paid budget.** Assumed organic-first. Changes only whether the paid bridge is real or theoretical.
4. **Real tier pricing.** `HolidayPricing.astro` publishes the $400–$1,500 range already on the site and explains what moves it, rather than inventing tiers. If actual tier pricing exists, adding it would convert better — keep it in sync with the FAQ and the `Service` schema, which both carry the same figures.
5. **Lights testimonials.** `TestimonialsSection` on the lights page shows roofing testimonials. Not wrong, but lights-specific social proof would convert better. Worth collecting deliberately this season.
