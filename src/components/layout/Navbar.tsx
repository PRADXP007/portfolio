'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useSmoothScroll } from '@/components/ui/SmoothScrollProvider';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Software', href: '#software' },
  { name: 'Hardware', href: '#hardware' },
  { name: 'Building', href: '#currently-building' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { getLenis } = useSmoothScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastState = false;

    const checkScroll = (y: number) => {
      const scrolled = y > 60;
      if (scrolled !== lastState) {
        lastState = scrolled;
        setIsScrolled(scrolled);
      }
    };

    const lenis = getLenis();
    if (lenis) {
      const scrollHandler = (e: { scroll: number }) => {
        checkScroll(e.scroll);
      };
      lenis.on('scroll', scrollHandler);
      return () => {
        lenis.off('scroll', scrollHandler);
      };
    } else {
      const windowHandler = () => {
        checkScroll(window.scrollY);
      };
      window.addEventListener('scroll', windowHandler, { passive: true });
      return () => {
        window.removeEventListener('scroll', windowHandler);
      };
    }
  }, [getLenis]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pointer-events-none ${
          isScrolled ? 'pt-3 sm:pt-4' : 'pt-6 sm:pt-8'
        }`}
      >
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto transition-all duration-500 flex items-center justify-between ${
            isScrolled
              ? 'w-[92%] sm:w-[88%] max-w-5xl rounded-full px-5 sm:px-8 py-3 liquid-glass-nav shadow-[0_20px_45px_-10px_rgba(43,13,20,0.08)]'
              : 'w-[94%] max-w-7xl px-4 sm:px-8 py-2 bg-transparent'
          }`}
        >
          {/* Brand */}
          <a
            href="#"
            className="font-serif text-2xl sm:text-3xl text-[#400414] font-medium tracking-tight hover:opacity-85 transition-opacity"
          >
            Pradeep H
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-sans text-xs font-semibold tracking-wider uppercase text-[#534344] hover:text-[#400414] transition-colors py-1 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#5C1A28] group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#5C1A28] text-[#FAF6EE] font-sans text-xs font-bold tracking-wider uppercase hover:bg-[#400414] transition-all duration-300 shadow-[0_4px_16px_rgba(92,26,40,0.2)] hover:scale-105 active:scale-95"
            >
              Connect
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#400414] hover:bg-[#E8DCC8]/60 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl liquid-glass-nav p-6 shadow-2xl border border-[#5C1A28]/20"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-sm font-semibold tracking-wider uppercase text-[#400414] py-2 border-b border-[#5C1A28]/10 hover:text-[#7A2436] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-[#5C1A28] text-[#FAF6EE] font-sans text-xs font-bold tracking-wider uppercase text-center shadow-md"
                >
                  Connect with Pradeep
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
