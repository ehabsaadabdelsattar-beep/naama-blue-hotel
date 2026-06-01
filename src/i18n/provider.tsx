import { createContext, useContext } from "react";
import { en, type Messages } from "./locales/en";

export type Locale = "en";

const catalogs: Record<Locale, Messages> = { en };

const I18nContext = createContext<Messages>(en);

export function I18nProvider({
  locale = "en",
  children,
}: {
  locale?: Locale;
  children: React.ReactNode;
}) {
  return <I18nContext.Provider value={catalogs[locale]}>{children}</I18nContext.Provider>;
}

export function useTranslations(): Messages {
  return useContext(I18nContext);
}

export function getMessages(locale: Locale = "en"): Messages {
  return catalogs[locale];
}
