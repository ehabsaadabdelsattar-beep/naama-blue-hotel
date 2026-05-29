import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/experience", label: "Experience" },
  { to: "/gallery", label: "Gallery" },
  { to: "/offers", label: "Offers" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar({ transparentOnTop = false }: { transparentOnTop?: boolean }) {
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Naama Blue Hotel" className="h-12 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium tracking-wide transition-colors ${
                solid ? "text-foreground/80 hover:text-accent" : "text-white/90 hover:text-white"
              }`}
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/book"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold tracking-wide shadow-card hover:brightness-110 transition"
          >
            Book Now
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 rounded-md ${solid ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-up">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-base font-medium text-foreground/80 hover:text-accent border-b border-border last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
