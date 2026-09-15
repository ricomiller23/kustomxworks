import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { LeadForm } from "@/components/LeadForm";
import { TrustStrip } from "@/components/TrustStrip";
import { CTABand } from "@/components/CTABand";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { CITIES } from "@/content/cities";

export const metadata: Metadata = {
  title: "About KustomXworks Handyman Services | Inland Empire",
  description:
    "KustomXworks — your trusted Inland Empire & Coachella Valley handyman. Construction expertise, concrete block walls, landscaping, and master craftsmanship. Serving 9 cities with flat-rate pricing and satisfaction guaranteed.",
  alternates: { canonical: `${BUSINESS.website}/about` },
};

const values = [
  { title: "Work Done Right. Work Done Proud.", desc: "We don't rush quality or take shortcuts. Every repair and build is crafted tough to last — not just to look done." },
  { title: "Price Up Front", desc: "You get a flat-rate quote before we start. No surprises, no 'and while I'm here' upsells. Hard work, honest results, American built." },
  { title: "Tools Ready. Work Steady.", desc: "America strong. We confirm appointments, arrive on time, and communicate clearly from start to finish." },
  { title: "Strong Hands. Strong Homes.", desc: "We treat your property with respect — clean up thoroughly, protect your floors, and leave no trace behind." },
  { title: "Built to Last. Fixed with Pride.", desc: "If you're not 100% satisfied, we make it right. That's the craftsman guarantee — no fine print." },
  { title: "American Craft. American Grit.", desc: "Trusted craftsmanship for a stronger America. Every technician represents our standard of excellence in your home." },
];

