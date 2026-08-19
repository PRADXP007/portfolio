'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Sparkles, Palette, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassPanel from '@/components/ui/GlassPanel';
import { SKILL_CATEGORIES } from '@/data/portfolioData';

const ICONS_MAP: Record<string, React.ElementType> = {
  Cpu: Cpu,
  Layers: Layers,
  Sparkles: Sparkles,
  Palette: Palette,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <SectionHeading
        label="Capabilities & Tooling"
        title="Technical Arsenal"
        subtitle="Curated proficiencies spanning low-level circuit dynamics to production cloud systems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {SKILL_CATEGORIES.map((category, idx) => {
          const Icon = ICONS_MAP[category.iconName] || Cpu;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassPanel
                variant="card"
                hoverEffect
                className="p-8 sm:p-10 h-full flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 pb-4 mb-4 border-b border-[#5C1A28]/10">
                    <div className="p-3 rounded-xl bg-[#5C1A28]/10 text-[#5C1A28]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#400414]">
                        {category.title}
                      </h3>
                      <p className="text-xs font-sans text-[#7A2436] font-semibold uppercase tracking-wider mt-0.5">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chips Grid */}
                <div className="flex flex-wrap gap-2.5 pt-4 mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="chip-glass inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#400414] hover:text-[#5C1A28] cursor-default"
                    >
                      <span>{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#FAF6EE] text-[#7A2436] border border-[#5C1A28]/10">
                          {skill.tag}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
