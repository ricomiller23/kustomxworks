/**
 * City data for all 9 KustomXworks service areas.
 * Each city page is generated from this file via app/handyman/[city]/page.tsx
 */

export interface CityData {
  slug: string;
  name: string;
  state: string;
  population: string;
  lat: number;
  lng: number;
  housingEra: string;
  segment: string;
  segmentLabel: string;
  intro: string;
  whyChooseUs: string;
  commonIssues: string;
  neighborhoods: string[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  nearbyLandmarks?: string;
}

export const CITIES: CityData[] = [
  {
    slug: "corona",
    name: "Corona",
    state: "CA",
    population: "160,000+",
    lat: 33.8753,
    lng: -117.5664,
    housingEra: "1970s–1990s + newer developments",
    segment: "Family homeowners, move-up buyers & pre-listing prep",
    segmentLabel: "Family Homeowners",
    intro:
      "Corona homeowners know the drill: stucco that cracks in the summer heat, plumbing that was state-of-the-art in 1985, and a honey-do list that never seems to end. Whether you're in South Corona, Eagle Glen, or the newer Dos Lagos corridor, KustomXworks has been the trusted name for fast, flat-rate handyman work across the 91719 and 92882 zip codes. We understand that Corona's booming real estate market means pre-listing repairs need to be done right — and fast — before your home hits the market.",
    whyChooseUs:
      "Corona families choose KustomXworks because we show up on time, price up front, and finish the job. No bait-and-switch, no back-and-forth. Our techs know the 1980s-era housing stock in Parkridge and Corona Hills inside-out — from the stucco texture-matching to the original Romex wiring quirks. Our team brings proven construction expertise, masonry mastery, and vetted craftsmanship, giving you peace of mind whether we're doing a concrete block wall, landscaping, or a full pre-sale fix list.",
    commonIssues:
      "Corona's hot, dry summers are brutal on exterior finishes. Stucco hairline cracks are the #1 call we get from South Corona and El Cerrito homeowners — UV exposure and temperature swings cause constant expansion and contraction. Interior issues in the 1970s–80s stock include original single-pane windows losing their seals, worn plumbing fixtures (especially in guest baths), and electrical panels that need GFCI upgrades in kitchens and bathrooms. Newer Eagle Glen and Dos Lagos homes are hitting the 15–20 year mark, meaning wood trim, deck railings, and door hardware are starting to show wear.",
    neighborhoods: [
      "South Corona",
      "Dos Lagos",
      "Eagle Glen",
      "Corona Hills",
      "El Cerrito",
      "Parkridge",
      "Green River",
      "Chase Ranch",
    ],
    faqs: [
      {
        question: "Do you serve all ZIP codes in Corona?",
        answer:
          "Yes — we serve all Corona ZIP codes including 91719, 91720, 92877, 92879, 92880, 92881, 92882, and 92883. From South Corona to Eagle Glen, we've got you covered.",
      },
      {
        question: "Can you help us get a home ready to sell?",
        answer:
          "Absolutely. Pre-listing repairs are one of our most popular Corona services. We'll knock out your punch list quickly — drywall patches, paint touch-ups, door hardware, caulking, and more — so your home shows at its best.",
      },
      {
        question: "My stucco has cracks. Is that urgent?",
        answer:
          "Hairline cracks are cosmetic in most cases, but wider cracks (1/4 inch+) should be addressed promptly to prevent water intrusion, especially near windows and at wall corners. We offer same-week stucco repair throughout Corona.",
      },
      {
        question: "Do you do electrical work?",
        answer:
          "We handle minor electrical tasks like GFCI outlet installation, ceiling fan replacement, and fixture swaps. For panel upgrades or full rewires, we refer you to a master electrician and can coordinate the referral.",
      },
    ],
    metaTitle:
      "Handyman, Concrete Block Walls & Landscaping in Corona, CA | KustomXworks",
    metaDescription:
      "Professional handyman services in Corona, CA. Stucco repair, drywall, plumbing, electrical updates, pre-listing prep & more. Construction expertise, concrete block walls, landscaping, same-week service. Call KustomXworks today.",
    h1: "Professional Handyman Services in Corona, CA",
  },
  {
    slug: "murrieta",
    name: "Murrieta",
    state: "CA",
    population: "115,000+",
    lat: 33.5539,
    lng: -117.2139,
    housingEra: "1990s–2020s planned communities",
    segment: "Busy families, warranty-expired repairs & HOA maintenance",
    segmentLabel: "Planned Community Families",
    intro:
      "Murrieta's beautifully planned communities — Greer Ranch, Spencer's Crossing, The Farm — were built to last, but every home hits a tipping point around year 5–10 when the builder warranty expires and minor issues start stacking up. That slow-closing cabinet door, the guest-bath caulk that finally gave up, the bedroom door that sticks in January — KustomXworks clears the entire list in a single visit. Murrieta families trust us because we're HOA-compliant, respect quiet hours, and leave your home cleaner than we found it.",
    whyChooseUs:
      "Murrieta homeowners are busy — dual incomes, kids in school, HOA meetings. The last thing you need is a contractor who shows up late or drags a one-day job into a week. KustomXworks offers appointment windows (not all-day waits), upfront flat-rate pricing, and a single-visit honey-do approach. We work in Greer Ranch, Spencer's Crossing, and all surrounding Murrieta communities, and we know the HOA rules cold.",
    commonIssues:
      "Homes in Murrieta's 1990s–2000s communities are hitting the sweet spot where builder-grade materials start to fail. Top calls: drywall dings and nail pops, door hardware that needs upgrading, bathroom caulk and grout replacement, ceiling fan swaps, fence board replacement, and TV mounting. The 2010s–2020s homes in newer tracts like Spencer's Crossing see more garage storage build-outs and smart-home device installs. HOA exterior compliance — matching paint, approved fence repairs, gutter cleaning — is a recurring need.",
    neighborhoods: [
      "Greer Ranch",
      "Spencer's Crossing",
      "The Farm",
      "Murrieta Hot Springs",
      "Bear Creek",
      "La Cresta",
      "Copper Canyon",
      "Vineyard Hills",
    ],
    faqs: [
      {
        question: "Will you follow our HOA's work rules?",
        answer:
          "Yes. We're experienced with Murrieta HOAs and will follow parking, noise, and working-hours rules. If your HOA requires vendor pre-approval paperwork, we can provide our comprehensive vendor compliance and scope documentation.",
      },
      {
        question: "Can you handle a whole honey-do list in one visit?",
        answer:
          "That's our specialty. Send us your list in advance and we'll schedule the right amount of time. Most Murrieta honey-do visits run 2–4 hours and cover 6–12 items.",
      },
      {
        question: "My builder warranty just expired. What should I check?",
        answer:
          "Great time for a walk-through. Common warranty-expiration issues: door and window alignment, caulk around tubs and exterior penetrations, cabinet hinges and drawer slides, and any drywall cracks from settling. We offer a multi-point inspection checklist on request.",
      },
    ],
    metaTitle:
      "Handyman Services in Murrieta, CA | KustomXworks — HOA Friendly",
    metaDescription:
      "KustomXworks handyman services in Murrieta, CA. Honey-do lists, warranty repairs, HOA compliance work in Greer Ranch, Spencer's Crossing & beyond. Book same-week.",
    h1: "Professional Handyman Services in Murrieta, CA",
  },
  {
    slug: "temecula",
    name: "Temecula",
    state: "CA",
    population: "115,000+",
    lat: 33.4936,
    lng: -117.1484,
    housingEra: "Newer tracts + wine-country vacation rentals",
    segment: "Families & short-term rental property maintenance",
    segmentLabel: "Families & STR Owners",
    intro:
      "Temecula wears two hats: thriving family community and premier wine-country destination. In Harveston, Wolf Creek, and Redhawk, busy families need a reliable handyman for the growing list of post-warranty repairs. On the vacation-rental side, Airbnb and VRBO hosts near Old Town and the wine country need someone who responds fast, documents every repair with photos, and keeps their Superhost ratings intact. KustomXworks serves both audiences — same reliability, same flat-rate transparency.",
    whyChooseUs:
      "Temecula homeowners and STR hosts choose KustomXworks for one reason: we handle it. Whether you're a family in Wolf Creek who needs the master bath re-caulked, or a remote STR owner in Redhawk who got a guest complaint about a wobbly towel bar at 6PM on a Friday, we pick up the phone and we show up. Our photo documentation means you always know exactly what was repaired and what it cost — no surprises.",
    commonIssues:
      "Temecula's wine-country climate — hot summers, cool evenings, and occasional frost — creates specific maintenance patterns. STR properties see high turnover wear: scuffed walls, caulk failures, loose hardware, and furniture that needs assembly between guest stays. Family homes in Harveston and Wolf Creek are hitting the 10–15 year mark with the same warranty-expiration issues as Murrieta — door hardware, drywall, deck maintenance, and exterior caulking. Vacation homes near Rancho California Road often need pre-season AC prep and gutter cleaning before the busy summer weekend rush.",
    neighborhoods: [
      "Harveston",
      "Wolf Creek",
      "Redhawk",
      "Paloma del Sol",
      "Crowne Hill",
      "Old Town Adjacent",
      "Rancho Highlands",
      "Morgan Hill",
    ],
    faqs: [
      {
        question: "I own a vacation rental in Temecula. Can you help with fast repairs?",
        answer:
          "Absolutely. We offer STR Priority Service for Temecula vacation rental owners — including same-day response for guest-impacting repairs and photo documentation sent directly to the owner after every job.",
      },
      {
        question: "Do you do pre-season property inspections?",
        answer:
          "Yes. Before peak Temecula wine-season weekends, we recommend a 30-point walk-through covering plumbing, doors, windows, outdoor furniture, and appliances. Book at least two weeks before your high-season date.",
      },
      {
        question: "My Airbnb had a bad review because of a maintenance issue. Can you help prevent that?",
        answer:
          "We can. Ask about our Vacation Rental Maintenance Plan — regular quarterly visits to catch issues before guests do, plus priority scheduling whenever you get a guest complaint.",
      },
    ],
    metaTitle:
      "Handyman Services in Temecula, CA | KustomXworks — STR & Family Home Repairs",
    metaDescription:
      "Expert handyman in Temecula, CA for families and vacation rental owners. Fast response, photo documentation, Harveston, Wolf Creek, Redhawk & more. Master craftsmanship & construction expertise.",
    h1: "Professional Handyman Services in Temecula, CA",
  },
  {
    slug: "perris",
    name: "Perris",
    state: "CA",
    population: "80,000+",
    lat: 33.7825,
    lng: -117.2286,
    housingEra: "Mixed older stock + newer builds, ~45% rental",
    segment: "Property managers, landlords & turnover specialists",
    segmentLabel: "Property Managers & Landlords",
    intro:
      "Perris is a landlord's market — nearly half the city's housing stock is rental, and property managers need a handyman partner who can move as fast as the tenant cycle does. KustomXworks is that partner. We offer flat-rate turnover pricing, 2-hour emergency response, photo-documented work orders, and Net-30 billing for verified property management accounts. From a single-family rental on Perris Boulevard to a multi-unit complex off Interstate 215, we close out your work orders without the runaround.",
    whyChooseUs:
      "Perris property managers work on margin — every day a unit sits vacant costs you money. KustomXworks understands that, which is why we prioritize turnover work and offer documented flat-rate pricing you can drop straight into your owner reports. We handle all trades in one call: drywall, paint, plumbing fixtures, door hardware, appliance installation, and more. First three calls get 20% off for new property management accounts.",
    commonIssues:
      "Rental turnovers in Perris follow a predictable pattern: scuffed and holed drywall, worn cabinet hardware, running toilets, sticky doors (especially during hot months when frames expand), and interior touch-up paint. Older stock from the 1970s–80s often has original plumbing fixtures and dated electrical outlets that need updating between tenants. Emergency calls are common — a tenant locks themselves out, a toilet won't stop running at 11PM, a gate latch breaks making a unit non-rentable. We're available 24/7 for emergencies.",
    neighborhoods: [
      "Perris Downtown",
      "Lake Perris Area",
      "Nuevo",
      "Good Hope",
      "Mead Valley",
      "Quailwood",
      "Patriot Park",
      "Heritage Lake",
    ],
    faqs: [
      {
        question: "Do you offer flat-rate pricing for turnover repairs?",
        answer:
          "Yes. We publish a turnover rate sheet with flat prices for the most common rental repair items — drywall patches, door hardware, outlet replacement, caulking, and more. Ask us for the menu.",
      },
      {
        question: "How fast can you respond for an emergency in Perris?",
        answer:
          "We target a 2-hour response window for property management emergency calls in Perris. For after-hours emergencies (pipe burst, broken entry door, etc.), call our 24/7 line.",
      },
      {
        question: "Do you provide photo documentation for owner reports?",
        answer:
          "Yes, always. Before-and-after photos come with every work order at no extra charge. We can email them directly to you and your property owner.",
      },
      {
        question: "Can you handle multiple units at once?",
        answer:
          "Absolutely. For multi-unit turnovers, contact us to schedule a block booking. Volume discounts are available for 3+ units in the same cycle.",
      },
    ],
    metaTitle:
      "Handyman Services in Perris, CA | KustomXworks — Property Management Specialists",
    metaDescription:
      "Fast, flat-rate handyman services for Perris, CA landlords and property managers. 2-hour emergency response, photo documentation, turnover pricing. Call KustomXworks.",
    h1: "Professional Handyman Services in Perris, CA",
  },
  {
    slug: "moreno-valley",
    name: "Moreno Valley",
    state: "CA",
    population: "210,000+",
    lat: 33.9425,
    lng: -117.2297,
    housingEra: "1980s–2000s, ~45% rental, near March ARB",
    segment: "Military families, PCS moves & property management",
    segmentLabel: "Military & Property Management",
    intro:
      "Moreno Valley is home to March Air Reserve Base, and with it comes a steady rotation of military families who need a handyman they can trust on short notice. PCS move-ins require quick safety and functionality repairs; PCS move-outs demand the kind of thorough, documented work that satisfies base housing inspections. For the civilian rental market — which makes up nearly half the city — property managers and landlords need the same speed and documentation. KustomXworks serves both communities with military precision: on time, on price, on record.",
    whyChooseUs:
      "Military families at March ARB know the PCS clock doesn't wait. KustomXworks offers a dedicated Military Move Package with 15% discount for active-duty and veterans, priority scheduling around PCS dates, and background-checked technicians — a must for on-base adjacent work. For Moreno Valley property managers, we offer the same flat-rate turnover system as Perris, with reliable communication and Net-30 billing for verified PM accounts.",
    commonIssues:
      "The 1980s–2000s housing stock in Moreno Valley sees typical mid-age wear: drywall damage from picture hooks and furniture moves, worn flooring at entries and high-traffic areas, bathroom caulk and grout failure, and door hardware that's hit the end of its useful life. Rental turnovers near March ARB tend to have accelerated wear — frequent moves mean more patch-and-paint cycles. The hot Inland Valley summers also mean exterior paint fading, UV-cracked caulk at windows, and AC-related moisture issues around units.",
    neighborhoods: [
      "March ARB Area",
      "Alessandro Heights",
      "Sunnymead Ranch",
      "Towngate",
      "Hidden Springs",
      "Val Verde",
      "Cottonwood",
      "Canyon Crest",
    ],
    faqs: [
      {
        question: "Do you offer a military discount in Moreno Valley?",
        answer:
          "Yes — 15% off for active-duty military, veterans, and their immediate families. Bring a military ID or CAC card at time of service.",
      },
      {
        question: "Can you help with a PCS move-in checklist?",
        answer:
          "Absolutely. Our PCS Move-In Package covers a safety walk-through, smoke and CO detector check, door and window hardware inspection, and up to 4 hours of repair work at a flat rate. Ideal for getting settled fast.",
      },
      {
        question: "Do you work near or on March ARB?",
        answer:
          "We work in all Moreno Valley neighborhoods adjacent to March ARB. For on-base work, please confirm base access requirements in advance. We can provide documentation for base visitor passes.",
      },
    ],
    metaTitle:
      "Handyman Services in Moreno Valley, CA | KustomXworks — Military & PM Specialists",
    metaDescription:
      "Trusted handyman in Moreno Valley, CA for military families, PCS moves, and property managers. 15% military discount, flat-rate pricing, near March ARB. Book today.",
    h1: "Professional Handyman Services in Moreno Valley, CA",
  },
  {
    slug: "norco",
    name: "Norco",
    state: "CA",
    population: "27,000+",
    lat: 33.9306,
    lng: -117.5514,
    housingEra: "Ranch and horse properties, higher-income rural",
    segment: "Rural & equestrian property owners, premium service",
    segmentLabel: "Ranch & Equestrian Properties",
    intro:
      "Norco is unlike anywhere else in the Inland Empire — a genuine horse-town culture with ranch properties, large lots, and the kind of rural pride that demands quality work done right the first time. KustomXworks serves Norco homeowners who expect a professional who shows up, respects the property, and handles the unique maintenance demands of acreage, stables, fencing, and large outbuildings. We're not a revolving-door contractor — we're your go-to trade partner for whatever the ranch needs.",
    whyChooseUs:
      "Norco clients want quality, not just speed. We understand the difference between a clean wood fence repair on a horse property and a sloppy patch job, and we do the former. Our techs are comfortable working around animals and large properties, and we respect the unique character of Norco's equestrian lifestyle. Flat-rate pricing with no rural surcharge.",
    commonIssues:
      "Norco's ranch properties face specific maintenance challenges. Fencing is the #1 call — wood and pipe rail fencing on horse properties takes a beating from weather, animals, and heavy use. Barn and stable repairs — doors, latches, lighting, flooring — come in a close second. Large properties mean more exterior exposure: wood decks and pergolas, UV damage to paint, and irrigation-related moisture issues near foundations. Inside the home, Norco's older housing stock often features dated kitchens and baths that owners are upgrading with premium fixtures and finishes.",
    neighborhoods: [
      "Hidden Valley",
      "Hamner Avenue Corridor",
      "Norco Hills",
      "El Cerrito Adjacent",
      "Crestridge",
      "Fourth Street Equestrian",
      "Pedley",
    ],
    faqs: [
      {
        question: "Do you work on horse properties and barns?",
        answer:
          "Yes. We're comfortable on large rural properties and handle barn doors, stable lighting, pipe-rail and wood fencing, and general outbuilding repairs. We're respectful of animals and property.",
      },
      {
        question: "Do you charge a rural surcharge for Norco?",
        answer:
          "No. Norco is within our standard service area with no surcharge. Flat-rate pricing applies.",
      },
      {
        question: "Can you help with a large deck or pergola repair?",
        answer:
          "Yes. We handle deck board replacement, railing repair, pergola re-staining, and structural fixes for outdoor structures on Norco properties.",
      },
    ],
    metaTitle:
      "Handyman Services in Norco, CA | KustomXworks — Ranch & Horse Property Specialists",
    metaDescription:
      "Expert handyman services for Norco, CA ranch and equestrian properties. Fencing, barn repairs, decks, interior upgrades. Concrete block walls, landscaping, equestrian repairs, no rural surcharge. Call KustomXworks.",
    h1: "Professional Handyman Services in Norco, CA",
  },
  {
    slug: "hemet",
    name: "Hemet",
    state: "CA",
    population: "90,000+",
    lat: 33.7475,
    lng: -116.9719,
    housingEra: "1960s–1980s, retirement communities",
    segment: "Seniors & aging-in-place modifications (highest priority)",
    segmentLabel: "Seniors & Aging-in-Place",
    intro:
      "Hemet is one of the Inland Empire's premier retirement destinations — Sun City Hemet, Seven Hills, and Valle Vista are home to thousands of seniors who want to stay independent in the homes they love. KustomXworks approaches every Hemet job with the patience, communication, and genuine care that aging-in-place modifications require. We're not here to rush through a grab bar install — we're here to help you live safely and comfortably in your home for years to come. Our technicians are trained in aging-in-place best practices and speak plainly about what makes a home safer.",
    whyChooseUs:
      "Hemet seniors choose KustomXworks because we listen first and work second. We explain every modification in plain language, we price up front, and we never upsell services you don't need. Our aging-in-place specialization means we know which grab bar placement actually prevents falls, where the real slip hazards are in a shower, and how to install a ramp that meets code and looks good. We offer a free in-home safety assessment — no obligation.",
    commonIssues:
      "Hemet's 1960s–80s housing stock presents both safety and maintenance challenges for aging residents. Safety: bathroom falls are the leading cause of injury for seniors, and most older Hemet homes have slick tub-over-shower combos with no grab bars, rounded toilet seat heights, and round doorknobs that are hard to grip with arthritis. Maintenance: 40–60 year old homes have original plumbing fixtures, dated HVAC, and wood-framed windows that have gone out of true. Exterior maintenance — walkways, porch steps, railings — is critical for fall prevention.",
    neighborhoods: [
      "Sun City Hemet",
      "Seven Hills",
      "Valle Vista",
      "Hemet East",
      "Soboba Springs",
      "Diamond Valley",
      "West Hemet",
      "Harvest Hills",
    ],
    faqs: [
      {
        question: "What is an aging-in-place modification?",
        answer:
          "Aging-in-place modifications make a home safer and more comfortable for seniors — grab bars in bathrooms, handrails on all steps, lever-style door handles instead of round knobs, non-slip flooring, and raised toilet seats. We offer a free safety walk-through to identify what your home needs.",
      },
      {
        question: "Will grab bars ruin my tile?",
        answer:
          "Not when installed correctly. We use proper toggle-bolt anchors for hollow walls and locate wall studs for grab bars that will hold 250+ lbs. We can also install blocking (solid backing) for future bars without disturbing tile.",
      },
      {
        question: "Do you offer the senior discount in Hemet?",
        answer:
          "Yes — 10% off all services for customers 65+. We're proud to serve Hemet's senior community.",
      },
      {
        question: "How do I request the free home safety assessment?",
        answer:
          "Just call or book online and mention the free safety assessment. We'll schedule a 30-minute walk-through with no obligation. Most clients find 3–5 quick improvements that significantly reduce fall risk.",
      },
    ],
    metaTitle:
      "Handyman Services in Hemet, CA | KustomXworks — Aging-in-Place Specialists",
    metaDescription:
      "Aging-in-place handyman services in Hemet, CA. Grab bars, handrails, ramps, non-slip modifications for Sun City, Seven Hills & Valle Vista seniors. Master craftsmanship & construction expertise. Book today.",
    h1: "Professional Handyman Services in Hemet, CA",
  },
  {
    slug: "beaumont",
    name: "Beaumont",
    state: "CA",
    population: "50,000+",
    lat: 33.9294,
    lng: -116.9775,
    housingEra: "2000s–2020s, one of CA's fastest growing cities",
    segment: "New-construction warranty work & first-time buyers",
    segmentLabel: "New Homeowners & Builder Upgrades",
    intro:
      "Beaumont has been one of California's fastest-growing cities for two decades, and its housing stock shows it: row after row of 2000s–2020s homes that were built quickly to meet demand. First-time buyers and growing families make up the bulk of Beaumont homeowners, and KustomXworks is their go-to resource when the builder's warranty expires and the upgrade wish list starts. Builder-grade finishes look fine on day one — but after a few years of real life, Beaumont homeowners are ready for better hardware, smarter storage, and the repairs that weren't covered under warranty.",
    whyChooseUs:
      "Beaumont homeowners come to KustomXworks when they're ready to make the builder-grade house feel like their own. We handle everything from upgrading hollow-core interior doors to solid-core, to installing custom shelving in the garage, to fixing the drywall nail pops that appear like clockwork at year 3. We're patient with first-time homeowners who have questions, and we explain everything in plain language.",
    commonIssues:
      "Beaumont's fast-built housing stock has characteristic issues: drywall nail pops and settlement cracks at year 2–5, builder-grade door handles and cabinet hardware that wears quickly, bathroom caulk that shrinks and separates within a few years, and garage floors that weren't sealed. As homes age into the 10–15 year range, exterior caulking around windows fails, deck boards check and splinter, and original plumbing fixtures become due for replacement. First-time buyers often discover deferred maintenance from the prior owner during their first year.",
    neighborhoods: [
      "Tournament Hills",
      "Sundance",
      "Fairway Canyon",
      "Noble Creek",
      "Sapphire",
      "Olivewood",
      "Oak Valley",
      "Solera",
    ],
    faqs: [
      {
        question: "My builder's warranty just expired. Now what?",
        answer:
          "Welcome to the club! Most Beaumont homeowners find 8–12 items on their post-warranty punch list. We offer a walk-through and written quote within 48 hours so you can prioritize.",
      },
      {
        question: "Can you upgrade our builder-grade fixtures?",
        answer:
          "Absolutely. We install customer-supplied or sourced fixtures — light fixtures, faucets, cabinet hardware, door handles, and more. Upgrades are one of our most popular services in Beaumont.",
      },
      {
        question: "Do you help with first-time homeowner projects?",
        answer:
          "Yes, and we enjoy it. We'll explain what's cosmetic vs. what needs attention, so you can prioritize your budget. No question is too basic.",
      },
    ],
    metaTitle:
      "Handyman Services in Beaumont, CA | KustomXworks — New Home Upgrades & Repairs",
    metaDescription:
      "Expert handyman in Beaumont, CA for new homeowners and builder-grade upgrades. Warranty repairs, fixture upgrades, drywall, and more. Fast, friendly, expert craftsmanship. Call today.",
    h1: "Professional Handyman Services in Beaumont, CA",
  },
  {
    slug: "palm-springs",
    name: "Palm Springs",
    state: "CA",
    population: "48,000+",
    lat: 33.8303,
    lng: -116.5453,
    housingEra: "Mid-century modern 1950s–70s + vacation rentals",
    segment: "STR rapid-response, aging-in-place & MCM preservation",
    segmentLabel: "STR Hosts, Retirees & MCM Owners",
    intro:
      "Palm Springs is a one-of-a-kind market: stunning mid-century modern homes, a booming short-term rental scene, and a large retiree population that wants expert care for properties that are architectural treasures. KustomXworks serves all three segments — the Airbnb host who needs a same-day pool gate fix before a weekend booking, the retiree in the Movie Colony who needs aging-in-place modifications done with respect for the original architecture, and the MCM enthusiast who wants repairs done in a way that preserves the home's character.",
    whyChooseUs:
      "Palm Springs clients demand quality and speed. We deliver both. For STR hosts, we offer same-day response and photo documentation — so your Superhost status stays intact. For retirees, we bring patience, expertise in aging-in-place modifications, and sensitivity to original mid-century finishes. For MCM owners, we understand that a 1960 Wexler home deserves better than the wrong caulk color or a cheap replacement fixture — and we source materials that match the era.",
    commonIssues:
      "Palm Springs' extreme heat (110°F+ summers) creates distinctive maintenance patterns. Exterior caulk around windows and rooflines degrades rapidly in UV and heat — annual re-caulking is a real need. Screen doors and sliding glass doors (signature of MCM design) suffer from track wear and frame warping. Pool equipment areas see hardware corrosion from chemical exposure. Vacation rentals experience heavy turnover wear on flooring, walls, and door hardware. Retirees in the Canyon Estates and Deepwell neighborhoods typically need aging-in-place modifications — grab bars, ramps, lever hardware — handled with care for original finishes.",
    neighborhoods: [
      "Movie Colony",
      "Old Las Palmas",
      "Deepwell",
      "Canyon Estates",
      "Vista Las Palmas",
      "The Mesa",
      "Sunrise Park",
      "Racquet Club Road Estates",
    ],
    faqs: [
      {
        question: "I have an STR in Palm Springs and need same-day service. Can you help?",
        answer:
          "Yes. We offer STR Priority Service for Palm Springs vacation rental owners. Call our priority line for guest-impacting repairs and we'll dispatch within hours. Photo documentation is included with every visit.",
      },
      {
        question: "Can you preserve original mid-century finishes when doing repairs?",
        answer:
          "We do our best. We source period-appropriate caulks (matching in color and texture), avoid over-painting original concrete block, and flag any repairs that might compromise architectural character before we proceed.",
      },
      {
        question: "My Palm Springs home gets very hot — what maintenance does that cause?",
        answer:
          "Heat is the #1 driver of maintenance in Palm Springs. We recommend: annual exterior caulk inspection and re-caulking at windows and penetrations, checking screen door tracks for warping, and inspecting AC mounts and drain lines before summer.",
      },
      {
        question: "Do you serve the Coachella Valley beyond Palm Springs?",
        answer:
          "Palm Springs is our Coachella Valley base. We also serve Palm Desert, Cathedral City, and Rancho Mirage — contact us for availability.",
      },
    ],
    metaTitle:
      "Handyman Services in Palm Springs, CA | KustomXworks — STR, MCM & Aging-in-Place",
    metaDescription:
      "Expert handyman in Palm Springs, CA. Same-day STR repairs, mid-century modern preservation, aging-in-place modifications. Master craftsmanship & construction expertise. Book today.",
    h1: "Professional Handyman Services in Palm Springs, CA",
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug);
}
