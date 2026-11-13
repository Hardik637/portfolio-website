import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  external = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const variants = {
    primary: 'bg-accent text-obsidian hover:brightness-105 active:scale-[0.98] focus-visible:ring-accent font-semibold shadow-sm',
    secondary: 'border border-border bg-transparent text-text-primary hover:bg-surface hover:border-text-secondary active:scale-[0.98] focus-visible:ring-text-secondary',
    ghost: 'bg-transparent text-text-primary hover:bg-surface hover:text-accent active:scale-[0.98]',
    outline: 'border border-border text-text-secondary hover:text-text-primary hover:border-text-primary active:scale-[0.98]'
  };

  const sizes = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5'
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`group ${combinedStyles}`}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group ${combinedStyles}`}
      {...props}
    >
      {content}
    </motion.button>
  );
};
