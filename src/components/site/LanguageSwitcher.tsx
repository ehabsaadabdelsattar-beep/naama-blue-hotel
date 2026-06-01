import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { LOCALES, useLocale, useTranslations } from "@/i18n";

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const { locale, setLocale } = useLocale();
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];
  const btnClass = light
    ? "text-white/90 hover:text-white border-white/30"
    : "text-foreground/80 hover:text-accent border-border";

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide transition ${btnClass}`}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t.language.label}
      >
        <Globe className="size-3.5 shrink-0" aria-hidden />
        <span>{current.native}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.language.label}
          className="absolute end-0 top-full z-[60] mt-2 min-w-[10rem] overflow-hidden rounded-xl border border-border bg-background py-1 shadow-luxe animate-fade-up"
        >
          {LOCALES.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === locale}>
              <button
                type="button"
                onClick={() => {
                  setLocale(l.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-3 px-4 py-2.5 text-sm transition hover:bg-secondary/60 ${
                  l.code === locale ? "font-semibold text-accent" : "text-foreground/80"
                }`}
              >
                <span>{l.native}</span>
                <span className="text-xs text-muted-foreground">{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
