'use client';

import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

type Tone = 'page' | 'tint' | 'deep';

type Props = {
  id?: string;
  tone?: Tone;
  className?: string;
  innerClassName?: string;
  fullBleed?: boolean;
  children: ReactNode;
};

const toneClasses: Record<Tone, string> = {
  page: 'bg-transparent text-[var(--color-ink)]',
  tint: 'bg-[var(--color-surface-tint)] text-[var(--color-ink)]',
  deep: 'bg-[var(--color-brand-deep)] text-[var(--color-page-bg)]',
};

export function SectionWrapper({
  id,
  tone = 'page',
  className,
  innerClassName,
  fullBleed,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full py-[var(--space-section-mobile,4rem)] md:py-[var(--spacing-section,6rem)]',
        toneClasses[tone],
        className,
      )}
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className={cn(
          fullBleed ? 'w-full' : 'mx-auto max-w-[1280px] px-6 md:px-10',
          innerClassName,
        )}
      >
        {children}
      </motion.div>
    </section>
  );
}
