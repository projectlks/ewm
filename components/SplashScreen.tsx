"use client";

import React, { useState, useEffect } from "react";



// စာလုံးရေ (၃၅) လုံး အတိအကျ ပြန်ဖြည့်ထားပြီး Medium Speed ဖြင့် Scroll ဆွဲစေမည်[cite: 15]
const words: string[] = [
  "Innovation",
  "Consultation",
  "Assessment",
  "Strategy",
  "Planning",
  "Design", // <- Animation စတင်မည့်နေရာ (Centered at 0s)[cite: 15]
  "Networking",
  "Fiber Optics",
  "Connectivity",
  "Telecom",
  "Hardware",
  "Servers",
  "Storage",
  "Data Center",
  "Security",
  "Surveillance",
  "Solutions",
  "Infrastructure", // <- အလယ်တည့်တည့် (Absolute Center)[cite: 15]
  "E-Government",
  "CEIR System",
  "Interoperability",
  "Integration",
  "Configuration",
  "Installation",
  "Maintenance",
  "Reliability",
  "Scalability",
  "Optimization",
  "Excellence",
  "Deployment", // <- Animation ပြီးဆုံးမည့်နေရာ (Centered at 2.8s)[cite: 15]
  "Operations",
  "Digital Future",
  "Progress",
  "Empowerment",
  "Launch",
];

export function SplashScreen(): React.JSX.Element | null {
  const [count, setCount] = useState<number>(0);
  const [phase, setPhase] = useState<number>(0);

  useEffect(() => {
    document.body.classList.add("splash-active");

    const countDuration = 2800; //[cite: 15]
    const intervalTime = countDuration / 100;
    const counter = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(counter);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);

    const timer1 = setTimeout(() => setPhase(1), 2800);
    const timer2 = setTimeout(() => {
      setPhase(2);
      document.body.classList.add("app-revealing");
    }, 3600);

    const timer3 = setTimeout(() => {
      setPhase(3);
      document.body.classList.remove("splash-active");
      document.body.classList.remove("app-revealing");
    }, 4400);

    return () => {
      clearInterval(counter);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      document.body.classList.remove("splash-active");
      document.body.classList.remove("app-revealing");
    };
  }, []);

  if (phase === 3) return null; //[cite: 15]

  const renderScrollingText = () => (
    <div className="flex flex-col items-center animate-[scrollUp_2.8s_ease-out_forwards]">
      {words.map((word, index) => (
        <span
          key={index}
          // font-sans ကို အသုံးပြု၍ Inter ဖောင့်ဖြင့် ရှင်းလင်းစွာ ပြသပါမည်
          className="flex items-center justify-center h-8 text-sm md:text-base font-sans tracking-wide whitespace-nowrap">
          {word}
        </span>
      ))}
    </div>
  );

  return (
    <div
      id="splash-wrapper"
      className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Background Fade Out Effect[cite: 15] */}
      <div
        className={`absolute inset-0 bg-white pointer-events-auto transition-opacity duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          phase >= 2 ? "opacity-0" : "opacity-100"
        }`}></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto">
        {/* Height Collapse Box[cite: 15] */}
        <div
          className={`relative flex items-center justify-center w-64 overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.85,0,0.15,1)] ${
            phase >= 1 ? "h-0" : "h-[280px]"
          }`}
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 font-normal">
            {renderScrollingText()}
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-full overflow-hidden z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[280px] w-full flex flex-col items-center justify-center text-black font-medium">
              {renderScrollingText()}
            </div>
          </div>
        </div>

        {/* Number Counter */}
        <div
          // font-heading နှင့် font-bold ကို အသုံးပြု၍ Plus Jakarta Sans ၏ ခိုင်မာမှုကို ပြသပါမည်
          className={`absolute bottom-6 right-8 text-5xl md:text-7xl font-heading  text-black tracking-tighter transition-opacity duration-300 ${
            phase >= 1 ? "opacity-0" : "opacity-100"
          }`}>
          {count}%
        </div>
      </div>

      <style>{`
        /* 
         * အလယ်အလတ်အမြန်နှုန်းဖြစ်ရန် 384px အတိအကျ သတ်မှတ်ထားပါသည် (32px * 12 စာကြောင်း)[cite: 15]
         * လိုချင်သည့်နေရာတွင် အတိအကျ ရပ်ပါမည်။ 
         */
        @keyframes scrollUp {
          0% { transform: translateY(384px); }
          100% { transform: translateY(-384px); }
        }

        body.splash-active {
          overflow: hidden !important;
          background-color: #f3f4f6 !important; /*[cite: 15] */
        }

        body.app-revealing > *:not(#splash-wrapper) {
          animation: appZoomIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; /*[cite: 15] */
        }

        // @keyframes appZoomIn {
        //   0% { 
        //     transform: scale(0.92); 
        //     opacity: 0; 
        //     filter: blur(8px); 
        //   }
        //   100% { 
        //     transform: scale(1); 
        //     opacity: 1; 
        //     filter: blur(0px); 
        //   }
        // }
      `}</style>
    </div>
  );
}