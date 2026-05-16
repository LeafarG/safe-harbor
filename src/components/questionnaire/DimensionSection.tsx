'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { LIKERT_LABELS, QUESTIONS } from '@/lib/questionnaire';
import type { AgeTier } from '@/lib/questionnaire';
import { AnswerState } from './types';

interface DimensionSectionProps {
  dimKey: string;
  dimLabel: string;
  ageTier: AgeTier;
  answers: AnswerState[];
  onUpdate: (index: number, field: keyof AnswerState, value: string | number) => void;
}

export default function DimensionSection({
  dimKey,
  dimLabel,
  ageTier,
  answers,
  onUpdate,
}: DimensionSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const dimQuestions = QUESTIONS[dimKey][ageTier];

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <button
        onClick={() => setIsExpanded((prev) => !prev)}
        className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold text-gray-900">{dimLabel}</span>
          <span className="text-xs text-gray-500 bg-slate-100 px-2 py-1 rounded">
            {dimQuestions.length} questions
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-4">
          {dimQuestions.map((qItem, idx) => {
            const ans = answers[idx] || { score: 3, notes: '' };
            return (
              <div key={idx} className="border-t border-slate-100 pt-4">
                <p className="text-sm font-medium text-gray-800 mb-1">
                  {idx + 1}. {qItem.text}
                </p>
                <p className="text-xs text-indigo-700 bg-indigo-50 rounded-lg p-2 mb-3">
                  {qItem.observation}
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-500">{LIKERT_LABELS[1]}</span>
                      <span className="text-xs font-bold text-indigo-600">
                        {LIKERT_LABELS[ans.score]}
                      </span>
                      <span className="text-xs text-gray-500">{LIKERT_LABELS[5]}</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={5}
                      step={1}
                      value={ans.score}
                      onChange={(e) => onUpdate(idx, 'score', parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                    />
                  </div>
                  <textarea
                    value={ans.notes}
                    onChange={(e) => onUpdate(idx, 'notes', e.target.value)}
                    placeholder="Record your clinical observations here..."
                    rows={2}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
