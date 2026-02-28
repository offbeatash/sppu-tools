import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Default Next.js font
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SPPU Tools',
  description: 'Fast and accurate calculators for SPPU students.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950 text-white min-h-screen flex flex-col`}>
        
        {/* Global Navbar */}
        <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="text-xl font-black tracking-tight text-white hover:text-orange-500 transition-colors">
              SPPU <span className="text-orange-500">Tools</span>
            </Link>

            {/* Navigation Links */}
            <div className="flex gap-6 text-sm font-medium">
              <Link 
                href="/cgpa" 
                className="text-slate-300 hover:text-orange-500 transition-colors"
              >
                CGPA Calc
              </Link>
              <Link 
                href="/percentage" 
                className="text-slate-300 hover:text-orange-500 transition-colors"
              >
                Percentage Calc
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Page Content */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* Simple Global Footer */}
        <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900 mt-12">
          <p>Built to make SPPU math a little less painful.</p>
        </footer>

      </body>
    </html>
  );
}