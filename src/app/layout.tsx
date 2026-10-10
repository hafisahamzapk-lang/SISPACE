import type { Metadata } from 'next';
import './globals.css';
import { AppProvider } from '@/lib/context/app-context';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Toast } from '@/components/ui/Toast';

export const metadata: Metadata = {
  title: 'SiSpace Qatar — Empowering Women Artisans & Entrepreneurs',
  description: 'Qatar’s premier e-commerce marketplace empowering women-owned businesses, female creators, handcrafted goods, organic skincare, and sustainable fashion.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans" suppressHydrationWarning>
        <AppProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <Toast />
        </AppProvider>
      </body>
    </html>
  );
}
