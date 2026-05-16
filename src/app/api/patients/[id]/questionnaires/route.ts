import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { handleError } from '@/lib/api-utils';
import { computeDimensionScore, DIMENSIONS } from '@/lib/questionnaire';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const questionnaires = await prisma.questionnaire.findMany({
      where: { patientId: id },
      include: { responses: true },
      orderBy: { createdAt: 'asc' },
    });

    const withScores = questionnaires.map((q) => {
      const byDim: Record<string, number[]> = {};
      q.responses.forEach((r) => {
        if (!byDim[r.dimension]) byDim[r.dimension] = [];
        byDim[r.dimension].push(r.score);
      });

      const dimensionScores: Record<string, number> = {};
      DIMENSIONS.forEach((dim) => {
        dimensionScores[dim.key] = computeDimensionScore(byDim[dim.key] || []);
      });

      return {
        id: q.id,
        createdAt: q.createdAt.toISOString(),
        updatedAt: q.updatedAt?.toISOString(),
        createdBy: q.createdBy,
        dimensionScores,
        responseCount: q.responses.length,
      };
    });

    return NextResponse.json(withScores);
  } catch (error) {
    return handleError(error);
  }
}
