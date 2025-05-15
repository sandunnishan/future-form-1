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
          <div className="space-y-8">
            {/* Open Access Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="h-5 w-5 mr-2 text-accent" />
                    1. Open Access Policy
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
            </motion.div>

            {/* Authorship Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-accent" />
                    2. Authorship Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Authorship credit is based on substantial contributions to research design, execution, or interpretation. All listed authors must:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Approve the final version of the manuscript
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Agree to be accountable for its content
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Disclose any contributions from third parties
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Conflict of Interest Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2 text-accent" />
                    3. Conflict of Interest Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    All authors, reviewers, and editors must disclose any financial, personal, or institutional relationships that could influence the content or outcomes of the research.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Funding sources and financial interests
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Professional and institutional affiliations
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Personal relationships that may influence judgment
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Plagiarism Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-accent" />
                    4. Plagiarism and Originality Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    FutureForm maintains a strict zero-tolerance policy on plagiarism. All manuscripts are screened using plagiarism detection tools.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Original and unpublished content only
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      No duplicate submissions
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Proper citation of all sources
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Data Sharing Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 mr-2 text-accent" />
                    5. Data Sharing and Transparency Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We encourage authors to share raw data, code, and supplementary materials to support transparency and reproducibility.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Data deposit in trusted repositories
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Clear documentation of methods
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Access links in manuscripts
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Correction Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileEdit className="h-5 w-5 mr-2 text-accent" />
                    6. Correction and Retraction Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <BadgeCheck className="h-4 w-4 mr-2 mt-1 text-accent" />
                      <div>
                        <p className="font-medium">Corrections</p>
                        <p>Minor errors that don't affect findings</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BadgeCheck className="h-4 w-4 mr-2 mt-1 text-accent" />
                      <div>
                        <p className="font-medium">Retractions</p>
                        <p>Major errors or misconduct</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <BadgeCheck className="h-4 w-4 mr-2 mt-1 text-accent" />
                      <div>
                        <p className="font-medium">Withdrawals</p>
                        <p>Pre-publication with formal request</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Peer Review Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-accent" />
                    7. Peer Review Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    All research articles undergo a double-blind peer review process. Reviewers are selected based on subject expertise, and all evaluations are treated confidentially.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Double-blind review process
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Expert reviewer selection
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Confidential evaluation
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Archiving Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Archive className="h-5 w-5 mr-2 text-accent" />
                    8. Archiving and Preservation Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Published articles are archived digitally to ensure long-term access and preservation.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Digital preservation systems
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Multiple backup locations
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Long-term accessibility
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ethics Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="h-5 w-5 mr-2 text-accent" />
                    9. Ethics Approval Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Research involving human participants or animals must receive ethics approval from an appropriate institutional review board.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      IRB approval required
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Informed consent documentation
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Ethical guidelines compliance
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Inclusive Language Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Heart className="h-5 w-5 mr-2 text-accent" />
                    10. Inclusive Language Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    FutureForm promotes equity, inclusion, and respect in academic publishing.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Inclusive language use
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      No discriminatory content
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Respect for diversity
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Advertising Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-accent" />
                    11. Advertising and Sponsorship Policy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    While FutureForm may partner with relevant organizations, all sponsorship and advertising are handled transparently.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Clear labeling of sponsored content
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Editorial independence
                    </li>
                    <li className="flex items-center">
                      <BadgeCheck className="h-4 w-4 mr-2 text-accent" />
                      Transparent partnerships
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}