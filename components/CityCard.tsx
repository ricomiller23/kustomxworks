import Link from "next/link";
import type { CityData } from "@/content/cities";
import { MapPinIcon, UsersIcon, ArrowRightIcon } from "lucide-react";

interface CityCardProps {
  city: CityData;
}

export function CityCard({ city }: CityCardProps) {
  return (
    <article className="card p-6 flex flex-col gap-3" aria-label={`${city.name} service area`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <MapPinIcon size={18} className="text-rust flex-shrink-0" aria-hidden="true" />
          <h3 className="font-heading font-bold text-lg text-espresso">
            {city.name}
          </h3>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ backgroundColor: "#D8C4A8", color: "#2A211A" }}>
          {city.segmentLabel}
        </span>
      </div>
      <div className="flex items-center gap-1.5 text-xs text-[#6B5E52]">
        <UsersIcon size={12} aria-hidden="true" />
        <span>Pop. {city.population}</span>
      </div>
      <p className="text-sm text-[#6B5E52] leading-relaxed line-clamp-3">
        {city.segment}
      </p>
      <Link
        href={`/handyman/${city.slug}`}
        className="text-sm font-bold text-rust hover:text-rust-hover transition-colors flex items-center gap-1 mt-auto"
      >
        View {city.name} Page
        <ArrowRightIcon size={14} aria-hidden="true" />
      </Link>
    </article>
  );
}
