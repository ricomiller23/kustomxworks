import { BUSINESS } from "@/content/business";
import { PhoneIcon } from "lucide-react";

export function EmergencyBar() {
  return (
    <div className="emergency-bar text-white text-xs sm:text-sm font-semibold text-center py-2 px-4 sticky top-0 z-50">
      <div className="container-site flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        <span className="inline-flex items-center gap-1.5 font-bold tracking-wider uppercase text-[11px] bg-white/20 px-2.5 py-0.5 rounded-full">
          <span>🇺🇸</span>
          <span className="hidden sm:inline">Building America Back From the Ground Up — One Project at a Time</span>
          <span className="sm:hidden">Building America Back</span>
        </span>
        <span className="hidden md:inline text-white/60">|</span>
        <span className="flex items-center gap-1.5 text-xs sm:text-sm">
          <span className="animate-pulse inline-block w-2 h-2 rounded-full bg-emerald-400" />
          24/7 Emergency Available
        </span>
        <span className="text-white/60">—</span>
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="flex items-center gap-1.5 underline underline-offset-2 hover:no-underline font-bold text-xs sm:text-sm"
          aria-label="Call our 24/7 emergency line"
        >
          <PhoneIcon size={13} aria-hidden="true" />
          {BUSINESS.phone}
        </a>
      </div>
    </div>
  );
}
