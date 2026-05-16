'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { t } from '@/lib/i18n';
import { ArrowLeft, BarChart3 } from 'lucide-react';
import {
  QUESTIONS,
  AGE_TIER_LABELS,
  getAgeTierFromAge,
  DIMENSIONS,
  type AgeTier,
} from '@/lib/questionnaire';
import type { QuestionnaireUser, AnswerState } from '@/components/questionnaire/types';
import QuestionnaireReview from '@/components/questionnaire/QuestionnaireReview';
import DimensionSection from '@/components/questionnaire/DimensionSection';
import ProgressBar from '@/components/questionnaire/ProgressBar';

export default function QuestionnairePage() {
  const router = useRouter();
  const params = useParams();
  const patientId = params.id as string;

  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState<number | null>(null);
  const [ageTier, setAgeTier] = useState<AgeTier>('5-6');
  const [answers, setAnswers] = useState<Record<string, AnswerState[]>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState<QuestionnaireUser | null>(null);
  const [showReview, setShowReview] = useState(false);

  useEffect(() => {
    const init: Record<string, AnswerState[]> = {};
    DIMENSIONS.forEach((dim) => {
      init[dim.key] = QUESTIONS[dim.key][ageTier].map(() => ({ score: 3, notes: '' }));
    });
    setAnswers(init);
  }, [ageTier]);

  useEffect(() => {
    const saved = localStorage.getItem('demo-user');
    if (!saved) {
      router.push('/');
      return;
    }
    const parsed = JSON.parse(saved) as QuestionnaireUser;
    setUser(parsed);

    fetch(`/api/patients/${patientId}?userId=${parsed.id}&role=${parsed.role}`)
      .then((res) => res.json())
      .then((data) => {
        setPatientName(data.name || '');
        if (data.dateOfBirth) {
          const dob = new Date(data.dateOfBirth);
          const ageMs = Date.now() - dob.getTime();
          const ageYears = Math.floor(ageMs / (365.25 * 24 * 60 * 60 * 1000));
          setPatientAge(ageYears);
          setAgeTier(getAgeTierFromAge(ageYears));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [patientId, router]);

  const updateAnswer = useCallback(
    (dimension: string, index: number, field: keyof AnswerState, value: string | number) => {
      setAnswers((prev) => {
        const updated = { ...prev };
        updated[dimension] = [...(updated[dimension] || [])];
        updated[dimension][index] = { ...updated[dimension][index], [field]: value };
        return updated;
      });
    },
    []
  );

  const totalAnswered = useMemo(() => {
    let count = 0;
    DIMENSIONS.forEach((dim) => {
      (answers[dim.key] || []).forEach((a) => {
        if (a.score > 0) count++;
      });
    });
    return count;
  }, [answers]);

  const handleSubmit = async () => {
    if (!user) return;
    setSaving(true);

    const responses: Omit<import('@/types').QuestionnaireResponse, 'id' | 'questionnaireId'>[] = [];
    DIMENSIONS.forEach((dim) => {
      (answers[dim.key] || []).forEach((ans, idx) => {
        responses.push({
          dimension: dim.key,
          questionIndex: idx,
          ageTier,
          score: ans.score,
          notes: ans.notes,
        });
      });
    });

    try {
      const res = await fetch(`/api/patients/${patientId}/questionnaire`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ createdBy: user.id, responses }),
      });
      if (res.ok) {
        router.push(`/patients/${patientId}`);
      }
    } catch {
      // silently fail
    }
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (showReview) {
    return (
      <QuestionnaireReview
        patientName={patientName}
        ageTierLabel={AGE_TIER_LABELS[ageTier]}
        answers={answers}
        saving={saving}
        onBack={() => setShowReview(false)}
        onSubmit={handleSubmit}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href={`/patients/${patientId}`}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t.patients.questionnaire}</h1>
          <p className="text-sm text-gray-500">
            {patientName}
            {patientAge ? ` (${patientAge} years)` : ''}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Developmental Age Tier
        </label>
        <select
          value={ageTier}
          onChange={(e) => setAgeTier(e.target.value as AgeTier)}
          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-slate-800"
        >
          {Object.entries(AGE_TIER_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {patientAge && (
          <p className="text-xs text-gray-500 mt-2">
            Auto-selected based on patient age ({patientAge} years). Override if needed.
          </p>
        )}
      </div>

      <ProgressBar current={totalAnswered} total={60} />

      <div className="space-y-4">
        {DIMENSIONS.map((dim) => (
          <DimensionSection
            key={dim.key}
            dimKey={dim.key}
            dimLabel={dim.label}
            ageTier={ageTier}
            answers={answers[dim.key] || []}
            onUpdate={(idx, field, value) => updateAnswer(dim.key, idx, field, value)}
          />
        ))}
      </div>

      <div className="flex gap-3 sticky bottom-4">
        <Link
          href={`/patients/${patientId}`}
          className="flex-1 text-center py-3 px-6 border border-slate-300 text-gray-700 rounded-lg hover:bg-slate-50 bg-white shadow-sm"
        >
          {t.common.cancel}
        </Link>
        <button
          onClick={() => setShowReview(true)}
          disabled={totalAnswered < 60}
          className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 shadow-sm"
        >
          <BarChart3 className="w-5 h-5" />
          Review & Save
        </button>
      </div>
    </div>
  );
}
