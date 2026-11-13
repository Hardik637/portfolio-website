import React, { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const CopyEmailButton = ({ email = 'hardikagarwal@gmail.com', className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older or unsecured contexts
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className={`inline-flex flex-col sm:flex-row items-stretch sm:items-center gap-3 ${className}`}>
      {/* Interactive Copy Pill */}
      <button
        onClick={handleCopy}
        type="button"
        className="group relative flex items-center justify-between sm:justify-start gap-3 px-5 py-3.5 rounded-lg border border-border bg-surface text-text-primary hover:border-accent hover:bg-surface/80 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
        aria-label="Copy email address to clipboard"
      >
        <div className="flex items-center gap-2.5">
          <Mail className="w-4 h-4 text-text-secondary group-hover:text-accent transition-colors" />
          <span className="font-mono text-sm tracking-tight">{email}</span>
        </div>

        <div className="flex items-center justify-center w-7 h-7 rounded-md bg-bg-secondary border border-border group-hover:border-accent/40 text-text-secondary group-hover:text-accent transition-colors">
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Check className="w-3.5 h-3.5 text-accent" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Copy className="w-3.5 h-3.5" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Confirmation Pill Floating Toast */}
        <AnimatePresence>
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-obsidian text-xs font-semibold rounded-md shadow-md pointer-events-none whitespace-nowrap flex items-center gap-1"
            >
              <Check className="w-3 h-3 text-obsidian" />
              Copied to clipboard!
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Direct Mailto Action */}
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center justify-center px-4 py-3.5 rounded-lg border border-border text-xs font-mono tracking-wider uppercase text-text-secondary hover:text-text-primary hover:border-text-secondary transition-all"
      >
        Open in Mail Client →
      </a>
    </div>
  );
};
