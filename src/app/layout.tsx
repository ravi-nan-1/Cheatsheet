import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'AI Cheat Sheet Generator | Free PDF, URL & Text Summarizer | Summary Maker',
  description: 'Create cheat sheets instantly with our AI Cheat Sheet Generator. Summarize PDFs, web URLs, books, and long text into simple, colorful, easy-to-read study notes. 100% free tool for students, developers, and researchers.',
  keywords: "cheat sheet generator, pdf summarizer, ai summary tool, text summarizer, url summarizer, book summary maker, free ai notes, study notes generator, code cheat sheet, math cheat sheet generator"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AI Cheat Sheet Generator",
              "url": "https://summary.all2ools.com",
              "description": "Free AI tool to convert PDFs, web URLs, and text into simplified, colorful cheat sheets.",
              "applicationCategory": "EducationalApplication",
              "operatingSystem": "Windows, macOS, Linux, Android, iOS",
              "offers": {
                "@type": "Offer",
                "price": "0"
              }
            }
          `}
        </script>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
