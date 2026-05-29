import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Naama Blue Hotel" },
      { name: "description", content: "Check-in times, airport transfer, cancellation and payment — everything you need to know before your stay." },
      { property: "og:title", content: "FAQ — Naama Blue Hotel" },
      { property: "og:description", content: "Common questions about your stay at Naama Blue Hotel." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "What are your check-in and check-out times?", a: "Check-in is from 2:00 PM and check-out is until 12:00 PM. Early check-in and late check-out are subject to availability and can be arranged with our concierge." },
  { q: "Do you offer airport transfers?", a: "Yes — we provide private transfers from Sharm El Sheikh International Airport (SSH). Book in advance through the concierge or include it during your reservation." },
  { q: "What is your cancellation policy?", a: "Most rates include free cancellation up to 48 hours before arrival. Special offer rates may have different terms — these are clearly noted at booking." },
  { q: "Which payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex), bank transfers, and cash payments in EUR, USD and EGP." },
  { q: "Is breakfast included?", a: "Breakfast is included with most room rates. Half-board and all-inclusive upgrades are available — ask our team for the latest packages." },
  { q: "Do you welcome children?", a: "Absolutely. Our Family Suite is designed for stays with kids, and children under 6 stay free in their parents’ room." },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <header className="pt-32 pb-12 px-5 lg:px-8 max-w-4xl mx-auto">
        <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">FAQ</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 text-foreground">Good to know</h1>
      </header>

      <section className="max-w-4xl mx-auto px-5 lg:px-8 pb-24">
        <ul className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left flex items-center justify-between gap-4 py-6"
                >
                  <span className="font-display text-xl text-foreground">{f.q}</span>
                  <span className="size-9 rounded-full bg-secondary grid place-items-center shrink-0 text-accent">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                {isOpen && <p className="pb-6 text-muted-foreground leading-relaxed animate-fade-up">{f.a}</p>}
              </li>
            );
          })}
        </ul>
      </section>
      <Footer />
    </div>
  );
}
