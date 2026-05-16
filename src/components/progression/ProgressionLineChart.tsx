'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp } from 'lucide-react';
import { DIMENSIONS } from '@/lib/questionnaire';
import { Evaluation, COLORS } from './types';

interface ProgressionLineChartProps {
  evaluations: Evaluation[];
}

export default function ProgressionLineChart({ evaluations }: ProgressionLineChartProps) {
  const data = evaluations.map((ev) => {
    const point: Record<string, string | number> = {
      name: `Eval ${evaluations.indexOf(ev) + 1}`,
      date: new Date(ev.createdAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      }),
    };
    DIMENSIONS.forEach((dim) => {
      point[dim.key] = ev.dimensionScores[dim.key];
    });
    return point;
  });

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-indigo-600" />
        Dimension Scores Over Time
      </h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="date" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
            <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            <Legend />
            {DIMENSIONS.map((dim, idx) => (
              <Line
                key={dim.key}
                type="monotone"
                dataKey={dim.key}
                name={dim.label}
                stroke={COLORS[idx % COLORS.length]}
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
