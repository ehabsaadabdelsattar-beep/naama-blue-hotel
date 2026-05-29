import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import pool from "@/assets/pool.jpg";
import lobby from "@/assets/lobby.jpg";
import restaurant from "@/assets/restaurant.jpg";
import deluxe from "@/assets/room-deluxe.jpg";
import twin from "@/assets/room-twin.jpg";
import family from "@/assets/room-family.jpg";
import diving from "@/assets/exp-diving.jpg";
import safari from "@/assets/exp-safari.jpg";
import nightlife from "@/assets/exp-nightlife.jpg";
import heroBay from "@/assets/hero-bay.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Naama Blue Hotel" },
      { name: "description", content: "Step inside Naama Blue Hotel — rooms, pool, lobby, restaurant and the Red Sea views that surround us." },
      { property: "og:title", content: "Gallery — Naama Blue Hotel" },
      { property: "og:description", content: "Photos of rooms, pool, lobby, dining and Naama Bay." },
      { property: "og:url", content: "/gallery" },
      { property: "og:image", content: heroBay },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const images = [
  { src: heroBay, h: "tall" },
  { src: pool, h: "short" },
  { src: deluxe, h: "tall" },
  { src: lobby, h: "short" },
  { src: restaurant, h: "short" },
  { src: twin, h: "tall" },
  { src: diving, h: "short" },
  { src: family, h: "tall" },
  { src: safari, h: "short" },
  { src: nightlife, h: "tall" },
];

function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <header className="pt-32 pb-12 px-5 lg:px-8 max-w-7xl mx-auto">
        <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">Gallery</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 text-foreground">Moments at Naama Blue</h1>
      </header>

      <section className="px-5 lg:px-8 max-w-7xl mx-auto pb-24">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((im, i) => (
            <div key={i} className="rounded-2xl overflow-hidden break-inside-avoid shadow-card hover-zoom">
              <img
                src={im.src}
                alt=""
                loading="lazy"
                className={`w-full object-cover ${im.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}`}
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
