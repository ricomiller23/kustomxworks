import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { LeadForm } from "@/components/LeadForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TrustStrip } from "@/components/TrustStrip";
import { CTABand } from "@/components/CTABand";
import {
  CheckCircle2Icon,
  PhoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchIcon,
  DropletIcon,
  SunMediumIcon,
  LayersIcon,
  HammerIcon,
  MapPinIcon,
  ArrowRightIcon
} from "lucide-react";

export const metadata: Metadata = {
  title: "Swimming Pool Remodeling & Decking | KustomXworks — Inland Empire & Coachella Valley",
  description:
    "Expert inground pool remodeling, replastering, waterline tile, safety bullnose coping, concrete deck resurfacing, and custom retaining walls in Riverside County, Hemet, Corona, Palm Springs & surrounding cities.",
  alternates: { canonical: `${BUSINESS.website}/services/pool-remodel` },
};

const poolServices = [
  {
    icon: "🏊‍♂️",
    name: "Complete Pool Replastering & Pebble Finishes",
    desc: "Premium white marcite plaster, diamond quartz aggregate, and pebble finishes engineered for durability against California sun and mineral-rich water.",
  },
  {
    icon: "🧱",
    name: "Waterline Tile & Safety Bullnose Coping",
    desc: "Modern porcelain, glass, and stone waterline tile with precision-set bullnose or cantilever coping designed for swimmer comfort and edge protection.",
  },
  {
    icon: "☀️",
    name: "Concrete Deck Resurfacing & Paver Expansion",
    desc: "Transform cracked, hot concrete decks with cool-deck coatings, stamped decorative concrete, or interlocked travertine and brick pavers.",
  },
  {
    icon: "🛡️",
    name: "Curved Block Retaining Walls & Planters",
    desc: "Heavy-duty structural CMU block retaining walls with smooth Santa Barbara stucco finishes to manage grade slopes, privacy, and lush planter integration.",
  },
  {
    icon: "🍹",
    name: "Poolside Living & Outdoor Kitchens",
    desc: "Custom BBQ islands, outdoor wet bars, seating benches, fire features, and aluminum or cedar patio shade structures.",
  },
  {
    icon: "⚡",
    name: "Pool Equipment Upgrades & Plumbing Repairs",
    desc: "Energy-efficient variable speed pumps, LED color-changing pool lights, skimmer replacements, automation valves, and leak repair.",
  },
];

const faqs = [
  {
    question: "How long does a full swimming pool remodel typically take?",
    answer:
      "A standard pool replastering and waterline tile update takes roughly 7 to 10 working days from drainage to refill. Full backyard overhauls involving concrete deck resurfacing, retaining walls, and custom landscaping usually take 2 to 3 weeks.",
  },
  {
    question: "Can you fix cracked or sunken concrete around my pool deck?",
    answer:
      "Yes. We specialize in structural masonry and concrete repair. Depending on the condition, we either saw-cut and repour damaged sections, apply reinforced decorative concrete overlays (cool-deck), or install interlocking pavers for a permanent luxury upgrade.",
  },
  {
    question: "What is the difference between standard plaster and quartz/pebble finishes?",
    answer:
      "Traditional white plaster lasts 7–10 years and offers a classic smooth feel. Quartz aggregates and pebble finishes last 15–20+ years, resist chemical staining significantly better, and create deep, vibrant Caribbean blue water colors.",
  },
  {
    question: "Do you handle the surrounding landscaping and retaining walls as well?",
    answer:
      "Absolutely. Unlike single-trade pool plasterers, KustomXworks is a master masonry, construction, and landscaping contractor. We handle the entire outdoor envelope: structural block retaining walls, smooth stucco, paver walkways, planter boxes, and drought-tolerant landscaping.",
  },
  {
    question: "Do you provide free on-site consultations and written estimates?",
    answer:
      "Yes. We visit your property, evaluate your pool and yard grading, discuss finish options, and deliver a detailed, transparent quote within 24 hours.",
  },
];

