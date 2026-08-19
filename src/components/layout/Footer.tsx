'use client';

import React from 'react';
import { ArrowUp, Heart, Coffee } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-[#5C1A28]/15 bg-[#E8DCC8]/40 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Branding & Tagline */}
        <div className="text-center md:text-left">
          <div className="font-serif text-2xl text-[#400414] font-medium tracking-tight">
            Pradeep H
          </div>
          <p className="text-xs text-[#534344] mt-1 max-w-sm">
            B.Tech ECE '27 · Jain University, Bengaluru. Soldering circuits, tuning FPV drones, and writing clean web code.
          </p>
        </div>

        {/* Center: Warm Attribution */}
        <div className="text-center">
          <p className="text-xs text-[#534344] flex items-center justify-center gap-1.5">
            Designed & coded with <Heart className="w-3.5 h-3.5 text-[#5C1A28] fill-[#5C1A28]" /> in Bengaluru
          </p>
          <p className="text-[11px] font-mono text-[#867274] mt-1">
            © {new Date().getFullYear()} Pradeep H. All rights reserved.
          </p>
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pradeep's GitHub profile"
            className="p-2.5 rounded-full bg-[#FAF6EE] text-[#400414] hover:bg-[#5C1A28] hover:text-[#FAF6EE] border border-[#5C1A28]/10 transition-colors shadow-sm"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pradeep's LinkedIn profile"
            className="p-2.5 rounded-full bg-[#FAF6EE] text-[#400414] hover:bg-[#5C1A28] hover:text-[#FAF6EE] border border-[#5C1A28]/10 transition-colors shadow-sm"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#FAF6EE] text-[#400414] hover:bg-[#5C1A28] hover:text-[#FAF6EE] border border-[#5C1A28]/10 text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Top
          </button>
        </div>
      </div>
    </footer>
  );
}
