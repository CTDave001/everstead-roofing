/**
 * Service-area city pages.
 *
 * Vancouver is deliberately absent: the homepage already targets "Roofing
 * Service in Vancouver", and a second page chasing the same term would compete
 * with it rather than extend reach.
 *
 * Each entry has to earn its page. Google classifies near-identical city pages
 * with the name swapped as doorway pages, so `angle`, `conditions` and
 * `neighbourhoods` below carry content that is genuinely specific to the place -
 * geography, prevailing weather, tree cover, housing stock.
 *
 * What is NOT here, deliberately: permit fees, inspection schedules, and any
 * claim about work completed locally. Those change, vary by jurisdiction, and
 * are not ours to assert without the client confirming them. Add them per-city
 * once verified rather than generating them.
 */

export interface Location {
  slug: string;
  city: string;
  county: string;
  /** One-line positioning used in the hero and meta description. */
  angle: string;
  intro: string;
  /** Locally specific roof pressures. The reason this page is not a duplicate. */
  conditions: { title: string; body: string }[];
  /** Recognisable areas, used for local relevance signals. */
  neighbourhoods: string[];
  driveTime: string;
  /**
   * City-specific questions. These carry most of the page's unique content and
   * are emitted as FAQPage schema. Keep the answers genuinely different between
   * cities - identical answers with the name swapped are the doorway pattern
   * these pages exist to avoid.
   */
  faqs: { question: string; answer: string }[];
}

