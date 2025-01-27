import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { TheFooter } from '@/components/TheFooter';
import { TheHeader } from '@/components/TheHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home | Next App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader />
        <main className="container">{children}</main>
        <TheFooter />
      </body>
    </html>
  );
}
