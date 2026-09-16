// Client-side attribution capture (Task D)
// First-touch wins: never overwrite an existing tx_attr cookie.

export interface AttributionData {
  gclid?: string;
  fbclid?: string;
  msclkid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  landingPage?: string;
  referrer?: string;
  firstSeenAt?: string;
}

const COOKIE_NAME = "tx_attr";
const COOKIE_MAX_AGE = 90 * 24 * 60 * 60; // 90 days in seconds

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
  return match ? decodeURIComponent(match[3]) : null;
}

export function setCookie(name: string, value: string, maxAgeSec: number) {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; max-age=${maxAgeSec}; path=/; SameSite=Lax`;
}

export function initAttributionTracker() {
  if (typeof window === "undefined") return;

  // 1. Check if tx_attr cookie already exists — First Touch Wins
  const existing = getCookie(COOKIE_NAME);
  if (existing) {
    return;
  }

  // 2. Parse URL parameters
  const params = new URLSearchParams(window.location.search);
  const gclid = params.get("gclid") || undefined;
  const fbclid = params.get("fbclid") || undefined;
  const msclkid = params.get("msclkid") || undefined;
  const utmSource = params.get("utm_source") || undefined;
  const utmMedium = params.get("utm_medium") || undefined;
  const utmCampaign = params.get("utm_campaign") || undefined;
  const utmTerm = params.get("utm_term") || undefined;
  const utmContent = params.get("utm_content") || undefined;

  const attribution: AttributionData = {
    gclid,
    fbclid,
    msclkid,
    utmSource: utmSource || (document.referrer ? new URL(document.referrer, window.location.href).hostname : "direct"),
    utmMedium: utmMedium || (document.referrer ? "referral" : "none"),
    utmCampaign,
    utmTerm,
    utmContent,
    landingPage: window.location.pathname,
    referrer: document.referrer || undefined,
    firstSeenAt: new Date().toISOString(),
  };

  setCookie(COOKIE_NAME, JSON.stringify(attribution), COOKIE_MAX_AGE);
}

export function getAttributionPayload(): AttributionData {
  if (typeof window === "undefined") return {};
  const cookieVal = getCookie(COOKIE_NAME);
  if (cookieVal) {
    try {
      return JSON.parse(cookieVal);
    } catch {
      // ignore
    }
  }

  // Fallback to current URL if cookie blocked
  const params = new URLSearchParams(window.location.search);
  return {
    gclid: params.get("gclid") || undefined,
    fbclid: params.get("fbclid") || undefined,
    msclkid: params.get("msclkid") || undefined,
    utmSource: params.get("utm_source") || (document.referrer ? "referral" : "direct"),
    utmMedium: params.get("utm_medium") || undefined,
    utmCampaign: params.get("utm_campaign") || undefined,
    utmTerm: params.get("utm_term") || undefined,
    utmContent: params.get("utm_content") || undefined,
    landingPage: window.location.pathname,
    referrer: document.referrer || undefined,
    firstSeenAt: new Date().toISOString(),
  };
}
