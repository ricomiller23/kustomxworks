import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Transparent Pricing | KustomXworks Handyman",
  description:
    "Flat-rate handyman pricing with no surprises. Sample service price menu for the Inland Empire & Coachella Valley. Free estimates always available.",
  alternates: { canonical: `${BUSINESS.website}/pricing` },
};

const priceGroups = [
  {
    category: "Drywall & Paint",
    items: [
      { service: "Small hole patch (doorknob size)", price: "{{PRICE_DRYWALL_SM}}", note: "Sample" },
      { service: "Medium hole patch (up to 8\")", price: "{{PRICE_DRYWALL_MD}}", note: "Sample" },
      { service: "Large hole patch (up to 16\")", price: "{{PRICE_DRYWALL_LG}}", note: "Sample" },
      { service: "Interior room painting (standard)", price: "{{PRICE_PAINT_ROOM}}", note: "Sample" },
    ],
  },
  {
    category: "Plumbing (Minor)",
    items: [
      { service: "Faucet replacement (parts not included)", price: "{{PRICE_FAUCET}}", note: "Sample" },
      { service: "Toilet repair (flapper/fill valve)", price: "{{PRICE_TOILET}}", note: "Sample" },
      { service: "Shower head replacement", price: "{{PRICE_SHOWER}}", note: "Sample" },
      { service: "Garbage disposal install", price: "{{PRICE_DISPOSAL}}", note: "Sample" },
    ],
  },
  {
    category: "Electrical (Minor)",
    items: [
      { service: "GFCI outlet install", price: "{{PRICE_GFCI}}", note: "Sample" },
      { service: "Light fixture swap", price: "{{PRICE_FIXTURE}}", note: "Sample" },
      { service: "Ceiling fan install (existing box)", price: "{{PRICE_FAN}}", note: "Sample" },
    ],
  },
  {
    category: "Carpentry & Doors",
    items: [
      { service: "Door adjustment/alignment", price: "{{PRICE_DOOR_ADJ}}", note: "Sample" },
      { service: "Door hardware replacement (per door)", price: "{{PRICE_DOOR_HW}}", note: "Sample" },
      { service: "TV mounting (flat, no wiring)", price: "{{PRICE_TV_MOUNT}}", note: "Sample" },
    ],
  },
  {
    category: "Aging-in-Place",
    items: [
      { service: "Grab bar install (per bar)", price: "{{PRICE_GRAB_BAR}}", note: "Sample" },
      { service: "Handrail install (per flight)", price: "{{PRICE_HANDRAIL}}", note: "Sample" },
      { service: "Lever handle replacement (per door)", price: "{{PRICE_LEVER}}", note: "Sample" },
      { service: "Free home safety assessment", price: "FREE", note: "" },
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
            We believe you deserve to know what something costs before we start. The sample menu below shows our typical flat-rate pricing. Every job gets a firm written quote before work begins.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container-site">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
            <strong>Note:</strong> Prices marked &ldquo;Sample&rdquo; are representative ranges and must be confirmed before booking. Actual price depends on scope, materials, and access. Prices marked <code>{"{{PRICE_...}}"}</code> are placeholders — confirm with your actual rates and replace in <code>content/business.ts</code>.
          </div>

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
                              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold">
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
              { title: "Free Estimates", desc: "Always free, no obligation. We'll give you a firm price before starting." },
              { title: "No Hidden Fees", desc: "The price we quote is the price you pay. No surprises after the job." },
              { title: "Materials Included", desc: "Most jobs include standard materials. Non-standard materials are itemized separately." },
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
