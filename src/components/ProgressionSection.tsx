'use client';

import { useState, useEffect } from 'react';
import { Activity, TrendingUp, Calendar } from 'lucide-react';
import { Evaluation } from './progression/types';
import ProgressionTimeline from './progression/ProgressionTimeline';
import ProgressionLineChart from './progression/ProgressionLineChart';
import ProgressionRadarCompare from './progression/ProgressionRadarCompare';
import AIProgressReport from './progression/AIProgressReport';

interface ProgressionSectionProps {
  patientId: string;
  patientName: string;
  dateOfBirth: string | null;
  notes: string | null;
  userRole: string;
}

export default function ProgressionSection({
  patientId,
  patientName,
  dateOfBirth,
  notes,
  userRole,
}: ProgressionSectionProps) {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'timeline' | 'chart' | 'radar'>('timeline');

  useEffect(() => {
    fetch(`/api/patients/${patientId}/questionnaires`)
      .then((res) => res.json())
      .then((data: Evaluation[]) => {
        setEvaluations(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [patientId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (evaluations.length === 0) {
    return (
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 text-center text-gray-500">
        No assessments available.
      </div>
    );
  }

  const tabs = [
    { key: 'timeline' as const, label: 'Timeline', icon: <Calendar className="w-4 h-4" /> },
    { key: 'chart' as const, label: 'Progress Chart', icon: <TrendingUp className="w-4 h-4" /> },
    { key: 'radar' as const, label: 'Compare Radar', icon: <Activity className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'timeline' && <ProgressionTimeline evaluations={evaluations} />}
      {activeTab === 'chart' && evaluations.length >= 2 && (
        <ProgressionLineChart evaluations={evaluations} />
      )}
      {activeTab === 'radar' && evaluations.length >= 2 && (
        <ProgressionRadarCompare evaluations={evaluations} />
      )}

      {evaluations.length >= 2 && userRole !== 'parent' && (
        <AIProgressReport
          patientName={patientName}
          dateOfBirth={dateOfBirth}
          notes={notes}
          evaluations={evaluations}
        />
      )}
    </div>
  );
}
