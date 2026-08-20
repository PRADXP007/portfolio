'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUpRight, CheckCircle2, Sparkles, X } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { Project } from '@/data/portfolioData';
import { NeuChip, NeuIconWell, NeuButton } from '@/components/ui/Neumorphic';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
  }, []);

  // 3D Tilt calculation (only active when hovered)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.2 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const isFlagship = project.category === 'flagship' || project.id === 'paperrrrrr';

  return (
    <>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: isHovered ? 1000 : undefined,
          rotateX: isHovered && !reducedMotion ? rotateX : 0,
          rotateY: isHovered && !reducedMotion ? rotateY : 0,
        }}
        className={`group relative flex flex-col h-full rounded-2xl liquid-glass-card p-6 sm:p-8 cursor-pointer ${
          isFlagship ? 'border-2 border-[#5C1A28]/30 shadow-md' : ''
        }`}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Ambient Warm Glow on Hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5C1A28]/6 via-transparent to-transparent pointer-events-none transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Card Header & Tag */}
        <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            {isFlagship ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5C1A28] text-[#FAF6EE] text-[11px] font-semibold tracking-wider uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FAF6EE] animate-ping" />
                Featured Flagship
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full neu-flat text-[11px] font-semibold tracking-wider uppercase text-[#5C1A28]">
                <Sparkles className="w-3 h-3 text-[#7A2436]" />
                Software System
              </span>
            )}
          </div>

          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            {project.githubUrl && (
              <NeuIconWell
                size="sm"
                href={project.githubUrl}
                label={`GitHub repository for ${project.title}`}
                icon={<GithubIcon className="w-3.5 h-3.5" />}
              />
            )}
            {project.liveUrl && (
              <NeuIconWell
                size="sm"
                href={project.liveUrl}
                label={`Live demo for ${project.title}`}
                icon={<ExternalLink className="w-3.5 h-3.5" />}
              />
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="relative z-10 mb-3">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#400414] group-hover:text-[#5C1A28] transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-[#5C1A28]/40 group-hover:text-[#5C1A28] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#7A2436] mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="relative z-10 text-sm text-[#534344] leading-relaxed mb-6 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Neumorphic Tech Stack Chips */}
        <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#5C1A28]/10">
          {project.techStack.map((tech) => (
            <NeuChip
              key={tech}
              label={tech}
              className="text-[11px] py-1 px-2.5"
            />
          ))}
        </div>
      </motion.div>

      {/* Detail Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1B14]/60 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-2xl bg-[#FFF8EF] border border-[#5C1A28]/20 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#5C1A28]">
                  {project.tagline}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#400414] mt-1">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl neu-raised text-[#534344] hover:text-[#400414] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-base text-[#534344] leading-relaxed mb-6">
              {project.description}
            </p>

            {project.details && project.details.length > 0 && (
              <div className="mb-6">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#400414] mb-3">
                  Key Engineering Highlights
                </h4>
                <ul className="space-y-2.5">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#534344]">
                      <CheckCircle2 className="w-4 h-4 text-[#5C1A28] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-6">
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#400414] mb-2.5">
                Technologies & Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <NeuChip
                    key={tech}
                    label={tech}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#5C1A28]/10">
              {project.githubUrl && (
                <NeuButton
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  icon={<GithubIcon className="w-4 h-4" />}
                >
                  GitHub Repository
                </NeuButton>
              )}
              {project.liveUrl && (
                <NeuButton
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="maroon"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Live System
                </NeuButton>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
