// Article interface
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  topics: string[];
  isFeatured: boolean;
}

// Topic interface
export interface Topic {
  id: string;
  name: string;
  description: string;
  articleCount: number;
  image: string;
}

// Navigation item interface
export interface NavItem {
  label: string;
  href: string;
}

// Social media link interface
export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}