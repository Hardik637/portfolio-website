import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Mail } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';

export const MobileMenu = ({ isOpen, onClose, navLinks, activeId }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-xl flex flex-col justify-between p-6 md:hidden"
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-lg tracking-tight text-text-primary">
                HARDIK AGARWAL
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-surface border border-border text-accent">
                DEV
              </span>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Staggered Navigation Links */}
          <nav className="flex flex-col gap-5 my-auto">
            {navLinks.map((link, idx) => {
              const isActive = activeId === link.id;
              return (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className={`group flex items-baseline justify-between py-2 border-b border-border/40 text-2xl font-heading font-semibold transition-colors ${
                    isActive ? 'text-accent' : 'text-text-primary hover:text-accent'
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-text-secondary">0{idx + 1}.</span>
                    <span>{link.label}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-accent" />}
                </motion.a>
              );
            })}
          </nav>

          {/* Bottom Drawer Actions */}
          <div className="border-t border-border pt-6 flex flex-col gap-4">
            <a
              href="mailto:hardikagarwal@gmail.com"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-accent text-obsidian font-semibold text-sm"
            >
              <Mail className="w-4 h-4" />
              Let's Talk — hardikagarwal@gmail.com
            </a>

            <div className="flex items-center justify-between text-xs font-mono text-text-secondary pt-2">
              <span>Manipal University Jaipur (BCA)</span>
              <span>IST (India)</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
