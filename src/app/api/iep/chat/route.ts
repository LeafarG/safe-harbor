import { NextResponse } from 'next/server';
import { getOllamaConfig, handleError } from '@/lib/api-utils';

function buildChatSystem(iepGoals: string): string {
  return `You are Safe Harbor, an expert AI assistant specialized in special education and Applied Behavior Analysis (ABA).
You are chatting with a therapist, educator, or parent about IEP objectives that you previously generated.

Previously Generated IEP Objectives:
${iepGoals}

Guidelines:
- Answer questions about the objectives clearly and concisely.
- Suggest modifications if asked.
- Explain ABA concepts in accessible language.
- Stay focused on special education, IEPs, and behavioral interventions.
- Respond in English.
- Keep responses under 200 words when possible.`;
}

async function chatWithOllama(system: string, prompt: string): Promise<string> {
  const { url, model } = getOllamaConfig();
  const res = await fetch(`${url}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model,
      system,
      prompt,
      stream: false,
      options: {
        temperature: 0.8,
        num_predict: 1024,
      },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Ollama error ${res.status}: ${text}`);
  }

  const data = await res.json();
  return data.response || '';
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { message, iepGoals, history } = body;

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const system = buildChatSystem(iepGoals || 'No IEP objectives generated yet.');

    // Build prompt from history
    let prompt = '';
    if (history && Array.isArray(history)) {
      for (const msg of history) {
        if (msg.role === 'user') prompt += `User: ${msg.content}\n`;
        else prompt += `Assistant: ${msg.content}\n`;
      }
    }
    prompt += `User: ${message}\nAssistant:`;

    try {
      const response = await chatWithOllama(system, prompt);
      return NextResponse.json({ response, source: 'ollama' });
    } catch {
      const lower = message.toLowerCase();
      let fallback = '';
      if (lower.includes('increase') || lower.includes('change') || lower.includes('modify')) {
        fallback = 'Objectives can be modified. Please specify which objective and what change you would like. In demo mode, I can provide general guidance on adjusting criteria, timelines, or strategies.';
      } else if (lower.includes('export') || lower.includes('download')) {
        fallback = 'Use the "Export" button above the generated objectives to download the document as a PDF.';
      } else if (lower.includes('strategy') || lower.includes('intervention')) {
        fallback = 'Common evidence-based strategies include visual schedules, token economies, discrete trial training (DTT), and natural environment teaching (NET). Which area would you like to explore further?';
      } else {
        fallback = 'I am currently in demo mode because the local Ollama connection is unavailable. The IEP objectives have been generated and you can export them. For more detailed assistance, please ensure Ollama is running with the gemma4:e4b model.';
      }
      return NextResponse.json({ response: fallback, source: 'demo' });
    }
  } catch (error) {
    return handleError(error);
  }
}
