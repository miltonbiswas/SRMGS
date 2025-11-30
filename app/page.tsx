"use client";

import Hero from "./components/Hero";
// WE ARE TEMPORARILY DISABLING THESE UNTIL WE CLEAN THEM
import Services from "./components/Services";
import About from "./components/About";
import Brands from "./components/Brands";
import Offers from "./components/Offers";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">

      {/* Background Glow Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/20 blur-[100px] rounded-full mix-blend-multiply filter opacity-70 animate-pulse" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/20 blur-[100px] rounded-full mix-blend-multiply filter opacity-70 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Page Sections */}
      <div className="flex flex-col gap-0">
        <section id="home">
          <Hero />
        </section>
        {/* 1. NEW STATS BAR - Overlaps Hero slightly for depth */}
        <Stats />
        <section id="services">
          <Services />
        </section>
        
        <section id="offers">
          <Offers />
        </section>
        <section id="about">
          <About />
        </section>

        <section id="brands">
          <Brands />
        </section>
        
        <section id="contact">
          <Contact />
          <ContactForm />
        </section> 
        
      </div>
    </main>
  );
}