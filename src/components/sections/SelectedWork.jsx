import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../../data/projectsData';

export const SelectedWork = () => {
  return (
    <section id="work" className="pt-4 pb-16 sm:py-20 md:py-32 scroll-mt-20">
      <Container>
        {/* Section Header */}
        <div className="mb-8 sm:mb-12">
          <SectionHeading
            eyebrow="01 // SELECTED WORK"
            title="Engineered with craft, purpose & precision."
            subtitle="A curated selection of web platforms, frontend explorations, and concept showcases. Every project reflects authentic codebases and design work."
            className="mb-0"
          />
        </div>

        {/* Compact 2-in-1-row Grid on Mobile, Asymmetric Stack on Desktop */}
        <div className="grid grid-cols-2 gap-2.5 xs:gap-3 sm:gap-4 lg:flex lg:flex-col lg:gap-14">
          {projectsData.map((project, index) => (
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
