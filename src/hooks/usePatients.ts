'use client';

import { useState, useEffect, useCallback } from 'react';
import { PatientsAPI } from '@/lib/services/api';
import type { Patient, User } from '@/types';

export function usePatients(user: User | null) {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const data = await PatientsAPI.list(user.id, user.role);
      setPatients(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load patients');
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const remove = useCallback(async (id: string) => {
    await PatientsAPI.delete(id);
    setPatients((prev) => prev.filter((p) => p.id !== id));
  }, []);

  return { patients, loading, error, refresh: fetch, remove };
}
