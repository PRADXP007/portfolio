'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface StackedCardRevealProps {
  children: React.ReactNode;
  className?: string;
}

export default function StackedCardReveal({
  children,
  className = '',
}: StackedCardRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Register plugin safely in client environment
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const container = containerRef.current;
    if (!container) return;

    // Use gsap.context for easy cleanup in Next.js App Router
    const ctx = gsap.context(() => {
      const cardElements = gsap.utils.toArray<HTMLElement>('.stacked-card-item', container);
      if (!cardElements.length) return;

      if (prefersReducedMotion) {
        // Accessible fallback: simple opacity reveal with no transforms
        cardElements.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                once: true,
              },
            }
          );
        });
        return;
      }

      // Initialize initial state for all cards
      cardElements.forEach((card, index) => {
        gsap.set(card, {
          opacity: 0,
          y: 80,
          scale: 1,
          transformOrigin: '50% 100%',
          willChange: 'transform, opacity',
          zIndex: 10 + index,
        });

        ScrollTrigger.create({
          trigger: card,
          start: 'top 80%',
          end: 'bottom 20%',
          once: true,
          onEnter: () => {
            // Animate current card entering and settling into place
            gsap.to(card, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: 'power3.out',
              overwrite: 'auto',
            });

            // Make preceding cards in the stack recede subtly
            for (let prevIdx = 0; prevIdx < index; prevIdx++) {
              const prevCard = cardElements[prevIdx];
              // Calculate subtle scale-down and depth based on distance from latest card
              const distance = index - prevIdx;
              const targetScale = Math.max(0.95, 1 - distance * 0.015);
              const targetOpacity = Math.max(0.78, 1 - distance * 0.08);

              gsap.to(prevCard, {
                scale: targetScale,
                opacity: targetOpacity,
                duration: 0.75,
                ease: 'power2.out',
                overwrite: 'auto',
              });
            }
          },
        });
      });
    }, container);

    return () => {
      ctx.revert(); // Reverts and kills all animations and ScrollTriggers on unmount
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {React.Children.map(children, (child, idx) => (
        <div key={idx} className="stacked-card-item h-full transition-shadow duration-300">
          {child}
        </div>
      ))}
    </div>
  );
}
