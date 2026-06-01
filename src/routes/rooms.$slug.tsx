import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { BookingBar } from "@/components/site/BookingBar";
import { getRoom, rooms } from "@/lib/rooms";
import { buildWhatsAppUrl } from "@/components/site/FloatingWhatsApp";
import { Users, BedDouble, Maximize, Eye, Check, ArrowRight, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/rooms/$slug")({
  loader: ({ params }) => {
    const room = getRoom(params.slug);
    if (!room) throw notFound();
    return { room };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.room.name} — Naama Blue Hotel` },
      { name: "description", content: loaderData?.room.description },
      { property: "og:title", content: `${loaderData?.room.name} — Naama Blue Hotel` },
      { property: "og:description", content: loaderData?.room.description },
      { property: "og:image", content: loaderData?.room.image },
    ],
    links: [{ rel: "canonical", href: `/rooms/${loaderData?.room.slug}` }],
  }),
  errorComponent: ({ error }) => <div className="p-12 text-center">Couldn't load room: {error.message}</div>,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center p-12 text-center">
      <div>
        <h1 className="font-display text-4xl">Room not found</h1>
        <Link to="/rooms" className="text-accent mt-4 inline-block">Back to all rooms</Link>
      </div>
    </div>
  ),
  component: RoomDetail,
});

function RoomDetail() {
  const { room } = Route.useLoaderData();
  const others = rooms.filter((r) => r.slug !== room.slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-24">
        <div className="relative h-[70svh] min-h-[480px] overflow-hidden">
          <img src={room.image} alt={room.name} className="w-full h-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-10 inset-x-0 px-5 lg:px-8 max-w-7xl mx-auto text-white">
            <span className="text-xs tracking-[0.3em] uppercase text-white/80">{room.view}</span>
            <h1 className="font-display text-5xl md:text-7xl mt-2">{room.name}</h1>
            <p className="mt-3 text-white/85 max-w-xl">{room.tagline}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="font-display text-3xl text-foreground">About this room</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{room.description}</p>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            <Spec Icon={Maximize} value={room.size} label="Size" />
            <Spec Icon={BedDouble} value={room.beds} label="Beds" />
            <Spec Icon={Eye} value={room.view} label="View" />
            <Spec Icon={Users} value={`${room.guests}`} label="Guests" />
          </div>

          <h3 className="font-display text-2xl mt-12 text-foreground">Amenities</h3>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {room.amenities.map((a: string) => (
              <li key={a} className="flex items-center gap-3 text-foreground/90">
                <span className="size-7 rounded-full bg-accent/15 text-accent grid place-items-center"><Check className="size-4" /></span>
                {a}
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-28 bg-card border border-border rounded-3xl p-7 shadow-card">
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-display text-foreground">${room.price}</span>
              <span className="text-sm text-muted-foreground">per night</span>
            </div>
            <div className="mt-6 space-y-3">
              <input type="date" className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm" />
              <input type="date" className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm" />
              <select className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm">
                <option>1 Guest</option><option>2 Guests</option><option>3 Guests</option><option>4 Guests</option>
              </select>
            </div>
            <a
              href={buildWhatsAppUrl(`Hello Naama Blue Hotel, I'd like to book the ${room.name}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3.5 text-sm font-semibold hover:brightness-110 transition"
            >
              <MessageCircle className="size-4" /> Book on WhatsApp
            </a>
            <Link to="/book" search={{ room: room.slug, price: room.price.toString(), roomName: room.name }} className="mt-3 w-full inline-flex justify-center rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-sm font-semibold hover:brightness-110 transition">
              Reserve via form
            </Link>
            <p className="text-xs text-muted-foreground text-center mt-3">Free cancellation up to 48h before arrival</p>
          </div>
        </aside>
      </section>

      <section className="bg-secondary/40 py-20 px-5 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10">Similar rooms</h2>
          <div className="grid md:grid-cols-2 gap-7">
            {others.map((r) => (
              <Link key={r.slug} to="/rooms/$slug" params={{ slug: r.slug }} className="group bg-card rounded-3xl overflow-hidden shadow-card hover-zoom flex flex-col sm:flex-row">
                <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden">
                  <img src={r.image} alt={r.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl">{r.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{r.tagline}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span><span className="font-display text-xl">${r.price}</span><span className="text-sm text-muted-foreground"> / night</span></span>
                    <span className="text-accent inline-flex items-center gap-1 text-sm font-semibold">View <ArrowRight className="size-4" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Spec({ Icon, value, label }: { Icon: typeof Users; value: string; label: string }) {
  return (
    <div className="bg-secondary/60 rounded-2xl p-4">
      <Icon className="size-5 text-accent" />
      <div className="mt-2 font-display text-lg text-foreground">{value}</div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
