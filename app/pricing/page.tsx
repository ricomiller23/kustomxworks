import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Transparent Pricing | KustomXworks Handyman",
  description:
    "Flat-rate handyman pricing with no surprises. Representative service pricing for the Inland Empire & Coachella Valley. Free estimates always available.",
  alternates: { canonical: `${BUSINESS.website}/pricing` },
};

const priceGroups = [
  {
    category: "Drywall & Paint",
    items: [
      { service: "Small hole patch (doorknob size)", price: "$95 – $145", note: "Typical" },
      { service: "Medium hole patch (up to 8\")", price: "$145 – $195", note: "Typical" },
      { service: "Large hole patch (up to 16\")", price: "$195 – $295", note: "Typical" },
      { service: "Interior room painting (standard)", price: "Custom Quote", note: "Free Estimate" },
    ],
  },
  {
    category: "Plumbing (Minor)",
    items: [
      { service: "Faucet replacement (labor)", price: "$125 – $185", note: "Typical" },
      { service: "Toilet repair (flapper/fill valve)", price: "$95 – $145", note: "Typical" },
      { service: "Shower head replacement", price: "$75 – $115", note: "Typical" },
      { service: "Garbage disposal install", price: "$145 – $225", note: "Typical" },
    ],
  },
  {
    category: "Electrical (Minor)",
    items: [
      { service: "GFCI outlet install", price: "$95 – $135", note: "Typical" },
      { service: "Light fixture swap", price: "$115 – $175", note: "Typical" },
      { service: "Ceiling fan install (existing box)", price: "$145 – $225", note: "Typical" },
    ],
  },
  {
    category: "Carpentry & Custom Millwork",
    items: [
      { service: "Door adjustment/alignment", price: "$85 – $125", note: "Typical" },
      { service: "Door hardware replacement (per door)", price: "$65 – $95", note: "Typical" },
      { service: "Flush TV mounting & cable concealment", price: "$125 – $195", note: "Typical" },
      { service: "Custom Slat Walls & 3D Wave Walls", price: "Custom Quote", note: "Design Consult" },
    ],
  },
  {
    category: "Aging-in-Place Safety",
    items: [
      { service: "Grab bar install (per bar, blocking verified)", price: "$95 – $145", note: "Typical" },
      { service: "Handrail install (per flight)", price: "$185 – $285", note: "Typical" },
      { service: "Lever handle replacement (per door)", price: "$65 – $95", note: "Typical" },
      { service: "Home safety walkthrough assessment", price: "FREE", note: "Complimentary" },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="pricing-h1"
      >
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
            <Link href="/">Home</Link><span>/</span>
            <span aria-current="page">Pricing</span>
          </nav>
          <h1 id="pricing-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Transparent Flat-Rate Pricing
          </h1>
          <p className="text-orange-100/70 text-lg max-w-2xl">
            We believe you deserve to know what something costs before we start. The menu below shows our typical flat-rate ranges. Every job receives a firm written quote before work begins.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-site">
          <div className="space-y-8">
            {priceGroups.map((group) => (
              <div key={group.category}>
                <h2 className="font-heading font-black text-xl text-espresso mb-4">{group.category}</h2>
                <div className="card overflow-hidden">
                  <table className="w-full text-sm" aria-label={`${group.category} pricing`}>
                    <thead>
                      <tr style={{ backgroundColor: "#2A211A", color: "#EDE6DC" }}>
                        <th className="text-left px-5 py-3 font-heading font-bold">Service</th>
                        <th className="text-right px-5 py-3 font-heading font-bold w-36">Flat Rate</th>
                        <th className="text-right px-5 py-3 font-heading font-bold w-24 hidden sm:table-cell">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {group.items.map((item, i) => (
                        <tr key={item.service} style={{ backgroundColor: i % 2 === 0 ? "white" : "#F7F1E8" }}>
                          <td className="px-5 py-3 text-espresso font-medium">{item.service}</td>
                          <td className="px-5 py-3 text-right font-bold text-rust whitespace-nowrap">{item.price}</td>
                          <td className="px-5 py-3 text-right hidden sm:table-cell">
                            {item.note && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-cream text-espresso border border-tan/60 font-semibold">
                                {item.note}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { title: "Free Flat-Rate Estimates", desc: "Always free, no obligation. We give you a firm, guaranteed price before starting." },
              { title: "No Hidden Fees", desc: "The price we quote is the price you pay. Never any surprise add-ons." },
              { title: "Standard Materials Included", desc: "Most minor repairs include standard fasteners and adhesives. Specialty materials are itemized transparently." },
            ].map((p) => (
              <div key={p.title} className="card p-6 text-center">
                <h3 className="font-heading font-bold text-espresso mb-2">{p.title}</h3>
                <p className="text-sm text-[#6B5E52]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        heading="Get Your Custom Quote"
        subheading="Every project is unique. Tell us what you need and we'll give you a firm flat-rate price."
      />
    </>
  );
}
