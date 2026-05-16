export interface Evaluation {
  id: string;
  createdAt: string;
  dimensionScores: Record<string, number>;
  responseCount: number;
}

export const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
