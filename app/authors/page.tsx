'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  CheckCircle, 
  ShieldCheck, 
  HelpCircle,
  BookOpen,
  Scale,
  FileCheck,
  Users,
  BadgeCheck
} from 'lucide-react';

export default function AuthorsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
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
              For Authors
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Guidelines and resources for submitting your research to FutureForm Journal
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="manuscripts" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto gap-4">
              <TabsTrigger value="manuscripts" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <BookOpen className="h-4 w-4 mr-2" />
                Manuscripts
              </TabsTrigger>
              <TabsTrigger value="ethics" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Scale className="h-4 w-4 mr-2" />
                Research Ethics
              </TabsTrigger>
              <TabsTrigger value="process" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <FileCheck className="h-4 w-4 mr-2" />
                Review Process
              </TabsTrigger>
              <TabsTrigger value="appeals" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <HelpCircle className="h-4 w-4 mr-2" />
                Appeals
              </TabsTrigger>
            </TabsList>

            <TabsContent value="manuscripts" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-accent" />
                    Acceptable Manuscripts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    FutureForm is committed to publishing top-tier scholarly work that deepens our understanding of future thinking and the practice of research. The journal welcomes theoretical, empirical, and methodological contributions that demonstrate originality, depth, and scholarly rigor.
                  </p>
                  <p className="text-muted-foreground">
                    As an interdisciplinary outlet, FutureForm supports a wide array of theoretical lenses, research methods, and substantive issues relevant to consumer research. Articles submitted should aim to push the boundaries of current knowledge and offer meaningful insights into how viewers think, feel, and act.
                  </p>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Evaluation Criteria</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Scholarly Rigor:</span>
                          <p className="text-muted-foreground">Is the work grounded in solid theoretical frameworks and executed with sound methodology and analysis?</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Practical and Academic Relevance:</span>
                          <p className="text-muted-foreground">Does the topic address meaningful questions in future matters that will interest both scholars and practitioners?</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Original Contribution:</span>
                          <p className="text-muted-foreground">Does the research significantly extend existing knowledge in its area of focus?</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Types of Submissions</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <li className="flex items-center">
                        <BadgeCheck className="h-5 w-5 mr-2 text-accent" />
                        Conceptual and theoretical papers
                      </li>
                      <li className="flex items-center">
                        <BadgeCheck className="h-5 w-5 mr-2 text-accent" />
                        Empirical studies driven by theory
                      </li>
                      <li className="flex items-center">
                        <BadgeCheck className="h-5 w-5 mr-2 text-accent" />
                        Research exploring significant future trending phenomena
                      </li>
                      <li className="flex items-center">
                        <BadgeCheck className="h-5 w-5 mr-2 text-accent" />
                        Future trends and demands
                      </li>
                      <li className="flex items-center">
                        <BadgeCheck className="h-5 w-5 mr-2 text-accent" />
                        Methodological or multi-method research
                      </li>
                      <li className="flex items-center">
                        <BadgeCheck className="h-5 w-5 mr-2 text-accent" />
                        Registered reports and brief academic commentaries
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ethics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShieldCheck className="h-5 w-5 mr-2 text-accent" />
                    Research Ethics and Data Collection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Ethical Principles</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Integrity and Honesty</span>
                          <p className="text-muted-foreground">Research must be conducted with intellectual honesty. Authors must ensure the originality of their work, avoid plagiarism, and clearly acknowledge all sources and contributors.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Academic Independence</span>
                          <p className="text-muted-foreground">Research must be free from undue influence by funding bodies, organizations, or institutions. Any potential conflicts of interest must be fully disclosed.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Social Responsibility</span>
                          <p className="text-muted-foreground">As a journal focused on future-impacting issues, submissions should demonstrate awareness of the broader implications of their research—particularly on society, the environment, and future generations.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Data Collection and Management</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <Users className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Human-Centered Research</span>
                          <p className="text-muted-foreground">All research involving human participants must obtain proper informed consent, maintain confidentiality, and ensure voluntary participation.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FileCheck className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Data Integrity</span>
                          <p className="text-muted-foreground">Raw and processed data must be kept securely and made available upon request for verification purposes (unless legal or ethical restrictions apply).</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="process" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileCheck className="h-5 w-5 mr-2 text-accent" />
                    Review Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    FutureForm employs a rigorous double-blind peer review process to ensure fair and unbiased evaluation of all submissions. Each manuscript is reviewed by at least two expert referees in the relevant field.
                  </p>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Review Timeline</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Initial Screening:</span>
                          <p className="text-muted-foreground">1-2 weeks for editorial review of submission completeness and fit</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Peer Review:</span>
                          <p className="text-muted-foreground">6-8 weeks for detailed evaluation by expert reviewers</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Editorial Decision:</span>
                          <p className="text-muted-foreground">1-2 weeks for final decision based on reviewer recommendations</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appeals" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-accent" />
                    Appeals and Clarifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Authors may request clarification or appeal editorial decisions if they believe an error has occurred in the review process.
                  </p>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">Grounds for Appeal</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Substantive Errors:</span>
                          <p className="text-muted-foreground">Factual errors in reviewer or editor comments</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Procedural Issues:</span>
                          <p className="text-muted-foreground">Evidence of bias or conflict of interest in the review process</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Misinterpretation:</span>
                          <p className="text-muted-foreground">Clear misunderstanding of the manuscript's contribution or scope</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}