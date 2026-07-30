"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerData: FooterSection[] = [
  {
    title: "Solutions",
    links: [
      { name: "E-Government", href: "/solutions/e-government" },
      { name: "Telecom Setup", href: "/solutions/telecom" },
      { name: "IT Infrastructure", href: "/solutions/it-infrastructure" },
      { name: "AI & Data Centers", href: "/solutions/ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "News & Insights", href: "/news" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export function Footer(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const resizeText = () => {
      const container = containerRef.current;
      const text = textRef.current;

      if (!container || !text) {
        return;
      }

      const containerWidth = container.offsetWidth;
      let min = 1;
      let max = 2500;

      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = mid + "px";

        if (text.offsetWidth <= containerWidth) {
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }

      text.style.fontSize = max + "px";
    };

    resizeText();
    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  return (
    <footer className="bg-[#0B1121] mt-20 pt-20 flex flex-col relative">
      {/* Top Section */}
      {/* Top Section */}
      <div className="mx-auto px-4 md:px-6 w-full mb-10 z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">


          <div className="">
            {/* <Image src="/logo.png"  alt="logo" width={200} height={200} /> */}

            <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed max-w-sm pr-4">
              Empowering Myanmar&apos;s digital future through highly
              interoperable systems, cutting-edge IT infrastructure, and robust
              E-government solutions.
            </p>
          </div>

          {/* Space အကွာအဝေးများကို Responsive ဖြစ်အောင် ပြင်ဆင်ထားပါသည် */}
          <div className="flex flex-col md:flex-row md:w-1/2 md:max-w-[800px] justify-between space-y-12 md:space-y-0 md:space-x-12">
            {footerData.map((section: FooterSection, index: number) => (
              <div key={index} className="flex-1">
                <h3 className="font-heading text-white font-bold mb-5 tracking-wide">
                  {section.title}
                </h3>
                <ul className="space-y-3 font-sans">
                  {section.links.map((link: FooterLink, linkIndex: number) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 
        ====================================================
        GIANT TYPOGRAPHY SECTION
        ====================================================
      */}
      {/* 
        ပြောင်းလဲထားချက်များ-
        ၁။ Height (h-[...]) ကန့်သတ်ချက်များ အားလုံးကို ဖယ်ရှားလိုက်ပါသည်။
        ၂။ စာသားမှ absolute နေရာယူမှုကို ဖယ်ရှားလိုက်ပါသည်။
        ၃။ leading-none ဖြင့် အပေါ်အောက် နေရာလွတ်ကို အံဝင်ခွင်ကျ ဖြစ်စေပါသည်။ 
      */}
      <div
        className="flex w-full items-center justify-center overflow-hidden px-2 mt-8 md:mt-12"
        ref={containerRef}>
        <span
          className="whitespace-nowrap text-center font-heading font-black text-[#F4F4F5] uppercase leading-none select-none pointer-events-none"
          ref={textRef}>
          EASTWIND
        </span>
      </div>

      {/* Bottom Section */}
      <div className="w-full border-t border-white/10 bg-[#0B1121] pt-6 pb-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-center gap-4 font-sans">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-black border border-gray-700 flex items-center justify-center text-white font-bold text-xs shrink-0">
              E
            </div>
            <p className="text-gray-500 text-xs md:text-sm">
              &copy; {currentYear} East Wind Myanmar Co., Ltd. All rights
              reserved.
            </p>
          </div>

    
        </div>
      </div>
    </footer>
  );
}
