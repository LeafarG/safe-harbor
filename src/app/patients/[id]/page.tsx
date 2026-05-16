'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { t } from '@/lib/i18n';
import { ArrowLeft, Calendar, Plus, Edit, Trash2, Brain, Lock, Sparkles, FileText, Download, Activity, ClipboardCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { computePatientRadarData } from '@/lib/analytics';
import { DIMENSIONS } from '@/lib/questionnaire';
import { generateIepPDF, generateSessionsPDF } from '@/lib/pdf';
import ProgressionSection from '@/components/ProgressionSection';
import type { Patient, User, QuestionnaireResponse } from '@/types';

export default function PatientDetailPage() {
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [aiSummary, setAiSummary] = useState<string>('');
  const [generatingSummary, setGeneratingSummary] = useState(false);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const saved = localStorage.getItem('demo-user');
    if (!saved) { router.push('/'); return; }
    const parsed = JSON.parse(saved) as User;
    setUser(parsed);
    const id = params.id as string;
    fetch(`/api/patients/${id}?userId=${parsed.id}&role=${parsed.role}`)
      .then((res) => res.json())
      .then((data) => setPatient(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [params.id, router]);

  const handleDeleteSession = async (sessionId: string) => {
    if (!confirm('Are you sure you want to delete this session?')) return;
    try {
      await fetch(`/api/sessions/${sessionId}`, { method: 'DELETE' });
      if (user && params.id) {
        fetch(`/api/patients/${params.id}?userId=${user.id}&role=${user.role}`)
          .then(res => res.json())
          .then(data => setPatient(data));
      }
    } catch {}
  };

  const generateAiSummary = async () => {
    if (!patient) return;
    setGeneratingSummary(true);
    const sessionNotes = (patient.sessions || [])
      .map(s => `- Date: ${new Date(s.sessionDate).toLocaleDateString('en-US')}, Location: ${s.location || 'N/A'}, Notes: ${s.notes || 'None'}`)
      .join('\n');
    const prompt = `Generate a summary of the patient based on the following data:\n\nPATIENT DATA:\n- Name: ${patient.name}\n- Date of Birth: ${patient.dateOfBirth ? new Date(patient.dateOfBirth).toLocaleDateString('en-US') : 'Not provided'}\n- General Notes: ${patient.notes || 'None'}\n\nSESSIONS:\n${sessionNotes || 'No sessions recorded'}\n\nSummarize in bullet points:\n1. Patient strengths\n2. Areas of difficulty\n3. Observed progress\n4. Recommendations for next sessions`;

    const latestQ = patient.allQuestionnaires?.[patient.allQuestionnaires.length - 1];
    const questionnaireResponses = latestQ?.responses;
    const dimensionScores = questionnaireResponses
      ? DIMENSIONS.map(dim => {
          const scores = questionnaireResponses.filter((r: QuestionnaireResponse) => r.dimension === dim.key).map((r: QuestionnaireResponse) => r.score);
          const sum = scores.reduce((a: number, b: number) => a + b, 0);
          const avg = scores.length ? Math.round((sum / scores.length) * 20) : 0;
          return { dimension: dim.label, baseline: avg, current: avg };
        })
      : undefined;

    try {
      const res = await fetch('/api/iep/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentData: prompt,
          patientName: patient.name,
          context: 'Clinical patient summary',
          questionnaireResponses,
          dimensionScores,
        }),
      });
      const data = await res.json();
      if (data.goals) setAiSummary(data.goals);
    } catch {}
    setGeneratingSummary(false);
  };

  if (loading) {
    return (<div className="flex items-center justify-center h-96"><div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" /></div>);
  }

  if (!patient) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Patient not found</p>
          <Link href="/patients" className="text-indigo-600 hover:text-indigo-700">Back to patients</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/patients" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{patient.name}</h1>
          <p className="text-sm text-gray-500">
            {patient.dateOfBirth ? `Date of Birth: ${new Date(patient.dateOfBirth).toLocaleDateString('en-US')}` : 'Date of birth not provided'}
          </p>
        </div>
      </div>

      <div className="max-w-4xl space-y-6">
        {patient.notes && (
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">{t.patients.generalNotes}</h2>
            <p className="text-gray-700">{patient.notes}</p>
          </div>
        )}

        {/* Questionnaire Status Card */}
        <div className={`rounded-xl border p-6 ${patient.questionnaire ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {patient.questionnaire ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              ) : (
                <AlertCircle className="w-6 h-6 text-amber-600" />
              )}
              <div>
                <h2 className={`text-lg font-semibold ${patient.questionnaire ? 'text-emerald-900' : 'text-amber-900'}`}>
                  {patient.questionnaire ? `${t.patients.questionnaireCompleted} (${patient.allQuestionnaires?.length || 1} evaluations)` : t.patients.questionnairePending}
                </h2>
                <p className={`text-sm ${patient.questionnaire ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {patient.questionnaire ? t.patients.questionnaireDesc : t.patients.questionnaireRequired}
                </p>
              </div>
            </div>
            {user?.role !== 'parent' && (
              <Link
                href={`/patients/${patient.id}/questionnaire`}
                className={`text-sm px-4 py-2 rounded-lg flex items-center gap-2 font-medium ${
                  patient.questionnaire
                    ? 'bg-white text-emerald-700 border border-emerald-300 hover:bg-emerald-50'
                    : 'bg-amber-600 text-white hover:bg-amber-700'
                }`}
              >
                <ClipboardCheck className="w-4 h-4" />
                {patient.questionnaire ? 'New Evaluation' : t.patients.fillQuestionnaire}
              </Link>
            )}
          </div>
        </div>

        {/* Radar Chart - always visible, uses questionnaire if available */}
        {(patient.sessions?.length || 0) > 0 || patient.questionnaire ? (
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2"><Activity className="w-5 h-5 text-indigo-600" />{t.reports.abilitiesRadar}</h2>
              <span className="text-xs text-gray-500 bg-slate-100 px-2 py-1 rounded">
                {patient.questionnaire ? `${patient.name} (Assessment)` : `${patient.name} (Estimate)`}
              </span>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={computePatientRadarData(patient.sessions || [], patient.allQuestionnaires)}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#64748b' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <Radar name="Baseline" dataKey="baseline" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} strokeWidth={2} />
                  <Radar name="Current" dataKey="current" stroke="#10b981" fill="#10b981" fillOpacity={0.2} strokeWidth={2} />
                  <Legend />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : null}

        {/* AI Summary - gated behind questionnaire */}
        {user?.role !== 'parent' && (
          <div className={`rounded-xl border p-6 ${patient.questionnaire ? 'bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className={`text-lg font-semibold flex items-center gap-2 ${patient.questionnaire ? 'text-indigo-900' : 'text-gray-500'}`}><Brain className="w-5 h-5" />{t.patients.aiSummary}</h2>
              {patient.questionnaire && (
                <button onClick={generateAiSummary} disabled={generatingSummary} className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50">
                  {generatingSummary ? (<><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />{t.patients.generating}</>) : (<><Sparkles className="w-4 h-4" />{t.patients.generateSummary}</>)}
                </button>
              )}
            </div>
            {patient.questionnaire ? (
              aiSummary ? (
                <>
                  <div className="bg-white rounded-lg p-4 text-sm whitespace-pre-wrap font-mono text-slate-800 max-h-64 overflow-y-auto mb-3">{aiSummary}</div>
                  <button onClick={() => generateIepPDF({ name: patient.name, dateOfBirth: patient.dateOfBirth, notes: patient.notes }, aiSummary, patient.sessions)} className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1 font-medium">
                    <Download className="w-4 h-4" />{t.patients.exportPdf}
                  </button>
                </>
              ) : (<p className="text-sm text-indigo-700">{t.patients.summaryPlaceholder}</p>)
            ) : (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Lock className="w-4 h-4" />
                {t.patients.questionnaireRequired}
              </div>
            )}
          </div>
        )}

        {/* Progression Section */}
        {(patient.allQuestionnaires?.length || 0) >= 1 && (
          <ProgressionSection
            patientId={patient.id}
            patientName={patient.name}
            dateOfBirth={patient.dateOfBirth}
            notes={patient.notes}
            userRole={user?.role || ''}
          />
        )}

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">              <Calendar className="w-5 h-5 text-indigo-600" />{t.sessions.title} ({patient.sessions?.length || 0})</h2>
            <div className="flex items-center gap-2">
              {(patient.sessions?.length || 0) > 0 && (
                <button onClick={() => generateSessionsPDF({ name: patient.name, dateOfBirth: patient.dateOfBirth }, patient.sessions || [])} className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
                  <Download className="w-4 h-4" />PDF
                </button>
              )}
              {user?.role !== 'parent' && (
                <Link href={`/sessions/new?patientId=${patient.id}`} className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-1">
                  <Plus className="w-4 h-4" />{t.patients.newSession}
                </Link>
              )}
            </div>
          </div>

          {(patient.sessions?.length || 0) === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-30" />
              <p>No sessions registered</p>
            </div>
          ) : (
            <div className="space-y-4">
              {(patient.sessions || []).map((session) => (
                <div key={session.id} className={`p-4 rounded-lg ${session.isPrivate ? 'bg-amber-50 border border-amber-200' : 'bg-slate-50'}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-medium text-gray-900">{new Date(session.sessionDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        {session.isPrivate && (<span className="flex items-center gap-1 text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded"><Lock className="w-3 h-3" />{t.sessions.private}</span>)}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                        {session.location && <span className="flex items-center gap-1">📍 {session.location}</span>}
                        {session.startTime && session.endTime && <span>🕐 {session.startTime} - {session.endTime}</span>}
                      </div>
                      {session.notes && (
                        <div className="mt-2 p-3 bg-white rounded-lg text-sm text-gray-700">
                          <div className="flex items-start gap-2"><FileText className="w-4 h-4 text-gray-400 mt-0.5" /><span>{session.notes}</span></div>
                        </div>
                      )}
                    </div>
                    {user?.role === 'therapist' && (
                      <div className="flex gap-2 ml-4">
                        <Link href={`/sessions/${session.id}`} className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg"><Edit className="w-4 h-4" /></Link>
                        <button onClick={() => handleDeleteSession(session.id)} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 className="w-4 h-4" /></button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {user?.role !== 'parent' && (
          <div className={`rounded-xl border p-6 ${patient.questionnaire ? 'bg-indigo-50 border-indigo-100' : 'bg-slate-50 border-slate-200'}`}>
            <h2 className={`text-lg font-semibold mb-2 ${patient.questionnaire ? 'text-indigo-900' : 'text-gray-500'}`}>{t.patients.generateIep}</h2>
            <p className={`text-sm mb-4 ${patient.questionnaire ? 'text-indigo-700' : 'text-gray-500'}`}>
              {patient.questionnaire ? t.patients.generateIepDesc : t.patients.questionnaireRequired}
            </p>
            {patient.questionnaire ? (
              <Link href={`/iep-agent?patientId=${patient.id}`} className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
                <Brain className="w-5 h-5" />{t.patients.generateIep}
              </Link>
            ) : (
              <Link href={`/patients/${patient.id}/questionnaire`} className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg">
                <ClipboardCheck className="w-5 h-5" />{t.patients.fillQuestionnaire}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
