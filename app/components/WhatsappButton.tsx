"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919828204344?text=Hello%20Shri%20Ram%20Medical,%20I%20want%20to%20order%20medicines."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping group-hover:opacity-100 duration-1000" />
      
      {/* Main Button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-green-500/40 hover:-translate-y-1 hover:scale-110 transition-all duration-300">
        <FaWhatsapp className="text-white text-3xl" />
      </div>

      {/* Tooltip (Visible on Hover) */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-xs font-bold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Order Medicines
      </span>
    </a>
  );
}