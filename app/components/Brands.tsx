"use client";

export default function Brands() {
  const brands = [
    "Cipla",
    "Sun Pharma",
    "Himalaya",
    "Zydus",
    "Lupin",
    "Alkem",
    "Intas",
    "AstraZeneca",
    "Glenmark",
    "Mankind",
    "Torrent Pharma",
    "and many more…",
  ];

  return (
    <section
      id="brands"
      className="relative py-24 px-6 bg-brand-light dark:bg-brand-dark overflow-hidden"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 right-10 w-72 h-72 bg-brand-primary/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-brand-accent/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold font-sans text-brand-text dark:text-white mb-6">
          Brands We Deal In
        </h2>

        {/* SUBTITLE */}
        <p className="text-brand-text/70 dark:text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-16">
          We deliver authentic medicines from India’s most trusted
          pharmaceutical manufacturers — ensuring purity, safety & reliability.
        </p>

        {/* 🟦 BRAND MARQUEE CONTAINER */}
        <div className="relative w-full overflow-hidden py-8">
          {/* TRACK */}
          <div className="marquee flex gap-8 w-max">
            {/* Duplicated list for seamless scrolling */}
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="min-w-[180px] px-6 py-4 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 rounded-[28px] shadow-md text-brand-text dark:text-gray-200 text-center font-medium hover:shadow-brand-primary/20 hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 cursor-pointer relative group overflow-hidden"
              >
                {/* SHINE EFFECT */}
                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[shine_1.4s_ease_in_out_infinite]" />
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER TAGLINE */}
        <p className="mt-5 text-brand-text/50 dark:text-gray-500 text-sm italic">
          Trusted brands. Authentic products. Your health, our responsibility.
        </p>
      </div>

      {/* KEYFRAMES FOR MARQUEE */}
      <style jsx>{`
        .marquee {
          animation: marqueeScroll 30s linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes shine {
          0% { transform: translateX(-150%) skewX(-20deg); }
          100% { transform: translateX(150%) skewX(-20deg); }
        }
      `}</style>
    </section>
  );
}