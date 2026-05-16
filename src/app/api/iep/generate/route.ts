import { NextResponse } from 'next/server';
import { getOllamaConfig, handleError } from '@/lib/api-utils';

function buildSystemPrompt(): string {
  return `You are Safe Harbor, an expert AI assistant specialized in special education and Applied Behavior Analysis (ABA).
Your task is to generate SMART IEP (Individualized Education Program) objectives based on student data provided by the user.

You will receive:
1. Patient demographics and session notes
2. Formal developmental assessment dimension scores (0-100 scale)
3. A full 60-item questionnaire with Likert scores (1-5) AND clinical observation notes for each question

The observation notes are written by therapists, BCBAs, or educators and describe real-world behavior, frequency, context, and triggers. Treat these observations as primary evidence.

Guidelines:
- Generate 3-5 specific, measurable, achievable, relevant, and time-bound (SMART) objectives.
- Cover domains: Communication, Cognitive/Academic, Behavioral, and Social skills.
- Base objectives heavily on the clinical observation notes, not just the numerical scores.
- If an observation describes a specific trigger or context, tailor the objective to that context.
- Include short-term benchmarks (monthly targets).
- Suggest evidence-based intervention strategies.
- Specify mastery criteria (e.g., 80% accuracy over 3 consecutive sessions).
- Recommend review frequency.
- Respond in English.
- Format the output clearly with headers and bullet points.`;
}

interface QuestionnaireResponseItem {
  dimension: string;
  questionIndex: number;
  ageTier: string;
  score: number;
  notes?: string | null;
}

function buildUserPrompt(
  studentData: string,
  context: string,
  patientName: string,
  questionnaireResponses?: QuestionnaireResponseItem[],
  dimensionScores?: { dimension: string; baseline: number; current: number }[]
): string {
  let prompt = `Generate IEP objectives for the following student:\n\n${studentData}`;
  if (patientName) prompt += `\n\nStudent Name: ${patientName}`;
  if (context) prompt += `\n\nAdditional Context: ${context}`;

  if (dimensionScores && dimensionScores.length > 0) {
    prompt += '\n\nFORMAL DEVELOPMENTAL ASSESSMENT DIMENSION SCORES (Baseline vs Current, 0-100 scale):';
    dimensionScores.forEach(d => {
      prompt += `\n- ${d.dimension}: Baseline ${d.baseline}, Current ${d.current}`;
    });
  }

  if (questionnaireResponses && questionnaireResponses.length > 0) {
    const ageTier = questionnaireResponses[0]?.ageTier || 'unknown';
    prompt += `\n\nFULL 60-ITEM ASSESSMENT RESPONSES (Age Tier: ${ageTier}, Likert 1-5):`;
    const byDim: Record<string, QuestionnaireResponseItem[]> = {};
    questionnaireResponses.forEach(r => {
      if (!byDim[r.dimension]) byDim[r.dimension] = [];
      byDim[r.dimension].push(r);
    });
    Object.entries(byDim).forEach(([dim, items]) => {
      prompt += `\n\n${dim}:`;
      items.sort((a, b) => a.questionIndex - b.questionIndex).forEach((item, idx) => {
        prompt += `\n  Q${idx + 1}: Score ${item.score}/5${item.notes ? ` - Note: ${item.notes}` : ''}`;
      });
    });
  }

  if (dimensionScores?.length || questionnaireResponses?.length) {
    prompt += '\n\nINSTRUCTION: Use these formal assessment scores to generate SMART IEP objectives. Prioritize dimensions with the largest baseline-to-current gaps. For low-scoring items, target foundational skills. For high-scoring items, suggest maintenance and generalization objectives.';
  }

  return prompt;
}

async function generateWithOllama(system: string, prompt: string): Promise<string> {
  const { url, model } = getOllamaConfig();
  const res = await fetch(`${url}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      system,
      prompt,
      stream: false,
      options: {
        temperature: 0.7,
        num_predict: 2048,
      },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Ollama error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data.response || '';
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { studentData, context, patientName, questionnaireResponses, dimensionScores } = body;

    if (!studentData) {
      return NextResponse.json(
        { error: 'Student data is required' },
        { status: 400 }
      );
    }

    // Try Ollama first
    try {
      const system = buildSystemPrompt();
      const prompt = buildUserPrompt(studentData, context || '', patientName || '', questionnaireResponses, dimensionScores);
      const response = await generateWithOllama(system, prompt);
      return NextResponse.json({ goals: response, source: 'ollama' });
    } catch (ollamaErr) {
      const errMsg = ollamaErr instanceof Error ? ollamaErr.message : 'Unknown error';
      const demoResponse = `IEP OBJECTIVES - Safe Harbor AI (Demo Mode)\n\nSTUDENT DATA ANALYSIS:\n${studentData}\n\n${context ? `Context: ${context}\n` : ''}---\n\nOBJECTIVE 1 - FUNCTIONAL COMMUNICATION:\n"By the end of 36 weeks, the student will use an alternative communication system to request items in 80% of opportunities, measured by direct observation."\n\nOBJECTIVE 2 - COGNITIVE-ACADEMIC:\n"After 36 weeks, the student will demonstrate reading skills with 80% accuracy in 4 out of 5 consecutive sessions."\n\nOBJECTIVE 3 - BEHAVIORAL:\n"During academic activities, the student will maintain attention to task for 10 consecutive minutes in 4 out of 5 observations."\n\nOBJECTIVE 4 - SOCIAL-COMMUNICATIVE:\n"In structured contexts, the student will initiate social interactions with peers in 6 out of 8 opportunities over 12 weeks."\n\n---\n\nSHORT-TERM BENCHMARKS:\n- Months 1-3: Achieve 60% of criterion for each objective\n- Months 4-6: Achieve 70% of criterion\n- Months 7-9: Achieve 80% of criterion\n- Months 10-12: Maintain 80% for 3 consecutive weeks\n\nRECOMMENDED STRATEGIES:\n- Visual timer for attention\n- Gradual positive reinforcement\n- Pictographic communication system\n- Structured environment with visual cues\n\nMASTERY CRITERION: 80% accuracy over 3 consecutive days\n\nREVIEW: Every 4 weeks with multidisciplinary team\n\n---\nNote: Ollama connection failed (${errMsg}). Using demo response.`;

      return NextResponse.json({ goals: demoResponse, source: 'demo' });
    }
  } catch (error) {
    return handleError(error);
  }
}
