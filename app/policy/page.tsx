'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Lock, 
  Users,
  AlertTriangle,
  Database,
  FileEdit,
  Scale,
  Archive,
  Heart,
  BadgeCheck,
  MessageSquare
} from 'lucide-react';

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Journal Policies
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Our commitment to maintaining high standards of academic integrity and ethical publishing
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="open-access" className="space-y-8">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto gap-4">
              <TabsTrigger value="open-access" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Lock className="h-4 w-4 mr-2" />
                Open Access
              </TabsTrigger>
              <TabsTrigger value="authorship" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Users className="h-4 w-4 mr-2" />
                Authorship
              </TabsTrigger>
              <TabsTrigger value="conflict" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Conflicts
              </TabsTrigger>
              <TabsTrigger value="plagiarism" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <FileText className="h-4 w-4 mr-2" />
                Plagiarism
              </TabsTrigger>
              <TabsTrigger value="data" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Database className="h-4 w-4 mr-2" />
                Data
              </TabsTrigger>
            </TabsList>

            <TabsContent value="open-access">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-accent" />
                    Open Access Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    FutureForm operates as an open-access journal. All published articles are freely available online without subscription fees or paywalls.
                  </p>
                  <p className="text-muted-foreground">
                    Authors retain copyright and grant FutureForm a license to publish under a Creative Commons license (CC BY or CC BY-NC, as specified per article).
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="authorship">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-accent" />
                    Authorship Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Authorship credit is based on substantial contributions to research design, execution, or interpretation.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Approve the final version
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Agree to be accountable
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Disclose all contributions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="conflict">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-accent" />
                    Conflict of Interest Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All authors, reviewers, and editors must disclose any financial, personal, or institutional relationships that could influence the content or outcomes of the research. This includes:
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li>• Funding sources</li>
                    <li>• Advisory roles</li>
                    <li>• Organizational affiliations</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="plagiarism">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-accent" />
                    Plagiarism Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    FutureForm maintains a strict zero-tolerance policy on plagiarism. All manuscripts are screened using plagiarism detection tools.
                  </p>
                  <p className="text-muted-foreground">
                    Submissions must be original, unpublished, and not under consideration elsewhere.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="data">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 mr-2 text-accent" />
                    Data Sharing Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We encourage authors to share raw data, code, and supplementary materials to support transparency and reproducibility. Datasets should be deposited in trusted public repositories with links provided in the manuscript.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}