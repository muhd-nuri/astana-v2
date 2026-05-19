'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from 'react';
import type { ReactNode } from 'react';
import { ms } from './ms';
import { en } from './en';
import type { Dictionary } from './types';

export type Locale = 'ms' | 'en';

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const dictionaries: Record<Locale, Dictionary> = { ms, en };

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = 'astanapos-locale';
const STORAGE_EVENT = 'astanapos-locale-change';

const isLocale = (v: unknown): v is Locale => v === 'ms' || v === 'en';

function readStored(): Locale {
  if (typeof window === 'undefined') return 'ms';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : 'ms';
  } catch {
    return 'ms';
  }
}

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const handler = () => callback();
  window.addEventListener('storage', handler);
  window.addEventListener(STORAGE_EVENT, handler);
  return () => {
    window.removeEventListener('storage', handler);
    window.removeEventListener(STORAGE_EVENT, handler);
  };
}

const getServerSnapshot = (): Locale => 'ms';

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, readStored, getServerSnapshot);

  // Mirror selected locale onto <html lang>
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
    window.dispatchEvent(new Event(STORAGE_EVENT));
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used inside <LocaleProvider>');
  }
  return ctx;
}
