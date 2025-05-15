import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { StoreProvider } from './StoreProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'FutureForm - Future Thinking, Future Journal',
  description: 'Inspiring and empowering a global community of innovators, thinkers, and changemakers with insightful, research-driven content for a sustainable and technologically advanced future.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-sans min-h-screen flex flex-col`}>
        <StoreProvider>
          <Header />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}