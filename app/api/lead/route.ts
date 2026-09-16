import { BUSINESS, COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL } from "@/content/business";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// In-memory sliding-window rate limiter: max 5 requests per 10 minutes per IP
interface RateLimitEntry {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitEntry>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 10 * 60 * 1000; // 10 minutes
  const limit = 5;

  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= limit) {
    return false;
  }

  entry.count += 1;
  return true;
}

// Clean up stale rate limits every 15 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now > entry.resetAt) {
      rateLimitMap.delete(ip);
    }
  }
}, 15 * 60 * 1000);

interface AttributionPayload {
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
}

interface LeadRequestBody {
  name: string;
  phone: string;
  email?: string;
  city: string;
  service: string;
  details?: string;
  bestTime?: string;
  propertyType?: string;
  preferredDate?: string;
  preferredTime?: string;
  source?: string;
  phoneOptIn?: boolean;
  emailOptIn?: boolean;
  attribution?: AttributionPayload;
}

function calculateLeadScore(body: LeadRequestBody): number {
  let score = 20; // Base score for reaching submission

  if (body.phone?.trim()) score += 20;
  if (body.email?.trim()) score += 10;
  if (body.details && body.details.trim().length > 25) score += 15;
  if (body.preferredDate || body.preferredTime) score += 15;

  // High-intent structural & specialty services
  const svcLower = (body.service || "").toLowerCase();
  if (
    svcLower.includes("wall") ||
    svcLower.includes("masonry") ||
    svcLower.includes("concrete") ||
    svcLower.includes("landscaping") ||
    svcLower.includes("remodel") ||
    svcLower.includes("aging") ||
    svcLower.includes("structural")
  ) {
    score += 15;
  }

  // Paid ad attribution bonus
  const utmSource = (body.attribution?.utmSource || "").toLowerCase();
  const isPaid =
    !!body.attribution?.gclid ||
    !!body.attribution?.fbclid ||
    utmSource.includes("zeely") ||
    utmSource.includes("facebook") ||
    utmSource.includes("google") ||
    utmSource.includes("cpc") ||
    utmSource.includes("paid");

  if (isPaid) score += 10;

  return Math.min(100, score);
}

