import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { LeadForm } from "@/components/LeadForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TrustStrip } from "@/components/TrustStrip";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Property Management Handyman Services | KustomXworks",
  description:
    "Flat-rate turnover repairs, 2-hour emergency response, photo documentation, Net-30 billing. KustomXworks is the trusted handyman partner for Perris, Moreno Valley & Inland Empire property managers.",
  alternates: { canonical: `${BUSINESS.website}/services/property-management` },
};

const menuItems = [
  { service: "Drywall Patch (single small)", price: "{{PRICE_DRYWALL_SM}}" },
  { service: "Drywall Patch (8\"×8\" area)", price: "{{PRICE_DRYWALL_LG}}" },
  { service: "Interior Door Hardware Replace", price: "{{PRICE_DOOR_HW}}" },
  { service: "Toilet Repair (flapper/fill valve)", price: "{{PRICE_TOILET}}" },
  { service: "GFCI Outlet Replace", price: "{{PRICE_GFCI}}" },
  { service: "Caulk Tub/Shower (re-caulk)", price: "{{PRICE_CAULK}}" },
  { service: "Lock Re-key (per lock)", price: "{{PRICE_REKEY}}" },
  { service: "Interior Paint Touch-Up (per room)", price: "{{PRICE_PAINT}}" },
];

const faqs = [
  {
    question: "What is your turnover response time?",
    answer: "For standard turnovers, we can typically schedule within 2–3 business days. For urgency-flagged vacancies, we offer priority scheduling. Emergency repairs (broken entry door, active leak) get a 2-hour response target.",
  },
  {
    question: "Do you provide documentation for owner reports?",
    answer: "Yes, always. Before-and-after photos are included with every work order. We can email them directly to you and your property owner in a structured format.",
  },
  {
    question: "What is the new PM account discount?",
    answer: "First 3 work orders for new property management accounts receive 20% off. After that, volume pricing applies for accounts placing 5+ orders per month.",
  },
  {
    question: "Do you offer Net-30 billing?",
    answer: "Yes, for verified property management companies. A brief account setup process (company info, insurance verification) is required. Contact us to apply.",
  },
  {
    question: "Can you handle multiple units simultaneously?",
    answer: "Yes. For large turnover events (3+ units), we schedule a block and can deploy multiple technicians. Contact us at least 5 days in advance for best results.",
  },
];

export default function PropertyManagementPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="pm-h1"
      >
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/services">Services</Link><span>/</span>
            <span aria-current="page">Property Management</span>
          </nav>
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-sm font-bold" style={{ backgroundColor: "#C1502E", color: "white" }}>
            🏢 B2B — First 3 Calls 20% Off
          </span>
          <h1 id="pm-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Property Management Handyman Services
          </h1>
          <p className="text-orange-100/70 text-lg max-w-2xl mb-6">
            One call covers every trade. Flat-rate turnover pricing, 2-hour emergency response, photo documentation, and Net-30 billing for Inland Empire property managers.
          </p>
          <Link href="/book?service=Property+Management" className="btn-rust">
            Set Up PM Account
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
                  Your One-Call Handyman Partner
                </h2>
                <p className="text-[#6B5E52] leading-relaxed mb-4">
                  Perris and Moreno Valley landlords know the math: every day a unit sits vacant after a turnover costs money. KustomXworks is built for the pace of property management — fast scheduling, flat-rate pricing you can plug straight into owner reports, and documentation that covers you every step of the way.
                </p>
                <p className="text-[#6B5E52] leading-relaxed">
                  We handle all trades in a single call: drywall, paint, plumbing fixtures, door hardware, lock re-key, appliance installation, and more. No more coordinating five different contractors for one turnover.
                </p>
              </div>

              {/* Service menu */}
              <div>
                <h2 className="font-heading font-black text-2xl text-espresso mb-2">Flat-Rate Turnover Menu</h2>
                <p className="text-sm text-[#6B5E52] mb-5">
                  <em>Sample prices — confirm with us for your specific scope. Prices marked in the PRICE column require your confirmation before launch.</em>
                </p>
                <div className="card overflow-hidden">
                  <table className="w-full text-sm" aria-label="Turnover service pricing menu">
                    <thead>
                      <tr style={{ backgroundColor: "#2A211A", color: "#EDE6DC" }}>
                        <th className="text-left px-5 py-3 font-heading font-bold">Service</th>
                        <th className="text-right px-5 py-3 font-heading font-bold">Flat Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {menuItems.map((item, i) => (
                        <tr key={item.service} style={{ backgroundColor: i % 2 === 0 ? "white" : "#F7F1E8" }}>
                          <td className="px-5 py-3 text-espresso font-medium">{item.service}</td>
                          <td className="px-5 py-3 text-right font-bold text-rust">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-heading font-black text-2xl text-espresso mb-5">PM Account Benefits</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "2-Hour Emergency Response", desc: "For urgent repairs that impact habitability." },
                    { label: "Photo Documentation", desc: "Before-and-after photos with every work order." },
                    { label: "Net-30 Billing", desc: "For verified PM accounts. Easy invoicing." },
                    { label: "First 3 Calls 20% Off", desc: "New PM accounts only. No strings." },
                    { label: "All Trades, One Call", desc: "Drywall, plumbing, electrical, hardware, more." },
                    { label: "Volume Discounts", desc: "For accounts placing 5+ orders per month." },
                  ].map((b) => (
                    <div key={b.label} className="card p-4 flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-rust text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                      <div>
                        <p className="font-heading font-bold text-espresso text-sm">{b.label}</p>
                        <p className="text-xs text-[#6B5E52]">{b.desc}</p>
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
                preselectedService="Property Management"
                title="Set Up a PM Account"
                subtitle="Tell us about your portfolio and we'll reach out same business day."
              />
            </aside>
          </div>
        </div>
      </section>

      <CTABand
        heading="Ready to Streamline Your Turnovers?"
        subheading="Set up a property management account today — first 3 calls are 20% off."
      />
    </>
  );
}
