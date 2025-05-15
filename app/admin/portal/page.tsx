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
import { 
  LogOut, 
  Plus, 
  Upload, 
  X, 
  Edit, 
  Trash2, 
  Search,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from 'lucide-react';
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

const mockArticles = [
  {
    id: '1',
    title: 'The Future of Artificial Intelligence in Healthcare',
    authors: ['Dr. Sarah Chen', 'Dr. James Wilson'],
    date: '2024-03-15',
    status: true,
    featured: true,
  },
  {
    id: '2',
    title: 'Sustainable Energy Solutions for Urban Development',
    authors: ['Prof. Michael Brown'],
    date: '2024-03-14',
    status: true,
    featured: false,
  },
];

export default function AdminPortal() {
  const router = useRouter();
  const [currentTag, setCurrentTag] = useState('');
  const [articles, setArticles] = useState(mockArticles);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const form = useForm<ArticleFormValues>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      coveringAreas: [],
      authors: [{ image: '', name: '', title: '', about: '' }],
    },
  });

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

  const handleStatusChange = (articleId: string, newStatus: boolean) => {
    setArticles(articles.map(article => 
      article.id === articleId ? { ...article, status: newStatus } : article
    ));
  };

  const handleFeaturedChange = (articleId: string, newFeatured: boolean) => {
    setArticles(articles.map(article => 
      article.id === articleId ? { ...article, featured: newFeatured } : article
    ));
  };

  const handleDelete = (articleId: string) => {
    setArticles(articles.filter(article => article.id !== articleId));
  };

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  const onSubmit = (data: ArticleFormValues) => {
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

        <Tabs defaultValue="manage-articles" className="space-y-6">
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
                <div className="flex justify-between items-center">
                  <CardTitle>Article Management</CardTitle>
                  <div className="relative w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search articles..." className="pl-8" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Article Name</TableHead>
                        <TableHead>Authors</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Featured</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentArticles.map((article) => (
                        <TableRow key={article.id}>
                          <TableCell>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger className="block truncate max-w-[300px]">
                                  {article.title}
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{article.title}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </TableCell>
                          <TableCell>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  {article.authors[0]} {article.authors.length > 1 && `+${article.authors.length - 1}`}
                                </TooltipTrigger>
                                <TooltipContent>
                                  <ul>
                                    {article.authors.map((author, index) => (
                                      <li key={index}>{author}</li>
                                    ))}
                                  </ul>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </TableCell>
                          <TableCell>{new Date(article.date).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Switch
                              checked={article.status}
                              onCheckedChange={(checked) => handleStatusChange(article.id, checked)}
                            />
                          </TableCell>
                          <TableCell>
                            <Checkbox
                              checked={article.featured}
                              onCheckedChange={(checked) => handleFeaturedChange(article.id, !!checked)}
                            />
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => router.push(`/admin/articles/${article.id}/edit`)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="outline" size="icon">
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Delete Article</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      Are you sure you want to delete this article? This action cannot be undone.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => handleDelete(article.id)}
                                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                    >
                                      Delete
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-muted-foreground">
                    Showing {startIndex + 1} to {Math.min(endIndex, articles.length)} of {articles.length} articles
                  </p>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}