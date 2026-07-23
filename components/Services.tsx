"use client";

import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheckIcon,
  SignalIcon,
  ServerStackIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import gsap from "gsap";

interface BentoItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  spanClasses: string;
  isDark?: boolean;
}

const bentoData: BentoItem[] = [
  {
    id: "egov",
    number: "01",
    title: "E-Government & Interoperability",
    description:
      "Deploying robust nationwide systems like CEIR and EIR. We build secure, highly scalable platforms tailored for modern public administration.",
    icon: <ShieldCheckIcon />,
    spanClasses: "lg:col-span-2",
  },
  {
    id: "telecom",
    number: "02",
    title: "Telecom Setup",
    description:
      "Seamless connectivity and infrastructure integration for advanced telecommunication networks.",
    icon: <SignalIcon />,
    spanClasses: "lg:col-span-1",
  },
  {
    id: "it",
    number: "03",
    title: "IT Infrastructure",
    description:
      "Modernizing businesses with cutting-edge network designs and advanced security protocols.",
    icon: <ServerStackIcon />,
    spanClasses: "lg:col-span-1",
  },
  {
    id: "ai",
    number: "04",
    title: "AI & Data Centers",
    description:
      "Driving innovation through Artificial Intelligence and high-performance server management to future-proof your operations.",
    icon: <CpuChipIcon />,
    spanClasses: "lg:col-span-2",
    isDark: true,
  },
];

const ServicesBento: React.FC = () => {
  const activeCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 💡 Ticker အစား Scroll Event ကိုသာ ပြန်သုံးပါမည်
    const handleScroll = () => {
      if (activeCardRef.current) {
        const cursor = document.getElementById("cursor");
        // Locked ဖြစ်နေချိန် (Hover လုပ်ထားချိန်) တွင်သာ Scroll နောက်သို့ လိုက်စေမည်
        if (cursor && cursor.classList.contains("locked")) {
          const rect = activeCardRef.current.getBoundingClientRect();
          gsap.set(cursor, {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Core Infrastructure.
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Built for scale. We provide foundational technology solutions that
            empower your digital transformation journey.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {bentoData.map((item: BentoItem) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onMouseEnter={(e) => {
                const card = e.currentTarget as HTMLDivElement;
                activeCardRef.current = card;

                const cursor = document.getElementById("cursor");
                if (cursor) {
                  cursor.classList.add("locked");
                  const rect = card.getBoundingClientRect();

                  // 💡 x နှင့် y ကို ဤနေရာသို့ ပြန်ထည့်လိုက်ခြင်းဖြင့် Smooth Animation ပြန်ရသွားပါမည်
                  gsap.to(cursor, {
                    x: rect.left + rect.width / 2, // မူလအတိုင်း အလယ်ဗဟိုမှာပဲ ထားပါ
                    y: rect.top + rect.height / 2, // မူလအတိုင်း အလယ်ဗဟိုမှာပဲ ထားပါ
                    width: rect.width + 10, // ဘယ်/ညာ 5px စီ ပိုထွက်သွားမည်
                    height: rect.height + 10, // အပေါ်/အောက် 5px စီ ပိုထွက်သွားမည်
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    borderRadius: "29px",
                    duration: 0.3,
                    ease: "power2.out",
                  });
                }
              }}
              onMouseLeave={(e) => {
                activeCardRef.current = null;

                const cursor = document.getElementById("cursor");
                if (cursor) {
                  // 💡 ဤနေရာတွင် cursor.classList.remove("locked"); ကို ချက်ချင်း မဖြုတ်တော့ပါ။

                  gsap.to(cursor, {
                    x: e.clientX, // Card အလယ်ကနေ Mouse ထွက်သွားတဲ့ နေရာဆီကို ချောချောမွေ့မွေ့ ပြန်ရွှေ့ပေးမည်
                    y: e.clientY,
                    width: 20,
                    height: 20,
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    borderRadius: "100%",
                    duration: 0.3,
                    ease: "power2.out",
                    onComplete: () => {
                      // 💡 Animation ပြီးသွားမှသာ (ကတ်အရွယ်အစားမှ သေးသွားပြီးမှသာ) Mouse နောက်လိုက်ရန် locked ကို ဖြုတ်ပါမည်
                      cursor.classList.remove("locked");
                    },
                  });
                }
              }}
              className={`group relative flex rounded-[1.5rem] overflow-hidden transition-all duration-300 border hover:shadow-xl ${
                item.spanClasses
              } ${
                item.isDark
                  ? "bg-[#0B1121] border-gray-800 text-white shadow-lg shadow-blue-900/10"
                  : "bg-white border-gray-200 text-gray-900 shadow-md shadow-gray-200/50"
              }`}>
              {item.spanClasses === "lg:col-span-2" ? (
                <div className="flex flex-col md:flex-row w-full p-6 sm:p-8 gap-6 md:items-center pointer-events-none">
                  <div className="flex-1 flex flex-col justify-center z-10">
                    <span
                      className={`text-xs font-bold tracking-widest mb-3 block ${
                        item.isDark ? "text-blue-500" : "text-blue-600"
                      }`}>
                      {item.number} —
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold mb-3 tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed max-w-md ${
                        item.isDark ? "text-gray-400" : "text-gray-500"
                      }`}>
                      {item.description}
                    </p>
                  </div>

                  <div className="hidden md:flex flex-shrink-0 items-center justify-center relative">
                    <div
                      className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105 ${
                        item.isDark
                          ? "bg-white/5 border border-white/10"
                          : "bg-blue-50/50 border border-blue-100"
                      }`}>
                      {item.isDark && (
                        <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
                      )}
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 relative z-10 ${
                          item.isDark ? "text-blue-400" : "text-blue-600"
                        } [&>svg]:stroke-1`}>
                        {item.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full w-full p-6 sm:p-8 pointer-events-none">
                  <div className="flex justify-between items-start mb-6 z-10">
                    <span className="text-xs font-bold tracking-widest text-blue-600">
                      {item.number} —
                    </span>
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white text-blue-600 border border-blue-100">
                      <div className="w-5 h-5 [&>svg]:stroke-[1.5]">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  <div className="z-10 mt-auto">
                    <h3 className="text-lg sm:text-xl font-extrabold mb-2 tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesBento;
