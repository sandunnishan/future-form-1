// app/articles/[id]/page.tsx
import ArticleContent from '@/components/articles/ArticleContent';
import { articles } from '@/lib/data';

// ✅ Must be a server component (no 'use client')

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id.toString(),
  }));
}

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  return <ArticleContent articleId={params.id} />;
}
