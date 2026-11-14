import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { SectionHeading } from '../common/SectionHeading';
import { techStackData } from '../../data/techStackData';
import { Terminal, Wrench } from 'lucide-react';

export const TechStack = () => {
  return (
    <section id="tech" className="py-12 sm:py-20 md:py-32 scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="03 // TECH STACK"
          title="Practical, battle-tested technologies."
          subtitle="A focused toolkit of core web standards, reactive frontend frameworks, and modern developer tooling. No inflated buzzwords—only tools I actively use."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Core Foundations (Cols 1-6) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b border-border">
              <Terminal className="w-4 h-4 text-accent" />
              <h3 className="font-heading font-bold text-base sm:text-lg text-text-primary">
                Core Web Languages & Frameworks
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2 xs:gap-2.5 sm:gap-3.5">
              {techStackData.core.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="p-2.5 xs:p-3 sm:p-4 rounded-xl border border-border bg-surface hover:border-accent/40 transition-colors flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <span className="font-heading font-bold text-xs xs:text-sm sm:text-base text-text-primary tracking-tight leading-snug">
                        {item.name}
                      </span>
                      <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-mono text-accent px-1.5 py-0.5 rounded bg-bg-secondary border border-border shrink-0">
                        {item.level}
                      </span>
                    </div>
                    <p className="text-[10px] xs:text-xs font-mono text-text-secondary leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {item.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Modern Ecosystem & Tooling (Cols 7-12) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b border-border">
              <Wrench className="w-4 h-4 text-accent" />
              <h3 className="font-heading font-bold text-base sm:text-lg text-text-primary">
                Workflow, Styling & Deployment
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2 xs:gap-2.5 sm:gap-3.5">
              {techStackData.modernEcosystem.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="p-2.5 xs:p-3 sm:p-4 rounded-xl border border-border bg-surface hover:border-accent/40 transition-colors flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <span className="font-heading font-bold text-xs xs:text-sm sm:text-base text-text-primary tracking-tight line-clamp-1">
                        {item.name}
                      </span>
                      <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-mono text-text-secondary px-1.5 py-0.5 rounded bg-bg-secondary/60 border border-border/70 shrink-0">
                        Tool
                      </span>
                    </div>
                    <p className="text-[10px] xs:text-xs font-mono text-text-secondary leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {item.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
