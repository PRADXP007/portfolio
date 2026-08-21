'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-16 md:mb-20 ${isCenter ? 'text-center' : ''} ${className}`}
    >
      <div className={`flex items-center gap-3 mb-3 ${isCenter ? 'justify-center' : ''}`}>
        <div className="h-[1px] w-6 bg-black/20" />
        <span className="font-sans text-[11px] md:text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">
          {label}
        </span>
        <div className="h-[1px] w-6 bg-black/20" />
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-neutral-900 tracking-tight font-normal leading-[1.15] mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="font-sans text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
