import React from "react";
import { Navbar } from "./components/site/Navbar";
import { Footer } from "./components/site/Footer";
import { FloatingWhatsApp } from "./components/site/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section id="hero" className="min-h-[60vh] flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-5 text-center">
            <h1 className="text-5xl font-display mb-4">Naama Blue Hotel</h1>
            <p className="text-lg text-muted-foreground">Luxury on Naama Bay, Sharm El Sheikh</p>
          </div>
        </section>

        <section id="rooms" className="py-20">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-3xl font-display mb-6">Rooms & Suites</h2>
            <p className="text-muted-foreground">Sample content for rooms</p>
          </div>
        </section>

        <section id="experience" className="py-20">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-3xl font-display mb-6">Experience</h2>
            <p className="text-muted-foreground">Sample content for experiences</p>
          </div>
        </section>

        <section id="gallery" className="py-20">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-3xl font-display mb-6">Gallery</h2>
          </div>
        </section>

        <section id="offers" className="py-20">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-3xl font-display mb-6">Special Offers</h2>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="max-w-6xl mx-auto px-5">
            <h2 className="text-3xl font-display mb-6">Contact</h2>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
