'use client';

import {
  BarChart3,
  Megaphone,
  Coins,
  Boxes,
  Users,
  LayoutDashboard,
  type LucideIcon,
} from 'lucide-react';
import { useLocale } from '@/i18n/LocaleContext';
import type { ReactNode } from 'react';
import { Marquee } from '@/components/shared/Marquee';

type Chip = {
  key: string;
  type: 'module' | 'customer';
  label: string;
  icon?: ReactNode;
};

const MODULE_ICONS: LucideIcon[] = [
  BarChart3, // Sales
  Megaphone, // Marketing
  Coins, // Finance
  Boxes, // Inventory
  Users, // Employee
  LayoutDashboard, // ERP Dashboard
];

export function ModuleMarquee() {
  const { t } = useLocale();

  const moduleChips: Chip[] = t.marquee.modules.map((label, i) => {
    const Icon = MODULE_ICONS[i] ?? BarChart3;
    return {
      key: `module-${label}-${i}`,
      type: 'module',
      label,
      icon: <Icon className="h-4 w-4" aria-hidden="true" />,
    };
  });

  const customerChips: Chip[] = t.marquee.customers.map((label, i) => ({
    key: `customer-${label}-${i}`,
    type: 'customer',
    label,
  }));

  // Interleave modules + customers
  const chips: Chip[] = [];
  const max = Math.max(moduleChips.length, customerChips.length);
  for (let i = 0; i < max; i++) {
    if (moduleChips[i]) chips.push(moduleChips[i]);
    if (customerChips[i]) chips.push(customerChips[i]);
  }

  return (
    <section className="relative w-full py-10 md:py-14" aria-label={t.marquee.caption}>
      <div className="mx-auto mb-6 max-w-[1280px] px-6 md:px-10">
        <p className="text-center font-body text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          {t.marquee.caption}
        </p>
      </div>
      <Marquee chips={chips} />
    </section>
  );
}
