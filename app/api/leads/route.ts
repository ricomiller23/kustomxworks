import { COMPANY_PHONE_DISPLAY } from "@/content/business";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const city = searchParams.get("city");
    const query = searchParams.get("query")?.toLowerCase();

    // Check if database is connected
    if (!process.env.DATABASE_URL) {
      // Return demo leads if database is pending connection
      const demoLeads = [
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
        {
          id: "demo_3",
          name: "David Chen",
          phone: "(951) 736-8802",
          email: "david.c@example.com",
          city: "Corona",
          service: "Drywall Repair & Texture Matching",
          details: "Ceiling water leak repair and orange peel texture matching in master bedroom.",
          bestTime: "Any time",
          status: "SCHEDULED",
          score: 75,
          source: "lead-form",
          utmSource: "google",
          utmMedium: "organic",
          createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
          consent: {
            type: "SMS_ONLY",
            phoneOptIn: true,
            emailOptIn: false,
            ip: "99.112.48.12",
            createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
          },
        },
      ];

      let filtered = demoLeads;
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
            l.city.toLowerCase().includes(query) ||
            l.service.toLowerCase().includes(query)
        );
      }

      return NextResponse.json({ leads: filtered, total: filtered.length, demoMode: true });
    }

    const whereClause: any = {};
    if (status && status !== "ALL") {
      whereClause.status = status;
    }
    if (city && city !== "ALL") {
      whereClause.city = city;
    }
    if (query) {
      whereClause.OR = [
        { name: { contains: query, mode: "insensitive" } },
        { phone: { contains: query } },
        { email: { contains: query, mode: "insensitive" } },
        { service: { contains: query, mode: "insensitive" } },
      ];
    }

    const leads = await prisma.lead.findMany({
      where: whereClause,
      include: {
        consents: true,
        activities: { orderBy: { createdAt: "desc" } },
        emailSends: { orderBy: { sentAt: "desc" } },
      },
      orderBy: { createdAt: "desc" },
    });

    const normalizedLeads = leads.map((l: any) => ({
      ...l,
      consent: l.consents?.[0] || null,
    }));
    return NextResponse.json({ leads: normalizedLeads, total: leads.length, demoMode: false });
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

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, lead: { ...body, id: "demo_" + Date.now() } });
    }

    const lead = await prisma.lead.create({
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email || null,
        city: body.city,
        service: body.service,
        details: body.details || null,
        source: body.source || "manual-entry",
        score: body.score || 50,
        status: body.status || "NEW",
        activities: {
          create: {
            type: "MANUAL_ENTRY",
            description: "Lead manually entered by admin",
          },
        },
      },
    });

    return NextResponse.json({ success: true, lead });
  } catch (err) {
    console.error("[/api/leads] POST error:", err);
    return NextResponse.json({ error: "Failed to create lead." }, { status: 500 });
  }
}
