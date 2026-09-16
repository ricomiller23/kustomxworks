"use client";

import { useState } from "react";
import { BUSINESS } from "@/content/business";
import { CITIES } from "@/content/cities";
import { SERVICE_NAMES } from "@/content/services";
import { getAttributionPayload } from "@/lib/attribution";
import {
  CheckCircleIcon,
  ClipboardListIcon,
  CalendarIcon,
  UserIcon,
  ThumbsUpIcon,
  ShieldCheckIcon,
  ClockIcon,
  TagIcon,
} from "lucide-react";

const PROPERTY_TYPES = ["Single Family Home", "Condo/Townhome", "Apartment", "Commercial", "Rental Property", "Vacation Rental"];
const TIME_SLOTS = ["7AM–9AM", "9AM–11AM", "11AM–1PM", "1PM–3PM", "3PM–5PM", "5PM–7PM"];

const TRUST_CARDS = [
  { icon: <ThumbsUpIcon size={24} />, title: "Satisfaction Guaranteed", body: "Not happy? We make it right — no questions asked." },
  { icon: <ShieldCheckIcon size={24} />, title: "Construction Expertise", body: "Master craftsmanship in concrete block walls, custom landscaping, and complete structural repairs." },
  { icon: <ClockIcon size={24} />, title: "Flexible Scheduling", body: "Morning, afternoon, or evening — we work around your schedule." },
  { icon: <TagIcon size={24} />, title: "Transparent Pricing", body: "Flat-rate quotes before we start. No hidden fees, ever." },
];

const STEPS = [
  { number: 1, label: "Service Details", icon: <ClipboardListIcon size={16} /> },
  { number: 2, label: "Date & Time", icon: <CalendarIcon size={16} /> },
  { number: 3, label: "Your Info", icon: <UserIcon size={16} /> },
  { number: 4, label: "Confirmation", icon: <CheckCircleIcon size={16} /> },
];

