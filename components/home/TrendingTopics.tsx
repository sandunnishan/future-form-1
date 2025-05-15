'use client';

import React from 'react';
import { useAppSelector } from '@/lib/hooks';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const TrendingTopics = () => {
  const { topics, loading } = useAppSelector(state => state.topics);
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Trending Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-100 animate-pulse h-[200px] rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-3">Trending Topics</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore popular research areas and discover the latest advancements in various fields.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/topics/${topic.id}`}>
                <Card className="h-full overflow-hidden hover:shadow-md transition-shadow group relative">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={topic.image} 
                      alt={topic.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>
                  <CardContent className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-xl text-white font-semibold mb-1">{topic.name}</h3>
                        <div className="flex items-center text-sm">
                          <Badge variant="outline" className="border-white/50 text-white">
                            {topic.articleCount} articles
                          </Badge>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/topics" 
            className="inline-block px-6 py-3 bg-[#001F3F] text-white rounded-md hover:bg-[#FF6F61] transition-colors"
          >
            Explore All Topics
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;