import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { blogPosts } from '@/lib/blog-posts';

export const metadata = {
  title: 'Blog | CheatSheetAI',
  description: 'Articles and tips on how to use AI for studying, coding, and research. Learn how to create the best cheat sheets.',
};

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-background font-body flex flex-col">
      <header className="flex items-center gap-3 px-4 sm:px-6 py-4 border-b">
        <Link href="/" className="text-xl font-bold font-headline text-foreground tracking-tighter">
          CheatSheetAI
        </Link>
      </header>
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter">Our Blog</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Tips, tricks, and insights on AI-powered learning and productivity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} legacyBehavior>
                <a className="block">
                <Card className="h-full hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl">{post.title}</CardTitle>
                    <CardDescription className="pt-2">{post.description}</CardDescription>
                  </CardHeader>
                </Card>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
