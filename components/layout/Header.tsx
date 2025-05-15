'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Lightbulb, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <Lightbulb className="h-6 w-6 text-accent mr-2" />
            <span className="text-2xl font-bold text-primary">
              Future<span className="text-accent">Form</span>
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-lg">
          <Link 
            href="/"
            className="font-medium text-primary hover:text-accent transition-colors duration-300"
          >
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-medium text-primary hover:text-accent transition-colors duration-300">
              About <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/about" className="w-full">
                  About Us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/reviewers" className="w-full">
                  For Reviewers
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/guidelines" className="w-full">
                  Author Guidelines
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/ethics" className="w-full">
                  Publication Ethics
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link 
            href="/articles"
            className="font-medium text-primary hover:text-accent transition-colors duration-300"
          >
            Articles
          </Link>
          
          <Link 
            href="/contact"
            className="font-medium text-primary hover:text-accent transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:text-accent transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium text-primary hover:text-accent py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2 pl-4">
                <Link
                  href="/about"
                  className="block font-medium text-primary hover:text-accent py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/reviewers"
                  className="block font-medium text-primary hover:text-accent py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  For Reviewers
                </Link>
                <Link
                  href="/guidelines"
                  className="block font-medium text-primary hover:text-accent py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Author Guidelines
                </Link>
                <Link
                  href="/ethics"
                  className="block font-medium text-primary hover:text-accent py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Publication Ethics
                </Link>
              </div>
              <Link
                href="/topics"
                className="font-medium text-primary hover:text-accent py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Topics
              </Link>
              <Link
                href="/contact"
                className="font-medium text-primary hover:text-accent py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;