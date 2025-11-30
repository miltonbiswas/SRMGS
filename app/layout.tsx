import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// 1. Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import EmergencyCta from "./components/EmergencyCta";
import ScrollFeatures from "./components/ScrollFeatures";
import Loader from "./components/Loader";
import MobileNav from "./components/MobileNav"; 
import { Providers } from "./providers"; 

// 2. Font Configuration
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// 3. SEO Metadata (EXPANDED KEYWORDS)
export const metadata: Metadata = {
  metadataBase: new URL('https://shriram-medical.vercel.app'),
  title: {
    default: "Shri Ram Medical & General Store | 24x7 Pharmacy in Sirodi",
    template: "%s | Shri Ram Medical"
  },
  description:
    "Trusted 24x7 medical store in Sirodi, Reodar. Genuine medicines, wholesale rates, Ayurvedic products, and surgicals. Home delivery available in Sirohi district.",
  keywords: [
    // Core Locations
    "Medical Store Sirodi", 
    "Pharmacy Reodar", 
    "Chemist Sirohi", 
    "Shri Ram Medical",
    
    // Nearby Towns & Cities (Sirohi District)
    "Medical Store Mount Abu",
    "Pharmacy Abu Road",
    "Medical Shop Pindwara",
    "Chemist Sheoganj",
    "Medicine Store Swaroopganj",
    "Pharmacy Sumerpur",
    "Medical Store Jawal",
    
    // Nearby Villages (Reodar Tehsil)
    "Medical Store Mandar",
    "Pharmacy Anadra",
    "Chemist Dantrai",
    "Medical Store Jhadoli",
    "Pharmacy Bhatana",
    "Medical Store Jirawal",
    "Chemist Magariwara",
    
    // Services & Categories
    "24x7 Medical Store Rajasthan", 
    "Medicine Home Delivery Sirohi", 
    "Ayurvedic Store Reodar", 
    "Wholesale Medicine Rajasthan",
    "Veterinary Medicine Sirohi",
    "Pashu Dawai Sirodi",
    "Surgical Store Reodar",
    "Generic Medicine Shop Sirohi",
    "Best Pharmacy Near Me",
    "Emergency Medical Store Reodar"
  ],
  authors: [{ name: "Shri Ram Medical" }],
  creator: "Shri Ram Medical",
  publisher: "Shri Ram Medical",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Shri Ram Medical | Trusted 24x7 Pharmacy",
    description: "Your health partner in Sirodi. 100% genuine medicines & 24/7 emergency service.",
    url: "https://shriram-medical.vercel.app",
    siteName: "Shri Ram Medical & General Store",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: '/hero_pharmacy_main.png', 
        width: 1200,
        height: 630,
        alt: 'Shri Ram Medical Store Front',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Ram Medical & General Store",
    description: "24x7 Pharmacy in Sirodi, Rajasthan. Trusted & Affordable.",
    images: ['/hero_pharmacy_main.png'], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "Add-Your-Google-Verification-Code-Here", 
  },
};

export const viewport: Viewport = {
  themeColor: "#3B82F6",
};

// 4. JSON-LD for Google (Rich Results)
const pharmacyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Pharmacy",
  name: "Shri Ram Medical & General Store",
  image: "https://shriram-medical.vercel.app/store_front.png",
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.8471,
    longitude: 72.6324,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    opens: "00:00",
    closes: "23:59"
  },
  sameAs: [
    "https://maps.app.goo.gl/ooLxJScZxvmRy9pi7",
    "https://wa.me/919828204344"
  ],
  priceRange: "₹"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
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
        <Providers>
          <Loader />
          <ScrollFeatures />
          <Navbar />
          
          <main className="flex-grow pt-28">
            {children}
          </main>
          
          <WhatsappButton />
          <EmergencyCta />
          <MobileNav />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
