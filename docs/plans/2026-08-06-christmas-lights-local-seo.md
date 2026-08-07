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

## The revenue target, and what it actually demands

**Stated goal: $250,000+ from lights installs, and 300 residential jobs.** Roofing is not being actively marketed; lights is the focus. Commercial is in scope.

*Revised 6 Aug once the real rate card was supplied. The earlier version of this section assumed the published $400–$1,500 range and an $800–$900 average ticket. Both were wrong, and the correction is favourable.*

**Pricing model:** linear feet × rate, + 8% material, + Washington sales tax stated separately. Rate ladder: **$6.50/ft through 30 Sept, $7.25 in October, $7.95 in November.** Codified in `src/data/pricing.ts`.

| Roofline | Sept $6.50 | Oct $7.25 | Nov $7.95 |
|---|---|---|---|
| 120 ft | $842 | $940 | $1,030 |
| 160 ft | $1,123 | $1,253 | $1,374 |
| 200 ft | $1,404 | $1,566 | $1,717 |
| 250 ft | $1,755 | $1,958 | $2,147 |
| 320 ft | $2,246 | $2,506 | $2,748 |

*Incl. 8% material, pre-tax. Sales tax is not revenue and is excluded throughout.*

Most Clark County homes run 120–250 ft, so a realistic average ticket is **$1,200–$1,800**, not $850. What follows:

| | |
|---|---|
| Jobs to reach $250k | **~150–180**, not ~300 |
| Revenue at the stated 300-job target | **~$400,000–$500,000** |
| Install window (1 Oct – 20 Dec) | ~80 days, perhaps 55–65 workable |
| Jobs/day at 300 | ~5 — genuinely demanding |
| Jobs/day at 175 | ~3 — comfortable for 1–2 crews |

**$250k is not the stretch. 300 jobs is.** The revenue target is met at a little over half the stated job count; everything past ~180 jobs is upside, and it is upside bounded by crews and daylight rather than by leads.

### The rate ladder is the marketing asset

Most contractors urge booking early and leave the reason vague. This one has a published, dated, verifiable price increase behind it. That is honest urgency rather than manufactured scarcity, and it is the strongest conversion mechanism on the site.

Two rules follow, and they matter more than any ranking factor:

- **The deadline must be real.** If 30 September passes and the rate does not actually move, the October and November deadlines stop working — customers learn the ladder is theatre, and it cannot be un-learned.

  The site side of this is now automatic. `src/data/pricing.ts` picks the live tier by comparing the build clock against Pacific-time boundaries, and `.github/workflows/scheduled-rebuild.yml` triggers a Vercel rebuild daily at 07:05 UTC (00:05 Pacific) so a static site actually re-evaluates it. Verified across both boundaries, including the UTC-vs-Pacific trap that would otherwise raise the rate seven hours early.

  **Two one-time setup steps are still outstanding, and the automation does nothing until both are done:** create a Vercel deploy hook, and store it as the GitHub secret `VERCEL_DEPLOY_HOOK`. If a deadline passes and the price does not change, that workflow is the first thing to check. Note also that GitHub disables scheduled workflows after 60 days of repository inactivity.

  What is *not* automated is the quoting side. The site will say $7.25 on 1 October whether or not quotes go out at $7.25.
- **Sell the cheapest tier hardest, now.** It is 6 August. There are eight weeks of $6.50/ft left, and every booking taken at $6.50 with a 50% deposit is inventory financed before it is ordered.

### The mix matters more than the volume

Two routes to roughly the same number:

- **~300 residential** at $850 — punishing operationally, and every job carries the same fixed travel and setup overhead.
- **~150 residential** ($128k) **+ ~15 commercial** at $8k ($120k) — same revenue, roughly half the job count.

A single HOA, retail centre, apartment complex, or car dealership runs $5,000–$25,000. Commercial is what makes this target reachable rather than gruelling, and it is materially less contested — most local operators chase residential exclusively.

It is also a **different motion**: outbound to property managers and facilities contacts in August and September, walk-ins, and direct approach. Not SEO. A commercial landing page supports that motion and will rank easily on near-zero competition, but the page is not what wins the accounts.

### What this means for the plan below

- Paid stops being optional. See "Paid bridge" — at this target it is a required channel, not a contingency.
- Commercial content moves up the content priority list.
- Average ticket is worth as much attention as lead count. Wrapped trees, columns, and larger displays raise the number per job without raising the job count.

---

## Priority 0 — Google Business Profile (do this week)

Nothing else on this list matters as much. A complete GBP with real reviews will out-earn every page on this site combined, and it does not care that the domain is new.

- [ ] **Confirm the profile exists and is verified.** Verification can take days to weeks, and an unverified profile cannot rank. If this is not started, it is the single most urgent item in this document — everything downstream is gated on it.
- [ ] **Switch the primary category to holiday lighting for the season.** *(Revised 6 Aug. The earlier version of this document said keep `Roofing Contractor` primary, on the reasoning that Oct–Dec is the best roofing quarter. The business has since decided roofing is not being actively marketed this season and lights is the focus, which removes the cost that recommendation was protecting against.)*

  Primary category scores 227 against 173 for secondary — the largest single relevance lever available. If lights is the priority, take it.

  - Switch in **early September**, not November. Category changes can trigger re-review and ranking instability; that needs to settle before demand arrives.
  - Keep `Roofing Contractor` as a **secondary** so roofing does not vanish entirely.
  - Switch back in January.
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

