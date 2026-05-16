'use client';

import { useState, useEffect, useCallback } from 'react';
import { SessionsAPI } from '@/lib/services/api';
import type { Session, User } from '@/types';

export function useSessions(user: User | null) {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const data = await SessionsAPI.list(user.id, user.role);
      setSessions(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load sessions');
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const remove = useCallback(async (id: string) => {
    await SessionsAPI.delete(id);
    setSessions((prev) => prev.filter((s) => s.id !== id));
  }, []);

  return { sessions, loading, error, refresh: fetch, remove };
}
