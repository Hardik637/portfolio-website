import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { SectionHeading } from '../common/SectionHeading';
import { GraduationCap, Code2, Layers, Cpu } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="03 // BACKGROUND & APPROACH"
          title="Bridging design aesthetics with reliable engineering."
          subtitle="A developer who understands that clean code, thoughtful typography, and intuitive UX are inseparable parts of a successful product."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Editorial Statement (Cols 1-7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-base sm:text-lg text-text-secondary leading-relaxed font-sans"
          >
            <p className="text-xl sm:text-2xl font-heading font-medium text-text-primary leading-snug">
              "I believe great websites don't just happen by accident. They require deliberate visual hierarchy, respect for the user's attention, and resilient code."
            </p>

            <p>
              I am a web developer focused on creating digital experiences that help businesses stand out and thrive online. Rather than relying on generic page builders or repetitive templates, I build custom web interfaces with modern frontend technologies like React and Tailwind CSS.
            </p>

            <p>
              My background involves designing and implementing varied web solutions—from luxury real estate showcases and full-scale e-commerce stores to storytelling education platforms. Each project is crafted with attention to responsive detail, smooth performance, and clean maintainable code.
            </p>

            {/* Core Values Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-border">
              <div className="p-4 rounded-xl border border-border bg-surface">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-accent" />
                  <span className="font-heading font-bold text-sm text-text-primary">
                    Visual Craft
                  </span>
                </div>
                <p className="text-xs text-text-secondary font-mono leading-relaxed">
                  Carefully proportioned grids, balanced whitespace, and crisp typography that immediately establish authority.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-border bg-surface">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-accent" />
                  <span className="font-heading font-bold text-sm text-text-primary">
                    Performance First
                  </span>
                </div>
                <p className="text-xs text-text-secondary font-mono leading-relaxed">
                  Sub-second loading, zero unnecessary script bloat, smooth 60fps scrolling, and responsive accessibility.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Educational Card & Verified Facts (Cols 8-12) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Education Spotlight Card */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-surface relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-bg-secondary border border-border flex items-center justify-center text-accent">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-accent uppercase tracking-widest block">
                    Higher Education
                  </span>
                  <h4 className="font-heading font-bold text-lg text-text-primary">
                    Bachelor of Computer Applications
                  </h4>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border/70 space-y-3 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Institution:</span>
                  <span className="text-text-primary font-medium text-right">Manipal University Jaipur</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Program:</span>
                  <span className="text-text-primary font-medium">BCA (Currently Pursuing)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Focus Areas:</span>
                  <span className="text-text-primary font-medium text-right">Data Structures, Web Dev, UI/UX</span>
                </div>
              </div>
            </div>

            {/* Development Mindset Card */}
            <div className="p-6 rounded-2xl border border-border bg-bg-secondary/70">
              <div className="flex items-center gap-2 mb-3">
                <Code2 className="w-4 h-4 text-accent" />
                <h4 className="font-heading font-bold text-sm text-text-primary">
                  Development Philosophy
                </h4>
              </div>
              <ul className="space-y-2 text-xs font-mono text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Authentic, verifiable implementations over exaggerated claims.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Modern component architecture built for real maintainability.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>Client-oriented collaboration and transparent milestone communication.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
