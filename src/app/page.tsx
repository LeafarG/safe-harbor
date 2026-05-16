'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { t } from '@/lib/i18n';
import { useAuth } from '@/hooks/useAuth';
import { PatientsAPI, SessionsAPI } from '@/lib/services/api';
import { Card, StatCard, ActionCard, EmptyState, PageHeader } from '@/components/ui';
import {
  Users, Calendar, Brain, ArrowRight, Activity, TrendingUp, Clock, FileCheck,
  Shield, Sparkles, LineChart, Lock, MessageSquare, FileText, Heart, Mail, KeyRound,
} from 'lucide-react';
import type { Patient, Session } from '@/types';

const demoUsers = [
  { email: 'therapist@demo.com', password: 'demo123', name: 'Dr. Smith (BCBA)', role: 'therapist' as const, icon: '🩺', color: 'bg-indigo-600 hover:bg-indigo-700' },
  { email: 'educator@demo.com', password: 'demo123', name: 'Ms. Johnson', role: 'educator' as const, icon: '🍎', color: 'bg-emerald-600 hover:bg-emerald-700' },
  { email: 'parent.emma@demo.com', password: 'demo123', name: 'Sarah Thompson (Parent)', role: 'parent' as const, icon: '👨‍👩‍👧', color: 'bg-amber-600 hover:bg-amber-700' },
];

const features = [
  { icon: <Brain className="w-6 h-6" />, title: 'AI IEP Generation', desc: 'SMART objectives from 60-item assessments + clinical notes' },
  { icon: <LineChart className="w-6 h-6" />, title: 'Longitudinal Tracking', desc: 'Radar, line charts, and sparklines across multiple evaluations' },
  { icon: <Shield className="w-6 h-6" />, title: 'Role-Based Access', desc: 'Therapist, educator, and parent views with privacy controls' },
  { icon: <MessageSquare className="w-6 h-6" />, title: 'AI Chat Assistant', desc: 'Ask follow-up questions about generated IEP objectives' },
  { icon: <FileText className="w-6 h-6" />, title: 'PDF & CSV Export', desc: 'One-click reports for IEPs, sessions, and analytics' },
  { icon: <Heart className="w-6 h-6" />, title: 'Clinical-Grade Data', desc: '60-question SHDA assessment with observation prompts' },
];

