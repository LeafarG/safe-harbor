import { prisma } from './prisma.js';

async function main() {
  console.log('Seeding clean demo data...');

  // Users
  const therapist = await prisma.user.upsert({
    where: { email: 'therapist@demo.com' },
    update: {},
    create: { email: 'therapist@demo.com', name: 'Dr. Smith (BCBA)', role: 'therapist' },
  });

  const educator = await prisma.user.upsert({
    where: { email: 'educator@demo.com' },
    update: {},
    create: { email: 'educator@demo.com', name: 'Ms. Johnson', role: 'educator' },
  });

  const parentEmma = await prisma.user.upsert({
    where: { email: 'parent.emma@demo.com' },
    update: {},
    create: { email: 'parent.emma@demo.com', name: 'Sarah Thompson (Mother)', role: 'parent' },
  });

  const parentLucas = await prisma.user.upsert({
    where: { email: 'parent.lucas@demo.com' },
    update: {},
    create: { email: 'parent.lucas@demo.com', name: 'Maria Rivera (Mother)', role: 'parent' },
  });

  const parentCarlos = await prisma.user.upsert({
    where: { email: 'parent.carlos@demo.com' },
    update: {},
    create: { email: 'parent.carlos@demo.com', name: 'Elena Mendez (Mother)', role: 'parent' },
  });

  console.log('Users created');

  // Patients
  const patients = [
    {
      id: 'patient-emma-1',
      name: 'Emma Thompson',
      dob: '2021-03-15',
      notes: 'ASD Level 2. Non-verbal, uses PECS and some gestural communication. Significant sensory sensitivities to sound and texture. Responds well to deep pressure and visual schedules. Parent reports sleep difficulties.',
    },
    {
      id: 'patient-lucas-1',
      name: 'Lucas Rivera',
      dob: '2018-06-10',
      notes: 'ASD Level 1. Verbal with pragmatic language delays. Strong special interests in dinosaurs and trains. Attends general education classroom with pull-out speech therapy. Sensory seeking behaviors noted.',
    },
    {
      id: 'patient-carlos-1',
      name: 'Carlos Mendez',
      dob: '2014-01-22',
      notes: 'ADHD combined presentation, generalized anxiety. Very bright, reads 2+ grade levels above. Struggles with executive function, emotional regulation under stress, and social nuance. Medication: methylphenidate 10mg AM.',
    },
  ];

  for (const p of patients) {
    await prisma.patient.upsert({
      where: { id: p.id },
      update: {},
      create: {
        id: p.id,
        name: p.name,
        dateOfBirth: new Date(p.dob),
        notes: p.notes,
      },
    });
  }

  console.log('Patients created:', patients.length);

  // Access levels
  const accessData = [
    { userId: therapist.id, patientId: 'patient-emma-1', accessLevel: 'full' },
    { userId: therapist.id, patientId: 'patient-lucas-1', accessLevel: 'full' },
    { userId: therapist.id, patientId: 'patient-carlos-1', accessLevel: 'full' },
    { userId: educator.id, patientId: 'patient-emma-1', accessLevel: 'partial' },
    { userId: educator.id, patientId: 'patient-lucas-1', accessLevel: 'partial' },
    { userId: educator.id, patientId: 'patient-carlos-1', accessLevel: 'partial' },
    { userId: parentEmma.id, patientId: 'patient-emma-1', accessLevel: 'limited' },
    { userId: parentLucas.id, patientId: 'patient-lucas-1', accessLevel: 'limited' },
    { userId: parentCarlos.id, patientId: 'patient-carlos-1', accessLevel: 'limited' },
  ];

  for (const access of accessData) {
    try {
      await prisma.patientAccess.create({ data: access });
    } catch {}
  }

  console.log('Access levels created');

  // Sessions
  const sessionsData = [
    // Emma Thompson (ASD Level 2, age 5)
    { patientId: 'patient-emma-1', date: '2026-05-01', start: '09:00', end: '10:00', location: 'Clinic', private: false, notes: 'Used PECS to request "more" and "help" during play. Identified blue blocks consistently. Transition from sensory bin to table activity required visual timer and physical prompt.' },
    { patientId: 'patient-emma-1', date: '2026-05-03', start: '09:00', end: '10:00', location: 'Clinic', private: false, notes: 'Completed 3-piece inset puzzle with gestural prompt. Became frustrated when 4-piece puzzle was introduced. Deep pressure hug helped regulate after 8 minutes.' },
    { patientId: 'patient-emma-1', date: '2026-05-05', start: '09:00', end: '10:00', location: 'Clinic', private: true, notes: 'Parent reports sleep routine still takes 45+ minutes. Emma wakes 2-3 times nightly. Recommended weighted blanket trial. Hand-flapping increased during exciting bubble play.' },
    { patientId: 'patient-emma-1', date: '2026-05-07', start: '09:00', end: '10:00', location: 'Home', private: false, notes: 'Home visit. Emma navigates stairs confidently with rail but hesitant on playground ladder. Sensory seeking with water play lasted 12 minutes. Avoided finger paint.' },
    { patientId: 'patient-emma-1', date: '2026-05-08', start: '09:00', end: '10:00', location: 'Clinic', private: false, notes: 'Joint attention exercise: brought bubbles to therapist and made brief eye contact. Major milestone! Does not generalize to peers yet. PECS use consistent for wants.' },

    // Lucas Rivera (ASD Level 1, age 7)
    { patientId: 'patient-lucas-1', date: '2026-05-01', start: '14:00', end: '15:00', location: 'School', private: false, notes: 'Classroom observation. Lucas initiated conversation about dinosaurs with 1 peer. Eye contact prompted. Answered "Why do you like T-Rex?" with "Because he is big and eats meat." Pragmatic language improving.' },
    { patientId: 'patient-lucas-1', date: '2026-05-02', start: '10:00', end: '11:00', location: 'Clinic', private: false, notes: 'Completed 25-piece train puzzle in 8 minutes. Used picture-matching strategy. Worked on WH-questions: "Where does the train go?" Lucas answered accurately but struggled with "Why?" questions.' },
    { patientId: 'patient-lucas-1', date: '2026-05-04', start: '10:00', end: '11:00', location: 'Clinic', private: false, notes: 'Social skills group with 2 peers. Lucas dominated dinosaur discussion for 12 minutes before adult redirect. Shared train toy when prompted. Turn-taking improved with visual timer.' },
    { patientId: 'patient-lucas-1', date: '2026-05-06', start: '10:00', end: '11:00', location: 'Clinic', private: true, notes: 'Parent meeting. Teacher reports Lucas reads at grade level but rushes through math worksheets, making careless errors. Recommended movement breaks every 10 minutes during seatwork.' },
    { patientId: 'patient-lucas-1', date: '2026-05-08', start: '10:00', end: '11:00', location: 'Clinic', private: false, notes: 'Hand-flapping observed during excitement about new train set. Brief episodes, not disruptive. Self-regulation strategies: used quiet corner independently after becoming overwhelmed by group noise.' },

    // Carlos Mendez (ADHD + anxiety, age 12)
    { patientId: 'patient-carlos-1', date: '2026-05-01', start: '15:00', end: '16:00', location: 'School', private: false, notes: 'Academic coaching session. Carlos completed essay with strong thesis and evidence. Conclusion was weak. Self-esteem high when praised for thesis. Off-task 4 times during 45-minute session.' },
    { patientId: 'patient-carlos-1', date: '2026-05-03', start: '15:00', end: '16:00', location: 'School', private: false, notes: 'Social skills check-in. Carlos reported conflict with friend over basketball teams. Resolved verbally after 10 minutes. Used "I feel frustrated when..." language. Great progress in emotional regulation.' },
    { patientId: 'patient-carlos-1', date: '2026-05-05', start: '15:00', end: '16:00', location: 'Clinic', private: false, notes: 'Executive function coaching. Planner review: wrote major assignments but forgot 3 daily homework tasks. Introduced color-coded checklist. Carlos engaged well with Minecraft-themed reward system.' },
    { patientId: 'patient-carlos-1', date: '2026-05-06', start: '15:00', end: '16:00', location: 'Clinic', private: true, notes: 'Parent reports medication wearing off by 2 PM. Afternoon homework completion dropped significantly. Recommended conversation with pediatrician about extended-release formulation or afternoon dose.' },
    { patientId: 'patient-carlos-1', date: '2026-05-08', start: '15:00', end: '16:00', location: 'Clinic', private: false, notes: 'Anxiety management: used breathing app and journaling before mock presentation. Spoke quickly but maintained eye contact 70% of the time. Self-monitored and self-corrected posture twice.' },
  ];

  for (let i = 0; i < sessionsData.length; i++) {
    const s = sessionsData[i];
    await prisma.session.upsert({
      where: { id: `session-demo-${i + 1}` },
      update: {},
      create: {
        id: `session-demo-${i + 1}`,
        patientId: s.patientId,
        therapistId: therapist.id,
        sessionDate: new Date(s.date),
        startTime: s.start,
        endTime: s.end,
        location: s.location,
        participants: JSON.stringify(['Therapist', 'Patient']),
        notes: s.notes,
        isPrivate: s.private,
      },
    });
  }

  console.log('Sessions created:', sessionsData.length);

  // Questionnaires (longitudinal assessments)
  const DIMENSION_KEYS = ['Communication', 'Social', 'Cognitive', 'Motor', 'Autonomy', 'Behavior'] as const;

  type EvalSet = Record<string, number[]>;

  const patientEvaluations: Record<string, { date: string; ageTier: string; scores: EvalSet }[]> = {
    'patient-emma-1': [
      {
        date: '2026-04-01',
        ageTier: '5-6',
        scores: {
          Communication: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
          Social: [1, 2, 2, 2, 2, 2, 1, 1, 1, 1],
          Cognitive: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
          Motor: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
          Autonomy: [1, 1, 2, 2, 2, 2, 2, 2, 2, 2],
          Behavior: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        },
      },
      {
        date: '2026-04-15',
        ageTier: '5-6',
        scores: {
          Communication: [3, 3, 3, 3, 3, 3, 3, 3, 2, 3],
          Social: [2, 3, 3, 3, 3, 3, 2, 2, 2, 2],
          Cognitive: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          Motor: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          Autonomy: [3, 3, 3, 2, 3, 3, 3, 3, 3, 3],
          Behavior: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        },
      },
      {
        date: '2026-05-01',
        ageTier: '5-6',
        scores: {
          Communication: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          Social: [2, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          Cognitive: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          Motor: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          Autonomy: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
          Behavior: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        },
      },
    ],
    'patient-lucas-1': [
      {
        date: '2026-04-01',
        ageTier: '7-8',
        scores: {
          Communication: [3, 3, 3, 3, 4, 4, 3, 3, 3, 4],
          Social: [2, 3, 3, 3, 3, 3, 2, 2, 2, 3],
          Cognitive: [4, 4, 4, 3, 4, 4, 3, 4, 4, 4],
          Motor: [4, 3, 4, 3, 4, 3, 4, 3, 3, 4],
          Autonomy: [3, 3, 4, 4, 3, 3, 3, 3, 3, 3],
          Behavior: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        },
      },
      {
        date: '2026-04-15',
        ageTier: '7-8',
        scores: {
          Communication: [4, 4, 3, 3, 4, 4, 3, 4, 4, 4],
          Social: [3, 3, 3, 3, 3, 4, 3, 3, 3, 4],
          Cognitive: [4, 4, 4, 3, 4, 4, 3, 4, 4, 4],
          Motor: [4, 3, 4, 3, 4, 3, 4, 3, 3, 4],
          Autonomy: [4, 3, 4, 4, 3, 3, 4, 4, 3, 3],
          Behavior: [4, 3, 4, 3, 4, 3, 4, 4, 3, 3],
        },
      },
      {
        date: '2026-05-01',
        ageTier: '7-8',
        scores: {
          Communication: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          Social: [3, 3, 3, 3, 3, 4, 3, 3, 3, 4],
          Cognitive: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          Motor: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          Autonomy: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          Behavior: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        },
      },
    ],
    'patient-carlos-1': [
      {
        date: '2026-04-01',
        ageTier: '11-12+',
        scores: {
          Communication: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          Social: [4, 4, 3, 4, 4, 4, 4, 4, 4, 4],
          Cognitive: [4, 4, 4, 4, 4, 4, 3, 4, 4, 4],
          Motor: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          Autonomy: [4, 4, 4, 4, 4, 3, 4, 4, 4, 3],
          Behavior: [4, 4, 4, 3, 4, 4, 4, 4, 4, 4],
        },
      },
      {
        date: '2026-04-15',
        ageTier: '11-12+',
        scores: {
          Communication: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          Social: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          Cognitive: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          Motor: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          Autonomy: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
          Behavior: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
        },
      },
      {
        date: '2026-05-01',
        ageTier: '11-12+',
        scores: {
          Communication: [5, 5, 4, 4, 5, 5, 4, 5, 5, 5],
          Social: [4, 4, 4, 4, 5, 5, 5, 5, 5, 5],
          Cognitive: [5, 5, 5, 4, 5, 5, 5, 5, 5, 5],
          Motor: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
          Autonomy: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
          Behavior: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
        },
      },
    ],
  };

  function generateObservation(score: number, dim: string, idx: number): string {
    const observations: Record<number, string> = {
      1: 'Requires significant adult support and prompting. Minimal independent demonstration observed.',
      2: 'Emerging skill with moderate support. Inconsistent across settings and contexts.',
      3: 'Sometimes demonstrates skill with light support. Showing gradual progress.',
      4: 'Often demonstrates skill independently with minimal prompting needed.',
      5: 'Consistently demonstrates skill independently. Generalizes across contexts.',
    };
    return `Q${idx + 1} (${dim}): ${observations[score] || observations[3]}`;
  }

  let questionnaireCount = 0;
  for (const [patientId, evals] of Object.entries(patientEvaluations)) {
    for (let e = 0; e < evals.length; e++) {
      const evalData = evals[e];
      const questionnaire = await prisma.questionnaire.create({
        data: {
          patientId,
          createdBy: therapist.id,
          createdAt: new Date(evalData.date),
        },
      });

      const responseData = [];
      for (const dim of DIMENSION_KEYS) {
        const scores = evalData.scores[dim] || Array(10).fill(3);
        for (let i = 0; i < 10; i++) {
          responseData.push({
            questionnaireId: questionnaire.id,
            dimension: dim,
            questionIndex: i,
            ageTier: evalData.ageTier,
            score: scores[i] ?? 3,
            notes: generateObservation(scores[i] ?? 3, dim, i),
          });
        }
      }

      await prisma.questionnaireResponse.createMany({ data: responseData });
      questionnaireCount++;
    }
  }

  console.log('Questionnaires created:', questionnaireCount);
  console.log('Clean demo seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
