import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { CTABand } from "@/components/CTABand";
import { PhoneIcon, CheckCircle2Icon, SparklesIcon, HammerIcon, MapPinIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Project Gallery | Custom Slat Walls, Masonry & Handyman Projects",
  description:
    "Explore real projects by KustomXworks: custom 3D parametric wave walls, Scandinavian oak slat media walls, backlit marble entertainment centers, concrete block walls, and handyman transformations across the Inland Empire & Coachella Valley.",
  alternates: { canonical: `${BUSINESS.website}/gallery` },
};

interface MasterProject {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  alt: string;
  description: string;
  highlights: string[];
  specs: {
    materials: string;
    timeline: string;
    features: string;
  };
}

const masterProjects: MasterProject[] = [
  {
    id: "parametric-wave-wall",
    title: "Custom 3D Parametric Wave Wall Sculpture",
    category: "Architectural Millwork & Accent Walls",
    location: "Palm Springs, CA",
    image: "/projects/parametric-wave-wall.jpg",
    alt: "Parametric 3D wooden wave wall sculpture with warm golden LED backlighting in a modern architectural lounge",
    description:
      "Precision-engineered parametric timber wave wall featuring flowing organic contours and concealed warm 2700K golden LED illumination channels. Created for luxury residential foyers and modern commercial reception spaces requiring high acoustic dampening and striking visual impact.",
    highlights: ["Flowing 3D Parametric Curves", "Concealed 2700K LED Illumination", "Acoustic Dampening"],
    specs: {
      materials: "Selected architectural hardwoods, acoustic backing, low-voltage linear LED channels",
      timeline: "Custom fabrication & installation: 3-5 business days",
      features: "Concealed fasteners, dimmable ambient glow, precision continuous grain alignment",
    },
  },
  {
    id: "oak-slat-media-wall",
    title: "Natural White Oak Slat Wall & Floating Media Credenza",
    category: "Custom Slat Walls & Entertainment Centers",
    location: "Temecula, CA",
    image: "/projects/oak-slat-media-wall.jpg",
    alt: "Floor to ceiling natural white oak vertical slat wall with flush mounted television and custom white floating media credenza",
    description:
      "Floor-to-ceiling Scandinavian natural white oak vertical acoustic slats with complete in-wall AV cable concealment, flush TV mount, and a seamless 3-bay floating matte white storage credenza accented with brushed brass hardware.",
    highlights: ["Natural White Oak Timber", "In-Wall Cable Concealment", "Floating 3-Bay Credenza"],
    specs: {
      materials: "Solid American White Oak slats, high-density acoustic felt, lacquered cabinetry",
      timeline: "Complete build & installation: 2 business days",
      features: "Zero-sag heavy-duty cleat mounting, soft-close hardware, hidden cable pass-throughs",
    },
  },
  {
    id: "charcoal-fireplace-slat-wall",
    title: "Charcoal Slat Accent Wall with Calacatta Marble & Fireplace",
    category: "Luxury Feature Walls & Fireplace Suites",
    location: "Corona, CA",
    image: "/projects/charcoal-fireplace-slat-wall.jpg",
    alt: "Full height dark charcoal vertical slat wall with polished Calacatta marble TV panel and built-in electric ribbon flame fireplace credenza",
    description:
      "Deep charcoal vertical acoustic slat feature wall anchored by a polished Calacatta marble slab TV mounting panel, warm halo LED backlighting, and a built-in recessed electric ribbon flame fireplace credenza.",
    highlights: ["Polished Calacatta Marble Backer", "Integrated Electric Ribbon Fireplace", "Deep Charcoal Finish"],
    specs: {
      materials: "Pre-finished charcoal acoustic slats, honed Calacatta porcelain slab, 60-inch electric ribbon fireplace",
      timeline: "Full installation & electrical integration: 3 business days",
      features: "Independent heating & flame controls, flush surface alignment, sound-dampening acoustic felt",
    },
  },
  {
    id: "luxury-backlit-entertainment-center",
    title: "Backlit Calacatta Marble & Black Slat Entertainment Center",
    category: "Architectural Millwork & Designer Media Walls",
    location: "Moreno Valley, CA",
    image: "/projects/luxury-backlit-entertainment-center.jpg",
    alt: "Modern luxury living room entertainment center with black acoustic slats, backlit Calacatta marble slab, TV mount, and floating console",
    description:
      "Statement architectural entertainment center featuring textured matte black acoustic slats, bookmatched Calacatta marble mounting backer with hidden ambient 3000K LED perimeter illumination, dual vertical brass sconces, and floating media console.",
    highlights: ["Ambient Halo Backlighting", "Dual Architectural Brass Sconces", "Floating Low-Profile Media Credenza"],
    specs: {
      materials: "Acoustic matte black slats, polished Calacatta marble panel, architectural brass sconces, low-profile credenza",
      timeline: "Custom design & installation: 2-3 business days",
      features: "Warm perimeter halo lighting, integrated low-voltage power supply, complete wire management",
    },
  },
];

