import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className = '',
  editorialWord = null, // Word to italicize in Playfair Display
}) => {
  const isCentered = align === 'center';

  return (
    <div className={`mb-8 sm:mb-12 md:mb-16 ${isCentered ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-2 sm:mb-3.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-text-secondary font-medium">
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-[1.15] text-balance"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-2.5 sm:mt-4 text-sm sm:text-lg text-text-secondary leading-relaxed font-sans"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
