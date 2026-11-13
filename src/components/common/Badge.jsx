import React from 'react';

export const Badge = ({
  children,
  variant = 'default',
  className = '',
  dot = false,
  ...props
}) => {
  const variants = {
    default: 'bg-bg-secondary text-text-secondary border-border',
    accent: 'bg-accent/10 text-accent border-accent/30',
    live: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    concept: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    tech: 'bg-surface text-text-secondary border-border hover:border-text-secondary/50 transition-colors',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono tracking-wide rounded-md border ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          {variant === 'live' && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${variant === 'live' ? 'bg-emerald-400' : 'bg-accent'}`} />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};