export default function AboutPage() {
  return (
    <>
      <section
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="about-h1"
      >
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
            <Link href="/">Home</Link><span>/</span>
            <span aria-current="page">About</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rust/30 border border-rust/50 text-orange-100 text-xs font-bold uppercase tracking-wider mb-4">
            <span>🇺🇸</span>
            <span>Your Project. Our Pride. America’s Future.</span>
          </div>
          <h1 id="about-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-3">
            About KustomXworks
          </h1>
          <p className="text-orange-100 font-heading font-bold text-xl mb-2">
            “Building America Back From the Ground Up — One Project at a Time.”
          </p>
          <p className="text-orange-100/70 text-base max-w-2xl">
            {BUSINESS.tagline}. {BUSINESS.yearsInBusiness} years of service. {BUSINESS.customersServed} customers. One promise: we make it right.
          </p>
        </div>
      </section>

      <TrustStrip />

      {/* Story */}
      <section className="section bg-cream" aria-labelledby="story-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="story-heading" className="font-heading font-black text-3xl text-espresso mb-5">
                Our Story
              </h2>
              <div className="space-y-4 text-[#6B5E52] leading-relaxed">
                <p>
                  KustomXworks was founded on a simple observation: Inland Empire homeowners deserved a handyman who showed up on time, priced fairly, and did the job right the first time. Too often, we heard stories of no-shows, surprise bills, and half-finished work. We decided to be different.
                </p>
                <p>
                  We started serving Corona and quickly grew across the Inland Empire as word spread. Today we cover {BUSINESS.cityCount} cities — from the equestrian ranches of Norco to the mid-century modern homes of Palm Springs — with the same flat-rate transparency and satisfaction guarantee we started with.
                </p>
                <p>
                  Every technician on the KustomXworks team is background-checked, trained in our standards, and represents our name in your home. That matters to us — because we live and work in this community too.
                </p>
                <p className="text-espresso font-semibold">
                  America starts at home. We believe strong communities depend on honest trades, durable craftsmanship, and work done proud. Every fix, every project is our contribution to building America back from the ground up.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: BUSINESS.yearsInBusiness, label: "Years in Business" },
                  { number: BUSINESS.cityCount.toString(), label: "Cities Served" },
                  { number: BUSINESS.customersServed, label: "Customers Served" },
                  { number: `${BUSINESS.rating}★`, label: "Average Rating" },
                ].map((stat) => (
                  <div key={stat.label} className="card p-5 text-center">
                    <div className="font-heading font-black text-3xl text-rust mb-1">{stat.number}</div>
                    <div className="text-sm font-semibold text-[#6B5E52]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Craftsmanship Showcase */}
      <section className="section bg-white border-y border-tan/30" aria-labelledby="craftsmanship-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-rust font-bold text-xs uppercase tracking-widest bg-rust/10 px-3 py-1 rounded-full inline-block mb-3">
                Crafted Tough. Built for America.
              </span>
              <h2 id="craftsmanship-heading" className="font-heading font-black text-3xl md:text-4xl text-espresso mb-2">
                Master Craftsmanship You Can See &amp; Feel
              </h2>
              <p className="text-rust font-heading font-bold text-sm tracking-wide uppercase mb-4">
                Where Quality Meets American Strength
              </p>
              <p className="text-[#6B5E52] leading-relaxed mb-4">
                While we take pride in fixing doors, drywall, and plumbing, KustomXworks is also home to true architectural craftsmen. We design, fabricate, and install custom 3D acoustic wave sculptures, Scandinavian slat walls, and designer media centers that transform ordinary rooms into luxury retreats.
              </p>
              <ul className="space-y-3 text-sm text-espresso font-semibold mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-rust font-bold">✓</span> Custom parametric wall carvings &amp; integrated LED illumination
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rust font-bold">✓</span> Bookmatched Calacatta marble slab backers &amp; linear fireplaces
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-rust font-bold">✓</span> Floor-to-ceiling acoustic slat paneling with zero visible fasteners
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/gallery" className="btn-rust text-sm py-3 px-6">
                  Explore Project Gallery →
                </Link>
                <Link href="/book?service=Custom%20Slat%20Walls" className="btn-outline text-sm py-3 px-6">
                  Book Custom Build
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-tan/40 group bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/projects/parametric-wave-wall.jpg"
                    alt="Parametric 3D wave wall sculpture"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3.5 bg-white text-xs">
                  <p className="font-bold text-espresso text-sm">3D Wave Sculpture</p>
                  <p className="text-[11px] text-[#6B5E52]">Palm Springs Lounge</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg border border-tan/40 group bg-white">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="/projects/luxury-backlit-entertainment-center.jpg"
                    alt="Luxury backlit entertainment center"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3.5 bg-white text-xs">
                  <p className="font-bold text-espresso text-sm">Backlit Media Center</p>
                  <p className="text-[11px] text-[#6B5E52]">Moreno Valley Residence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white" aria-labelledby="values-heading">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 id="values-heading" className="font-heading font-black text-3xl text-espresso mb-3">Our Values</h2>
            <p className="text-[#6B5E52]">Every job, every customer, every time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card p-6">
                <h3 className="font-heading font-bold text-xl text-rust mb-2">{v.title}</h3>
                <p className="text-sm text-[#6B5E52] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area map */}
      <section className="section bg-cream" aria-labelledby="areas-about-heading">
        <div className="container-site">
          <div className="text-center mb-10">
            <h2 id="areas-about-heading" className="font-heading font-black text-3xl text-espresso mb-3">
              Our Service Area
            </h2>
          </div>
          <ServiceAreaMap cities={CITIES} />
        </div>
      </section>

      {/* Credentials */}
      <section className="section bg-white" aria-label="Credentials and licensing">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-black text-2xl text-espresso mb-6">Master Craftsmanship &amp; Construction Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="card p-5 text-center">
                <div className="text-3xl mb-2" aria-hidden="true">🛡️</div>
                <p className="font-heading font-bold text-espresso text-sm">Concrete Block Walls</p>
                <p className="text-xs text-[#6B5E52]">Structural Masonry & Retaining</p>
              </div>
              <div className="card p-5 text-center">
                <div className="text-3xl mb-2" aria-hidden="true">✅</div>
                <p className="font-heading font-bold text-espresso text-sm">Custom Landscaping</p>
                <p className="text-xs text-[#6B5E52]">Desert-Scape, Turf & Pavers</p>
              </div>
              <div className="card p-5 text-center">
                <div className="text-3xl mb-2" aria-hidden="true">🔍</div>
                <p className="font-heading font-bold text-espresso text-sm">Background-Checked</p>
                <p className="text-xs text-[#6B5E52]">All technicians vetted</p>
              </div>
            </div>
            <Link href="/book" className="btn-rust">
              Book a Service Today
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
