export const LOCALES = [
  { code: "en", label: "English", native: "English", dir: "ltr" as const },
  { code: "ar", label: "Arabic", native: "العربية", dir: "rtl" as const },
  { code: "fr", label: "French", native: "Français", dir: "ltr" as const },
  { code: "de", label: "German", native: "Deutsch", dir: "ltr" as const },
  { code: "it", label: "Italian", native: "Italiano", dir: "ltr" as const },
  { code: "ru", label: "Russian", native: "Русский", dir: "ltr" as const },
  { code: "zh", label: "Chinese", native: "中文", dir: "ltr" as const },
] as const;

export type Locale = (typeof LOCALES)[number]["code"];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_COOKIE = "naama-locale";

export function getLocaleMeta(code: Locale) {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}
