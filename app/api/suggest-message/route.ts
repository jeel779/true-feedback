import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

export const runtime = 'edge';

export async function POST() {
  const prompt =
    "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'...";

  const result = await streamText({
    model: openai('gpt-4o-mini'),
    prompt,
  });

  return result.toTextStreamResponse();
}
