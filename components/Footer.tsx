import Link from "next/link";
import { BUSINESS } from "@/content/business";
import { CITIES } from "@/content/cities";
import { SERVICE_CATEGORIES } from "@/content/services";
import { PhoneIcon, MailIcon, ClockIcon, ShieldCheckIcon, MapPinIcon, LockIcon } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const serviceLinks = SERVICE_CATEGORIES.flatMap((cat) =>
    cat.services.slice(0, 3)
  ).slice(0, 8);

  return (
    <footer className="bg-espresso text-espresso-text" style={{ backgroundColor: "#2A211A", color: "#EDE6DC" }}>
      {/* Main footer grid */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-rust flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#C1502E" }}>
                <span className="text-white font-heading font-black text-lg">K</span>
              </div>
              <div>
                <div className="font-heading font-black text-white text-lg leading-tight">KustomXworks</div>
                <div className="text-xs font-semibold leading-tight" style={{ color: "#D8C4A8" }}>Handyman Services</div>
              </div>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-orange-200 mb-2">
              Building America Back From the Ground Up — One Project at a Time.
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#B8A89A" }}>
              American Craft. American Grit. Serving {BUSINESS.cityCount} cities across the Inland Empire &amp; Coachella Valley with master construction expertise, concrete block walls, custom landscaping, and flat-rate handyman services.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm" style={{ color: "#EDE6DC" }}>
                <MapPinIcon size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#C1502E" }} aria-hidden="true" />
                <span>{BUSINESS.fullAddress}</span>
              </div>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center gap-2 text-sm font-bold hover:text-rust transition-colors"
                style={{ color: "#EDE6DC" }}
              >
                <PhoneIcon size={16} style={{ color: "#C1502E" }} aria-hidden="true" />
                {BUSINESS.phone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 text-sm hover:text-rust transition-colors"
                style={{ color: "#B8A89A" }}
              >
                <MailIcon size={16} style={{ color: "#C1502E" }} aria-hidden="true" />
                {BUSINESS.email}
              </a>
              <div className="flex items-start gap-2 text-sm" style={{ color: "#B8A89A" }}>
                <ClockIcon size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#C1502E" }} aria-hidden="true" />
                <div>
                  <div>{BUSINESS.hours.weekdays}</div>
                  <div>{BUSINESS.hours.sunday}</div>
                  <div className="font-semibold" style={{ color: "#EDE6DC" }}>{BUSINESS.hours.emergency}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "All Services", href: "/services" },
                { label: "Book Online", href: "/book" },
                { label: "Pricing", href: "/pricing" },
                { label: "Gallery", href: "/gallery" },
                { label: "About Us", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-rust transition-colors"
                    style={{ color: "#B8A89A" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services#${svc.id}`}
                    className="text-sm hover:text-rust transition-colors"
                    style={{ color: "#B8A89A" }}
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/aging-in-place" className="text-sm hover:text-rust transition-colors" style={{ color: "#B8A89A" }}>
                  Aging-in-Place
                </Link>
              </li>
              <li>
                <Link href="/services/property-management" className="text-sm hover:text-rust transition-colors" style={{ color: "#B8A89A" }}>
                  Property Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">Service Areas</h3>
            <ul className="space-y-2.5">
              {CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/handyman/${city.slug}`}
                    className="flex items-center gap-1.5 text-sm hover:text-rust transition-colors"
                    style={{ color: "#B8A89A" }}
                  >
                    <MapPinIcon size={12} aria-hidden="true" />
                    {city.name}, {city.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Trust & Legal Compliance row */}
      <div className="border-t py-6" style={{ borderColor: "#3D3028" }}>
        <div className="container-site space-y-3 text-sm">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-base">🇺🇸</span>
              <span style={{ color: "#EDE6DC" }} className="font-semibold">
                Quality Work With American Pride · Professional Work. Patriotic Values.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheckIcon size={16} style={{ color: "#C1502E" }} aria-hidden="true" />
              <span style={{ color: "#B8A89A" }}>
                Concrete Block Walls, Landscaping &amp; Construction Expertise
              </span>
            </div>
            <div style={{ color: "#B8A89A" }}>
              Work Done Right. Work Done Proud.
            </div>
            <div style={{ color: "#B8A89A" }}>
              100% Satisfaction Guaranteed
            </div>
          </div>

          {/* California B&P § 7048 Statutory Disclosure */}
          <p className="text-center text-xs leading-relaxed max-w-4xl mx-auto pt-2" style={{ color: "#8E7F72" }}>
            California Business &amp; Professions Code § 7048 Notice: KustomXworks specializes in handyman maintenance, minor property repairs, and installations under $500 in combined labor and materials. For major structural construction projects requiring a specialty or general contractor license, projects are executed in coordination with or subcontracted to licensed California contractors.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t py-5" style={{ borderColor: "#3D3028" }}>
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "#6B5E52" }}>
          <p>© {currentYear} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-rust transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-rust transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-rust transition-colors">Sitemap</Link>
            <Link href="/leads/login" className="hover:text-rust transition-colors flex items-center gap-1 opacity-70 hover:opacity-100">
              <LockIcon size={11} aria-hidden="true" />
              CRM Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
