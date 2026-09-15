import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CITIES, getCityBySlug } from "@/content/cities";
import { BUSINESS } from "@/content/business";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadForm } from "@/components/LeadForm";
import { CTABand } from "@/components/CTABand";
import { TrustStrip } from "@/components/TrustStrip";
import { MapPinIcon, UsersIcon, HomeIcon } from "lucide-react";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: {
      canonical: `${BUSINESS.website}/handyman/${slug}`,
    },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: `${BUSINESS.website}/handyman/${slug}`,
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  // JSON-LD schemas
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${BUSINESS.website}/handyman/${slug}#business`,
    name: `${BUSINESS.name} — ${city.name}`,
    url: `${BUSINESS.website}/handyman/${slug}`,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    description: `Professional handyman services in ${city.name}, CA. ${city.segment}.`,
    areaServed: {
      "@type": "City",
      name: city.name,
      addressRegion: "CA",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: "CA",
      addressCountry: "US",
    },
    knowsAbout: ["Concrete Block Walls", "Landscaping", "Construction Expertise", "Handyman Services"],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.website },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BUSINESS.website}/handyman` },
      { "@type": "ListItem", position: 3, name: `${city.name}, CA`, item: `${BUSINESS.website}/handyman/${slug}` },
    ],
  };

  const otherCities = CITIES.filter((c) => c.slug !== slug).slice(0, 4);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="city-h1"
      >
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/handyman">Service Areas</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{city.name}</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="trust-chip text-xs" style={{ backgroundColor: "rgba(193,80,46,0.3)", color: "#EDE6DC" }}>
              {city.segmentLabel}
            </span>
            <span className="trust-chip text-xs" style={{ backgroundColor: "rgba(193,80,46,0.3)", color: "#EDE6DC" }}>
              Pop. {city.population}
            </span>
          </div>
          <h1 id="city-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            {city.h1}
          </h1>
          <p className="text-orange-100/70 max-w-2xl text-lg mb-6">
            {city.intro.substring(0, 160)}…
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/book" className="btn-rust">
              Book Service in {city.name}
            </Link>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}>
              Call Now
            </a>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Main content */}
      <article className="section bg-cream">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Intro */}
              <section aria-labelledby="intro-heading">
                <h2 id="intro-heading" className="font-heading font-black text-2xl md:text-3xl text-espresso mb-4">
                  Handyman Services in {city.name}, CA
                </h2>
                <p className="text-[#6B5E52] leading-relaxed text-base">{city.intro}</p>
              </section>

              {/* Why Choose Us */}
              <section aria-labelledby="why-heading">
                <h2 id="why-heading" className="font-heading font-black text-2xl text-espresso mb-4">
                  Why {city.name} Residents Choose Us
                </h2>
                <p className="text-[#6B5E52] leading-relaxed">{city.whyChooseUs}</p>
              </section>

              {/* Neighborhoods */}
              <section aria-labelledby="neighborhoods-heading">
                <h2 id="neighborhoods-heading" className="font-heading font-black text-2xl text-espresso mb-4">
                  Serving All {city.name} Neighborhoods
                </h2>
                <div className="flex flex-wrap gap-2">
                  {city.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold"
                      style={{ backgroundColor: "#D8C4A8", color: "#2A211A" }}
                    >
                      <MapPinIcon size={12} aria-hidden="true" />
                      {n}
                    </span>
                  ))}
                </div>
              </section>

              {/* Common Issues */}
              <section aria-labelledby="issues-heading">
                <h2 id="issues-heading" className="font-heading font-black text-2xl text-espresso mb-4">
                  Common Home Repair Issues in {city.name}
                </h2>
                <p className="text-[#6B5E52] leading-relaxed">{city.commonIssues}</p>
              </section>

              {/* FAQs */}
              <section aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="font-heading font-black text-2xl text-espresso mb-6">
                  Frequently Asked Questions — {city.name}
                </h2>
                <FAQAccordion faqs={city.faqs} schemaId={`${BUSINESS.website}/handyman/${slug}#faqs`} />
              </section>

              {/* Internal links */}
              <section aria-label="Related pages">
                <h2 className="font-heading font-bold text-lg text-espresso mb-4">Explore More</h2>
                <div className="flex flex-wrap gap-3">
                  <Link href="/services" className="btn-outline text-sm py-2 px-4">All Services</Link>
                  <Link href="/services/aging-in-place" className="btn-outline text-sm py-2 px-4">Aging-in-Place</Link>
                  <Link href="/services/property-management" className="btn-outline text-sm py-2 px-4">Property Management</Link>
                  <Link href="/pricing" className="btn-outline text-sm py-2 px-4">Pricing</Link>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside aria-label="Quick contact and other cities">
              <div className="space-y-6 sticky top-32">
                {/* Quick lead form */}
                <LeadForm
                  variant="compact"
                  preselectedCity={city.name}
                  title={`Get an Estimate in ${city.name}`}
                  subtitle="Tell us your project — we respond same business day."
                />

                {/* Other cities */}
                <div className="card p-5">
                  <h3 className="font-heading font-bold text-espresso mb-4">Other Service Areas</h3>
                  <ul className="space-y-2">
                    {otherCities.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/handyman/${c.slug}`}
                          className="flex items-center gap-2 text-sm font-semibold text-[#6B5E52] hover:text-rust transition-colors"
                        >
                          <MapPinIcon size={12} aria-hidden="true" />
                          {c.name}, {c.state}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href="/handyman" className="text-sm font-bold text-rust hover:underline">
                        View All 9 Cities →
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Housing info */}
                <div className="card p-5">
                  <h3 className="font-heading font-bold text-espresso mb-3">About {city.name}</h3>
                  <div className="space-y-2 text-sm text-[#6B5E52]">
                    <div className="flex items-center gap-2">
                      <UsersIcon size={14} className="text-rust flex-shrink-0" />
                      <span>Population: {city.population}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <HomeIcon size={14} className="text-rust flex-shrink-0" />
                      <span>{city.housingEra}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon size={14} className="text-rust flex-shrink-0" />
                      <span>{city.state}</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <CTABand
        heading={`Ready to Book in ${city.name}?`}
        subheading={`Same-week service available. Concrete block walls, landscaping, construction expertise & flat-rate pricing.`}
      />
    </>
  );
}
