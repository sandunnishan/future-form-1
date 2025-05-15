'use client';

import React from 'react';
import { useAppSelector } from '@/lib/hooks';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import { format } from 'date-fns';

const ArticlePage = () => {
  const { articles, loading } = useAppSelector(state => state.articles);

  if (loading) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="container mx-auto">
          <div className="grid gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-48 bg-muted animate-pulse rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Group articles by category
  const categories = {
    Technology: articles.filter(article => article.topics.includes('Technology')),
    Science: articles.filter(article => article.topics.includes('Science')),
    Healthcare: articles.filter(article => article.topics.includes('Healthcare')),
    Environment: articles.filter(article => article.topics.includes('Environment')),
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}


      <section className="relative h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/7014926/pexels-photo-7014926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
          }}
        >
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container px-4"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Academic Articles
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Discover groundbreaking research and insights across multiple disciplines
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles by Category */}
      <div className="container mx-auto px-4 py-12">

        <form className="max-w-md mx-auto">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search article name" required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>

        {Object.entries(categories).map(([category, categoryArticles], index) => (
          <motion.section
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">{category}</h2>
            <div className="grid gap-6">
              {categoryArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="block transform transition-transform hover:-translate-y-1"
                >
                  <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow">
                    <CardContent className="p-0 h-full">
                      <div className="flex flex-col md:flex-row h-full">
                        <div className="md:w-1/4 h-48 md:h-auto relative">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="md:w-3/4 p-6 flex flex-col">
                          <div className="flex flex-wrap gap-2 mb-3">
                            {article.topics.map((topic) => (
                              <Badge
                                key={topic}
                                variant="outline"
                                className="bg-accent/10 text-accent border-accent/20"
                              >
                                {topic}
                              </Badge>
                            ))}
                          </div>
                          <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 line-clamp-2 flex-grow">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center text-sm text-muted-foreground mt-auto">
                            <span className="mr-4">By {article.author}</span>
                            <span className="mr-4">•</span>
                            <span className="mr-4">
                              {format(new Date(article.date), 'MMM dd, yyyy')}
                            </span>
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
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;