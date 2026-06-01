import { createFileRoute, Link } from "@tanstack/react-router";
import { bookSearch } from "@/lib/booking-search";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { rooms } from "@/lib/rooms";
import { Users, BedDouble, Maximize, Eye, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/rooms")({
  head: () => ({
    meta: [
      { title: "Rooms & Suites — Naama Blue Hotel" },
      { name: "description", content: "Sea-view deluxe rooms, twin bay rooms, and family suites at Naama Blue Hotel in Sharm El Sheikh." },
      { property: "og:title", content: "Rooms & Suites — Naama Blue Hotel" },
      { property: "og:description", content: "Sea-view deluxe rooms, twin bay rooms, and family suites." },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
  component: RoomsPage,
});

function RoomsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <header className="pt-32 pb-12 px-5 lg:px-8 max-w-7xl mx-auto">
        <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">Stay</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 text-foreground">Rooms & Suites</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg">Soft linens, sea air, and a balcony for every guest. Choose the space that matches the trip you have in mind.</p>
      </header>

      <section className="px-5 lg:px-8 max-w-7xl mx-auto pb-24 space-y-10">
        {rooms.map((r, i) => (
          <article key={r.slug} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <Link to="/rooms/$slug" params={{ slug: r.slug }} className="block rounded-3xl overflow-hidden shadow-card hover-zoom">
              <div className="aspect-[4/3]">
                <img src={r.image} alt={r.name} loading="lazy" className="w-full h-full object-cover" />
              </div>
            </Link>
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">{r.name}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{r.description}</p>
              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <Spec Icon={Maximize} label={r.size} />
                <Spec Icon={BedDouble} label={r.beds} />
                <Spec Icon={Eye} label={r.view} />
                <Spec Icon={Users} label={`${r.guests} guests`} />
              </ul>
              <div className="mt-7 flex items-center justify-between flex-wrap gap-4">
                <span className="text-foreground">
                  <span className="text-3xl font-display">${r.price}</span>
                  <span className="text-sm text-muted-foreground"> / night</span>
                </span>
                <Link to="/book" search={bookSearch({ room: r.slug, price: r.price.toString(), roomName: r.name })} className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:brightness-110 transition">
                  Book Now <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
      <Footer />
    </div>
  );
}

function Spec({ Icon, label }: { Icon: typeof Users; label: string }) {
  return (
    <li className="flex items-center gap-2.5 bg-secondary/60 rounded-xl px-4 py-3">
      <Icon className="size-4 text-accent" />
      <span className="text-foreground font-medium">{label}</span>
    </li>
  );
}
