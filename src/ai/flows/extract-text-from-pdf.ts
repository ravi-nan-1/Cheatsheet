'use server';
/**
 * @fileOverview A flow to extract text from a PDF file.
 *
 * - extractTextFromPdf - A function that parses a PDF and returns the text.
 * - ExtractTextFromPdfInput - The input type for the extractTextFromPdf function.
 * - ExtractTextFromPdfOutput - The return type for the extractTextFromPdf function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import pdf from 'pdf-parse';

const ExtractTextFromPdfInputSchema = z.object({
  pdf: z.string().describe('The Base64 encoded PDF file.'),
});
export type ExtractTextFromPdfInput = z.infer<typeof ExtractTextFromPdfInputSchema>;

const ExtractTextFromPdfOutputSchema = z.object({
  text: z.string().describe('The extracted text from the PDF.'),
});
export type ExtractTextFromPdfOutput = z.infer<typeof ExtractTextFromPdfOutputSchema>;

export async function extractTextFromPdf(input: ExtractTextFromPdfInput): Promise<ExtractTextFromPdfOutput> {
  return extractTextFromPdfFlow(input);
}

const extractTextFromPdfFlow = ai.defineFlow(
  {
    name: 'extractTextFromPdfFlow',
    inputSchema: ExtractTextFromPdfInputSchema,
    outputSchema: ExtractTextFromPdfOutputSchema,
  },
  async ({ pdf: base64Pdf }) => {
    try {
      const pdfBuffer = Buffer.from(base64Pdf, 'base64');
      const data = await pdf(pdfBuffer);
      return { text: data.text };
    } catch (error: any) {
      console.error('Error parsing PDF:', error);
      throw new Error('Failed to parse the PDF file.');
    }
  }
);
