'use client';

import { ArrowLeft, CheckCircle2, Save, BarChart3 } from 'lucide-react';
import { t } from '@/lib/i18n';
import { DIMENSIONS } from '@/lib/questionnaire';
import { AnswerState } from './types';

interface QuestionnaireReviewProps {
  patientName: string;
  ageTierLabel: string;
  answers: Record<string, AnswerState[]>;
  saving: boolean;
  onBack: () => void;
  onSubmit: () => void;
}

export default function QuestionnaireReview({
  patientName,
  ageTierLabel,
  answers,
  saving,
  onBack,
  onSubmit,
}: QuestionnaireReviewProps) {
  const dimensionScores: Record<string, number> = {};
  DIMENSIONS.forEach((dim) => {
    const scores = (answers[dim.key] || []).map((a) => a.score);
    const sum = scores.reduce((a, b) => a + b, 0);
    const max = scores.length * 5;
    const min = scores.length * 1;
    dimensionScores[dim.key] = scores.length > 0 ? Math.round(((sum - min) / (max - min)) * 100) : 0;
  });

  return (
    <div className="space-y-6 max-w-3xl">
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Review Assessment</h1>
          <p className="text-sm text-gray-500">
            {patientName} — {ageTierLabel}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-indigo-600" />
          Computed Dimension Scores
        </h2>
        {DIMENSIONS.map((dim) => (
          <div
            key={dim.key}
            className="flex items-center justify-between p-3 bg-slate-50 rounded-lg"
          >
            <span className="font-medium text-gray-700">{dim.label}</span>
            <div className="flex items-center gap-3">
              <div className="w-32 h-3 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full"
                  style={{ width: `${dimensionScores[dim.key]}%` }}
                />
              </div>
              <span className="text-sm font-bold text-indigo-600 w-10 text-right">
                {dimensionScores[dim.key]}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-indigo-50 rounded-xl border border-indigo-100 p-4 text-sm text-indigo-700">
        <p className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          Saving this assessment will unlock AI summaries, radar charts, and IEP generation for this
          patient.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 text-center py-3 px-6 border border-slate-300 text-gray-700 rounded-lg hover:bg-slate-50"
        >
          {t.common.cancel}
        </button>
        <button
          onClick={onSubmit}
          disabled={saving}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {saving ? (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <Save className="w-5 h-5" />
              {t.common.save}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
