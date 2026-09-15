"use client";

import { useState } from "react";
import { BUSINESS } from "@/content/business";
import { CITIES } from "@/content/cities";
import { SERVICE_NAMES } from "@/content/services";
import { CheckCircleIcon, PhoneIcon } from "lucide-react";

interface LeadFormProps {
  variant?: "full" | "compact";
  preselectedCity?: string;
  preselectedService?: string;
  title?: string;
  subtitle?: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  details: string;
  bestTime: string;
}

interface FormErrors {
  [key: string]: string;
}

export function LeadForm({
  variant = "full",
  preselectedCity = "",
  preselectedService = "",
  title = "Get Your Free Estimate",
  subtitle = "Tell us about your project and we'll get back to you same business day.",
}: LeadFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    city: preselectedCity,
    service: preselectedService,
    details: "",
    bestTime: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.phone.trim()) errs.phone = "Phone is required";
    else if (!/^[\d\s\-().+]{7,}$/.test(formData.phone))
      errs.phone = "Enter a valid phone number";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Enter a valid email address";
    if (!formData.city) errs.city = "Please select your city";
    if (!formData.service) errs.service = "Please select a service";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Server error");
      }
    } catch {
      // Fallback mailto if API fails
      const subject = encodeURIComponent("New Lead from KustomXworks Website");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nCity: ${formData.city}\nService: ${formData.service}\nDetails: ${formData.details}\nBest Time: ${formData.bestTime}`
      );
      window.location.href = `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
      setSubmitError(
        "Our form had an issue — your email app has been opened as a backup."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-warm p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircleIcon size={32} className="text-green-600" />
        </div>
        <h3 className="font-heading font-black text-2xl text-espresso mb-2">
          Request Received!
        </h3>
        <p className="text-[#6B5E52] mb-6">
          Thanks, {formData.name}! We&apos;ll be in touch same business day. For urgent needs, call us directly:
        </p>
        <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-rust inline-flex">
          <PhoneIcon size={18} aria-hidden="true" />
          {BUSINESS.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-warm p-6 md:p-8">
      <h2 className="font-heading font-black text-2xl md:text-3xl text-espresso mb-1">{title}</h2>
      <p className="text-[#6B5E52] mb-6 text-sm">{subtitle}</p>
      {submitError && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 text-sm text-amber-800">
          {submitError}
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate aria-label="Lead request form">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label htmlFor="lead-name" className="form-label">
              Full Name <span className="text-rust" aria-hidden="true">*</span>
            </label>
            <input
              id="lead-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? "border-red-400" : ""}`}
              placeholder="John Smith"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="lead-phone" className="form-label">
              Phone <span className="text-rust" aria-hidden="true">*</span>
            </label>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              className={`form-input ${errors.phone ? "border-red-400" : ""}`}
              placeholder="(951) 555-0000"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="lead-email" className="form-label">Email</label>
            <input
              id="lead-email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? "border-red-400" : ""}`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* City */}
          <div>
            <label htmlFor="lead-city" className="form-label">
              Your City <span className="text-rust" aria-hidden="true">*</span>
            </label>
            <select
              id="lead-city"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className={`form-input ${errors.city ? "border-red-400" : ""}`}
            >
              <option value="">Select your city…</option>
              {CITIES.map((city) => (
                <option key={city.slug} value={city.name}>
                  {city.name}, {city.state}
                </option>
              ))}
            </select>
            {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
          </div>

          {/* Service */}
          <div className="sm:col-span-2">
            <label htmlFor="lead-service" className="form-label">
              Service Needed <span className="text-rust" aria-hidden="true">*</span>
            </label>
            <select
              id="lead-service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className={`form-input ${errors.service ? "border-red-400" : ""}`}
            >
              <option value="">Select a service…</option>
              {SERVICE_NAMES.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
          </div>

          {/* Details */}
          <div className="sm:col-span-2">
            <label htmlFor="lead-details" className="form-label">Project Details</label>
            <textarea
              id="lead-details"
              name="details"
              rows={3}
              value={formData.details}
              onChange={handleChange}
              className="form-input resize-none"
              placeholder="Describe your project — what needs to be done, any relevant measurements or context…"
            />
          </div>

          {/* Best Time */}
          <div className="sm:col-span-2">
            <label htmlFor="lead-besttime" className="form-label">Best Time to Call</label>
            <select
              id="lead-besttime"
              name="bestTime"
              value={formData.bestTime}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Any time is fine</option>
              <option value="Morning (7AM–12PM)">Morning (7AM–12PM)</option>
              <option value="Afternoon (12PM–5PM)">Afternoon (12PM–5PM)</option>
              <option value="Evening (5PM–7PM)">Evening (5PM–7PM)</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="btn-rust w-full sm:w-auto justify-center text-base disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? "Sending…" : "Send My Request →"}
          </button>
          <p className="text-xs text-[#6B5E52] text-center">
            Or call us directly:{" "}
            <a href={`tel:${BUSINESS.phoneRaw}`} className="font-bold text-rust">
              {BUSINESS.phone}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
