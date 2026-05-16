'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Save, MapPin, Users, Package, Lock } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
}

const locations = ['Clinic', 'Home', 'School'];
const defaultParticipants = ['Therapist', 'Patient', 'Caregiver'];
const defaultMaterials = ['Toys', 'Cards', 'Tablet', 'Paper and pen', 'Books'];

function NewSessionForm() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [patientId, setPatientId] = useState('');
  const [sessionDate, setSessionDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);
  const [materials, setMaterials] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const saved = localStorage.getItem('demo-user');
    if (!saved) {
      router.push('/');
      return;
    }
    
    // Get patients with user context
    const user = JSON.parse(saved);
    fetch(`/api/patients?userId=${user.id}&role=${user.role}`)
      .then(res => res.json())
      .then(data => setPatients(data))
      .catch(() => {});
    
    // Pre-fill patient ID from URL
    const patientIdParam = searchParams.get('patientId');
    if (patientIdParam) {
      setPatientId(patientIdParam);
    }
    
    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    setSessionDate(today);
  }, [router, searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientId || !sessionDate) return;

    setLoading(true);
    try {
      const res = await fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientId,
          sessionDate,
          startTime,
          endTime,
          location,
          participants,
          materials,
          notes,
          isPrivate,
        }),
      });

      if (res.ok) {
        router.push('/sessions');
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  };

  const toggleParticipant = (item: string) => {
    setParticipants(prev => 
      prev.includes(item) ? prev.filter(p => p !== item) : [...prev, item]
    );
  };

  const toggleMaterial = (item: string) => {
    setMaterials(prev => 
      prev.includes(item) ? prev.filter(m => m !== item) : [...prev, item]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/sessions" className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">New Session</h1>
      </div>

      <div className="max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Patient *
              </label>
              <select
                value={patientId}
                onChange={(e) => setPatientId(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-slate-800"
                required
              >
                <option value="">Select a patient</option>
                {patients.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  value={sessionDate}
                  onChange={(e) => setSessionDate(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-slate-800"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start
                </label>
                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-slate-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End
                </label>
                <input
                  type="time"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-slate-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </label>
              <div className="flex gap-2">
                {locations.map(loc => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setLocation(location === loc ? '' : loc)}
                    className={`px-4 py-2 rounded-lg border ${
                      location === loc
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-gray-700 border-slate-300 hover:border-indigo-300'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Participants
              </label>
              <div className="flex flex-wrap gap-2">
                {defaultParticipants.map(item => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleParticipant(item)}
                    className={`px-4 py-2 rounded-lg border ${
                      participants.includes(item)
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-gray-700 border-slate-300 hover:border-indigo-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Package className="w-4 h-4" />
                Materials
              </label>
              <div className="flex flex-wrap gap-2">
                {defaultMaterials.map(item => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleMaterial(item)}
                    className={`px-4 py-2 rounded-lg border ${
                      materials.includes(item)
                        ? 'bg-indigo-600 text-white border-indigo-600'
                        : 'bg-white text-gray-700 border-slate-300 hover:border-indigo-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Session Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none text-slate-800 placeholder-slate-400"
                placeholder="Describe how the session went..."
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="isPrivate"
                checked={isPrivate}
                onChange={(e) => setIsPrivate(e.target.checked)}
                className="w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
              />
              <label htmlFor="isPrivate" className="text-sm text-gray-700 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                Private note (only author can view)
              </label>
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              href="/sessions"
              className="flex-1 text-center py-3 px-6 border border-slate-300 text-gray-700 rounded-lg hover:bg-slate-50"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading || !patientId || !sessionDate}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Save
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function NewSessionPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <NewSessionForm />
    </Suspense>
  );
}