export function BookingWizard() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    city: "",
    service: "",
    details: "",
    propertyType: "",
    preferredDate: "",
    preferredTime: "",
    name: "",
    phone: "",
    email: "",
    bestTime: "",
    phoneOptIn: false,
    emailOptIn: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function update(field: string, val: any) {
    setForm((f) => ({ ...f, [field]: val }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
  }

  function validateStep(s: number) {
    const errs: Record<string, string> = {};
    if (s === 1) {
      if (!form.city) errs.city = "Please select a city";
      if (!form.service) errs.service = "Please select a service";
    }
    if (s === 2) {
      if (!form.preferredDate) errs.preferredDate = "Please choose a date";
    }
    if (s === 3) {
      if (!form.name.trim()) errs.name = "Your name is required";
      if (!form.phone.trim()) {
        errs.phone = "Your phone number is required";
      } else if (!/^[\d\s().+-]{7,}$/.test(form.phone.trim())) {
        errs.phone = "Please enter a valid phone number";
      }
    }
    return errs;
  }

  function next() {
    const errs = validateStep(step);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    if (step < 4) setStep((s) => s + 1);
  }

  function back() {
    if (step > 1) setStep((s) => s - 1);
  }

  async function handleSubmit() {
    const errs = validateStep(3);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    try {
      const attribution = getAttributionPayload();
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "booking-wizard",
          attribution,
        }),
      });
    } catch (e) {
      console.error("Failed to submit booking lead:", e);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      setStep(4);
    }
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <div className="grid lg:grid-cols-3 gap-8 items-start">
      {/* Main wizard */}
      <div className="lg:col-span-2">
        {/* Step indicator */}
        <div className="flex items-center mb-8 overflow-x-auto pb-2">
          {STEPS.map((s, idx) => (
            <div key={s.number} className="flex items-center flex-shrink-0">
              <div className="wizard-step">
                <div
                  className={`wizard-step-circle ${
                    s.number < step ? "completed" : s.number === step ? "active" : "inactive"
                  }`}
                >
                  {s.number < step ? <CheckCircleIcon size={16} /> : s.number}
                </div>
                <span
                  className={`text-xs font-semibold hidden sm:block ${
                    s.number === step ? "text-rust" : "text-[#6B5E52]"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {idx < STEPS.length - 1 && (
                <div
                  className={`h-0.5 w-8 sm:w-16 mx-2 rounded-full ${
                    s.number < step ? "bg-rust" : "bg-tan"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="card p-6 md:p-8 space-y-5 animate-fade-up">
            <h2 className="font-heading font-black text-2xl text-espresso">Step 1: Service Details</h2>
            <div>
              <label htmlFor="wiz-city" className="form-label">Select Your City <span className="text-rust">*</span></label>
              <select id="wiz-city" value={form.city} onChange={(e) => update("city", e.target.value)} className={`form-input ${errors.city ? "border-red-400" : ""}`}>
                <option value="">Choose a city…</option>
                {CITIES.map((c) => (
                  <option key={c.slug} value={c.name}>{c.name}, {c.state}</option>
                ))}
              </select>
              {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
            </div>
            <div>
              <label htmlFor="wiz-service" className="form-label">Service Needed <span className="text-rust">*</span></label>
              <select id="wiz-service" value={form.service} onChange={(e) => update("service", e.target.value)} className={`form-input ${errors.service ? "border-red-400" : ""}`}>
                <option value="">Choose a service…</option>
                {SERVICE_NAMES.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
              {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
            </div>
            <div>
              <label htmlFor="wiz-property" className="form-label">Property Type</label>
              <select id="wiz-property" value={form.propertyType} onChange={(e) => update("propertyType", e.target.value)} className="form-input">
                <option value="">Select type…</option>
                {PROPERTY_TYPES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="wiz-details" className="form-label">Project Notes &amp; Special Requests</label>
              <textarea id="wiz-details" rows={3} value={form.details} onChange={(e) => update("details", e.target.value)} className="form-input resize-none" placeholder="Tell us about the project — scope, measurements, urgency…" />
            </div>
            <button onClick={next} className="btn-rust w-full sm:w-auto">Next: Choose Date &amp; Time →</button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="card p-6 md:p-8 space-y-5 animate-fade-up">
            <h2 className="font-heading font-black text-2xl text-espresso">Step 2: Date &amp; Time</h2>
            <div>
              <label htmlFor="wiz-date" className="form-label">Preferred Date <span className="text-rust">*</span></label>
              <input type="date" id="wiz-date" min={minDate} value={form.preferredDate} onChange={(e) => update("preferredDate", e.target.value)} className={`form-input ${errors.preferredDate ? "border-red-400" : ""}`} />
              {errors.preferredDate && <p className="text-red-500 text-xs mt-1">{errors.preferredDate}</p>}
            </div>
            <div>
              <label className="form-label mb-3">Preferred Time Slot</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => update("preferredTime", slot)}
                    className={`py-2.5 px-3 rounded-lg border-2 text-sm font-semibold transition-all ${
                      form.preferredTime === slot
                        ? "border-rust bg-rust text-white"
                        : "border-tan bg-white text-espresso hover:border-rust"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={back} className="btn-outline">← Back</button>
              <button onClick={next} className="btn-rust">Next: Your Info →</button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="card p-6 md:p-8 space-y-5 animate-fade-up">
            <h2 className="font-heading font-black text-2xl text-espresso">Step 3: Your Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="wiz-name" className="form-label">Full Name <span className="text-rust">*</span></label>
                <input id="wiz-name" type="text" autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)} className={`form-input ${errors.name ? "border-red-400" : ""}`} placeholder="Jane Smith" />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="wiz-phone" className="form-label">Phone <span className="text-rust">*</span></label>
                <input id="wiz-phone" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={`form-input ${errors.phone ? "border-red-400" : ""}`} placeholder={BUSINESS.phone} />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="wiz-email" className="form-label">Email Address</label>
                <input id="wiz-email" type="email" autoComplete="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="form-input" placeholder="jane@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="wiz-calltime" className="form-label">Best Time to Call</label>
                <select id="wiz-calltime" value={form.bestTime} onChange={(e) => update("bestTime", e.target.value)} className="form-input">
                  <option value="">Any time</option>
                  <option value="Morning">Morning (7AM–12PM)</option>
                  <option value="Afternoon">Afternoon (12PM–5PM)</option>
                  <option value="Evening">Evening (5PM–7PM)</option>
                </select>
              </div>

              {/* TCPA & CAN-SPAM Consent Checkboxes */}
              <div className="sm:col-span-2 pt-3 border-t border-tan space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="phoneOptIn"
                    checked={form.phoneOptIn}
                    onChange={(e) => update("phoneOptIn", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-tan text-rust focus:ring-rust"
                  />
                  <span className="text-xs text-[#6B5E52] leading-relaxed">
                    I agree to be contacted by phone or text (SMS) about my project. Message/data rates may apply. I can opt out anytime. Consent is not a condition of purchase.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="emailOptIn"
                    checked={form.emailOptIn}
                    onChange={(e) => update("emailOptIn", e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-tan text-rust focus:ring-rust"
                  />
                  <span className="text-xs text-[#6B5E52] leading-relaxed">
                    I'd like to receive occasional email updates and offers from KustomXworks. I can unsubscribe anytime.
                  </span>
                </label>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={back} className="btn-outline">← Back</button>
              <button onClick={handleSubmit} disabled={submitting} className="btn-rust disabled:opacity-60">
                {submitting ? "Booking…" : "Confirm Booking →"}
              </button>
            </div>
          </div>
        )}

        {/* Step 4 — Confirmation */}
        {step === 4 && submitted && (
          <div className="card p-8 text-center animate-fade-up">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircleIcon size={40} className="text-green-600" />
            </div>
            <h2 className="font-heading font-black text-3xl text-espresso mb-2">Booking Request Confirmed!</h2>
            <p className="text-[#6B5E52] mb-2">
              Thanks, <strong>{form.name}</strong>! We&apos;ve received your request for{" "}
              <strong>{form.service}</strong> in <strong>{form.city}</strong>.
            </p>
            <p className="text-sm text-[#6B5E52] mb-6">
              Our team will review your requested slot (<strong>{form.preferredDate} {form.preferredTime}</strong>) and contact you shortly to finalize details.
            </p>
            <div className="bg-sand p-4 rounded-xl max-w-sm mx-auto mb-6 text-left text-sm space-y-1">
              <div><strong>Name:</strong> {form.name}</div>
              <div><strong>Phone:</strong> {form.phone}</div>
              {form.email && <div><strong>Email:</strong> {form.email}</div>}
              <div><strong>City:</strong> {form.city}</div>
              <div><strong>Service:</strong> {form.service}</div>
              {form.propertyType && <div><strong>Property:</strong> {form.propertyType}</div>}
            </div>
            <p className="text-sm text-[#6B5E52]">
              Need immediate assistance? Call us directly:{" "}
              <a href={`tel:${BUSINESS.phoneRaw}`} className="font-bold text-rust">
                {BUSINESS.phone}
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Sidebar trust cards */}
      <div className="space-y-4">
        {TRUST_CARDS.map((c) => (
          <div key={c.title} className="card p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#D8C4A8" }}>
              <span className="text-espresso">{c.icon}</span>
            </div>
            <div>
              <h3 className="font-heading font-bold text-espresso text-sm mb-1">{c.title}</h3>
              <p className="text-xs text-[#6B5E52] leading-relaxed">{c.body}</p>
            </div>
          </div>
        ))}
        <div className="card p-5 bg-rust text-white" style={{ backgroundColor: "#C1502E" }}>
          <h3 className="font-heading font-bold text-base mb-1">Prefer to Call?</h3>
          <p className="text-xs text-orange-100 mb-3">Speak directly with our team for quick quotes or emergency bookings.</p>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="block text-center font-bold py-2.5 px-4 bg-white text-rust rounded-lg text-sm hover:bg-sand transition-colors"
            style={{ color: "#C1502E" }}
          >
            Call {BUSINESS.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
