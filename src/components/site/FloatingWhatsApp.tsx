import { MessageCircle } from "lucide-react";
import { SITE } from "@/config/site";

export const WHATSAPP_NUMBER = SITE.contact.whatsappE164;
export const WHATSAPP_DISPLAY = SITE.contact.whatsapp;

export function buildWhatsAppUrl(message?: string) {
  const text = message ?? `Hello ${SITE.name}, I'd like to make a reservation.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-luxe hover:brightness-110 transition"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline text-sm font-semibold">Book on WhatsApp</span>
    </a>
  );
}
