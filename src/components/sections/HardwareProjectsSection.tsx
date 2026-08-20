'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import HardwareCard from '@/components/ui/HardwareCard';
import StackedCardReveal from '@/components/ui/StackedCardReveal';
import { HARDWARE_PROJECTS } from '@/data/portfolioData';

export default function HardwareProjectsSection() {
  return (
    <section id="hardware" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Blueprint Schematic Header & Container */}
      <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#5C1A28]/25 blueprint-bg-dense overflow-hidden">
        {/* Subtle Ambient Background Wash */}
        <div className="absolute inset-0 bg-[#FAF3E7]/90 backdrop-blur-sm pointer-events-none" />

        <div className="relative z-10">
          <SectionHeading
            label="Physical Systems & Circuit Synthesis"
            title="Hardware & Embedded Engineering"
            subtitle="Bridging the digital and physical domains through custom FPV flight electronics, 2.4 GHz RF antenna simulation, ESP32 IoT nodes, and Cadence Virtuoso IC design."
          />

          {/* Sub-grid of 7 hardware projects with GSAP Stacked Card Reveal */}
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
