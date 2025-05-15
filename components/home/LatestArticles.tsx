'use client';

import React from 'react';
import { useAppSelector } from '@/lib/hooks';
import { Article } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link href={`/articles/${article.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-none bg-white dark:bg-gray-800 group">
        <CardContent className="p-0">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img 
              src={article.image} 
              alt={article.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <Badge className="bg-white/90 hover:bg-white text-primary border-none">
                {article.topics[0]}
              </Badge>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center text-sm text-muted-foreground mb-3">
              <span>{format(new Date(article.date), 'MMM dd, yyyy')}</span>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime} min read
              </span>
            </div>
            <h3 className="article-title mb-3 line-clamp-2">
              {article.title}
            </h3>
            <p className="article-excerpt line-clamp-2">
              {article.excerpt}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const LatestArticles = () => {
  const { articles, loading } = useAppSelector(state => state.articles);
  const latestArticles = articles.filter(article => !article.isFeatured).slice(0, 6);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h2 className="section-title text-center">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-gray-100 animate-pulse h-[400px] rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="section-title mb-3">Latest Articles</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Discover the most recent academic publications and research papers across various disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/articles" 
            className="inline-flex items-center justify-center h-12 px-8 py-2 bg-primary text-white rounded-md hover:bg-accent transition-colors duration-300 text-lg"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;