import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../../data/projectsData';

export const SelectedWork = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Real Estate', 'Education & Web', 'E-Commerce'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="pt-4 pb-16 sm:py-20 md:py-32 scroll-mt-20">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
          <SectionHeading
            eyebrow="01 // SELECTED WORK"
            title="Engineered with craft, purpose & precision."
            subtitle="A curated selection of web platforms, frontend explorations, and concept showcases. Every project reflects authentic codebases and design work."
            className="mb-0"
          />

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl border border-border bg-surface w-full sm:w-fit overflow-x-auto no-scrollbar scroll-smooth">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3 sm:px-3.5 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  activeCategory === category
                    ? 'bg-accent text-obsidian font-semibold shadow-xs'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Project Cards Stack */}
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-14">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
