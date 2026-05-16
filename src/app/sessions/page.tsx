'use client';

import Link from 'next/link';
import { t } from '@/lib/i18n';
import { useAuth } from '@/hooks/useAuth';
import { useSessions } from '@/hooks/useSessions';
import { Card, EmptyState, LoadingSpinner, PageHeader, Button } from '@/components/ui';
import { Calendar, MapPin, Lock, Plus } from 'lucide-react';

export default function SessionsPage() {
  const { user } = useAuth('/');
  const { sessions, loading, remove } = useSessions(user);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this session?')) return;
    await remove(id);
  };

  if (!user || loading) return <LoadingSpinner className="h-96" />;

  return (
    <div className="space-y-6">
      <PageHeader
        title={t.sessions.title}
        subtitle={`${sessions.length} ${t.sessions.registered}`}
        action={
          user.role !== 'parent' && (
            <Link href="/sessions/new">
              <Button icon={<Plus className="w-5 h-5" />}>{t.sessions.newSession}</Button>
            </Link>
          )
        }
      />

      <div className="max-w-4xl">
        {sessions.length === 0 ? (
          <Card className="p-12 text-center">
            <EmptyState
              icon={<Calendar className="w-16 h-16" />}
              title={t.dashboard.noRecentActivity}
              description={user.role === 'parent' ? 'You have no available sessions' : 'Start by scheduling your first session'}
            />
          </Card>
        ) : (
          <div className="space-y-3">
            {sessions.map((session) => (
              <Card key={session.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Link href={`/sessions/${session.id}`} className="block">
                      <p className="font-semibold text-gray-900">
                        {session.patient?.name}
                        {session.isPrivate && <Lock className="w-4 h-4 inline ml-2 text-amber-500" />}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(session.sessionDate).toLocaleDateString('en-US', {
                          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                        })}
                      </p>
                      <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                        {session.location && (
                          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{session.location}</span>
                        )}
                        {session.startTime && session.endTime && (
                          <span>{session.startTime} - {session.endTime}</span>
                        )}
                        {session.isPrivate && <span className="text-amber-600">{t.sessions.private}</span>}
                      </div>
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/sessions/${session.id}`} className="text-sm text-indigo-600 hover:text-indigo-700 px-3 py-1">
                      View
                    </Link>
                    {user.role === 'therapist' && (
                      <button onClick={() => handleDelete(session.id)} className="text-sm text-red-600 hover:text-red-700 px-3 py-1">
                        {t.sessions.delete}
                      </button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
