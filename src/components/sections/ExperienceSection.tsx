'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, CheckCircle2, Calendar } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassPanel from '@/components/ui/GlassPanel';
import { TIMELINE } from '@/data/portfolioData';
import { NeuChip } from '@/components/ui/Neumorphic';

export default function ExperienceSection() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <SectionHeading
        label="Experience"
        title="Experience & Credentials"
        subtitle="Internships, certifications, and technical milestones."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Side: Summary Note */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
          <GlassPanel className="p-8 sm:p-10">
            <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4">
              Work & Training
            </h3>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed mb-6">
              Practical experience from building design system components at ITC Infotech to completing Anthropic&apos;s developer certification on Claude and tool use.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-white/60">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              Bengaluru, India
            </div>
          </GlassPanel>
        </div>

        {/* Right Side: Vertical Timeline Items */}
        <div className="lg:col-span-8 relative pl-6 sm:pl-10">
          {/* Vertical Stem Line */}
          <div className="absolute left-[7px] sm:left-[11px] top-6 bottom-6 w-[2px] timeline-stem" />

          <div className="space-y-12 sm:space-y-16">
            {TIMELINE.map((item, idx) => {
              const isCert = item.type === 'certification';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.65, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Timeline Glass Node Marker */}
                  <div className="absolute -left-[27px] sm:-left-[39px] top-6 w-8 h-8 rounded-full bg-[#08080A] border-2 border-white/50 shadow-md flex items-center justify-center group-hover:scale-125 group-hover:border-white transition-all duration-300 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.9)]" />
                  </div>

                  <GlassPanel variant="card" hoverEffect className="p-8 sm:p-10">
                    {/* Header: Organization & Period */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3 pb-3 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                          {item.organization}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full liquid-glass border border-white/15 text-white/85">
                          {isCert ? (
                            <Award className="w-3 h-3 text-white/70" />
                          ) : (
                            <Briefcase className="w-3 h-3 text-white/70" />
                          )}
                          {item.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-white/50">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </div>
                    </div>

                    {/* Role Title */}
                    <h4 className="font-sans text-base sm:text-lg font-bold text-white/90 mb-4">
                      {item.role}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-white/65 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Highlights List */}
                    <div className="space-y-2 mb-6">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/65">
                          <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills Tag Cloud */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {item.skills.map((skill) => (
                        <NeuChip
                          key={skill}
                          label={skill}
                          className="text-[11px] py-1 px-2.5"
                        />
                      ))}
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
