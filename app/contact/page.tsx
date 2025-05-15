'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Loader2, BookOpen, Users, FileText, GraduationCap } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const departments = [
  {
    name: 'Editorial Office',
    icon: BookOpen,
    email: 'editorial@futureform.lk',
    description: 'For manuscript submissions and editorial inquiries'
  },
  {
    name: 'Peer Review',
    icon: Users,
    email: 'review@futureform.lk',
    description: 'For peer reviewers and review process inquiries'
  },
  {
    name: 'Author Support',
    icon: FileText,
    email: 'authors@futureform.lk',
    description: 'For submission guidelines and author assistance'
  },
  {
    name: 'Academic Relations',
    icon: GraduationCap,
    email: 'academic@futureform.lk',
    description: 'For institutional subscriptions and partnerships'
  }
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
  }

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
              Contact FutureForm Journal
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Connect with our editorial team for manuscript submissions, peer review inquiries, or general questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-12">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">Editorial Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept) => (
                <Card 
                  key={dept.name}
                  className="hover:shadow-md transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <dept.icon className="h-8 w-8 text-accent mb-4" />
                      <h3 className="font-semibold mb-2">{dept.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {dept.description}
                      </p>
                      <p className="text-sm flex items-center text-accent">
                        <Mail className="h-4 w-4 mr-2" />
                        {dept.email}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-muted/20">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Submit an Inquiry</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="mb-6 text-accent">
                        <Send className="h-16 w-16 mx-auto" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">Inquiry Received</h3>
                      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                        Thank you for contacting FutureForm Journal. Our editorial team will respond to your inquiry within 2-3 business days.
                      </p>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Submit Another Inquiry
                      </Button>
                    </motion.div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Dr. Jane Smith" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Academic Email</FormLabel>
                                <FormControl>
                                  <Input placeholder="jane.smith@university.edu" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="Manuscript Submission Inquiry" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please provide details about your inquiry..." 
                                  className="min-h-[200px]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full"
                          size="lg"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Submit Inquiry
                            </>
                          )}
                        </Button>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}