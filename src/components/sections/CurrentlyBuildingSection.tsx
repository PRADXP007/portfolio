'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, CheckCircle2, FileSpreadsheet, Presentation, FileCode } from 'lucide-react';
import GlassPanel from '@/components/ui/GlassPanel';
import { FLAGSHIP_PROJECT } from '@/data/portfolioData';
import { NeuChip } from '@/components/ui/Neumorphic';

export default function CurrentlyBuildingSection() {
  const formats = [
    { name: 'Word (.docx)', icon: FileText, desc: 'Formatted reports & documents' },
    { name: 'PDF (Vector)', icon: FileCode, desc: 'Print-ready vector export' },
    { name: 'Excel (.xlsx)', icon: FileSpreadsheet, desc: 'Structured data & formulas' },
    { name: 'PowerPoint (.pptx)', icon: Presentation, desc: 'Slide decks & layouts' },
  ];

  return (
    <section id="currently-building" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <div className="h-[1px] flex-grow bg-white/15" />
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border border-white/15">
          <span className="w-2 h-2 rounded-full bg-white animate-ping" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-white/80">
            Currently Building
          </span>
        </div>
        <div className="h-[1px] flex-grow bg-white/15" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <GlassPanel
          variant="elevated"
          className="p-8 sm:p-12 lg:p-16 relative overflow-hidden border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.7)]"
        >
          {/* Subtle Ambient Light Bloom */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.03] pointer-events-none rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Narrative & Specs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md liquid-glass border border-white/20 text-white text-[11px] font-mono font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5 text-white/80" />
                Featured Project
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-[1.1] mb-4">
                {FLAGSHIP_PROJECT.title}
              </h3>

              <p className="text-base sm:text-lg font-serif italic text-white/70 mb-6">
                {FLAGSHIP_PROJECT.tagline}
              </p>

              <p className="text-sm sm:text-base text-white/65 leading-relaxed mb-8">
                {FLAGSHIP_PROJECT.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {FLAGSHIP_PROJECT.details?.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/65">
                    <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {FLAGSHIP_PROJECT.techStack.map((tech) => (
                  <NeuChip
                    key={tech}
                    label={tech}
                  />
                ))}
              </div>
            </div>

            {/* Right Col: Multi-Format Preview Visualizer */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl liquid-glass border border-white/15 p-6 shadow-inner relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-white/40" />
                    <span className="w-3 h-3 rounded-full bg-white/25" />
                    <span className="w-3 h-3 rounded-full bg-white/15" />
                  </div>
                  <span className="font-mono text-[11px] text-white/70 font-bold">
                    SUPPORTED FORMATS
                  </span>
                </div>

                {/* Formats Grid */}
                <div className="space-y-3">
                  {formats.map((fmt) => {
                    const FmtIcon = fmt.icon;
                    return (
                      <div
                        key={fmt.name}
                        className="p-3.5 rounded-xl liquid-glass border border-white/10 flex items-center justify-between hover:border-white/30 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-white/10 text-white">
                            <FmtIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-sans text-xs font-bold text-white">
                              {fmt.name}
                            </div>
                            <div className="text-[10px] text-white/50">{fmt.desc}</div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/10">
                          Ready
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Progress banner */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                  <span className="font-mono text-[11px]">Autonomous Research Pipeline</span>
                  <span className="font-mono text-[11px] font-bold text-white">Active Development</span>
                </div>
              </div>
            </div>
          </div>
        </GlassPanel>
      </motion.div>
    </section>
  );
}
