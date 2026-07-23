// import type { Metadata } from "next";
// import { Plus_Jakarta_Sans, Inter } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";

// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import { SplashScreen } from "@/components/SplashScreen";
// import { Footer } from "@/components/Footer";

// // Heading များအတွက် Plus Jakarta Sans (Variable font)
// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   variable: "--font-plus-jakarta", // Tailwind တွင် သုံးနိုင်ရန် Variable ကြေညာခြင်း
//   display: "swap",
// });

// // Body စာသားများအတွက် Inter (Variable font)
// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter", // Tailwind တွင် သုံးနိုင်ရန် Variable ကြေညာခြင်း
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "East Wind Myanmar",
//   description: "Empowering Myanmar's Digital Future",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     // ဤနေရာတွင် Font Variable (၂) မျိုးလုံးကို html tag ၌ ထည့်သွင်းထားပါသည်
//     <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
//       <body
//         // font-sans က Default အနေဖြင့် Inter ကို ယူသွားမည်ဖြစ်ပါသည်
//         className="font-sans antialiased text-gray-900 bg-white"
//         suppressHydrationWarning>
//         <div
//           id="cursor"
//           className="w-2 h-2 rounded-full bg-gray-950 fixed top-0 left-0 pointer-events-none z-50 opacity-100"></div>
//         <Analytics />
//         <SplashScreen />
//         <Navbar />
//         <main className="container mx-auto">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { SplashScreen } from "@/components/SplashScreen";
import { Footer } from "@/components/Footer";
import Cursor from "@/components/Cursor";
// import { Cursor } from "@/components/Cursor";
// import Cursor from "@/components/Cursor";

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

export const metadata: Metadata = {
  title: "East Wind Myanmar",
  description: "Empowering Myanmar's Digital Future",
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
        {/* သီးသန့် ခွဲထုတ်ထားသော GSAP Cursor ကို ဤနေရာတွင် ထည့်ပါ */}
        <Cursor />

        <Analytics />
        <SplashScreen />
        <Navbar />
        <main className="container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}