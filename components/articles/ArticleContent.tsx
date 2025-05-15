'use client';

import { useEffect, useState } from 'react';
import { useAppSelector } from '@/lib/hooks';
import { Article } from '@/lib/types';
import { format } from 'date-fns';
import { Calendar, Clock, Share2, ChevronLeft, Bookmark, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ArticleContent({ articleId }: { articleId: string }) {
  const { articles } = useAppSelector(state => state.articles);
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const currentArticle = articles.find(a => a.id === articleId);
    if (currentArticle) {
      setArticle(currentArticle);
      const related = articles
        .filter(a => 
          a.id !== currentArticle.id && 
          a.topics.some(topic => currentArticle.topics.includes(topic))
        )
        .slice(0, 3);
      setRelatedArticles(related);
      // Initialize random like count
      setLikeCount(Math.floor(Math.random() * 100) + 50);
    }
  }, [articles, articleId]);

  if (!article) {
    return (
      <div className="min-h-screen bg-muted/20 flex items-center justify-center">
        <p className="text-muted-foreground">Loading article...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Articles
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${article.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-48 mb-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-none shadow-xl">
              <CardContent className="p-8">
                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.topics.map((topic) => (
                    <Link 
                      key={topic} 
                      href={`/topics/${topic.toLowerCase()}`}
                      className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full hover:bg-accent/20 transition-colors"
                    >
                      {topic}
                    </Link>
                  ))}
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  {article.title}
                </h1>

                {/* Article Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {format(new Date(article.date), 'MMMM dd, yyyy')}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {article.readTime} min read
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 mb-8 pb-8 border-b">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${article.author}`} />
                    <AvatarFallback>{article.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{article.author}</p>
                    <p className="text-sm text-muted-foreground">Senior Researcher</p>
                  </div>
                  <div className="ml-auto flex gap-2">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={isBookmarked ? 'text-accent' : ''}
                    >
                      <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg leading-relaxed mb-6 first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3">
                    {article.content}
                  </p>
                </div>

                {/* Engagement Section */}
                <div className="flex items-center justify-between mt-8 pt-8 border-t">
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline"
                      onClick={() => setLikeCount(prev => prev + 1)}
                      className="flex items-center gap-2"
                    >
                      <ThumbsUp className="h-4 w-4" />
                      <span>{likeCount}</span>
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    {['Twitter', 'Facebook', 'LinkedIn'].map((platform) => (
                      <Button key={platform} variant="outline" size="sm">
                        Share on {platform}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Author Bio */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>About the Author</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${article.author}`} />
                    <AvatarFallback>{article.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{article.author}</h3>
                    <p className="text-sm text-muted-foreground">Senior Researcher</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Leading researcher in advanced technologies with over 15 years of experience in the field.
                </p>
              </CardContent>
            </Card>

            {/* Related Articles */}
            <Card>
              <CardHeader>
                <CardTitle>Related Articles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <Link 
                      key={related.id} 
                      href={`/articles/${related.id}`}
                      className="block group"
                    >
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={related.image} 
                            alt={related.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-accent transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {format(new Date(related.date), 'MMM dd, yyyy')}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}