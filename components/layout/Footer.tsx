import React from 'react';
import Link from 'next/link';
import { 
  Twitter, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Lightbulb 
} from 'lucide-react';
import { navItems, socialLinks } from '@/lib/data';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'facebook':
        return <Facebook className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'instagram':
        return <Instagram className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Lightbulb className="h-6 w-6 text-accent mr-2" />
              <span className="text-2xl font-bold">
                Future<span className="text-accent">Form</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Future Thinking, Future Journal. Inspiring and empowering a global community of innovators and thinkers.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <Link 
                  key={social.platform} 
                  href={social.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.icon)}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-muted pb-2">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Additional Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-muted pb-2">
              Resources
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/submit" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                Submit Article
              </Link>
              <Link href="/reviewers" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                For Reviewers
              </Link>
              <Link href="/guidelines" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                Author Guidelines
              </Link>
              <Link href="/ethics" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                Publication Ethics
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-accent transition-colors duration-300">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 border-b border-muted pb-2">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">
                  123 Innovation Avenue, Tech Park, Colombo 07, Sri Lanka
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                <p className="text-muted-foreground">+94 11 234 5678</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent flex-shrink-0" />
                <p className="text-muted-foreground">contact@futureform.lk</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-muted text-center text-muted-foreground">
          <p>© {year} FutureForm. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4 text-sm">
            <Link href="/terms" className="hover:text-accent transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-accent transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-accent transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;