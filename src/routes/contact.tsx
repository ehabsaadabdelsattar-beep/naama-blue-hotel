import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Naama Blue Hotel" },
      { name: "description", content: "Get in touch with Naama Blue Hotel in Sharm El Sheikh — phone, email, WhatsApp and address." },
      { property: "og:title", content: "Contact — Naama Blue Hotel" },
      { property: "og:description", content: "Phone, email, WhatsApp and address." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <header className="pt-32 pb-12 px-5 lg:px-8 max-w-7xl mx-auto">
        <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">Contact</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 text-foreground">Say hello</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg">Reservations, special requests, or simply a question — we’d love to hear from you.</p>
      </header>

      <section className="px-5 lg:px-8 max-w-7xl mx-auto pb-24 grid lg:grid-cols-2 gap-12">
        <div>
          <ul className="space-y-5 text-foreground">
            <ContactItem Icon={MapPin} title="Address" text="Naama Bay Promenade, Sharm El Sheikh, South Sinai, Egypt" />
            <ContactItem Icon={Phone} title="Phone" text="+20 100 000 0000" />
            <ContactItem Icon={MessageCircle} title="WhatsApp" text="+20 100 000 0000" />
            <ContactItem Icon={Mail} title="Email" text="hello@naamabluehotel.com" />
          </ul>

          <div className="mt-10 rounded-3xl overflow-hidden shadow-card border border-border">
            <iframe
              title="Naama Bay map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=34.31%2C27.90%2C34.34%2C27.93&layer=mapnik&marker=27.915%2C34.325"
              className="w-full h-72 border-0"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="bg-card rounded-3xl p-7 md:p-9 shadow-card border border-border space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="First name" />
            <Field label="Last name" />
          </div>
          <Field label="Email" type="email" />
          <Field label="Subject" />
          <label className="block">
            <span className="text-xs uppercase tracking-[0.14em] font-semibold text-muted-foreground">Message</span>
            <textarea rows={5} className="mt-2 w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
          </label>
          <button className="w-full rounded-full bg-accent text-accent-foreground py-3.5 text-sm font-semibold hover:brightness-110 transition">Send message</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.14em] font-semibold text-muted-foreground">{label}</span>
      <input type={type} className="mt-2 w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
    </label>
  );
}

function ContactItem({ Icon, title, text }: { Icon: typeof MapPin; title: string; text: string }) {
  return (
    <li className="flex gap-4">
      <span className="size-11 rounded-xl bg-accent/15 text-accent grid place-items-center shrink-0"><Icon className="size-5" /></span>
      <div>
        <div className="text-xs uppercase tracking-[0.14em] font-semibold text-muted-foreground">{title}</div>
        <div className="text-foreground font-medium mt-0.5">{text}</div>
      </div>
    </li>
  );
}
