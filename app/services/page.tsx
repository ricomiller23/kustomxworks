import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_CATEGORIES } from "@/content/services";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustStrip } from "@/components/TrustStrip";
import { CTABand } from "@/components/CTABand";
import { BUSINESS } from "@/content/business";

export const metadata: Metadata = {
  title: "All Handyman Services | KustomXworks",
  description:
    "Complete construction, masonry & handyman services in the Inland Empire & Coachella Valley — concrete block walls, custom landscaping, construction expertise, drywall, carpentry & property maintenance.",
  alternates: { canonical: `${BUSINESS.website}/services` },
};

const specialtyLinks = [
  { href: "/services/aging-in-place", label: "Aging-in-Place Modifications", badge: "Senior Friendly" },
  { href: "/services/property-management", label: "Property Management", badge: "B2B" },
  { href: "/services/vacation-rental", label: "Vacation Rental Service", badge: "STR Priority" },
  { href: "/services/military", label: "Military Move Package", badge: "15% Off" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="services-h1"
      >
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Services</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rust/30 border border-rust/50 text-orange-100 text-xs font-bold uppercase tracking-wider mb-4">
            <span>🇺🇸</span>
            <span>Tools Ready. Work Steady. America Strong.</span>
          </div>
          <h1 id="services-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-3">
            Our Handyman &amp; Construction Services
          </h1>
          <p className="text-orange-100 font-heading font-bold text-lg max-w-2xl mb-2">
            Handyman Expertise, Contractor-Level Strength — Building America Back From the Ground Up.
          </p>
          <p className="text-orange-100/70 text-base max-w-2xl">
            One call covers everything — from concrete block walls and structural framing to drywall and finish carpentry. Flat-rate pricing, same-week service, satisfaction guaranteed.
          </p>
        </div>
      </section>

      <TrustStrip />

      {/* Specialty callouts */}
      <section className="section-tight bg-cream" aria-labelledby="specialty-heading">
        <div className="container-site">
          <h2 id="specialty-heading" className="font-heading font-black text-2xl text-espresso mb-5">
            Specialty Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {specialtyLinks.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="card p-5 flex flex-col gap-2 hover:border-rust border-2 border-transparent transition-all"
              >
                <span className="text-xs font-bold px-2 py-0.5 rounded-full self-start" style={{ backgroundColor: "#C1502E", color: "white" }}>
                  {s.badge}
                </span>
                <span className="font-heading font-bold text-espresso">{s.label}</span>
                <span className="text-xs text-rust font-semibold">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Custom Slat Walls Spotlight */}
      <section className="section bg-[#1A1008] text-white relative overflow-hidden" aria-labelledby="custom-slat-spotlight-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-rust font-bold text-xs uppercase tracking-widest bg-rust/20 border border-rust/40 px-3 py-1 rounded-full inline-block mb-3">
                Featured Craftsmanship
              </span>
              <h2 id="custom-slat-spotlight-heading" className="font-heading font-black text-3xl md:text-4xl text-white mb-4">
                Custom Architectural Slat Walls &amp; Media Suites
              </h2>
              <p className="text-orange-100/80 text-sm md:text-base leading-relaxed mb-6">
                Take your home interior to the next level. We design and install precision acoustic slat walls, backlit Calacatta marble mounting panels, electric linear fireplaces, and floating custom credenzas with zero visible cords.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/gallery" className="btn-rust text-sm py-3 px-6">
                  See Project Gallery →
                </Link>
                <Link href="/book?service=Custom%20Slat%20Walls" className="btn-outline text-white border-white/30 text-sm py-3 px-6">
                  Book Custom Build
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-xl group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/projects/oak-slat-media-wall.jpg"
                    alt="Natural White Oak Slat Media Wall"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="font-heading font-bold text-white text-base">White Oak Slat Wall</p>
                  <p className="text-xs text-orange-100/70 mt-1">Concealed wiring, flush TV mount &amp; floating credenza.</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-xl group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src="/projects/charcoal-fireplace-slat-wall.jpg"
                    alt="Charcoal Slat Fireplace Wall with Marble"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="font-heading font-bold text-white text-base">Charcoal Fireplace Suite</p>
                  <p className="text-xs text-orange-100/70 mt-1">Calacatta marble backer with ribbon fireplace credenza.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service categories */}
      {SERVICE_CATEGORIES.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="section bg-white"
          aria-labelledby={`cat-${category.id}`}
        >
          <div className="container-site">
            <h2 id={`cat-${category.id}`} className="font-heading font-black text-2xl md:text-3xl text-espresso mb-8">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((svc) => (
                <ServiceCard key={svc.id} service={svc} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTABand
        heading="Don't See Your Project?"
        subheading="We handle far more than what's listed. Call us or send a request — we'll let you know if we can help."
      />
    </>
  );
}