const generalProjects = [
  {
    title: "Reinforced Concrete Block Retaining Wall",
    location: "Norco, CA",
    category: "Concrete Block Walls",
    description: "Multi-tiered precision structural retaining wall with steel rebar reinforcement, solid concrete grout fill, and waterproof backfill drainage.",
    badge: "Structural Masonry",
    icon: "🧱",
  },
  {
    title: "Desert Modern Drought-Tolerant Landscaping",
    location: "Palm Springs, CA",
    category: "Custom Landscaping",
    description: "Complete outdoor renovation featuring premium artificial turf, decorative desert decomposed granite, drip irrigation, and custom paver walkway.",
    badge: "Outdoor Living",
    icon: "🌴",
  },
  {
    title: "ADA Barrier-Free Shower & Safety Grab Bars",
    location: "Murrieta, CA",
    category: "Aging-in-Place",
    description: "Solid blocking-reinforced grab bar installation, comfort-height hardware, handheld shower fixture, and non-slip threshold transition.",
    badge: "Accessibility",
    icon: "🛡️",
  },
  {
    title: "Drywall Water Damage Repair & Texture Matching",
    location: "Corona, CA",
    category: "Drywall & Painting",
    description: "Full ceiling and wall cutout repair following a plumbing leak. Seamless orange peel texture blending, primer coat, and color-matched paint finish.",
    badge: "Flawless Blend",
    icon: "🎨",
  },
  {
    title: "Low-Voltage Flush TV Mounting & Wire Concealment",
    location: "Temecula, CA",
    category: "Interior AV Mounting",
    description: "75-inch OLED display mounted flush with recessed low-voltage power kit, HDMI in-wall routing, and soundbar cleat mount.",
    badge: "Zero Visible Wires",
    icon: "📺",
  },
  {
    title: "Commercial Tenant Turnover & Woodwork Repair",
    location: "Perris, CA",
    category: "Property Management",
    description: "Comprehensive 48-hour turn: baseboard replacement, door rehanging, commercial lockset upgrade, and drywall punch list completion.",
    badge: "Same-Week Turn",
    icon: "🏢",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="py-16 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 40%, #3D2C1F 100%)" }}
        aria-labelledby="gallery-h1"
      >
        <div className="container-site relative z-10">
          <nav aria-label="Breadcrumb" className="breadcrumb mb-4">
            <Link href="/" className="text-orange-200/80 hover:text-white transition-colors">Home</Link>
            <span className="text-orange-300/40">/</span>
            <span aria-current="page" className="text-orange-100 font-semibold">Gallery</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rust/30 border border-rust/50 text-orange-100 text-xs font-semibold uppercase tracking-wider mb-4">
              <SparklesIcon size={14} className="text-rust" />
              <span>Real Portfolio of Work</span>
            </div>

            <h1 id="gallery-h1" className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight">
              Project Gallery &amp; Craftsmanship
            </h1>

            <p className="text-orange-100/80 text-lg sm:text-xl leading-relaxed mb-6">
              From one-of-a-kind 3D parametric wave walls and luxury acoustic slat entertainment centers to heavy-duty concrete block walls and turnkey home improvements across the Inland Empire &amp; Coachella Valley.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/book?service=Custom%20Slat%20Walls" className="btn-rust">
                Request Custom Build Quote
              </Link>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="btn-outline"
                style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MASTERPIECE FEATURED PROJECTS ── */}
      <section className="section bg-[#FAF6F0]" aria-labelledby="featured-projects-heading">
        <div className="container-site">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-rust font-bold text-xs uppercase tracking-widest bg-rust/10 px-3.5 py-1 rounded-full inline-block mb-3">
              Master Architectural Millwork &amp; Accent Walls
            </span>
            <h2 id="featured-projects-heading" className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-espresso mb-4">
              Signature Slat Walls &amp; Entertainment Centers
            </h2>
            <p className="text-[#6B5E52] text-base sm:text-lg">
              Every detail is measured, leveled, and custom-crafted for precision fitment, acoustic enhancement, and luxury ambient lighting.
            </p>
          </div>

          <div className="space-y-16">
            {masterProjects.map((project, idx) => (
              <article
                key={project.id}
                id={project.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#D8C4A8]/40 shadow-xl hover:shadow-2xl transition-all duration-300"
                aria-label={project.title}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  {/* Image Column */}
                  <div className={`lg:col-span-7 relative group overflow-hidden bg-black/90 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Floating badge */}
                    <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-lg">
                      <MapPinIcon size={13} className="text-rust" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className={`lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-rust bg-rust/10 px-2.5 py-0.5 rounded-full">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="font-heading font-black text-2xl sm:text-3xl text-espresso mb-4 leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-[#6B5E52] text-sm sm:text-base leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Feature Highlights */}
                      <div className="space-y-2 mb-6">
                        {project.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-espresso">
                            <CheckCircle2Icon size={16} className="text-rust flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technical Specs box */}
                      <div className="bg-[#F7F1E8] rounded-2xl p-4 text-xs space-y-1.5 text-[#5A4B3D] border border-[#D8C4A8]/60 mb-6">
                        <div><strong className="text-espresso">Materials:</strong> {project.specs.materials}</div>
                        <div><strong className="text-espresso">Timeline:</strong> {project.specs.timeline}</div>
                        <div><strong className="text-espresso">Key Features:</strong> {project.specs.features}</div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-tan/30 flex flex-col sm:flex-row gap-3 items-center justify-between">
                      <Link
                        href={`/book?service=Custom%20Slat%20Walls&notes=${encodeURIComponent(`Interested in ${project.title}`)}`}
                        className="btn-rust w-full sm:w-auto text-center text-sm py-2.5 px-5"
                      >
                        Book Similar Build →
                      </Link>
                      <span className="text-xs text-[#6B5E52] font-medium">
                        Custom quotes in 24 hrs
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL SPECIALTY & HANDYMAN WORK ── */}
      <section className="section bg-white border-t border-tan/30" aria-labelledby="general-projects-heading">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-rust font-bold text-xs uppercase tracking-widest bg-rust/10 px-3.5 py-1 rounded-full inline-block mb-3">
              Full Spectrum Services
            </span>
            <h2 id="general-projects-heading" className="font-heading font-black text-3xl md:text-4xl text-espresso mb-3">
              Comprehensive Construction &amp; Repairs
            </h2>
            <p className="text-[#6B5E52]">
              In addition to bespoke architectural carpentry, our licensed-level craftsmanship handles every corner of your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generalProjects.map((p) => (
              <div
                key={p.title}
                className="card p-6 flex flex-col justify-between hover:border-rust border-2 border-transparent transition-all shadow-md hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl" aria-hidden="true">{p.icon}</span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cream text-espresso border border-tan/60">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-espresso mb-2">{p.title}</h3>
                  <div className="text-xs font-semibold text-rust mb-3 flex items-center gap-1">
                    <MapPinIcon size={12} />
                    <span>{p.location}</span> · <span>{p.category}</span>
                  </div>
                  <p className="text-sm text-[#6B5E52] leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>
                <Link
                  href={`/book?service=${encodeURIComponent(p.category)}`}
                  className="text-sm font-bold text-rust hover:text-rust-hover transition-colors inline-flex items-center gap-1"
                >
                  Book This Service →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABand />
    </>
  );
}
