import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import diving from "@/assets/exp-diving.jpg";
import safari from "@/assets/exp-safari.jpg";
import nightlife from "@/assets/exp-nightlife.jpg";
import pool from "@/assets/pool.jpg";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experiences — Naama Bay Adventures | Naama Blue Hotel" },
      { name: "description", content: "Diving, desert safaris, nightlife and beach days — discover the experiences that make Naama Bay unforgettable." },
      { property: "og:title", content: "Experiences — Naama Blue Hotel" },
      { property: "og:description", content: "Diving, desert safaris, nightlife and beach days in Sharm El Sheikh." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

const experiences = [
  { img: diving, title: "Diving & Snorkeling", text: "The Red Sea’s coral gardens are minutes from our marina. Whether you’re a first-time snorkeler or a certified diver, we’ll match you with the right reef.", tag: "Underwater" },
  { img: safari, title: "Desert Safari", text: "Cross Sinai dunes on quad bikes, share Bedouin tea, and watch the sky catch fire at sunset before stargazing under one of Egypt’s clearest skies.", tag: "Adventure" },
  { img: nightlife, title: "Naama Nightlife", text: "Step onto the promenade for shisha lounges, live music, late-night cafés and rooftop bars — Sharm’s heartbeat after dark.", tag: "Evening" },
  { img: pool, title: "Beach Days", text: "Soft sand, calm bays and warm water year-round. We’ll set you up with loungers, umbrellas, and a beachside cocktail menu.", tag: "Daytime" },
];

function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <header className="pt-32 pb-12 px-5 lg:px-8 max-w-7xl mx-auto">
        <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">Experience</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 text-foreground">Things to do in Sharm</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg">A hotel is just the start. Naama Bay opens onto the Red Sea, the Sinai desert, and one of Egypt’s liveliest promenades.</p>
      </header>

      <section className="px-5 lg:px-8 max-w-7xl mx-auto pb-24 space-y-16">
        {experiences.map((e, i) => (
          <article key={e.title} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="rounded-3xl overflow-hidden shadow-card hover-zoom">
              <img src={e.img} alt={e.title} loading="lazy" className="w-full h-[420px] object-cover" />
            </div>
            <div>
              <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">{e.tag}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-foreground">{e.title}</h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{e.text}</p>
              <button className="mt-7 inline-flex rounded-full bg-foreground text-background px-6 py-3 text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition">
                Ask concierge
              </button>
            </div>
          </article>
        ))}
      </section>
      <Footer />
    </div>
  );
}
