import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Code2, Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../common/Button';

export const Hero = () => {
  return (
    <section className="relative pt-6 pb-12 sm:pt-16 sm:pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Typographic Column (Cols 1-8) */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Status Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/80 bg-surface text-xs font-mono text-text-secondary mb-4 sm:mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
              <span className="tracking-wider uppercase font-semibold text-text-primary text-[11px] sm:text-xs">
                Available for Projects
              </span>
              <span className="text-border/60">/</span>
              <span className="text-text-secondary text-[11px] sm:text-xs">Jaipur, India</span>
            </motion.div>

            {/* Approved Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-[2.15rem] xs:text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-text-primary tracking-tight leading-[1.1] sm:leading-[1.08] max-w-3xl"
            >
              Building digital experiences that move businesses{' '}
              <span className="font-editorial italic font-normal text-accent inline-block">
                forward.
              </span>
            </motion.h1>

            {/* Approved Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3.5 sm:mt-6 text-sm sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl font-sans"
            >
              I design and develop modern websites, e-commerce experiences and custom web solutions that combine thoughtful design with reliable functionality.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-10 flex items-center gap-3 w-full sm:w-auto"
            >
              <Button
                href="#work"
                variant="primary"
                size="md"
                icon={ArrowDown}
                className="flex-1 sm:flex-initial text-xs sm:text-base py-3 sm:py-3.5 px-5 sm:px-7 rounded-xl font-semibold shadow-sm justify-center"
              >
                View My Work
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="md"
                icon={ArrowRight}
                className="flex-1 sm:flex-initial text-xs sm:text-base py-3 sm:py-3.5 px-4 sm:px-7 rounded-xl font-medium justify-center"
              >
                Let's Talk
              </Button>
            </motion.div>

            {/* Hero Metadata - Clean Editorial Specs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/60 w-full grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-5 text-xs font-mono"
            >
              <div>
                <span className="text-text-secondary/70 text-[10px] uppercase tracking-wider block mb-1">Education</span>
                <span className="text-text-primary font-medium text-xs sm:text-sm block">BCA @ Manipal Univ</span>
              </div>
              <div>
                <span className="text-text-secondary/70 text-[10px] uppercase tracking-wider block mb-1">Core Tech</span>
                <span className="text-text-primary font-medium text-xs sm:text-sm block">React &amp; Modern Web</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-text-secondary/70 text-[10px] uppercase tracking-wider block mb-1">Client Availability</span>
                <span className="text-accent font-medium text-xs sm:text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Open for Freelance Projects
                </span>
              </div>
            </motion.div>
          </div>

          {/* Asymmetric Interactive Creative Node (Cols 9-12) - Desktop Only */}
          <div className="hidden lg:flex lg:col-span-4 justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-xl"
            >
              {/* Card Terminal Header */}
              <div className="flex items-center justify-between border-b border-border pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <span className="text-[11px] font-mono text-text-secondary uppercase tracking-widest">
                  experience_node.jsx
                </span>
              </div>

              {/* Animated Geometric Vector Canvas */}
              <div className="relative h-56 w-full rounded-xl bg-bg-primary/90 border border-border/70 overflow-hidden flex items-center justify-center p-4">
                {/* Architectural Grid Lines */}
                <div
                  className="absolute inset-0 opacity-[0.12]"
                  style={{
                    backgroundImage: 'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                {/* Rotating Geometric Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
                  className="absolute w-36 h-36 rounded-full border border-dashed border-accent/40"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 42, ease: 'linear' }}
                  className="absolute w-48 h-48 rounded-xl border border-border/80"
                />

                {/* Central Focus Orb */}
                <div className="relative z-10 flex flex-col items-center justify-center p-4 rounded-xl bg-surface/90 border border-border backdrop-blur-sm text-center">
                  <Code2 className="w-8 h-8 text-accent mb-2" />
                  <span className="font-heading font-bold text-sm text-text-primary tracking-tight">
                    Custom Web Solutions
                  </span>
                  <span className="text-[11px] font-mono text-text-secondary mt-0.5">
                    Thoughtful Design • Clean Code
                  </span>
                </div>
              </div>

              {/* Verified Capabilities Ticker */}
              <div className="mt-5 space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg-secondary/70 border border-border/60">
                  <span className="text-text-secondary flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-accent" />
                    Specialization
                  </span>
                  <span className="text-text-primary font-medium">Bespoke &amp; E-Commerce</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg-secondary/70 border border-border/60">
                  <span className="text-text-secondary flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                    Standards
                  </span>
                  <span className="text-text-primary font-medium">Accessible • Responsive</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-bg-secondary/70 border border-border/60">
                  <span className="text-text-secondary flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    Status
                  </span>
                  <span className="text-emerald-400 font-medium">Open for Projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
