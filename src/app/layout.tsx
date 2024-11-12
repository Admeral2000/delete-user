// app/layout.tsx

import React from 'react';
import '../styles/globals.css';  // Tailwind va boshqa umumiy stillarni ulash
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';  // Toast Provider


// Google Inter shriftini ulash
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Student Management System',
  description: 'Advanced Student Management System with Next.js and TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-800 min-h-screen`}>
        {/* Bosh sarlavha qismi */}
        <header className="bg-blue-600 text-white py-4 shadow-md absolute top-0 right-0 left-0">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-semibold">Student Management System</h1>
          </div>
        </header>

        {/* Sahifa mazmuni */}
        <main className="container mx-auto px-4 ">{children}</main>

        {/* Footer qismi */}
        <footer className="bg-blue-600 text-white py-4 mt-8 absolute bottom-0 right-0 left-0">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Student Management System. All rights reserved.</p>
          </div>
        </footer>
        <Toaster position='bottom-right' richColors={true}/>
      </body>
    </html>
  );
}