export default function HomePage() {
  const { user, login } = useAuth('');
  const [patients, setPatients] = useState<Patient[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    if (user) {
      Promise.all([
        PatientsAPI.list(user.id, user.role),
        SessionsAPI.list(user.id, user.role),
      ]).then(([p, s]) => {
        setPatients(p);
        setSessions(s.slice(0, 5));
      });
    }
  }, [user]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoginError('');
    const result = await login(email, password);
    if (!result) setLoginError(t.login.loginError);
    setLoading(false);
  };

  const handleQuickLogin = async (demoUser: (typeof demoUsers)[0]) => {
    setLoading(true);
    setLoginError('');
    const result = await login(demoUser.email, demoUser.password);
    if (!result) setLoginError(t.login.loginError);
    setLoading(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Hero */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                AI-Powered Special Education Platform
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Safe Harbor
                </h1>
                <p className="mt-4 text-xl text-indigo-200 max-w-lg">
                  IEP generation, longitudinal assessment tracking, and clinical session management — powered by local AI.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((f) => (
                  <div
                    key={f.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300 flex-shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{f.title}</p>
                      <p className="text-indigo-200/70 text-xs mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm text-indigo-300/60">
                <span className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4" />
                  HIPAA-aligned privacy
                </span>
                <span className="flex items-center gap-1.5">
                  <Brain className="w-4 h-4" />
                  Runs offline with Ollama
                </span>
              </div>
            </div>

            {/* Right: Login */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{t.login.title}</h2>
                <p className="text-gray-500 mt-1">{t.login.subtitle}</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-slate-800"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-slate-800"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl transition-all shadow-lg disabled:opacity-50"
                >
                  {loading ? 'Signing in…' : 'Sign In'}
                </button>
              </form>

              {loginError && (
                <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm mb-4">
                  {loginError}
                </div>
              )}

              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs font-medium text-gray-500 text-center mb-3">Quick Demo Login</p>
                <div className="space-y-2">
                  {demoUsers.map((demoUser) => (
                    <button
                      key={demoUser.email}
                      onClick={() => handleQuickLogin(demoUser)}
                      disabled={loading}
                      className={`w-full text-white font-medium py-2.5 px-4 rounded-lg transition-all flex items-center gap-3 shadow disabled:opacity-50 text-sm ${demoUser.color}`}
                    >
                      <span className="text-lg">{demoUser.icon}</span>
                      <div className="text-left">
                        <p className="text-xs font-bold">{demoUser.name}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 ml-auto opacity-70" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-center mt-4">
                <button
                  onClick={() => { localStorage.clear(); window.location.reload(); }}
                  className="text-xs text-gray-400 hover:text-red-500 underline"
                >
                  Clear browser data & reload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const todayCount = sessions.filter((s) => {
    const today = new Date().toISOString().split('T')[0];
    return s.sessionDate?.startsWith(today);
  }).length;

  const quickActions = [
    { href: '/sessions/new', icon: <Calendar className="w-5 h-5" />, title: t.dashboard.newSession, desc: t.dashboard.newSessionDesc, color: 'indigo' as const },
    ...(user.role !== 'parent' ? [{ href: '/iep-agent', icon: <Brain className="w-5 h-5" />, title: t.dashboard.generateIep, desc: t.dashboard.generateIepDesc, color: 'purple' as const }] : []),
    { href: '/reports', icon: <TrendingUp className="w-5 h-5" />, title: t.dashboard.viewReports, desc: t.dashboard.viewReportsDesc, color: 'emerald' as const },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title={`${t.dashboard.welcome}, ${user.name.split(' ')[0]}!`}
        subtitle={t.dashboard.summary}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={<Users className="w-5 h-5 text-blue-600" />}
          iconBg="bg-blue-100"
          value={patients.length}
          label={t.dashboard.patients}
          badge={`+${patients.length}`}
          badgeColor="bg-green-50 text-green-600"
        />
        <StatCard
          icon={<Calendar className="w-5 h-5 text-emerald-600" />}
          iconBg="bg-emerald-100"
          value={sessions.length}
          label={t.dashboard.sessions}
          badge="Active"
          badgeColor="bg-emerald-50 text-emerald-600"
        />
        <StatCard
          icon={<Clock className="w-5 h-5 text-amber-600" />}
          iconBg="bg-amber-100"
          value={todayCount}
          label={t.dashboard.today}
          badge="Today"
          badgeColor="bg-amber-50 text-amber-600"
        />
        <StatCard
          icon={<FileCheck className="w-5 h-5 text-purple-600" />}
          iconBg="bg-purple-100"
          value={user.role === 'parent' ? '-' : '3'}
          label={t.dashboard.iepPlans}
          badge="IEP"
          badgeColor="bg-purple-50 text-purple-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">{t.dashboard.quickActions}</h2>
            <div className={`grid grid-cols-1 ${quickActions.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} gap-3`}>
              {quickActions.map((a) => (
                <ActionCard key={a.href} {...a} />
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">{t.dashboard.recentActivity}</h2>
              <Link href="/sessions" className="text-sm text-indigo-600 hover:text-indigo-700">{t.dashboard.viewAll}</Link>
            </div>
            {sessions.length === 0 ? (
              <EmptyState icon={<Activity />} title={t.dashboard.noRecentActivity} />
            ) : (
              <div className="space-y-3">
                {sessions.slice(0, 3).map((session) => (
                  <Link
                    key={session.id}
                    href={`/sessions/${session.id}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-4 h-4 text-slate-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{session.patient?.name}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(session.sessionDate).toLocaleDateString('en-US')} • {session.location || '—'}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                  </Link>
                ))}
              </div>
            )}
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">{t.dashboard.accessiblePatients}</h2>
              {user.role !== 'parent' && (
                <Link href="/patients/new" className="text-xs text-indigo-600 hover:text-indigo-700 font-medium">{t.dashboard.newPatient}</Link>
              )}
            </div>
            {patients.length === 0 ? (
              <EmptyState icon={<Users />} title={t.dashboard.noPatients} />
            ) : (
              <div className="space-y-2">
                {patients.slice(0, 6).map((patient) => (
                  <Link
                    key={patient.id}
                    href={`/patients/${patient.id}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{patient.name}</p>
                      <p className="text-xs text-gray-500">{(patient.sessions?.length || 0)} {t.patients.sessions}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                  </Link>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
