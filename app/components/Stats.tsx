"use client";

import { FaUserPlus, FaAward, FaBoxOpen, FaClock } from "react-icons/fa";

export default function Stats() {
  const stats = [
    { icon: <FaAward />, value: "1+", label: "Years of Trust" },
    { icon: <FaUserPlus />, value: "5k+", label: "Happy Customers" },
    { icon: <FaBoxOpen />, value: "100%", label: "Genuine Medicines" },
    { icon: <FaClock />, value: "24/7", label: "Emergency Service" },
  ];

  return (
    <section className="relative -mt-10 z-20 px-6 animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-[#0F172A] rounded-4xl shadow-xl border border-blue-100 dark:border-blue-900/30 p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-800">
          
          {stats.map((stat, i) => (
            <div key={i} className="flex-1 px-6 flex flex-col items-center text-center w-full group">
              {/* Icon with Hover Glow */}
              <div className="text-4xl text-[#3B82F6] mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                {stat.icon}
              </div>
              
              {/* Number */}
              <h3 className="text-4xl font-bold text-[#0A1A44] dark:text-white mb-1 font-sans">
                {stat.value}
              </h3>
              
              {/* Label */}
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}