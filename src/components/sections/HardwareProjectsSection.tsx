'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import HardwareCard from '@/components/ui/HardwareCard';
import StackedCardReveal from '@/components/ui/StackedCardReveal';
import { HARDWARE_PROJECTS } from '@/data/portfolioData';

export default function HardwareProjectsSection() {
  return (
    <section id="hardware" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Blueprint Schematic Light Glass Header & Container */}
      <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 border border-black/10 liquid-glass blueprint-bg-dense overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)]">
        {/* Clean Light Ambient Wash */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-md pointer-events-none" />

        <div className="relative z-10">
          <SectionHeading
            label="Hardware"
            title="Hardware Projects"
            subtitle="ESP32-driven FPV drone flight control, companion micro quadcopter testbeds, smart pill monitoring, and automated LPG IoT workflows."
          />

          {/* Sub-grid of 4 hardware projects with GSAP Stacked Card Reveal */}
          <StackedCardReveal className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-12">
            {HARDWARE_PROJECTS.map((project, index) => (
              <HardwareCard key={project.id} project={project} index={index} />
            ))}
          </StackedCardReveal>
        </div>
      </div>
    </section>
  );
}
