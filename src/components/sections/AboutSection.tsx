'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Compass, MapPin, Coffee, Heart } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassPanel from '@/components/ui/GlassPanel';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function AboutSection() {
  const panels = [
    {
      icon: GraduationCap,
      tag: 'University & Studies',
      title: 'Jain University, Bengaluru',
      content: (
        <>
          Studying <span className="font-semibold text-[#400414]">Electronics & Communication Engineering</span> (Class of 2027, 3rd Year) with a <span className="font-semibold text-[#5C1A28]">7.3 CGPA</span>. Learning deep semiconductor fundamentals while building practical software every day.
        </>
      ),
      meta: 'Class of 2027 · Electronics & Comm Eng',
    },
    {
      icon: Cpu,
      tag: 'What I Build',
      title: 'From Drones to Databases',
      content: (
        <>
          I don't fit neatly into just hardware or software. I build <span className="font-semibold text-[#400414]">custom FPV racing drones, ESP32 IoT devices, RF patch antennas</span>, as well as production-grade <span className="font-semibold text-[#400414]">Next.js web apps and vector search agents</span>.
        </>
      ),
      meta: 'Silicon Firmware · Modern Web · AI Agents',
    },
    {
      icon: Compass,
      tag: 'How I Think',
      title: 'Building by Doing',
      content: (
        <>
          I believe the best way to understand anything is to build it yourself from first principles — whether that means hand-soldering micro-drones or architecting full-stack monorepos.
        </>
      ),
      meta: 'First-Principles Engineering & Real Prototypes',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <SectionHeading
        label="A Bit About Me"
        title="Who I Am & What Drives Me"
        subtitle="An engineering student who loves getting his hands dirty with hardware and writing clean, thoughtful code."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Bio Narrative & Stats */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <GlassPanel className="p-8 sm:p-10">
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-semibold uppercase tracking-widest text-[#5C1A28]">
              <MapPin className="w-4 h-4 text-[#7A2436]" />
              JP Nagar, Bengaluru, India
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#400414] leading-snug mb-6">
              "I love taking things apart to see how they work, and putting them back together better."
            </h3>

            <p className="text-sm sm:text-base text-[#534344] leading-relaxed mb-4">
              {PERSONAL_INFO.bioParagraphs[0]}
            </p>

            <p className="text-sm sm:text-base text-[#534344] leading-relaxed mb-6">
              {PERSONAL_INFO.bioParagraphs[1]}
            </p>

            {/* Things I Love */}
            <div className="pt-4 border-t border-[#5C1A28]/15 mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#400414] mb-3 flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-[#5C1A28]" />
                Things I'm Passionate About:
              </div>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.interests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-xs font-medium text-[#400414] bg-[#FAF6EE] border border-[#5C1A28]/10"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3.5 pt-4 border-t border-[#5C1A28]/15">
              {PERSONAL_INFO.stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#FAF6EE]/80 border border-[#5C1A28]/10">
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
          <div className="space-y-6">
            {panels.map((panel, idx) => {
              const Icon = panel.icon;
              return (
                <motion.div
                  key={panel.tag}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  <GlassPanel
                    variant="card"
                    hoverEffect
                    className="p-8 sm:p-10 relative overflow-hidden"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-lg bg-[#5C1A28]/10 text-[#5C1A28]">
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
      </div>
    </section>
  );
}
