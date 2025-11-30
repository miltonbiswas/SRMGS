"use client";

import { FaHome, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-100 md:hidden">
      {/* Glassmorphism Container */}
      <div className="bg-white/90 dark:bg-[#0F172A]/95 backdrop-blur-xl border-t border-blue-100 dark:border-blue-900/30 pb-safe pt-2 px-6 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center h-16">
          
          {/* Home */}
          <a href="#" className="flex flex-col items-center gap-1 group">
            <div className="p-2 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-white/5 transition">
              <FaHome className="text-xl text-gray-400 group-hover:text-[#3B82F6]" />
            </div>
            <span className="text-[10px] font-medium text-gray-500 group-hover:text-[#3B82F6]">Home</span>
          </a>

          {/* Map */}
          <a href="#contact" className="flex flex-col items-center gap-1 group">
            <div className="p-2 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-white/5 transition">
              <FaMapMarkerAlt className="text-xl text-gray-400 group-hover:text-[#3B82F6]" />
            </div>
            <span className="text-[10px] font-medium text-gray-500 group-hover:text-[#3B82F6]">Visit</span>
          </a>

          {/* FLOATING ACTION BUTTON (WhatsApp) */}
          <div className="relative -top-6">
            <a 
              href="https://wa.me/919828204344"
              target="_blank"
              className="flex items-center justify-center w-14 h-14 bg-linear-to-r from-[#25D366] to-[#128C7E] rounded-full shadow-lg shadow-green-500/30 border-4 border-[#E9F3FF] dark:border-[#020617] transform active:scale-95 transition-transform"
            >
              <FaWhatsapp className="text-2xl text-white" />
            </a>
          </div>

          {/* Call */}
          <a href="tel:+919828204344" className="flex flex-col items-center gap-1 group">
            <div className="p-2 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-white/5 transition">
              <FaPhoneAlt className="text-xl text-gray-400 group-hover:text-[#3B82F6]" />
            </div>
            <span className="text-[10px] font-medium text-gray-500 group-hover:text-[#3B82F6]">Call</span>
          </a>

          {/* Offer */}
          <a href="#offers" className="flex flex-col items-center gap-1 group">
             <div className="p-2 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-white/5 transition">
               {/* Simple Tag Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 group-hover:text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <span className="text-[10px] font-medium text-gray-500 group-hover:text-[#3B82F6]">Offers</span>
          </a>

        </div>
      </div>
    </div>
  );
}