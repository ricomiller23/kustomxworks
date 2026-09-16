"use client";

import Link from "next/link";
import { useState } from "react";
import { BUSINESS } from "@/content/business";
import { CITIES } from "@/content/cities";
import { PhoneIcon, MenuIcon, XIcon, ChevronDownIcon } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/handyman", hasDropdown: true },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);

  return (
    <header className="bg-white shadow-warm sticky top-[40px] z-40">
      <div className="container-site flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="KustomXworks home">
          <div className="w-10 h-10 rounded-lg bg-[#C1502E] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-heading font-black text-lg leading-none">K</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-heading font-black text-espresso text-lg leading-tight">KustomXworks</div>
            <div className="text-xs text-[#6B5E52] font-semibold leading-tight">Handyman Services</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setCitiesOpen(true)}
                onMouseLeave={() => setCitiesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-espresso font-semibold text-sm hover:text-rust transition-colors"
                  aria-expanded={citiesOpen}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDownIcon size={14} className="transition-transform group-hover:rotate-180" />
                </button>
                {citiesOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-warm-lg p-2 min-w-[200px] border border-tan/30 z-50">
                    {CITIES.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/handyman/${city.slug}`}
                        className="block px-4 py-2 text-sm font-semibold text-espresso hover:bg-cream hover:text-rust rounded-lg transition-colors"
                        onClick={() => setCitiesOpen(false)}
                      >
                        {city.name}, {city.state}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-espresso font-semibold text-sm hover:text-rust transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center gap-2 text-espresso font-bold text-sm hover:text-rust transition-colors"
            aria-label={`Call ${BUSINESS.phone}`}
          >
            <PhoneIcon size={16} className="text-rust" aria-hidden="true" />
            {BUSINESS.phone}
          </a>
          <Link href="/book" className="btn-rust text-sm py-2.5 px-5">
            Book Now
          </Link>
        </div>

        {/* Mobile: phone + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-rust text-white"
            aria-label={`Call ${BUSINESS.phone}`}
          >
            <PhoneIcon size={18} aria-hidden="true" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-tan text-espresso"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-tan/30 px-6 py-4 space-y-1">
          {NAV_LINKS.map((link) =>
            link.hasDropdown ? (
              <div key={link.label}>
                <button
                  className="flex items-center justify-between w-full py-2.5 font-semibold text-espresso text-base"
                  onClick={() => setCitiesOpen(!citiesOpen)}
                >
                  {link.label}
                  <ChevronDownIcon
                    size={16}
                    className={`transition-transform ${citiesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {citiesOpen && (
                  <div className="pl-4 space-y-1">
                    {CITIES.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/handyman/${city.slug}`}
                        className="block py-2 text-sm font-semibold text-[#6B5E52] hover:text-rust transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {city.name}, {city.state}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="block py-2.5 font-semibold text-espresso text-base hover:text-rust transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-3 border-t border-tan/30">
            <Link
              href="/book"
              className="btn-rust w-full justify-center text-base"
              onClick={() => setMobileOpen(false)}
            >
              Book Now — Free Estimate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
