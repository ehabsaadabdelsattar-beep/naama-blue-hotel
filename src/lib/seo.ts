import { SITE } from "@/config/site";

type MetaInput = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
};

export function pageMeta({ title, description, path = "", ogImage }: MetaInput) {
  const url = `${SITE.url}${path}`;
  const fullTitle = title.includes(SITE.name) ? title : `${title} — ${SITE.name}`;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "en_US" },
      ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function hotelJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: SITE.name,
    description:
      "Luxury hotel on Naama Bay, Sharm El Sheikh — sea-view rooms, infinity pool, and Red Sea experiences.",
    url: SITE.url,
    telephone: SITE.contact.phoneE164,
    email: SITE.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "King Abdullah St, Naama Bay",
      addressLocality: "Sharm El Sheikh",
      addressCountry: "EG",
    },
  };
}
