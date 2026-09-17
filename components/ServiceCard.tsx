import Link from "next/link";
import type { Service } from "@/content/services";
import { WrenchIcon, DropletIcon, ZapIcon, MonitorIcon, HomeIcon, HeartIcon, KeyIcon, ClipboardListIcon, HammerIcon, ShieldIcon, SettingsIcon, GridIcon, PackageIcon } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  wall: <WrenchIcon size={24} aria-hidden="true" />,
  hammer: <HammerIcon size={24} aria-hidden="true" />,
  grid: <GridIcon size={24} aria-hidden="true" />,
  door: <HomeIcon size={24} aria-hidden="true" />,
  package: <PackageIcon size={24} aria-hidden="true" />,
  droplet: <DropletIcon size={24} aria-hidden="true" />,
  zap: <ZapIcon size={24} aria-hidden="true" />,
  monitor: <MonitorIcon size={24} aria-hidden="true" />,
  settings: <SettingsIcon size={24} aria-hidden="true" />,
  fence: <WrenchIcon size={24} aria-hidden="true" />,
  tool: <WrenchIcon size={24} aria-hidden="true" />,
  home: <HomeIcon size={24} aria-hidden="true" />,
  alert: <ZapIcon size={24} aria-hidden="true" />,
  heart: <HeartIcon size={24} aria-hidden="true" />,
  key: <KeyIcon size={24} aria-hidden="true" />,
  clipboard: <ClipboardListIcon size={24} aria-hidden="true" />,
  shield: <ShieldIcon size={24} aria-hidden="true" />,
};

interface ServiceCardProps {
  service: Service;
  showCTA?: boolean;
}

export function ServiceCard({ service, showCTA = true }: ServiceCardProps) {
  const bookingUrl = service.bookingParam
    ? `/book?service=${encodeURIComponent(service.bookingParam)}`
    : "/book";

  return (
    <article
      id={service.id}
      className="card p-6 flex flex-col gap-4"
      aria-label={service.name}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: "#D8C4A8" }}
      >
        <span className="text-rust">{ICON_MAP[service.icon] ?? <WrenchIcon size={24} />}</span>
      </div>
      <div className="flex-1">
        <h3 className="font-heading font-bold text-lg text-espresso mb-2">{service.name}</h3>
        <p className="text-sm text-[#6B5E52] leading-relaxed">{service.description}</p>
      </div>
      {showCTA && (
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-tan/30">
          <Link
            href={bookingUrl}
            className="text-sm font-bold text-rust hover:text-rust-hover transition-colors flex items-center gap-1"
          >
            Book This Service →
          </Link>
          {service.id === "pool-remodel" && (
            <Link
              href="/services/pool-remodel"
              className="text-xs font-bold text-espresso bg-[#FAF6F0] hover:bg-tan/50 px-2.5 py-1 rounded-md border border-tan/60 transition-colors"
            >
              Full Details →
            </Link>
          )}
        </div>
      )}
    </article>
  );
}
