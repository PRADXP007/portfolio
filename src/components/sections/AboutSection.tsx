'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Compass, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassPanel from '@/components/ui/GlassPanel';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function AboutSection() {
  const panels = [
    {
      icon: GraduationCap,
      tag: 'Education',
      title: 'Jain University, Bengaluru',
      content: (
        <>
          B.Tech in <span className="font-semibold text-[#400414]">Electronics & Communication Engineering</span> (Class of 2027, 3rd Year) with a <span className="font-semibold text-[#5C1A28]">7.3 CGPA</span>. Located in JP Nagar, Bengaluru.
        </>
      ),
      meta: 'Class of 2027 · Expected Graduation',
    },
    {
      icon: Cpu,
      tag: 'What I Work On',
      title: 'Hardware & Web Development',
      content: (
        <>
          My work is split between hardware benches (<span className="font-semibold text-[#400414]">FPV flight electronics, ESP32 firmware, and CST antenna simulation</span>) and writing code for <span className="font-semibold text-[#400414]">Next.js, TypeScript, and vector search tools</span>.
        </>
      ),
      meta: 'Firmware · Next.js · Vector Retrieval',
    },
    {
      icon: Compass,
      tag: 'How I Build',
      title: 'Practical Engineering',
      content: (
        <>
          I focus on building things that work reliably end-to-end—whether that means calculating microstrip impedances correctly or designing clean database schemas and APIs.
        </>
      ),
      meta: 'From Circuit Schematics to Production Code',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <SectionHeading
        label="About"
        title="Background & Focus"
        subtitle="Third-year ECE student at Jain University working across embedded electronics, web development, and applied AI."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Bio Narrative & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <GlassPanel className="p-8 sm:p-10">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-semibold uppercase tracking-widest text-[#5C1A28]">
              <MapPin className="w-4 h-4 text-[#7A2436]" />
              JP Nagar, Bengaluru, India
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#400414] leading-snug mb-6">
              Building across physical hardware and software.
            </h3>

            <p className="text-sm sm:text-base text-[#534344] leading-relaxed mb-6">
              {PERSONAL_INFO.bioParagraphs[0]}
            </p>

            <p className="text-sm sm:text-base text-[#534344] leading-relaxed mb-8">
              {PERSONAL_INFO.bioParagraphs[1]}
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-[#5C1A28]/15">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#FAF6EE]/80 border border-[#5C1A28]/10">
                  <div className="font-serif text-xl sm:text-2xl font-bold text-[#400414]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#7A2436] mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </motion.div>

        {/* Right Column: 3 Spatial Glass Panels with Connecting Stem */}
        <div className="lg:col-span-7 relative flex flex-col gap-6">
          {/* Decorative connector line */}
          <div className="absolute left-6 top-10 bottom-10 w-[1px] bg-gradient-to-b from-[#5C1A28]/30 via-[#5C1A28]/15 to-transparent hidden sm:block" />

          {panels.map((panel, idx) => {
            const Icon = panel.icon;
            return (
              <motion.div
                key={panel.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                <GlassPanel
                  variant="card"
                  hoverEffect
                  className="p-8 sm:p-10 pl-8 sm:pl-16 relative overflow-hidden"
                >
                  {/* Left node dot */}
                  <div className="absolute left-4 top-10 w-4 h-4 rounded-full bg-[#E8DCC8] border-2 border-[#5C1A28] hidden sm:flex items-center justify-center -translate-x-1/2 group-hover:scale-125 group-hover:bg-[#5C1A28] transition-all duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5C1A28] group-hover:bg-[#FAF6EE]" />
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-[#5C1A28]/10 text-[#5C1A28]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#7A2436]">
                      {panel.tag}
                    </span>
                  </div>

                  <h4 className="font-serif text-2xl sm:text-3xl text-[#400414] mb-3">
                    {panel.title}
                  </h4>

                  <p className="text-sm sm:text-base text-[#534344] leading-relaxed mb-4">
                    {panel.content}
                  </p>

                  <div className="font-mono text-xs text-[#867274] pt-2 border-t border-[#5C1A28]/10">
                    {panel.meta}
                  </div>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
