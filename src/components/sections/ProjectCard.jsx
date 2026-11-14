import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight, Lock, Globe, Code, Sparkles } from 'lucide-react';
import { Badge } from '../common/Badge';

export const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const [imageLoaded, setImageLoaded] = useState(false);

  // Neutral, authentic address bar label (no fabricated URLs)
  const getDisplayLocation = () => {
    if (project.liveUrl) {
      return project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
    }
    if (project.isConcept) {
      return 'Concept showcase';
    }
    return 'GitHub repository';
  };

  const getLocationIcon = () => {
    if (project.liveUrl) {
      return <Globe className="w-3 h-3 text-emerald-400 shrink-0" />;
    }
    if (project.isConcept) {
      return <Sparkles className="w-3 h-3 text-pink-400 shrink-0" />;
    }
    return <Code className="w-3 h-3 text-accent shrink-0" />;
  };

  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-border bg-surface overflow-hidden hover:border-text-secondary/50 transition-all duration-500 shadow-sm"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        {/* Genuine Browser Frame Viewport (Cols 1-7 or 1-6) */}
        <div
          className={`lg:col-span-7 flex flex-col border-b lg:border-b-0 bg-bg-secondary/40 ${
            isEven ? 'lg:border-r border-border' : 'lg:order-2 lg:border-l border-border'
          }`}
        >
          {/* Browser Window Header Chrome */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface/80 text-xs font-mono">
            {/* Window Traffic Lights */}
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
            </div>

            {/* Address Bar Pill with Authentic Target */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-bg-primary/80 border border-border/70 text-[11px] text-text-secondary max-w-[260px] truncate">
              {getLocationIcon()}
              <span className="truncate">{getDisplayLocation()}</span>
            </div>

            {/* Status Indicator */}
            <span className="text-[10px] uppercase tracking-wider text-text-secondary font-mono">
              {project.isLive ? 'Live' : project.isConcept ? 'Concept' : 'Repository'}
            </span>
          </div>

          {/* Screenshot Container with Adaptive Aspect Ratio */}
          <div className="relative w-full aspect-[390/844] sm:aspect-[16/10] overflow-hidden bg-bg-primary">
            {/* Skeleton placeholder during initial decode */}
            {!imageLoaded && (
              <div className="absolute inset-0 bg-bg-secondary animate-pulse" />
            )}

            <picture>
              {project.mobileImage && (
                <source
                  media="(max-width: 639px)"
                  srcSet={project.mobileImage}
                  type="image/webp"
                />
              )}
              <source srcSet={project.image} type="image/webp" />
              <img
                src={project.image}
                alt={project.imageAlt || `${project.title} interface preview`}
                loading="lazy"
                decoding="async"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
                className={`w-full h-full object-cover object-top transition-transform duration-700 ease-luxury group-hover:scale-[1.015] ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </picture>
          </div>
        </div>

        {/* Content Column (Cols 8-12) */}
        <div className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isEven ? '' : 'lg:order-1'}`}>
          <div>
            {/* Top Eyebrow & Status Badge */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="font-mono text-xs text-text-secondary uppercase tracking-widest font-semibold">
                {project.eyebrow}
              </span>

              {project.isLive && (
                <Badge variant="live" dot={true}>
                  Live Website
                </Badge>
              )}

              {project.isConcept && (
                <Badge variant="concept">
                  Concept Showcase
                </Badge>
              )}

              {!project.isLive && !project.isConcept && (
                <Badge variant="default">
                  Repository Available
                </Badge>
              )}
            </div>

            {/* Title */}
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            {/* Domain */}
            <p className="text-xs font-mono text-accent mt-1 mb-4">
              {project.domain}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans mb-6">
              {project.description}
            </p>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <Badge key={tag} variant="tech">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-6 border-t border-border flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-obsidian text-xs font-semibold hover:brightness-105 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>Visit Live Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border bg-bg-secondary text-text-primary text-xs font-mono hover:border-text-secondary hover:text-accent transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            )}

            {project.isConcept && (
              <span className="text-xs font-mono text-text-secondary italic">
                * Design showcase exploring interface & interaction patterns
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
