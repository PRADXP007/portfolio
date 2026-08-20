'use client';

import React from 'react';
import { useSmoothScroll } from '@/components/ui/SmoothScrollProvider';

export default function ScrollProgressBar() {
  const { progress } = useSmoothScroll();

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] pointer-events-none bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#5C1A28] via-[#7A2436] to-[#5C1A28] transition-transform duration-75 ease-out origin-left shadow-[0_0_8px_rgba(92,26,40,0.4)]"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
