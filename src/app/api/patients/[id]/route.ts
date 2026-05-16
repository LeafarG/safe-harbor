import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { handleError } from '@/lib/api-utils';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const role = searchParams.get('role');

    const patient = await prisma.patient.findUnique({ where: { id } });
    if (!patient) {
      return NextResponse.json({ error: 'Patient not found' }, { status: 404 });
    }

    if (userId && role) {
      const access = await prisma.patientAccess.findUnique({
        where: { userId_patientId: { userId, patientId: id } },
      });
      if (!access && role !== 'therapist') {
        return NextResponse.json({ error: 'Access denied' }, { status: 403 });
      }
    }

    const sessionWhere =
      role === 'therapist'
        ? { patientId: id }
        : { patientId: id, isPrivate: false };

    const sessions = await prisma.session.findMany({
      where: sessionWhere,
      orderBy: { sessionDate: 'desc' },
    });

    const questionnaire = await prisma.questionnaire.findFirst({
      where: { patientId: id },
      include: { responses: true },
      orderBy: { updatedAt: 'desc' },
    });

    const allQuestionnaires = await prisma.questionnaire.findMany({
      where: { patientId: id },
      include: { responses: true },
      orderBy: { createdAt: 'asc' },
    });

    return NextResponse.json({
      ...patient,
      sessions,
      questionnaire,
      allQuestionnaires,
    });
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

    const patient = await prisma.patient.update({
      where: { id },
      data: {
        name: body.name,
        dateOfBirth: body.dateOfBirth ? new Date(body.dateOfBirth) : null,
        notes: body.notes || null,
      },
    });

    return NextResponse.json(patient);
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
    await prisma.patient.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return handleError(error);
  }
}