"use client";

import { useRef } from "react";
import Image from "next/image";
import MedicineSearch from "./MedicineSearch";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // GPU parallax without React re-renders
  const handleParallax = (e: React.MouseEvent<HTMLDivElement>) => {
    const area = containerRef.current;
    if (!area) return;

    const rect = area.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    const elems = area.querySelectorAll<HTMLElement>("[data-parallax]");
    elems.forEach((el) => {
      const depth = Number(el.dataset.parallax) || 1;
      el.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
    });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleParallax}
      className="relative w-full px-6 py-28 overflow-hidden bg-[#E9F3FF] dark:bg-[#020617] rounded-b-[48px]"
    >
      {/* BACKGROUND ACCENTS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-[#3B82F6]/25 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2563EB]/30 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#0A1A44] dark:text-white mb-6 font-sans">
            Shri Ram Medical<br />
            <span className="text-[#2563EB]">
              & General Store
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed mb-8 text-[#354A67] dark:text-gray-300">
            सीरोड़ी का सबसे विश्वसनीय मेडिकल स्टोर —
            एलोपैथिक, आयुर्वेदिक और वेटरनरी दवाइयाँ
            प्रमाणित गुणवत्ता और किफायती दामों पर 24×7 उपलब्ध।
          </p>
          {/* ADD THIS NEW SEARCH BAR HERE */}
          <div className="mb-10">
            <MedicineSearch />
          </div>

          {/* TAG BADGES (Keep existing code below) */}
          <div className="flex flex-wrap gap-4 mb-10"></div>
          {/* TAG BADGES */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              "🏥 Trusted Pharmacy",
              "🔬 Quality Medicines",
              "💊 Retail & Wholesale"
            ].map((item, i) => (
              <span
                key={i}
                className="bg-white dark:bg-[#111827] px-5 py-2 rounded-full shadow-md text-sm border border-black/10 dark:border-white/10 font-medium"
              >
                {item}
              </span>
            ))}
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-5">
            <a
              href="tel:+919828204344"
              className="px-8 py-3 text-lg font-semibold rounded-full bg-[#2563EB] text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              अभी कॉल करें
            </a>

            <a
              href="https://maps.app.goo.gl/ooLxJScZxvmRy9pi7"
              target="_blank"
              className="px-8 py-3 text-lg font-semibold rounded-full bg-white dark:bg-[#111827] text-[#2563EB] dark:text-[#93C5FD] border border-[#2563EB]/40 hover:bg-[#2563EB] hover:text-white transition duration-300 shadow-md"
            >
              स्टोर का पता
            </a>
          </div>

          {/* MINI FLOATING CTA */}
          <div className="hidden md:flex items-center gap-3 mt-10 px-6 py-3 rounded-full bg-white/80 dark:bg-[#020617]/70 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-md text-sm">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2563EB] text-white text-lg">
              📞
            </span>
            <div className="leading-tight">
              <div className="font-semibold text-brand-text dark:text-white">24×7 Emergency Support</div>
              <a href="tel:+919828204344" className="underline text-[#2563EB] dark:text-[#93C5FD]">
                Tap to call instantly
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT PARALLAX IMAGE CLUSTER */}
        <div className="relative w-full flex justify-center items-center animate-fade-in-up">

          {/* GLOW */}
          <div className="absolute -top-16 -right-8 w-64 h-64 bg-blue-300/30 blur-[100px] rounded-full" />

          {/* MAIN CIRCLE */}
          <div
            data-parallax={45}
            className="relative w-[350px] h-[350px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-2xl p-2 bg-linear-to-br from-white to-[#DCEAFF] dark:from-[#1F2937] dark:to-[#020617] border border-white/70 dark:border-white/10 transition-transform duration-200"
          >
            <Image
              src="/hero_pharmacy_main.png"
              alt="Medical Store"
              fill
              className="object-cover rounded-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* MINI CIRCLE 1 */}
          <div
            data-parallax={-25}
            className="absolute -top-8 right-4 w-32 h-32 p-1 rounded-full overflow-hidden bg-linear-to-br from-blue-200 to-blue-400 border border-white/80 dark:border-white/20 shadow-xl transition-transform duration-200"
          >
            <Image
              src="/hero_pharmacy_detail1.png"
              alt="Medicine Detail"
              fill
              className="object-cover rounded-full"
              sizes="(max-width: 768px) 30vw, 15vw"
            />
          </div>

          {/* MINI CIRCLE 2 */}
          <div
            data-parallax={18}
            className="absolute bottom-2 left-4 w-28 h-28 p-1 rounded-full overflow-hidden bg-linear-to-br from-blue-100 to-blue-300 border border-white/90 dark:border-white/20 shadow-xl transition-transform duration-200"
          >
            <Image
              src="/hero_pharmacy_detail2.png"
              alt="Medicines"
              fill
              className="object-cover rounded-full"
              sizes="(max-width: 768px) 30vw, 15vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}