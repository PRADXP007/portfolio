'use client';

import React from 'react';

export default function ScrollProgressBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none bg-transparent">
      <div
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-white/20 via-white/90 to-white/20 origin-left shadow-[0_0_12px_rgba(255,255,255,0.6)] will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
