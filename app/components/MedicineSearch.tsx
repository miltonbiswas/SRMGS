"use client";

import { useState } from "react";
import { FaSearch, FaWhatsapp } from "react-icons/fa";

export default function MedicineSearch() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // The Magic: Redirect to WhatsApp with the query
    const message = `Hello Shri Ram Medical, do you have '${query}' in stock?`;
    const url = `https://wa.me/919828204344?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 relative z-30">
      <form 
        onSubmit={handleSearch}
        className="relative group"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] rounded-full opacity-20 group-hover:opacity-40 blur transition duration-500" />
        
        <div className="relative flex items-center bg-white dark:bg-[#0F172A] rounded-full shadow-xl border border-blue-100 dark:border-blue-900/50 p-2">
          
          {/* Search Icon */}
          <div className="pl-4 text-[#3B82F6] text-xl">
            <FaSearch />
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search medicine (e.g., Crocin, Insulin)..."
            className="w-full bg-transparent border-none outline-none px-4 py-3 text-[#0A1A44] dark:text-white placeholder-gray-400 font-medium"
          />

          {/* Action Button */}
          <button
            type="submit"
            className="hidden sm:flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-md"
          >
            <FaWhatsapp className="text-xl" />
            Check Stock
          </button>

          {/* Mobile Icon Button (Small Screens) */}
          <button
            type="submit"
            className="sm:hidden flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-full text-white shadow-md"
          >
            <FaWhatsapp className="text-xl" />
          </button>
        </div>
      </form>

      {/* Helper Text */}
      <p className="text-center text-xs text-[#0A1A44]/50 dark:text-gray-500 mt-3 font-medium">
        🚀 Type a medicine name to check availability instantly on WhatsApp
      </p>
    </div>
  );
}