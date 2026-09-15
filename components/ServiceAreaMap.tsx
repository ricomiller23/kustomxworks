"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { CityData } from "@/content/cities";

interface ServiceAreaMapProps {
  cities: CityData[];
}

export function ServiceAreaMap({ cities }: ServiceAreaMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Dynamically import leaflet to avoid SSR issues
    // Inject Leaflet CSS via link tag
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    Promise.all([
      import("leaflet"),
    ])
      .then(([L]) => {
        if (!mapRef.current || mapInstanceRef.current) return;

        // Center on Inland Empire
        const map = L.default.map(mapRef.current, {
          center: [33.75, -117.0],
          zoom: 9,
          scrollWheelZoom: false,
          attributionControl: true,
        });

        mapInstanceRef.current = map;

        // OpenStreetMap tiles — no API key required
        L.default
          .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
              '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 18,
          })
          .addTo(map);

        // Custom rust icon
        const rustIcon = L.default.divIcon({
          html: `<div style="
            width:32px;height:32px;border-radius:50% 50% 50% 0;
            background:#C1502E;border:3px solid white;
            box-shadow:0 2px 8px rgba(0,0,0,0.3);
            transform:rotate(-45deg);
          "></div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          className: "",
        });

        // Add markers
        cities.forEach((city) => {
          const marker = L.default
            .marker([city.lat, city.lng], { icon: rustIcon, title: city.name })
            .addTo(map);

          marker.bindPopup(`
            <div style="font-family:sans-serif;min-width:160px">
              <strong style="font-size:14px;color:#2A211A">${city.name}, CA</strong>
              <p style="font-size:12px;color:#6B5E52;margin:4px 0">Pop. ${city.population}</p>
              <p style="font-size:12px;color:#6B5E52;margin:0 0 8px">${city.segmentLabel}</p>
              <a href="/handyman/${city.slug}" style="display:inline-block;background:#C1502E;color:white;padding:4px 12px;border-radius:6px;font-size:12px;font-weight:700;text-decoration:none">
                View Page →
              </a>
            </div>
          `);
        });
      })
      .catch(() => {
        // Leaflet failed to load — static fallback already rendered
      });

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, [cities]);

  return (
    <div>
      {/* Interactive map */}
      <div
        ref={mapRef}
        style={{ height: "420px", width: "100%", borderRadius: "1rem" }}
        aria-label="Map showing KustomXworks service areas across the Inland Empire and Coachella Valley"
        role="application"
      />

      {/* Static SVG fallback / city link list */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {cities.map((city) => (
          <Link
            key={city.slug}
            href={`/handyman/${city.slug}`}
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-tan hover:border-rust hover:shadow-warm transition-all text-sm font-semibold text-espresso"
          >
            <span className="w-2 h-2 rounded-full bg-rust flex-shrink-0" />
            {city.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
