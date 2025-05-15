import React from 'react';
import { Article } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

interface TrendingArticlesProps {
  articles: Article[];
}

const TrendingArticles: React.FC<TrendingArticlesProps> = ({ articles }) => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold">Trending Articles</h2>
            </div>
            <p className="text-muted-foreground">Most discussed research papers this week</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/articles/${article.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 relative rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="bg-accent/10 text-accent">
                            {article.topics[0]}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {format(new Date(article.date), 'MMM dd, yyyy')}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <span className="mr-4">By {article.author}</span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {article.readTime} min read
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingArticles;