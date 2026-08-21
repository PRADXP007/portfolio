'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Sparkles, Palette } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassPanel from '@/components/ui/GlassPanel';
import { NeuChip } from '@/components/ui/Neumorphic';
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
        label="Skills"
        title="Technical Skills"
        subtitle="Tools, languages, and hardware equipment I use regularly."
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
                  <div className="flex items-center gap-4 pb-4 mb-4 border-b border-black/10">
                    <div className="p-3 rounded-xl liquid-glass border border-black/10 text-neutral-900">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900">
                        {category.title}
                      </h3>
                      <p className="text-xs font-sans text-neutral-500 font-semibold uppercase tracking-wider mt-0.5">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pure Liquid Glass Chips Grid */}
                <div className="flex flex-wrap gap-2.5 pt-4 mt-auto">
                  {category.skills.map((skill) => (
                    <NeuChip
                      key={skill.name}
                      label={skill.name}
                      tag={skill.tag}
                    />
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
