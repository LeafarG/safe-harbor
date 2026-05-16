'use client';

import { useState } from 'react';
import { Brain, Sparkles, Download } from 'lucide-react';
import { generateIepPDF } from '@/lib/pdf';
import { DIMENSIONS } from '@/lib/questionnaire';
import { Evaluation } from './types';

interface AIProgressReportProps {
  patientName: string;
  dateOfBirth: string | null;
  notes: string | null;
  evaluations: Evaluation[];
}

export default function AIProgressReport({
  patientName,
  dateOfBirth,
  notes,
  evaluations,
}: AIProgressReportProps) {
  const [progressReport, setProgressReport] = useState('');
  const [generatingReport, setGeneratingReport] = useState(false);
  const [selectedBaseline, setSelectedBaseline] = useState(0);
  const [selectedCurrent, setSelectedCurrent] = useState(evaluations.length - 1);

  const generateProgressReport = async () => {
    if (evaluations.length < 2) return;
    setGeneratingReport(true);
    const baseline = evaluations[selectedBaseline];
    const current = evaluations[selectedCurrent];

    const baselineDate = new Date(baseline.createdAt).toLocaleDateString('en-US');
    const currentDate = new Date(current.createdAt).toLocaleDateString('en-US');

    let prompt = `Generate a progress report for ${patientName} comparing two developmental assessments.\n\nBASELINE ASSESSMENT (${baselineDate}):\n`;
    DIMENSIONS.forEach((dim) => {
      prompt += `- ${dim.label}: ${baseline.dimensionScores[dim.key]}/100\n`;
    });

    prompt += `\nCURRENT ASSESSMENT (${currentDate}):\n`;
    DIMENSIONS.forEach((dim) => {
      const change = current.dimensionScores[dim.key] - baseline.dimensionScores[dim.key];
      const arrow = change > 0 ? '+' : '';
      prompt += `- ${dim.label}: ${current.dimensionScores[dim.key]}/100 (${arrow}${change})\n`;
    });

    prompt += `\nINSTRUCTION: Write a clinical progress report in English with the following sections:
1. OVERALL PROGRESS SUMMARY (2-3 sentences)
2. AREAS OF SIGNIFICANT IMPROVEMENT (bullet points with specific dimension scores and changes)
3. AREAS REQUIRING CONTINUED FOCUS (bullet points)
4. NEXT STEPS AND RECOMMENDATIONS (specific, actionable goals for the next evaluation period)
5. ESTIMATED TIMELINE TO NEXT MILESTONE`;

    try {
      const res = await fetch('/api/iep/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentData: prompt,
          patientName,
          context: 'Progress report comparing baseline to current assessment',
        }),
      });
      const data = await res.json();
      if (data.goals) setProgressReport(data.goals);
    } catch {
      // silently fail
    }
    setGeneratingReport(false);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-6">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <h2 className="text-lg font-semibold text-indigo-900 flex items-center gap-2">
          <Brain className="w-5 h-5" />
          AI Progress Report
        </h2>
        <div className="flex items-center gap-2 ml-auto">
          <select
            value={selectedBaseline}
            onChange={(e) => setSelectedBaseline(parseInt(e.target.value))}
            className="px-2 py-1 border border-indigo-200 rounded text-sm text-indigo-900 bg-white"
          >
            {evaluations.map((ev, idx) => (
              <option key={ev.id} value={idx}>
                Baseline {idx + 1}
              </option>
            ))}
          </select>
          <span className="text-indigo-400">→</span>
          <select
            value={selectedCurrent}
            onChange={(e) => setSelectedCurrent(parseInt(e.target.value))}
            className="px-2 py-1 border border-indigo-200 rounded text-sm text-indigo-900 bg-white"
          >
            {evaluations.map((ev, idx) => (
              <option key={ev.id} value={idx}>
                Current {idx + 1}
              </option>
            ))}
          </select>
          <button
            onClick={generateProgressReport}
            disabled={generatingReport}
            className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50"
          >
            {generatingReport ? (
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Generate Report
              </>
            )}
          </button>
        </div>
      </div>

      {progressReport ? (
        <>
          <div className="bg-white rounded-lg p-4 text-sm whitespace-pre-wrap font-mono text-slate-800 max-h-96 overflow-y-auto mb-3">
            {progressReport}
          </div>
          <button
            onClick={() => generateIepPDF({ name: patientName, dateOfBirth, notes }, progressReport, [])}
            className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1 font-medium"
          >
            <Download className="w-4 h-4" />
            Export as PDF
          </button>
        </>
      ) : (
        <p className="text-sm text-indigo-700">
          Select a baseline and current evaluation, then click &quot;Generate Report&quot; to create an
          AI-powered progress analysis with next steps and recommendations.
        </p>
      )}
    </div>
  );
}
