import type { User, Patient, Session } from '@/types';

const API_BASE = '';

async function fetchJSON<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    ...options,
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || `HTTP ${res.status}`);
  }
  return res.json();
}

export const AuthAPI = {
  login: (email: string, password: string) =>
    fetchJSON<User>(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
};

export const PatientsAPI = {
  list: (userId: string, role: string) =>
    fetchJSON<Patient[]>(`${API_BASE}/api/patients?userId=${userId}&role=${role}`),

  get: (id: string, userId?: string, role?: string) => {
    const qs = userId && role ? `?userId=${userId}&role=${role}` : '';
    return fetchJSON<Patient>(`${API_BASE}/api/patients/${id}${qs}`);
  },

  create: (data: Partial<Patient>) =>
    fetchJSON<Patient>(`${API_BASE}/api/patients`, {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  update: (id: string, data: Partial<Patient>) =>
    fetchJSON<Patient>(`${API_BASE}/api/patients/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  delete: (id: string) =>
    fetch(`${API_BASE}/api/patients/${id}`, { method: 'DELETE' }),
};

export const SessionsAPI = {
  list: (userId: string, role: string) =>
    fetchJSON<Session[]>(`${API_BASE}/api/sessions?userId=${userId}&role=${role}`),

  get: (id: string) =>
    fetchJSON<Session>(`${API_BASE}/api/sessions/${id}`),

  create: (data: Partial<Session> & { userId?: string }) =>
    fetchJSON<Session>(`${API_BASE}/api/sessions`, {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  update: (id: string, data: Partial<Session>) =>
    fetchJSON<Session>(`${API_BASE}/api/sessions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),

  delete: (id: string) =>
    fetch(`${API_BASE}/api/sessions/${id}`, { method: 'DELETE' }),
};

export const IepAPI = {
  generate: (studentData: string, patientName?: string, context?: string) =>
    fetchJSON<{ goals: string }>(`${API_BASE}/api/iep/generate`, {
      method: 'POST',
      body: JSON.stringify({ studentData, patientName, context }),
    }),
};
