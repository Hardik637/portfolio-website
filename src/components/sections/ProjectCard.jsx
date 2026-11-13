import React from 'react';
import { motion } from 'framer-motion';
import { Github, Building2, Globe, Cake, Palette, ArrowUpRight } from 'lucide-react';
import { Badge } from '../common/Badge';

export const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  // Visual interface placeholder representing the project's brand palette & layout
  const renderVisualPlaceholder = () => {
    switch (project.id) {
      case 'dubai-luxury-real-estate':
        return (
          <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] bg-gradient-to-br from-[#121312] via-[#1a1c18] to-[#252822] p-6 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C6F36A_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono tracking-widest text-[#E6C687] uppercase border border-[#E6C687]/30 px-2 py-0.5 rounded">
                PROPERTY SHOWCASE
              </span>
              <Building2 className="w-4 h-4 text-[#E6C687]" />
            </div>

            <div className="z-10 my-auto py-4">
              <span className="text-xs font-mono text-text-secondary uppercase tracking-widest block mb-1">
                Visual Interface Preview
              </span>
              <p className="font-heading text-xl sm:text-2xl font-bold text-parchment tracking-tight">
                Luxury Villa & Penthouse Listings
              </p>
              <div className="mt-3 flex gap-2">
                <span className="px-2 py-1 rounded bg-black/40 text-[11px] font-mono text-[#E6C687] border border-[#E6C687]/20">
                  Featured Residences
                </span>
                <span className="px-2 py-1 rounded bg-black/40 text-[11px] font-mono text-text-secondary border border-border">
                  Modular Layout
                </span>
              </div>
            </div>

            <div className="z-10 flex items-center justify-between pt-3 border-t border-border/40 text-[11px] font-mono text-text-secondary">
              <span>Codebase Interface Preview</span>
              <span className="text-accent">React • CSS</span>
            </div>
          </div>
        );

      case 'export-easy-hai':
        return (
          <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] bg-gradient-to-br from-[#0c1618] via-[#102220] to-[#152e2a] p-6 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" />
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase border border-emerald-500/30 px-2 py-0.5 rounded flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LIVE ON VERCEL
              </span>
              <Globe className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="z-10 my-auto py-4">
              <span className="text-xs font-mono text-emerald-400/80 uppercase tracking-widest block mb-1">
                Live Deployment
              </span>
              <p className="font-heading text-xl sm:text-2xl font-bold text-parchment tracking-tight">
                Global Trade Educational Platform
              </p>
              <p className="text-xs text-text-secondary mt-2 line-clamp-2">
                Storytelling landing page introducing trade concepts to entrepreneurs.
              </p>
            </div>

            <div className="z-10 flex items-center justify-between pt-3 border-t border-border/40 text-[11px] font-mono text-text-secondary">
              <span>Production Deployment</span>
              <span className="text-emerald-400">export-easy-hai.vercel.app</span>
            </div>
          </div>
        );

      case 'kala-cakes-desserts':
        return (
          <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] bg-gradient-to-br from-[#1c1416] via-[#241a1c] to-[#2e1d21] p-6 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f472b6_1px,transparent_1px)] [background-size:18px_18px]" />
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono tracking-widest text-pink-300 uppercase border border-pink-400/30 px-2 py-0.5 rounded">
                CONCEPT SHOWCASE
              </span>
              <Cake className="w-4 h-4 text-pink-300" />
            </div>

            <div className="z-10 my-auto py-4">
              <span className="text-xs font-mono text-pink-300/80 uppercase tracking-widest block mb-1">
                Design & Component Concept
              </span>
              <p className="font-heading text-xl sm:text-2xl font-bold text-parchment tracking-tight">
                Patisserie & Dessert Storefront
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="px-2 py-0.5 rounded bg-black/40 text-[10px] font-mono text-pink-200 border border-pink-500/20">
                  Menu UI
                </span>
                <span className="px-2 py-0.5 rounded bg-black/40 text-[10px] font-mono text-pink-200 border border-pink-500/20">
                  Product Hierarchy
                </span>
                <span className="px-2 py-0.5 rounded bg-black/40 text-[10px] font-mono text-pink-200 border border-pink-500/20">
                  Cart Flow
                </span>
              </div>
            </div>

            <div className="z-10 flex items-center justify-between pt-3 border-t border-border/40 text-[11px] font-mono text-text-secondary">
              <span>Concept Exploration</span>
              <span className="text-pink-300">UX Architecture</span>
            </div>
          </div>
        );

      case 'art-ecommerce':
      default:
        return (
          <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px] bg-gradient-to-br from-[#121417] via-[#171b21] to-[#1e232b] p-6 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="flex items-center justify-between z-10">
              <span className="text-[10px] font-mono tracking-widest text-slate-300 uppercase border border-slate-400/30 px-2 py-0.5 rounded">
                STOREFRONT SHOWCASE
              </span>
              <Palette className="w-4 h-4 text-slate-300" />
            </div>

            <div className="z-10 my-auto py-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-1">
                Visual Interface Preview
              </span>
              <p className="font-heading text-xl sm:text-2xl font-bold text-parchment tracking-tight">
                Wall Art & Sculptural Decor Catalog
              </p>
              <div className="mt-3 flex gap-2">
                <span className="px-2 py-1 rounded bg-black/40 text-[11px] font-mono text-slate-300 border border-border">
                  Grid Layout
                </span>
                <span className="px-2 py-1 rounded bg-black/40 text-[11px] font-mono text-slate-300 border border-border">
                  Cart UI
                </span>
              </div>
            </div>

            <div className="z-10 flex items-center justify-between pt-3 border-t border-border/40 text-[11px] font-mono text-text-secondary">
              <span>Codebase Interface Preview</span>
              <span className="text-accent">JavaScript • CSS Grid</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl border border-border bg-surface overflow-hidden hover:border-text-secondary/50 transition-all duration-500 shadow-sm"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        {/* Preview Frame Container (Cols 1-7 or 1-6) */}
        <div className={`lg:col-span-7 overflow-hidden border-b lg:border-b-0 ${isEven ? 'lg:border-r border-border' : 'lg:order-2 lg:border-l border-border'}`}>
          <div className="relative group-hover:scale-[1.01] transition-transform duration-700 ease-luxury">
            {renderVisualPlaceholder()}
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
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-obsidian text-xs font-semibold hover:brightness-105 transition-all cursor-pointer"
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
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-border bg-bg-secondary text-text-primary text-xs font-mono hover:border-text-secondary hover:text-accent transition-all cursor-pointer"
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
