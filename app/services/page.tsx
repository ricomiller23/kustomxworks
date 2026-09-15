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
          <h1 id="services-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-3">
            Our Handyman Services
          </h1>
          <p className="text-orange-100/70 text-lg max-w-2xl">
            One call covers everything — from drywall to aging-in-place modifications. Flat-rate pricing, same-week service, satisfaction guaranteed.
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
