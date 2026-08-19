'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUpRight, CheckCircle2, Sparkles, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { Project } from '@/data/portfolioData';

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

  // 3D Tilt calculation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
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
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{
          duration: 0.6,
          delay: (index % 3) * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
        }}
        className={`group relative flex flex-col h-full rounded-2xl liquid-glass-card p-6 sm:p-8 cursor-pointer transition-all duration-300 ${
          isFlagship ? 'border-2 border-[#5C1A28]/30 shadow-lg' : ''
        }`}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Ambient Warm Glow on Hover */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5C1A28]/8 via-[#FAF6EE]/40 to-transparent pointer-events-none transition-opacity duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Card Header & Tag */}
        <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            {isFlagship ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5C1A28] text-[#FAF6EE] text-[11px] font-semibold tracking-wider uppercase shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FAF6EE] animate-ping" />
                Currently Building · Flagship
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DCC8]/70 border border-[#5C1A28]/10 text-[11px] font-semibold tracking-wider uppercase text-[#5C1A28]">
                <Sparkles className="w-3 h-3 text-[#7A2436]" />
                Software System
              </span>
            )}
          </div>

          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="p-2 rounded-full text-[#534344] hover:text-[#400414] hover:bg-[#E8DCC8]/80 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="p-2 rounded-full text-[#534344] hover:text-[#400414] hover:bg-[#E8DCC8]/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
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

        {/* Tech Stack Chips */}
        <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#5C1A28]/10">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="chip-glass px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-[#400414]"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Detail Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1B14]/60 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
                className="p-2 rounded-full hover:bg-[#E8DCC8] text-[#534344] transition-colors"
                aria-label="Close modal"
              >
                ✕
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
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-semibold text-[#400414] bg-[#E8DCC8]/80 border border-[#5C1A28]/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#5C1A28]/10">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#5C1A28]/20 text-[#400414] font-medium text-xs tracking-wider uppercase hover:bg-[#E8DCC8] transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  GitHub Repository
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#5C1A28] text-[#FAF6EE] font-medium text-xs tracking-wider uppercase hover:bg-[#400414] transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live System
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
