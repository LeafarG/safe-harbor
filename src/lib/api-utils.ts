import { NextResponse } from 'next/server';

export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export function handleError(error: unknown): NextResponse {
  if (error instanceof ApiError) {
    return NextResponse.json({ error: error.message }, { status: error.statusCode });
  }
  const message = error instanceof Error ? error.message : 'An unexpected error occurred';
  return NextResponse.json({ error: message }, { status: 500 });
}

export function getOllamaConfig() {
  return {
    url: process.env.OLLAMA_URL || 'http://localhost:11434',
    model: process.env.OLLAMA_MODEL || 'gemma4:e4b',
  };
}
