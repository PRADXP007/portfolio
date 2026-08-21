import type { Metadata } from 'next';
import { EB_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-eb-garamond',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pradeep H — Embedded Systems & Full-Stack Developer',
  description:
    'Portfolio of Pradeep H (B.Tech ECE @ Jain University, Bengaluru). Focused on FPV drone electronics, ESP32 firmware, RF antennas, and full-stack Next.js web applications.',
  keywords: [
    'Pradeep H',
    'Embedded Systems',
    'Full Stack Developer',
    'FPV Drone',
    'Jain University',
    'Electronics and Communication',
    'Next.js 16',
    'Cadence Virtuoso',
    'CST Studio Suite',
    'RAG',
    'pgvector',
    'Bengaluru',
  ],
  authors: [{ name: 'Pradeep H', url: 'https://github.com/PRADXP007' }],
  creator: 'Pradeep H',
  openGraph: {
    title: 'Pradeep H — Embedded Systems & Full-Stack Developer',
    description:
      'Portfolio of Pradeep H (B.Tech ECE @ Jain University, Bengaluru). Focused on FPV drone electronics, ESP32 firmware, RF antennas, and full-stack Next.js web applications.',
    url: 'https://pradeeph-portfolio.vercel.app',
    siteName: 'Pradeep H Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pradeep H — Embedded Systems & Full-Stack Developer',
    description: 'ECE Student · Embedded Systems & Full-Stack Developer based in Bengaluru.',
    creator: '@pradeeph007',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${manrope.variable}`}>
      <body className="antialiased min-h-screen bg-[#F8F8FA] text-[#0A0A0A] selection:bg-black/15 selection:text-black">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
