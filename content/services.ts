export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  bookingParam?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "masonry-landscape-construction",
    name: "Concrete Block Walls, Pool Remodeling, Landscaping & Construction",
    services: [
      {
        id: "pool-remodel",
        name: "Swimming Pool Remodeling & Decking",
        description:
          "Complete inground swimming pool transformations: replastering & pebble finishes, waterline tile, safety bullnose coping, concrete deck resurfacing, custom curved block retaining walls, and outdoor living buildouts.",
        icon: "droplet",
        category: "masonry-landscape-construction",
        bookingParam: "Pool Remodel",
      },

      {
        id: "concrete-block-walls",
        name: "Concrete Block Walls & Masonry",
        description:
          "Precision-built retaining walls, property perimeter block walls, planter boxes, stucco finishes, and heavy-duty structural masonry designed to endure California heat and seismic demands.",
        icon: "wall",
        category: "masonry-landscape-construction",
        bookingParam: "Concrete Block Walls",
      },
      {
        id: "custom-landscaping",
        name: "Custom Landscaping & Hardscaping",
        description:
          "Complete outdoor transformations: drought-tolerant desert-scapes, synthetic turf, paver patios, gravel grading, irrigation systems, sod installation, and exterior living area enhancements.",
        icon: "fence",
        category: "masonry-landscape-construction",
        bookingParam: "Landscaping & Hardscaping",
      },
      {
        id: "construction-expertise",
        name: "Construction Expertise & Structural Buildouts",
        description:
          "Deep trade construction mastery: load-bearing alterations, room additions, patio covers, structural framing, exterior repairs, and turnkey residential/commercial renovations.",
        icon: "hammer",
        category: "masonry-landscape-construction",
        bookingParam: "Construction Expertise",
      },
    ],
  },
  {
    id: "interior",
    name: "Interior Repairs & Improvements",
    services: [
      {
        id: "drywall",
        name: "Drywall & Painting",
        description:
          "Hole patches, texture matching, nail pops, full-room painting, and interior touch-ups.",
        icon: "wall",
        category: "interior",
        bookingParam: "Drywall & Painting",
      },
      {
        id: "slat-walls",
        name: "Custom Slat Walls & Architectural Feature Walls",
        description:
          "Parametric 3D wave walls, vertical oak and acoustic slats, backlit marble TV panels, floating credenzas, and integrated electric fireplace media walls.",
        icon: "hammer",
        category: "interior",
        bookingParam: "Custom Slat Walls",
      },
      {
        id: "carpentry",
        name: "Carpentry & Trim",
        description:
          "Door installation, trim repair, cabinet repairs, shelving, and custom woodwork.",
        icon: "hammer",
        category: "interior",
        bookingParam: "Carpentry & Trim",
      },
      {
        id: "flooring",
        name: "Flooring & Tile",
        description:
          "Tile repairs, grout replacement, vinyl plank installation, and flooring transitions.",
        icon: "grid",
        category: "interior",
        bookingParam: "Flooring & Tile",
      },
      {
        id: "doors-windows",
        name: "Doors & Windows",
        description:
          "Door adjustments, weather-stripping, window screen repairs, hardware upgrades.",
        icon: "door",
        category: "interior",
        bookingParam: "Doors & Windows",
      },
      {
        id: "furniture-assembly",
        name: "Furniture Assembly",
        description:
          "IKEA, Wayfair, and any flat-pack furniture assembled correctly.",
        icon: "package",
        category: "interior",
        bookingParam: "Furniture Assembly",
      },
    ],
  },
  {
    id: "electrical-plumbing",
    name: "Plumbing & Electrical (Minor)",
    services: [
      {
        id: "plumbing",
        name: "Plumbing (Minor)",
        description:
          "Faucet replacement, toilet repair/install, garbage disposal, shower head, shutoffs.",
        icon: "droplet",
        category: "electrical-plumbing",
        bookingParam: "Plumbing",
      },
      {
        id: "electrical",
        name: "Electrical (Minor)",
        description:
          "GFCI outlets, ceiling fan installation, light fixture swaps, switch replacement.",
        icon: "zap",
        category: "electrical-plumbing",
        bookingParam: "Electrical",
      },
      {
        id: "tv-mounting",
        name: "TV Mounting",
        description:
          "Flat-screen TV mounting, cord concealment, soundbar installation.",
        icon: "monitor",
        category: "electrical-plumbing",
        bookingParam: "TV Mounting",
      },
      {
        id: "appliance",
        name: "Appliance Installation",
        description:
          "Dishwasher, microwave, garbage disposal, washer/dryer hook-ups.",
        icon: "settings",
        category: "electrical-plumbing",
        bookingParam: "Appliance Installation",
      },
    ],
  },
  {
    id: "exterior",
    name: "Exterior & Outdoor",
    services: [
      {
        id: "fencing-decks",
        name: "Fencing & Decks",
        description:
          "Fence board replacement, gate repairs, deck maintenance, railing installation.",
        icon: "fence",
        category: "exterior",
        bookingParam: "Fencing & Decks",
      },
      {
        id: "kitchen-bath",
        name: "Kitchen & Bath Updates",
        description:
          "Backsplash tile, faucet upgrades, cabinet hardware, vanity installation.",
        icon: "tool",
        category: "exterior",
        bookingParam: "Kitchen & Bath Updates",
      },
      {
        id: "property-maintenance",
        name: "Property Maintenance",
        description:
          "Seasonal maintenance, gutter cleaning, caulking, power washing coordination.",
        icon: "home",
        category: "exterior",
        bookingParam: "Property Maintenance",
      },
      {
        id: "emergency",
        name: "Emergency Repairs",
        description:
          "24/7 urgent repairs: broken doors, burst pipes, storm damage. We respond fast.",
        icon: "alert",
        category: "exterior",
        bookingParam: "Emergency Repair",
      },
    ],
  },
  {
    id: "specialty",
    name: "Specialty Services",
    services: [
      {
        id: "aging-in-place",
        name: "Aging-in-Place Modifications",
        description:
          "Grab bars, handrails, ramps, lever handles, non-slip surfaces, free safety assessment.",
        icon: "heart",
        category: "specialty",
        bookingParam: "Aging-in-Place",
      },
      {
        id: "vacation-rental",
        name: "Vacation Rental Service",
        description:
          "Same-day STR repairs, photo documentation, pre-season inspections, guest-ready turnovers.",
        icon: "key",
        category: "specialty",
        bookingParam: "Vacation Rental",
      },
      {
        id: "property-management",
        name: "Property Management",
        description:
          "Flat-rate turnover menu, 2-hr emergency, photo documentation, Net-30, volume pricing.",
        icon: "clipboard",
        category: "specialty",
        bookingParam: "Property Management",
      },
      {
        id: "military-package",
        name: "Military Move Package",
        description:
          "PCS move-in/out repairs, 15% military discount, background-checked pros.",
        icon: "shield",
        category: "specialty",
        bookingParam: "Military Package",
      },
    ],
  },
];

export const ALL_SERVICES: Service[] = SERVICE_CATEGORIES.flatMap(
  (cat) => cat.services
);

export const SERVICE_NAMES: string[] = ALL_SERVICES.map((s) => s.name);
