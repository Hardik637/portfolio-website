import React, { useState, useEffect } from 'react';
import { Container } from './Container';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options = {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        setIstTime(formatter.format(now));
      } catch (e) {
        setIstTime('IST (UTC+5:30)');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-border bg-bg-secondary/60 pt-16 pb-12 mt-20 transition-colors">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded bg-surface border border-border flex items-center justify-center font-heading font-bold text-xs text-accent">
                HA
              </div>
              <span className="font-heading font-bold text-base tracking-tight text-text-primary">
                HARDIK AGARWAL
              </span>
            </div>
            <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
              Web Developer & Digital Experience Builder. Crafting modern digital experiences that combine thoughtful visual design with reliable, high-performing frontend engineering.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Manipal University Jaipur — BCA Candidate</span>
            </div>
          </div>

          {/* Direct Navigation */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-text-secondary font-semibold">
              Index
            </span>
            <ul className="flex flex-col gap-2 text-sm text-text-secondary">
              <li>
                <a href="#work" className="hover:text-accent transition-colors">01. Selected Work</a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">02. Background & Approach</a>
              </li>
              <li>
                <a href="#tech" className="hover:text-accent transition-colors">03. Tech Stack</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">04. Start a Project</a>
              </li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-text-secondary font-semibold">
              Connect
            </span>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://github.com/Hardik637"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
              >
                <Github className="w-4 h-4 text-accent" />
                <span>github.com/Hardik637</span>
              </a>

              <a
                href="https://www.linkedin.com/in/hardik-agarwal-b738802b8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4 text-accent" />
                <span>linkedin.com/in/hardik-agarwal-b738802b8</span>
              </a>

              <a
                href="mailto:hardikagarwal@gmail.com"
                className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span>hardikagarwal@gmail.com</span>
              </a>
            </div>

            {/* Local Time Widget */}
            <div className="mt-4 p-3 rounded-lg border border-border bg-surface flex items-center justify-between text-xs font-mono">
              <span className="text-text-secondary">Local Time (India):</span>
              <span className="text-accent font-medium">{istTime || 'Loading...'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Colophon & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-secondary">
          <p>© {new Date().getFullYear()} Hardik Agarwal. Built with React, Tailwind CSS & Motion.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-accent transition-colors cursor-pointer group"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
