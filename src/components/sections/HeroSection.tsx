'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Download, Mail, Sparkles, MapPin } from 'lucide-react';
import WebGLHeroShader from '@/components/ui/WebGLHeroShader';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 60]);
  const opacityParallax = useTransform(scrollY, [0, 400], [1, 0.3]);

  const handleDownloadResume = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#5C1A28', '#7A2436', '#FAF6EE', '#E8DCC8'],
    });

    const link = document.createElement('a');
    link.href = '#contact';
    link.click();
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12 pt-32 pb-20 overflow-hidden">
      {/* WebGL Hardware Shader Layer */}
      <WebGLHeroShader />

      {/* Hero Content Container */}
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="max-w-5xl mx-auto w-full text-center relative z-10"
      >
        {/* Friendly Location & Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8DCC8]/80 border border-[#5C1A28]/15 mb-8 backdrop-blur-md shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#5C1A28] animate-pulse" />
          <span className="font-sans text-xs font-semibold tracking-wider text-[#5C1A28]">
            3rd Year ECE @ Jain University · Bengaluru 🇮🇳
          </span>
        </motion.div>

        {/* Display Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#400414] tracking-tight font-normal leading-[1.05] mb-6"
        >
          Pradeep H
        </motion.h1>

        {/* Human Role & Passion Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#7A2436] mb-6 max-w-3xl mx-auto"
        >
          Hardware Tinkerer · Full-Stack Builder · FPV Pilot
        </motion.p>

        {/* Conversational Pitch */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-base sm:text-lg md:text-xl text-[#534344] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I build physical hardware with solder and silicon, craft fast web apps in Next.js, and experiment with AI agents. Always curious, constantly building.
        </motion.p>

        {/* Humanized CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <a
            href="#contact"
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#5C1A28] text-[#FAF6EE] font-sans text-xs font-bold tracking-widest uppercase hover:bg-[#400414] transition-all duration-300 shadow-[0_15px_35px_-10px_rgba(92,26,40,0.3)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4" />
            Get My Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-[#5C1A28]/25 text-[#400414] font-sans text-xs font-bold tracking-widest uppercase hover:bg-[#E8DCC8]/60 hover:border-[#5C1A28]/40 transition-all duration-300 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mail className="w-4 h-4 text-[#5C1A28]" />
            Let's Chat / Connect
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Cue Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="font-sans text-[10px] uppercase font-bold tracking-[0.2em] text-[#867274]">
          Explore My Work & Builds
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-[#5C1A28]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
