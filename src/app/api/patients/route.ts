import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { handleError } from '@/lib/api-utils';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const role = searchParams.get('role');

    const baseInclude = {
      sessions: { select: { id: true } },
    } as const;

    if (role === 'therapist') {
      const patients = await prisma.patient.findMany({
        orderBy: { createdAt: 'desc' },
        include: baseInclude,
      });
      return NextResponse.json(patients);
    }

    if (userId) {
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

      if (patientIds.length > 0) {
        const patients = await prisma.patient.findMany({
          where: { id: { in: patientIds } },
          orderBy: { createdAt: 'desc' },
          include: baseInclude,
        });
        return NextResponse.json(patients);
      }
    }

    return NextResponse.json([]);
  } catch (error) {
    return handleError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const patient = await prisma.patient.create({
      data: {
        name: body.name,
        dateOfBirth: body.dateOfBirth ? new Date(body.dateOfBirth) : null,
        notes: body.notes || null,
      },
    });

    // Give therapist full access to new patient
    const therapist = await prisma.user.findFirst({ where: { role: 'therapist' } });
    if (therapist) {
      await prisma.patientAccess.create({
        data: {
          userId: therapist.id,
          patientId: patient.id,
          accessLevel: 'full',
        },
      });
    }

    return NextResponse.json(patient);
  } catch (error) {
    return handleError(error);
  }
}