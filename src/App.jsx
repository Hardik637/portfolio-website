import React from 'react';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { SelectedWork } from './components/sections/SelectedWork';
import { About } from './components/sections/About';
import { TechStack } from './components/sections/TechStack';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';

export const App = () => {
  return (
    <ThemeProvider>
      {/* MotionConfig reducedMotion="user" respects system accessibility preferences */}
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent selection:text-obsidian flex flex-col font-sans transition-colors duration-300">
          {/* Skip to Content link for Keyboard & Screen Reader Accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent text-obsidian font-semibold rounded-md text-sm shadow-md"
          >
            Skip to main content
          </a>

          {/* Global Floating Navigation */}
          <Navbar />

          {/* Main Content Area */}
          <main id="main-content" className="flex-1">
            <Hero />
            <SelectedWork />
            <About />
            <TechStack />
            <Contact />
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </MotionConfig>
    </ThemeProvider>
  );
};

export default App;
