"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiSun, FiMoon, FiMenu, FiX, FiPhone } from "react-icons/fi";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Brands", href: "#brands" },
    { name: "Offers", href: "#offers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 md:px-8">
      {/* DASHBOARD NAV CONTAINER */}
      <div className="max-w-7xl mx-auto bg-white/80 dark:bg-[#020617]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-full shadow-sm px-6 py-4 flex items-center justify-between transition-all duration-300">
        
        {/* LEFT: SRMGS LOGO */}
        <Link 
          href="/" 
          className="flex items-center justify-center"
          onClick={() => setActiveLink("Home")}
        >
          <div className="
            px-5 py-2 
            border-2 border-[#3B82F6] 
            rounded-full 
            text-[#3B82F6] dark:text-white 
            font-bold tracking-wider 
            hover:bg-[#3B82F6] hover:text-white 
            transition-all duration-300
            text-sm md:text-base
          ">
            SRMGS
          </div>
        </Link>

        {/* CENTER: DASHBOARD STYLE LINKS */}
        <div className="hidden md:flex items-center gap-2 bg-gray-100/50 dark:bg-white/5 p-1.5 rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeLink === link.name 
                  ? "bg-[#3B82F6] text-white shadow-md"  // FORCED BLUE BACKGROUND
                  : "text-[#0A1A44]/70 dark:text-gray-400 hover:text-[#3B82F6] hover:bg-white dark:hover:bg-white/10" 
                }
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT: ICONS */}
        <div className="flex items-center gap-3">
          {/* Call Icon */}
          <a
            href="tel:+919828204344"
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 text-[#0A1A44] dark:text-white hover:bg-[#3B82F6] hover:text-white hover:border-[#3B82F6] transition-all duration-300"
            title="Call Now"
          >
            <FiPhone />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#E9F3FF] dark:bg-white/10 text-[#0A1A44] dark:text-[#FFEAA7] hover:scale-110 transition-transform"
          >
            {mounted && theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-[#0A1A44] dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white dark:bg-[#020617] rounded-4xl p-6 shadow-2xl border border-gray-100 dark:border-gray-800 animate-fade-in-up md:hidden">
           <div className="flex flex-col gap-2">
             {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsOpen(false);
                }}
                className={`
                  text-center py-3 rounded-xl text-lg font-medium transition-colors
                  ${activeLink === link.name 
                    ? "bg-[#3B82F6] text-white" 
                    : "text-[#0A1A44] dark:text-gray-300 hover:bg-[#E9F3FF] dark:hover:bg-white/5"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
           </div>
        </div>
      )}
    </nav>
  );
}