import Link from "next/link";
import { PhoneIcon } from "lucide-react";
import { BUSINESS } from "@/content/business";

interface CTABandProps {
  heading?: string;
  subheading?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showPhone?: boolean;
  variant?: "rust" | "dark" | "cream";
}

export function CTABand({
  heading = "Ready to Get Started?",
  subheading = "Your Home. Our Craftsmanship. America’s Comeback Starts Here. Schedule your flat-rate estimate today. Same-week service across the Inland Empire & Coachella Valley.",
  primaryLabel = "Book Your Free Estimate",
  primaryHref = "/book",
  showPhone = true,
  variant = "rust",
}: CTABandProps) {
  const bgClass =
    variant === "dark"
      ? "bg-espresso"
      : variant === "cream"
      ? "bg-cream border-y border-tan"
      : "";

  const textClass =
    variant === "rust" || variant === "dark" ? "text-white" : "text-espresso";

  const subClass =
    variant === "rust"
      ? "text-orange-100"
      : variant === "dark"
      ? "text-espresso-text/80"
      : "text-[#6B5E52]";

  const style =
    variant === "rust"
      ? { background: "linear-gradient(135deg, #B23A2E 0%, #C86A3D 100%)" }
      : {};

  return (
    <section
      className={`${bgClass} py-16 px-6`}
      style={style}
      aria-labelledby="cta-heading"
    >
      <div className="container-site text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/20 border border-white/20 text-orange-100 text-xs font-bold uppercase tracking-wider mb-4">
          <span>Fix. Build. Restore. · Reliable Repairs. Quality Builds. America Strong.</span>
        </div>
        <h2
          id="cta-heading"
          className={`font-heading font-black text-3xl md:text-4xl ${textClass} mb-3`}
        >
          {heading}
        </h2>
        <p className={`${subClass} max-w-xl mx-auto mb-8 text-lg`}>
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className={`btn-${variant === "rust" ? "white" : "rust"} text-base px-8 py-4`}
          >
            {primaryLabel}
          </Link>
          {showPhone && (
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className={`flex items-center gap-2 font-bold text-base transition-opacity hover:opacity-80 ${textClass}`}
            >
              <PhoneIcon size={20} aria-hidden="true" />
              {BUSINESS.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
