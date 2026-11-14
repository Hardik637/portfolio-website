import React, { useState, useRef } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { ThemeToggle } from '../common/ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileTriggerRef = useRef(null);

  const navLinks = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'tech', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  const sectionIds = navLinks.map(link => link.id);
  const activeId = useScrollSpy(sectionIds);

  return (
    <>
      <header className="sticky top-0 z-40 w-full pt-4 pb-2 transition-all duration-300">
        <Container>
          <nav
            aria-label="Primary Navigation"
            className="flex items-center justify-between px-4 sm:px-6 py-3 rounded-xl border border-border/70 bg-surface/75 backdrop-blur-md shadow-sm"
          >
            {/* Brand Monogram & Name */}
            <a
              href="#"
              className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1"
              aria-label="Hardik Agarwal Home"
            >
              <div className="w-8 h-8 rounded-lg bg-bg-primary border border-border flex items-center justify-center font-heading font-bold text-sm text-accent group-hover:border-accent transition-colors">
                HA
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm tracking-tight text-text-primary group-hover:text-accent transition-colors">
                  HARDIK AGARWAL
                </span>
                <span className="text-[10px] font-mono text-text-secondary tracking-wider uppercase -mt-0.5">
                  Web Developer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link, idx) => {
                const isActive = activeId === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-3.5 py-1.5 text-xs font-mono tracking-wide rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive
                        ? 'text-text-primary font-semibold'
                        : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <span className="opacity-40 mr-1">0{idx + 1}.</span>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Controls: Availability, Theme Toggle & CTA */}
            <div className="flex items-center gap-3">
              {/* Availability Status Chip (Desktop) */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-bg-secondary text-[11px] font-mono text-text-secondary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span>Available for freelance</span>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* CTA Link (Desktop) */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-accent text-obsidian font-semibold text-xs tracking-wide hover:brightness-105 active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                Let's Talk
              </a>

              {/* Mobile Menu Trigger */}
              <button
                ref={mobileTriggerRef}
                onClick={() => setMobileMenuOpen(prev => !prev)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-menu"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="md:hidden w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center text-text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      {/* Full-screen Mobile Menu with Keyboard Navigation and Focus Trap */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        activeId={activeId}
        triggerRef={mobileTriggerRef}
      />
    </>
  );
};
