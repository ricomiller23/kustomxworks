"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CITIES } from "@/content/cities";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  SearchIcon,
  DownloadIcon,
  LogOutIcon,
  RefreshCwIcon,
  ShieldCheckIcon,
  FilterIcon,
  ChevronRightIcon,
  XIcon,
  SaveIcon,
  AlertTriangleIcon,
} from "lucide-react";

interface ConsentRecord {
  type: string;
  ip: string;
  userAgent: string;
  phoneOptIn: boolean;
  emailOptIn: boolean;
  disclosure: string;
  createdAt: string;
}

interface ActivityRecord {
  id: string;
  type: string;
  description: string;
  createdAt: string;
}

interface Lead {
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
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  landingPage?: string | null;
  notes?: string | null;
  value?: number | null;
  createdAt: string;
  consent?: ConsentRecord | null;
  activities?: ActivityRecord[];
}

const STATUS_CONFIG: Record<string, { label: string; bg: string; text: string; border: string }> = {
  NEW: { label: "New Lead", bg: "bg-orange-100", text: "text-rust", border: "border-rust/30" },
  CONTACTED: { label: "Contacted", bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-300" },
  SCHEDULED: { label: "Scheduled", bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-300" },
  WON: { label: "Won / Completed", bg: "bg-green-100", text: "text-green-800", border: "border-green-300" },
  LOST: { label: "Lost / Closed", bg: "bg-stone-200", text: "text-stone-700", border: "border-stone-300" },
};

export default function LeadsDashboardPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [cityFilter, setCityFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [internalNote, setInternalNote] = useState("");
  const [savingNote, setSavingNote] = useState(false);
  const [updatingStatusId, setUpdatingStatusId] = useState<string | null>(null);

  async function fetchLeads() {
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      if (res.status === 401) {
        router.push("/leads/login");
        return;
      }
      const data = await res.json();
      setLeads(data.leads || []);
    } catch (err) {
      console.error("Failed to fetch leads:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLeads();
  }, []);

  async function handleStatusChange(leadId: string, newStatus: string) {
    setUpdatingStatusId(leadId);
    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === leadId ? { ...l, status: newStatus as any } : l))
        );
        if (selectedLead && selectedLead.id === leadId) {
          setSelectedLead((prev) => prev ? { ...prev, status: newStatus as any } : null);
        }
      }
    } catch (e) {
      console.error("Status update error:", e);
    } finally {
      setUpdatingStatusId(null);
    }
  }

  async function handleSaveNote() {
    if (!selectedLead) return;
    setSavingNote(true);
    try {
      const res = await fetch(`/api/leads/${selectedLead.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: internalNote }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === selectedLead.id ? { ...l, notes: internalNote } : l))
        );
        setSelectedLead((prev) => prev ? { ...prev, notes: internalNote } : null);
      }
    } finally {
      setSavingNote(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/leads/login");
  }

  const filteredLeads = useMemo(() => {
    return leads.filter((l) => {
      if (statusFilter !== "ALL" && l.status !== statusFilter) return false;
      if (cityFilter !== "ALL" && l.city !== cityFilter) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = l.name.toLowerCase().includes(q);
        const matchPhone = l.phone.includes(q);
        const matchEmail = (l.email || "").toLowerCase().includes(q);
        const matchService = l.service.toLowerCase().includes(q);
        const matchDetails = (l.details || "").toLowerCase().includes(q);
        if (!matchName && !matchPhone && !matchEmail && !matchService && !matchDetails) {
          return false;
        }
      }
      return true;
    });
  }, [leads, statusFilter, cityFilter, searchQuery]);

  // Metrics
  const stats = useMemo(() => {
    const total = leads.length;
    const newCount = leads.filter((l) => l.status === "NEW").length;
    const contactedCount = leads.filter((l) => l.status === "CONTACTED").length;
    const scheduledCount = leads.filter((l) => l.status === "SCHEDULED").length;
    const wonCount = leads.filter((l) => l.status === "WON").length;
    const avgScore = total ? Math.round(leads.reduce((a, b) => a + (b.score || 0), 0) / total) : 0;
    return { total, newCount, contactedCount, scheduledCount, wonCount, avgScore };
  }, [leads]);

  function exportCSV() {
    if (!filteredLeads.length) return;
    const headers = ["ID", "Name", "Phone", "Email", "City", "Service", "Status", "Score", "Source", "Campaign", "SMS Consent", "Email Consent", "Created At"];
    const rows = filteredLeads.map((l) => [
      l.id,
      `"${l.name.replace(/"/g, "\"\"")}"`,
      `"${l.phone}"`,
      `"${l.email || ""}"`,
      `"${l.city}"`,
      `"${l.service.replace(/"/g, "\"\"")}"`,
      l.status,
      l.score,
      l.source,
      `"${l.utmCampaign || l.utmSource || ""}"`,
      l.consent?.phoneOptIn ? "YES" : "NO",
      l.consent?.emailOptIn ? "YES" : "NO",
      l.createdAt,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `kustomxworks-leads-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function getScoreBadge(score: number) {
    if (score >= 80) return "bg-green-100 text-green-800 border-green-300";
    if (score >= 60) return "bg-amber-100 text-amber-800 border-amber-300";
    return "bg-stone-100 text-stone-700 border-stone-300";
  }

  return (
    <div className="min-h-screen bg-sand text-espresso">
      {/* Top Navbar */}
      <header className="bg-espresso text-white border-b border-tan/20 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-rust flex items-center justify-center font-heading font-black text-white text-sm" style={{ backgroundColor: "#C1502E" }}>
                K
              </div>
              <span className="font-heading font-black text-lg tracking-tight hidden sm:inline">
                KustomXworks CRM
              </span>
            </Link>
            <span className="text-xs bg-rust/30 text-orange-200 px-2 py-0.5 rounded-full border border-rust/40">
              Live Pipeline
            </span>
            <span className="text-xs bg-emerald-950/80 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/40 hidden sm:inline-flex items-center gap-1">
              <ShieldCheckIcon size={11} />
              CRM Backup Active
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchLeads}
              className="p-2 text-tan hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              title="Refresh leads"
            >
              <RefreshCwIcon size={16} className={loading ? "animate-spin" : ""} />
            </button>
            <button
              onClick={exportCSV}
              className="btn-rust text-xs py-1.5 px-3 flex items-center gap-1.5 shadow"
              style={{ backgroundColor: "#C1502E" }}
            >
              <DownloadIcon size={14} />
              <span>Export CSV</span>
            </button>
            <a
              href="/api/leads/backup"
              download
              className="text-xs py-1.5 px-3 flex items-center gap-1.5 bg-stone-700 hover:bg-stone-600 text-white rounded shadow transition-colors font-medium"
              title="Download full JSON backup of all submissions"
            >
              <ShieldCheckIcon size={14} className="text-emerald-400" />
              <span>Download Backup (JSON)</span>
            </a>
            <button
              onClick={handleLogout}
              className="p-2 text-stone-400 hover:text-red-300 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-1 text-xs"
              title="Log out"
            >
              <LogOutIcon size={16} />
              <span className="hidden md:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="card p-4 bg-white border border-tan/30">
            <div className="text-xs font-bold uppercase tracking-wider text-[#8E7F72]">Total Leads</div>
            <div className="text-2xl font-black font-heading text-espresso mt-1">{stats.total}</div>
          </div>
          <div className="card p-4 bg-white border-l-4 border-l-rust">
            <div className="text-xs font-bold uppercase tracking-wider text-rust">New Leads</div>
            <div className="text-2xl font-black font-heading text-rust mt-1">{stats.newCount}</div>
          </div>
          <div className="card p-4 bg-white border border-tan/30">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700">Contacted</div>
            <div className="text-2xl font-black font-heading text-espresso mt-1">{stats.contactedCount}</div>
          </div>
          <div className="card p-4 bg-white border border-tan/30">
            <div className="text-xs font-bold uppercase tracking-wider text-purple-700">Scheduled</div>
            <div className="text-2xl font-black font-heading text-espresso mt-1">{stats.scheduledCount}</div>
          </div>
          <div className="card p-4 bg-white border-l-4 border-l-green-600">
            <div className="text-xs font-bold uppercase tracking-wider text-green-700">Won / Deals</div>
            <div className="text-2xl font-black font-heading text-green-800 mt-1">{stats.wonCount}</div>
          </div>
          <div className="card p-4 bg-white border border-tan/30">
            <div className="text-xs font-bold uppercase tracking-wider text-[#8E7F72]">Avg Score</div>
            <div className="text-2xl font-black font-heading text-espresso mt-1">{stats.avgScore}<span className="text-xs text-[#8E7F72]">/100</span></div>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="card p-4 bg-white border border-tan/30 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
            {/* Status Tabs */}
            <div className="flex flex-wrap gap-1.5">
              {["ALL", "NEW", "CONTACTED", "SCHEDULED", "WON", "LOST"].map((st) => (
                <button
                  key={st}
                  onClick={() => setStatusFilter(st)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    statusFilter === st
                      ? "bg-rust text-white shadow"
                      : "bg-sand text-[#6B5E52] hover:bg-tan/40"
                  }`}
                >
                  {st === "ALL" ? "All Leads" : STATUS_CONFIG[st]?.label || st}
                </button>
              ))}
            </div>

            {/* Search & City Filter */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              <div className="relative flex-1 sm:w-64">
                <input
                  type="text"
                  placeholder="Search name, phone, service…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="form-input pl-9 pr-3 py-1.5 text-xs w-full"
                />
                <SearchIcon size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-tan" />
              </div>

              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="form-input py-1.5 text-xs w-full sm:w-44"
              >
                <option value="ALL">All 9 Cities</option>
                {CITIES.map((c) => (
                  <option key={c.slug} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Leads Table / List */}
        <div className="bg-white rounded-2xl shadow-warm border border-tan/30 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-[#8E7F72]">
              <RefreshCwIcon size={28} className="animate-spin mx-auto mb-2 text-rust" />
              <p className="text-sm">Loading lead pipeline…</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-12 text-center text-[#8E7F72]">
              <FilterIcon size={32} className="mx-auto mb-3 text-tan opacity-60" />
              <h3 className="font-heading font-bold text-base text-espresso">No leads found</h3>
              <p className="text-xs mt-1">Try broadening your search or resetting your status filter.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-sand border-b border-tan/30 text-[#8E7F72] uppercase tracking-wider font-bold">
                    <th className="py-3.5 px-4">Contact</th>
                    <th className="py-3.5 px-4">Service &amp; City</th>
                    <th className="py-3.5 px-4">Score</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4">Attribution</th>
                    <th className="py-3.5 px-4">Consent</th>
                    <th className="py-3.5 px-4">Submitted</th>
                    <th className="py-3.5 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-tan/20">
                  {filteredLeads.map((l) => (
                    <tr
                      key={l.id}
                      className="hover:bg-sand/40 transition-colors cursor-pointer"
                      onClick={() => {
                        setSelectedLead(l);
                        setInternalNote(l.notes || "");
                      }}
                    >
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-espresso text-sm">{l.name}</div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <a
                            href={`tel:${l.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-rust font-semibold hover:underline flex items-center gap-1"
                          >
                            <PhoneIcon size={12} />
                            {l.phone}
                          </a>
                        </div>
                        {l.email && (
                          <div className="text-[#6B5E52] flex items-center gap-1 text-[11px] mt-0.5">
                            <MailIcon size={11} />
                            {l.email}
                          </div>
                        )}
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-espresso">{l.service}</div>
                        <div className="text-[#8E7F72] flex items-center gap-1 mt-0.5">
                          <MapPinIcon size={12} className="text-rust" />
                          {l.city}, CA
                        </div>
                      </td>

                      <td className="py-3.5 px-4">
                        <span className={`inline-block px-2 py-0.5 rounded-full font-bold border text-[11px] ${getScoreBadge(l.score)}`}>
                          {l.score}
                        </span>
                      </td>

                      <td className="py-3.5 px-4" onClick={(e) => e.stopPropagation()}>
                        <select
                          value={l.status}
                          disabled={updatingStatusId === l.id}
                          onChange={(e) => handleStatusChange(l.id, e.target.value)}
                          className={`form-input py-1 px-2 text-xs font-bold rounded-lg border ${
                            STATUS_CONFIG[l.status]?.bg || "bg-stone-100"
                          } ${STATUS_CONFIG[l.status]?.text || "text-stone-800"}`}
                        >
                          <option value="NEW">New Lead</option>
                          <option value="CONTACTED">Contacted</option>
                          <option value="SCHEDULED">Scheduled</option>
                          <option value="WON">Won / Completed</option>
                          <option value="LOST">Lost / Closed</option>
                        </select>
                      </td>

                      <td className="py-3.5 px-4">
                        <span className="font-medium text-espresso block">
                          {l.utmSource || l.source}
                        </span>
                        {(l.utmCampaign || l.gclid || l.fbclid) && (
                          <span className="text-[10px] text-rust font-semibold block">
                            {l.utmCampaign || (l.fbclid ? "Meta Ad" : "Google Ad")}
                          </span>
                        )}
                      </td>

                      <td className="py-3.5 px-4">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1">
                            <span className={`w-2 h-2 rounded-full ${l.consent?.phoneOptIn ? "bg-green-500" : "bg-stone-300"}`} />
                            <span className="text-[11px] text-[#6B5E52]">SMS: {l.consent?.phoneOptIn ? "Opted In" : "No"}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className={`w-2 h-2 rounded-full ${l.consent?.emailOptIn ? "bg-green-500" : "bg-stone-300"}`} />
                            <span className="text-[11px] text-[#6B5E52]">Email: {l.consent?.emailOptIn ? "Opted In" : "No"}</span>
                          </div>
                        </div>
                      </td>

                      <td className="py-3.5 px-4 text-[#8E7F72]">
                        {new Date(l.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => {
                            setSelectedLead(l);
                            setInternalNote(l.notes || "");
                          }}
                          className="btn-outline text-[11px] py-1 px-2.5 inline-flex items-center gap-1"
                        >
                          <span>Details</span>
                          <ChevronRightIcon size={12} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Slide-over Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 flex justify-end animate-fade-in">
          <div className="w-full max-w-xl bg-white h-full shadow-2xl overflow-y-auto p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-tan/30">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-heading font-black text-2xl text-espresso">
                      {selectedLead.name}
                    </h2>
                    <span className={`px-2 py-0.5 rounded-full font-bold border text-xs ${getScoreBadge(selectedLead.score)}`}>
                      Score {selectedLead.score}/100
                    </span>
                  </div>
                  <p className="text-xs text-[#8E7F72] mt-0.5">
                    Lead ID: {selectedLead.id} · Submitted {new Date(selectedLead.createdAt).toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="p-1 text-stone-400 hover:text-espresso rounded-lg"
                >
                  <XIcon size={20} />
                </button>
              </div>

              {/* Status Selector */}
              <div className="bg-sand p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase text-[#8E7F72] block">Pipeline Stage</span>
                  <span className="text-sm font-black font-heading text-espresso">
                    {STATUS_CONFIG[selectedLead.status]?.label || selectedLead.status}
                  </span>
                </div>
                <select
                  value={selectedLead.status}
                  onChange={(e) => handleStatusChange(selectedLead.id, e.target.value)}
                  className="form-input py-1.5 px-3 text-xs font-bold"
                >
                  <option value="NEW">New Lead</option>
                  <option value="CONTACTED">Contacted</option>
                  <option value="SCHEDULED">Scheduled</option>
                  <option value="WON">Won / Completed</option>
                  <option value="LOST">Lost / Closed</option>
                </select>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${selectedLead.phone}`}
                  className="btn-rust justify-center py-2.5 text-xs font-bold shadow flex items-center gap-2"
                  style={{ backgroundColor: "#C1502E" }}
                >
                  <PhoneIcon size={14} />
                  Call {selectedLead.phone}
                </a>
                {selectedLead.email ? (
                  <a
                    href={`mailto:${selectedLead.email}?subject=KustomXworks Estimate Inquiry`}
                    className="btn-outline justify-center py-2.5 text-xs font-bold flex items-center gap-2"
                  >
                    <MailIcon size={14} />
                    Email Customer
                  </a>
                ) : (
                  <div className="border border-tan/40 text-[#8E7F72] rounded-lg py-2.5 text-xs text-center">
                    No Email Provided
                  </div>
                )}
              </div>

              {/* Project Scope & Details */}
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-sm text-espresso uppercase tracking-wider">
                  Project Request
                </h3>
                <div className="bg-stone-50 border border-tan/30 rounded-xl p-4 text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#8E7F72]">Service:</span>
                    <span className="font-bold text-espresso">{selectedLead.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E7F72]">City:</span>
                    <span className="font-bold text-espresso">{selectedLead.city}, CA</span>
                  </div>
                  {selectedLead.propertyType && (
                    <div className="flex justify-between">
                      <span className="text-[#8E7F72]">Property Type:</span>
                      <span className="font-bold text-espresso">{selectedLead.propertyType}</span>
                    </div>
                  )}
                  {selectedLead.preferredDate && (
                    <div className="flex justify-between">
                      <span className="text-[#8E7F72]">Requested Date:</span>
                      <span className="font-bold text-espresso">{selectedLead.preferredDate} {selectedLead.preferredTime || ""}</span>
                    </div>
                  )}
                  {selectedLead.bestTime && (
                    <div className="flex justify-between">
                      <span className="text-[#8E7F72]">Best Time to Call:</span>
                      <span className="font-bold text-espresso">{selectedLead.bestTime}</span>
                    </div>
                  )}
                  {selectedLead.details && (
                    <div className="pt-2 border-t border-tan/20">
                      <span className="text-[#8E7F72] block mb-1">Customer Description:</span>
                      <p className="text-espresso font-medium whitespace-pre-wrap bg-white p-2.5 rounded border border-tan/20">
                        {selectedLead.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Attribution & Marketing Origin */}
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-sm text-espresso uppercase tracking-wider">
                  Marketing Attribution (First Touch)
                </h3>
                <div className="bg-stone-50 border border-tan/30 rounded-xl p-4 text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#8E7F72]">Origin Source:</span>
                    <span className="font-bold text-espresso">{selectedLead.utmSource || selectedLead.source}</span>
                  </div>
                  {selectedLead.utmMedium && (
                    <div className="flex justify-between">
                      <span className="text-[#8E7F72]">Medium:</span>
                      <span className="font-medium text-espresso">{selectedLead.utmMedium}</span>
                    </div>
                  )}
                  {selectedLead.utmCampaign && (
                    <div className="flex justify-between">
                      <span className="text-[#8E7F72]">Campaign:</span>
                      <span className="font-medium text-espresso">{selectedLead.utmCampaign}</span>
                    </div>
                  )}
                  {selectedLead.landingPage && (
                    <div className="flex justify-between">
                      <span className="text-[#8E7F72]">Landing Page:</span>
                      <span className="font-medium text-espresso">{selectedLead.landingPage}</span>
                    </div>
                  )}
                  {selectedLead.fbclid && (
                    <div className="flex justify-between">
                      <span className="text-[#8E7F72]">Meta/Zeely Click ID:</span>
                      <span className="font-mono text-[10px] text-rust truncate max-w-[240px]">{selectedLead.fbclid}</span>
                    </div>
                  )}
                  {selectedLead.gclid && (
                    <div className="flex justify-between">
                      <span className="text-[#8E7F72]">Google Click ID:</span>
                      <span className="font-mono text-[10px] text-rust truncate max-w-[240px]">{selectedLead.gclid}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* TCPA / CAN-SPAM Compliance Log */}
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-sm text-espresso uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheckIcon size={16} className="text-green-600" />
                  Compliance &amp; Consent Record
                </h3>
                <div className="bg-stone-50 border border-tan/30 rounded-xl p-4 text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#8E7F72]">TCPA SMS Opt-in:</span>
                    <span className={`font-bold ${selectedLead.consent?.phoneOptIn ? "text-green-700" : "text-stone-500"}`}>
                      {selectedLead.consent?.phoneOptIn ? "VERIFIED (Checkbox checked)" : "Not Given"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8E7F72]">CAN-SPAM Email Opt-in:</span>
                    <span className={`font-bold ${selectedLead.consent?.emailOptIn ? "text-green-700" : "text-stone-500"}`}>
                      {selectedLead.consent?.emailOptIn ? "VERIFIED (Checkbox checked)" : "Not Given"}
                    </span>
                  </div>
                  {selectedLead.consent?.ip && (
                    <div className="flex justify-between">
                      <span className="text-[#8E7F72]">IP Address:</span>
                      <span className="font-mono text-[11px] text-espresso">{selectedLead.consent.ip}</span>
                    </div>
                  )}
                  {selectedLead.consent?.userAgent && (
                    <div>
                      <span className="text-[#8E7F72] block mb-0.5">User Agent:</span>
                      <span className="font-mono text-[10px] text-[#6B5E52] block break-all bg-white p-2 rounded border border-tan/20">
                        {selectedLead.consent.userAgent}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Internal CRM Notes */}
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-sm text-espresso uppercase tracking-wider">
                  Internal Notes &amp; Follow-up Log
                </h3>
                <div className="space-y-2">
                  <textarea
                    rows={4}
                    value={internalNote}
                    onChange={(e) => setInternalNote(e.target.value)}
                    placeholder="Log estimate amount, conversation notes, materials ordered, follow-up dates…"
                    className="form-input text-xs resize-none w-full"
                  />
                  <button
                    onClick={handleSaveNote}
                    disabled={savingNote}
                    className="btn-rust text-xs py-1.5 px-3 flex items-center gap-1.5 disabled:opacity-60"
                    style={{ backgroundColor: "#C1502E" }}
                  >
                    <SaveIcon size={14} />
                    <span>{savingNote ? "Saving…" : "Save Notes"}</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-tan/30 flex justify-end">
              <button
                onClick={() => setSelectedLead(null)}
                className="btn-outline text-xs py-2 px-4"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
