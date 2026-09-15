import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/lead
 *
 * Validates the lead form submission, then:
 *  - If RESEND_API_KEY is set: sends email via Resend
 *  - Otherwise: logs to console and returns success gracefully
 *
 * TODO: connect CRM/email — add CRM webhook URL to .env and call it here
 */

interface LeadData {
  name: string;
  phone: string;
  email?: string;
  city: string;
  service: string;
  details?: string;
  bestTime?: string;
  source?: string;
  // Booking wizard fields
  propertyType?: string;
  preferredDate?: string;
  preferredTime?: string;
}

function validateLead(data: LeadData): string[] {
  const errors: string[] = [];
  if (!data.name?.trim()) errors.push("Name is required");
  if (!data.phone?.trim()) errors.push("Phone is required");
  if (!data.city?.trim()) errors.push("City is required");
  if (!data.service?.trim()) errors.push("Service is required");
  return errors;
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadData = await req.json();

    // Server-side validation
    const errors = validateLead(body);
    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const leadSummary = `
NEW LEAD — KustomXworks Website
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:     ${body.name}
Phone:    ${body.phone}
Email:    ${body.email || "(not provided)"}
City:     ${body.city}
Service:  ${body.service}
Details:  ${body.details || "(none)"}
Best Time: ${body.bestTime || "Any time"}
Property: ${body.propertyType || "(not provided)"}
Date Pref: ${body.preferredDate || "(not provided)"}
Time Pref: ${body.preferredTime || "(not provided)"}
Source:   ${body.source || "lead-form"}
Submitted: ${new Date().toISOString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    // ── Send via Resend if key is present ────────────────────────────────────
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;

    if (resendApiKey && notificationEmail) {
      try {
        const resendPayload = {
          from: "KustomXworks Leads <leads@kustomxworks.com>",
          to: [notificationEmail],
          subject: `New Lead: ${body.service} in ${body.city} — ${body.name}`,
          text: leadSummary,
          html: `<pre style="font-family:monospace;white-space:pre-wrap">${leadSummary}</pre>`,
        };

        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resendPayload),
        });

        if (!resendRes.ok) {
          console.error("[/api/lead] Resend error:", await resendRes.text());
        }
      } catch (err) {
        console.error("[/api/lead] Resend send failed:", err);
        // Don't block the user — continue to success response
      }
    } else {
      // No Resend key — log gracefully (never block the user)
      console.log("[/api/lead] RESEND_API_KEY not set. Lead received (not emailed):");
      console.log(leadSummary);
    }

    // TODO: connect CRM/email
    // Example: await fetch(process.env.CRM_WEBHOOK_URL, { method: "POST", body: JSON.stringify(body) });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/lead] Unexpected error:", err);
    return NextResponse.json(
      { success: false, errors: ["Server error. Please try calling us directly."] },
      { status: 500 }
    );
  }
}
