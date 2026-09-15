import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { LeadForm } from "@/components/LeadForm";
import { TrustStrip } from "@/components/TrustStrip";
import { CTABand } from "@/components/CTABand";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Vacation Rental Handyman Services | KustomXworks — Palm Springs & Temecula STR",
  description:
    "Same-day vacation rental repairs, photo documentation, pre-season inspections, and remote-owner updates. KustomXworks is the STR handyman partner for Palm Springs, Temecula & more.",
  alternates: { canonical: `${BUSINESS.website}/services/vacation-rental` },
};

const faqs = [
  {
    question: "How fast can you respond to a guest-impacting repair?",
    answer: "For STR Priority clients, we target same-day response for guest-impacting repairs (broken A/C, toilet, door, appliance). We dispatch, fix, and send you photos — all before your next check-in.",
  },
  {
    question: "I manage my rental remotely. How will I know what was done?",
    answer: "Every job includes before-and-after photos emailed directly to you with a brief description of what was repaired and what materials were used. Nothing is left to guesswork.",
  },
  {
    question: "Do you offer pre-season inspections?",
    answer: "Yes. We offer a 30-point pre-season walk-through covering all plumbing fixtures, doors, windows, appliances, outdoor furniture, and HVAC clearance. Book at least 2 weeks before your peak season.",
  },
  {
    question: "Can you handle repairs between guest checkouts and check-ins?",
    answer: "That's our specialty. Tell us your check-in window and we'll work within it. We carry our own key codes or can coordinate with your cleaning service.",
  },
];

export default function VacationRentalPage() {
  return (
    <>
      <section
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="str-h1"
      >
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/services">Services</Link><span>/</span>
            <span aria-current="page">Vacation Rental</span>
          </nav>
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-bold" style={{ backgroundColor: "#C1502E", color: "white" }}>
            🏖️ STR Priority Service
          </span>
          <h1 id="str-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Vacation Rental Handyman Services
          </h1>
          <p className="text-orange-100/70 text-lg max-w-2xl mb-6">
            Same-day response, remote-owner photo updates, pre-season inspections, and guest-ready turnovers. Your Superhost rating is safe with us.
          </p>
          <Link href="/book?service=Vacation+Rental" className="btn-rust">
            Set Up STR Priority Service
          </Link>
        </div>
      </section>

      <TrustStrip />

      <section className="section bg-cream">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-heading font-black text-2xl md:text-3xl text-espresso mb-4">
                  Built for Airbnb &amp; VRBO Hosts
                </h2>
                <p className="text-[#6B5E52] leading-relaxed mb-4">
                  One bad guest experience can cost you your Superhost status. A broken toilet at 8PM on a Friday, a sliding door that won&rsquo;t lock, an A/C that stopped cooling before a 110-degree Palm Springs weekend — these aren&rsquo;t emergencies you can put off. KustomXworks is the STR handyman partner that actually picks up and shows up.
                </p>
                <p className="text-[#6B5E52] leading-relaxed">
                  We serve vacation rental owners and remote hosts in Palm Springs, Temecula, and across all 9 of our service cities. Whether you live 5 miles or 500 miles from your property, we give you the eyes and hands on the ground you need.
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-heading font-black text-2xl text-espresso mb-5">What We Offer STR Hosts</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "⚡", title: "Same-Day Response", desc: "Guest-impacting repairs dispatched same-day. We don't wait for business hours." },
                    { icon: "📸", title: "Remote-Owner Photo Updates", desc: "Before/after photos emailed directly to you after every job." },
                    { icon: "🔍", title: "Pre-Season Inspections", desc: "30-point walk-through before your peak season. Catch issues before guests do." },
                    { icon: "🧹", title: "Turnover Coordination", desc: "We coordinate with your cleaner for seamless between-guest repairs." },
                    { icon: "🗝️", title: "Key/Code Access", desc: "Keypad codes, lockboxes, or cleaners — we work with your access system." },
                    { icon: "📋", title: "Maintenance Plans", desc: "Quarterly preventive maintenance to keep your listing 5-star ready." },
                  ].map((f) => (
                    <div key={f.title} className="card p-5 flex gap-4">
                      <div className="text-2xl" aria-hidden="true">{f.icon}</div>
                      <div>
                        <h3 className="font-heading font-bold text-espresso mb-1">{f.title}</h3>
                        <p className="text-sm text-[#6B5E52]">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading font-black text-2xl text-espresso mb-6">FAQ</h2>
                <FAQAccordion faqs={faqs} />
              </div>
            </div>

            <aside className="space-y-6">
              <LeadForm
                variant="compact"
                preselectedService="Vacation Rental"
                title="Set Up STR Priority Service"
                subtitle="Tell us about your property — we'll set up your priority account same day."
              />
            </aside>
          </div>
        </div>
      </section>

      <CTABand heading="Keep Your Guests Happy — And Your Reviews 5 Stars" />
    </>
  );
}
