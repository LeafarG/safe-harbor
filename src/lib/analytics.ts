import { computeDimensionScore, DIMENSIONS } from './questionnaire';

export interface RadarDataPoint {
  subject: string;
  baseline: number;
  current: number;
  fullMark: number;
}

const KEYWORDS: Record<string, string[]> = {
  Communication: ['communicat', 'speak', 'talk', 'verbal', 'language', 'vocal', 'request', 'express', 'word', 'sentence', 'answer', 'aac', 'sign', 'pronounc'],
  Social: ['social', 'peer', 'friend', 'interact', 'share', 'turn', 'group', 'play', 'joint', 'greet', 'eye contact'],
  Cognitive: ['cognitive', 'academic', 'read', 'math', 'problem', 'memory', 'attention', 'focus', 'learn', 'school', 'count', 'letter', 'write', 'draw'],
  Motor: ['motor', 'fine', 'gross', 'run', 'jump', 'balance', 'coordination', 'movement', 'climb', 'catch'],
  Autonomy: ['autonomy', 'independent', 'self-care', 'dress', 'toilet', 'feed', 'hygiene', 'daily', 'self', 'shoe', 'wash'],
  Behavior: ['behavior', 'tantrum', 'aggression', 'self-injury', 'compliance', 'follow', 'routine', 'regulation', 'meltdown', 'calm', 'cooperat'],
};

function scoreSlice(sessions: { notes: string | null }[]): number[] {
  return DIMENSIONS.map(dim => {
    const words = KEYWORDS[dim.key];
    let mentions = 0;
    sessions.forEach(s => {
      const note = (s.notes || '').toLowerCase();
      words.forEach(w => { if (note.includes(w)) mentions++; });
    });
    return Math.min(100, 25 + mentions * 15);
  });
}

function computeScoresFromResponses(
  responses: { dimension: string; score: number }[]
): Record<string, number> {
  const byDim: Record<string, number[]> = {};
  responses.forEach(r => {
    if (!byDim[r.dimension]) byDim[r.dimension] = [];
    byDim[r.dimension].push(r.score);
  });
  const scores: Record<string, number> = {};
  DIMENSIONS.forEach(dim => {
    scores[dim.key] = computeDimensionScore(byDim[dim.key] || []);
  });
  return scores;
}

export function computePatientRadarData(
  sessions: { notes: string | null; sessionDate: string }[],
  allQuestionnaires?: { responses: { dimension: string; score: number }[]; createdAt: string }[]
): RadarDataPoint[] {
  if (allQuestionnaires && allQuestionnaires.length > 0) {
    const sorted = [...allQuestionnaires].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );
    const baselineScores = computeScoresFromResponses(sorted[0].responses);
    const currentScores = computeScoresFromResponses(sorted[sorted.length - 1].responses);

    return DIMENSIONS.map(dim => ({
      subject: dim.label,
      baseline: baselineScores[dim.key],
      current: currentScores[dim.key],
      fullMark: 100,
    }));
  }

  const sorted = [...sessions].sort(
    (a, b) => new Date(a.sessionDate).getTime() - new Date(b.sessionDate).getTime()
  );
  const mid = Math.max(1, Math.ceil(sorted.length / 2));
  const baselineScores = scoreSlice(sorted.slice(0, mid));
  const currentScores = scoreSlice(sorted.slice(mid));

  return DIMENSIONS.map((dim, i) => ({
    subject: dim.label,
    baseline: baselineScores[i],
    current: currentScores[i],
    fullMark: 100,
  }));
}

export function computeAggregateRadarData(
  allSessions: { notes: string | null; sessionDate: string }[]
): RadarDataPoint[] {
  if (allSessions.length === 0) {
    return DIMENSIONS.map(dim => ({ subject: dim.label, baseline: 30, current: 30, fullMark: 100 }));
  }
  const sorted = [...allSessions].sort(
    (a, b) => new Date(a.sessionDate).getTime() - new Date(b.sessionDate).getTime()
  );
  const mid = Math.max(1, Math.ceil(sorted.length / 2));
  const baselineScores = scoreSlice(sorted.slice(0, mid));
  const currentScores = scoreSlice(sorted.slice(mid));

  return DIMENSIONS.map((dim, i) => ({
    subject: dim.label,
    baseline: baselineScores[i],
    current: currentScores[i],
    fullMark: 100,
  }));
}
