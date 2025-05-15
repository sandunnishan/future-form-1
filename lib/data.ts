import { Article, NavItem, SocialLink, Topic } from './types';

// Navigation items
export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Topics', href: '/topics' },
  { label: 'Contact', href: '/contact' },
  { label: 'Policies', href: '/policies' },
];

// Social media links
export const socialLinks: SocialLink[] = [
  { platform: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { platform: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { platform: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { platform: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
];

// Mock articles
export const articles: Article[] = [
  {
    id: '1',
    title: 'Advancements in Quantum Computing: A New Era',
    excerpt: 'Recent breakthroughs in quantum computing show promising results for complex computational problems.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Dr. Jane Smith',
    date: '2025-04-15',
    readTime: 8,
    image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    topics: ['Technology', 'Science', 'Computing'],
    isFeatured: true
  },
  {
    id: '2',
    title: 'Climate Change Adaptation Strategies for Urban Planning',
    excerpt: 'How cities around the world are implementing innovative solutions to adapt to climate change.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Prof. Michael Johnson',
    date: '2025-04-10',
    readTime: 12,
    image: 'https://images.pexels.com/photos/3044479/pexels-photo-3044479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    topics: ['Environment', 'Urban Planning', 'Sustainability'],
    isFeatured: false
  },
  {
    id: '3',
    title: 'The Impact of Artificial Intelligence on Healthcare Systems',
    excerpt: 'Examining how AI technologies are revolutionizing patient care and medical research.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Dr. Sarah Williams',
    date: '2025-04-05',
    readTime: 10,
    image: 'https://images.pexels.com/photos/4031409/pexels-photo-4031409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    topics: ['Healthcare', 'Technology', 'AI'],
    isFeatured: false
  },
  {
    id: '4',
    title: 'Economic Implications of Digital Currencies',
    excerpt: 'Analyzing how central bank digital currencies may reshape global financial systems.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Prof. Robert Chen',
    date: '2025-03-28',
    readTime: 15,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    topics: ['Economics', 'Finance', 'Technology'],
    isFeatured: false
  },
  {
    id: '5',
    title: 'Neuroplasticity: New Findings on Brain Adaptation',
    excerpt: 'Recent studies reveal surprising insights into how the brain adapts throughout adulthood.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Dr. Elizabeth Martinez',
    date: '2025-03-20',
    readTime: 11,
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    topics: ['Neuroscience', 'Psychology', 'Health'],
    isFeatured: false
  },
  {
    id: '6',
    title: 'Sustainable Agriculture Methods for Food Security',
    excerpt: 'Innovative farming techniques that promise to enhance food production while reducing environmental impact.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: 'Prof. David Thompson',
    date: '2025-03-15',
    readTime: 9,
    image: 'https://images.pexels.com/photos/2426544/pexels-photo-2426544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    topics: ['Agriculture', 'Sustainability', 'Food Science'],
    isFeatured: false
  }
];

// Mock topics
export const topics: Topic[] = [
  {
    id: '1',
    name: 'Technology',
    description: 'Cutting-edge advancements in the tech world',
    articleCount: 12,
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '2',
    name: 'Science',
    description: 'Latest scientific research and discoveries',
    articleCount: 15,
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '3',
    name: 'Healthcare',
    description: 'Advances in medical research and healthcare systems',
    articleCount: 8,
    image: 'https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: '4',
    name: 'Environment',
    description: 'Climate change, conservation, and sustainability',
    articleCount: 10,
    image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];