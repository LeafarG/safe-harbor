import { NextResponse } from 'next/server';
import { getOllamaConfig } from '@/lib/api-utils';

interface OllamaModelTag {
  name: string;
}

export async function GET(): Promise<NextResponse> {
  try {
    const { url, model } = getOllamaConfig();
    const res = await fetch(`${url}/api/tags`, { method: 'GET', cache: 'no-store' });
    if (!res.ok) throw new Error('Ollama not responding');
    const data = (await res.json()) as { models?: OllamaModelTag[] };
    const models = data.models || [];
    const hasModel = models.some(
      (m) => m.name === model || m.name.startsWith(model.split(':')[0])
    );
    return NextResponse.json({ connected: true, model, available: hasModel });
  } catch {
    const { model } = getOllamaConfig();
    return NextResponse.json({ connected: false, model, available: false });
  }
}
