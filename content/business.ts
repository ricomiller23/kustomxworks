/**
 * KustomXworks Business Configuration
 * ─────────────────────────────────────────────────────────────────────────────
 * Replace every {{TOKEN}} value in this file with your real data.
 * All tokens flow through the site from this single source — edit here only.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const BUSINESS = {
  name: "KustomXworks Handyman Services",
  tagline: "Inland Empire & Desert's Most Trusted Handyman Service",
  shortName: "KustomXworks",

  // ── Contact ────────────────────────────────────────────────────────────────
  phone: "951-391-2200",
  phoneRaw: "9513912200",
  email: "kustomxworks@proton.me",
  website: "https://www.kustomxworks.com",

  // ── Licensing & Credentials ────────────────────────────────────────────────
  constructionExpertise: "Decades of Master Construction & Masonry",
  qualityGuaranteed: true,
  backgroundChecked: true,

  // ── Social Proof (replace before launch) ──────────────────────────────────
  reviewCount: "{{REVIEW_COUNT}}",          // e.g. 147
  rating: "{{RATING}}",                     // e.g. 4.9
  yearsInBusiness: "{{YEARS}}",             // e.g. 12
  customersServed: "{{CUSTOMERS_SERVED}}",  // e.g. 2,400+

  // ── Hours ──────────────────────────────────────────────────────────────────
  hours: {
    weekdays: "Mon – Sat: 7AM – 7PM",
    sunday: "Sunday: Emergency Only",
    emergency: "24/7 Emergency Line Available",
  },

  // ── Service Area ───────────────────────────────────────────────────────────
  serviceArea: "Inland Empire & Coachella Valley, CA",
  cityCount: 9,

  // ── Offers (mark sample pricing with {{}} if not confirmed) ───────────────
  offers: [
    {
      id: "senior",
      title: "Senior Discount",
      description: "10% off all services for customers 65+",
      badge: "10% OFF",
      eligibility: "Customers 65 years of age and older",
    },
    {
      id: "military",
      title: "Military Discount",
      description: "15% off all services for active duty & veterans",
      badge: "15% OFF",
      eligibility: "Active duty military & veterans (ID required)",
    },
    {
      id: "new-customer",
      title: "New Customer Special",
      description: "$50 off any job over $250",
      badge: "$50 OFF",
      eligibility: "First-time customers only. Minimum $250 job.",
    },
  ],

  // ── Trust Points ───────────────────────────────────────────────────────────
  trustPoints: [
    {
      id: "block-walls",
      icon: "tool",
      label: "Concrete Block Walls",
      detail: "Structural Masonry & Retaining Walls",
    },
    {
      id: "landscaping",
      icon: "check",
      label: "Custom Landscaping",
      detail: "Drought-Scape, Turf & Pavers",
    },
    {
      id: "construction-expertise",
      icon: "shield",
      label: "Construction Expertise",
      detail: "Master Craftsmanship & Structural Repairs",
    },
    {
      id: "flat-rate",
      icon: "tag",
      label: "Transparent Flat-Rate Pricing",
      detail: "No surprise fees — ever",
    },
    {
      id: "same-week",
      icon: "calendar",
      label: "Same-Week Service",
      detail: "Fast scheduling guaranteed",
    },
    {
      id: "satisfaction",
      icon: "star",
      label: "Satisfaction Guaranteed",
      detail: "We make it right, period",
    },
    {
      id: "background",
      icon: "check",
      label: "Background-Checked Pros",
      detail: "Vetted, trusted technicians",
    },
    {
      id: "multi-trade",
      icon: "tool",
      label: "Multi-Trade Expertise",
      detail: "One call for every repair",
    },
  ],

  // ── Testimonials (replace tokens with real quotes before launch) ──────────
  testimonials: [
    {
      id: 1,
      quote: "{{TESTIMONIAL_1_QUOTE}}",
      name: "{{TESTIMONIAL_1_NAME}}",
      city: "{{TESTIMONIAL_1_CITY}}",
      rating: 5,
    },
    {
      id: 2,
      quote: "{{TESTIMONIAL_2_QUOTE}}",
      name: "{{TESTIMONIAL_2_NAME}}",
      city: "{{TESTIMONIAL_2_CITY}}",
      rating: 5,
    },
    {
      id: 3,
      quote: "{{TESTIMONIAL_3_QUOTE}}",
      name: "{{TESTIMONIAL_3_NAME}}",
      city: "{{TESTIMONIAL_3_CITY}}",
      rating: 5,
    },
    {
      id: 4,
      quote: "{{TESTIMONIAL_4_QUOTE}}",
      name: "{{TESTIMONIAL_4_NAME}}",
      city: "{{TESTIMONIAL_4_CITY}}",
      rating: 5,
    },
    {
      id: 5,
      quote: "{{TESTIMONIAL_5_QUOTE}}",
      name: "{{TESTIMONIAL_5_NAME}}",
      city: "{{TESTIMONIAL_5_CITY}}",
      rating: 5,
    },
    {
      id: 6,
      quote: "{{TESTIMONIAL_6_QUOTE}}",
      name: "{{TESTIMONIAL_6_NAME}}",
      city: "{{TESTIMONIAL_6_CITY}}",
      rating: 5,
    },
  ],
} as const;

export type TrustPoint = (typeof BUSINESS.trustPoints)[number];
export type Offer = (typeof BUSINESS.offers)[number];
export type Testimonial = (typeof BUSINESS.testimonials)[number];
