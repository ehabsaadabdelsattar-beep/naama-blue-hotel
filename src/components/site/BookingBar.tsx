import { CalendarDays, Users, BedDouble, Search } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useRef } from "react";
import { useTranslations } from "@/i18n";
import { bookSearch } from "@/lib/booking-search";

export function BookingBar({ floating = false }: { floating?: boolean }) {
  const navigate = useNavigate();
  const t = useTranslations();
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const adultsRef = useRef<HTMLSelectElement>(null);
  const roomsRef = useRef<HTMLSelectElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    navigate({
      to: "/book",
      search: bookSearch({
        checkIn: checkInRef.current?.value,
        checkOut: checkOutRef.current?.value,
        adults: adultsRef.current?.value || t.booking.guestOptions[1],
        rooms: roomsRef.current?.value || t.booking.roomOptions[0],
      }),
    });
  };

  return (
    <div
      className={`${floating ? "absolute left-1/2 -translate-x-1/2 -bottom-12 w-[min(1100px,92vw)] z-30" : "w-full"}`}
    >
      <form
        onSubmit={handleSearch}
        className="glass rounded-2xl shadow-luxe p-3 md:p-4 grid grid-cols-2 md:grid-cols-5 gap-3 items-end"
      >
        <Field
          icon={<CalendarDays className="size-4" />}
          label={t.booking.checkIn}
          type="date"
          ref={checkInRef}
        />
        <Field
          icon={<CalendarDays className="size-4" />}
          label={t.booking.checkOut}
          type="date"
          ref={checkOutRef}
        />
        <SelectField
          icon={<Users className="size-4" />}
          label={t.booking.guests}
          ref={adultsRef}
          options={[...t.booking.guestOptions]}
          defaultValue={t.booking.guestOptions[1]}
        />
        <SelectField
          icon={<BedDouble className="size-4" />}
          label={t.booking.rooms}
          ref={roomsRef}
          options={[...t.booking.roomOptions]}
          defaultValue={t.booking.roomOptions[0]}
        />
        <button
          type="submit"
          className="col-span-2 md:col-span-1 h-12 rounded-xl bg-accent text-accent-foreground font-semibold inline-flex items-center justify-center gap-2 hover:brightness-110 transition shadow-card"
        >
          <Search className="size-4" /> {t.booking.search}
        </button>
      </form>
    </div>
  );
}

type FieldProps = {
  icon: React.ReactNode;
  label: string;
  type?: string;
  defaultValue?: string;
  ref?: React.Ref<HTMLInputElement>;
};

function Field({ icon, label, type = "text", defaultValue, ref }: FieldProps) {
  return (
    <label className="bg-white/85 rounded-xl px-3.5 py-2 flex flex-col gap-0.5 border border-white/60">
      <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-semibold">
        {label}
      </span>
      <div className="flex items-center gap-2 text-sm text-foreground">
        <span className="text-accent">{icon}</span>
        <input
          ref={ref}
          type={type}
          defaultValue={defaultValue}
          className="bg-transparent w-full focus:outline-none text-sm font-medium"
        />
      </div>
    </label>
  );
}

type SelectFieldProps = {
  icon: React.ReactNode;
  label: string;
  options: string[];
  defaultValue?: string;
  ref?: React.Ref<HTMLSelectElement>;
};

function SelectField({ icon, label, options, defaultValue, ref }: SelectFieldProps) {
  return (
    <label className="bg-white/85 rounded-xl px-3.5 py-2 flex flex-col gap-0.5 border border-white/60">
      <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-semibold">
        {label}
      </span>
      <div className="flex items-center gap-2 text-sm text-foreground">
        <span className="text-accent">{icon}</span>
        <select
          ref={ref}
          defaultValue={defaultValue}
          className="bg-transparent w-full focus:outline-none text-sm font-medium cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </label>
  );
}
