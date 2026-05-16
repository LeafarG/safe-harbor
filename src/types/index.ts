export interface User {
  id: string;
  email: string;
  name: string;
  role: 'therapist' | 'educator' | 'parent';
}

export interface QuestionnaireResponse {
  id: string;
  questionnaireId: string;
  dimension: string;
  questionIndex: number;
  ageTier: string;
  score: number;
  notes: string | null;
}

export interface Questionnaire {
  id: string;
  patientId: string;
  createdBy: string;
  createdAt: string;
  updatedAt?: string;
  responses: QuestionnaireResponse[];
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt?: string;
  sessions?: Session[];
  questionnaire?: Questionnaire | null;
  allQuestionnaires?: Questionnaire[];
}

export interface Session {
  id: string;
  patientId: string;
  patient?: { id: string; name: string };
  therapistId?: string;
  sessionDate: string;
  startTime: string | null;
  endTime: string | null;
  location: string | null;
  participants: string | null;
  materials: string | null;
  notes: string | null;
  isPrivate: boolean;
  createdAt?: string;
}

export interface PatientAccess {
  id: string;
  userId: string;
  patientId: string;
  accessLevel: 'full' | 'partial' | 'limited';
}

export interface IepGeneration {
  id: string;
  patientId: string;
  inputData: string;
  generatedGoals: string;
  createdAt: string;
}

export type UserRole = 'therapist' | 'educator' | 'parent';

export const ROLE_HIERARCHY: Record<UserRole, number> = {
  therapist: 3,
  educator: 2,
  parent: 1,
};
