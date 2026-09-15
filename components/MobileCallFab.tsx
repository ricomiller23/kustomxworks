import { BUSINESS } from "@/content/business";
import { PhoneIcon } from "lucide-react";

export function MobileCallFab() {
  return (
    <a
      href={`tel:${BUSINESS.phoneRaw}`}
      className="mobile-call-fab md:hidden"
      aria-label={`Call ${BUSINESS.phone}`}
    >
      <PhoneIcon size={20} aria-hidden="true" />
      <span>Call Now</span>
    </a>
  );
}
