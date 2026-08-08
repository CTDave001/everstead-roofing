# Content backlog — lights cluster

**Written:** 6 August 2026

The principle everything here is filtered through:

> **Swap "Vancouver" for "Tulsa." If the page still reads fine, it is generic, and it will not rank on a domain with no authority.**

Every item below fails that swap deliberately. None of them require customer stories, which is the usual excuse for not starting — they exploit assets the business already has.

---

## The four assets

1. **You repair the damage.** You have opened up roofs ruined by stapled lights. No lighting company on earth can produce that material.
2. **You price by the foot, and nobody publishes measurements.** Your pricing model is a content category nobody else can enter without abandoning "call for pricing".
3. **Public data nobody has bothered to analyse.** Weather, daylight, assessor records, CC&Rs.
4. **You are doing this for the first time, in public.** Year-one honesty is rare in home services and disproportionately read.

---

## Shipped

- `/blog/christmas-light-installation-cost-vancouver-wa` — publishes the full rate card
- `/blog/clark-county-christmas-lights-displays-guide` — the link magnet, pitched to press in November
- `/blog/diy-vs-professional-christmas-light-installation` — says "you do not need us" where true
- Lights calculator on the money page — linear feet in, all three tiers out
- Four city pages, ~1,150 words each, no shared body copy

---

## Next, in build order

### 1. "How to measure your roofline from Google Maps"
**Asset 2.** The flagship. A real query, genuinely useful, and it produces leads that arrive already carrying the one number needed to quote. No competitor writes it because none of them publish per-foot pricing. Feeds directly into the calculator.

### 2. "What Christmas lights actually do to a roof"
**Asset 1.** Photo essay: staple holes, torn shingles, punctured flashing, the water damage underneath.

**Needs real photographs.** This piece is only worth publishing if the images are genuine — its entire persuasive force is "we opened this roof up and this is what was under it." Synthetic images here would be fabricated evidence and would destroy the credibility the piece exists to build. Diagrams explaining the mechanism are fine and honest; photographs presented as findings are not.

### 3. "We measured 50 Clark County homes"
**Asset 2.** Original research, one weekend of satellite work. Median roofline by neighbourhood, by decade built, by house type. The most linkable and AI-citable item on this list — citation probability follows a power law and original data is what gets cited. Every reader immediately wants their own number, which is what the calculator is for.

### 4. Interactive map of the displays guide
Upgrades the existing link magnet into a different asset class. Local outlets **embed** maps; they do not embed lists. Cheapest possible improvement to the page most likely to be picked up in November.

### 5. "Who is liable if someone falls off your roof?"
Nobody covers it. Homeowner's policy vs contractor's insurance vs the uninsured guy from Facebook. Credible from roofers, quietly favours hiring insured pros, and does double duty on the commercial page where liability is the buying objection.

### 6. "The 14 workable days"
**Asset 3.** Ten years of NOAA data for Vancouver, counting genuinely workable days between 1 Oct and 20 Dec after rain, wind and daylight. Converts "book early" from a sales line into a documented fact. The kind of thing local press quotes.

### 7. Winter curb appeal, for realtors
Co-marketing. December listings have a real curb-appeal problem and agents have no answer for it. Earns links from realtor blogs *and* opens a referral channel — agents book lights for staged homes. Nobody in this market courts them.

### 8. Permanent vs seasonal, five-year math
Real arithmetic: five seasons of installs against one permanent system. Captures the fastest-growing segment, and honest enough to be linkable even when the answer is "stay seasonal." Blocked on whether permanent lighting is actually offered.

### 9. DIY safety resource
Ladder angles, GFCI, wattage limits, wet-roof rules. Counter-intuitive because it helps people not hire you — which is exactly why safety groups, community orgs and local news link to it. Links that cannot be bought.

### 10. "Your lights are on 15 hours a day in December"
**Asset 3.** Vancouver sunset is ~4:26pm at solstice. Chart darkness hours across the season. Cheap, shareable, quietly argues value per dollar.

### 11. Build log
**Asset 4.** Year one of a holiday lighting company — inventory decisions, the reasoning behind the rate ladder, what went wrong. Rare and therefore read.

---

## Not content — a mechanic

**Group booking for streets.** The Ridgefield page already notes that new subdivisions light up in clusters and adjacent homes are cheaper to service. Turn it into an offer: five or more houses on one street gets a group rate. A page, a growth loop, and a route-efficiency win at once — and it attacks the proximity ceiling directly, because one booked street makes the next door easier.

---

## The tool, staged

1. **Manual input → instant price.** Shipped.
2. **Trace on satellite imagery** → auto linear feet → price. A map, a polyline, haversine. No ML. Use Mapbox rather than Google — Google's terms restrict derived measurement from their imagery.
3. **Render, last and constrained.** Overlay warm light points along the traced line on the customer's own photo. Do not reach for AI photorealism: a render is a visual promise, and "it didn't look like the mockup" is a refund conversation in December when there is no schedule slack.

**The roofing version is not a port.** Lights need perimeter; roofing needs area, pitch and facet count — a materially harder computer-vision problem, which is why EagleView charges per report. Budget it as a separate build.

---

## Imagery policy

Generated imagery is fine for **illustration** — blog covers, section backgrounds, mood. It is not fine as **evidence**.

- Acceptable: a photorealistic house at dusk heading a blog post about lighting
- Not acceptable: synthetic images captioned or implied as our completed jobs, our crew, or damage we found

The line is whether a reasonable visitor would take the image as a factual record of this business's work. Portfolio and damage-documentation imagery must be real, and should be photographed from day one this season.
