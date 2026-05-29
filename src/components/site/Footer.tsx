import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { buildWhatsAppUrl, WHATSAPP_DISPLAY } from "./FloatingWhatsApp";

const socials: { Icon: typeof Instagram; href: string; label: string }[] = [
  { Icon: Instagram, href: "https://www.instagram.com/naamabluehotel/", label: "Instagram" },
  { Icon: Facebook, href: "https://web.facebook.com/naamabluehotel.Sharm.eg", label: "Facebook" },
  { Icon: MessageCircle, href: buildWhatsAppUrl(), label: "WhatsApp" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--ink)] text-white/85">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Naama Blue Hotel" className="h-16 w-auto bg-white/95 rounded-lg p-2" />
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            A tropical escape on the shore of Naama Bay, Sharm El Sheikh — where the Red Sea meets refined hospitality.
          </p>
          <div className="flex gap-3 mt-6">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 grid place-items-center rounded-full bg-white/10 hover:bg-accent transition"
                aria-label={label}
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-white">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ["#rooms", "Rooms & Suites"],
              ["#experience", "Experience"],
              ["#gallery", "Gallery"],
              ["#offers", "Special Offers"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="text-white/70 hover:text-accent transition">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4 text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <span>King Abdullah St, Naama Bay, Sharm El Sheikh</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <span>+20 69-360-1012</span>
            </li>
            <li className="flex gap-3">
              <MessageCircle className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
              <a href="mailto:fo@naamabluehotel.com" className="hover:text-accent">
                fo@naamabluehotel.com
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
            <button className="bg-accent text-accent-foreground px-5 rounded-r-full text-sm font-semibold hover:brightness-110">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-6 text-xs text-white/50 flex flex-col md:flex-row gap-3 justify-between">
          <span>© {year} Naama Blue Hotel. All rights reserved.</span>
          <span>Naama Bay · Sharm El Sheikh · Egypt</span>
        </div>
      </div>
    </footer>
  );
}
