export const en = {
  brand: {
    name: "Naama Blue Hotel",
    tagline: "Luxury on Naama Bay, Sharm El Sheikh",
  },
  nav: {
    home: "Home",
    rooms: "Rooms",
    experience: "Experience",
    gallery: "Gallery",
    offers: "Offers",
    about: "About",
    contact: "Contact",
    bookNow: "Book Now",
    menuToggle: "Toggle menu",
  },
  booking: {
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    rooms: "Rooms",
    search: "Search",
    guestOptions: ["1 Adult", "2 Adults", "3 Adults", "4 Adults"],
    roomOptions: ["1 Room", "2 Rooms", "3 Rooms"],
  },
  footer: {
    tagline:
      "A tropical escape on the shore of Naama Bay, Sharm El Sheikh — where the Red Sea meets refined hospitality.",
    explore: "Explore",
    roomsSuites: "Rooms & Suites",
    specialOffers: "Special Offers",
    aboutUs: "About Us",
    contact: "Contact",
    rights: (year: number) => `© ${year} Naama Blue Hotel. All rights reserved.`,
  },
  errors: {
    notFoundTitle: "Page not found",
    notFoundBody: "The page you're looking for doesn't exist or has been moved.",
    errorTitle: "This page didn't load",
    errorBody: "Something went wrong on our end. You can try refreshing or head back home.",
    goHome: "Go home",
    tryAgain: "Try again",
  },
  seo: {
    defaultTitle: "Naama Blue Hotel — Luxury on Naama Bay, Sharm El Sheikh",
    defaultDescription:
      "A tropical luxury escape in the heart of Naama Bay. Sea-view rooms, infinity pool, diving, desert safaris and the vibrant Sharm El Sheikh nightlife.",
  },
} as const;

export type Messages = typeof en;
