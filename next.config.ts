import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow importing leaflet CSS from node_modules
  // Leaflet is loaded client-side only via dynamic import
  experimental: {},
};

export default nextConfig;
