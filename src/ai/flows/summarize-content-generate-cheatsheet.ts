'use server';

/**
 * @fileOverview A flow that summarizes content and generates a cheat sheet.
 *
 * - summarizeContentAndGenerateCheatSheet - A function that handles the summarization and cheat sheet generation process.
 * - SummarizeContentAndGenerateCheatSheetInput - The input type for the summarizeContentAndGenerateCheatSheet function.
 * - SummarizeContentAndGenerateCheatSheetOutput - The return type for the summarizeContentAndGenerateCheatSheet function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContentType = z.enum([
  'math',
  'react',
  'business',
  'medical',
  'law',
  'general',
  'programming',
  'computer science theory',
]);

const SummarizeContentAndGenerateCheatSheetInputSchema = z.object({
  text: z.string().describe('The content to summarize and generate a cheat sheet for.'),
});
export type SummarizeContentAndGenerateCheatSheetInput = z.infer<typeof SummarizeContentAndGenerateCheatSheetInputSchema>;

const SummarizeContentAndGenerateCheatSheetOutputSchema = z.object({
  contentType: ContentType.describe('The detected content type.'),
  cheatSheetHtml: z.string().describe('The generated cheat sheet HTML.'),
});
export type SummarizeContentAndGenerateCheatSheetOutput = z.infer<typeof SummarizeContentAndGenerateCheatSheetOutputSchema>;

const detectContentTypePrompt = ai.definePrompt({
  name: 'detectContentTypePrompt',
  input: {schema: SummarizeContentAndGenerateCheatSheetInputSchema},
  output: {schema: z.object({contentType: ContentType, reason: z.string()})},
  prompt: `Analyze the text and classify which subject it belongs to. Return only JSON:\n{\n "content_type": "...",\n "reason": "..."\n}\n\nText: {{{text}}}`,
});

const generateCheatSheetPrompt = ai.definePrompt({
  name: 'generateCheatSheetPrompt',
  input: {
    schema: z.object({
      text: z.string(),
      contentType: ContentType,
    }),
  },
  output: {schema: z.string()},
  prompt: `You are an AI specialized in creating subject-aware cheat sheets. Your output must be a valid, non-empty HTML string.

Input:
1. Raw text: {{{text}}}
2. Content classification: {{{contentType}}}

Task:
- Auto-apply the correct template
- Extract only the most important concepts
- Keep the cheat sheet very short, visual, and easy to understand
- Use colored sections, boxes, headers
- Highlight formulas, code, definitions separately
- Make everything extremely readable`,
});

export async function summarizeContentAndGenerateCheatSheet(
  input: SummarizeContentAndGenerateCheatSheetInput
): Promise<SummarizeContentAndGenerateCheatSheetOutput> {
  return summarizeContentAndGenerateCheatSheetFlow(input);
}

const summarizeContentAndGenerateCheatSheetFlow = ai.defineFlow(
  {
    name: 'summarizeContentAndGenerateCheatSheetFlow',
    inputSchema: SummarizeContentAndGenerateCheatSheetInputSchema,
    outputSchema: SummarizeContentAndGenerateCheatSheetOutputSchema,
  },
  async input => {
    const contentTypeResult = await detectContentTypePrompt(input);
    if (!contentTypeResult.output) {
      throw new Error('Failed to detect content type.');
    }
    const contentType = contentTypeResult.output.contentType;

    const cheatSheetResult = await generateCheatSheetPrompt({
      text: input.text,
      contentType,
    });
    
    if (!cheatSheetResult.output) {
      throw new Error('Failed to generate cheat sheet.');
    }

    return {
      contentType: contentType,
      cheatSheetHtml: cheatSheetResult.output,
    };
  }
);
