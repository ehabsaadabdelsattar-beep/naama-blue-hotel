import { CalendarDays, Users, BedDouble, Search } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { useState, useRef } from "react";

export function BookingBar({ floating = false }: { floating?: boolean }) {
  const navigate = useNavigate();
  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);
  const adultsRef = useRef<HTMLSelectElement>(null);
  const roomsRef = useRef<HTMLSelectElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const checkIn = checkInRef.current?.value;
    const checkOut = checkOutRef.current?.value;
    const adults = adultsRef.current?.value || "2 Adults";
    const rooms = roomsRef.current?.value || "1 Room";

    // Navigate with search params
    navigate({
      to: "/book",
      search: {
        checkIn,
        checkOut,
        adults,
        rooms,
      }
    });
  };

  return (
    <div
      className={`${floating ? "absolute left-1/2 -translate-x-1/2 -bottom-12 w-[min(1100px,92vw)]" : "w-full"} z-50`}
    >
      <form
        onSubmit={handleSearch}
        className="glass rounded-2xl shadow-luxe p-3 md:p-4 grid grid-cols-2 md:grid-cols-5 gap-3 items-end"
      >
        <Field icon={<CalendarDays className="size-4" />} label="Check-in" type="date" ref={checkInRef} />
        <Field icon={<CalendarDays className="size-4" />} label="Check-out" type="date" ref={checkOutRef} />
        <SelectField icon={<Users className="size-4" />} label="Guests" ref={adultsRef} options={["1 Adult", "2 Adults", "3 Adults", "4 Adults"]} defaultValue="2 Adults" />
        <SelectField icon={<BedDouble className="size-4" />} label="Rooms" ref={roomsRef} options={["1 Room", "2 Rooms", "3 Rooms"]} defaultValue="1 Room" />
        <button type="submit" className="col-span-2 md:col-span-1 h-12 rounded-xl bg-accent text-accent-foreground font-semibold inline-flex items-center justify-center gap-2 hover:brightness-110 transition shadow-card">
          <Search className="size-4" /> Search
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
      <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-semibold">{label}</span>
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
      <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-semibold">{label}</span>
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
