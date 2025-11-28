'use client';

import { useState, useRef } from 'react';
import { summarizeContentAndGenerateCheatSheet, type SummarizeContentAndGenerateCheatSheetOutput } from '@/ai/flows/summarize-content-generate-cheatsheet';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Loader2, Sparkles, AlertCircle, Download, Share2, FileText, Link, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Logo } from '@/components/icons';
import { CheatSheetSkeleton } from '@/components/cheat-sheet-skeleton';

type CheatSheetResult = SummarizeContentAndGenerateCheatSheetOutput | null;

export default function Home() {
  const [activeTab, setActiveTab] = useState('text');
  const [inputText, setInputText] = useState('');
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cheatSheet, setCheatSheet] = useState<CheatSheetResult>(null);
  const { toast } = useToast();
  const cheatSheetRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (activeTab === 'text' && !inputText) {
      toast({ variant: 'destructive', title: 'Input is empty', description: 'Please paste some text to generate a cheat sheet.' });
      return;
    }
    // Note: URL and PDF are not implemented as per plan
    if (activeTab !== 'text') {
       toast({ variant: 'default', title: 'Feature coming soon!', description: 'URL and PDF inputs are not yet available.' });
       return;
    }

    setIsLoading(true);
    setError(null);
    setCheatSheet(null);

    try {
      const result = await summarizeContentAndGenerateCheatSheet({ text: inputText });
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

  const handlePrint = () => {
    if (!cheatSheetRef.current) return;

    const printWindow = window.open('', '', 'height=800,width=800');
    if (printWindow) {
      const printContent = cheatSheetRef.current.innerHTML;
      const pageStyles = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <title>CheatSheetAI - Print</title>
            <script src="https://cdn.tailwindcss.com"></script>
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
            <div class="p-4 sm:p-6 md:p-8">${printContent}</div>
            <script>
              setTimeout(() => {
                window.print();
                window.close();
              }, 500);
            </script>
          </body>
        </html>`;
      printWindow.document.write(pageStyles);
      printWindow.document.close();
    }
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

  return (
    <div className="min-h-screen bg-background font-body flex flex-col">
      <header className="flex items-center gap-3 px-4 sm:px-6 py-4 border-b bg-card">
        <Logo className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold font-headline text-foreground tracking-tighter">
          CheatSheetAI
        </h1>
      </header>
      
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Card className="lg:sticky lg:top-8 h-fit">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Create Your Cheat Sheet</CardTitle>
              <CardDescription>Enter content from text, a website, or a PDF to get started.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="text"><FileText className="mr-2"/>Text</TabsTrigger>
                  <TabsTrigger value="url"><Link className="mr-2"/>URL</TabsTrigger>
                  <TabsTrigger value="pdf"><Upload className="mr-2"/>PDF</TabsTrigger>
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
                    <Badge variant="outline">Coming Soon</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">URL processing is under development.</p>
                </TabsContent>
                <TabsContent value="pdf" className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <Input type="file" accept=".pdf" disabled />
                    <Badge variant="outline">Coming Soon</Badge>
                  </div>
                   <p className="text-xs text-muted-foreground">PDF uploads are under development.</p>
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
                  <Button variant="outline" size="sm" onClick={handlePrint}><Download className="mr-2"/>Download</Button>
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
      </main>
    </div>
  );
}