*Reordered 6 Aug for the $250k target — commercial moved from fourth to first. At $8k+ per account it is worth roughly ten residential jobs, and it is the least contested page on this list.*

1. **Commercial lighting page.** Different searcher, far higher ticket, and almost nobody targets it well. The page will rank easily; it exists to support an outbound motion rather than replace one.
2. **City pages — but only real ones.** Four to six, for communities with actual completed jobs, real photos, and specific local detail. Thin near-duplicate city pages are the fastest way to get a low-authority domain dismissed. The roofing `[city].astro` template and `locations.ts` already establish the pattern, and it deliberately filters the lights service out to protect topical signal — so lights city pages need their own route rather than bolting onto the roofing one. `HolidayServiceArea.astro` turns an entry into a link the moment a page earns one. **Do not build twelve.**
3. **Permanent/year-round lighting page**, if that service is offered. Growing category, far less competition than seasonal, and a much higher ticket that lifts the average without adding job count.
4. **"Christmas light installation vs doing it yourself"** — captures the large undecided-homeowner segment.

---

## The calendar

| When | Focus |
|---|---|
| **Aug 6–15** | **GBP is the whole week.** Verify it, switch categories, fill Services, link it to the lights page. GSC + Bing verified, sitemap submitted, all 6 new lights URLs index-requested individually. NAP audit. Review asks begin. |
| **Aug 16–31** | Commercial outbound starts — property managers set budgets now, and the commercial page exists to support that conversation, not replace it. Citations cleaned. Chamber/BBB. Reviews continuing. |
| **Sept 1–15** | Popup live (window moved to Sept 1). GBP primary category switched to holiday lighting — early, so it settles. Weekly GBP posts begin. First rank check; expect long-tail only. |
| **Sept 16–30** | **Hard push on the $6.50 deadline.** Email and text every past roofing customer — cheapest leads available and they convert far above cold organic. This is the last two weeks of the lowest tier and it will not come back. |
| **Oct 1–31** | Rate moves to $7.25 — and it must actually move. Demand ramps. Lights photos to GBP as jobs complete. Reviews from lights customers naming the service. |
| **Nov 1–20** | **Peak.** Pitch the displays guide to local outlets and community groups. Publish the season's confirmed dates on it. Capacity, not traffic, becomes the constraint. |
| **Dec** | Take deposits for 2027. Photograph everything — that library is next season's biggest asset. |
| **Jan** | Removals. Post-mortem: which pages drove calls, which queries landed, what to build in spring while there is time. |

---

## Paid — required, not a contingency

*Revised 6 Aug. At a $250k target on a domain with no authority and no ranking history, organic cannot carry the volume in its first season. This is a channel that has to be funded, not a fallback if rankings disappoint.*

- **Local Services Ads** are the strongest option for this category — they sit above the map pack, are pay-per-lead, and carry the Google Guaranteed badge, which matters for a business nobody has heard of.
- **Google Ads on high-intent terms** from mid-October. Every landing page shipped in this pass is already built to receive that traffic.
- Set up conversion tracking **before October**, not during it. Call tracking especially — phone is how this category converts, and untracked calls make the whole season unmeasurable. At this spend level, running blind for six weeks is the expensive mistake.
- Budget backwards from the target. If paid needs to source even a third of ~300 installs, that is ~100 jobs; at a plausible cost per acquired job for this category, the required spend is a real line item that has to be committed in September, alongside the inventory.

---

## Open decisions

These were asked and not yet answered. Work proceeded on the stated assumptions; each one changes what happens next.

1. **GBP status.** Assumed a real business with a profile to build out. If there is no profile, Priority 0 becomes the only thing that matters this week — and at a $250k target with a September category switch to schedule, an unverified profile is a season-defining blocker.
2. **Crew capacity.** The single largest open risk. ~300 installs needs 2–3 crews; the marketing plan is pointless if the calendar cannot be serviced, and overselling capacity in November produces refunds and one-star reviews at exactly the wrong moment. Decide the real ceiling before the lead volume arrives, and stop taking deposits at it.
3. **Commercial capability.** Whether commercial accounts can actually be delivered. This decides whether the $250k target runs through ~300 residential jobs or ~150 plus a handful of commercial ones, and it is the difference between a hard season and a brutal one.
4. **Service area.** Assumed Vancouver plus close-in Clark County. Adding Portland metro is a much larger and much more competitive market and would need its own plan.
3. **Paid budget.** Assumed organic-first. Changes only whether the paid bridge is real or theoretical.
4. **Real tier pricing.** `HolidayPricing.astro` publishes the $400–$1,500 range already on the site and explains what moves it, rather than inventing tiers. If actual tier pricing exists, adding it would convert better — keep it in sync with the FAQ and the `Service` schema, which both carry the same figures.
5. **Lights testimonials.** `TestimonialsSection` on the lights page shows roofing testimonials. Not wrong, but lights-specific social proof would convert better. Worth collecting deliberately this season.
