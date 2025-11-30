"use client";

import { FaWhatsapp, FaInstagram, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-0 pt-20 pb-10 px-6 bg-[#E9F3FF] dark:bg-[#020617] overflow-hidden rounded-t-[40px]">
      
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#3B82F6] to-transparent opacity-50" />

      {/* Ambient Glows */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#2563EB]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-white/50 dark:from-[#0F172A] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* COLUMN 1: BRANDING (Span 5) */}
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-3xl font-bold font-sans text-[#0A1A44] dark:text-white tracking-tight">
              Shri Ram <span className="text-[#3B82F6]">Medical</span>
            </h2>
            <p className="text-[#0A1A44]/70 dark:text-gray-400 leading-relaxed text-lg max-w-sm">
              Your trusted partner in health. Genuine medicines, expert guidance, and 24/7 care for you and your family.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: <FaWhatsapp />, href: "https://wa.me/919828204344", color: "hover:bg-green-500" },
                { icon: <FaInstagram />, href: "#", color: "hover:bg-pink-600" },
                { icon: <FaFacebookF />, href: "#", color: "hover:bg-blue-600" },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-[#0A1A44] dark:text-white shadow-md transition-all duration-300 hover:text-white hover:-translate-y-1 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: LINKS (Span 3) */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold text-[#0A1A44] dark:text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#3B82F6] rounded-full"></span> Explore
            </h3>
            <ul className="space-y-4">
              {["Home", "Services", "Brands", "Offers", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="flex items-center gap-2 text-[#0A1A44]/70 dark:text-gray-400 hover:text-[#3B82F6] hover:translate-x-2 transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] opacity-0 hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: VISIT US (Span 4) */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold text-[#0A1A44] dark:text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-[#FFEAA7] rounded-full"></span> Visit Store
            </h3>
            
            <div className="bg-white/60 dark:bg-white/5 p-6 rounded-3xl border border-white/50 dark:border-white/10 backdrop-blur-sm">
              <p className="text-[#0A1A44]/80 dark:text-gray-300 mb-4 leading-relaxed">
                Navratna Complex, Near Asawa Road,<br />
                Sirodi, Reodar, Sirohi (Raj.)
              </p>
              <a 
                href="https://maps.app.goo.gl/ooLxJScZxvmRy9pi7" 
                target="_blank"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#3B82F6] hover:underline"
              >
                <FaMapMarkerAlt /> Get Directions
              </a>
            </div>

            <div className="mt-6 flex items-center justify-between text-sm font-medium bg-[#3B82F6]/10 dark:bg-[#3B82F6]/20 p-4 rounded-2xl text-[#2563EB] dark:text-[#93C5FD]">
              <span>Helpline:</span>
              <span className="text-lg font-bold">+91 9828204344</span>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR - Glass Pill */}
        <div className="border-t border-[#0A1A44]/5 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#0A1A44]/50 dark:text-gray-500">
          <p>© {currentYear} Shri Ram Medical. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#3B82F6] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}