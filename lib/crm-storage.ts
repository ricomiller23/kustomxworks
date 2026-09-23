import fs from "fs";
import path from "path";

export interface ActivityRecord {
  id: string;
  type: string;
  description: string;
  createdAt: string;
}

export interface ConsentRecord {
  type?: string;
  ip?: string;
  userAgent?: string;
  phoneOptIn?: boolean;
  emailOptIn?: boolean;
  disclosure?: string;
  consentText?: string;
  consentSource?: string;
  consentIp?: string;
  consentAt?: string | Date;
  createdAt?: string;
}

export interface LeadRecord {
  id: string;
  name: string;
  phone: string;
  email?: string | null;
  city: string;
  service: string;
  details?: string | null;
  bestTime?: string | null;
  propertyType?: string | null;
  preferredDate?: string | null;
  preferredTime?: string | null;
  status: "NEW" | "CONTACTED" | "SCHEDULED" | "WON" | "LOST";
  score: number;
  source: string;
  gclid?: string | null;
  fbclid?: string | null;
  msclkid?: string | null;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  utmTerm?: string | null;
  utmContent?: string | null;
  landingPage?: string | null;
  referrer?: string | null;
  notes?: string | null;
  value?: number | null;
  createdAt: string;
  updatedAt?: string;
  consent?: ConsentRecord | null;
  activities?: ActivityRecord[];
}

const CACHE_FILE = path.join("/tmp", "kustomxworks-leads-cache.json");

function getGistConfig() {
  const token = process.env.GITHUB_CRM_TOKEN;
  const gistId = process.env.GITHUB_GIST_ID || "bb90ac9718f36287ff05c72e4bbcae66";
  return { token, gistId };
}

function readLocalCache(): LeadRecord[] {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const data = fs.readFileSync(CACHE_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("[crm-storage] Error reading local cache:", err);
  }
  return [];
}

function writeLocalCache(leads: LeadRecord[]) {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch (err) {
    console.error("[crm-storage] Error writing local cache:", err);
  }
}

/**
 * Fetch all leads from the persistent GitHub Cloud Store, with fallback to local cache
 */
export async function getAllLeads(): Promise<LeadRecord[]> {
  const { token, gistId } = getGistConfig();

  if (token && gistId) {
    try {
      const res = await fetch(`https://api.github.com/gists/${gistId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "User-Agent": "KustomXworks-CRM",
        },
        cache: "no-store",
      });

      if (res.ok) {
        const data = await res.json();
        const content = data.files?.["leads.json"]?.content;
        if (content) {
          const remoteLeads: LeadRecord[] = JSON.parse(content);
          writeLocalCache(remoteLeads);
          return remoteLeads.sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        }
      } else {
        console.error(`[crm-storage] GitHub Gist fetch returned status ${res.status}`);
      }
    } catch (err) {
      console.error("[crm-storage] GitHub Gist fetch failed, using cache:", err);
    }
  }

  // Fallback to local cache
  const cached = readLocalCache();
  return cached.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

/**
 * Save or update a lead in the persistent cloud store and local cache
 */
export async function saveLead(lead: LeadRecord): Promise<LeadRecord> {
  const currentLeads = await getAllLeads();
  const existingIdx = currentLeads.findIndex((l) => l.id === lead.id);

  if (existingIdx >= 0) {
    currentLeads[existingIdx] = {
      ...currentLeads[existingIdx],
      ...lead,
      updatedAt: new Date().toISOString(),
    };
  } else {
    currentLeads.unshift({
      ...lead,
      createdAt: lead.createdAt || new Date().toISOString(),
      status: lead.status || "NEW",
    });
  }

  // Update local cache
  writeLocalCache(currentLeads);

  // Sync to GitHub Cloud Store
  const { token, gistId } = getGistConfig();
  if (token && gistId) {
    try {
      const res = await fetch(`https://api.github.com/gists/${gistId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "User-Agent": "KustomXworks-CRM",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          files: {
            "leads.json": {
              content: JSON.stringify(currentLeads, null, 2),
            },
          },
        }),
      });

      if (!res.ok) {
        console.error(`[crm-storage] Gist patch returned status ${res.status}`);
      }
    } catch (err) {
      console.error("[crm-storage] Failed to patch gist backup:", err);
    }
  }

  return lead;
}

/**
 * Update an existing lead by ID (e.g. status change, notes, value)
 */
