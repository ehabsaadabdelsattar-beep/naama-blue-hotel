import deluxe from "@/assets/room-deluxe.jpg";
import twin from "@/assets/room-twin.jpg";
import family from "@/assets/room-family.jpg";
import type { Messages } from "@/i18n";

export type RoomSlug = "deluxe-room" | "twin-room" | "family-suite";

export type Room = {
  slug: RoomSlug;
  name: string;
  tagline: string;
  description: string;
  image: string;
  size: string;
  beds: string;
  view: string;
  guests: number;
  price: number;
  amenities: string[];
};

const roomBases = [
  {
    slug: "deluxe-room" as const,
    image: deluxe,
    size: "38 m²",
    beds: "1 King",
    view: "Sea View",
    guests: 2,
    price: 145,
  },
  {
    slug: "twin-room" as const,
    image: twin,
    size: "34 m²",
    beds: "2 Twin",
    view: "Bay View",
    guests: 2,
    price: 125,
  },
  {
    slug: "family-suite" as const,
    image: family,
    size: "62 m²",
    beds: "1 King + 2 Twin",
    view: "Pool & Sea View",
    guests: 4,
    price: 235,
  },
];

export function getLocalizedRooms(messages: Messages): Room[] {
  return roomBases.map((base) => {
    const copy = messages.roomsData[base.slug];
    return { ...base, ...copy };
  });
}

export function getRoom(slug: string, messages: Messages): Room | undefined {
  return getLocalizedRooms(messages).find((r) => r.slug === slug);
}

export function isRoomSlug(slug: string): slug is RoomSlug {
  return roomBases.some((b) => b.slug === slug);
}
