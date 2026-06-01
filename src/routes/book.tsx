import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { parseBookSearch } from "@/lib/booking-search";
import { pageMeta } from "@/lib/seo";
import { rooms } from "@/lib/rooms";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/book")({
  head: () =>
    pageMeta({
      title: "Book Your Stay",
      description:
        "Reserve your room at Naama Blue Hotel, Sharm El Sheikh. Best rate guaranteed when booking direct.",
      path: "/book",
    }),
  validateSearch: (search) => parseBookSearch(search as Record<string, unknown>),
  component: BookPage,
});

function BookPage() {
  const search = Route.useSearch();
  const [selectedRoom, setSelectedRoom] = useState(search.room || "");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <header className="pt-32 pb-10 px-5 lg:px-8 max-w-7xl mx-auto">
        <span className="text-accent text-xs tracking-[0.3em] uppercase font-semibold">Reservation</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 text-foreground">Book your stay</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg">Direct bookings unlock our best rates, free cancellation up to 48 hours before arrival, and a welcome drink on the house.</p>
      </header>

      <section className="px-5 lg:px-8 max-w-7xl mx-auto pb-24 grid lg:grid-cols-3 gap-10">
        <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! Our team will confirm your booking shortly."); }} className="lg:col-span-2 bg-card rounded-3xl p-7 md:p-10 shadow-card border border-border space-y-6">
          <Fieldset legend="Your stay">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Check-in" type="date" />
              <Field label="Check-out" type="date" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              <Field label="Adults" type="number" defaultValue="2" />
              <Field label="Children" type="number" defaultValue="0" />
              <label className="block">
                <span className="text-xs uppercase tracking-[0.14em] font-semibold text-muted-foreground">Room</span>
                <select value={selectedRoom} onChange={(e) => setSelectedRoom(e.target.value)} className="mt-2 w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                  <option value="">Select a room</option>
                  {rooms.map((r) => <option key={r.slug} value={r.slug}>{r.name} — ${r.price}/night</option>)}
                </select>
              </label>
            </div>
          </Fieldset>

          <Fieldset legend="Your details">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="First name" />
              <Field label="Last name" />
              <Field label="Email" type="email" />
              <Field label="Phone" type="tel" />
            </div>
            <label className="block mt-4">
              <span className="text-xs uppercase tracking-[0.14em] font-semibold text-muted-foreground">Special requests</span>
              <textarea rows={4} className="mt-2 w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Airport transfer, anniversary, dietary preferences…" />
            </label>
          </Fieldset>

          <button className="w-full rounded-full bg-accent text-accent-foreground py-4 text-sm font-semibold hover:brightness-110 transition shadow-card">Request booking</button>
        </form>

        <aside className="lg:col-span-1 bg-[var(--ink)] text-white rounded-3xl p-7 shadow-card h-fit lg:sticky lg:top-28">
          <h3 className="font-display text-2xl">Why book direct</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/85">
            {["Best rate guaranteed", "Free cancellation up to 48h", "Complimentary welcome drink", "Priority room selection", "Direct line to our concierge"].map((p) => (
              <li key={p} className="flex gap-3"><CheckCircle2 className="size-4 text-[var(--coral-light)] mt-0.5 shrink-0" /> {p}</li>
            ))}
          </ul>
          <div className="border-t border-white/15 mt-7 pt-6 text-sm text-white/70">
            Need help? Our reservation desk is available 24/7.<br />
            <a href="tel:+201000000000" className="text-[var(--coral-light)] font-semibold">+20 100 000 0000</a>
          </div>
        </aside>
      </section>
      <Footer />
    </div>
  );
}

function Fieldset({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="font-display text-xl text-foreground mb-4">{legend}</legend>
      {children}
    </fieldset>
  );
}

function Field({ label, type = "text", defaultValue }: { label: string; type?: string; defaultValue?: string }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.14em] font-semibold text-muted-foreground">{label}</span>
      <input type={type} defaultValue={defaultValue} className="mt-2 w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
    </label>
  );
}
