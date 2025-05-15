'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { LogOut, Plus, Upload, X } from 'lucide-react';
import { useForm, useFieldArray } from 'react-hook-form';
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

// Define the validation schema
const authorSchema = z.object({
  image: z.string().optional(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  title: z.string().min(2, 'Title must be at least 2 characters'),
  about: z.string().min(10, 'About section must be at least 10 characters'),
});

const articleSchema = z.object({
  category: z.string({
    required_error: 'Please select a category',
  }),
  coveringAreas: z.array(z.string()).min(1, 'At least one covering area is required'),
  topic: z.string()
    .min(5, 'Topic must be at least 5 characters')
    .max(200, 'Topic must not exceed 200 characters'),
  smallDescription: z.string()
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must not exceed 500 characters'),
  abstract: z.string()
    .min(100, 'Abstract must be at least 100 characters')
    .max(5000, 'Abstract must not exceed 5000 characters'),
  document: z.string().optional(),
  readingTime: z.number().optional(),
  image: z.string().optional(),
  authors: z.array(authorSchema).min(1, 'At least one author is required'),
});

type ArticleFormValues = z.infer<typeof articleSchema>;

export default function AdminPortal() {
  const router = useRouter();
  const [currentTag, setCurrentTag] = useState('');

  // Initialize form
  const form = useForm<ArticleFormValues>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      coveringAreas: [],
      authors: [{ image: '', name: '', title: '', about: '' }],
    },
  });

  // Setup field array for authors
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'authors',
  });

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    router.push('/admin');
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentTag.trim() !== '') {
      const currentAreas = form.getValues('coveringAreas');
      form.setValue('coveringAreas', [...currentAreas, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    const currentAreas = form.getValues('coveringAreas');
    form.setValue('coveringAreas', currentAreas.filter(tag => tag !== tagToRemove));
  };

  const onSubmit = (data: ArticleFormValues) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="new-article" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="new-article">Add New Article</TabsTrigger>
            <TabsTrigger value="manage-articles">Article Management</TabsTrigger>
          </TabsList>

          <TabsContent value="new-article">
            <Card>
              <CardHeader>
                <CardTitle>Add New Article</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Article Details */}
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold">📌 Article Details</h3>
                      
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="technology">Technology</SelectItem>
                                <SelectItem value="science">Science</SelectItem>
                                <SelectItem value="health">Health</SelectItem>
                                <SelectItem value="environment">Environment</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormItem>
                        <FormLabel>Covering Areas</FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <Input
                              placeholder="Type and press Enter to add tags"
                              value={currentTag}
                              onChange={(e) => setCurrentTag(e.target.value)}
                              onKeyDown={handleAddTag}
                            />
                            <div className="flex flex-wrap gap-2">
                              {form.watch('coveringAreas').map((tag, index) => (
                                <Badge key={index} variant="secondary" className="flex items-center gap-1">
                                  {tag}
                                  <X
                                    className="h-3 w-3 cursor-pointer"
                                    onClick={() => removeTag(tag)}
                                  />
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>

                      <FormField
                        control={form.control}
                        name="topic"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Topic</FormLabel>
                            <FormControl>
                              <Input placeholder="Article topic" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="smallDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Small Description</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Brief description of the article" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="abstract"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Abstract</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Article abstract" 
                                className="min-h-[200px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Document Upload */}
                      <FormField
                        control={form.control}
                        name="document"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Document (Optional)</FormLabel>
                            <FormControl>
                              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                  <div className="flex text-sm text-gray-600">
                                    <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                                      <span>Upload a file</span>
                                      <input 
                                        type="file" 
                                        className="sr-only" 
                                        accept=".pdf"
                                        onChange={(e) => {
                                          const file = e.target.files?.[0];
                                          if (file) {
                                            field.onChange(file.name);
                                          }
                                        }}
                                      />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                  </div>
                                  <p className="text-xs text-gray-500">PDF up to 10MB</p>
                                </div>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Reading Time */}
                      <FormField
                        control={form.control}
                        name="readingTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Reading Time</FormLabel>
                            <FormControl>
                              <Input placeholder="Auto-calculated" disabled {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Image Upload */}
                      <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Image</FormLabel>
                            <FormControl>
                              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                  <div className="flex text-sm text-gray-600">
                                    <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                                      <span>Upload an image</span>
                                      <input 
                                        type="file" 
                                        className="sr-only" 
                                        accept="image/*"
                                        onChange={(e) => {
                                          const file = e.target.files?.[0];
                                          if (file) {
                                            field.onChange(file.name);
                                          }
                                        }}
                                      />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                  </div>
                                  <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                                </div>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Authors Details */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">👥 Author(s) Details</h3>
                        <Button
                          type="button"
                          onClick={() => append({ image: '', name: '', title: '', about: '' })}
                          variant="outline"
                          size="sm"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Add Author
                        </Button>
                      </div>

                      {fields.map((field, index) => (
                        <Card key={field.id}>
                          <CardContent className="pt-6">
                            <div className="flex justify-between items-center mb-4">
                              <h4 className="font-medium">Author {index + 1}</h4>
                              {index > 0 && (
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => remove(index)}
                                  className="text-destructive"
                                >
                                  <X className="h-4 w-4 mr-2" />
                                  Remove
                                </Button>
                              )}
                            </div>

                            <div className="space-y-4">
                              {/* Author Image */}
                              <FormField
                                control={form.control}
                                name={`authors.${index}.image`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Image</FormLabel>
                                    <FormControl>
                                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                          <div className="flex text-sm text-gray-600">
                                            <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                                              <span>Upload an image</span>
                                              <input 
                                                type="file" 
                                                className="sr-only" 
                                                accept="image/*"
                                                onChange={(e) => {
                                                  const file = e.target.files?.[0];
                                                  if (file) {
                                                    field.onChange(file.name);
                                                  }
                                                }}
                                              />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                          </div>
                                          <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                                        </div>
                                      </div>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              {/* Author Name */}
                              <FormField
                                control={form.control}
                                name={`authors.${index}.name`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Author's name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              {/* Author Title */}
                              <FormField
                                control={form.control}
                                name={`authors.${index}.title`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                      <Input placeholder="Professional title" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              {/* Author About */}
                              <FormField
                                control={form.control}
                                name={`authors.${index}.about`}
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>About Author</FormLabel>
                                    <FormControl>
                                      <Textarea placeholder="Brief bio" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <div className="flex justify-end">
                      <Button type="submit" size="lg">
                        Submit Article
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage-articles">
            <Card>
              <CardHeader>
                <CardTitle>Article Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Article management features coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}