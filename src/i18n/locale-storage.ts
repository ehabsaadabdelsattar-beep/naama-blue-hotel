import { DEFAULT_LOCALE, LOCALE_COOKIE, type Locale } from "./config";
import { LOCALES } from "./config";

const codes = new Set(LOCALES.map((l) => l.code));

export function isLocale(value: string): value is Locale {
  return codes.has(value as Locale);
}

export function readLocale(): Locale {
  if (typeof document === "undefined") return DEFAULT_LOCALE;

  const fromCookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${LOCALE_COOKIE}=`))
    ?.split("=")[1];

  if (fromCookie && isLocale(fromCookie)) return fromCookie;

  const browser = navigator.language.split("-")[0];
  if (isLocale(browser)) return browser;

  return DEFAULT_LOCALE;
}

export function writeLocale(locale: Locale) {
  if (typeof document === "undefined") return;
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${maxAge}; SameSite=Lax`;
}
