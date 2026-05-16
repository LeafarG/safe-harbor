'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import type { User } from '@/types';

const STORAGE_KEY = 'demo-user';
const AUTH_EVENT = 'safe-harbor-auth';

function readUser(): User | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.id || !parsed.email || !parsed.role) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
}

export function useAuth(redirectTo = '/') {
  const [user, setUser] = useState<User | null>(() => readUser());
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    if (!user && redirectTo) {
      router.push(redirectTo);
    }
  }, [user, redirectTo, router]);

  const login = useCallback(async (email: string, password: string): Promise<User | null> => {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) return null;
    const data: User = await res.json();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setUser(data);
    window.dispatchEvent(new Event(AUTH_EVENT));
    return data;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
    window.dispatchEvent(new Event(AUTH_EVENT));
    window.location.href = '/';
  }, []);

  return { user, loading: !mounted, login, logout };
}
