import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Customer Reviews | KustomXworks Handyman",
  description: `${BUSINESS.rating}-star rated handyman services across the Inland Empire & Coachella Valley. Read real reviews from ${BUSINESS.reviewCount} happy customers.`,
  alternates: { canonical: `${BUSINESS.website}/reviews` },
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
    bestRating: "5",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <section
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="reviews-h1"
      >
        <div className="container-site text-center">
          <h1 id="reviews-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-3">
            Customer Reviews
          </h1>
          <div className="flex items-center justify-center gap-2 text-amber-400 text-2xl mb-2" aria-label={`${BUSINESS.rating} stars`}>
            ★★★★★
          </div>
          <p className="text-orange-100/70 text-lg">
            {BUSINESS.rating} stars · {BUSINESS.reviewCount} reviews
          </p>
        </div>
      </section>

      <section className="section bg-cream" aria-labelledby="testimonials-heading">
        <div className="container-site">
          <h2 id="testimonials-heading" className="font-heading font-black text-2xl text-espresso mb-8">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {BUSINESS.testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          {/* Google reviews CTA */}
          <div className="card p-8 text-center max-w-xl mx-auto">
            <div className="text-4xl mb-3" aria-hidden="true">⭐</div>
            <h3 className="font-heading font-bold text-2xl text-espresso mb-2">Leave Us a Review</h3>
            <p className="text-[#6B5E52] mb-6">
              Happy with our service? A Google review helps other Inland Empire homeowners find us — and we&rsquo;d be truly grateful.
            </p>
            {/* GA4 / GTM placeholder */}
            {/* Replace href with your actual Google Business Profile review URL */}
            <a
              href="https://g.page/r/{{GOOGLE_PLACE_ID}}/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rust"
            >
              Leave a Google Review →
            </a>
            <p className="text-xs text-[#6B5E52] mt-3">
              Replace <code>{"{{GOOGLE_PLACE_ID}}"}</code> with your Google Place ID in the link above.
            </p>
          </div>
        </div>
      </section>

      <CTABand heading="Join Thousands of Happy Homeowners" />
    </>
  );
}
