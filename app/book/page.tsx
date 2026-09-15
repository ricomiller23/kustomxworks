import type { Metadata } from "next";
import { BookingWizard } from "@/components/BookingWizard";
import { BUSINESS } from "@/content/business";
import { PhoneIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Handyman Service | KustomXworks",
  description:
    "Book your handyman service online in minutes. 4-step booking wizard. Same-week appointments available. KustomXworks serves 9 cities across the Inland Empire & Coachella Valley.",
  alternates: { canonical: `${BUSINESS.website}/book` },
};

export default function BookPage() {
  return (
    <>
      {/* Page Hero */}
      <section
        className="py-12 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="book-heading"
      >
        <div className="container-site text-center">
          <h1 id="book-heading" className="font-heading font-black text-3xl md:text-5xl text-white mb-3">
            Book Your Service
          </h1>
          <p className="text-orange-100/70 text-lg mb-4">
            Complete the form below and we&rsquo;ll confirm your appointment within 2 hours.
          </p>
          <div className="flex items-center justify-center gap-2 text-orange-100/80">
            <PhoneIcon size={16} className="text-rust" />
            <span>Prefer to call?</span>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="font-bold text-white hover:text-rust transition-colors">
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Wizard */}
      <section className="section bg-cream" aria-label="Booking form">
        <div className="container-site">
          <BookingWizard />
        </div>
      </section>
    </>
  );
}
