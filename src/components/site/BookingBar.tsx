import { CalendarDays, Users, BedDouble, Search } from "lucide-react";

export function BookingBar({ floating = false }: { floating?: boolean }) {
  return (
    <div
      className={`${floating ? "absolute left-1/2 -translate-x-1/2 -bottom-12 w-[min(1100px,92vw)]" : "w-full"} z-20`}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="glass rounded-2xl shadow-luxe p-3 md:p-4 grid grid-cols-2 md:grid-cols-5 gap-3 items-end"
      >
        <Field icon={<CalendarDays className="size-4" />} label="Check-in" type="date" />
        <Field icon={<CalendarDays className="size-4" />} label="Check-out" type="date" />
        <Field icon={<Users className="size-4" />} label="Guests" defaultValue="2 Adults" />
        <Field icon={<BedDouble className="size-4" />} label="Rooms" defaultValue="1 Room" />
        <button className="col-span-2 md:col-span-1 h-12 rounded-xl bg-accent text-accent-foreground font-semibold inline-flex items-center justify-center gap-2 hover:brightness-110 transition shadow-card">
          <Search className="size-4" /> Search
        </button>
      </form>
    </div>
  );
}

function Field({ icon, label, type = "text", defaultValue }: { icon: React.ReactNode; label: string; type?: string; defaultValue?: string }) {
  return (
    <label className="bg-white/85 rounded-xl px-3.5 py-2 flex flex-col gap-0.5 border border-white/60">
      <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-semibold">{label}</span>
      <div className="flex items-center gap-2 text-sm text-foreground">
        <span className="text-accent">{icon}</span>
        <input
          type={type}
          defaultValue={defaultValue}
          className="bg-transparent w-full focus:outline-none text-sm font-medium"
        />
      </div>
    </label>
  );
}
