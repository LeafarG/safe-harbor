'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { t } from '@/lib/i18n';
import {
  Users,
  Calendar,
  Brain,
  BarChart3,
  LogOut,
  Menu,
  X,
  Home,
} from 'lucide-react';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

const roleColors: Record<string, string> = {
  therapist: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  educator: 'bg-blue-100 text-blue-800 border-blue-200',
  parent: 'bg-purple-100 text-purple-800 border-purple-200',
};

export default function Navigation({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const readUser = () => {
      const savedUser = localStorage.getItem('demo-user');
      setUser(savedUser ? JSON.parse(savedUser) : null);
    };

    readUser();
    const handleAuth = () => readUser();
    window.addEventListener('safe-harbor-auth', handleAuth);
    window.addEventListener('storage', handleAuth);
    return () => {
      window.removeEventListener('safe-harbor-auth', handleAuth);
      window.removeEventListener('storage', handleAuth);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('demo-user');
    window.dispatchEvent(new Event('safe-harbor-auth'));
    window.location.href = '/';
  };

  const navItems = [
    { href: '/', label: t.nav.dashboard, icon: Home },
    { href: '/patients', label: t.nav.patients, icon: Users },
    { href: '/sessions', label: t.nav.sessions, icon: Calendar },
    { href: '/reports', label: t.nav.reports, icon: BarChart3 },
    ...(user?.role !== 'parent'
      ? [{ href: '/iep-agent', label: t.nav.iepAgent, icon: Brain }]
      : []),
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  if (!user) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 fixed h-full z-10">
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 text-sm">Safe Harbor</h1>
              <p className="text-xs text-gray-500">EdTech & ABA</p>
            </div>
          </div>
          <div className={`text-xs px-2 py-1 rounded-md border ${roleColors[user.role]} inline-block`}>
            {t.roles[user.role as keyof typeof t.roles] || user.role}
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                    : 'text-gray-600 hover:bg-slate-50 hover:text-gray-900'
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? 'text-indigo-600' : 'text-gray-400'}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-slate-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            {t.nav.logout}
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-slate-200 z-20">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h1 className="font-bold text-gray-900 text-sm">Safe Harbor</h1>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${roleColors[user.role]}`}>
                {t.roles[user.role as keyof typeof t.roles] || user.role}
              </span>
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 hover:bg-slate-100 rounded-lg"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-slate-100 p-4 space-y-1 bg-white">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? 'text-indigo-600' : 'text-gray-400'}`} />
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-slate-100 mt-2">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
              >
                <LogOut className="w-4 h-4" />
                {t.nav.logout} ({user.name})
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-64">
        <div className="md:hidden h-[72px]" />
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
