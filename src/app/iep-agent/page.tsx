'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { t } from '@/lib/i18n';
import { Upload, MessageSquare, Sparkles, FileText, Download, AlertTriangle, ClipboardCheck } from 'lucide-react';
import { generateIepPDF } from '@/lib/pdf';
import type { SessionData } from '@/lib/pdf';
import { DIMENSIONS } from '@/lib/questionnaire';
import type { Patient, QuestionnaireResponse } from '@/types';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface PatientWithData {
  name: string;
  dateOfBirth?: string | null;
  notes?: string | null;
  sessions?: SessionData[];
  allQuestionnaires?: Array<{ responses: QuestionnaireResponse[] }>;
}

function IepAgentContent() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [selectedPatient, setSelectedPatient] = useState('');
  const [selectedPatientData, setSelectedPatientData] = useState<PatientWithData | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [generatedGoals, setGeneratedGoals] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [aiConnected, setAiConnected] = useState<boolean>(false);
  const [aiModel, setAiModel] = useState<string>('');
  const router = useRouter();
  const searchParams = useSearchParams();

  const checkAiConnection = async () => {
    try {
      const res = await fetch('/api/iep/health', { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setAiConnected(data.connected && data.available);
        setAiModel(data.model || '');
      } else {
        setAiConnected(false);
      }
    } catch {
      setAiConnected(false);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem('demo-user');
    if (!saved) { router.push('/'); return; }
    const parsed = JSON.parse(saved);
    fetch(`/api/patients?userId=${parsed.id}&role=${parsed.role}`)
      .then(res => res.json())
      .then(data => setPatients(data))
      .catch(() => {})
      .finally(() => setLoading(false));
    const patientIdParam = searchParams.get('patientId');
    if (patientIdParam) setSelectedPatient(patientIdParam);
    checkAiConnection();
  }, [router, searchParams]);

  useEffect(() => {
    if (selectedPatient) {
      fetch(`/api/patients/${selectedPatient}`)
        .then(res => res.json())
        .then(data => setSelectedPatientData(data))
        .catch(() => {});
    }
  }, [selectedPatient]);

  const handleFileUpload = async () => {
    if (!selectedPatient) return;
    setUploading(true);
    let studentData = '';
    if (selectedPatientData) {
      const sessions = selectedPatientData.sessions || [];
      const sessionNotes = sessions.map((s) => s.notes || '').filter(Boolean).join('\n- ');
      studentData = `PATIENT DATA:\n- Name: ${selectedPatientData.name}\n- Date of Birth: ${selectedPatientData.dateOfBirth ? new Date(selectedPatientData.dateOfBirth).toLocaleDateString('en-US') : 'Not provided'}\n- General Notes: ${selectedPatientData.notes || 'None'}\n\nRECENT SESSIONS (${sessions.length}):\n${sessionNotes || 'No sessions recorded'}`.trim();
    } else if (file) {
      const reader = new FileReader();
      studentData = await new Promise((resolve) => { reader.onload = () => resolve(reader.result as string); reader.readAsText(file); });
    } else {
      studentData = '- Disability: ASD\n- Age: 8 years\n- School level: Elementary I\n- Reading: syllabic level\n- Math: 45% accuracy';
    }
    const allQ = selectedPatientData?.allQuestionnaires;
    const latestQ = allQ?.[allQ.length - 1];
    const questionnaireResponses = latestQ?.responses || null;
    const dimensionScores = questionnaireResponses
      ? DIMENSIONS.map(dim => {
          const scores = questionnaireResponses.filter((r) => r.dimension === dim.key).map((r) => r.score);
          const sum = scores.reduce((a: number, b: number) => a + b, 0);
          const avg = scores.length ? Math.round((sum / scores.length) * 20) : 0;
          return { dimension: dim.label, baseline: avg, current: avg };
        })
      : undefined;
    setUploading(false);
    setGenerating(true);
    try {
      const res = await fetch('/api/iep/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentData,
          patientName: selectedPatientData?.name || '',
          context: 'Special education guidelines',
          questionnaireResponses,
          dimensionScores,
        })
      });
      const data = await res.json();
      if (data.goals) {
        setGeneratedGoals(data.goals);
        const isOllama = data.source === 'ollama';
        setAiConnected(isOllama);
        setChatMessages([{
          role: 'assistant',
          content: isOllama
            ? `IEP objectives generated for ${selectedPatientData?.name || 'the patient'} successfully using ${aiModel || 'local AI'}! You can ask questions about the objectives or request adjustments.`
            : `IEP objectives generated for ${selectedPatientData?.name || 'the patient'} (demo mode). Connect Ollama with gemma4:e4b for real AI responses.`
        }]);
      }
    } catch {
      setGeneratedGoals('Error generating IEP objectives. Please try again.');
    }
    setGenerating(false);
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    const userMessage = chatInput;
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const res = await fetch('/api/iep/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          iepGoals: generatedGoals,
          history: chatMessages,
        }),
      });
      const data = await res.json();
      if (data.response) {
        setChatMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
        if (data.source === 'ollama') setAiConnected(true);
      } else {
        setChatMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I could not process your message.' }]);
      }
    } catch {
      setChatMessages(prev => [...prev, { role: 'assistant', content: 'Connection error. Please try again.' }]);
    }
  };

  const handleExport = () => {
    if (!selectedPatientData || !generatedGoals) return;
    generateIepPDF({ name: selectedPatientData.name, dateOfBirth: selectedPatientData.dateOfBirth, notes: selectedPatientData.notes }, generatedGoals, selectedPatientData.sessions);
  };

  if (loading) {
    return (<div className="flex items-center justify-center h-96"><div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" /></div>);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${aiConnected ? 'bg-green-100' : 'bg-indigo-100'}`}>
          <Sparkles className={`w-5 h-5 ${aiConnected ? 'text-green-600' : 'text-indigo-600'}`} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t.iepAgent.title}</h1>
          <p className="text-sm text-gray-500">{aiConnected ? `${t.iepAgent.connected}${aiModel ? ` (${aiModel})` : ''}` : t.iepAgent.demoMode}</p>
        </div>
      </div>

      <div className="max-w-4xl space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Upload className="w-5 h-5 text-indigo-600" />
            {t.iepAgent.generateGoals}
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.iepAgent.selectPatient}</label>
              <select value={selectedPatient} onChange={(e) => setSelectedPatient(e.target.value)} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-slate-800">
                <option value="">Select a patient</option>
                {patients.map(p => (<option key={p.id} value={p.id}>{p.name}</option>))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t.iepAgent.uploadData}</label>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-indigo-400 transition-colors">
                <input type="file" accept=".csv" onChange={(e) => setFile(e.target.files?.[0] || null)} className="hidden" id="csv-upload" />
                <label htmlFor="csv-upload" className="cursor-pointer">
                  <FileText className="w-10 h-10 mx-auto text-gray-400 mb-2" />
                  {file ? (<p className="text-indigo-600 font-medium">{file.name}</p>) : (<p className="text-gray-500">{t.iepAgent.uploadPlaceholder}</p>)}
                </label>
              </div>
              <p className="text-xs text-gray-500 mt-2">{t.iepAgent.uploadNote}</p>
            </div>
            {selectedPatient && (!selectedPatientData?.allQuestionnaires || selectedPatientData.allQuestionnaires.length === 0) && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-700 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>No assessment on file. IEP will be based on session notes only.</span>
                <Link href={`/patients/${selectedPatient}/questionnaire`} className="underline font-medium hover:text-amber-800 flex items-center gap-1 ml-auto">
                  <ClipboardCheck className="w-3 h-3" />Fill Assessment
                </Link>
              </div>
            )}
            <button onClick={handleFileUpload} disabled={!selectedPatient || uploading || generating} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50">
              {uploading ? (<><span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />{t.iepAgent.processing}</>) : generating ? (<><span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />{t.iepAgent.generating}</>) : (<><Sparkles className="w-5 h-5" />{t.iepAgent.generateBtn}</>)}
            </button>
          </div>
        </div>

        {generatedGoals && (
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2"><FileText className="w-5 h-5 text-indigo-600" />{t.iepAgent.generatedGoals}</h2>
              <button onClick={handleExport} className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1"><Download className="w-4 h-4" />{t.iepAgent.export}</button>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 text-sm whitespace-pre-wrap font-mono text-slate-800">{generatedGoals}</div>
          </div>
        )}

        {chatMessages.length > 0 && (
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2"><MessageSquare className="w-5 h-5 text-indigo-600" />{t.iepAgent.chat}</h2>
            <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`p-3 rounded-lg ${msg.role === 'user' ? 'bg-indigo-50 ml-8' : 'bg-slate-50 mr-8'}`}>
                  <p className="text-sm text-slate-800">{msg.content}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} placeholder={t.iepAgent.chatPlaceholder} className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-slate-800 placeholder-slate-400" />
              <button onClick={handleSendMessage} disabled={!chatInput.trim()} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50">{t.iepAgent.send}</button>
            </div>
          </div>
        )}

        {!generatedGoals && (
          <div className="bg-indigo-50 rounded-xl border border-indigo-100 p-8 text-center">
            <Sparkles className="w-12 h-12 mx-auto text-indigo-400 mb-4" />
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">{t.iepAgent.howItWorks}</h3>
            <p className="text-sm text-indigo-700 max-w-md mx-auto">
              1. {t.iepAgent.step1}<br/>
              2. {t.iepAgent.step2}<br/>
              3. {t.iepAgent.step3}<br/>
              4. {t.iepAgent.step4}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function IepAgentPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-96"><div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" /></div>}>
      <IepAgentContent />
    </Suspense>
  );
}
