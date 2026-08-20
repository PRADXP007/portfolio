'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Cpu, ArrowUpRight, CheckCircle2, ShieldCheck, Activity, X, Sparkles } from 'lucide-react';
import { Project } from '@/data/portfolioData';
import { NeuChip, NeuButton } from '@/components/ui/Neumorphic';

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

  const isFlagship = project.isFlagship || project.id === 'fpv-drone';

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
        className={`group relative flex flex-col h-full rounded-2xl liquid-glass-card p-6 sm:p-8 cursor-pointer border overflow-hidden ${
          isFlagship
            ? 'border-white/35 shadow-[0_0_35px_rgba(255,255,255,0.07)] md:col-span-2'
            : 'border-white/15'
        }`}
        onClick={() => setIsModalOpen(true)}
      >
        {/* Schematic Grid Background (Monochrome) */}
        <div className="absolute inset-0 blueprint-bg opacity-30 pointer-events-none" />

        {/* Ambient Corner Accent Lines */}
        <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
          <div className="absolute top-3 right-3 w-8 h-[1px] bg-white/20" />
          <div className="absolute top-3 right-3 w-[1px] h-8 bg-white/20" />
        </div>

        {/* Card Header & Status Badge */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-2">
            {/* Status Badge */}
            {isFlagship ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 border border-white/35 text-white text-[11px] font-semibold tracking-wider uppercase shadow-[0_0_12px_rgba(255,255,255,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                {project.status || 'Active — Final Year Project'}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full liquid-glass border border-white/15 text-[11px] font-semibold tracking-wider uppercase text-white/80">
                <span className={`w-1.5 h-1.5 rounded-full ${project.status?.includes('Active') ? 'bg-white animate-pulse' : 'bg-white/50'}`} />
                {project.status || 'In Development'}
              </span>
            )}

            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md liquid-glass border border-white/10 text-[10px] font-mono text-white/70">
              <Cpu className="w-3 h-3 text-white/70" />
              {project.schematicTag}
            </span>
          </div>

          {project.metric && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-white/80 px-2.5 py-0.5 rounded-lg liquid-glass border border-white/10">
              <Activity className="w-3 h-3 text-white/60" />
              {project.metric}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <div className="relative z-10 mb-3">
          <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-white transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="relative z-10 text-sm text-white/65 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* If Flagship: Explicit Key Feature Spec Bullets on Card */}
        {isFlagship && project.details && (
          <div className="relative z-10 mb-6 p-4 rounded-xl liquid-glass border border-white/10 space-y-2">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-white/80 mb-2">
              Key Engineering Features
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.details.map((spec, sIdx) => (
                <div key={sIdx} className="flex items-center gap-2 text-xs text-white/75">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white/80 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pure Liquid Glass Tech Stack Chips */}
        <div className="relative z-10 flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-2xl bg-[#0E0E12] border border-white/20 p-6 sm:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 blueprint-bg opacity-15 pointer-events-none rounded-2xl" />

            <div className="relative z-10 flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold tracking-widest px-2 py-0.5 bg-white/15 text-white border border-white/20 rounded">
                    {project.status}
                  </span>
                  <span className="text-xs font-mono text-white/50">
                    · {project.schematicTag}
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl text-white">
                  {project.title}
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl liquid-glass border border-white/15 text-white/70 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="relative z-10 text-base text-white/70 leading-relaxed mb-6">
              {project.description}
            </p>

            {project.details && project.details.length > 0 && (
              <div className="relative z-10 mb-6">
                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-white/80" />
                  Engineering & Technical Specifications
                </h4>
                <ul className="space-y-2.5">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-white/70">
                      <CheckCircle2 className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="relative z-10 mb-6">
              <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-white mb-2.5">
                Hardware Toolchain & Architecture
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

            <div className="relative z-10 flex justify-end pt-4 border-t border-white/10">
              <NeuButton
                variant="maroon"
                onClick={() => setIsModalOpen(false)}
              >
                Close Spec Sheet
              </NeuButton>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