export async function POST(req: NextRequest) {
  try {
    // 1. Client IP & Rate Limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip") || "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many requests. Please contact us directly at ${COMPANY_PHONE_DISPLAY}.`,
        },
        { status: 429 }
      );
    }

    const body: LeadRequestBody = await req.json();

    // 2. Server-side Validation
    if (!body.name?.trim()) {
      return NextResponse.json({ success: false, error: "Name is required." }, { status: 400 });
    }
    if (!body.phone?.trim()) {
      return NextResponse.json({ success: false, error: "Phone number is required." }, { status: 400 });
    }
    if (!body.city?.trim()) {
      return NextResponse.json({ success: false, error: "City is required." }, { status: 400 });
    }
    if (!body.service?.trim()) {
      return NextResponse.json({ success: false, error: "Service is required." }, { status: 400 });
    }

    const score = calculateLeadScore(body);
    const attr = body.attribution || {};
    const consentType =
      body.phoneOptIn && body.emailOptIn
        ? "BOTH"
        : body.phoneOptIn
        ? "SMS_ONLY"
        : body.emailOptIn
        ? "EMAIL_ONLY"
        : "NONE";

    const disclosureText =
      "TCPA SMS: By checking this box, I agree to receive text messages and/or phone calls from KustomXworks regarding my inquiry. Reply STOP to cancel. CAN-SPAM Email: I agree to receive email updates and project estimates.";

    // 3. Database Persistence (with safe fallback if DB URL not configured)
    let leadId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    let dbPersisted = false;

    try {
      if (process.env.DATABASE_URL) {
        const lead = await prisma.lead.create({
          data: {
            name: body.name.trim(),
            phone: body.phone.trim(),
            email: body.email?.trim() || null,
            city: body.city.trim(),
            service: body.service.trim(),
            details: body.details?.trim() || null,
            bestTime: body.bestTime || null,
            propertyType: body.propertyType || null,
            preferredDate: body.preferredDate || null,
            preferredTime: body.preferredTime || null,
            source: body.source || "lead-form",
            score,
            status: "NEW",
            // Attribution
            gclid: attr.gclid || null,
            fbclid: attr.fbclid || null,
            msclkid: attr.msclkid || null,
            utmSource: attr.utmSource || null,
            utmMedium: attr.utmMedium || null,
            utmCampaign: attr.utmCampaign || null,
            utmTerm: attr.utmTerm || null,
            utmContent: attr.utmContent || null,
            landingPage: attr.landingPage || null,
            referrer: attr.referrer || null,
            // Consent relation
            consents: {
              create: {
                type: consentType,
                ip,
                userAgent,
                emailOptIn: !!body.emailOptIn,
                phoneOptIn: !!body.phoneOptIn,
                disclosure: disclosureText,
                consentText: disclosureText,
                consentSource: body.source || "website",
                consentIp: ip,
                consentAt: new Date(),
              },
            },
            // Activity log
            activities: {
              create: {
                type: "LEAD_CREATED",
                description: `Lead created via ${body.source || "lead-form"} with Lead Score ${score}/100`,
              },
            },
          },
        });
        leadId = lead.id;
        dbPersisted = true;
      }
    } catch (dbErr) {
      console.error("[/api/lead] Database persistence warning:", dbErr);
    }

    // 4. Automation & Email Sending via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const ownerEmail = process.env.OWNER_DIGEST_EMAIL || process.env.NOTIFICATION_EMAIL || "kustomxworks@proton.me";

    if (resendApiKey) {
      // 4a. Owner Notification Alert
      try {
        const ownerSubject = `${score >= 70 ? "🚨 [HIGH VALUE " + score + "/100]" : "📋 [Lead " + score + "/100]"} ${body.service} in ${body.city} — ${body.name}`;
        const ownerHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2A211A; line-height: 1.5;">
            <div style="background-color: #2A211A; color: #EDE6DC; padding: 18px 24px; border-radius: 8px 8px 0 0;">
              <h2 style="margin: 0; font-size: 20px;">New Lead Received — KustomXworks</h2>
              <p style="margin: 4px 0 0 0; font-size: 13px; color: #D8C4A8;">Lead Quality Score: <strong>${score}/100</strong></p>
            </div>
            <div style="border: 1px solid #D8C4A8; border-top: none; padding: 24px; border-radius: 0 0 8px 8px; background: #FFF;">
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 6px 0; font-weight: bold; width: 140px;">Customer Name:</td><td>${body.name}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Phone:</td><td><a href="tel:${body.phone}" style="color: #C1502E; font-weight: bold;">${body.phone}</a></td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Email:</td><td>${body.email ? `<a href="mailto:${body.email}">${body.email}</a>` : "(Not provided)"}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">City:</td><td><strong>${body.city}</strong></td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Service Requested:</td><td><strong>${body.service}</strong></td></tr>
                ${body.propertyType ? `<tr><td style="padding: 6px 0; font-weight: bold;">Property Type:</td><td>${body.propertyType}</td></tr>` : ""}
                ${body.preferredDate ? `<tr><td style="padding: 6px 0; font-weight: bold;">Preferred Date/Time:</td><td>${body.preferredDate} ${body.preferredTime || ""}</td></tr>` : ""}
                <tr><td style="padding: 6px 0; font-weight: bold;">Best Time to Call:</td><td>${body.bestTime || "Any time"}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Lead Source:</td><td>${body.source || "lead-form"}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Attribution:</td><td>${attr.utmSource || "direct"} / ${attr.utmCampaign || "none"} ${attr.gclid ? "(Google Ads)" : ""} ${attr.fbclid ? "(Meta/Zeely)" : ""}</td></tr>
                <tr><td style="padding: 6px 0; font-weight: bold;">Consent:</td><td>SMS Opt-in: ${body.phoneOptIn ? "YES (TCPA Compliant)" : "No"} | Email Opt-in: ${body.emailOptIn ? "YES" : "No"}</td></tr>
              </table>

              ${body.details ? `
                <div style="margin-top: 18px; padding: 14px; background: #F7F1E8; border-radius: 6px;">
                  <strong style="display: block; margin-bottom: 4px;">Project Details:</strong>
                  ${body.details}
                </div>
              ` : ""}

              <div style="margin-top: 24px; text-align: center;">
                <a href="tel:${body.phone}" style="display: inline-block; background-color: #C1502E; color: #FFF; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">
                  Call Lead Now (${body.phone})
                </a>
              </div>
            </div>
          </div>
        `;

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "KustomXworks Leads <leads@kustomxworks.com>",
            to: [ownerEmail],
            subject: ownerSubject,
            html: ownerHtml,
          }),
        });

        if (dbPersisted) {
          await prisma.emailSend.create({
            data: {
              leadId,
              to: ownerEmail,
              subject: ownerSubject,
              type: "HOT_LEAD_ALERT",
              status: "SENT",
            },
          }).catch(() => null);
        }
      } catch (err) {
        console.error("[/api/lead] Owner alert email failed:", err);
      }

      // 4b. Customer Welcome Autoresponder (only if emailOptIn === true and email provided)
      if (body.emailOptIn && body.email?.trim()) {
        try {
          const custSubject = `We received your inquiry — KustomXworks`;
          const custHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2A211A; line-height: 1.6;">
              <div style="background-color: #2A211A; color: #EDE6DC; padding: 20px 24px; border-radius: 8px 8px 0 0;">
                <h2 style="margin: 0; font-size: 22px;">KustomXworks Handyman &amp; Construction</h2>
                <p style="margin: 4px 0 0 0; font-size: 13px; color: #D8C4A8;">Building America Back From the Ground Up — One Project at a Time.</p>
              </div>
              <div style="border: 1px solid #D8C4A8; border-top: none; padding: 24px; border-radius: 0 0 8px 8px; background: #FFF;">
                <p>Hi ${body.name},</p>
                <p>Thank you for contacting KustomXworks! We have received your request regarding <strong>${body.service}</strong> in <strong>${body.city}</strong>.</p>
                <p>Our team is reviewing your project details and will be in touch with you same business day to discuss pricing, scheduling, or answer any questions.</p>
                
                <div style="background: #F7F1E8; padding: 16px; border-radius: 6px; margin: 20px 0;">
                  <h4 style="margin: 0 0 8px 0;">Need immediate assistance or emergency repairs?</h4>
                  <p style="margin: 0;">Call our direct line: <a href="${COMPANY_PHONE_TEL}" style="color: #C1502E; font-weight: bold;">${COMPANY_PHONE_DISPLAY}</a></p>
                </div>

                <p style="font-size: 13px; color: #6B5E52; margin-top: 30px; border-top: 1px solid #E5DCD1; padding-top: 15px;">
                  <strong>KustomXworks</strong><br />
                  3337 W. Florida ave #166, Hemet, CA 92545<br />
                  Phone: ${COMPANY_PHONE_DISPLAY} | Email: ${BUSINESS.email}<br />
                  <em>You received this email because you opted in on our website inquiry form.</em>
                </p>
              </div>
            </div>
          `;

          await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${resendApiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "KustomXworks <leads@kustomxworks.com>",
              to: [body.email.trim()],
              subject: custSubject,
              html: custHtml,
            }),
          });

          if (dbPersisted) {
            await prisma.emailSend.create({
              data: {
                leadId,
                to: body.email.trim(),
                subject: custSubject,
                type: "CUSTOMER_WELCOME",
                status: "SENT",
              },
            }).catch(() => null);
          }
        } catch (err) {
          console.error("[/api/lead] Customer welcome autoresponder failed:", err);
        }
      }
    } else {
      console.log(`[/api/lead] RESEND_API_KEY not set. Lead logged (Score ${score}/100): ${body.name} - ${body.phone}`);
    }

    return NextResponse.json({ success: true, leadId, score }, { status: 200 });
  } catch (err) {
    console.error("[/api/lead] Error handling lead:", err);
    return NextResponse.json(
      { success: false, error: `An unexpected error occurred. Please contact us at ${COMPANY_PHONE_DISPLAY}.` },
      { status: 500 }
    );
  }
}
