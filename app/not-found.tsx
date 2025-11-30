import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#E9F3FF] dark:bg-[#020617] text-center px-6">
      
      {/* 404 Glitch Text */}
      <h1 className="text-9xl font-bold text-[#3B82F6] opacity-20">404</h1>
      
      <div className="absolute">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A1A44] dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-[#0A1A44]/60 dark:text-gray-400 mb-8">
          Oops! The medicine you are looking for is out of stock here.
        </p>

        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-[#3B82F6] text-white rounded-full font-bold shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1 transition-all"
        >
          <FaHome /> Return Home
        </Link>
      </div>
    </div>
  );
}