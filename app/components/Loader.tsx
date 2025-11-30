"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#E9F3FF] dark:bg-[#020617] transition-opacity duration-700 ease-out">
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Pulsing Logo Circle */}
        <div className="w-24 h-24 rounded-full bg-linear-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center shadow-2xl animate-bounce">
          <span className="text-white text-3xl font-bold tracking-tighter">
            SR
          </span>
        </div>
        
        {/* Ripples */}
        <div className="absolute inset-0 rounded-full border-4 border-[#3B82F6]/30 animate-ping" />
        
        {/* Text */}
        <h1 className="mt-8 text-2xl font-bold text-[#0A1A44] dark:text-white tracking-widest animate-pulse">
          SHRI RAM MEDICAL
        </h1>
        <p className="text-sm text-[#3B82F6] font-medium tracking-widest mt-2 uppercase">
          Loading Store...
        </p>
      </div>
    </div>
  );
}