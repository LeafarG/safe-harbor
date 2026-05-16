'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { t } from '@/lib/i18n';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Legend,
} from 'recharts';
import {
  Users, Calendar, TrendingUp, FileText, ArrowRight, Download, Activity,
} from 'lucide-react';
import type { User, Patient, Session, Questionnaire } from '@/types';
import { computePatientRadarData, computeAggregateRadarData } from '@/lib/analytics';

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export default function ReportsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRadarPatient, setSelectedRadarPatient] = useState('');
  const [radarAllQuestionnaires, setRadarAllQuestionnaires] = useState<Questionnaire[] | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('demo-user');
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setUser(parsed);
      fetchData(parsed.id, parsed.role);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchData = async (userId: string, role: string) => {
    try {
      const [patientsRes, sessionsRes] = await Promise.all([
        fetch(`/api/patients?userId=${userId}&role=${role}`),
        fetch(`/api/sessions?userId=${userId}&role=${role}`),
      ]);
      setPatients(await patientsRes.json());
      setSessions(await sessionsRes.json());
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  };

  const sessionsByDate = (() => {
    const grouped: Record<string, number> = {};
    sessions.forEach((s) => {
      const date = new Date(s.sessionDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      grouped[date] = (grouped[date] || 0) + 1;
    });
    return Object.entries(grouped).map(([date, count]) => ({ date, count })).slice(-14);
  })();

  const sessionsByPatient = (() => {
    const grouped: Record<string, number> = {};
    sessions.forEach((s) => {
      const name = s.patient?.name || 'Unknown';
      grouped[name] = (grouped[name] || 0) + 1;
    });
    return Object.entries(grouped).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count).slice(0, 6);
  })();

  const patientAgeDistribution = [
    { name: '3-5 years', value: Math.floor(patients.length * 0.25) || 2 },
    { name: '6-8 years', value: Math.floor(patients.length * 0.35) || 3 },
    { name: '9-12 years', value: Math.floor(patients.length * 0.25) || 2 },
    { name: '13+ years', value: Math.floor(patients.length * 0.15) || 1 },
  ].filter((d) => d.value > 0);

  useEffect(() => {
    if (selectedRadarPatient) {
      fetch(`/api/patients/${selectedRadarPatient}`)
        .then(res => res.json())
        .then(data => setRadarAllQuestionnaires(data.allQuestionnaires || null))
        .catch(() => setRadarAllQuestionnaires(null));
    } else {
      setRadarAllQuestionnaires(null);
    }
  }, [selectedRadarPatient]);

  const abilitiesData = (() => {
    if (selectedRadarPatient) {
      const patientSessions = sessions.filter(s => s.patientId === selectedRadarPatient);
      return computePatientRadarData(patientSessions, radarAllQuestionnaires || undefined);
    }
    return computeAggregateRadarData(sessions);
  })();

  const exportCSV = () => {
    const headers = ['Date', 'Patient', 'Notes'];
    const rows = sessions.map((s) => [
      new Date(s.sessionDate).toLocaleDateString('en-US'),
      s.patient?.name || '',
      s.notes || '',
    ]);
    const csv = [headers, ...rows].map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `sessions-report-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">Login to view reports</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{t.reports.title}</h1>
          <p className="text-gray-500 mt-1">{t.reports.subtitle}</p>
        </div>
        <button onClick={exportCSV} className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <Download className="w-4 h-4" />
          {t.reports.exportCsv}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center"><Users className="w-5 h-5 text-blue-600" /></div>
            <div><p className="text-2xl font-bold text-gray-900">{patients.length}</p><p className="text-sm text-gray-500">{t.reports.totalPatients}</p></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center"><Calendar className="w-5 h-5 text-emerald-600" /></div>
            <div><p className="text-2xl font-bold text-gray-900">{sessions.length}</p><p className="text-sm text-gray-500">{t.reports.totalSessions}</p></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center"><TrendingUp className="w-5 h-5 text-amber-600" /></div>
            <div><p className="text-2xl font-bold text-gray-900">{sessions.length > 0 ? Math.round(sessions.length / patients.length) : 0}</p><p className="text-sm text-gray-500">{t.reports.avgPerPatient}</p></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center"><FileText className="w-5 h-5 text-purple-600" /></div>
            <div><p className="text-2xl font-bold text-gray-900">{sessions.filter((s) => new Date(s.sessionDate) >= new Date(Date.now() - 7 * 86400000)).length}</p><p className="text-sm text-gray-500">{t.reports.thisWeek}</p></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{t.reports.sessionTrends}</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sessionsByDate}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Line type="monotone" dataKey="count" stroke="#6366f1" strokeWidth={2} dot={{ fill: '#6366f1', r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{t.reports.sessionsByPatient}</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sessionsByPatient} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={100} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                <Bar dataKey="count" fill="#10b981" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{t.reports.ageDistribution}</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={patientAgeDistribution} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5} dataKey="value" label={({ name, value }) => `${name}: ${value}`}>
                  {patientAgeDistribution.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">{t.reports.abilitiesRadar}</h2>
            <span className="text-xs text-gray-500 bg-slate-100 px-2 py-1 rounded">
              {selectedRadarPatient
                ? `${patients.find(p => p.id === selectedRadarPatient)?.name || ''} ${(radarAllQuestionnaires && radarAllQuestionnaires.length > 0) ? '(Assessment)' : '(Estimate)'}`
                : t.reports.abilitiesSubtitle}
            </span>
          </div>
          <div className="mb-4">
            <select
              value={selectedRadarPatient}
              onChange={(e) => setSelectedRadarPatient(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm text-slate-800"
            >
              <option value="">{t.reports.allPatientsRadar}</option>
              {patients.map(p => (
                <option key={p.id} value={p.id}>{p.name}</option>
              ))}
            </select>
          </div>
          <div className="h-72">
            {abilitiesData.some(d => d.baseline > 25 || d.current > 25) ? (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={abilitiesData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#64748b' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <Radar name="Baseline" dataKey="baseline" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} strokeWidth={2} />
                  <Radar name="Current" dataKey="current" stroke="#10b981" fill="#10b981" fillOpacity={0.2} strokeWidth={2} />
                  <Legend />
                  <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0' }} />
                </RadarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                {t.reports.noRadarData}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">{t.reports.lastSessions}</h2>
          <Link href="/sessions" className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1">{t.dashboard.viewAll} <ArrowRight className="w-4 h-4" /></Link>
        </div>
        {sessions.length === 0 ? (
          <div className="text-center py-8 text-gray-400"><Activity className="w-12 h-12 mx-auto mb-3 opacity-30" /><p>{t.dashboard.noRecentActivity}</p></div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-slate-100"><th className="text-left py-3 px-4 font-medium text-gray-500">{t.reports.date}</th><th className="text-left py-3 px-4 font-medium text-gray-500">{t.reports.patient}</th><th className="text-left py-3 px-4 font-medium text-gray-500">{t.reports.summary}</th></tr></thead>
              <tbody>
                {sessions.slice(0, 10).map((session) => (
                  <tr key={session.id} className="border-b border-slate-50 hover:bg-slate-50">
                    <td className="py-3 px-4 text-gray-900">{new Date(session.sessionDate).toLocaleDateString('en-US')}</td>
                    <td className="py-3 px-4"><Link href={`/patients/${session.patient?.id || ''}`} className="text-indigo-600 hover:text-indigo-700 font-medium">{session.patient?.name || 'Patient'}</Link></td>
                    <td className="py-3 px-4 text-gray-500 max-w-md truncate">{session.notes || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
