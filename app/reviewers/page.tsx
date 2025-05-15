'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  CheckCircle, 
  Users,
  ClipboardCheck,
  Scale,
  Shield,
  BookOpen,
  Award
} from 'lucide-react';

export default function ReviewersPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'
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
              For Reviewers
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Guidelines and information for peer reviewers at FutureForm Journal
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="process" className="space-y-8">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-4">
              <TabsTrigger value="process" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <ClipboardCheck className="h-4 w-4 mr-2" />
                Review Process
              </TabsTrigger>
              <TabsTrigger value="guidelines" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <BookOpen className="h-4 w-4 mr-2" />
                Guidelines
              </TabsTrigger>
              <TabsTrigger value="recognition" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Award className="h-4 w-4 mr-2" />
                Recognition
              </TabsTrigger>
            </TabsList>

            <TabsContent value="process" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-accent" />
                    Editorial Review Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    The integrity and quality of FutureForm depend on a rigorous, fair, and timely review process. We deeply value the contributions of peer reviewers who uphold the academic standards and credibility of the journal.
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Review Steps</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-accent/10 p-2 rounded-full mr-4 mt-1">
                          <CheckCircle className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium">Initial Editorial Screening</h4>
                          <p className="text-muted-foreground">Preliminary review to ensure alignment with scope and basic standards</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-accent/10 p-2 rounded-full mr-4 mt-1">
                          <Users className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium">Double-Blind Peer Review</h4>
                          <p className="text-muted-foreground">At least two independent reviewers evaluate the manuscript</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-accent/10 p-2 rounded-full mr-4 mt-1">
                          <Scale className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium">Reviewer Evaluation</h4>
                          <p className="text-muted-foreground">Assessment of originality, methodology, relevance, and contribution</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="bg-accent/10 p-2 rounded-full mr-4 mt-1">
                          <Shield className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium">Editorial Decision</h4>
                          <p className="text-muted-foreground">Final decision based on reviewer recommendations</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-accent" />
                    Reviewer Responsibilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium">Objective Evaluation</span>
                        <p className="text-muted-foreground">Provide balanced, constructive feedback based on academic merit</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium">Confidentiality</span>
                        <p className="text-muted-foreground">Treat manuscripts as confidential documents and maintain privacy</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <span className="font-medium">Timely Response</span>
                        <p className="text-muted-foreground">Complete reviews within the specified timeline (2-3 weeks)</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="guidelines" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-accent" />
                    Reviewer Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Before Accepting a Review</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Assess Fit and Expertise</span>
                          <p className="text-muted-foreground">Ensure the manuscript aligns with your area of expertise</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Check for Conflicts</span>
                          <p className="text-muted-foreground">Disclose any potential conflicts of interest</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Confirm Availability</span>
                          <p className="text-muted-foreground">Verify you can complete the review within the timeline</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Evaluation Criteria</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-2">Relevance</h4>
                          <p className="text-sm text-muted-foreground">Alignment with journal focus and scope</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-2">Originality</h4>
                          <p className="text-sm text-muted-foreground">Novel contribution to existing knowledge</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-2">Methodology</h4>
                          <p className="text-sm text-muted-foreground">Sound research methods and analysis</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <h4 className="font-medium mb-2">Presentation</h4>
                          <p className="text-sm text-muted-foreground">Clear writing and logical structure</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recognition" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-accent" />
                    Reviewer Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    At FutureForm, we recognize and value the essential contribution of our peer reviewers to maintaining the quality and integrity of published research.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <Award className="h-8 w-8 text-accent mb-4" />
                        <h3 className="font-medium mb-2">Annual Recognition</h3>
                        <p className="text-sm text-muted-foreground">Acknowledgment in journal reports and review listings</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <Users className="h-8 w-8 text-accent mb-4" />
                        <h3 className="font-medium mb-2">Editorial Board</h3>
                        <p className="text-sm text-muted-foreground">Priority consideration for editorial board positions</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <FileText className="h-8 w-8 text-accent mb-4" />
                        <h3 className="font-medium mb-2">Certificates</h3>
                        <p className="text-sm text-muted-foreground">Contribution certificates available upon request</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Become a Reviewer</h3>
                    <p className="text-muted-foreground mb-4">
                      We welcome applications from qualified scholars and practitioners in sustainability, engineering, future studies, and related fields.
                    </p>
                    <div className="bg-accent/10 p-6 rounded-lg">
                      <h4 className="font-medium mb-2">How to Apply</h4>
                      <p className="text-muted-foreground">
                        Send your CV and areas of expertise to inquiries@futureform.lk with the subject line: "Reviewer Application"
                      </p>
                    </div>
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