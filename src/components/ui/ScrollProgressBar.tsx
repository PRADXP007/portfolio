'use client';

import React from 'react';

export default function ScrollProgressBar() {
  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[60] pointer-events-none bg-transparent">
      <div
        id="scroll-progress-bar"
        className="h-full bg-gradient-to-r from-neutral-300 via-neutral-900 to-neutral-400 origin-left shadow-[0_0_8px_rgba(0,0,0,0.3)] will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
