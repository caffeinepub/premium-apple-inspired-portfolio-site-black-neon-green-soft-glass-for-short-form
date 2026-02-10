import { ReactNode } from 'react';

interface SectionShellProps {
  id: string;
  children: ReactNode;
  className?: string;
  glass?: boolean;
}

export function SectionShell({ id, children, className = '', glass = false }: SectionShellProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 ${glass ? 'glass-surface' : ''} ${className}`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {children}
      </div>
    </section>
  );
}
