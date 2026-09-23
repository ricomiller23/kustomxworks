import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { updateLead, deleteLead } from "@/lib/crm-storage";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    const updated = await updateLead(id, {
      ...(body.status ? { status: body.status } : {}),
      ...(body.notes !== undefined ? { notes: body.notes } : {}),
      ...(body.value !== undefined ? { value: parseFloat(body.value) || null } : {}),
    });

    if (process.env.DATABASE_URL) {
      try {
        await prisma.lead.update({
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
      } catch (dbErr) {
        console.error("[/api/leads/[id]] DB update notice:", dbErr);
      }
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

    await deleteLead(id);

    if (process.env.DATABASE_URL) {
      try {
        await prisma.lead.delete({ where: { id } });
      } catch (dbErr) {
        console.error("[/api/leads/[id]] DB delete notice:", dbErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[/api/leads/[id]] DELETE error:", err);
    return NextResponse.json({ error: "Failed to delete lead." }, { status: 500 });
  }
}
