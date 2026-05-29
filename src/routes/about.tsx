import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import lobby from "@/assets/lobby.jpg";
import pool from "@/assets/pool.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Naama Blue Hotel" },
      { name: "description", content: "Our story, vision and the team behind Naama Blue Hotel on the Red Sea." },
      { property: "og:title", content: "About — Naama Blue Hotel" },
      { property: "og:description", content: "Our story, vision and team." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <header className="pt-32 pb-12 px-5 lg:px-8 max-w-7xl mx-auto">
        <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">About</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 text-foreground max-w-3xl">A hotel built around the bay we love</h1>
      </header>

      <section className="px-5 lg:px-8 max-w-7xl mx-auto pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-3xl overflow-hidden shadow-card">
          <img src={lobby} alt="Hotel lobby" loading="lazy" className="w-full h-[500px] object-cover" />
        </div>
        <div>
          <h2 className="font-display text-3xl text-foreground">Our story</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Naama Blue Hotel was born from a simple idea: Sharm El Sheikh deserves a stay that feels as good as the water looks. We designed every room, every poolside corner, and every menu around the Red Sea — bright, generous, and quietly luxurious.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Today we welcome divers, families, couples and wanderers from every corner of the world — and treat them all like neighbours.
          </p>
        </div>
      </section>

      <section className="px-5 lg:px-8 max-w-7xl mx-auto pb-24 grid md:grid-cols-3 gap-6">
        {[
          { title: "Vision", text: "To be Sharm’s most beloved boutique stay — known for warmth, design, and the sea outside our door." },
          { title: "Hospitality", text: "Every guest is greeted by name. Every request is answered. Every detail considered." },
          { title: "Sustainability", text: "Reef-safe practices, local sourcing, and a commitment to keeping Naama Bay beautiful." },
        ].map((c) => (
          <div key={c.title} className="bg-secondary/60 rounded-3xl p-7">
            <h3 className="font-display text-2xl text-foreground">{c.title}</h3>
            <p className="mt-3 text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </section>

      <section className="relative py-24 px-5 overflow-hidden">
        <img src={pool} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[var(--ink)]/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="font-display text-4xl md:text-5xl">Come stay with us</h2>
          <p className="mt-3 text-white/80">We can’t wait to welcome you to the bay.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
