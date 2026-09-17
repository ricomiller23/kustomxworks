import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { CITIES } from "@/content/cities";
import { SERVICE_CATEGORIES } from "@/content/services";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { CityCard } from "@/components/CityCard";
import { OfferCard } from "@/components/OfferCard";
import { CTABand } from "@/components/CTABand";
import { LeadForm } from "@/components/LeadForm";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { PhoneIcon, SparklesIcon, ArrowRightIcon, MapPinIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Concrete Block Walls, Landscaping & Handyman Services | KustomXworks",
  description:
    "KustomXworks — Premier concrete block walls, custom landscaping, construction expertise, and multi-trade handyman services serving Corona, Murrieta, Temecula, Perris, Moreno Valley, Norco, Hemet, Beaumont & Palm Springs, CA. Same-week service.",
  alternates: {
    canonical: BUSINESS.website,
  },
  openGraph: {
    title: "Concrete Block Walls, Landscaping & Handyman | KustomXworks",
    description:
      "Concrete block walls, custom landscaping, and construction expertise across 9 Inland Empire & Coachella Valley cities. Flat-rate pricing, same-week service, satisfaction guaranteed.",
    url: BUSINESS.website,
  },
};

// JSON-LD — LocalBusiness
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BUSINESS.website}/#business`,
  name: BUSINESS.name,
  url: BUSINESS.website,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  description: "Premier concrete block walls, custom landscaping, construction expertise, and handyman services across the Inland Empire and Coachella Valley.",
  image: `${BUSINESS.website}/og-image.jpg`,
  priceRange: "$$",
  openingHours: ["Mo-Sa 07:00-19:00"],
  areaServed: CITIES.map((c) => ({
    "@type": "City",
    name: c.name,
    addressRegion: c.state,
  })),
  address: {
    "@type": "PostalAddress",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function HomePage() {
  const featuredServices = SERVICE_CATEGORIES.flatMap((c) => c.services).slice(0, 8);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1A1008 0%, #2A211A 40%, #3D2C1F 100%)",
        }}
        aria-labelledby="hero-heading"
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C1502E' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-site relative z-10 pt-12 md:pt-16 pb-32 md:pb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Headline, Highlights & Actions */}
            <div className="lg:col-span-7">
              {/* Patriotic Headline Motto */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rust/40 to-rust/20 border border-rust/60 text-orange-100 text-xs sm:text-sm font-bold uppercase tracking-wider mb-5 shadow-lg animate-fade-up">
                <span className="text-base">🇺🇸</span>
                <span>Building America Back From the Ground Up — One Project at a Time</span>
              </div>

              {/* Trust chips */}
              <div className="flex flex-wrap gap-2 mb-6 animate-fade-up">
                <span className="trust-chip text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(193,80,46,0.35)", color: "#EDE6DC", border: "1px solid rgba(193,80,46,0.5)" }}>
                  ✓ American Craft. American Grit.
                </span>
                <span className="trust-chip text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(193,80,46,0.35)", color: "#EDE6DC", border: "1px solid rgba(193,80,46,0.5)" }}>
                  ✓ Concrete Block Walls
                </span>
                <span className="trust-chip text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(193,80,46,0.35)", color: "#EDE6DC", border: "1px solid rgba(193,80,46,0.5)" }}>
                  ✓ Custom Landscaping
                </span>
                <span className="trust-chip text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(193,80,46,0.35)", color: "#EDE6DC", border: "1px solid rgba(193,80,46,0.5)" }}>
                  ✓ Construction Expertise
                </span>
                <span className="trust-chip text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#EDE6DC" }}>
                  ✓ Same-Week Service
                </span>
                <span className="trust-chip text-xs font-semibold px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-200">
                  🏊 Pool Remodel &amp; Decking
                </span>
              </div>

              <h1
                id="hero-heading"
                className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5 animate-fade-up-delay-1"
              >
                Inland Empire &amp; Desert&rsquo;s{" "}
                <span style={{ color: "#C1502E" }}>Most Trusted</span>{" "}
                Handyman Service
              </h1>

              <div className="bg-white/10 backdrop-blur-sm border-l-4 border-rust p-4 rounded-r-xl mb-6">
                <p className="text-white font-bold text-lg mb-1">
                  Concrete Block Walls · Pool Remodeling · Custom Landscaping · Construction
                </p>
                <p className="text-sm text-orange-100/90 leading-relaxed font-semibold mb-1">
                  Handyman Expertise, Contractor-Level Strength — Building America Back From the Ground Up.
                </p>
                <p className="text-xs text-orange-100/75 leading-relaxed">
                  From heavy structural masonry and modern outdoor transformations to precision repairs and whole-property remodeling, we deliver unmatched master craftsmanship and reliability.
                </p>
              </div>

              <p className="text-xs font-semibold uppercase tracking-wider text-orange-200/70 mb-2">
                Proudly Serving Homeowners, Landlords &amp; Businesses Across 9 Cities:
              </p>
              <p className="text-sm font-medium text-orange-100/80 mb-8 leading-relaxed">
                Corona · Murrieta · Temecula · Perris · Moreno Valley · Norco · Hemet · Beaumont · Palm Springs
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
                <Link href="/book" className="btn-rust text-base px-8 py-4 text-center">
                  Book Service Now
                </Link>
                <Link
                  href="/book?type=estimate"
                  className="btn-outline text-base px-8 py-4 text-center"
                  style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}
                >
                  Get Free Estimate
                </Link>
              </div>

              <div className="pt-6 relative z-20">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-black/50 hover:bg-black/80 border border-white/20 text-orange-100 font-semibold transition-all shadow-xl hover:border-rust group"
                  aria-label={`Call us: ${BUSINESS.phone}`}
                >
                  <span className="w-8 h-8 rounded-lg bg-rust/30 flex items-center justify-center text-rust group-hover:bg-rust transition-colors">
                    <PhoneIcon size={18} className="text-white" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="text-xs text-orange-200/90 block sm:inline sm:mr-2">One Call. Every Solution. Built for America.</span>
                    Call 24/7: <strong className="text-white text-base tracking-wide ml-1">{BUSINESS.phone}</strong>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column: Video directly to the right of the headline */}
            <div className="lg:col-span-5 animate-fade-up-delay-2">
              <div className="relative rounded-2xl overflow-hidden border-2 border-orange-500/30 bg-black/60 shadow-2xl backdrop-blur-md p-3 group">
                <div className="flex items-center justify-between px-2 pb-2.5 mb-1 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-200">
                      Showcase Video
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-white/60 bg-white/10 px-2 py-0.5 rounded">
                    Masonry &amp; Landscaping
                  </span>
                </div>

                <div className="relative rounded-xl overflow-hidden bg-black aspect-[9/16] sm:aspect-[4/5] lg:aspect-[9/16] max-h-[540px] flex items-center justify-center shadow-inner">
                  <video
                    src="/videos/kustomxworks-showcase.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="auto"
                    className="w-full h-full object-cover rounded-xl"
                    aria-label="KustomXworks Concrete Block Walls, Landscaping and Construction Showcase Video"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="mt-3 px-2 text-center">
                  <p className="text-xs font-bold text-white">
                    Concrete Block Walls · Landscaping · Construction Expertise
                  </p>
                  <p className="text-[11px] text-orange-100/70 mt-0.5">
                    Watch our craftsmen in action delivering durable structures and outdoor transformations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal cut */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none z-0" style={{ height: "60px" }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,60 L1440,0 L1440,60 Z" fill="#F7F1E8" />
          </svg>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <TrustStrip variant="tan" />

      {/* ── PREMIER SPECIALTIES SPOTLIGHT ── */}
      <section className="section bg-white border-b border-tan/30" aria-labelledby="specialties-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="text-rust font-bold text-xs uppercase tracking-widest bg-rust/10 px-3.5 py-1 rounded-full inline-block mb-3">
              Strong Hands. Strong Homes. Strong America.
            </span>
            <h2 id="specialties-heading" className="font-heading font-black text-3xl md:text-5xl text-espresso mb-4">
              Concrete Block Walls, Landscaping &amp; Construction Expertise
            </h2>
            <p className="text-[#6B5E52] max-w-2xl mx-auto text-base md:text-lg mb-2">
              Beyond everyday home repairs, KustomXworks is recognized across the Inland Empire and Coachella Valley for heavy-duty structural masonry, modern outdoor transformations, and master construction.
            </p>
            <p className="text-rust font-heading font-bold text-sm tracking-wide uppercase">
              Strength You Can See — Built Proud. Built Strong.
            </p>
          </div>

          {/* ── REAL BEFORE & AFTER REMODELS: POOL & LANDSCAPING ── */}
          <div className="mb-16 bg-[#FAF6F0] rounded-3xl p-6 sm:p-10 border border-[#D8C4A8]/60 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#D8C4A8]/50">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rust/10 text-rust text-xs font-bold uppercase tracking-wider mb-2">
                  <span>🛠️</span>
                  <span>Visual Proof · Real Job Site Results</span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-espresso">
                  Before &amp; After Remodel Transformations
                </h3>
                <p className="text-sm text-[#6B5E52] mt-1">
                  Real craftsmanship in the Inland Empire &amp; Coachella Valley — from raw dirt lots to turnkey pool &amp; patio resorts.
                </p>
              </div>
              <div className="flex gap-3">
                <Link href="/services/pool-remodel" className="btn-rust text-xs py-2.5 px-4 whitespace-nowrap">
                  Pool Remodel Specs →
                </Link>
                <Link href="/gallery" className="btn-outline text-espresso border-espresso/30 text-xs py-2.5 px-4 whitespace-nowrap">
                  Full Gallery
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Feature 1: Swimming Pool Overhaul (7 cols) */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-tan/60 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-100 px-3 py-1 rounded-full">
                      Featured Pool Remodel
                    </span>
                    <span className="text-xs text-[#6B5E52] font-semibold">Riverside County, CA</span>
                  </div>
                  <h4 className="font-heading font-black text-xl sm:text-2xl text-espresso mb-2">
                    Inground Pool Resurfacing, Safety Coping &amp; Curved Retaining Wall
                  </h4>
                  <p className="text-sm text-[#6B5E52] leading-relaxed mb-4">
                    Complete swimming pool restoration: replastered with sparkling Caribbean blue finish, safety bullnose brick coping, custom radius curved masonry retaining wall with smooth charcoal stucco, and multi-tier concrete deck coating.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black/10 group">
                      <img
                        src="/projects/pool-remodel-after-sparkling-deck-stucco.jpg"
                        alt="Sparkling Caribbean blue pool with resurfaced concrete deck and diving board"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/75 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        Sparkling Blue Replaster
                      </div>
                    </div>
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black/10 group">
                      <img
                        src="/projects/pool-remodel-after-retaining-wall-outdoor-living.jpg"
                        alt="Curved retaining wall with smooth stucco and poolside patio bar"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/75 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        Curved Masonry Wall &amp; Bar
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-espresso mb-4">
                    <span className="bg-[#FAF6F0] p-2 rounded-lg border border-tan/50">✓ Caribbean Blue Plaster</span>
                    <span className="bg-[#FAF6F0] p-2 rounded-lg border border-tan/50">✓ Safety Bullnose Coping</span>
                    <span className="bg-[#FAF6F0] p-2 rounded-lg border border-tan/50">✓ Deck Resurfacing &amp; Seal</span>
                    <span className="bg-[#FAF6F0] p-2 rounded-lg border border-tan/50">✓ Curved Stucco Wall</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-tan/40 flex items-center justify-between gap-3">
                  <Link href="/services/pool-remodel" className="text-xs font-bold text-rust hover:underline">
                    Explore Pool Remodel Details →
                  </Link>
                  <Link href="/book?service=Pool%20Remodel" className="btn-rust text-xs py-2 px-4">
                    Book Pool Quote
                  </Link>
                </div>
              </div>

              {/* Feature 2: Landscaping Before & After (5 cols) */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-tan/60 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                      Landscaping Before &amp; After
                    </span>
                    <span className="text-xs text-[#6B5E52] font-semibold">Inland Empire, CA</span>
                  </div>
                  <h4 className="font-heading font-black text-xl text-espresso mb-2">
                    Front Yard Dirt Lot into Raised Garden &amp; Pavers
                  </h4>
                  <p className="text-xs sm:text-sm text-[#6B5E52] leading-relaxed mb-4">
                    Bare soil lot completely transformed with custom timber planter box, 5-tier vertical herb tower, stone gravel border, and concrete paver walkway.
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 mb-4">
                    {/* Before */}
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black/10">
                      <img
                        src="/projects/landscape-remodel-before-dirt-yard.jpg"
                        alt="Before: Untamed bare dirt yard"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-black/85 text-white text-[10px] font-black px-2 py-0.5 rounded">
                        BEFORE
                      </span>
                    </div>
                    {/* After */}
                    <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black/10">
                      <img
                        src="/projects/landscape-remodel-after-garden-pavers.jpg"
                        alt="After: Raised planter box, herb tower, gravel, and pavers"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-rust text-white text-[10px] font-black px-2 py-0.5 rounded shadow">
                        AFTER
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs text-[#5A4B3D] mb-4">
                    <p className="font-medium">• Eliminates dust, mud &amp; persistent weeds</p>
                    <p className="font-medium">• Treated timber planter + space-saving herb tower</p>
                    <p className="font-medium">• Durable paver walkway &amp; gravel drainage</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-tan/40 flex items-center justify-between gap-3">
                  <Link href="/book?service=Landscaping%20%26%20Hardscaping" className="btn-rust w-full text-center text-xs py-2 px-4">
                    Request Landscaping Quote →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── FEATURED MODERN OUTDOOR TRANSFORMATIONS & CONSTRUCTION SHOWCASE ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            {/* Project 1: Cedar ADU with Rooftop Deck */}
            <div className="group rounded-3xl overflow-hidden bg-white border border-[#D8C4A8]/60 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                <img
                  src="/projects/custom-adu-cedar-rooftop-deck.jpg"
                  alt="Modern cedar backyard studio and ADU with spiral staircase, rooftop deck, and custom outdoor landscaping"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-rust" />
                  <span>Custom Backyard Studio &amp; ADU</span>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rust bg-rust/10 px-2.5 py-0.5 rounded-full">
                    Construction &amp; Hardscaping
                  </span>
                  <span className="text-xs text-[#6B5E52] font-semibold">Palm Springs / Coachella Valley</span>
                </div>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-espresso mb-2">
                  Cedar Backyard Studio with Rooftop Viewing Deck
                </h3>
                <p className="text-sm text-[#6B5E52] leading-relaxed mb-4">
                  Turnkey outdoor build: architectural vertical cedar cladding, precision spiral metal staircase, illuminated rooftop lounge with cable railing, ground-level lighted porch, and drought-tolerant paver landscaping.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-espresso">
                  <span className="bg-cream px-2.5 py-1 rounded-md border border-tan/40">✓ Spiral Metal Staircase</span>
                  <span className="bg-cream px-2.5 py-1 rounded-md border border-tan/40">✓ Cable Railing Rooftop Deck</span>
                  <span className="bg-cream px-2.5 py-1 rounded-md border border-tan/40">✓ Integrated Exterior Lighting</span>
                </div>
              </div>
            </div>

            {/* Project 2: Standing-Seam Black ADU with Fire Lounge */}
            <div className="group rounded-3xl overflow-hidden bg-white border border-[#D8C4A8]/60 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                <img
                  src="/projects/custom-adu-modern-black-rooftop-lounge.jpg"
                  alt="Modern standing-seam black and cedar ADU with rooftop fire pit lounge and evening bistro lighting"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-rust" />
                  <span>Modern Outdoor Transformation</span>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rust bg-rust/10 px-2.5 py-0.5 rounded-full">
                    Master Construction &amp; ADU
                  </span>
                  <span className="text-xs text-[#6B5E52] font-semibold">Temecula / Murrieta</span>
                </div>
                <h3 className="font-heading font-black text-xl sm:text-2xl text-espresso mb-2">
                  Modern Standing-Seam ADU with Rooftop Fire Lounge
                </h3>
                <p className="text-sm text-[#6B5E52] leading-relaxed mb-4">
                  Contemporary residential transformation: matte black standing-seam paneling, warm cedar window framing, rooftop lounge deck with gas fire table, gravel yard borders, and ambient twilight bistro string lighting.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-espresso">
                  <span className="bg-cream px-2.5 py-1 rounded-md border border-tan/40">✓ Standing-Seam Cladding</span>
                  <span className="bg-cream px-2.5 py-1 rounded-md border border-tan/40">✓ Rooftop Fire Pit Lounge</span>
                  <span className="bg-cream px-2.5 py-1 rounded-md border border-tan/40">✓ Custom Paver Walkways</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Concrete Block Walls */}
            <div className="card p-8 flex flex-col justify-between border-2 hover:border-rust transition-all duration-300 shadow-md hover:shadow-xl bg-cream/30">
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: "#D8C4A8" }}>
                  <span className="text-rust font-black text-2xl">🧱</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-espresso mb-3">
                  Concrete Block Walls
                </h3>
                <p className="text-sm text-[#6B5E52] leading-relaxed mb-6">
                  Engineered and reinforced masonry built for permanence. From hillside retaining walls to perimeter privacy fences, we handle every phase from grading and footing excavation to steel rebar and solid grout fill.
                </p>
                <ul className="space-y-2.5 mb-8 text-sm text-espresso font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Retaining Walls &amp; Soil Retention
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Property Perimeter &amp; Security Walls
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Split-Face, Stucco &amp; Capping Finishes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Raised Garden Planters &amp; Steps
                  </li>
                </ul>
              </div>
              <Link href="/book?service=Concrete%20Block%20Walls" className="btn-rust w-full text-center text-sm py-3">
                Request Block Wall Quote →
              </Link>
            </div>

            {/* Card: Swimming Pool Remodeling & Decking */}
            <div className="card p-6 flex flex-col justify-between border-2 hover:border-rust transition-all duration-300 shadow-md hover:shadow-xl bg-cream/30">
              <div>
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: "#D8C4A8" }}>
                  <span className="text-rust font-black text-2xl">🏊</span>
                </div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="text-[11px] font-bold text-cyan-800 bg-cyan-100 px-2 py-0.5 rounded-full uppercase">
                    New &amp; Featured
                  </span>
                </div>
                <h3 className="font-heading font-bold text-xl text-espresso mb-2">
                  Pool Remodel &amp; Decking
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5E52] leading-relaxed mb-5">
                  Turnkey inground pool restoration. Replastering, pebble finishes, waterline tile, safety bullnose coping, concrete deck resurfacing, and curved retaining walls.
                </p>
                <ul className="space-y-2 mb-6 text-xs sm:text-sm text-espresso font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Plaster &amp; Pebble Resurfacing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Bullnose Safety Coping &amp; Tile
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Concrete Deck Resurfacing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Curved Stucco Retaining Walls
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <Link href="/services/pool-remodel" className="btn-rust w-full text-center text-xs py-2.5 block shadow">
                  Explore Pool Remodel →
                </Link>
                <Link href="/book?service=Pool%20Remodel" className="btn-outline text-espresso border-espresso/30 w-full text-center text-xs py-2 block hover:bg-white">
                  Request Pool Quote
                </Link>
              </div>
            </div>

            {/* Card 2: Custom Landscaping */}
            <div className="card p-8 flex flex-col justify-between border-2 hover:border-rust transition-all duration-300 shadow-md hover:shadow-xl bg-cream/30">
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: "#D8C4A8" }}>
                  <span className="text-rust font-black text-2xl">🌿</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-espresso mb-3">
                  Custom Landscaping
                </h3>
                <p className="text-sm text-[#6B5E52] leading-relaxed mb-6">
                  Transform your outdoor living area with water-smart desert landscapes, premium pavers, and vibrant greenery. We customize every yard to withstand California climates while dramatically increasing curb appeal.
                </p>
                <ul className="space-y-2.5 mb-8 text-sm text-espresso font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Drought-Tolerant Xeriscaping &amp; Rock
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Premium Artificial Turf Installation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Paver Patios, Walkways &amp; Edging
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Drip Irrigation &amp; Drainage Solutions
                  </li>
                </ul>
              </div>
              <Link href="/book?service=Landscaping%20%26%20Hardscaping" className="btn-rust w-full text-center text-sm py-3">
                Request Landscaping Estimate →
              </Link>
            </div>

            {/* Card 3: Construction Expertise */}
            <div className="card p-8 flex flex-col justify-between border-2 hover:border-rust transition-all duration-300 shadow-md hover:shadow-xl bg-cream/30">
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: "#D8C4A8" }}>
                  <span className="text-rust font-black text-2xl">🔨</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-espresso mb-3">
                  Construction Expertise
                </h3>
                <p className="text-sm text-[#6B5E52] leading-relaxed mb-6">
                  Decades of building and renovation mastery bring general construction caliber to every project. Whether it&rsquo;s structural framing, dry rot restoration, or turnkey room additions, we execute with precision.
                </p>
                <ul className="space-y-2.5 mb-8 text-sm text-espresso font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Structural Framing &amp; Header Repairs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Patio Covers, Pergolas &amp; Decking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Complete Kitchen &amp; Bath Remodels
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-rust font-bold">✓</span> Commercial &amp; Residential Buildouts
                  </li>
                </ul>
              </div>
              <Link href="/book?service=Construction%20Expertise" className="btn-rust w-full text-center text-sm py-3">
                Consult Construction Expert →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIGNATURE ARCHITECTURAL MILLWORK & SLAT WALLS ── */}
      <section
        className="section text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #150E07 0%, #241A13 50%, #1D140D 100%)" }}
        aria-labelledby="architectural-woodwork-heading"
      >
        {/* Subtle background mesh */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h18v2H22v18h-2V20.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm8 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z' fill='%23C1502E' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-site relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rust/20 border border-rust/40 text-orange-200 text-xs font-bold uppercase tracking-wider mb-3">
                <SparklesIcon size={14} className="text-rust" />
                <span>Signature Architectural Woodwork</span>
              </div>
              <h2
                id="architectural-woodwork-heading"
                className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight"
              >
                Custom Slat Walls &amp; Luxury Media Centers
              </h2>
              <p className="text-orange-100/70 text-base sm:text-lg mt-3">
                Elevate your home with master-level carpentry: 3D parametric acoustic wave walls, floor-to-ceiling Scandinavian oak slats, and backlit Calacatta marble fireplace suites.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/gallery" className="btn-outline text-white border-white/30 hover:border-white text-sm py-3 px-5">
                View Full Gallery →
              </Link>
              <Link href="/book?service=Custom%20Slat%20Walls" className="btn-rust text-sm py-3 px-5">
                Book Custom Build
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-rust/60 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl">
              <div>
                <div className="aspect-[16/10] overflow-hidden relative bg-black/40">
                  <img
                    src="/projects/parametric-wave-wall.jpg"
                    alt="Parametric 3D wooden wave wall sculpture with golden LED lighting"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1">
                    <MapPinIcon size={11} className="text-rust" /> Palm Springs
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rust bg-rust/10 px-2 py-0.5 rounded">
                    3D Parametric Millwork
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mt-2 mb-1.5">
                    Parametric Wave Wall
                  </h3>
                  <p className="text-xs text-orange-100/70 leading-relaxed">
                    Custom-machined flowing timber wave wall with precision warm 2700K golden LED illumination channels.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/gallery#parametric-wave-wall"
                  className="text-xs font-bold text-rust hover:text-orange-300 transition-colors inline-flex items-center gap-1"
                >
                  View Project Specs <ArrowRightIcon size={12} />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-rust/60 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl">
              <div>
                <div className="aspect-[16/10] overflow-hidden relative bg-black/40">
                  <img
                    src="/projects/oak-slat-media-wall.jpg"
                    alt="Floor to ceiling natural white oak vertical slat wall with flush TV mount"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1">
                    <MapPinIcon size={11} className="text-rust" /> Temecula
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rust bg-rust/10 px-2 py-0.5 rounded">
                    White Oak Acoustic Slats
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mt-2 mb-1.5">
                    White Oak Slat Media Wall
                  </h3>
                  <p className="text-xs text-orange-100/70 leading-relaxed">
                    Floor-to-ceiling vertical oak slats, full in-wall cable concealment, and custom 3-bay floating credenza.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/gallery#oak-slat-media-wall"
                  className="text-xs font-bold text-rust hover:text-orange-300 transition-colors inline-flex items-center gap-1"
                >
                  View Project Specs <ArrowRightIcon size={12} />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-rust/60 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl">
              <div>
                <div className="aspect-[16/10] overflow-hidden relative bg-black/40">
                  <img
                    src="/projects/charcoal-fireplace-slat-wall.jpg"
                    alt="Dark charcoal vertical slat wall with Calacatta marble and electric fireplace"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1">
                    <MapPinIcon size={11} className="text-rust" /> Corona
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rust bg-rust/10 px-2 py-0.5 rounded">
                    Marble &amp; Fireplace Suite
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mt-2 mb-1.5">
                    Charcoal Fireplace Slat Wall
                  </h3>
                  <p className="text-xs text-orange-100/70 leading-relaxed">
                    Deep charcoal acoustic slats, polished Calacatta marble slab, and built-in electric ribbon fireplace.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/gallery#charcoal-fireplace-slat-wall"
                  className="text-xs font-bold text-rust hover:text-orange-300 transition-colors inline-flex items-center gap-1"
                >
                  View Project Specs <ArrowRightIcon size={12} />
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-rust/60 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl">
              <div>
                <div className="aspect-[16/10] overflow-hidden relative bg-black/40">
                  <img
                    src="/projects/luxury-backlit-entertainment-center.jpg"
                    alt="Backlit Calacatta marble and black acoustic slat entertainment center"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1">
                    <MapPinIcon size={11} className="text-rust" /> Moreno Valley
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-rust bg-rust/10 px-2 py-0.5 rounded">
                    Designer Entertainment Suite
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mt-2 mb-1.5">
                    Backlit Luxury Media Wall
                  </h3>
                  <p className="text-xs text-orange-100/70 leading-relaxed">
                    Matte black acoustic slats, 3000K warm halo backlit marble TV panel, dual brass sconces, and floating credenza.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  href="/gallery#luxury-backlit-entertainment-center"
                  className="text-xs font-bold text-rust hover:text-orange-300 transition-colors inline-flex items-center gap-1"
                >
                  View Project Specs <ArrowRightIcon size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="section bg-cream" aria-labelledby="services-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 id="services-heading" className="font-heading font-black text-3xl md:text-4xl text-espresso mb-3">
              Everything Your Home Needs — One Call
            </h2>
            <p className="text-[#6B5E52] max-w-xl mx-auto">
              From concrete block walls and landscaping to drywall, carpentry, and modifications, we handle it all with transparent pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featuredServices.map((svc) => (
              <ServiceCard key={svc.id} service={svc} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="btn-outline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA MAP ── */}
      <section className="section bg-white" aria-labelledby="areas-heading">
        <div className="container-site">
          <div className="text-center mb-10">
            <h2 id="areas-heading" className="font-heading font-black text-3xl md:text-4xl text-espresso mb-3">
              Proudly Serving 9 Cities
            </h2>
            <p className="text-[#6B5E52] max-w-xl mx-auto">
              Across the Inland Empire and Coachella Valley — click any city to learn more.
            </p>
          </div>
          <ServiceAreaMap cities={CITIES} />
        </div>
      </section>

      {/* ── WHY KUSTOMXWORKS ── */}
      <section className="section bg-cream" aria-labelledby="why-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 id="why-heading" className="font-heading font-black text-3xl md:text-4xl text-espresso mb-2">
              Why KustomXworks?
            </h2>
            <p className="text-rust font-heading font-bold text-sm uppercase tracking-wider mb-2">
              Hard Work. Honest Results. American Built.
            </p>
            <p className="text-[#6B5E52] max-w-xl mx-auto">
              Built to last. Fixed with pride. {BUSINESS.customersServed} homeowners have trusted us. Here&rsquo;s why.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS.trustPoints.map((point) => (
              <div key={point.id} className="card p-6 flex gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#D8C4A8" }}
                >
                  <span className="text-rust font-black text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-espresso mb-1">{point.label}</h3>
                  <p className="text-sm text-[#6B5E52]">{point.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFERS ── */}
      <section className="section bg-white" aria-labelledby="offers-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 id="offers-heading" className="font-heading font-black text-3xl md:text-4xl text-espresso mb-3">
              Limited-Time Offers
            </h2>
            <p className="text-[#6B5E52]">
              We believe great service should be accessible to everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BUSINESS.offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} />
            ))}
          </div>
        </div>
      </section>



      {/* ── CITY GRID ── */}
      <section className="section bg-white" aria-labelledby="cities-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 id="cities-heading" className="font-heading font-black text-3xl md:text-4xl text-espresso mb-3">
              Find Your City
            </h2>
            <p className="text-[#6B5E52]">
              Each city page has local-specific info about common issues, neighborhoods, and services.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CITIES.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD FORM ── */}
      <section className="section bg-cream" id="estimate" aria-labelledby="form-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="form-heading" className="font-heading font-black text-3xl md:text-4xl text-espresso mb-4">
                Get Your Free Estimate Today
              </h2>
              <p className="text-[#6B5E52] mb-6 text-lg">
                Tell us what you need and we&rsquo;ll get back to you same business day with a flat-rate quote — no obligation.
              </p>
              <div className="space-y-3">
                {BUSINESS.trustPoints.slice(0, 4).map((p) => (
                  <div key={p.id} className="flex items-center gap-2 text-sm font-semibold text-espresso">
                    <span className="w-5 h-5 rounded-full bg-rust flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </span>
                    {p.label}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <CTABand />
    </>
  );
}
