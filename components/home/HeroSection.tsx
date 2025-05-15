'use client';

import { useEffect, useState } from 'react';
import { useAppSelector } from '@/lib/hooks';
import { Article } from '@/lib/types';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';

const HeroSection = () => {
  const { featuredArticle } = useAppSelector(state => state.articles);
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (featuredArticle) {
      setArticle(featuredArticle);
    }
  }, [featuredArticle]);

  if (!article) {
    return (
      <div className="h-[600px] bg-gray-100 animate-pulse flex items-center justify-center">
        <p className="text-gray-400">Loading featured article...</p>
      </div>
    );
  }

  return (
    <section className="relative h-[600px] overflow-hidden bg-gradient-to-b from-[#001F3F] to-[#003366]">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F]/90 to-[#001F3F]/70" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge 
              variant="outline" 
              className="mb-4 bg-[#FF6F61]/90 hover:bg-[#FF6F61] text-white border-none"
            >
              Featured Article
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center mb-4 text-gray-300 text-sm">
              <span className="mr-4">By {article.author}</span>
              <span className="mr-4">|</span>
              <span className="mr-4">{format(new Date(article.date), 'MMMM dd, yyyy')}</span>
              <span className="mr-4">|</span>
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article.readTime} min read
              </span>
            </div>
            
            <p className="text-lg text-gray-200 mb-6">
              {article.excerpt}
            </p>
            
            <Button 
              asChild
              className="group bg-white text-[#001F3F] hover:bg-[#FF6F61] hover:text-white"
            >
              <Link href={`/articles/${article.id}`}>
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;