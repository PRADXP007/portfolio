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
    maroon: 'liquid-glass border-white/20',
    elevated: 'liquid-glass border-white/25 shadow-[0_30px_70px_rgba(0,0,0,0.6)]',
  };

  return (
    <motion.div
      className={`relative rounded-2xl ${variantStyles[variant]} ${
        hoverEffect ? 'hover:-translate-y-1 hover:border-white/30 transition-all duration-300' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
