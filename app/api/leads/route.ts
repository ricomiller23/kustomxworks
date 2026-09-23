import { COMPANY_PHONE_DISPLAY } from "@/content/business";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getAllLeads, saveLead, LeadRecord } from "@/lib/crm-storage";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const city = searchParams.get("city");
    const query = searchParams.get("query")?.toLowerCase();

    // 1. Fetch leads from persistent Cloud CRM store
    let leads: LeadRecord[] = [];
    try {
      leads = await getAllLeads();
    } catch (err) {
      console.error("[/api/leads] Cloud store fetch error:", err);
    }

    // 2. If Postgres is connected and working, try to merge database leads
    if (process.env.DATABASE_URL) {
      try {
        const dbLeads = await prisma.lead.findMany({
          include: {
            consents: true,
            activities: { orderBy: { createdAt: "desc" } },
          },
          orderBy: { createdAt: "desc" },
        });

        const existingIds = new Set(leads.map((l) => l.id));
        for (const dbL of dbLeads) {
          if (!existingIds.has(dbL.id)) {
            leads.push({
              id: dbL.id,
              name: dbL.name,
              phone: dbL.phone,
              email: dbL.email,
              city: dbL.city,
              service: dbL.service,
              details: dbL.details,
              bestTime: dbL.bestTime,
              propertyType: dbL.propertyType,
              preferredDate: dbL.preferredDate,
              preferredTime: dbL.preferredTime,
              status: dbL.status as any,
              score: dbL.score,
              source: dbL.source,
              gclid: dbL.gclid,
              fbclid: dbL.fbclid,
              msclkid: dbL.msclkid,
              utmSource: dbL.utmSource,
              utmMedium: dbL.utmMedium,
              utmCampaign: dbL.utmCampaign,
              utmTerm: dbL.utmTerm,
              utmContent: dbL.utmContent,
              landingPage: dbL.landingPage,
              referrer: dbL.referrer,
              notes: dbL.notes,
              value: dbL.value,
              createdAt: dbL.createdAt.toISOString(),
              consent: (dbL.consents?.[0] as any) || null,
              activities: (dbL.activities?.map((a: any) => ({
                id: a.id,
                type: a.type,
                description: a.description,
                createdAt: a.createdAt.toISOString(),
              })) as any) || [],
            });
          }
        }
      } catch (dbErr) {
        console.error("[/api/leads] Database merge skipped:", dbErr);
      }
    }

    // 3. If totally empty (fresh install before any submissions), provide standard sample baseline
    if (leads.length === 0) {
      leads = [
        {
          id: "demo_1",
          name: "Marcus Vance",
          phone: COMPANY_PHONE_DISPLAY,
          email: "marcus.v@example.com",
          city: "Hemet",
          service: "Concrete Block Wall Construction",
          details: "Need 6ft high precision cinder block wall replacement along 45 linear feet of property boundary line.",
          bestTime: "Morning (7AM–12PM)",
          status: "NEW",
          score: 95,
          source: "booking-wizard",
          utmSource: "zeely",
          utmMedium: "cpc",
          utmCampaign: "inland_empire_masonry_v1",
          gclid: "CjwKCAjwDemo123",
          createdAt: new Date().toISOString(),
          consent: {
            type: "BOTH",
            phoneOptIn: true,
            emailOptIn: true,
            ip: "108.204.112.44",
            createdAt: new Date().toISOString(),
          },
        },
        {
          id: "demo_2",
          name: "Elena Rodriguez",
          phone: "(951) 894-1120",
          email: "elena.rodriguez@example.com",
          city: "Temecula",
          service: "Custom Landscaping & Hardscaping",
          details: "Drought-tolerant decomposed granite installation, modern flagstone walkway, and desert xeriscaping.",
          bestTime: "Afternoon (12PM–5PM)",
          status: "CONTACTED",
          score: 85,
          source: "lead-form",
          utmSource: "facebook",
          utmMedium: "paid",
          utmCampaign: "temecula_home_renovations",
          createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
          consent: {
            type: "BOTH",
            phoneOptIn: true,
            emailOptIn: true,
            ip: "172.56.21.90",
            createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
          },
        },
      ];
    }

    // 4. Filter
    let filtered = leads;
    if (status && status !== "ALL") {
      filtered = filtered.filter((l) => l.status === status);
    }
    if (city && city !== "ALL") {
      filtered = filtered.filter((l) => l.city === city);
    }
    if (query) {
      filtered = filtered.filter(
        (l) =>
          l.name.toLowerCase().includes(query) ||
          l.phone.includes(query) ||
          (l.email && l.email.toLowerCase().includes(query)) ||
          l.city.toLowerCase().includes(query) ||
          l.service.toLowerCase().includes(query) ||
          (l.details && l.details.toLowerCase().includes(query))
      );
    }

    // Sort newest first
    filtered.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    return NextResponse.json({
      leads: filtered,
      total: filtered.length,
      backupSource: "github-gist-cloud",
    });
  } catch (err) {
    console.error("[/api/leads] Error:", err);
    return NextResponse.json(
      { error: "Failed to fetch leads list." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.name || !body.phone || !body.city || !body.service) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const leadId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
    const nowIso = new Date().toISOString();

    const newLead: LeadRecord = {
      id: leadId,
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email?.trim() || null,
      city: body.city.trim(),
      service: body.service.trim(),
      details: body.details?.trim() || null,
      source: body.source || "manual-entry",
      score: body.score || 50,
      status: body.status || "NEW",
      createdAt: nowIso,
      activities: [
        {
          id: `act_${Date.now()}`,
          type: "MANUAL_ENTRY",
          description: "Lead manually entered by admin",
          createdAt: nowIso,
        },
      ],
    };

    await saveLead(newLead);

    if (process.env.DATABASE_URL) {
      try {
        await prisma.lead.create({
          data: {
            id: leadId,
            name: newLead.name,
            phone: newLead.phone,
            email: newLead.email,
            city: newLead.city,
            service: newLead.service,
            details: newLead.details,
            source: newLead.source,
            score: newLead.score,
            status: newLead.status,
            activities: {
              create: {
                type: "MANUAL_ENTRY",
                description: "Lead manually entered by admin",
              },
            },
          },
        });
      } catch (dbErr) {
        console.error("[/api/leads] DB write notice:", dbErr);
      }
    }

    return NextResponse.json({ success: true, lead: newLead });
  } catch (err) {
    console.error("[/api/leads] POST error:", err);
    return NextResponse.json({ error: "Failed to create lead." }, { status: 500 });
  }
}
