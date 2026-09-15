import { BUSINESS } from "@/content/business";
import { PhoneIcon } from "lucide-react";

export function EmergencyBar() {
  return (
    <div className="emergency-bar text-white text-sm font-semibold text-center py-2 px-4 sticky top-0 z-50">
      <div className="container-site flex items-center justify-center gap-2 flex-wrap">
        <span className="flex items-center gap-1.5">
          <span className="animate-pulse inline-block w-2 h-2 rounded-full bg-white opacity-80" />
          24/7 Emergency Service Available
        </span>
        <span className="hidden sm:inline">—</span>
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="flex items-center gap-1.5 underline underline-offset-2 hover:no-underline font-bold"
          aria-label="Call our 24/7 emergency line"
        >
          <PhoneIcon size={14} aria-hidden="true" />
          {BUSINESS.phone}
        </a>
      </div>
    </div>
  );
}
