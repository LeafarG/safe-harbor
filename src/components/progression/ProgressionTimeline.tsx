'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { DIMENSIONS } from '@/lib/questionnaire';
import { Evaluation, COLORS } from './types';

interface ProgressionTimelineProps {
  evaluations: Evaluation[];
}

export default function ProgressionTimeline({ evaluations }: ProgressionTimelineProps) {
  const [expandedEvals, setExpandedEvals] = useState<Record<string, boolean>>({});

  const toggleEval = (id: string) => {
    setExpandedEvals((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-4">
      {evaluations.map((ev, idx) => {
        const isExpanded = expandedEvals[ev.id];
        const date = new Date(ev.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        const label =
          idx === 0
            ? 'Baseline Assessment'
            : idx === evaluations.length - 1
            ? 'Latest Assessment'
            : `Follow-up ${idx}`;

        return (
          <div key={ev.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <button
              onClick={() => toggleEval(ev.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    idx === 0
                      ? 'bg-indigo-100 text-indigo-700'
                      : idx === evaluations.length - 1
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {idx + 1}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{label}</p>
                  <p className="text-xs text-gray-500">{date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2">
                  {DIMENSIONS.map((dim) => (
                    <div key={dim.key} className="flex flex-col items-center gap-1">
                      <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${ev.dimensionScores[dim.key]}%`,
                            backgroundColor:
                              COLORS[DIMENSIONS.findIndex((d) => d.key === dim.key) % COLORS.length],
                          }}
                        />
                      </div>
                      <span className="text-[10px] text-gray-400">
                        {dim.label.split(' ')[0]}
                      </span>
                    </div>
                  ))}
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>

            {isExpanded && (
              <div className="px-4 pb-4 border-t border-slate-100">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                  {DIMENSIONS.map((dim) => {
                    const score = ev.dimensionScores[dim.key];
                    const prevScore = idx > 0 ? evaluations[idx - 1].dimensionScores[dim.key] : null;
                    const change = prevScore !== null ? score - prevScore : 0;
                    return (
                      <div key={dim.key} className="bg-slate-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">{dim.label}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-gray-900">{score}</span>
                          {prevScore !== null && (
                            <span
                              className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                                change > 0
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : change < 0
                                  ? 'bg-red-100 text-red-700'
                                  : 'bg-slate-100 text-slate-600'
                              }`}
                            >
                              {change > 0 ? '+' : ''}
                              {change}
                            </span>
                          )}
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 rounded-full mt-1">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${score}%`,
                              backgroundColor:
                                COLORS[DIMENSIONS.findIndex((d) => d.key === dim.key) % COLORS.length],
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
