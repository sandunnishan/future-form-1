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

export default function AdminPortal() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');
  const [authors, setAuthors] = useState([{ image: '', name: '', title: '', about: '' }]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    router.push('/admin');
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentTag.trim() !== '') {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const addAuthor = () => {
    setAuthors([...authors, { image: '', name: '', title: '', about: '' }]);
  };

  const removeAuthor = (index: number) => {
    setAuthors(authors.filter((_, i) => i !== index));
  };

  const updateAuthor = (index: number, field: string, value: string) => {
    const newAuthors = [...authors];
    newAuthors[index] = { ...newAuthors[index], [field]: value };
    setAuthors(newAuthors);
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
              <CardContent className="space-y-6">
                {/* Article Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">📌 Article Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Category</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="science">Science</SelectItem>
                          <SelectItem value="health">Health</SelectItem>
                          <SelectItem value="environment">Environment</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Covering Area</label>
                      <div className="space-y-2">
                        <Input
                          placeholder="Type and press Enter to add tags"
                          value={currentTag}
                          onChange={(e) => setCurrentTag(e.target.value)}
                          onKeyDown={handleAddTag}
                        />
                        <div className="flex flex-wrap gap-2">
                          {tags.map((tag, index) => (
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
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Topic</label>
                      <Input placeholder="Article topic" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Small Description</label>
                      <Textarea placeholder="Brief description of the article" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Abstract</label>
                      <Textarea placeholder="Article abstract" className="min-h-[200px]" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Full Document (Optional)</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                              <span>Upload a file</span>
                              <input type="file" className="sr-only" accept=".pdf" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF up to 10MB</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Reading Time</label>
                      <Input placeholder="Auto-calculated" disabled />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">Image</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                              <span>Upload an image</span>
                              <input type="file" className="sr-only" accept="image/*" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Authors Details */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">👥 Author(s) Details</h3>
                    <Button onClick={addAuthor} variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Author
                    </Button>
                  </div>

                  {authors.map((author, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-medium">Author {index + 1}</h4>
                          {index > 0 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeAuthor(index)}
                              className="text-destructive"
                            >
                              <X className="h-4 w-4 mr-2" />
                              Remove
                            </Button>
                          )}
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium mb-1">Image</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md">
                              <div className="space-y-1 text-center">
                                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                <div className="flex text-sm text-gray-600">
                                  <label className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80">
                                    <span>Upload an image</span>
                                    <input type="file" className="sr-only" accept="image/*" />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG up to 2MB</p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <Input
                              placeholder="Author's name"
                              value={author.name}
                              onChange={(e) => updateAuthor(index, 'name', e.target.value)}
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-1">Title</label>
                            <Input
                              placeholder="Professional title"
                              value={author.title}
                              onChange={(e) => updateAuthor(index, 'title', e.target.value)}
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium mb-1">About Author</label>
                            <Textarea
                              placeholder="Brief bio"
                              value={author.about}
                              onChange={(e) => updateAuthor(index, 'about', e.target.value)}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-end">
                  <Button size="lg">
                    Submit Article
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="manage-articles">
            <Card>
              <CardHeader>
                <CardTitle>Article Management</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Article management content will go here */}
                <p className="text-muted-foreground">Article management features coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}