import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { LanguageSwitcher } from "@/components/site/LanguageSwitcher";
import { useTranslations } from "@/i18n";
import { bookSearch } from "@/lib/booking-search";
import { SITE } from "@/config/site";

const navRoutes = [
  { to: "/", key: "home" as const },
  { to: "/rooms", key: "rooms" as const },
  { to: "/experience", key: "experience" as const },
  { to: "/gallery", key: "gallery" as const },
  { to: "/offers", key: "offers" as const },
  { to: "/about", key: "about" as const },
  { to: "/contact", key: "contact" as const },
];

export function Navbar({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
  const t = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparentOnTop || scrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          solid ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt={SITE.name} className="h-20 w-auto scale-110" />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {navRoutes.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  solid ? "text-foreground/80 hover:text-accent" : "text-white/90 hover:text-white"
                }`}
                activeProps={{ className: "text-accent" }}
              >
                {t.nav[l.key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <LanguageSwitcher light={!solid} />
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`lg:hidden p-2 rounded-md ${solid ? "text-foreground" : "text-white"}`}
              aria-label={t.nav.menuToggle}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-up">
            <div className="px-5 py-4 flex flex-col gap-1">
              <div className="pb-3 mb-2 border-b border-border">
                <LanguageSwitcher />
              </div>
              {navRoutes.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-3 px-2 text-base font-medium text-foreground/80 hover:text-accent border-b border-border last:border-0"
                >
                  {t.nav[l.key]}
                </Link>
              ))}
              <Link
                to="/book"
                search={bookSearch()}
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold"
              >
                {t.nav.bookNow}
              </Link>
            </div>
          </div>
        )}
      </header>
      <Link
        to="/book"
        search={bookSearch()}
        className={`hidden sm:inline-flex fixed top-5 right-8 items-center justify-center rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold tracking-wide shadow-card hover:brightness-110 transition z-40 ${
          solid ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {t.nav.bookNow}
      </Link>
    </>
  );
}
