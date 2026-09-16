import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized cron execution." }, { status: 401 });
    }

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, message: "Database not connected. No leads to process." });
    }

    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    // Find leads submitted > 24h ago that are still marked NEW
    const staleLeads = await prisma.lead.findMany({
      where: {
        status: "NEW",
        createdAt: { lte: oneDayAgo },
      },
      orderBy: { createdAt: "desc" },
    });

    if (staleLeads.length === 0) {
      return NextResponse.json({ success: true, message: "No uncontacted leads pending." });
    }

    // Send digest email to owner via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const ownerEmail = process.env.OWNER_DIGEST_EMAIL || process.env.NOTIFICATION_EMAIL || "kustomxworks@proton.me";

    if (resendApiKey) {
      const summaryList = staleLeads
        .map(
          (l) =>
            `<li><strong>${l.name}</strong> (${l.phone}) - ${l.service} in ${l.city} [Score: ${l.score}/100]</li>`
        )
        .join("");

      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2A211A;">
          <h2 style="color: #C1502E;">Daily Lead Follow-Up Alert: ${staleLeads.length} Uncontacted Inquiries</h2>
          <p>The following inquiries were submitted over 24 hours ago and have not yet been marked as contacted in the CRM:</p>
          <ul style="line-height: 1.8;">
            ${summaryList}
          </ul>
          <p style="margin-top: 20px;">
            <a href="https://kustomxworks.com/leads" style="background: #C1502E; color: #FFF; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold;">
              Open Leads CRM
            </a>
          </p>
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
          subject: `⚠️ Follow-Up Alert: ${staleLeads.length} Inquiries Awaiting Contact`,
          html,
        }),
      });
    }

    return NextResponse.json({ success: true, uncontactedCount: staleLeads.length });
  } catch (err) {
    console.error("[/api/cron/nurture] Error:", err);
    return NextResponse.json({ error: "Cron execution failed." }, { status: 500 });
  }
}
