import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_LOCALE, getLocaleMeta, type Locale } from "./config";
import { readLocale, writeLocale } from "./locale-storage";
import { catalogs, type Messages } from "./locales";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function applyDocumentLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  const { dir, native } = getLocaleMeta(locale);
  document.documentElement.lang = locale;
  document.documentElement.dir = dir;
  document.documentElement.setAttribute("data-locale", native);
}

export function I18nProvider({
  initialLocale,
  children,
}: {
  initialLocale?: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = readLocale();
    setLocaleState(stored);
    applyDocumentLocale(stored);
    setReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    writeLocale(next);
    applyDocumentLocale(next);
  }, []);

  useEffect(() => {
    if (ready) applyDocumentLocale(locale);
  }, [locale, ready]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: catalogs[locale],
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslations must be used within I18nProvider");
  return ctx;
}

export function useTranslations(): Messages {
  return useI18n().t;
}

export function useLocale() {
  const { locale, setLocale } = useI18n();
  return { locale, setLocale };
}

export function getMessages(locale: Locale = DEFAULT_LOCALE): Messages {
  return catalogs[locale];
}

export type { Locale } from "./config";
