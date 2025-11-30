"use client";

import { FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 relative overflow-hidden bg-[#E9F3FF] dark:bg-[#020617] rounded-[48px] animate-fade-in-up"
    >
      {/* Soft Clinic Glows */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-[#3B82F6]/20 blur-[130px] rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#2563EB]/25 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-semibold font-sans mb-6 text-[#0A1A44] dark:text-white">
          संपर्क करें
        </h2>

        {/* Subtitle */}
        <p className="text-[#0A1A44]/70 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-20">
          दवाओं की उपलब्धता, स्वास्थ्य मार्गदर्शन या किसी भी जानकारी के लिए
          हमसे संपर्क करें। श्री राम मेडिकल & जनरल स्टोर — 24×7 आपकी सेवा में।
        </p>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

          {/* PHONE CARD */}
          <div className="group bg-white/90 dark:bg-white/5 backdrop-blur-xl p-10 rounded-4xl shadow-lg border border-slate-200 dark:border-white/10 hover:shadow-[0_10px_40px_rgba(37,99,235,0.25)] hover:-translate-y-2 transition-all duration-500">
            <FaPhoneAlt
              className="text-[#2563EB] dark:text-[#93C5FD] text-3xl mb-4 mx-auto group-hover:scale-110 transition"
            />
            <h3 className="font-semibold text-xl text-[#0A1A44] dark:text-white mb-2">
              फोन
            </h3>
            <a
              href="tel:+919828204344"
              className="text-[#0A1A44]/70 dark:text-gray-300 text-lg hover:text-[#2563EB] transition"
            >
              +91 9828204344
            </a>
          </div>

          {/* ADDRESS CARD */}
          <div className="group bg-white/90 dark:bg-white/5 backdrop-blur-xl p-10 rounded-4xl shadow-lg border border-slate-200 dark:border-white/10 hover:shadow-[0_10px_40px_rgba(37,99,235,0.25)] hover:-translate-y-2 transition-all duration-500">
            <div className="relative w-fit mx-auto mb-4">
              <FaMapMarkerAlt
                className="text-[#2563EB] dark:text-[#93C5FD] text-3xl animate-[pinPulse_2s_infinite]"
              />
              <span className="absolute inset-0 rounded-full bg-[#2563EB]/20 blur-xl opacity-50 animate-[pulseGlow_2.5s_infinite]" />
            </div>

            <h3 className="font-semibold text-xl text-[#0A1A44] dark:text-white mb-2">
              पता
            </h3>

            <p className="text-[#0A1A44]/70 dark:text-gray-300 leading-relaxed">
              नवरत्ना कॉम्प्लेक्स, सिरोड़ी<br />
              तहसील रेवदर, जिला सिरोही (राजस्थान)
            </p>
          </div>

          {/* TIMING CARD */}
          <div className="group bg-white/90 dark:bg-white/5 backdrop-blur-xl p-10 rounded-4xl shadow-lg border border-slate-200 dark:border-white/10 hover:shadow-[0_10px_40px_rgba(37,99,235,0.25)] hover:-translate-y-2 transition-all duration-500">
            <FaRegClock
              className="text-[#2563EB] dark:text-[#93C5FD] text-3xl mb-4 mx-auto group-hover:rotate-6 transition"
            />
            <h3 className="font-semibold text-xl text-[#0A1A44] dark:text-white mb-2">
              समय
            </h3>

            <p className="text-[#0A1A44]/70 dark:text-gray-300 leading-relaxed">
              24 घंटे — सप्ताह के 7 दिन<br />
              (आपातकालीन सेवा उपलब्ध)
            </p>
          </div>
        </div>

        {/* --- NEW: LIVE MAP EMBED + BUTTON --- */}
        <div className="relative rounded-4xl overflow-hidden shadow-2xl border-4 border-white dark:border-[#1F2937]">
          {/* Iframe: Google Maps Embed for Sirodi/Reodar Area */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.5230233190077!2d72.68424971126697!3d24.708918151212455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39432bce422738a3%3A0x7e205b7f5d191e4b!2sShri%20Ram%20Medical%20%26%20General%20Store!5e0!3m2!1sen!2sin!4v1764517875578!5m2!1sen!2sin"
            width="100%" 
            height="400" 
            style={{ border: 0, filter: "grayscale(20%) contrast(1.2)" }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="hover:filter-none transition-all duration-500"
          ></iframe>
          {/* Overlay Button */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <a
              href="https://maps.app.goo.gl/ooLxJScZxvmRy9pi7"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#0A1A44] hover:bg-[#2563EB] text-white text-base font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
            >
              <FaMapMarkerAlt /> Google Maps पर देखें
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes pinPulse { 0% { transform: translateY(0); } 50% { transform: translateY(-4px); } 100% { transform: translateY(0); } }
        @keyframes pulseGlow { 0%,100% { opacity: 0.4; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.2); } }
      `}</style>
    </section>
  );
}