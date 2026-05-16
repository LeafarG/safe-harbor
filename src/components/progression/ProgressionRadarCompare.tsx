'use client';

import { useState } from 'react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { DIMENSIONS } from '@/lib/questionnaire';
import { Evaluation } from './types';

interface ProgressionRadarCompareProps {
  evaluations: Evaluation[];
}

export default function ProgressionRadarCompare({ evaluations }: ProgressionRadarCompareProps) {
  const [selectedBaseline, setSelectedBaseline] = useState(0);
  const [selectedCurrent, setSelectedCurrent] = useState(evaluations.length - 1);

  const radarData = DIMENSIONS.map((dim) => ({
    subject: dim.label,
    baseline: evaluations[selectedBaseline].dimensionScores[dim.key],
    current: evaluations[selectedCurrent].dimensionScores[dim.key],
    fullMark: 100,
  }));

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Baseline</label>
            <select
              value={selectedBaseline}
              onChange={(e) => setSelectedBaseline(parseInt(e.target.value))}
              className="px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800"
            >
              {evaluations.map((ev, idx) => (
                <option key={ev.id} value={idx}>
                  Eval {idx + 1} - {new Date(ev.createdAt).toLocaleDateString('en-US')}
                </option>
              ))}
            </select>
          </div>
          <div className="text-gray-400">vs</div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Current</label>
            <select
              value={selectedCurrent}
              onChange={(e) => setSelectedCurrent(parseInt(e.target.value))}
              className="px-3 py-2 border border-slate-300 rounded-lg text-sm text-slate-800"
            >
              {evaluations.map((ev, idx) => (
                <option key={ev.id} value={idx}>
                  Eval {idx + 1} - {new Date(ev.createdAt).toLocaleDateString('en-US')}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#64748b' }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
              <Radar
                name={`Eval ${selectedBaseline + 1}`}
                dataKey="baseline"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Radar
                name={`Eval ${selectedCurrent + 1}`}
                dataKey="current"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Legend />
              <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Dimension Changes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DIMENSIONS.map((dim) => {
            const baselineScore = evaluations[selectedBaseline].dimensionScores[dim.key];
            const currentScore = evaluations[selectedCurrent].dimensionScores[dim.key];
            const change = currentScore - baselineScore;
            return (
              <div key={dim.key} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-sm font-medium text-gray-700">{dim.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">{baselineScore}</span>
                  <span className="text-gray-300">→</span>
                  <span className="text-sm font-bold text-gray-900">{currentScore}</span>
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
