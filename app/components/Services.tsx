"use client";

import {
  FaCapsules,
  FaLeaf,
  FaDog,
  FaTruck,
  FaClock,
  FaTags,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCapsules />,
      title: "Allopathic Medicines",
      desc: "ब्रांडेड व जेनेरिक दवाइयों की उपलब्धता — गुणवत्ता और प्रमाणिकता की पूरी गारंटी।",
    },
    {
      icon: <FaLeaf />,
      title: "Ayurvedic Products",
      desc: "शुद्ध आयुर्वेदिक उत्पाद, प्राकृतिक जड़ी-बूटियों से निर्मित, बेहतर स्वास्थ्य के लिए।",
    },
    {
      icon: <FaDog />,
      title: "Veterinary Medicines",
      desc: "पशुओं और पालतू जानवरों के लिए विश्वसनीय चिकित्सा उत्पाद उपलब्ध।",
    },
    {
      icon: <FaTruck />,
      title: "Wholesale Supply",
      desc: "क्लीनिक, अस्पताल और दुकानों के लिए थोक मूल्य पर बेहतरीन दवाओं की सप्लाई।",
    },
    {
      icon: <FaClock />,
      title: "24/7 Availability",
      desc: "आपातकालीन स्थितियों में भी चौबीसों घंटे सेवा उपलब्ध।",
    },
    {
      icon: <FaTags />,
      title: "Offers & Discounts",
      desc: "चयनित दवाओं और उत्पादों पर आकर्षक ऑफ़र और विशेष छूट।",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 px-6 bg-[#E9F3FF] dark:bg-[#020617] overflow-hidden"
    >
      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-10 right-10 w-72 h-72 bg-[#3B82F6]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#2563EB]/10 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold font-sans text-[#0A1A44] dark:text-white mb-4">
          हमारी सेवाएँ
        </h2>
        <p className="text-base md:text-lg mb-16 max-w-2xl mx-auto text-[#0A1A44]/70 dark:text-gray-300 leading-relaxed">
          आपकी सभी दवाई ज़रूरतों के लिए एक विश्वसनीय समाधान — गुणवत्ता, उपलब्धता और विश्वास के साथ।
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-4xl bg-white dark:bg-white/5 border border-white/50 dark:border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#3B82F6]/50"
            >
              {/* ICON CONTAINER - FIXED COLORS */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-[22px] text-white text-3xl flex items-center justify-center bg-linear-to-br from-[#3B82F6] to-[#2563EB] shadow-md group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3 text-[#0A1A44] dark:text-gray-100">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm leading-relaxed text-[#0A1A44]/70 dark:text-gray-400">
                {item.desc}
              </p>

              {/* CARD GLOW ON HOVER */}
              <div className="absolute -z-10 inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-[#3B82F6]/20 rounded-4xl transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}