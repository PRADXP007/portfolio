'use client';

import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { NeuIconWell, NeuButton } from '@/components/ui/Neumorphic';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full border-t border-white/10 bg-transparent pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight mb-2">
              Pradeep H
            </h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-sm">
              ECE Student · Embedded Systems & Full-Stack Developer at Jain University, Bengaluru.
            </p>
          </div>

          {/* Col 2: Social Links with Pure Glass Wells */}
          <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-center">
            <NeuIconWell
              href={`mailto:${PERSONAL_INFO.email}`}
              label="Email Pradeep"
              icon={<Mail className="w-4 h-4 text-white/80" />}
            />
            <NeuIconWell
              href={PERSONAL_INFO.github}
              label="GitHub Profile"
              icon={<GithubIcon className="w-4 h-4 text-white/80" />}
            />
            <NeuIconWell
              href={PERSONAL_INFO.linkedin}
              label="LinkedIn Profile"
              icon={<LinkedinIcon className="w-4 h-4 text-white/80" />}
            />
          </div>

          {/* Col 3: Back to Top with Liquid Glass Button */}
          <div className="md:col-span-3 flex md:justify-end">
            <NeuButton
              variant="secondary"
              onClick={scrollToTop}
              icon={<ArrowUp className="w-3.5 h-3.5" />}
              className="py-2.5 px-5 rounded-full"
            >
              Back to Top
            </NeuButton>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Pradeep H. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          <p className="font-mono text-[11px]">Bengaluru, India · 12.9716° N, 77.5946° E</p>
        </div>
      </div>
    </footer>
  );
}
