"use client";

import { FaBriefcaseMedical, FaPhoneAlt, FaFilePrescription } from "react-icons/fa";
import { useState } from "react";

export default function EmergencyCta() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 items-start"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      {/* EXPANDED OPTIONS (Slide up when hovered) */}
      <div className={`
        flex flex-col gap-3 transition-all duration-300 origin-bottom-left
        ${expanded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-0 pointer-events-none"}
      `}>
        
        {/* Option 1: Upload Prescription */}
        <button className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-[#1E293B] rounded-full shadow-lg border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform group">
          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-300">
            <FaFilePrescription />
          </div>
          <span className="text-sm font-semibold text-[#0A1A44] dark:text-white whitespace-nowrap">
            Upload Prescription
          </span>
        </button>

        {/* Option 2: Emergency Call */}
        <a href="tel:+919828204344" className="flex items-center gap-3 px-4 py-2 bg-white dark:bg-[#1E293B] rounded-full shadow-lg border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform group">
          <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-300">
            <FaPhoneAlt />
          </div>
          <span className="text-sm font-semibold text-[#0A1A44] dark:text-white whitespace-nowrap">
            Emergency Call
          </span>
        </a>
      </div>

      {/* MAIN FLOATING BUTTON */}
      <div className={`
        relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg cursor-pointer transition-all duration-300
        ${expanded ? "bg-[#0A1A44] rotate-90" : "bg-[#2563EB] animate-[pulse_3s_infinite]"}
      `}>
        <FaBriefcaseMedical className="text-white text-xl" />
        
        {/* Badge */}
        {!expanded && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-[#020617]" />
        )}
      </div>
    </div>
  );
}