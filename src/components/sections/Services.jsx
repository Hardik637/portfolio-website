import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { SectionHeading } from '../common/SectionHeading';
import { servicesData } from '../../data/servicesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-bg-secondary/40 border-y border-border scroll-mt-20">
      <Container>
        <SectionHeading
          eyebrow="02 // CAPABILITIES & SERVICES"
          title="What I build for forward-thinking clients."
          subtitle="From concept to high-performing deployment, I specialize in building digital experiences that solve business challenges and establish a distinctive market presence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 rounded-2xl border border-border bg-surface hover:border-accent/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Number & Subtitle */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/60">
                  <span className="font-mono text-xs text-accent font-semibold tracking-widest">
                    SERVICE // {service.number}
                  </span>
                  <span className="text-xs font-mono text-text-secondary">
                    {service.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-2xl font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed font-sans mb-6">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6">
                  {service.deliverables.map(item => (
                    <div key={item} className="flex items-center gap-2 text-xs font-mono text-text-primary">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal For Note */}
              <div className="pt-4 border-t border-border/60 text-xs font-mono text-text-secondary">
                <span className="text-text-primary font-medium">Ideal for: </span>
                {service.idealFor}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
