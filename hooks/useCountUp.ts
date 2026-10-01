'use client';

import { useEffect, useState } from 'react';

type Options = {
  start?: number;
  end: number;
  duration?: number;
  enabled?: boolean;
};

/**
 * useCountUp — animates from `start` to `end` over `duration` ms using easeOutCubic.
 * Only runs when `enabled` is true (use with useInView for scroll-triggered counters).
 * Returns the final value immediately if `enabled` is false (no flash of 0).
 */
export function useCountUp({ start = 0, end, duration = 1600, enabled = true }: Options): number {
  const [value, setValue] = useState(enabled ? start : end);

  useEffect(() => {
    if (!enabled) return;
    let frame: number | null = null;
    const startTime = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(start + (end - start) * eased);
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [enabled, start, end, duration]);

  return value;
}
