'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Cpu, ArrowUpRight, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface HardwareCardProps {
  project: Project;
  index: number;
}

export default function HardwareCard({ project, index }: HardwareCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
  }, []);

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
        className="group relative flex flex-col h-full rounded-2xl liquid-glass-maroon p-6 sm:p-8 cursor-pointer border border-[#5C1A28]/20 overflow-hidden"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Schematic Grid Background */}
        <div className="absolute inset-0 blueprint-bg opacity-25 pointer-events-none" />

        {/* Ambient Corner Accent Lines */}
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
          <div className="absolute top-3 right-3 w-8 h-[1px] bg-[#5C1A28]/30" />
          <div className="absolute top-3 right-3 w-[1px] h-8 bg-[#5C1A28]/30" />
        </div>

        {/* Card Header & Schematic Tag */}
        <div className="relative z-10 flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#5C1A28]/10 border border-[#5C1A28]/25 text-[11px] font-mono font-semibold tracking-wider text-[#400414]">
              <Cpu className="w-3.5 h-3.5 text-[#5C1A28]" />
              {project.schematicTag || 'HW-SYS-00'}
            </span>
          </div>

          {project.metric && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[#5C1A28] px-2.5 py-0.5 rounded bg-[#FAF6EE]/80 border border-[#5C1A28]/15">
              <Activity className="w-3 h-3 text-[#7A2436]" />
              {project.metric}
            </span>
          )}
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
        <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#5C1A28]/15">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-[#400414] bg-[#F4EDE1]/80 border border-[#5C1A28]/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Detail Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E1B14]/65 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-2xl bg-[#FAF3E7] border border-[#5C1A28]/30 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none rounded-2xl" />

            <div className="relative z-10 flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold tracking-widest px-2 py-0.5 bg-[#5C1A28] text-[#FAF6EE] rounded">
                    {project.schematicTag}
                  </span>
                  {project.metric && (
                    <span className="text-xs font-mono text-[#5C1A28] font-semibold">
                      · {project.metric}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#400414]">
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

            <p className="relative z-10 text-base text-[#534344] leading-relaxed mb-6">
              {project.description}
            </p>

            {project.details && project.details.length > 0 && (
              <div className="relative z-10 mb-6">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#400414] mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#5C1A28]" />
                  Engineering & Fabrication Specs
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

            <div className="relative z-10 mb-6">
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-[#400414] mb-2.5">
                Hardware Toolchain & Protocols
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded text-xs font-mono font-medium text-[#400414] bg-[#E8DCC8] border border-[#5C1A28]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex justify-end pt-4 border-t border-[#5C1A28]/15">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2.5 rounded-lg bg-[#5C1A28] text-[#FAF6EE] text-xs font-bold tracking-wider uppercase hover:bg-[#400414] transition-colors shadow-sm"
              >
                Close Spec Sheet
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
