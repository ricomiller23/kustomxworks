import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { CITIES } from "@/content/cities";
import { LeadForm } from "@/components/LeadForm";
import { PhoneIcon, MailIcon, ClockIcon, MapPinIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact KustomXworks Handyman | Inland Empire",
  description:
    "Contact KustomXworks Handyman Services for free estimates, scheduling, and inquiries. Phone, email, hours, and service area information.",
  alternates: { canonical: `${BUSINESS.website}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="contact-h1"
      >
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
            <Link href="/">Home</Link><span>/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <h1 id="contact-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-3">
            Get In Touch
          </h1>
          <p className="text-orange-100/70 text-lg">
            We respond to all inquiries same business day.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading font-black text-2xl text-espresso mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#D8C4A8" }}>
                      <PhoneIcon size={20} className="text-rust" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-espresso mb-1">Phone</p>
                      <a href={`tel:${BUSINESS.phoneRaw}`} className="text-rust font-bold text-lg hover:underline">
                        {BUSINESS.phone}
                      </a>
                      <p className="text-sm text-[#6B5E52]">{BUSINESS.hours.emergency}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#D8C4A8" }}>
                      <MailIcon size={20} className="text-rust" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-espresso mb-1">Email</p>
                      <a href={`mailto:${BUSINESS.email}`} className="text-rust hover:underline">
                        {BUSINESS.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#D8C4A8" }}>
                      <ClockIcon size={20} className="text-rust" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-espresso mb-1">Hours</p>
                      <p className="text-[#6B5E52]">{BUSINESS.hours.weekdays}</p>
                      <p className="text-[#6B5E52]">{BUSINESS.hours.sunday}</p>
                      <p className="font-semibold text-espresso text-sm">{BUSINESS.hours.emergency}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#D8C4A8" }}>
                      <MapPinIcon size={20} className="text-rust" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-espresso mb-2">Service Areas</p>
                      <div className="flex flex-wrap gap-1.5">
                        {CITIES.map((city) => (
                          <Link
                            key={city.slug}
                            href={`/handyman/${city.slug}`}
                            className="text-xs font-semibold px-2 py-1 rounded-full hover:bg-rust hover:text-white transition-colors"
                            style={{ backgroundColor: "#D8C4A8", color: "#2A211A" }}
                          >
                            {city.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Licensing */}
              <div className="card p-5 border-l-4" style={{ borderColor: "#C1502E" }}>
                <h3 className="font-heading font-bold text-espresso mb-2">Concrete Block Walls, Landscaping &amp; Construction</h3>
                <p className="text-sm text-[#6B5E52]">
                  Specializing in structural masonry, perimeter concrete block walls, drought-tolerant desert landscaping, and full construction repairs across the Inland Empire & Coachella Valley.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <LeadForm
                title="Send Us a Message"
                subtitle="Fill out the form and we'll respond same business day."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
