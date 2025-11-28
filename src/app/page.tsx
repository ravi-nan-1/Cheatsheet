'use client';

import { useState, useRef } from 'react';
import { summarizeContentAndGenerateCheatSheet, type SummarizeContentAndGenerateCheatSheetOutput } from '@/ai/flows/summarize-content-generate-cheatsheet';
import { extractTextFromUrl } from '@/ai/flows/extract-text-from-url';
import { extractTextFromPdf } from '@/ai/flows/extract-text-from-pdf';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Loader2, Sparkles, AlertCircle, Download, Share2, FileText, Link, Upload, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Logo } from '@/components/icons';
import { CheatSheetSkeleton } from '@/components/cheat-sheet-skeleton';

type CheatSheetResult = SummarizeContentAndGenerateCheatSheetOutput | null;

export default function Home() {
  const [activeTab, setActiveTab] = useState('text');
  const [inputText, setInputText] = useState('');
  const [url, setUrl] = useState('');
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cheatSheet, setCheatSheet] = useState<CheatSheetResult>(null);
  const { toast } = useToast();
  const cheatSheetRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleGenerate = async () => {
    let contentToProcess = '';
    setError(null);
    setCheatSheet(null);
    setIsLoading(true);

    try {
      if (activeTab === 'text') {
        if (!inputText) {
          toast({ variant: 'destructive', title: 'Input is empty', description: 'Please paste some text to generate a cheat sheet.' });
          setIsLoading(false);
          return;
        }
        contentToProcess = inputText;
      } else if (activeTab === 'url') {
        if (!url) {
          toast({ variant: 'destructive', title: 'URL is empty', description: 'Please enter a URL to generate a cheat sheet.' });
          setIsLoading(false);
          return;
        }
        const urlResult = await extractTextFromUrl({ url });
        if (!urlResult.text) {
          throw new Error("Could not extract text from the URL. The page might be empty or protected.");
        }
        contentToProcess = urlResult.text;
      } else if (activeTab === 'pdf') {
        if (!pdfFile) {
          toast({ variant: 'destructive', title: 'No PDF file selected', description: 'Please select a PDF file to generate a cheat sheet.' });
          setIsLoading(false);
          return;
        }
        const fileBuffer = await pdfFile.arrayBuffer();
        const base64Pdf = Buffer.from(fileBuffer).toString('base64');
        const pdfDataUri = `data:application/pdf;base64,${base64Pdf}`;
        const pdfResult = await extractTextFromPdf({ pdf: pdfDataUri });
        contentToProcess = pdfResult.text;
      }

      if (!contentToProcess.trim()) {
        throw new Error("No meaningful content found to generate a cheat sheet. Please provide relevant text.");
      }

      const result = await summarizeContentAndGenerateCheatSheet({ text: contentToProcess });
       if (!result || !result.cheatSheetHtml) {
        throw new Error('Unable to generate a meaningful cheat sheet. The provided text does not contain sufficient or relevant information.');
      }
      setCheatSheet(result);
      toast({
        title: "Success!",
        description: `Generated a cheat sheet for "${result.contentType}" content.`,
      });
    } catch (e: any) {
      const errorMessage = e.message || "An unexpected error occurred.";
      setError(errorMessage);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!cheatSheetRef.current) return;

    const cheatSheetHtml = cheatSheetRef.current.innerHTML;
    const pageStyles = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>CheatSheetAI - Download</title>
          <script src="https://cdn.tailwindcss.com"><\/script>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&display=swap');
            body { font-family: 'Inter', sans-serif; }
            .font-headline { font-family: 'Space Grotesk', sans-serif; }
            .font-code { font-family: 'Source Code Pro', monospace; }
          </style>
        </head>
        <body class="bg-white">
          <div class="p-4 sm:p-6 md:p-8">${cheatSheetHtml}</div>
        </body>
      </html>`;
    
    const blob = new Blob([pageStyles], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cheatsheet.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Download Started",
      description: "Your cheat sheet is being downloaded.",
    });
  };
  
  const handleShare = () => {
    if (!cheatSheetRef.current?.innerText) return;
    navigator.clipboard.writeText(cheatSheetRef.current.innerText).then(() => {
      toast({
        title: "Copied to clipboard!",
        description: "You can now share the cheat sheet text.",
      });
    }, () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed to copy cheat sheet to clipboard.",
      });
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        toast({ variant: 'destructive', title: 'Invalid File Type', description: 'Please upload a PDF file.' });
        return;
      }
      setPdfFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-background font-body flex flex-col">
      <header className="flex items-center gap-3 px-4 sm:px-6 py-4 border-b bg-card">
        <Logo className="h-8 w-8 text-primary" />
        <h1 className="text-xl font-bold font-headline text-foreground tracking-tighter">
          CheatSheetAI
        </h1>
      </header>
      
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter">AI Cheat Sheet Generator – Free PDF, URL & Text Summarizer</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Turn any long content into a clean, colorful cheat sheet in seconds. Supports PDF, web URL, text, books, class notes, and coding docs.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card className="lg:sticky lg:top-8 h-fit">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Create Your Cheat Sheet</CardTitle>
              <CardDescription>Enter content from text, a website, or a PDF to get started.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="text"><FileText className="mr-2"/>Summarize Long Text in One Click</TabsTrigger>
                  <TabsTrigger value="url"><Link className="mr-2"/>Summarize Web URL into Notes</TabsTrigger>
                  <TabsTrigger value="pdf"><Upload className="mr-2"/>Convert PDF to Cheat Sheet Instantly</TabsTrigger>
                </TabsList>
                <TabsContent value="text" className="mt-4">
                  <Textarea
                    placeholder="Paste your long content here..."
                    className="min-h-[250px] text-base resize-y"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                </TabsContent>
                <TabsContent value="url" className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input type="url" placeholder="https://example.com" value={url} onChange={e => setUrl(e.target.value)} />
                  </div>
                </TabsContent>
                <TabsContent value="pdf" className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input type="file" accept=".pdf" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                    <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
                      <Upload className="mr-2" />
                      {pdfFile ? 'Change PDF' : 'Upload PDF'}
                    </Button>
                    {pdfFile && <span className="text-sm text-muted-foreground truncate">{pdfFile.name}</span>}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <Button onClick={handleGenerate} disabled={isLoading} className="w-full" size="lg">
                {isLoading ? <Loader2 className="animate-spin" /> : <Sparkles className="mr-2" />}
                Generate Cheat Sheet
              </Button>
            </CardFooter>
          </Card>

          <Card className="min-h-[500px] flex flex-col">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle className="font-headline text-2xl">Generated Cheat Sheet</CardTitle>
              {cheatSheet && (
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={handleShare}><Share2 className="mr-2"/>Share</Button>
                  <Button variant="outline" size="sm" onClick={handleDownload}><Download className="mr-2"/>Download</Button>
                </div>
              )}
            </CardHeader>
            <CardContent className="flex-1">
              {isLoading && <CheatSheetSkeleton />}
              {error && (
                <Alert variant="destructive" className="h-full flex flex-col justify-center items-center text-center">
                  <AlertCircle className="h-8 w-8" />
                  <AlertTitle className="mt-4 text-lg font-bold">Generation Failed</AlertTitle>
                  <AlertDescription className="mt-2">{error}</AlertDescription>
                </Alert>
              )}
              {!isLoading && !error && cheatSheet && (
                <div id="cheatsheet-content" ref={cheatSheetRef} dangerouslySetInnerHTML={{ __html: cheatSheet.cheatSheetHtml }} />
              )}
              {!isLoading && !error && !cheatSheet && (
                <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8 rounded-lg border-2 border-dashed">
                  <Sparkles className="h-16 w-16 mb-4 text-primary/50" />
                  <h3 className="text-xl font-semibold font-headline">Your cheat sheet will appear here</h3>
                  <p className="mt-2 max-w-sm">Just paste your content, click generate, and let our AI work its magic!</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <section className="max-w-7xl mx-auto mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-headline tracking-tighter">AI-Powered Cheat Sheet Templates for Every Subject</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-headline">Create Developer & Coding Cheat Sheets Automatically</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">From React to Python, our AI extracts code snippets, functions, and key concepts to create the perfect developer quick reference.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-headline">Why Students Love Summary.all2ools.com</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Turn long textbooks and lecture notes into easy-to-digest summaries. Perfect for exam prep and quick revision.</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-headline">What This Tool Can Do</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-left text-muted-foreground">
                        <li className="flex items-start"><CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" /> Convert PDF → Cheat Sheet</li>
                        <li className="flex items-start"><CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" /> Summarize any Web URL</li>
                        <li className="flex items-start"><CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" /> Auto-detect subject type (Math, Coding, Medical, Business, Law)</li>
                        <li className="flex items-start"><CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" /> Apply colorful templates</li>
                        <li className="flex items-start"><CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" /> Extract formulas, key points, examples</li>
                        <li className="flex items-start"><CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" /> Developer mode for React & code notes</li>
                        <li className="flex items-start"><CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" /> Export to PDF</li>
                        <li className="flex items-start"><CheckCircle className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-green-500" /> 100% free</li>
                      </ul>
                    </CardContent>
                </Card>
            </div>
        </section>

      </main>
    </div>
  );
}
