import { ar } from "./ar";
import { de } from "./de";
import { en, type Messages } from "./en";
import { fr } from "./fr";
import { it } from "./it";
import { ru } from "./ru";
import { zh } from "./zh";
import type { Locale } from "../config";

export const catalogs: Record<Locale, Messages> = {
  en,
  ar,
  fr,
  de,
  it,
  ru,
  zh,
};

export { en, type Messages };
