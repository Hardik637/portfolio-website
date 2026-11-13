import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { SectionHeading } from '../common/SectionHeading';
import { CopyEmailButton } from '../common/CopyEmailButton';
import { Github, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 scroll-mt-20">
      <Container>
        <div className="relative rounded-3xl border border-border bg-surface p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Subtle background grid */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(var(--color-accent) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="font-mono text-xs uppercase tracking-widest text-text-secondary font-medium">
                05 // GET IN TOUCH
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-[1.12] mb-6">
              Have a project in mind? Let's build something{' '}
              <span className="font-editorial italic font-normal text-accent">
                meaningful.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-sans mb-10">
              I am currently available for freelance projects, website builds, e-commerce storefronts, and collaborative frontend engineering. Reach out via email or connect on LinkedIn to discuss requirements, timelines, and ideas.
            </p>

            {/* Confirmed Email with One-Click Copy & Mailto */}
            <div className="mb-12">
              <span className="text-xs font-mono text-text-secondary uppercase tracking-widest block mb-3 font-semibold">
                Direct Email Inquiries:
              </span>
              <CopyEmailButton email="hardikagarwal@gmail.com" />
            </div>

            {/* Professional Profiles */}
            <div className="pt-8 border-t border-border flex flex-wrap items-center gap-6 text-sm font-mono">
              <span className="text-text-secondary text-xs uppercase tracking-wider">
                Professional Profiles:
              </span>

              <a
                href="https://www.linkedin.com/in/hardik-agarwal-b738802b8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text-primary hover:text-accent transition-colors"
              >
                <Linkedin className="w-4 h-4 text-accent" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-secondary" />
              </a>

              <a
                href="https://github.com/Hardik637"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-text-primary hover:text-accent transition-colors"
              >
                <Github className="w-4 h-4 text-accent" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-secondary" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
