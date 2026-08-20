'use client';

import React from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import StackedCardReveal from '@/components/ui/StackedCardReveal';
import { SOFTWARE_PROJECTS } from '@/data/portfolioData';

export default function SoftwareProjectsSection() {
  return (
    <section id="software" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <SectionHeading
        label="Software"
        title="Software Projects"
        subtitle="Full-stack web applications, developer tools, and graphics experiments built with TypeScript, Next.js, and Python."
      />

      <StackedCardReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SOFTWARE_PROJECTS.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </StackedCardReveal>
    </section>
  );
}
