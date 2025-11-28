import { blogPosts } from '@/lib/blog-posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | CheatSheetAI Blog`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background font-body flex flex-col">
       <header className="flex items-center gap-3 px-4 sm:px-6 py-4 border-b">
        <Link href="/" className="text-xl font-bold font-headline text-foreground tracking-tighter">
          CheatSheetAI
        </Link>
        <span className="text-muted-foreground">/</span>
        <Link href="/blog" className="text-lg font-semibold font-headline text-muted-foreground hover:text-foreground transition-colors">
          Blog
        </Link>
      </header>
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">{post.title}</h1>
          <p className="text-muted-foreground text-xl mt-0 mb-8">{post.description}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
