'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  Lock, 
  Users,
  AlertTriangle,
  Database,
  FileEdit,
  Trash2,
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Open Access Policy */}
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

            {/* Authorship Policy */}
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

            {/* Conflict of Interest */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-accent" />
                  Conflict of Interest
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

            {/* Plagiarism Policy */}
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

            {/* Data Policy */}
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

            {/* Corrections Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileEdit className="h-5 w-5 mr-2 text-accent" />
                  Corrections Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-1">Corrections</h3>
                    <p className="text-muted-foreground">For minor errors that don't affect findings</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Retractions</h3>
                    <p className="text-muted-foreground">For major errors or ethical issues</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Withdrawals</h3>
                    <p className="text-muted-foreground">Pre-publication with formal request</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Peer Review Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-5 w-5 mr-2 text-accent" />
                  Peer Review Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  All research articles undergo a double-blind peer review process. Reviewers are selected based on subject expertise, and all evaluations are treated confidentially.
                </p>
                <p className="text-muted-foreground">
                  Final publication decisions rest with the editorial board, based on reviewer feedback and editorial judgment.
                </p>
              </CardContent>
            </Card>

            {/* Archiving Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Archive className="h-5 w-5 mr-2 text-accent" />
                  Archiving Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Published articles are archived digitally to ensure long-term access and preservation. We partner with trusted platforms and institutional repositories to maintain the scholarly record.
                </p>
              </CardContent>
            </Card>

            {/* Ethics Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-accent" />
                  Ethics Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Authors must confirm that research involving human participants or animals received ethics approval from an appropriate institutional review board.
                </p>
                <p className="text-muted-foreground">
                  Informed consent details must be included in the manuscript.
                </p>
              </CardContent>
            </Card>

            {/* Inclusive Language Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-accent" />
                  Inclusive Language Policy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  FutureForm promotes equity, inclusion, and respect in academic publishing. We encourage the use of inclusive language and reject any content that perpetuates bias, stereotypes, or discrimination.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}