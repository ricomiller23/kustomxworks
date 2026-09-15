import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { LeadForm } from "@/components/LeadForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TrustStrip } from "@/components/TrustStrip";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Aging-in-Place Modifications | KustomXworks — Hemet, Palm Springs & Beyond",
  description:
    "Professional aging-in-place modifications: grab bars, handrails, ramps, lever handles, non-slip surfaces. Free home safety assessment. Senior discount. Serving Hemet, Palm Springs & all 9 cities.",
  alternates: { canonical: `${BUSINESS.website}/services/aging-in-place` },
};

const modifications = [
  { icon: "🛁", name: "Grab Bars", desc: "Tub, shower, toilet grab bars properly anchored to studs for 250+ lb capacity." },
  { icon: "🔒", name: "Handrails", desc: "Interior & exterior handrails for all stairs and elevated walkways." },
  { icon: "♿", name: "Ramps & Thresholds", desc: "Entrance ramps, threshold reducers, and door sill modifications." },
  { icon: "🚪", name: "Lever Door Handles", desc: "Replace round knobs with lever handles throughout the home." },
  { icon: "🚿", name: "Shower Seats", desc: "Fold-down or built-in shower seats for safe bathing." },
  { icon: "🏠", name: "Non-Slip Surfaces", desc: "Non-slip tape, mats anchored flush, and textured coating for walkways." },
  { icon: "💡", name: "Lighting Upgrades", desc: "Brighter lighting in hallways, stairs, and bathrooms to reduce falls." },
  { icon: "🔍", name: "Free Safety Assessment", desc: "30-minute walk-through identifying your home's highest fall risks." },
];

const faqs = [
  {
    question: "How long does a typical aging-in-place install take?",
    answer: "Most installations take 2–4 hours. A full-home package (grab bars, handrails, lever handles, threshold reducers) typically takes a full day. We'll give you a time estimate when you book.",
  },
  {
    question: "Will grab bars damage my tile?",
    answer: "Not when installed correctly. We locate studs for solid grab bar mounting, or use commercial toggle anchors rated for 250 lbs. We work carefully to avoid tile damage and touch up caulk when finished.",
  },
  {
    question: "What is the free safety assessment?",
    answer: "A KustomXworks technician walks through your home and identifies fall hazards, missing safety features, and quick wins — at no charge. Most clients find 3–8 practical improvements. We then provide a no-obligation written quote.",
  },
  {
    question: "Do you work with occupational therapists?",
    answer: "Yes. If your OT has provided a recommendation list, we work from that directly and can communicate with them on any technical questions.",
  },
  {
    question: "Is the senior discount available for aging-in-place work?",
    answer: "Yes — 10% off for customers 65 and older. Just mention it when booking.",
  },
];

export default function AgingInPlacePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aging-in-Place Modifications",
    provider: { "@type": "HomeAndConstructionBusiness", name: BUSINESS.name },
    description: "Grab bars, handrails, ramps, lever handles, non-slip surfaces, and home safety assessments for seniors.",
    areaServed: ["Hemet, CA", "Palm Springs, CA", "Inland Empire, CA"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="aip-h1"
      >
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/services">Services</Link><span>/</span>
            <span aria-current="page">Aging-in-Place</span>
          </nav>
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-bold" style={{ backgroundColor: "#C1502E", color: "white" }}>
            ❤️ Senior Friendly — 10% Off
          </span>
          <h1 id="aip-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Aging-in-Place Modifications
          </h1>
          <p className="text-orange-100/70 text-lg max-w-2xl mb-6">
            We help seniors stay safe and independent in the homes they love. Grab bars, handrails, ramps, lever handles, and more — installed with care, patience, and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/book?service=Aging-in-Place" className="btn-rust">
              Book a Safety Assessment
            </Link>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}>
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="section bg-cream">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-heading font-black text-2xl md:text-3xl text-espresso mb-4">
                  Stay Safe. Stay Home.
                </h2>
                <p className="text-[#6B5E52] leading-relaxed mb-4">
                  Falls are the leading cause of injury among seniors — and most happen at home, in familiar spaces. The bathroom, the front step, the hallway at 2AM. KustomXworks specializes in the small modifications that make a life-changing difference: a properly anchored grab bar in the right place, a handrail that actually holds, a threshold ramp that eliminates that dangerous half-inch lip.
                </p>
                <p className="text-[#6B5E52] leading-relaxed">
                  We approach every aging-in-place job with the patience and communication it deserves. We explain every modification in plain language, price it up front, and never upsell what you don&rsquo;t need. Our technicians are trained in aging-in-place best practices and understand the difference between a code-compliant installation and one that will actually be used and trusted.
                </p>
              </div>

              {/* Services grid */}
              <div>
                <h2 className="font-heading font-black text-2xl text-espresso mb-6">What We Install</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {modifications.map((mod) => (
                    <div key={mod.name} className="card p-5 flex gap-4">
                      <div className="text-2xl flex-shrink-0" aria-hidden="true">{mod.icon}</div>
                      <div>
                        <h3 className="font-heading font-bold text-espresso mb-1">{mod.name}</h3>
                        <p className="text-sm text-[#6B5E52]">{mod.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="font-heading font-black text-2xl text-espresso mb-6">FAQ</h2>
                <FAQAccordion faqs={faqs} />
              </div>

              {/* City links */}
              <div>
                <h2 className="font-heading font-bold text-lg text-espresso mb-3">Serving Seniors Across Our 9 Cities</h2>
                <p className="text-sm text-[#6B5E52] mb-4">
                  We offer aging-in-place services across all our service areas, with special focus on Hemet, Palm Springs, and Beaumont.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["hemet", "palm-springs", "beaumont", "corona", "temecula"].map((slug) => (
                    <Link key={slug} href={`/handyman/${slug}`} className="btn-outline text-sm py-1.5 px-3">
                      {slug.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <LeadForm
                variant="compact"
                preselectedService="Aging-in-Place"
                title="Request a Free Safety Assessment"
                subtitle="No obligation. 30-minute walk-through identifies your home's risks."
              />
              <div className="card p-5 border-l-4" style={{ borderColor: "#C1502E" }}>
                <p className="font-heading font-bold text-espresso mb-2">Senior Discount</p>
                <p className="text-[#6B5E52] text-sm">
                  10% off all services for customers 65+. Mention it when booking or calling.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABand
        heading="Ready to Make Your Home Safer?"
        subheading="Book a free safety assessment — no obligation, no pressure."
      />
    </>
  );
}
