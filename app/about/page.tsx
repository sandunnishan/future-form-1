'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Editor-in-Chief',
    bio: 'Leading expert in future technologies with over 15 years of experience in emerging tech research.',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      email: 'sarah.chen@futureform.lk'
    }
  },
  {
    name: 'Prof. James Wilson',
    role: 'Senior Editor, Technology',
    bio: 'Specializes in artificial intelligence and its implications for society. Former research lead at MIT.',
    image: 'https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      email: 'james.wilson@futureform.lk'
    }
  },
  {
    name: 'Dr. Maya Patel',
    role: 'Senior Editor, Sustainability',
    bio: 'Environmental scientist focused on sustainable technologies and climate change solutions.',
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      email: 'maya.patel@futureform.lk'
    }
  },
  {
    name: 'Dr. Alex Thompson',
    role: 'Senior Editor, Innovation',
    bio: 'Innovation strategist with expertise in emerging technologies and future market trends.',
    image: 'https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    social: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      email: 'alex.thompson@futureform.lk'
    }
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
          }}
        >
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              About FutureForm
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Shaping tomorrow's world through insightful research and innovative thinking
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              FutureForm is dedicated to exploring and shaping the future through rigorous research, 
              thoughtful analysis, and innovative thinking. We believe in the power of knowledge to 
              drive positive change and create a better tomorrow. Our platform brings together leading 
              thinkers, researchers, and innovators to share insights and inspire action.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">Research Excellence</h3>
                  <p className="text-muted-foreground">
                    Committed to publishing high-quality, peer-reviewed research that advances knowledge.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
                  <p className="text-muted-foreground">
                    Fostering international collaboration and dialogue to address global challenges.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
                  <p className="text-muted-foreground">
                    Exploring cutting-edge ideas and technologies that shape our future.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Team */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <Avatar className="h-24 w-24 mx-auto mb-4">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback>{member.name[0]}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-accent mb-2">{member.role}</p>
                        <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                      </div>
                      <div className="flex justify-center space-x-4">
                        <Link 
                          href={member.social.twitter}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                        </Link>
                        <Link 
                          href={member.social.linkedin}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Link>
                        <Link 
                          href={`mailto:${member.social.email}`}
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions or want to contribute? We'd love to hear from you. 
              Reach out to our team for inquiries about submissions, collaborations, or general information.
            </p>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="flex items-center justify-center text-muted-foreground">
                    <Mail className="h-5 w-5 mr-2 text-accent" />
                    contact@futureform.lk
                  </p>
                  <div className="flex justify-center space-x-4">
                    {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((platform) => (
                      <Link
                        key={platform}
                        href={`https://${platform.toLowerCase()}.com`}
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        {platform}
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}