export async function updateLead(
  id: string,
  updates: Partial<LeadRecord>
): Promise<LeadRecord | null> {
  const currentLeads = await getAllLeads();
  const idx = currentLeads.findIndex((l) => l.id === id);

  if (idx < 0) {
    return null;
  }

  const existing = currentLeads[idx];
  const activities = [...(existing.activities || [])];

  if (updates.status && updates.status !== existing.status) {
    activities.unshift({
      id: `act_${Date.now()}`,
      type: "STATUS_CHANGED",
      description: `Status changed from ${existing.status} to ${updates.status}`,
      createdAt: new Date().toISOString(),
    });
  }

  if (updates.notes && updates.notes !== existing.notes) {
    activities.unshift({
      id: `act_${Date.now()}`,
      type: "NOTE_UPDATED",
      description: "Admin updated lead notes",
      createdAt: new Date().toISOString(),
    });
  }

  const updated: LeadRecord = {
    ...existing,
    ...updates,
    activities,
    updatedAt: new Date().toISOString(),
  };

  currentLeads[idx] = updated;
  writeLocalCache(currentLeads);

  // Sync to Cloud Store
  const { token, gistId } = getGistConfig();
  if (token && gistId) {
    try {
      await fetch(`https://api.github.com/gists/${gistId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "User-Agent": "KustomXworks-CRM",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          files: {
            "leads.json": {
              content: JSON.stringify(currentLeads, null, 2),
            },
          },
        }),
      });
    } catch (err) {
      console.error("[crm-storage] Failed to sync update to gist:", err);
    }
  }

  return updated;
}

/**
 * Delete a lead by ID
 */
export async function deleteLead(id: string): Promise<boolean> {
  const currentLeads = await getAllLeads();
  const filtered = currentLeads.filter((l) => l.id !== id);

  if (filtered.length === currentLeads.length) {
    return false;
  }

  writeLocalCache(filtered);

  const { token, gistId } = getGistConfig();
  if (token && gistId) {
    try {
      await fetch(`https://api.github.com/gists/${gistId}`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
          "User-Agent": "KustomXworks-CRM",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          files: {
            "leads.json": {
              content: JSON.stringify(filtered, null, 2),
            },
          },
        }),
      });
    } catch (err) {
      console.error("[crm-storage] Failed to delete from gist:", err);
    }
  }

  return true;
}

/**
 * Generate CSV formatted string from lead records
 */
export function generateLeadsCSV(leads: LeadRecord[]): string {
  const headers = [
    "ID",
    "Name",
    "Phone",
    "Email",
    "City",
    "Service",
    "Status",
    "Quality Score",
    "Source",
    "Property Type",
    "Preferred Date",
    "Preferred Time",
    "Details",
    "Estimated Value",
    "Notes",
    "UTM Source",
    "UTM Medium",
    "UTM Campaign",
    "Google Click ID (GCLID)",
    "Meta Click ID (FBCLID)",
    "SMS TCPA Consent",
    "Email CAN-SPAM Consent",
    "Consent IP",
    "Created Date",
  ];

  const escapeCSV = (str: string | number | null | undefined): string => {
    if (str === null || str === undefined) return '""';
    const val = String(str).replace(/"/g, '""');
    return `"${val}"`;
  };

  const rows = leads.map((l) => [
    escapeCSV(l.id),
    escapeCSV(l.name),
    escapeCSV(l.phone),
    escapeCSV(l.email || ""),
    escapeCSV(l.city),
    escapeCSV(l.service),
    escapeCSV(l.status),
    escapeCSV(l.score),
    escapeCSV(l.source),
    escapeCSV(l.propertyType || ""),
    escapeCSV(l.preferredDate || ""),
    escapeCSV(l.preferredTime || ""),
    escapeCSV(l.details || ""),
    escapeCSV(l.value || ""),
    escapeCSV(l.notes || ""),
    escapeCSV(l.utmSource || ""),
    escapeCSV(l.utmMedium || ""),
    escapeCSV(l.utmCampaign || ""),
    escapeCSV(l.gclid || ""),
    escapeCSV(l.fbclid || ""),
    escapeCSV(l.consent?.phoneOptIn ? "YES" : "NO"),
    escapeCSV(l.consent?.emailOptIn ? "YES" : "NO"),
    escapeCSV(l.consent?.ip || ""),
    escapeCSV(l.createdAt),
  ]);

  return [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
}
