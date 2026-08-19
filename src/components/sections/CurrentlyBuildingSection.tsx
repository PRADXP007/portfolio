'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, CheckCircle2, ArrowRight, Layers, FileSpreadsheet, Presentation, FileCode } from 'lucide-react';
import GlassPanel from '@/components/ui/GlassPanel';
import { FLAGSHIP_PROJECT } from '@/data/portfolioData';

export default function CurrentlyBuildingSection() {
  const formats = [
    { name: 'Word (.docx)', icon: FileText, desc: 'Academic & Executive Reports' },
    { name: 'PDF (Vector)', icon: FileCode, desc: 'Pixel-Perfect Print Ready' },
    { name: 'Excel (.xlsx)', icon: FileSpreadsheet, desc: 'Calculated Financial Models' },
    { name: 'PowerPoint (.pptx)', icon: Presentation, desc: 'Editorial Slide Decks' },
  ];

  return (
    <section id="currently-building" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-[1px] flex-grow bg-[#5C1A28]/20" />
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8DCC8] border border-[#5C1A28]/20">
          <span className="w-2 h-2 rounded-full bg-[#5C1A28] animate-ping" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-[#5C1A28]">
            Active Flagship Project · In Progress
          </span>
        </div>
        <div className="h-[1px] flex-grow bg-[#5C1A28]/20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassPanel
          variant="elevated"
          className="p-8 sm:p-12 lg:p-16 relative overflow-hidden border-2 border-[#5C1A28]/25 shadow-2xl"
        >
          {/* Ambient Lighting Gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#5C1A28]/10 via-[#9D3F50]/5 to-transparent pointer-events-none rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Narrative & Specs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#5C1A28] text-[#FAF6EE] text-[11px] font-mono font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Next-Gen Agentic Document Studio
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#400414] leading-[1.1] mb-4">
                {FLAGSHIP_PROJECT.title}
              </h3>

              <p className="text-base sm:text-lg font-serif italic text-[#7A2436] mb-6">
                {FLAGSHIP_PROJECT.tagline}
              </p>

              <p className="text-sm sm:text-base text-[#534344] leading-relaxed mb-8">
                {FLAGSHIP_PROJECT.description}
              </p>

              {/* Engineering Highlights */}
              <div className="space-y-3 mb-8">
                {FLAGSHIP_PROJECT.details?.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#534344]">
                    <CheckCircle2 className="w-4 h-4 text-[#5C1A28] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#5C1A28]/15">
                {FLAGSHIP_PROJECT.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-xs font-mono font-semibold text-[#400414] bg-[#FAF6EE] border border-[#5C1A28]/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Col: Interactive Multi-Format Preview Visualizer */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#F4EDE1] border border-[#5C1A28]/20 p-6 shadow-inner relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#5C1A28]/15">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#BA1A1A]/70" />
                    <span className="w-3 h-3 rounded-full bg-[#E08850]/70" />
                    <span className="w-3 h-3 rounded-full bg-[#5C1A28]/70" />
                  </div>
                  <span className="font-mono text-[11px] text-[#5C1A28] font-bold">
                    CANVAS ENGINE v2.4
                  </span>
                </div>

                {/* Formats Grid */}
                <div className="space-y-3">
                  {formats.map((fmt, i) => {
                    const FmtIcon = fmt.icon;
                    return (
                      <div
                        key={fmt.name}
                        className="p-3.5 rounded-xl bg-[#FAF6EE] border border-[#5C1A28]/10 flex items-center justify-between hover:border-[#5C1A28]/30 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-[#5C1A28]/10 text-[#5C1A28]">
                            <FmtIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-sans text-xs font-bold text-[#400414]">
                              {fmt.name}
                            </div>
                            <div className="text-[10px] text-[#867274]">{fmt.desc}</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#E8DCC8] text-[#5C1A28]">
                          Typeset Ready
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Progress banner */}
                <div className="mt-6 pt-4 border-t border-[#5C1A28]/15 flex items-center justify-between text-xs text-[#534344]">
                  <span className="font-mono text-[11px]">Autonomous Web Research Pipeline</span>
                  <span className="font-mono text-[11px] font-bold text-[#5C1A28]">Active Stage</span>
                </div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </motion.div>
    </section>
  );
}
