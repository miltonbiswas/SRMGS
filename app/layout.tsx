import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// 1. Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import EmergencyCta from "./components/EmergencyCta";
import ScrollFeatures from "./components/ScrollFeatures";
import Loader from "./components/Loader";
import { Providers } from "./providers"; // Essential for Dark Mode to work

// 2. Font Configuration
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// 3. SEO Metadata
export const metadata: Metadata = {
  title: "Shri Ram Medical & General Store | 24/7 Medical Store in Sirodi",
  description:
    "Shri Ram Medical & General Store is a 24/7 medical shop in Sirodi near Asawa Road, Sirohi Highway. Allopathic, Ayurvedic & Veterinary medicines, retail & wholesale.",
  openGraph: {
    title: "Shri Ram Medical & General Store",
    description:
      "24/7 trusted medical store for Allopathic, Ayurvedic & Veterinary medicines in Sirodi.",
    url: "https://srmgs.vercel.app", // Replace with actual domain later
    siteName: "Shri Ram Medical & General Store",
    locale: "en_IN",
    type: "website",
  },
};

// 4. JSON-LD for Google (Pharmacy Schema)
const pharmacyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  name: "Shri Ram Medical & General Store",
  image: "https://shriram-medical.vercel.app/store_front.png", // Ensure this image exists
  telephone: "+91-9828204344",
  url: "https://shriram-medical.vercel.app",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Navratna Complex, Near Asawa Road, Sirodi",
    addressLocality: "Reodar",
    addressRegion: "Rajasthan",
    postalCode: "307514",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: ["https://maps.app.goo.gl/ooLxJScZxvmRy9pi7"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Inject JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(pharmacyJsonLd),
          }}
        />
      </head>

      <body
        className={`
          ${poppins.className} 
          bg-[#E9F3FF] dark:bg-[#020617] 
          text-[#0A1A44] dark:text-gray-200 
          min-h-screen flex flex-col relative overflow-x-hidden transition-colors duration-300
        `}
      >
        {/* Providers wraps the entire app to enable Dark Mode & Context */}
        <Providers>
          {/* UI Enhancements */}
          <Loader />         {/* Splash Screen */}
          <ScrollFeatures /> {/* Progress Bar & Back to Top */}

          {/* Core Layout */}
          <Navbar />
          
          <main className="grow pt-28">
            {children}
          </main>
          
          {/* Floating Utilities */}
          <WhatsappButton />
          <EmergencyCta />
          
          {/* Footer */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
