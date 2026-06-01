import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BookingBar } from "@/components/site/BookingBar";
import { SiteImage } from "@/components/site/SiteImage";
import { useTranslations } from "@/i18n";
import { bookSearch } from "@/lib/booking-search";
import { getLocalizedRooms } from "@/lib/rooms";
import heroBay from "@/assets/hero-bay.jpg";
import pool from "@/assets/pool.jpg";
import diving from "@/assets/exp-diving.jpg";
import safari from "@/assets/exp-safari.jpg";
import nightlife from "@/assets/exp-nightlife.jpg";
import restaurant from "@/assets/restaurant.jpg";
import lobby from "@/assets/lobby.jpg";
import {
  Waves, Wifi, Sparkles, ConciergeBell, MapPin, UtensilsCrossed,
  Plane, Snowflake, ArrowRight, Star, ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naama Blue Hotel — Tropical Luxury on Naama Bay, Sharm El Sheikh" },
      { name: "description", content: "Escape to Naama Blue Hotel: sea-view rooms, infinity pool, vibrant nightlife and Red Sea adventures in the heart of Sharm El Sheikh." },
      { property: "og:title", content: "Naama Blue Hotel" },
      { property: "og:description", content: "Tropical luxury in the heart of Naama Bay, Sharm El Sheikh." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const t = useTranslations();
  const rooms = getLocalizedRooms(t);
  const featureItems = [
    { Icon: MapPin, ...t.home.features.location },
    { Icon: Waves, ...t.home.features.pool },
    { Icon: Wifi, ...t.home.features.wifi },
    { Icon: ConciergeBell, ...t.home.features.service },
  ] as const;
  const experienceCards = [
    { img: diving, ...t.home.experiences.diving, span: "lg:col-span-7 lg:row-span-2 h-[440px]" },
    { img: nightlife, ...t.home.experiences.nightlife, span: "lg:col-span-5 h-52" },
    { img: safari, ...t.home.experiences.safari, span: "lg:col-span-5 h-52" },
  ] as const;
  const amenityIcons = [Waves, UtensilsCrossed, Plane, Wifi, Snowflake, Sparkles] as const;

  return (
    <div className="min-h-screen bg-background">
      <Navbar transparentOnTop />

      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full">
        <SiteImage
          src={heroBay}
          alt="Naama Bay at golden hour"
          className="absolute inset-0 w-full h-full object-cover animate-kenburns"
          priority
        />
        <div className="absolute inset-0 bg-hero-overlay" />

        <div className="absolute inset-0 h-full flex flex-col items-center justify-center text-center px-5 z-10">
          <span className="text-white/80 text-xs tracking-[0.4em] uppercase mb-6 animate-fade-up">
            {t.brand.location}
          </span>
          <h1 className="font-display text-white text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl animate-fade-up">
            {t.home.heroTitle}{" "}
            <em className="not-italic text-[var(--coral-light)]">{t.home.heroHighlight}</em>
          </h1>
          <p className="mt-6 text-white/85 text-lg md:text-xl max-w-2xl animate-fade-up">
            {t.home.heroSubtitle}
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center animate-fade-up">
            <Link to="/book" search={bookSearch()} className="rounded-full bg-accent text-accent-foreground px-7 py-3.5 text-sm font-semibold tracking-wide hover:brightness-110 transition shadow-luxe">
              {t.home.bookStay}
            </Link>
            <Link to="/rooms" className="rounded-full border border-white/40 text-white px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-white/10 transition">
              {t.home.exploreRooms}
            </Link>
          </div>
        </div>

        <BookingBar floating />

        <div className="absolute bottom-6 inset-x-0 flex justify-center text-white/70 animate-bounce z-10">
          <ChevronDown />
        </div>
      </section>

      {/* INTRO / WHY US */}
      <section className="pt-32 pb-20 px-5 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">{t.home.welcome}</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 text-foreground leading-tight">
              {t.home.introTitle}
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              {t.home.introBody}
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 mt-7 text-sm font-semibold text-foreground hover:text-accent transition">
              {t.home.ourStory} <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {featureItems.map(({ Icon, title, text }) => (
              <div key={title} className="glass rounded-2xl p-5 shadow-card hover:-translate-y-1 transition">
                <div className="size-11 rounded-xl bg-accent/15 text-accent grid place-items-center mb-4">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ROOMS */}
      <section className="py-20 px-5 lg:px-8 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">{t.home.stay}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-foreground">{t.home.featuredRooms}</h2>
            </div>
            <Link to="/rooms" className="text-sm font-semibold text-foreground hover:text-accent inline-flex items-center gap-2">
              {t.home.viewAllRooms} <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {rooms.map((r) => (
              <Link
                key={r.slug}
                to="/rooms/$slug"
                params={{ slug: r.slug }}
                className="group bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-luxe transition-all hover-zoom"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={r.image} alt={r.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl text-foreground">{r.name}</h3>
                    <span className="text-sm text-muted-foreground">{r.size}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{r.tagline}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-foreground">
                      <span className="text-2xl font-display">${r.price}</span>
                      <span className="text-sm text-muted-foreground">{t.booking.perNight}</span>
                    </span>
                    <span className="text-sm font-semibold text-accent inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t.booking.details} <ArrowRight className="size-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE NAAMA BAY */}
      <section className="py-24 px-5 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">{t.home.experienceLabel}</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 text-foreground">{t.home.experienceTitle}</h2>
          <p className="mt-4 text-muted-foreground">{t.home.experienceSubtitle}</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-5">
          {experienceCards.map((c) => (
            <Link to="/experience" key={c.title} className={`relative rounded-3xl overflow-hidden group hover-zoom shadow-card ${c.span}`}>
              <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="font-display text-2xl md:text-3xl">{c.title}</h3>
                <p className="text-sm text-white/80 mt-1 max-w-sm">{c.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section className="py-20 px-5 lg:px-8 bg-[var(--ink)] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[var(--coral-light)] text-xs tracking-[0.3em] uppercase font-semibold">{t.home.amenitiesLabel}</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">{t.home.amenitiesTitle}</h2>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenityIcons.map((Icon, i) => (
              <div key={t.home.amenityLabels[i]} className="text-center">
                <div className="mx-auto size-16 rounded-2xl glass-dark grid place-items-center mb-3 text-[var(--coral-light)]">
                  <Icon className="size-7" />
                </div>
                <p className="text-sm text-white/80">{t.home.amenityLabels[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-5 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">{t.home.guestsLabel}</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 text-foreground">{t.home.testimonialsTitle}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {t.home.testimonials.map((item) => (
            <figure key={item.name} className="bg-card rounded-3xl p-7 shadow-card border border-border">
              <div className="flex gap-1 text-accent mb-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed">&ldquo;{item.text}&rdquo;</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold text-foreground">{item.name}</span>
                <span className="text-muted-foreground"> · {item.country}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 px-5 lg:px-8 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">{t.home.moments}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-foreground">{t.home.insideHotel}</h2>
            </div>
            <Link to="/gallery" className="text-sm font-semibold text-foreground hover:text-accent inline-flex items-center gap-2">
              {t.home.fullGallery} <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[pool, lobby, restaurant, diving].map((img, i) => (
              <div key={i} className={`rounded-2xl overflow-hidden hover-zoom shadow-card ${i % 3 === 0 ? "md:row-span-2 aspect-[3/4]" : "aspect-square"}`}>
                <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-5 overflow-hidden">
        <img src={pool} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-[var(--ink)]/70" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            {t.home.ctaTitle}{" "}
            <em className="not-italic text-[var(--coral-light)]">{t.home.ctaHighlight}</em>
          </h2>
          <p className="mt-5 text-white/80 text-lg">{t.home.ctaBody}</p>
          <Link to="/book" search={bookSearch()} className="mt-8 inline-flex rounded-full bg-accent text-accent-foreground px-8 py-4 text-sm font-semibold tracking-wide hover:brightness-110 transition shadow-luxe">
            {t.home.bookStay}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
