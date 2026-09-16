import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ success: true, updated: { id, ...body } });
    }

    const updated = await prisma.lead.update({
      where: { id },
      data: {
        ...(body.status ? { status: body.status } : {}),
        ...(body.notes !== undefined ? { notes: body.notes } : {}),
        ...(body.value !== undefined ? { value: parseFloat(body.value) || null } : {}),
      },
    });

    if (body.status) {
      await prisma.activity.create({
        data: {
          leadId: id,
          type: "STATUS_CHANGED",
          description: `Status changed to ${body.status}`,
        },
      }).catch(() => null);
    }

    return NextResponse.json({ success: true, lead: updated });
  } catch (err) {
    console.error("[/api/leads/[id]] PATCH error:", err);
    return NextResponse.json({ error: "Failed to update lead." }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (process.env.DATABASE_URL) {
      await prisma.lead.delete({ where: { id } });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[/api/leads/[id]] DELETE error:", err);
    return NextResponse.json({ error: "Failed to delete lead." }, { status: 500 });
  }
}
