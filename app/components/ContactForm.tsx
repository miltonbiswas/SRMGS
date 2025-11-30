"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaUserMd, FaEnvelope, FaCommentDots, FaPills, FaSyringe, FaBriefcaseMedical, FaSpinner } from "react-icons/fa";

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // NOTE: In a production app, use environment variables for these keys!
    emailjs
      .sendForm(
        "service_itvi6fd",
        "template_itvi6fd",
        form.current!,
        "PLz7vr8axsYVY9ws0"
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        if (form.current) form.current.reset(); // Clear the form
        // Reset success message after 5 seconds so user can send another if needed
        setTimeout(() => setSent(false), 5000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <section
      id="contact-form"
      className="relative max-w-2xl mx-auto mt-5 mb-28 p-0.5 rounded-[36px] bg-linear-to-br from-[#3B82F6]/50 to-[#2563EB]/50 animate-fade-in-up"
    >
      {/* Inner Container for Glass Effect */}
      <div className="relative p-10 bg-[#E9F3FF]/80 dark:bg-[#020617]/80 backdrop-blur-2xl rounded-[34px] overflow-hidden h-full">
        
        {/* FLOATING MEDICAL ICONS */}
        <FaPills className="floater floater-1" />
        <FaSyringe className="floater floater-2" />
        <FaBriefcaseMedical className="floater floater-3" />

        {/* Glow Effects */}
        <div className="absolute -top-12 -right-8 w-56 h-56 bg-[#3B82F6]/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#2563EB]/20 blur-[120px] rounded-full" />

        <h3 className="text-3xl font-bold text-center mb-2 text-[#0A1A44] dark:text-white font-sans relative z-10">
          ✉️ Send Us a Message
        </h3>
        <p className="text-center text-[#0A1A44]/60 dark:text-gray-400 mb-10 text-sm relative z-10">
          We usually respond within 24 hours.
        </p>

        {/* SUCCESS MESSAGE */}
        {sent && (
          <div className="flex items-center justify-center gap-3 mb-6 py-4 px-6 bg-green-100 dark:bg-green-900/50 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-[20px] shadow-sm font-medium animate-pulse">
            ✔️ Message sent successfully!
          </div>
        )}

        {!sent && (
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 relative z-10">
            {/* NAME */}
            <div className="group">
              <label className="input-wrap group-focus-within:ring-2 group-focus-within:ring-[#3B82F6] group-focus-within:border-transparent">
                <FaUserMd className="input-icon group-focus-within:text-[#3B82F6]" />
                <input type="text" name="name" placeholder="Your Name" required className="input-control" />
              </label>
            </div>

            {/* EMAIL */}
            <div className="group">
              <label className="input-wrap group-focus-within:ring-2 group-focus-within:ring-[#3B82F6] group-focus-within:border-transparent">
                <FaEnvelope className="input-icon group-focus-within:text-[#3B82F6]" />
                <input type="email" name="email" placeholder="Your Email" required className="input-control" />
              </label>
            </div>

            {/* MESSAGE */}
            <div className="group">
              <label className="input-wrap items-start group-focus-within:ring-2 group-focus-within:ring-[#3B82F6] group-focus-within:border-transparent">
                <FaCommentDots className="input-icon mt-3 group-focus-within:text-[#3B82F6]" />
                <textarea name="message" rows={4} placeholder="How can we help you?" required className="input-control resize-none pt-2" />
              </label>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`
                w-full py-4 mt-2 text-lg font-bold rounded-[28px] text-white
                shadow-lg hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(37,99,235,0.4)]
                transition-all duration-300 flex items-center justify-center gap-3
                ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-linear-to-r from-[#3B82F6] to-[#2563EB]"}
              `}
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin text-xl" /> Sending...
                </>
              ) : (
                <>
                  🚀 Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>

      {/* GLOBAL CSS */}
      <style jsx global>{`
        /* Input controls */
        .input-wrap {
          display: flex;
          align-items: center;
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(203,213,225,0.6);
          border-radius: 24px;
          padding: 14px 20px;
          transition: all 0.3s ease;
        }
        .dark .input-wrap {
          background: rgba(15,23,42,0.6);
          border-color: rgba(255,255,255,0.1);
        }
        
        .input-icon {
          font-size: 20px;
          color: #64748B; /* Slate-500 */
          transition: color 0.3s ease;
        }
        .dark .input-icon {
          color: #94A3B8; /* Slate-400 */
        }
        
        .input-control {
          width: 100%;
          background: transparent;
          margin-left: 16px;
          border: none;
          outline: none;
          font-size: 16px;
          font-weight: 500;
          color: #0A1A44;
        }
        .input-control::placeholder {
           color: #94A3B8;
        }
        .dark .input-control {
          color: #F1F5F9;
        }

        /* Floating Medical Icons */
        .floater {
          position: absolute;
          font-size: 32px;
          opacity: 0.15;
          animation: float 6s ease-in-out infinite;
          color: #2563eb;
          pointer-events: none;
          z-index: 0;
        }
        .dark .floater {
          color: #93c5fd;
          opacity: 0.1;
        }

        .floater-1 { top: -10px; left: 20px; animation-delay: 0s; }
        .floater-2 { top: 40%; right: -20px; animation-delay: 1s; }
        .floater-3 { bottom: -10px; left: 55%; animation-delay: 2s; }

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </section>
  );
}