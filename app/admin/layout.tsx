'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (!isAuthenticated && window.location.pathname !== '/admin') {
      router.push('/admin');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100">
      {children}
    </div>
  );
}