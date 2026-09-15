import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { LeadForm } from "@/components/LeadForm";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = {
  title: "Preparing Your Inland Empire Home for Summer Heat | KustomXworks",
  description:
    "Temperatures over 105°F are common across the Inland Empire. Here's the maintenance checklist every homeowner should run before summer arrives — from KustomXworks Handyman.",
  alternates: {
    canonical: `${BUSINESS.website}/blog/preparing-inland-empire-home-summer-heat`,
  },
};

export default function BlogPost1() {
  return (
    <>
      <section
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="post1-h1"
      >
        <div className="container-site max-w-3xl">
          <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/blog">Blog</Link><span>/</span>
            <span aria-current="page">Summer Prep</span>
          </nav>
          <span className="inline-block mb-3 text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: "#C1502E", color: "white" }}>
            Seasonal Tips
          </span>
          <h1 id="post1-h1" className="font-heading font-black text-3xl md:text-5xl text-white mb-4">
            Preparing Your Inland Empire Home for Summer Heat
          </h1>
          <p className="text-orange-100/60 text-sm">May 15, 2024 · 6 min read · By KustomXworks</p>
        </div>
      </section>

      <article className="section bg-cream" aria-label="Blog post content">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-slate max-w-none">
              <div className="space-y-6 text-[#4A3F36] leading-relaxed">
                <p className="text-lg font-semibold text-espresso">
                  The Inland Empire is no stranger to extreme heat. Corona, Moreno Valley, Perris, and the rest of the region routinely hit 105–115°F in July and August — and your home takes the full brunt of it. Here&rsquo;s the pre-summer maintenance checklist every Inland Empire homeowner should run before temperatures climb.
                </p>

                <h2 className="font-heading font-black text-2xl text-espresso mt-8 mb-3">1. Inspect and Re-Caulk All Exterior Penetrations</h2>
                <p>
                  The Inland Empire&rsquo;s heat is one of the most aggressive forces your home&rsquo;s exterior faces. UV radiation and daily temperature swings (70°F at night, 110°F at noon) cause exterior caulk to shrink, crack, and pull away from surfaces — especially around window frames, door frames, pipe penetrations, and where stucco meets wood trim.
                </p>
                <p>
                  Failed caulk is the #1 entry point for water damage during the brief but intense Inland Valley monsoon storms in late summer. Walk your exterior and look for gaps wider than a business card. Any gap you can fit a fingernail into needs to be re-caulked before July. Use an exterior-grade elastomeric caulk (not standard latex) for longevity in high-heat environments.
                </p>

                <h2 className="font-heading font-black text-2xl text-espresso mt-8 mb-3">2. Check and Clean AC Drain Lines</h2>
                <p>
                  Your HVAC unit works overtime in Inland Empire summers. One of the most common (and preventable) summer repair calls we get is a backed-up AC condensate drain line — the clog causes the drip pan to overflow and water damage to ceilings and walls, often discovered mid-August when the system finally shuts down.
                </p>
                <p>
                  A quick prevention step: locate your AC drain line (usually a PVC pipe near your outdoor unit or in a utility closet), pour a cup of diluted bleach or white vinegar down it, and flush with water. Do this in May before the heat hits. Also inspect the area around your indoor unit for any water stains from previous leaks.
                </p>

                <h2 className="font-heading font-black text-2xl text-espresso mt-8 mb-3">3. Inspect Stucco for Cracks</h2>
                <p>
                  Stucco is the dominant exterior finish on Inland Empire homes, and it responds poorly to extreme thermal cycling. Fine hairline cracks are cosmetic. But any crack you can insert a credit card into — especially horizontal cracks, cracks near corners, or cracks with a brown stain (indicating rust from rebar) — should be addressed before summer rain events.
                </p>
                <p>
                  We recommend a professional stucco inspection and repair in the spring for any home over 15 years old in the Inland Valley. A thorough elastomeric coat or targeted repairs now prevents far more expensive water intrusion repairs in the fall.
                </p>

                <h2 className="font-heading font-black text-2xl text-espresso mt-8 mb-3">4. Test All Door and Window Seals</h2>
                <p>
                  Conditioned air is expensive when summer electric bills are already pushing $400+ per month. Check that all exterior doors and windows seal completely — run your hand around the perimeter in the evening to feel for air leaks. Check door sweeps at the bottom of all exterior doors and replace weather-stripping if it compresses flat when the door closes (it should form a visible seal).
                </p>
                <p>
                  Sliding glass doors — common in Inland Empire homes — are particularly prone to seal degradation. The track rollers and weather-stripping take constant UV and heat damage. A properly sealed sliding door can meaningfully reduce your cooling load.
                </p>

                <h2 className="font-heading font-black text-2xl text-espresso mt-8 mb-3">5. Check Attic Ventilation</h2>
                <p>
                  In Inland Empire summers, attic temperatures can exceed 160°F without proper ventilation. That heat radiates down into your living space, forces your AC to work harder, and dramatically shortens roof shingle life. Verify that your soffit and ridge vents are unobstructed. If your attic runs more than 30°F above the outside temperature on a hot day, it&rsquo;s under-ventilated.
                </p>
                <p>
                  This is also a good time to verify that attic insulation is properly distributed — not bunched up against vents, and providing adequate R-value for your region (R-38 minimum for the Inland Valley).
                </p>

                <h2 className="font-heading font-black text-2xl text-espresso mt-8 mb-3">Summer Prep Checklist — Quick Reference</h2>
                <ul className="list-none space-y-2 my-4">
                  {[
                    "Re-caulk all exterior window and door frames",
                    "Flush AC condensate drain line with diluted bleach",
                    "Inspect stucco for cracks wider than a credit card",
                    "Test all exterior door seals and replace worn weather-stripping",
                    "Check attic ventilation — soffit and ridge vents clear",
                    "Check door sweeps on all exterior doors",
                    "Inspect deck and patio for sun/heat damage",
                    "Check irrigation system for broken heads before heat increases evaporation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[#4A3F36]">
                      <span className="w-5 h-5 rounded-full bg-rust text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="card p-6 border-l-4 my-8" style={{ borderColor: "#C1502E" }}>
                  <h3 className="font-heading font-bold text-espresso mb-2">Need Help with Summer Prep?</h3>
                  <p className="text-sm text-[#6B5E52]">
                    KustomXworks can handle your entire pre-summer checklist in a single visit — caulking, door seals, weather-stripping, and more. We serve all 9 Inland Empire and Coachella Valley cities.
                  </p>
                  <Link href="/book" className="btn-rust mt-4 text-sm inline-flex">
                    Book a Summer Prep Visit →
                  </Link>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <LeadForm
                variant="compact"
                title="Book Summer Prep Service"
                subtitle="We'll handle your whole pre-summer checklist."
              />
            </aside>
          </div>
        </div>
      </article>

      <CTABand heading="Ready for Summer?" subheading="Book your pre-summer maintenance visit before July — schedule fills fast." />
    </>
  );
}
