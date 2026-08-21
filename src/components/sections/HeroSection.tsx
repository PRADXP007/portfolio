'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import WebGLHeroShader from '@/components/ui/WebGLHeroShader';
import { NeuButton } from '@/components/ui/Neumorphic';
import confetti from 'canvas-confetti';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 80]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0.2]);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 75,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0A0A0A', '#404040', '#737373', '#D4D4D4'],
    });

    const link = document.createElement('a');
    link.href = '#contact';
    link.click();
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12 pt-32 pb-20 overflow-hidden">
      {/* WebGL Monochrome Hardware Light Shader Layer */}
      <WebGLHeroShader />

      {/* Hero Content Container */}
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="max-w-5xl mx-auto w-full text-center relative z-10"
      >
        {/* Subtitle Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass border border-black/10 mb-8 backdrop-blur-xl shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          <span className="font-sans text-xs font-semibold tracking-widest uppercase text-neutral-800">
            ECE Undergrad · Jain University, Bengaluru
          </span>
        </motion.div>

        {/* Display Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-neutral-900 tracking-tight font-normal leading-[1.05] mb-6"
        >
          Pradeep H
        </motion.h1>

        {/* Role Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-neutral-700 mb-6 max-w-3xl mx-auto"
        >
          Embedded Systems & Full-Stack Developer
        </motion.p>

        {/* Concise Human Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I build physical hardware and full-stack software—from tuned FPV drones and 2.4 GHz patch antennas to Next.js web applications and vector search tools.
        </motion.p>

        {/* Liquid Glass CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <NeuButton
            href="#contact"
            variant="maroon"
            icon={<Download className="w-4 h-4" />}
            onClick={handleDownloadResume}
          >
            Download Resume
          </NeuButton>

          <NeuButton
            href="#contact"
            variant="secondary"
            icon={<Mail className="w-4 h-4 text-neutral-700" />}
          >
            Get in Touch
          </NeuButton>
        </motion.div>
      </motion.div>

      {/* Scroll Cue Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-neutral-400">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-neutral-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