export const locations: Location[] = [
  {
    slug: 'camas-wa',
    city: 'Camas',
    county: 'Clark County',
    angle:
      'Heavily wooded lots and Gorge wind exposure make Camas roofs age differently to the rest of Clark County.',
    intro:
      "Camas sits where the Columbia River Gorge opens into the Vancouver plain, and its roofs take the consequences. The town's mature tree cover keeps slopes shaded and damp, while east winds funnelling out of the Gorge put real mechanical load on ridges and edges. Both shorten roof life in ways a general estimate tends to miss.",
    conditions: [
      {
        title: 'Gorge wind exposure',
        body: 'East winds accelerating out of the Columbia River Gorge hit Camas harder than they hit Vancouver or Ridgefield. Ridge caps and rake edges are the first things to lift, and once an edge is open the wind gets underneath the field of the roof. Properly fastened edge detail matters more here than almost anywhere else in the county.',
      },
      {
        title: 'Dense tree cover',
        body: "Camas keeps more of its original conifer canopy than most of Clark County. That shade means north slopes stay damp long after the rain stops, which is exactly the condition moss needs. It also means constant needle drop into valleys and gutters, where it dams water and gives moss somewhere to root.",
      },
      {
        title: 'Steeper terrain',
        body: 'Much of Camas is built on slopes above the Washougal and Columbia rivers. Hillside lots produce complicated roof geometry — more valleys, more dormers, more penetrations — and every one of those is a place flashing has to be right.',
      },
    ],
    neighbourhoods: ['Prune Hill', 'Grass Valley', 'Lacamas Lake', 'Fisher Basin', 'Dwyer Creek'],
    driveTime: 'about 20 minutes from our Vancouver shop',
    faqs: [
      {
        question: 'Does the tree cover in Camas mean I need my roof cleaned more often?',
        answer:
          "Generally yes. Camas keeps more conifer canopy than most of Clark County, and constant needle drop fills valleys and gutters faster than it does in more open parts of the county. What matters is clearing the debris, not scrubbing the roof - and never pressure washing it, which strips granules far faster than the moss ever would.",
      },
      {
        question: 'Are Gorge winds really a factor this far west?',
        answer:
          'Camas sits at the western mouth of the Gorge, so it takes a meaningful share of east wind events without the full force Washougal sees. In practice that shows up as lifted ridge caps and rake edges rather than whole sections of missing shingles. Edge fastening is where it matters.',
      },
      {
        question: 'My house is on Prune Hill with a complicated roofline. Does that change the cost?',
        answer:
          'It changes the work more than the material. Hillside lots in Camas tend to produce more valleys, dormers, and penetrations, and each one is a place flashing has to be done properly. Expect a quote to reflect complexity and access rather than square footage alone.',
      },
    ],
  },
  {
    slug: 'battle-ground-wa',
    city: 'Battle Ground',
    county: 'Clark County',
    angle:
      'Open, exposed lots north of Vancouver, with more weather and less shelter than the city.',
    intro:
      'Battle Ground sits north of Vancouver where Clark County opens out into farmland and larger lots. Roofs here are more exposed than their equivalents in town — less shelter from neighbouring buildings, less tree cover breaking the wind, and noticeably more of the weather arriving directly.',
    conditions: [
      {
        title: 'Wind exposure on open lots',
        body: 'Larger, flatter parcels mean less shelter from surrounding structures. Winter storms coming in off the plain hit these roofs with little to slow them down first, and wind damage in Battle Ground tends to show up along ridges and at gable ends rather than in isolated patches.',
      },
      {
        title: 'Wider temperature swings',
        body: 'Further from the moderating influence of the Columbia, Battle Ground runs slightly colder on winter nights than Vancouver does. More freeze-thaw cycles mean water that has found its way under a lifted shingle gets more opportunities to expand and widen the gap.',
      },
      {
        title: 'Newer housing stock reaching its first replacement',
        body: 'A great deal of Battle Ground was built out during the growth of the late 1990s and 2000s. Much of that housing is now arriving at the twenty to twenty-five year mark, which is precisely when the original builder-grade asphalt roof stops being repairable and starts being replaceable.',
      },
    ],
    neighbourhoods: ['Meadow Glade', 'Hockinson', 'Venersborg', 'Lewisville', 'Cedars'],
    driveTime: 'about 25 minutes from our Vancouver shop',
    faqs: [
      {
        question: 'Why does wind damage seem worse out here than in Vancouver?',
        answer:
          'Less shelter. Battle Ground sits on larger, more open parcels with fewer neighbouring structures and less tree cover to break the wind, so storms arrive with little to slow them first. Damage here tends to appear along ridges and at gable ends rather than in isolated patches.',
      },
      {
        question: 'My house was built around 2002. Is it due for a roof?',
        answer:
          'It is worth an inspection. A great deal of Battle Ground was built out in the late 1990s and 2000s, and builder-grade asphalt from that period typically reaches the end of its useful life somewhere in the twenty to twenty-five year window. That is the point where repairs stop being the cheaper path.',
      },
      {
        question: 'Do the colder nights up here actually matter for a roof?',
        answer:
          'They do, at the margins. Battle Ground runs slightly colder than Vancouver on winter nights, being further from the moderating influence of the Columbia. More freeze-thaw cycles mean water that has worked under a lifted shingle gets more chances to expand, and small gaps widen faster than they would in town.',
      },
    ],
  },
  {
    slug: 'ridgefield-wa',
    city: 'Ridgefield',
    county: 'Clark County',
    angle:
      'One of the fastest-growing towns in Washington, with a roof stock split sharply between brand new and genuinely old.',
    intro:
      'Ridgefield has grown faster than almost anywhere else in Washington over the past decade, and its roofs reflect that. The housing stock splits into two distinct groups: new construction from the recent build-out, and considerably older homes near the historic centre and out toward the wildlife refuge. Those two groups need completely different conversations.',
    conditions: [
      {
        title: 'Two very different roof populations',
        body: 'New-build roofs in Ridgefield are usually still under warranty and need inspection and maintenance rather than intervention. Older homes near the town centre often carry roofs well past twenty years. The right advice depends entirely on which of those you own, and it is worth being sceptical of anyone who recommends the same thing to both.',
      },
      {
        title: 'Lowland moisture near the refuge',
        body: 'Properties toward the Ridgefield National Wildlife Refuge and the Columbia lowlands sit in genuinely damp air. Persistent humidity keeps north slopes from drying between rain events, and it puts more pressure on attic ventilation than higher ground does.',
      },
      {
        title: 'Builder-grade materials reaching their limit',
        body: 'Rapid build-out tends to mean standard three-tab or entry-level architectural shingles installed at volume. They perform adequately, but they are specified for the shorter end of the twenty-to-thirty-year range, not the longer one — worth knowing before you assume you have another decade.',
      },
    ],
    neighbourhoods: [
      'Ridgefield Heights',
      'Abrams Park',
      'Gee Creek',
      'Union Ridge',
      'Pioneer Canyon',
    ],
    driveTime: 'about 20 minutes from our Vancouver shop',
    faqs: [
      {
        question: 'My house is only eight years old. Do I need to think about the roof at all?',
        answer:
          'Not urgently, but do not assume it is fine either. Rapid build-out usually means standard or entry-level architectural shingles installed at volume, which are specified for the shorter end of the twenty-to-thirty-year range. An inspection now establishes a baseline and catches flashing or venting issues while they are still cheap.',
      },
      {
        question: 'Does being near the wildlife refuge affect my roof?',
        answer:
          'Properties toward the refuge and the Columbia lowlands sit in genuinely damp air, and persistent humidity keeps north slopes from drying between rain events. The practical consequence is more moss pressure and more strain on attic ventilation than higher ground in Ridgefield sees.',
      },
      {
        question: 'Why do I get such different advice on my older place near town?',
        answer:
          'Because Ridgefield really does have two roof populations. Homes near the historic centre often carry roofs well past twenty years, while new-build stock is still under warranty. The right recommendation depends entirely on which you own, and it is reasonable to be sceptical of anyone recommending the same thing for both.',
      },
    ],
  },
  {
    slug: 'washougal-wa',
    city: 'Washougal',
    county: 'Clark County',
    angle:
      'The most wind-exposed roofs in Clark County, sitting directly in the mouth of the Columbia River Gorge.',
    intro:
      'Washougal sits further into the Columbia River Gorge than anywhere else we regularly work, and that single fact dominates everything about roofs here. East winds compress through the Gorge and arrive in Washougal at speeds the rest of Clark County simply does not experience. Roofs that would last comfortably in Vancouver fail early here, and almost always at the edges.',
    conditions: [
      {
        title: 'Gorge wind, at its strongest',
        body: 'East wind events through the Gorge routinely reach speeds that lift inadequately fastened shingles. In Washougal this is not an occasional storm concern, it is a design consideration. Edge fastening, starter course, and ridge detail carry loads here that they never see a few miles west.',
      },
      {
        title: 'Wind-driven rain',
        body: 'Wind and rain arriving together push water horizontally, and horizontal water gets into places vertical water never reaches — under shingle edges, behind flashing, through vents built for gravity rather than pressure. Leaks in Washougal frequently appear during wind events and then stop, which makes them harder to trace and easier to misdiagnose.',
      },
      {
        title: 'Debris impact',
        body: 'Strong east winds carry branches and grit. Repeated small impacts wear granules off the windward slope faster than weathering alone would, so it is common to see one slope in noticeably worse condition than the rest of the roof.',
      },
    ],
    neighbourhoods: ['Washougal River Valley', 'Hathaway', 'Columbia Ridge', 'Steamboat Landing'],
    driveTime: 'about 25 minutes from our Vancouver shop',
    faqs: [
      {
        question: 'My roof only leaks when it is windy. Is that normal?',
        answer:
          'It is common in Washougal specifically, and it is diagnostic. Wind-driven rain moves horizontally and gets behind flashing and under shingle edges in ways ordinary rainfall never does. Leaks that appear during east wind events and then stop are frequently a flashing or edge-detail problem rather than a failure in the field of the roof.',
      },
      {
        question: 'Why does one side of my roof look so much worse than the other?',
        answer:
          'Almost certainly the windward slope. Strong east winds through the Gorge carry branches and grit, and repeated small impacts wear granules off that slope considerably faster than weathering alone would. It is normal in Washougal to replace a roof because one slope has aged out well ahead of the rest.',
      },
      {
        question: 'Do I need a different type of shingle out here?',
        answer:
          'More often it is the installation than the product. Most quality architectural shingles carry adequate wind ratings; what fails in Washougal is edge fastening, starter course, and ridge detail, which take loads here that they never see a few miles west. Ask any contractor specifically how they intend to detail the edges.',
      },
    ],
  },
];
