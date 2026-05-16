import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { handleError } from '@/lib/api-utils';
import type { QuestionnaireResponse } from '@/types';

interface QuestionnairePayload {
  createdBy: string;
  responses: Omit<QuestionnaireResponse, 'id' | 'questionnaireId'>[];
}

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const questionnaire = await prisma.questionnaire.findFirst({
      where: { patientId: id },
      include: { responses: true },
      orderBy: { updatedAt: 'desc' },
    });
    return NextResponse.json(questionnaire);
  } catch (error) {
    return handleError(error);
  }
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = (await request.json()) as QuestionnairePayload;
    const { createdBy, responses } = body;

    if (!createdBy || !Array.isArray(responses) || responses.length === 0) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const questionnaire = await prisma.questionnaire.create({
      data: {
        patientId: id,
        createdBy,
        responses: {
          create: responses.map((r) => ({
            dimension: r.dimension,
            questionIndex: r.questionIndex,
            ageTier: r.ageTier,
            score: r.score,
            notes: r.notes || null,
          })),
        },
      },
      include: { responses: true },
    });

    return NextResponse.json(questionnaire);
  } catch (error) {
    return handleError(error);
  }
}
