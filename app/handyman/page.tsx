import type { Metadata } from "next";
import Link from "next/link";
import { CITIES } from "@/content/cities";
import { BUSINESS } from "@/content/business";
import { CityCard } from "@/components/CityCard";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Handyman Service Areas | KustomXworks — 9 Inland Empire & Desert Cities",
  description:
    "KustomXworks handyman services across 9 cities: Corona, Murrieta, Temecula, Perris, Moreno Valley, Norco, Hemet, Beaumont & Palm Springs, CA.",
  alternates: { canonical: `${BUSINESS.website}/handyman` },
};

export default function HandymanIndexPage() {
  return (
    <>
      <section
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="areas-h1"
      >
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
            <Link href="/">Home</Link>
            <span>/</span>
            <span aria-current="page">Service Areas</span>
          </nav>
          <h1 id="areas-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-3">
            Our Service Areas
          </h1>
          <p className="text-orange-100/70 text-lg max-w-2xl">
            KustomXworks serves 9 cities across the Inland Empire &amp; Coachella Valley. Click your city for local information, common issues, neighborhoods served, and FAQs.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-site">
          <div className="mb-10">
            <ServiceAreaMap cities={CITIES} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CITIES.map((city) => (
              <CityCard key={city.slug} city={city} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
