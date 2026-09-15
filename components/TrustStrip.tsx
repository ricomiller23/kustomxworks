import Link from "next/link";
import { BUSINESS } from "@/content/business";
import type { TrustPoint } from "@/content/business";
import { ShieldCheckIcon, TagIcon, CalendarCheckIcon, StarIcon, CheckCircleIcon, WrenchIcon } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  shield: <ShieldCheckIcon size={18} aria-hidden="true" />,
  tag: <TagIcon size={18} aria-hidden="true" />,
  calendar: <CalendarCheckIcon size={18} aria-hidden="true" />,
  star: <StarIcon size={18} aria-hidden="true" />,
  check: <CheckCircleIcon size={18} aria-hidden="true" />,
  tool: <WrenchIcon size={18} aria-hidden="true" />,
};

interface TrustStripProps {
  variant?: "light" | "dark" | "tan";
}

export function TrustStrip({ variant = "tan" }: TrustStripProps) {
  const bgClass =
    variant === "dark"
      ? "bg-espresso"
      : variant === "light"
      ? "bg-white"
      : "bg-tan/40";

  const textClass = variant === "dark" ? "text-espresso-text" : "text-espresso";
  const chipBg = variant === "dark" ? "bg-white/10" : "bg-white";

  return (
    <section className={`${bgClass} py-6 border-y border-tan/30`} aria-label="Trust indicators">
      <div className="container-site">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {BUSINESS.trustPoints.map((point) => (
            <div
              key={point.id}
              className={`trust-chip ${chipBg} ${textClass}`}
            >
              <span className="text-rust">{ICON_MAP[point.icon]}</span>
              <span>{point.label}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link
            href="/book"
            className="btn-rust inline-flex mt-2 text-sm"
          >
            Book a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
