/** Shared search params for `/book` — keep in sync with `book` route `validateSearch`. */
export type BookSearch = {
  room?: string;
  offer?: string;
  price?: string;
  roomName?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: string;
  rooms?: string;
};

export function parseBookSearch(search: Record<string, unknown>): BookSearch {
  const str = (key: string) =>
    typeof search[key] === "string" ? (search[key] as string) : undefined;

  return {
    room: str("room"),
    offer: str("offer"),
    price: str("price"),
    roomName: str("roomName"),
    checkIn: str("checkIn"),
    checkOut: str("checkOut"),
    adults: str("adults"),
    rooms: str("rooms"),
  };
}

/** TanStack Router expects every search key when linking to `/book`. */
export function bookSearch(partial: BookSearch = {}) {
  return {
    room: partial.room,
    offer: partial.offer,
    price: partial.price,
    roomName: partial.roomName,
    checkIn: partial.checkIn,
    checkOut: partial.checkOut,
    adults: partial.adults,
    rooms: partial.rooms,
  };
}