export default function PoolRemodelPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Swimming Pool Remodeling & Decking",
    provider: { "@type": "HomeAndConstructionBusiness", name: BUSINESS.name },
    description:
      "Professional inground pool replastering, waterline tile, coping, concrete deck resurfacing, and custom masonry retaining walls.",
    areaServed: ["Inland Empire, CA", "Coachella Valley, CA", "Riverside County, CA"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO BANNER ── */}
      <section
        className="relative bg-espresso text-white py-16 md:py-24 overflow-hidden"
        style={{ backgroundColor: "#2A211A" }}
      >
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C1502E_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rust/20 border border-rust/40 text-orange-200 text-xs font-bold uppercase tracking-wider mb-4">
              <SparklesIcon size={14} className="text-rust" />
              <span>Master Construction &amp; Masonry Division</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Swimming Pool Remodeling, Resurfacing &amp; Outdoor Living
            </h1>

            <p className="text-lg sm:text-xl text-[#D8C4A8] leading-relaxed mb-8">
              Transform your weathered, cracked, or dated swimming pool into a pristine resort oasis. From replastering and modern waterline tile to expanded concrete decks, curved retaining walls, and custom landscaping.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                href="/book?service=Pool%20Remodel"
                className="btn-rust text-base py-3 px-7 shadow-lg hover:shadow-xl transition-all"
              >
                Schedule Free Pool Estimate →
              </Link>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="btn-outline border-white/40 text-white hover:bg-white/10 text-base py-3 px-6 flex items-center gap-2"
              >
                <PhoneIcon size={18} />
                Call {BUSINESS.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-xs sm:text-sm font-semibold text-[#D8C4A8]">
              <span className="flex items-center gap-2">
                <CheckCircle2Icon size={16} className="text-rust" /> Same-Week On-Site Estimates
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2Icon size={16} className="text-rust" /> Inground Replastering &amp; Pebble
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2Icon size={16} className="text-rust" /> Structural Masonry &amp; Decking
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <TrustStrip />

      {/* ── BEFORE & AFTER TRANSFORMATION SHOWCASE ── */}
      <section className="section bg-cream" aria-labelledby="pool-showcase-heading">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-rust font-bold text-xs uppercase tracking-widest bg-rust/10 px-3.5 py-1 rounded-full inline-block mb-3">
              Real Local Transformations
            </span>
            <h2
              id="pool-showcase-heading"
              className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-espresso mb-4"
            >
              Backyard Pool &amp; Landscape Remodel Showcase
            </h2>
            <p className="text-[#6B5E52] text-base sm:text-lg">
              See the direct results of our master craftsmanship — from full inground pool plastering and concrete deck restoration to drought-tolerant landscaping and custom planter boxes.
            </p>
          </div>

          {/* TRANSFORMATION 1: INGROUND POOL & BACKYARD OVERHAUL */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#D8C4A8]/40 shadow-xl mb-16">
            <div className="p-6 sm:p-8 border-b border-tan/30 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-rust bg-rust/10 px-2.5 py-0.5 rounded-full">
                    Completed Project
                  </span>
                  <span className="text-xs font-bold text-[#6B5E52] flex items-center gap-1">
                    <MapPinIcon size={13} className="text-rust" /> Riverside County / Moreno Valley, CA
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-espresso">
                  Complete Inground Pool, Retaining Wall &amp; Deck Remodel
                </h3>
              </div>
              <Link
                href="/book?service=Pool%20Remodel&notes=Interested%20in%20Pool%20Remodel%20and%20Retaining%20Wall"
                className="btn-rust text-xs sm:text-sm py-2 px-4"
              >
                Request Quote For This Build →
              </Link>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-[#1a1410] p-1">
              <div className="relative group overflow-hidden aspect-[4/3]">
                <img
                  src="/projects/pool-remodel-after-sparkling-deck-stucco.jpg"
                  alt="Completed inground pool remodel with crystal clear turquoise water, concrete deck, diving board, and modern dark exterior stucco"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-md border border-white/20">
                  Resurfaced Deck &amp; Pool Finish
                </div>
              </div>

              <div className="relative group overflow-hidden aspect-[4/3]">
                <img
                  src="/projects/pool-remodel-after-retaining-wall-outdoor-living.jpg"
                  alt="Custom curved stucco retaining wall with bullnose coping, concrete patio, and outdoor kitchen bar station"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-md border border-white/20">
                  Custom Curved Retaining Wall &amp; Stucco
                </div>
              </div>

              <div className="relative group overflow-hidden aspect-[4/3]">
                <img
                  src="/projects/pool-remodel-after-luxury-swimming-pool.jpg"
                  alt="Sparkling swimming pool view with clean blue water, new coping, pool ladder, and poolside patio furniture"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-md border border-white/20">
                  Sparkling Clean Pool &amp; Waterline Tile
                </div>
              </div>
            </div>

            {/* Project Details breakdown */}
            <div className="p-6 sm:p-8 bg-white grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-heading font-bold text-base text-espresso mb-2 flex items-center gap-2">
                  <DropletIcon size={18} className="text-rust" /> Pool Resurfacing &amp; Tile
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5E52] leading-relaxed">
                  Full acid wash, structural crack stabilization, high-end Caribbean blue plaster finish, and new frost-proof waterline tile with cantilever bullnose coping.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-base text-espresso mb-2 flex items-center gap-2">
                  <LayersIcon size={18} className="text-rust" /> Concrete Deck &amp; Patios
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5E52] leading-relaxed">
                  Engineered concrete expansion, crack remediation, slip-resistant finish, and perimeter grading to ensure proper drainage away from the house foundation.
                </p>
              </div>

              <div>
                <h4 className="font-heading font-bold text-base text-espresso mb-2 flex items-center gap-2">
                  <HammerIcon size={18} className="text-rust" /> Curved Stucco Retaining Wall
                </h4>
                <p className="text-xs sm:text-sm text-[#6B5E52] leading-relaxed">
                  Precision-built curved structural CMU retaining wall with bullnose brick cap, smooth charcoal Santa Barbara stucco, integrated raised planting bed, and outdoor dining terrace.
                </p>
              </div>
            </div>
          </div>

          {/* TRANSFORMATION 2: BEFORE & AFTER LANDSCAPING REMODEL */}
          <div className="bg-white rounded-3xl overflow-hidden border border-[#D8C4A8]/40 shadow-xl">
            <div className="p-6 sm:p-8 border-b border-tan/30 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-rust bg-rust/10 px-2.5 py-0.5 rounded-full">
                    Before &amp; After Transformation
                  </span>
                  <span className="text-xs font-bold text-[#6B5E52] flex items-center gap-1">
                    <MapPinIcon size={13} className="text-rust" /> Inland Empire, CA
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-espresso">
                  Front Yard Dirt Lot to Modern Garden &amp; Paver Walkway
                </h3>
              </div>
              <Link
                href="/book?service=Landscaping%20%26%20Hardscaping&notes=Interested%20in%20Landscaping%20Remodel"
                className="btn-rust text-xs sm:text-sm py-2 px-4"
              >
                Book Landscape Remodel →
              </Link>
            </div>

            {/* Side by Side Before & After */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 sm:p-6 bg-[#FAF6F0]">
              {/* BEFORE */}
              <div className="bg-white rounded-2xl overflow-hidden border-2 border-red-200 shadow-sm flex flex-col">
                <div className="relative aspect-[4/3] bg-black/90 overflow-hidden">
                  <img
                    src="/projects/landscape-remodel-before-dirt-yard.jpg"
                    alt="Before landscaping remodel showing dry untamed dirt yard and unfinished ground"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    BEFORE
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-lg text-espresso mb-1">
                      Untamed Bare Dirt Yard
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6B5E52] leading-relaxed">
                      Dry, dusty dirt yard with zero curb appeal, uneven soil grading, weed vulnerability, and unusable outdoor space.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-tan/30 text-[11px] text-red-700 font-semibold">
                    ✕ High maintenance · Soil erosion · Poor drainage
                  </div>
                </div>
              </div>

              {/* AFTER */}
              <div className="bg-white rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-md flex flex-col">
                <div className="relative aspect-[4/3] bg-black/90 overflow-hidden">
                  <img
                    src="/projects/landscape-remodel-after-garden-pavers.jpg"
                    alt="After landscaping remodel showing custom timber garden planter, tiered herb tower, gravel border, and concrete paver walkway"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    AFTER
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-lg text-espresso mb-1">
                      Raised Garden Bed, Paver Walkway &amp; Stone Mulch
                    </h4>
                    <p className="text-xs sm:text-sm text-[#6B5E52] leading-relaxed">
                      Excavated and graded, custom dark green cedar raised planter bed, vertical herb garden tower, clean decorative gravel mulch, and interlocking patio pavers.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-tan/30 text-[11px] text-emerald-700 font-semibold flex items-center gap-1.5">
                    <CheckCircle2Icon size={14} className="text-emerald-600" />
                    <span>✓ Low water drought-scape · Clean modern aesthetics · Functional herb garden</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR POOL REMODELING SPECIALTIES ── */}
      <section className="section bg-white" aria-labelledby="services-detail-heading">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-rust font-bold text-xs uppercase tracking-widest bg-rust/10 px-3.5 py-1 rounded-full inline-block mb-3">
              Comprehensive Capabilities
            </span>
            <h2
              id="services-detail-heading"
              className="font-heading font-black text-3xl sm:text-4xl text-espresso mb-4"
            >
              Full-Spectrum Swimming Pool Remodel Services
            </h2>
            <p className="text-[#6B5E52] text-base">
              One master construction contractor handles every phase from structural crack repair to luxury pool finishes and surrounding outdoor living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {poolServices.map((svc) => (
              <div
                key={svc.name}
                className="card p-6 flex flex-col justify-between border-2 border-transparent hover:border-rust transition-all shadow-md hover:shadow-lg"
              >
                <div>
                  <div className="text-3xl mb-3" aria-hidden="true">
                    {svc.icon}
                  </div>
                  <h3 className="font-heading font-bold text-xl text-espresso mb-2">
                    {svc.name}
                  </h3>
                  <p className="text-sm text-[#6B5E52] leading-relaxed mb-6">
                    {svc.desc}
                  </p>
                </div>

                <Link
                  href={`/book?service=Pool%20Remodel&notes=${encodeURIComponent(`Interested in ${svc.name}`)}`}
                  className="text-sm font-bold text-rust hover:text-rust-hover transition-colors inline-flex items-center gap-1"
                >
                  Request Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESTIMATE & BOOKING SECTION ── */}
      <section className="section bg-[#FAF6F0]" id="estimate" aria-labelledby="booking-heading">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-rust font-bold text-xs uppercase tracking-widest bg-rust/10 px-3.5 py-1 rounded-full inline-block">
                Start Your Project
              </span>
              <h2
                id="booking-heading"
                className="font-heading font-black text-3xl sm:text-4xl text-espresso"
              >
                Ready to Remodel Your Pool or Backyard?
              </h2>
              <p className="text-[#6B5E52] text-base leading-relaxed">
                Contact KustomXworks today. We serve all 9 major cities across the Inland Empire and Coachella Valley with fast scheduling, transparent pricing, and master-grade construction.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-rust/10 flex items-center justify-center flex-shrink-0 text-rust mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-espresso">On-Site Measurement &amp; Consultation</h3>
                    <p className="text-xs text-[#6B5E52]">We inspect your pool shell, deck conditions, and grading in person.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-rust/10 flex items-center justify-center flex-shrink-0 text-rust mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-espresso">Detailed Written Scope of Work</h3>
                    <p className="text-xs text-[#6B5E52]">No surprise charges or hidden subcontractor markups.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-rust/10 flex items-center justify-center flex-shrink-0 text-rust mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-espresso">Turnkey Execution &amp; Cleanup</h3>
                    <p className="text-xs text-[#6B5E52]">We manage the excavation, plaster, tile, concrete, and debris removal.</p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#D8C4A8]/60 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-rust text-white flex items-center justify-center flex-shrink-0">
                  <PhoneIcon size={24} />
                </div>
                <div>
                  <div className="text-xs text-[#6B5E52] font-semibold">Prefer to speak right now?</div>
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="text-lg sm:text-xl font-heading font-black text-espresso hover:text-rust transition-colors"
                  >
                    {BUSINESS.phone}
                  </a>
                  <div className="text-[11px] text-rust font-bold">Available Mon–Sat 7AM–7PM</div>
                </div>
              </div>
            </div>

            {/* Lead Form Box */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#D8C4A8]/60 shadow-xl">
              <h3 className="font-heading font-black text-2xl text-espresso mb-2">
                Get Your Pool &amp; Landscape Estimate
              </h3>
              <p className="text-xs text-[#6B5E52] mb-6">
                Fill out the form below and we will contact you within 24 hours to schedule your consultation.
              </p>
              <LeadForm preselectedService="Swimming Pool Remodeling & Decking" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="section bg-white" aria-labelledby="faqs-heading">
        <div className="container-site max-w-3xl">
          <div className="text-center mb-10">
            <h2 id="faqs-heading" className="font-heading font-black text-3xl text-espresso mb-3">
              Pool Remodeling Questions Answered
            </h2>
            <p className="text-[#6B5E52]">
              Common questions about pool resurfacing, plaster options, concrete decks, and project timelines.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTABand />
    </>
  );
}
