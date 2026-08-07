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
  /**
   * Christmas light installation content for /christmas-lights/[city].
   *
   * Held on the same record as the roofing content because the geography is the
   * same geography — but the content is deliberately not shared. What a Gorge
   * wind event does to a ridge cap and what it does to a light strand are
   * different problems with different answers, and a lights page that recycled
   * the roofing copy would be the doorway pattern this file exists to avoid.
   *
   * Same rule as above: no claims about work completed locally, no invented
   * pricing beyond the rate card in src/data/pricing.ts, and no assertions about
   * specific HOA rules, which vary by development and are not ours to state.
   */
  holiday: {
    angle: string;
    intro: string;
    /** Locally specific installation considerations. The reason this page exists. */
    considerations: { title: string; body: string }[];
    faqs: { question: string; answer: string }[];
  };
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
    holiday: {
      angle:
        'Hillside lots and intricate rooflines make Camas the most detail-heavy lighting work in Clark County — and the most striking when it is done properly.',
      intro:
        "Camas homes are, on average, harder to light than anywhere else we work — and they look better for it. The hillside lots above Lacamas Lake and along Prune Hill produce rooflines with more peaks, dormers and changes of direction than a typical Clark County house, and every one of those transitions is somewhere a light line either follows the architecture or fights it.",
      considerations: [
        {
          title: 'Complex rooflines cost more, and are worth more',
          body: 'Holiday lighting is priced by linear feet and by transitions, not by square footage. A Prune Hill home with multiple gables and dormers carries more of both than a simple rectangle of the same size, so expect a Camas quote to sit higher in the range than an equivalent-sized house in a flatter part of the county. The payoff is that intricate rooflines are the ones that actually look spectacular lit.',
        },
        {
          title: 'Mature conifers change the whole plan',
          body: 'Camas keeps more of its original canopy than most of Clark County, which puts serious established trees on a lot of lots. Wrapping a mature trunk is slower per foot than running a roofline and is priced separately, but a single well-lit conifer often does more for a Camas property than another twenty feet of eave would. The same canopy means needle drop into gutters where cords and clips sit, which is worth clearing before install day.',
        },
        {
          title: 'Access on hillside lots',
          body: 'Steep driveways and tiered lots make ladder positioning slower here than on flat ground, and that time is real. It is also why we would rather quote from photos that show the approach to the house, not just the elevation — the front of a Prune Hill home tells us very little about how we will actually reach the roofline.',
        },
      ],
      faqs: [
        {
          question: 'Why is a quote for my Camas house higher than my friend&rsquo;s in Vancouver?',
          answer:
            'Almost always roofline complexity rather than size. Lighting is priced by linear feet and by the number of transitions — peaks, dormers, valleys, changes of direction — and Camas hillside homes carry far more of those than a comparable house on flatter ground. Two homes of identical square footage can differ substantially for exactly this reason.',
        },
        {
          question: 'Can you wrap the big firs on my lot?',
          answer:
            'Yes, and in Camas it is often the better investment. Wrapping is slower per foot than roofline work and is quoted separately, but a mature conifer lit properly carries a property visually in a way that additional eave line does not. Tell us the rough height and we can price it from photos.',
        },
        {
          question: 'My driveway is steep and narrow. Is that a problem?',
          answer:
            'Not a problem, but it does affect the quote, so it is better if we know upfront. Hillside access slows ladder setup and equipment movement. When you send photos, include one showing the approach to the house rather than only the front elevation.',
        },
      ],
    },
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
    holiday: {
      angle:
        'Long, clean rooflines on open lots — the best value per foot of Christmas lighting anywhere in Clark County.',
      intro:
        'If you want the most display for the money in Clark County, Battle Ground is where the geometry works in your favour. Much of the town was built out through the late 1990s and 2000s on generous, open parcels, and that housing stock tends toward long uninterrupted rooflines rather than the intricate multi-gable shapes further east. Straight runs are the most cost-effective lighting there is.',
      considerations: [
        {
          title: 'Simple rooflines stretch the budget further',
          body: 'Lighting is priced by linear feet and by transitions. Battle Ground homes from the 1990s and 2000s build-out typically have fewer peaks, dormers and direction changes than an equivalent house in Camas or on a Vancouver hillside, which means more lit roofline for the same money. A budget that produces a modest display on a complicated house can produce a genuinely impressive one here.',
        },
        {
          title: 'Open lots mean wind, and wind means fastening',
          body: 'The same exposure that makes Battle Ground roofs weather harder applies to anything attached to them. Larger, flatter parcels offer less shelter from neighbouring structures and less tree cover to break winter storms. Clip choice and spacing matter more on an exposed Battle Ground eave than on a sheltered street in town — which is an argument for proper clips over anything improvised, not for fewer lights.',
        },
        {
          title: 'Big lots open up more than the house',
          body: 'Larger parcels bring fence lines, driveway approaches, outbuildings and specimen trees into play in a way that a compact city lot does not. They also bring distance: the further a run sits from the house, the more thought outdoor power and timer placement needs. Both are worth raising when we quote rather than discovering on install day.',
        },
      ],
      faqs: [
        {
          question: 'Will my lights hold up out here when it blows?',
          answer:
            'They should, provided they are attached properly. Battle Ground sits on more open ground with less shelter than in-town Vancouver, so exposure is genuinely higher. The answer is clip selection and spacing appropriate to that exposure — not fewer lights. It is also the reason nothing should ever be stapled or nailed on: fasteners driven into a roof fail and take the roof with them.',
        },
        {
          question: 'I have a long driveway and a few big trees away from the house. Can those be lit?',
          answer:
            'Yes, and Battle Ground lots are where that starts to be worth doing. The consideration is power and timing rather than the lighting itself — runs a long way from the house need outdoor-rated power routed sensibly. Mention it when you send photos and we will factor it into the quote rather than treating it as an extra later.',
        },
        {
          question: 'Do I get more for my money here than closer in?',
          answer:
            'Generally, yes. Much of Battle Ground was built with longer, simpler rooflines, and straight uninterrupted runs are the most cost-effective lighting per foot. The same budget covers noticeably more roofline here than on a house with numerous peaks and dormers.',
        },
      ],
    },
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
    holiday: {
      angle:
        'New subdivisions where whole streets light up together, and older homes near the centre that light up nothing like them.',
      intro:
        'Ridgefield has grown faster than almost anywhere in Washington, and its holiday lighting reflects that split as clearly as its roofs do. The newer developments produce streets of similar homes on similar lots, where displays tend to appear in clusters once one or two go up. The older housing near the historic centre and out toward the refuge is a completely different proposition, and it is often the more interesting one to light.',
      considerations: [
        {
          title: 'New-build streets light up together',
          body: 'Recent Ridgefield developments have unusually consistent rooflines within a given street — similar pitches, similar eave heights, similar frontage. That makes quoting fast and accurate from photos, and it means neighbours frequently book in the same week once a display goes up. If several houses on your street are interested, say so; scheduling adjacent homes on the same day is genuinely more efficient and we would rather pass that on than not.',
        },
        {
          title: 'Check your HOA before you plan',
          body: 'Many of the newer Ridgefield developments have covenants covering exterior decoration, and they vary from one to the next — some address timing, some address what can be attached where. We cannot tell you what yours says and would not guess. It is worth a five-minute read before design rather than a conversation in December, and once you know the constraints we will work inside them.',
        },
        {
          title: 'Damp lowland air near the refuge',
          body: 'Properties toward the wildlife refuge and the Columbia lowlands sit in persistently humid air through the lighting season. That matters most at connection points — where strands join, where cords meet timers, where anything plugs into anything. Outdoor-rated connections and sensible placement are not optional here, and it is a common failure point in displays put up in a hurry.',
        },
      ],
      faqs: [
        {
          question: 'Several neighbours want lights too. Is there any benefit to booking together?',
          answer:
            'Yes. Adjacent homes scheduled on the same day cut our travel and setup time substantially, and on Ridgefield&rsquo;s newer streets the rooflines are often similar enough that the design work carries across. Mention it when you get in touch and we will quote it as a group rather than as unrelated jobs.',
        },
        {
          question: 'Does my HOA restrict what I can put up?',
          answer:
            'Possibly, and it genuinely varies between Ridgefield developments — we would not guess at yours. Have a look at your covenants before we design anything, particularly for rules on timing and on what may be attached to the exterior. Tell us the constraints and we will work inside them; nothing we install requires holes or permanent fixings in any case.',
        },
        {
          question: 'My place near the old town centre is nothing like the new builds. Does that matter?',
          answer:
            'It matters, and usually in your favour. Older Ridgefield homes tend to have more architectural character to work with — porches, gables, and detail that reward outlining in a way a uniform new build does not. It is less predictable to quote from a floor plan, which is exactly why we price from photographs of the actual house.',
        },
      ],
    },
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
    holiday: {
      angle:
        'Gorge wind decides whether a Washougal display is still up at Christmas. Everything else is secondary.',
      intro:
        'Washougal sits further into the Columbia River Gorge than anywhere else we work, and for holiday lighting that single fact outweighs every other consideration. East wind events arrive here at speeds the rest of Clark County simply does not see. A display that would sit undisturbed all season in Vancouver can be torn off a Washougal eave in one November night, and it almost always goes at the same places.',
      considerations: [
        {
          title: 'This is a fastening problem, not a lighting problem',
          body: 'The lights themselves are rarely what fails in Washougal. What fails is the attachment, and it fails at the ends of runs, at corners, and anywhere spacing was stretched to save time. Clip spacing that is perfectly adequate a few miles west is not adequate here. If someone quotes Washougal at the same labour as a sheltered Vancouver street, they have either not thought about it or are planning to find out the hard way.',
        },
        {
          title: 'Wind-driven rain gets into connections',
          body: 'Wind and rain arriving together push water horizontally, into places vertical rain never reaches. For a lighting display that means connection points — strand junctions, cord ends, timer housings. Anything that would stay dry in ordinary rainfall can be soaked here. Connections need to be outdoor-rated and positioned deliberately rather than left wherever they landed.',
        },
        {
          title: 'Never, ever staples or nails',
          body: 'This matters everywhere and it matters most here. A fastener driven through a shingle or behind flashing creates an opening, and in Washougal that opening then spends the winter with horizontal wind-driven rain being forced into it. We repair those roofs the rest of the year. A display that is quicker to hang because it was nailed on is the most expensive lighting decision available in this town.',
        },
      ],
      faqs: [
        {
          question: 'Will a display actually survive the east wind out here?',
          answer:
            'Yes, if it is attached for the conditions. The failure mode in Washougal is almost never the lights and almost always the fastening — ends of runs, corners, and anywhere clip spacing was stretched. Installed with spacing appropriate to Gorge exposure, a display holds. Installed to a generic standard, it does not, and it usually goes on the first serious east wind night in November.',
        },
        {
          question: 'Should I expect to pay more here than in Vancouver?',
          answer:
            'For an equivalent roofline, somewhat, and for a defensible reason: Washougal exposure needs tighter clip spacing and more attention to the ends of runs, which is more labour and more material. Anyone quoting Washougal identically to a sheltered street in town has not accounted for where it sits in the Gorge.',
        },
        {
          question: 'Half my strand went out after a storm. Is that the lights or the install?',
          answer:
            'In Washougal it is worth checking the connections first. Wind-driven rain moves horizontally and gets into strand junctions and cord ends that would stay perfectly dry elsewhere in the county. That is one of the things our service warranty exists for — if something stops working mid-season, call us and we come back out rather than leaving you on a ladder in December.',
        },
      ],
    },
  },
];
