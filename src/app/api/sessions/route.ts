import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { handleError } from '@/lib/api-utils';

const sessionInclude = {
  patient: { select: { id: true, name: true } },
} as const;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const role = searchParams.get('role');

    if (role === 'therapist') {
      const sessions = await prisma.session.findMany({
        orderBy: { sessionDate: 'desc' },
        include: sessionInclude,
      });
      return NextResponse.json(sessions);
    }

    if (!userId) return NextResponse.json([]);

    let patientIds: string[] = [];
    if (role === 'educator') {
      const access = await prisma.patientAccess.findMany({
        where: { userId, accessLevel: { in: ['full', 'partial'] } },
        select: { patientId: true },
      });
      patientIds = access.map((a) => a.patientId);
    } else if (role === 'parent') {
      const access = await prisma.patientAccess.findMany({
        where: { userId, accessLevel: 'limited' },
        select: { patientId: true },
      });
      patientIds = access.map((a) => a.patientId);
    }

    if (patientIds.length === 0) return NextResponse.json([]);

    const sessions = await prisma.session.findMany({
      where: { patientId: { in: patientIds }, isPrivate: false },
      orderBy: { sessionDate: 'desc' },
      include: sessionInclude,
    });

    return NextResponse.json(sessions);
  } catch (error) {
    return handleError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { patientId, therapistId } = body;
    
    // Use provided therapistId or find any therapist
    let sessionTherapistId = therapistId;
    if (!sessionTherapistId) {
      const therapist = await prisma.user.findFirst({ where: { role: 'therapist' } });
      if (therapist) {
        sessionTherapistId = therapist.id;
      } else {
        return NextResponse.json({ error: 'No therapist found' }, { status: 500 });
      }
    }

    const session = await prisma.session.create({
      data: {
        patientId,
        therapistId: sessionTherapistId,
        sessionDate: new Date(body.sessionDate),
        startTime: body.startTime || null,
        endTime: body.endTime || null,
        location: body.location || null,
        participants: body.participants ? JSON.stringify(body.participants) : null,
        materials: body.materials ? JSON.stringify(body.materials) : null,
        notes: body.notes || null,
        isPrivate: body.isPrivate || false,
      },
    });
    
    return NextResponse.json(session);
  } catch (error) {
    return handleError(error);
  }
}