import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { SplashScreen } from "@/components/SplashScreen";
import { Footer } from "@/components/Footer";
import Cursor from "@/components/Cursor";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 💡 SEO နှင့် Social Media Share များအတွက် လိုက်ဖက်သော Metadata များ ထည့်သွင်းထားပါသည်
export const metadata: Metadata = {
  title: "East Wind Myanmar | Digital Infrastructure & IT Solutions",
  description:
    "Empowering Myanmar's Digital Future. We provide foundational technology solutions, seamless telecom implementation, and highly interoperable systems tailored for your needs.",
  keywords: [
    "East Wind Myanmar",
    "IT Solutions Myanmar",
    "Telecom Setup Myanmar",
    "E-Government Solutions",
    "Data Centers",
    "Digital Infrastructure",
    "Network Infrastructure",
  ],
  authors: [{ name: "East Wind Myanmar" }],
  icons: {
    // 💡 Favicon ကို logo.png အဖြစ် ပြောင်းလဲသတ်မှတ်ထားပါသည်
    icon: "/logo.png",
    apple: "/logo.png", // Apple devices များအတွက်
  },
  openGraph: {
    title: "East Wind Myanmar | Digital Infrastructure & IT Solutions",
    description:
      "Empowering Myanmar's Digital Future through robust IT infrastructure, telecom solutions, and E-Government systems.",
    siteName: "East Wind Myanmar",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "East Wind Myanmar Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body
        className="font-sans antialiased text-gray-900 bg-white"
        suppressHydrationWarning>
        <Cursor />

        <Analytics />
        <SplashScreen />
        <Navbar />
        <main className="container mx-auto scroll-smooth">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
