import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { CITIES } from "@/content/cities";

export const metadata: Metadata = {
  title: "Project Gallery | KustomXworks Handyman",
  description:
    "Before-and-after photos of handyman projects across the Inland Empire & Coachella Valley. Drywall, carpentry, plumbing, aging-in-place, and more.",
  alternates: { canonical: `${BUSINESS.website}/gallery` },
};

// Placeholder gallery items — replace with real photos
const galleryItems = [
  { title: "Drywall Repair", location: "Corona, CA", before: "drywall-repair-corona-ca-before.jpg", after: "drywall-repair-corona-ca-after.jpg", category: "drywall" },
  { title: "Grab Bar Installation", location: "Hemet, CA", before: "grab-bar-install-hemet-ca-before.jpg", after: "grab-bar-install-hemet-ca-after.jpg", category: "aging-in-place" },
  { title: "Fence Repair", location: "Norco, CA", before: "fence-repair-norco-ca-before.jpg", after: "fence-repair-norco-ca-after.jpg", category: "exterior" },
  { title: "Bathroom Caulking", location: "Murrieta, CA", before: "bathroom-caulk-murrieta-ca-before.jpg", after: "bathroom-caulk-murrieta-ca-after.jpg", category: "interior" },
  { title: "TV Mounting", location: "Temecula, CA", before: "tv-mount-temecula-ca-before.jpg", after: "tv-mount-temecula-ca-after.jpg", category: "interior" },
  { title: "Door Hardware Upgrade", location: "Palm Springs, CA", before: "door-hardware-palm-springs-ca-before.jpg", after: "door-hardware-palm-springs-ca-after.jpg", category: "interior" },
  { title: "Deck Repair", location: "Beaumont, CA", before: "deck-repair-beaumont-ca-before.jpg", after: "deck-repair-beaumont-ca-after.jpg", category: "exterior" },
  { title: "Turnover Repairs", location: "Perris, CA", before: "turnover-perris-ca-before.jpg", after: "turnover-perris-ca-after.jpg", category: "property-management" },
  { title: "Ceiling Fan Install", location: "Moreno Valley, CA", before: "ceiling-fan-moreno-valley-ca-before.jpg", after: "ceiling-fan-moreno-valley-ca-after.jpg", category: "electrical" },
];

const categories = ["all", "interior", "exterior", "aging-in-place", "drywall", "electrical", "property-management"];

export default function GalleryPage() {
  return (
    <>
      <section
        className="py-14 px-6"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
        aria-labelledby="gallery-h1"
      >
        <div className="container-site">
          <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
            <Link href="/">Home</Link><span>/</span>
            <span aria-current="page">Gallery</span>
          </nav>
          <h1 id="gallery-h1" className="font-heading font-black text-4xl md:text-5xl text-white mb-3">
            Project Gallery
          </h1>
          <p className="text-orange-100/70 text-lg">
            Before-and-after photos of real projects across the Inland Empire &amp; Coachella Valley.
          </p>
        </div>
      </section>

      <section className="section bg-cream" aria-label="Gallery">
        <div className="container-site">
          {/* Notice about placeholder images */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
            <strong>📸 Photo placeholder:</strong> Replace these placeholder cards with your real before/after project photos. Name photos using the format: <code>service-city-state-before.jpg</code> for best SEO. Store in <code>/public/gallery/</code>.
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article
                key={item.title + item.location}
                className="card overflow-hidden"
                aria-label={`${item.title} in ${item.location}`}
              >
                {/* Placeholder image block */}
                <div
                  className="relative h-48 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #D8C4A8, #C1502E22)" }}
                  aria-label={`Before and after: ${item.title}`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2" aria-hidden="true">📸</div>
                    <p className="text-xs font-semibold text-[#6B5E52]">
                      Replace with: <br />
                      <code className="text-rust text-[10px]">{item.after}</code>
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-espresso">{item.title}</h3>
                  <p className="text-sm text-[#6B5E52]">{item.location}</p>
                  <span
                    className="inline-block mt-2 text-xs font-semibold px-2 py-0.5 rounded-full capitalize"
                    style={{ backgroundColor: "#D8C4A8", color: "#2A211A" }}
                  >
                    {item.category.replace("-", " ")}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/book" className="btn-rust">
              Book Your Project Today
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
