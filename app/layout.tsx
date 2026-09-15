import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { EmergencyBar } from "@/components/EmergencyBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCallFab } from "@/components/MobileCallFab";
import { BUSINESS } from "@/content/business";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.website),
  title: {
    default: `${BUSINESS.name} | Inland Empire & Desert Handyman`,
    template: `%s | ${BUSINESS.shortName}`,
  },
  description:
    "KustomXworks — Construction Expertise, Concrete Block Walls, Custom Landscaping & Handyman Services serving Corona, Murrieta, Temecula, Perris, Moreno Valley, Norco, Hemet, Beaumont & Palm Springs, CA.",
  keywords: [
    "handyman",
    "Inland Empire handyman",
    "Coachella Valley handyman",
    "concrete block walls",
    "landscaping Inland Empire",
    "construction expertise",
    "home repair",
    "Corona handyman",
    "Palm Springs handyman",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BUSINESS.website,
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Inland Empire & Desert Handyman`,
    description:
      "Master construction expertise, concrete block walls, custom landscaping, and handyman services across the Inland Empire and Coachella Valley. Same-week service, flat-rate pricing, satisfaction guaranteed.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS.name} | Inland Empire & Desert Handyman`,
    description:
      "Construction expertise, concrete block walls, landscaping & handyman across the Inland Empire & Coachella Valley.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        {/* GA4 / GTM placeholder */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script> */}
      </head>
      <body className="font-body bg-cream">
        <EmergencyBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallFab />
      </body>
    </html>
  );
}
