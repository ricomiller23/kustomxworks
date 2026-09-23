import { NextResponse } from "next/server";
import { getAllLeads, generateLeadsCSV } from "@/lib/crm-storage";

export async function GET() {
  try {
    const leads = await getAllLeads();
    const csvData = generateLeadsCSV(leads);
    const dateStr = new Date().toISOString().slice(0, 10);

    return new NextResponse(csvData, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="kustomxworks-leads-export-${dateStr}.csv"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[/api/leads/export] Error:", err);
    return NextResponse.json({ error: "Failed to generate CSV export." }, { status: 500 });
  }
}
