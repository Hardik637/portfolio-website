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
      className="group relative rounded-xl sm:rounded-2xl border border-border bg-surface overflow-hidden hover:border-text-secondary/50 transition-all duration-300 shadow-sm flex flex-col h-full"
    >
      {/* ─────────────────────────────────────────────────────────────
          1. COMPACT 2-IN-1-ROW MOBILE SHOWCASE (Visible on < lg screens)
         ───────────────────────────────────────────────────────────── */}
      <div className="lg:hidden flex flex-col h-full">
        {/* Clickable Image Preview */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full aspect-[16/10] bg-bg-secondary overflow-hidden group/img cursor-pointer border-b border-border/60"
          aria-label={`Open ${project.title} live website`}
        >
          {/* Top Live Badge */}
          <div className="absolute top-1.5 left-1.5 xs:top-2 xs:left-2 z-10 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-obsidian/85 border border-border/80 text-[9px] xs:text-[10px] font-mono text-emerald-400 backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Live</span>
          </div>

          {/* Top Right External Arrow */}
          <div className="absolute top-1.5 right-1.5 xs:top-2 xs:right-2 z-10 p-1 rounded-full bg-obsidian/80 text-text-secondary border border-border/80">
            <ArrowUpRight className="w-2.5 h-2.5 text-accent" />
          </div>

          {/* Screenshot Image */}
          <img
            src={project.image}
            alt={project.imageAlt || `${project.title} interface preview`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
          />
        </a>

        {/* Compact Card Content Area */}
        <div className="p-2.5 xs:p-3 sm:p-4 flex flex-col flex-1 justify-between gap-2">
          <div>
            {/* Category Eyebrow & Number */}
            <div className="flex items-center justify-between text-[9px] xs:text-[10px] font-mono text-text-secondary uppercase tracking-wider mb-1">
              <span className="truncate max-w-[80%]">{project.category}</span>
              <span className="text-accent font-semibold">{project.number}</span>
            </div>

            {/* Title */}
            <h3 className="font-heading text-xs xs:text-sm sm:text-base font-bold text-text-primary tracking-tight line-clamp-1 group-hover:text-accent transition-colors">
              {project.title}
            </h3>

            {/* Domain / Subtitle */}
            <p className="text-[10px] xs:text-[11px] font-mono text-accent/90 line-clamp-1 mt-0.5">
              {project.domain}
            </p>

            {/* Compact Tech Tags */}
            <div className="flex flex-wrap gap-1 mt-1.5">
              {project.tags.slice(0, 2).map(tag => (
                <span
                  key={tag}
                  className="px-1.5 py-0.5 text-[8px] xs:text-[9px] font-mono rounded bg-bg-secondary text-text-secondary border border-border/50 truncate max-w-[80px]"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 2 && (
                <span className="px-1 py-0.5 text-[8px] xs:text-[9px] font-mono text-text-secondary/70">
                  +{project.tags.length - 2}
                </span>
              )}
            </div>
          </div>

          {/* Action Link Button */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1 py-1.5 xs:py-2 px-2 rounded-lg bg-accent text-obsidian text-[10px] xs:text-xs font-semibold hover:brightness-105 active:scale-[0.98] transition-all shadow-xs mt-1"
          >
            <span>Visit Site</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. DEDICATED DESKTOP ASYMMETRIC GRID (Visible on lg: screens)
         ───────────────────────────────────────────────────────────── */}
      <div className={`hidden lg:grid lg:grid-cols-12 gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        {/* Genuine Desktop Browser Frame (Cols 1-7 or 1-6) */}
        <div
          className={`lg:col-span-7 flex flex-col bg-bg-secondary/40 ${
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

          {/* Desktop 16:10 Screenshot Viewport */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full aspect-[16/10] overflow-hidden bg-bg-primary cursor-pointer group/img"
            aria-label={`Open ${project.title} live website`}
          >
            {!imageLoaded && (
              <div className="absolute inset-0 bg-bg-secondary animate-pulse" />
            )}

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
          </a>
        </div>

        {/* Desktop Content Column (Cols 8-12) */}
        <div className={`lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between ${isEven ? '' : 'lg:order-1'}`}>
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
            <h3 className="font-heading text-2xl lg:text-3xl font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors">
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
