import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe } from 'lucide-react';
import { Badge } from '../common/Badge';

export const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const [imageLoaded, setImageLoaded] = useState(false);

  // Clean, authentic address bar label
  const getDisplayLocation = () => {
    if (project.liveUrl) {
      return project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');
    }
    return 'Website';
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

            {/* Address Bar Pill with Direct Link */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-bg-primary/80 border border-border/70 text-[11px] text-text-secondary hover:text-accent hover:border-accent/40 transition-colors max-w-[260px] truncate group/addr"
              title={`Open ${project.title} (${getDisplayLocation()})`}
            >
              <Globe className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="truncate">{getDisplayLocation()}</span>
              <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover/addr:opacity-100 transition-opacity shrink-0 text-accent" />
            </a>

            {/* Status Indicator */}
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-emerald-400 font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          </div>

          {/* Screenshot Container with Adaptive Aspect Ratio */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full aspect-[390/844] sm:aspect-[16/10] overflow-hidden bg-bg-primary cursor-pointer group/img"
            aria-label={`Open ${project.title} live website`}
          >
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
                className={`w-full h-full object-cover object-top transition-transform duration-700 ease-luxury group-hover/img:scale-[1.02] ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </picture>
          </a>
        </div>

        {/* Content Column (Cols 8-12) */}
        <div className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isEven ? '' : 'lg:order-1'}`}>
          <div>
            {/* Top Eyebrow & Status Badge */}
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="font-mono text-xs text-text-secondary uppercase tracking-widest font-semibold">
                {project.eyebrow}
              </span>

              <Badge variant="live" dot={true}>
                Live Website
              </Badge>
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-obsidian text-xs font-semibold hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-sm"
              >
                <span>Visit Live Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};
