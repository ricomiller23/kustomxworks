import { NextResponse } from "next/server";
import { getAllLeads } from "@/lib/crm-storage";

export async function GET() {
  try {
    const leads = await getAllLeads();
    const dateStr = new Date().toISOString().slice(0, 10);

    return new NextResponse(JSON.stringify(leads, null, 2), {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Disposition": `attachment; filename="kustomxworks-crm-backup-${dateStr}.json"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[/api/leads/backup] Error:", err);
    return NextResponse.json({ error: "Failed to generate backup JSON." }, { status: 500 });
  }
}
