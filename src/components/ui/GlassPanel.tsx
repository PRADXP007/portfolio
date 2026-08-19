'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassPanelProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'card' | 'maroon' | 'elevated';
  hoverEffect?: boolean;
}

export default function GlassPanel({
  children,
  className = '',
  variant = 'default',
  hoverEffect = false,
  ...props
}: GlassPanelProps) {
  const variantStyles = {
    default: 'liquid-glass',
    card: 'liquid-glass-card',
    maroon: 'liquid-glass-maroon',
    elevated: 'bg-[rgba(255,248,239,0.85)] backdrop-blur-2xl border border-[#5C1A28]/20 shadow-[0_30px_70px_-15px_rgba(43,13,20,0.08)]',
  };

  return (
    <motion.div
      className={`relative rounded-2xl ${variantStyles[variant]} ${
        hoverEffect ? 'hover:-translate-y-1 hover:border-[#5C1A28]/25 transition-all duration-300' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
