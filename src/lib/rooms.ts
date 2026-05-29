import deluxe from "@/assets/room-deluxe.jpg";
import twin from "@/assets/room-twin.jpg";
import family from "@/assets/room-family.jpg";

export type Room = {
  slug: string;
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

export const rooms: Room[] = [
  {
    slug: "deluxe-room",
    name: "Deluxe Sea View",
    tagline: "Wake to the Red Sea, sleep to the waves.",
    description:
      "A refined retreat with floor-to-ceiling windows opening onto the bay. Plush king bed, marble bath, and a private balcony for sunrise coffee.",
    image: deluxe,
    size: "38 m²",
    beds: "1 King",
    view: "Sea View",
    guests: 2,
    price: 145,
    amenities: ["Balcony", "Rain shower", "Smart TV", "Espresso machine", "Premium linens"],
  },
  {
    slug: "twin-room",
    name: "Twin Bay Room",
    tagline: "Bright, breezy, made for explorers.",
    description:
      "Two crisp twin beds, an airy interior, and a balcony framing the marina. Ideal for friends and divers sharing a Sharm adventure.",
    image: twin,
    size: "34 m²",
    beds: "2 Twin",
    view: "Bay View",
    guests: 2,
    price: 125,
    amenities: ["Balcony", "Work desk", "Smart TV", "Mini bar", "Daily housekeeping"],
  },
  {
    slug: "family-suite",
    name: "Family Suite",
    tagline: "Space for everyone, memories for all.",
    description:
      "A spacious two-bedroom suite with a lounge area and pool-side terrace. Designed around family rhythms — early swims, slow breakfasts, late games.",
    image: family,
    size: "62 m²",
    beds: "1 King + 2 Twin",
    view: "Pool & Sea View",
    guests: 4,
    price: 235,
    amenities: ["Lounge area", "Pool terrace", "2 bathrooms", "Smart TV", "Kids welcome kit"],
  },
];

export const getRoom = (slug: string) => rooms.find((r) => r.slug === slug);
