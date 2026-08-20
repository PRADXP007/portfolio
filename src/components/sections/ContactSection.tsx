'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Send, Download, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassPanel from '@/components/ui/GlassPanel';
import { PERSONAL_INFO } from '@/data/portfolioData';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadResume = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#5C1A28', '#7A2436', '#FAF6EE', '#E8DCC8'],
    });

    const resumeWindow = window.open('', '_blank');
    if (resumeWindow) {
      resumeWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Pradeep H — Resume</title>
            <style>
              body { font-family: 'Georgia', serif; padding: 40px; max-width: 800px; margin: 0 auto; color: #1e1b14; background: #faf6ee; line-height: 1.6; }
              h1 { color: #400414; margin-bottom: 4px; font-size: 28px; }
              h2 { color: #5c1a28; border-bottom: 1px solid #d9c1c3; padding-bottom: 4px; margin-top: 24px; font-size: 18px; text-transform: uppercase; letter-spacing: 1px; }
              p, li { font-family: sans-serif; font-size: 14px; color: #333; }
              .meta { font-family: monospace; font-size: 12px; color: #7a2436; margin-bottom: 20px; }
            </style>
          </head>
          <body>
            <h1>Pradeep H</h1>
            <div class="meta">B.Tech Electronics & Communication Engineering · Jain University Bengaluru · pradee5606@gmail.com · github.com/PRADXP007</div>
            <h2>Education</h2>
            <p><strong>Jain University, Bengaluru</strong> — B.Tech ECE (2023 - 2027) | CGPA: 7.3</p>
            <h2>Technical Skills</h2>
            <p><strong>Hardware & Embedded:</strong> FPV Drone Tuning, ESP32, Cadence Virtuoso, CST Studio Suite, Embedded C/C++, PCB Design, Arduino, RTOS.</p>
            <p><strong>Full-Stack & Web:</strong> Next.js, React, TypeScript, Tailwind CSS, Express, MongoDB, Socket.io, Node.js, PostgreSQL.</p>
            <p><strong>AI & Tools:</strong> LLM Integration, RAG (pgvector), Prompt Engineering, Python, Git, Figma.</p>
            <h2>Experience & Certifications</h2>
            <p><strong>Anthropic:</strong> AI Fluency for Builders Certification (Aug 2026)</p>
            <p><strong>ITC Infotech:</strong> UI/UX Design Intern (June - July 2025)</p>
            <h2>Featured Projects</h2>
            <p><strong>Paperrrrrr:</strong> AI document studio with live split-screen multi-format export.</p>
            <p><strong>CampusLoop:</strong> Monorepo social-commerce platform for college ecosystems.</p>
            <p><strong>Custom FPV Drone:</strong> High-performance carbon fiber racing drone with tuned PID dynamics.</p>
            <p><strong>2x2 Patch Antenna Array:</strong> 2.4 GHz microstrip array simulated in CST Studio with VBA automation.</p>
          </body>
        </html>
      `);
      resumeWindow.document.close();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    const subject = encodeURIComponent(`Portfolio Message from ${formState.name || 'Visitor'}`);
    const body = encodeURIComponent(`Hi Pradeep,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <SectionHeading
        label="Contact"
        title="Get in Touch"
        subtitle="Feel free to reach out for engineering roles, project inquiries, or technical discussions."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Direct Contact & Location Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <GlassPanel className="p-8 sm:p-10">
            <h3 className="font-serif text-3xl text-[#400414] mb-4">
              Reach Out Directly
            </h3>
            <p className="text-sm text-[#534344] leading-relaxed mb-8">
              I am open to embedded engineering, firmware, and full-stack developer roles. If you have a project or position that fits my background, my inbox is open.
            </p>

            {/* Email pill with copy button */}
            <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#5C1A28]/15 mb-6">
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#7A2436] font-semibold mb-1">
                Email
              </div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-sm sm:text-base font-bold text-[#400414] hover:text-[#5C1A28] transition-colors truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-[#E8DCC8] hover:bg-[#5C1A28] hover:text-[#FAF6EE] text-xs font-semibold text-[#400414] transition-colors"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Location & Links */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-[#534344]">
                <MapPin className="w-4 h-4 text-[#5C1A28]" />
                <span>JP Nagar, Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#534344]">
                <GithubIcon className="w-4 h-4 text-[#5C1A28]" />
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5C1A28] transition-colors underline-offset-4 hover:underline"
                >
                  github.com/PRADXP007
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#534344]">
                <LinkedinIcon className="w-4 h-4 text-[#5C1A28]" />
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5C1A28] transition-colors underline-offset-4 hover:underline"
                >
                  linkedin.com/in/pradeeph007
                </a>
              </div>
            </div>

            {/* Resume button */}
            <button
              onClick={handleDownloadResume}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAF6EE] border border-[#5C1A28]/25 text-[#400414] font-sans text-xs font-bold tracking-widest uppercase hover:bg-[#5C1A28] hover:text-[#FAF6EE] transition-all duration-300 shadow-sm"
            >
              <Download className="w-4 h-4" />
              Download Resume (PDF)
            </button>
          </GlassPanel>
        </motion.div>

        {/* Right Column: Contact Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <GlassPanel variant="card" className="p-8 sm:p-12">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#400414] mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-[#534344] mb-8">
              Drop a note below and it will open directly in your mail client.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#400414] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#FAF6EE]/80 border border-[#5C1A28]/15 focus:border-[#5C1A28] focus:ring-1 focus:ring-[#5C1A28] outline-none text-sm text-[#1E1B14] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#400414] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#FAF6EE]/80 border border-[#5C1A28]/15 focus:border-[#5C1A28] focus:ring-1 focus:ring-[#5C1A28] outline-none text-sm text-[#1E1B14] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#400414] mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your note here..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#FAF6EE]/80 border border-[#5C1A28]/15 focus:border-[#5C1A28] focus:ring-1 focus:ring-[#5C1A28] outline-none text-sm text-[#1E1B14] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#5C1A28] text-[#FAF6EE] font-sans text-xs font-bold tracking-widest uppercase hover:bg-[#400414] transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(92,26,40,0.35)]"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-[#E8DCC8] border border-[#5C1A28]/20 text-xs text-[#5C1A28] font-medium text-center">
                  Your email client has been opened with your message pre-filled.
                </div>
              )}
            </form>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
