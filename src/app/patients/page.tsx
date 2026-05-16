'use client';

import Link from 'next/link';
import { t } from '@/lib/i18n';
import { useAuth } from '@/hooks/useAuth';
import { usePatients } from '@/hooks/usePatients';
import { Card, EmptyState, LoadingSpinner, PageHeader, Button } from '@/components/ui';
import { Users, Calendar, Plus } from 'lucide-react';

export default function PatientsPage() {
  const { user } = useAuth('/');
  const { patients, loading, remove } = usePatients(user);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this patient?')) return;
    await remove(id);
  };

  if (!user || loading) return <LoadingSpinner className="h-96" />;

  return (
    <div className="space-y-6">
      <PageHeader
        title={t.patients.title}
        subtitle={`${patients.length} ${t.patients.accessible}`}
        action={
          user.role !== 'parent' && (
            <Link href="/patients/new">
              <Button icon={<Plus className="w-5 h-5" />}>{t.patients.newPatient}</Button>
            </Link>
          )
        }
      />

      <div className="max-w-4xl">
        {patients.length === 0 ? (
          <Card className="p-12 text-center">
            <EmptyState
              icon={<Users className="w-16 h-16" />}
              title={t.dashboard.noPatients}
              description={user.role === 'parent' ? 'You have no associated patients' : 'Start by adding your first patient'}
            />
          </Card>
        ) : (
          <div className="space-y-3">
            {patients.map((patient) => (
              <Card key={patient.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Link href={`/patients/${patient.id}`} className="block">
                      <h3 className="font-semibold text-gray-900 hover:text-indigo-600">{patient.name}</h3>
                      {patient.dateOfBirth && (
                        <p className="text-sm text-gray-500">
                          {t.patients.dob}: {new Date(patient.dateOfBirth).toLocaleDateString('en-US')}
                        </p>
                      )}
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {patient.sessions?.length || 0} {t.patients.sessions}
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/patients/${patient.id}`} className="text-sm text-indigo-600 hover:text-indigo-700 px-3 py-1">
                      View
                    </Link>
                    {user.role === 'therapist' && (
                      <button onClick={() => handleDelete(patient.id)} className="text-sm text-red-600 hover:text-red-700 px-3 py-1">
                        {t.patients.delete}
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
