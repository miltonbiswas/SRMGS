"use client";

import { FaPercent, FaUserFriends, FaHandHoldingMedical } from "react-icons/fa";

export default function Offers() {
  const offers = [
    {
      icon: <FaPercent size={26} />,
      title: "Flat Discounts on Medicines",
      desc: "Save daily on selected Allopathic & Ayurvedic medicines without compromising quality.",
      tag: "Retail",
      discount: "10% OFF"
    },
    {
      icon: <FaUserFriends size={26} />,
      title: "Special Rates for Bulk / Wholesale",
      desc: "Exclusive pricing for clinics, hospitals, medical professionals and retailers.",
      tag: "Wholesale",
      discount: "Up to 30% OFF"
    },
    {
      icon: <FaHandHoldingMedical size={26} />,
      title: "Senior Citizen Care",
      desc: "Extra discounts and personalised guidance for elders with medicine support.",
      tag: "Care",
      discount: "Special Benefits"
    },
  ];

  return (
    <section
      id="offers"
      className="py-32 px-6 relative overflow-visible bg-[#E9F3FF] dark:bg-[#020617] rounded-[48px] animate-fade-in-up"
    >
      {/* Background Glow */}
      <div className="absolute top-16 left-10 w-80 h-80 bg-[#3B82F6]/30 blur-[130px] rounded-full" />
      <div className="absolute bottom-16 right-10 w-96 h-96 bg-[#2563EB]/25 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-[#0A1A44] dark:text-white mb-6">
          Current Offers & Benefits
        </h2>

        {/* Subtitle */}
        <p className="text-[#0A1A44]/70 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed mb-16">
          Save more with exclusive retail discounts, wholesale advantages, and supportive care for senior citizens.
        </p>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="group relative p-10 bg-white/90 dark:bg-white/5 backdrop-blur-xl rounded-4xl shadow-lg border border-slate-200 dark:border-white/10 hover:shadow-[0_10px_40px_rgba(37,99,235,0.30)] hover:-translate-y-2 transition-all duration-500"
            >
              {/* Floating ribbon tag - FORCED BLUE BACKGROUND */}
              <span className="absolute -top-3 left-4 px-4 py-1 text-xs tracking-wider font-semibold uppercase bg-[#2563EB] text-white rounded-full shadow group-hover:bg-[#3B82F6] transition">
                {offer.tag}
              </span>

              {/* Discount pill with pulse animation */}
              <span className="absolute -bottom-4 right-4 px-4 py-1 text-xs font-semibold bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full text-[#2563EB] dark:text-[#93C5FD] backdrop-blur-sm animate-pulse">
                {offer.discount}
              </span>

              {/* Icon Box - FORCED BLUE GRADIENT */}
              <div className="w-16 h-16 rounded-[22px] mb-6 mx-auto bg-linear-to-br from-[#3B82F6] to-[#2563EB] text-white flex items-center justify-center text-2xl shadow-xl group-hover:shadow-[0_0_18px_rgba(59,130,246,0.6)] transition-all duration-500">
                {offer.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 text-[#0A1A44] dark:text-gray-100">
                {offer.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#0A1A44]/70 dark:text-gray-300">
                {offer.desc}
              </p>

              {/* Shine overlay */}
              <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-25 transition-opacity animate-none group-hover:animate-[shine_1.5s_ease] pointer-events-none rounded-4xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-160%); }
          100% { transform: translateX(160%); }
        }
      `}</style>
    </section>
  );
}