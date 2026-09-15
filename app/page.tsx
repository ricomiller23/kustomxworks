import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { CITIES } from "@/content/cities";
import { SERVICE_CATEGORIES } from "@/content/services";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { CityCard } from "@/components/CityCard";
import { OfferCard } from "@/components/OfferCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTABand } from "@/components/CTABand";
import { LeadForm } from "@/components/LeadForm";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { PhoneIcon } from "lucide-react";

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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
    bestRating: "5",
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

        <div className="container-site relative z-10 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headline, Highlights & Actions */}
            <div className="lg:col-span-7">
              {/* Trust chips */}
              <div className="flex flex-wrap gap-2 mb-6 animate-fade-up">
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
                  Concrete Block Walls · Custom Landscaping · Construction Expertise
                </p>
                <p className="text-sm text-orange-100/80 leading-relaxed">
                  From heavy structural masonry and desert outdoor living to precision repairs and whole-property remodeling, we deliver unmatched master craftsmanship and reliability.
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

              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center gap-2 mt-6 text-orange-100/80 font-semibold hover:text-white transition-colors"
                aria-label={`Call us: ${BUSINESS.phone}`}
              >
                <PhoneIcon size={18} className="text-rust" aria-hidden="true" />
                <span>Call 24/7: <strong className="text-white">{BUSINESS.phone}</strong></span>
              </a>
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
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ height: "60px" }}>
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
              Core Pillars of Excellence
            </span>
            <h2 id="specialties-heading" className="font-heading font-black text-3xl md:text-5xl text-espresso mb-4">
              Concrete Block Walls, Landscaping &amp; Construction Expertise
            </h2>
            <p className="text-[#6B5E52] max-w-2xl mx-auto text-base md:text-lg">
              Beyond everyday home repairs, KustomXworks is recognized across the Inland Empire and Coachella Valley for heavy-duty structural masonry, modern outdoor transformations, and master construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <h2 id="why-heading" className="font-heading font-black text-3xl md:text-4xl text-espresso mb-3">
              Why KustomXworks?
            </h2>
            <p className="text-[#6B5E52] max-w-xl mx-auto">
              {BUSINESS.customersServed} homeowners have trusted us. Here&rsquo;s why.
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

      {/* ── TESTIMONIALS ── */}
      <section className="section bg-cream" aria-labelledby="reviews-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 id="reviews-heading" className="font-heading font-black text-3xl md:text-4xl text-espresso mb-3">
              What Our Customers Say
            </h2>
            <p className="text-[#6B5E52]">
              {BUSINESS.rating} stars · {BUSINESS.reviewCount} reviews across Google and more
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {BUSINESS.testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/reviews" className="btn-outline">
              Read All Reviews →
            </Link>
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
