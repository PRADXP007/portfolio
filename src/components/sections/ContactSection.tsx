'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Send, Download, MapPin, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassPanel from '@/components/ui/GlassPanel';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { NeuButton, NeuInput, NeuTextarea, NeuIconWell } from '@/components/ui/Neumorphic';
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
      colors: ['#0A0A0A', '#404040', '#737373', '#D4D4D4'],
    });

    const resumeWindow = window.open('', '_blank');
    if (resumeWindow) {
      resumeWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Pradeep H — Resume</title>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto; color: #111111; background: #ffffff; line-height: 1.6; }
              h1 { color: #000000; margin-bottom: 4px; font-size: 28px; }
              h2 { color: #333333; border-bottom: 1px solid #e0e0e0; padding-bottom: 4px; margin-top: 24px; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; }
              p, li { font-size: 14px; color: #444444; }
              .meta { font-family: monospace; font-size: 12px; color: #666666; margin-bottom: 20px; }
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
            <h3 className="font-serif text-3xl text-neutral-900 mb-4">
              Reach Out Directly
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-8">
              I am open to embedded engineering, firmware, and full-stack developer roles. If you have a project or position that fits my background, my inbox is open.
            </p>

            {/* Email pill with glass copy button */}
            <div className="p-4 rounded-2xl liquid-glass border border-black/10 mb-6">
              <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-neutral-700" />
                Direct Email
              </div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono text-sm sm:text-base font-bold text-neutral-900 hover:text-black transition-colors truncate"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-btn-secondary text-xs font-semibold text-neutral-900 transition-all cursor-pointer"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>

            {/* Location & Links with Pure Glass Wells */}
            <div className="space-y-3.5 mb-8">
              <div className="flex items-center gap-3.5 text-sm text-neutral-700">
                <NeuIconWell size="sm" icon={<MapPin className="w-4 h-4 text-neutral-800" />} />
                <span>JP Nagar, Bengaluru, Karnataka, India</span>
              </div>

              <div className="flex items-center gap-3.5 text-sm text-neutral-700">
                <NeuIconWell
                  size="sm"
                  href={PERSONAL_INFO.github}
                  label="GitHub"
                  icon={<GithubIcon className="w-4 h-4 text-neutral-800" />}
                />
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors underline-offset-4 hover:underline"
                >
                  github.com/PRADXP007
                </a>
              </div>

              <div className="flex items-center gap-3.5 text-sm text-neutral-700">
                <NeuIconWell
                  size="sm"
                  href={PERSONAL_INFO.linkedin}
                  label="LinkedIn"
                  icon={<LinkedinIcon className="w-4 h-4 text-neutral-800" />}
                />
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors underline-offset-4 hover:underline"
                >
                  linkedin.com/in/pradeeph007
                </a>
              </div>
            </div>

            {/* Resume button */}
            <NeuButton
              variant="primary"
              onClick={handleDownloadResume}
              icon={<Download className="w-4 h-4" />}
              className="w-full"
            >
              Download Resume (PDF)
            </NeuButton>
          </GlassPanel>
        </motion.div>

        {/* Right Column: Contact Message Form with Inset Glass */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <GlassPanel variant="card" className="p-8 sm:p-12">
            <h3 className="font-serif text-2xl sm:text-3xl text-neutral-900 mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mb-8">
              Drop a note below and it will open directly in your mail client.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <NeuInput
                id="name"
                label="Name"
                type="text"
                required
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              />

              <NeuInput
                id="email"
                label="Email"
                type="email"
                required
                placeholder="your.email@example.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              />

              <NeuTextarea
                id="message"
                label="Message"
                required
                rows={4}
                placeholder="Write your note here..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />

              <NeuButton
                type="submit"
                variant="maroon"
                icon={<Send className="w-4 h-4" />}
                className="w-full"
              >
                Send Message
              </NeuButton>

              {submitted && (
                <div className="p-4 rounded-xl liquid-glass border border-black/10 text-xs text-neutral-900 font-medium text-center">
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
