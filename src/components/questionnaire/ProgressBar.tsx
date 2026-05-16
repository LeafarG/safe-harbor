'use client';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = total > 0 ? Math.round((current / total) * 100) : 0;
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Progress</span>
        <span className="text-sm font-bold text-indigo-600">
          {current} / {total} ({percent}%)
        </span>
      </div>
      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-indigo-600 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
