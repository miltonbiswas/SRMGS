"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollFeatures() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate Scroll Progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);

      // Show/Hide Back to Top Button
      if (winScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* 1. SCROLL PROGRESS BAR (Top of screen) */}
      <div className="fixed top-0 left-0 h-1.5 z-100 w-full bg-transparent">
        <div
          className="h-full bg-linear-to-r from-[#3B82F6] to-[#FFEAA7] shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-100 ease-out rounded-r-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 2. BACK TO TOP BUTTON (Bottom Left) */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-6 left-6 z-40 p-4 rounded-full
          bg-white dark:bg-[#020617] text-[#3B82F6]
          shadow-lg border border-[#3B82F6]/20
          transition-all duration-500 transform
          hover:bg-[#3B82F6] hover:text-white hover:-translate-y-1
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        `}
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>
    </>
  );
}