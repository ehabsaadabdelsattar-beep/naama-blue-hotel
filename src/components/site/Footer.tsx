import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { SITE } from "@/config/site";
import { useTranslations } from "@/i18n";
import { buildWhatsAppUrl, WHATSAPP_DISPLAY } from "./FloatingWhatsApp";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  const socials = [
    { Icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
    { Icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
    { Icon: MessageCircle, href: buildWhatsAppUrl(), label: "WhatsApp" },
  ];

  const exploreLinks = [
    { to: "/rooms", label: t.footer.roomsSuites },
    { to: "/experience", label: t.nav.experience },
    { to: "/gallery", label: t.nav.gallery },
    { to: "/offers", label: t.footer.specialOffers },
    { to: "/about", label: t.footer.aboutUs },
    { to: "/faq", label: "FAQ" },
  ] as const;

  return (
    <footer className="bg-[var(--ink)] text-white/85">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logo}
            alt={SITE.name}
            className="h-24 w-auto bg-white/95 rounded-lg p-2"
            loading="lazy"
            decoding="async"
          />
          <p className="mt-5 text-sm leading-relaxed text-white/70">{t.footer.tagline}</p>
          <div className="flex gap-3 mt-6">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="size-12 grid place-items-center rounded-full bg-white/15 hover:bg-accent transition text-white"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-white">{t.footer.explore}</h4>
          <ul className="space-y-2.5 text-sm">
            {exploreLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-white/70 hover:text-accent transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-white">{t.footer.contact}</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin className="size-4 mt-0.5 text-accent shrink-0" />
              <span>{SITE.contact.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 mt-0.5 text-accent shrink-0" />
              <a href={`tel:${SITE.contact.phoneE164}`} className="hover:text-accent">
                {SITE.contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MessageCircle size={16} className="mt-0.5 text-accent shrink-0" />
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 mt-0.5 text-accent shrink-0" />
              <a href={`mailto:${SITE.contact.email}`} className="hover:text-accent">
                {SITE.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-white">Newsletter</h4>
          <p className="text-sm text-white/70 mb-4">Seasonal offers and Red Sea stories, monthly.</p>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 bg-white/10 border border-white/15 rounded-l-full px-4 py-2.5 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="bg-accent text-accent-foreground px-5 rounded-r-full text-sm font-semibold hover:brightness-110"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 text-xs text-white/50 flex flex-col md:flex-row gap-3 justify-between">
          <span>{t.footer.rights(year)}</span>
          <span>Naama Bay · Sharm El Sheikh · Egypt</span>
        </div>
      </div>
    </footer>
  );
}
