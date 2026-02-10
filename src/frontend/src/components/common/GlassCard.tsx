import { ReactNode, HTMLAttributes } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  neonHover?: boolean;
}

export function GlassCard({ children, hover = false, neonHover = false, className = '', ...props }: GlassCardProps) {
  return (
    <div
      className={`glass-surface rounded-3xl p-6 transition-all duration-300 ${
        hover ? 'hover:scale-105 hover:shadow-glass' : ''
      } ${
        neonHover ? 'hover:border-neon hover:shadow-neon' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
