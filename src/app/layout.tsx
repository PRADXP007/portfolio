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
  title: 'Pradeep H — ECE Student · Embedded Systems & Full-Stack Engineer',
  description:
    'Engineering portfolio of Pradeep H (B.Tech ECE @ Jain University Bengaluru). Specializing in FPV drone hardware, embedded systems (ESP32/C++), RF simulation, full-stack Next.js web applications, and AI integrations.',
  keywords: [
    'Pradeep H',
    'Embedded Systems Engineer',
    'Full Stack Developer',
    'FPV Drone Engineer',
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
    title: 'Pradeep H — Engineering Portfolio',
    description:
      'Bridging physical hardware engineering with intelligent software architecture and generative AI systems.',
    url: 'https://portfolio-five-umber-61.vercel.app',
    siteName: 'Pradeep H Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pradeep H — Engineering Portfolio',
    description: 'ECE Student · Embedded Systems & Full-Stack Engineer based in Bengaluru.',
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
      <body className="antialiased min-h-screen bg-[#F3ECE0] text-[#1E1B14] selection:bg-[#5C1A28] selection:text-[#FAF6EE]">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
