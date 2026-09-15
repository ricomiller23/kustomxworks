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
  { title: "Show Up", desc: "We confirm appointments, arrive on time, and call if anything changes. Reliability is non-negotiable." },
  { title: "Price Up Front", desc: "You get a flat-rate quote before we start. No surprises, no 'and while I'm here' upsells." },
  { title: "Do It Right", desc: "We don't rush quality. Every repair is done to last — not just to look done." },
  { title: "Respect Your Home", desc: "We treat your home as if it were our own. We clean up, protect your floors, and leave no trace." },
  { title: "Communicate", desc: "You hear from us before, during, and after the job. No guesswork about what was done or what it cost." },
  { title: "Stand Behind It", desc: "If you're not satisfied, we make it right. That's the guarantee — no fine print." },
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
          <h1 id="about-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            About KustomXworks
          </h1>
          <p className="text-orange-100/70 text-lg max-w-2xl">
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
