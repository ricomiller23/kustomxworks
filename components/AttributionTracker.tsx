"use client";

import { useEffect } from "react";
import { initAttributionTracker } from "@/lib/attribution";

export function AttributionTracker() {
  useEffect(() => {
    initAttributionTracker();
  }, []);

  return null;
}
