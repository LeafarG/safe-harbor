import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { handleError } from '@/lib/api-utils';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const session = await prisma.session.findUnique({
      where: { id },
      include: {
        patient: { select: { id: true, name: true } },
        therapist: { select: { id: true, name: true } },
      },
    });

    if (!session) {
      return NextResponse.json({ error: 'Session not found' }, { status: 404 });
    }

    return NextResponse.json(session);
  } catch (error) {
    return handleError(error);
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const session = await prisma.session.update({
      where: { id },
      data: {
        sessionDate: new Date(body.sessionDate),
        startTime: body.startTime || null,
        endTime: body.endTime || null,
        location: body.location || null,
        participants: body.participants ? JSON.stringify(body.participants) : null,
        materials: body.materials ? JSON.stringify(body.materials) : null,
        notes: body.notes || null,
      },
    });

    return NextResponse.json(session);
  } catch (error) {
    return handleError(error);
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.session.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return handleError(error);
  }
}