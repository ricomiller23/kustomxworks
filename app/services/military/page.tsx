import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { LeadForm } from "@/components/LeadForm";
import { TrustStrip } from "@/components/TrustStrip";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Military Handyman Discount | KustomXworks — 15% Off for Active Duty & Veterans",
  description:
    "15% military discount, PCS move-in/out repair packages, background-checked pros. KustomXworks proudly serves military families at March ARB, Moreno Valley & across the Inland Empire.",
  alternates: { canonical: `${BUSINESS.website}/services/military` },
};

export default function MilitaryPage() {
  return (
    <>
      <section
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="mil-h1"
      >
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/services">Services</Link><span>/</span>
            <span aria-current="page">Military</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 rounded-full text-sm font-bold" style={{ backgroundColor: "#C1502E", color: "white" }}>
              🎖️ 15% Military Discount
            </span>
            <span className="inline-block px-3 py-1 rounded-full text-sm font-bold bg-white/15 text-orange-100 border border-white/20">
              🇺🇸 Proud Work for Proud Americans
            </span>
          </div>
          <h1 id="mil-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-3">
            Military Move &amp; Repair Package
          </h1>
          <p className="text-orange-100 font-heading font-bold text-lg mb-2">
            Where Quality Meets American Strength — Professional Work. Patriotic Values.
          </p>
          <p className="text-orange-100/70 text-base max-w-2xl mb-6">
            Proudly serving active duty, veterans, and their families. PCS move-in/out packages, background-checked techs, honest flat-rate pricing — and 15% off, always.
          </p>
          <Link href="/book?service=Military+Package" className="btn-rust">
            Book Military Package
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
                  Service Members Deserve Better
                </h2>
                <p className="text-[#6B5E52] leading-relaxed mb-4">
                  The PCS clock is relentless — you have a reporting date, a housing inspection, and about 72 hours to make a new house livable for your family. KustomXworks knows this. We prioritize military PCS scheduling, work fast without cutting corners, and bring the documentation you need for housing inspections and landlord move-out requirements.
                </p>
                <p className="text-[#6B5E52] leading-relaxed">
                  Every technician is background-checked. Every quote is flat-rate. No bait-and-switch, no up-charging because you&rsquo;re in a hurry. That&rsquo;s our commitment to the families who serve.
                </p>
              </div>

              <div>
                <h2 className="font-heading font-black text-2xl text-espresso mb-5">PCS Package Includes</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "📋", title: "Move-In Walk-Through", desc: "We document existing conditions and identify immediate repair needs." },
                    { icon: "🔧", title: "Priority Repair Scheduling", desc: "Fast-tracked scheduling around your PCS date. We work on your timeline." },
                    { icon: "🛡️", title: "Background-Checked Techs", desc: "Every technician is vetted — required for proximity to military families." },
                    { icon: "📸", title: "Move-Out Documentation", desc: "Photo documentation of repairs for housing inspections and landlord records." },
                    { icon: "💰", title: "15% Military Discount", desc: "Active duty & veterans (ID required). Applied to all services." },
                    { icon: "📞", title: "Dedicated Priority Line", desc: "PCS clients get priority scheduling. Just mention your reporting date." },
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

              <div className="card p-6 border-l-4" style={{ borderColor: "#C1502E" }}>
                <h3 className="font-heading font-bold text-xl text-espresso mb-2">March ARB & Moreno Valley</h3>
                <p className="text-[#6B5E52] text-sm leading-relaxed">
                  We serve the Moreno Valley / March Air Reserve Base corridor with the highest priority. If you&rsquo;re PCSing to or from March ARB, call us the moment you have your reporting date — we&rsquo;ll hold a slot for you.
                </p>
                <Link href="/handyman/moreno-valley" className="text-rust font-bold text-sm mt-3 inline-block">
                  View Moreno Valley Service Page →
                </Link>
              </div>
            </div>

            <aside>
              <LeadForm
                variant="compact"
                preselectedService="Military Package"
                title="Book Your Military Package"
                subtitle="Mention your reporting date and we'll prioritize your slot."
              />
            </aside>
          </div>
        </div>
      </section>

      <CTABand
        heading="Serving Those Who Serve"
        subheading="15% military discount on every service. PCS scheduling available. Book today."
      />
    </>
  );
}
