import { MetadataRoute } from "next";
import { CITIES } from "@/content/cities";
import { BUSINESS } from "@/content/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.website;
  const now = new Date();

  const staticPages = [
    { url: base, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${base}/book`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/services`, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/handyman`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/services/aging-in-place`, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/services/property-management`, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/services/vacation-rental`, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/services/military`, changeFrequency: "monthly" as const, priority: 0.85 },
    { url: `${base}/about`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/gallery`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/reviews`, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${base}/pricing`, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/blog`, changeFrequency: "weekly" as const, priority: 0.6 },
    { url: `${base}/blog/preparing-inland-empire-home-summer-heat`, changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${base}/blog/landlord-guide-turnover-repairs-perris-moreno-valley`, changeFrequency: "yearly" as const, priority: 0.5 },
  ].map((p) => ({ ...p, lastModified: now }));

  const cityPages = CITIES.map((city) => ({
    url: `${base}/handyman/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...cityPages];
}
