"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-[#E9F3FF] dark:bg-[#020617] rounded-[48px] overflow-hidden"
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-14 right-10 w-80 h-80 bg-[#3B82F6]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#2563EB]/25 blur-3xl rounded-full"></div>
      </div>

      {/* TITLE */}
      <h1 className="text-center text-4xl md:text-5xl font-bold font-sans text-[#0A1A44] dark:text-white leading-snug mb-20">
        हमारे बारे में — विश्वास, सेवा और स्वास्थ्य की जिम्मेदारी
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* LEFT CONTENT CARD */}
        <article className="relative p-10 rounded-4xl bg-white/80 dark:bg-white/5 border border-white/50 dark:border-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500">
          {/* HEADER */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-[#0A1A44] dark:text-gray-100">
            Shri Ram Medical & General Store
          </h2>

          {/* CONTENT */}
          <div className="space-y-4 text-[#0A1A44]/80 dark:text-gray-300 leading-relaxed text-lg">
            <p>
              श्री राम मेडिकल & जनरल स्टोर, सीरोड़ी (रेवदर, सिरोही) का एक विश्वसनीय और स्थापित
              मेडिकल स्टोर है, जहाँ एलोपैथिक, आयुर्वेदिक एवं वेटरनरी दवाइयों की संपूर्ण रेंज एक
              ही स्थान पर उपलब्ध है। हमारा उद्देश्य लोगों तक सही दवाइयाँ, सही जानकारी और सही मूल्य
              पहुँचाना है।
            </p>

            <p>
              हम केवल प्रमाणित और भरोसेमंद कंपनियों के उत्पाद उपलब्ध कराते हैं, ताकि ग्राहकों को
              दवाओं की गुणवत्ता को लेकर किसी भी प्रकार की चिंता न रहे। दवाइयों के साथ-साथ हम
              मार्गदर्शन, आवश्यक जानकारी और ईमानदार सेवा प्रदान करने में भी विश्वास रखते हैं।
            </p>

            <p>
              हमारी सेवाएँ 24×7 उपलब्ध हैं, ताकि आपातकालीन स्थिति में भी आपको दवाएँ समय पर मिल
              सकें। किफायती दाम, असली उत्पाद, विनम्र व्यवहार और त्वरित सेवा — यही हमारी पहचान है।
              श्री राम मेडिकल में आपका स्वागत है, जहाँ सेहत है हमारी ज़िम्मेदारी!
            </p>
          </div>
        </article>

        {/* RIGHT IMAGE AREA */}
        <div className="relative flex justify-center animate-fade-in-up">
          {/* MOLECULE DOTS */}
          <span className="absolute top-10 left-6 w-3 h-3 bg-[#2563EB] rounded-full animate-pulse" />
          <span className="absolute top-0 right-20 w-4 h-4 bg-[#3B82F6] rounded-full animate-ping" />
          <span className="absolute bottom-14 right-10 w-3 h-3 bg-[#2563EB] rounded-full animate-pulse" />

          {/* MAIN IMAGE */}
          <div className="relative rounded-4xl overflow-hidden border-4 border-white/30 dark:border-white/10 shadow-2xl hover:shadow-[#3B82F6]/20 transition-all duration-500 w-full max-w-md">
             {/* Use a placeholder if image is missing.
                Once you have your real image, name it "store_front.png" and put it in public folder.
             */}
            <img
              src="/store_front.png" 
              onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop";
              }}
              alt="Shri Ram Medical Store Front"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}