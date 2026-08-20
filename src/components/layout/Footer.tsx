'use client';

import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full border-t border-[#5C1A28]/15 bg-transparent pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-[#5C1A28]/10">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#400414] font-medium tracking-tight mb-2">
              Pradeep H
            </h3>
            <p className="font-sans text-sm text-[#534344] leading-relaxed max-w-sm">
              ECE Student · Embedded Systems & Full-Stack Developer at Jain University, Bengaluru.
            </p>
          </div>

          {/* Col 2: Social Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 md:justify-center">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#534344] hover:text-[#5C1A28] transition-colors p-2"
            >
              <Mail className="w-4 h-4 text-[#5C1A28]" />
              Email
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#534344] hover:text-[#5C1A28] transition-colors p-2"
            >
              <GithubIcon className="w-4 h-4 text-[#5C1A28]" />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#534344] hover:text-[#5C1A28] transition-colors p-2"
            >
              <LinkedinIcon className="w-4 h-4 text-[#5C1A28]" />
              LinkedIn
            </a>
          </div>

          {/* Col 3: Back to Top */}
          <div className="md:col-span-3 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5C1A28]/20 text-[#400414] hover:bg-[#E8DCC8]/60 text-xs font-semibold tracking-wider uppercase transition-all duration-200"
            >
              Back to Top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#867274]">
          <p>© {new Date().getFullYear()} Pradeep H. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          <p className="font-mono text-[11px]">Bengaluru, India · 12.9716° N, 77.5946° E</p>
        </div>
      </div>
    </footer>
  );
}
