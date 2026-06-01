import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import pool from "@/assets/pool.jpg";
import deluxe from "@/assets/room-deluxe.jpg";
import family from "@/assets/room-family.jpg";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Offers & Packages — Naama Blue Hotel" },
      { name: "description", content: "Seasonal deals, honeymoon escapes and family packages at Naama Blue Hotel, Sharm El Sheikh." },
      { property: "og:title", content: "Offers — Naama Blue Hotel" },
      { property: "og:description", content: "Seasonal deals, honeymoon escapes and family packages." },
      { property: "og:url", content: "/offers" },
    ],
    links: [{ rel: "canonical", href: "/offers" }],
  }),
  component: OffersPage,
});

const offers = [
  { img: pool, tag: "Seasonal", title: "Summer in the Bay", text: "5 nights in a Deluxe Sea View room, breakfast included, late checkout.", from: 615, save: "Save 20%" },
  { img: deluxe, tag: "Honeymoon", title: "Red Sea Romance", text: "Champagne on arrival, sunset cruise, candle-lit dinner for two on the beach.", from: 890, save: "Save 15%" },
  { img: family, tag: "Family", title: "Family Adventure", text: "Family Suite, kids stay free, snorkeling trip and desert safari for four.", from: 1180, save: "Save 25%" },
];

function OffersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <header className="pt-32 pb-12 px-5 lg:px-8 max-w-7xl mx-auto">
        <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">Special Offers</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 text-foreground">Stay more, pay less</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg">Hand-picked packages for couples, families and adventurers — book direct for the best price.</p>
      </header>

      <section className="px-5 lg:px-8 max-w-7xl mx-auto pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {offers.map((o) => (
          <article key={o.title} className="bg-card rounded-3xl overflow-hidden shadow-card hover-zoom flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={o.img} alt={o.title} loading="lazy" className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full">{o.save}</span>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{o.tag}</span>
              <h2 className="font-display text-2xl text-foreground mt-1">{o.title}</h2>
              <p className="text-sm text-muted-foreground mt-2 flex-1">{o.text}</p>
              <div className="mt-5 flex items-center justify-between">
                <span><span className="text-xs text-muted-foreground">from </span><span className="font-display text-xl">${o.from}</span></span>
                <Link to="/book" search={{ offer: o.title.toLowerCase().replace(/\s+/g, '-'), price: o.from.toString() }} className="text-sm font-semibold text-accent hover:text-accent/80 transition">Book →</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
      <Footer />
    </div>
  );
}
