import React from 'react';
import { Article } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

interface LatestArticlesProps {
  articles: Article[];
}

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link href={`/articles/${article.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-none bg-white dark:bg-gray-800 group h-full">
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
            <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
              {article.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2">
              {article.excerpt}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

const LatestArticles: React.FC<LatestArticlesProps> = ({ articles }) => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-3">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the most recent academic publications and research papers across various disciplines.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ArticleCard article={article} />
            </motion.div>
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