"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ShieldCheckIcon,
  SignalIcon,
  ServerStackIcon,
  CpuChipIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { div } from "framer-motion/client";

// Bento Grid အတွက် Data Type
interface BentoItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  spanClasses: string; // Grid အကွက် အကြီး/အသေး နေရာယူရန်
  isDark?: boolean; // Dark Theme သုံးမည့် ကတ်အတွက်
}

const bentoData: BentoItem[] = [
  {
    id: "egov",
    title: "E-Government & Interoperability",
    description:
      "Deploying robust nationwide systems like CEIR and EIR. We build secure, highly scalable platforms tailored for modern public administration.",
    icon: <ShieldCheckIcon className="w-8 h-8 sm:w-10 sm:h-10" />,
    link: "/solutions/e-government",
    spanClasses: "md:col-span-2 md:row-span-1", // ကွန်ပျူတာတွင် ၂ ကွက်စာ နေရာယူမည်
  },
  {
    id: "telecom",
    title: "Telecom Setup",
    description:
      "Seamless connectivity and infrastructure integration for telecommunication networks.",
    icon: <SignalIcon className="w-8 h-8 sm:w-10 sm:h-10" />,
    link: "/solutions/telecom",
    spanClasses: "md:col-span-1 md:row-span-1", // ၁ ကွက်စာသာ နေရာယူမည်
  },
  {
    id: "it",
    title: "IT Infrastructure",
    description:
      "Modernizing businesses with cutting-edge network designs and security protocols.",
    icon: <ServerStackIcon className="w-8 h-8 sm:w-10 sm:h-10" />,
    link: "/solutions/it-infrastructure",
    spanClasses: "md:col-span-1 md:row-span-1",
  },
  {
    id: "ai",
    title: "AI & Data Centers",
    description:
      "Driving innovation through Artificial Intelligence and high-performance server management to future-proof your operations.",
    icon: <CpuChipIcon className="w-8 h-8 sm:w-10 sm:h-10" />,
    link: "/solutions/ai",
    spanClasses: "md:col-span-2 md:row-span-1",
    isDark: true, // Apple Style Premium ဖြစ်စေရန် အမည်းရောင်ကတ် သုံးထားသည်
  },
];

const ServicesBento: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }, // Apple-like smooth cubic-bezier
    },
  };

  return (
    // နောက်ခံကို အဖြူစစ်စစ် (White) ထက် အနည်းငယ်ဖျော့သော (#F5F5F7) Apple နောက်ခံမျိုး သုံးထားသည်
    <section className="relative py-24 sm:py-32  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="mb-16 sm:mb-20 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Core Infrastructure. <br />
            <span className="text-gray-500">Built for scale.</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {bentoData.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              // rounded-2xl သို့ ပြောင်းလဲထားပြီး Padding များကို (p-5 sm:p-6 lg:p-8) သို့ လျှော့ချထားသည်
              className={`group relative flex flex-col justify-between p-5 sm:p-6 lg:p-8 rounded-2xl overflow-hidden transition-all duration-300 border hover:border-blue-500 ${
                item.spanClasses
              } ${
                item.isDark
                  ? "bg-gray-900 text-white border-gray-800"
                  : "bg-white text-gray-900 shadow-sm border-gray-100"
              }`}>
              {/* Decorative Background Glow (Dark ကတ်အတွက်သာ) */}
              {item.isDark && (
                <div className="absolute -bottom-20 -right-20 w-48 h-48 sm:w-64 sm:h-64 bg-blue-600/30 blur-[60px] rounded-full pointer-events-none transition-transform duration-700 group-hover:scale-150" />
              )}

              {/* အပေါ်ပိုင်း: Icon နှင့် Arrow Button */}
              <div className="relative z-10 flex justify-between items-start mb-8 sm:mb-10">
                {/* Icon (Icon အခံ အကွက်ကိုလည်း အနည်းငယ် သေးပေးထားသည်) */}
                <div
                  className={`inline-flex p-2.5 sm:p-3 rounded-xl ${
                    item.isDark
                      ? "bg-white/10 text-blue-400"
                      : "bg-blue-50 text-blue-600"
                  }`}>
                  {item.icon}
                </div>

                {/* Link Arrow Button (အရွယ်အစားကို w-12 မှ w-8/w-10 သို့ လျှော့ချထားသည်) */}
                <Link
                  href={item.link}
                  className={`shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-300 ${
                    item.isDark
                      ? "bg-white/10 hover:bg-white/20 text-white"
                      : "bg-gray-50 hover:bg-blue-50 text-gray-400 hover:text-blue-600"
                  }`}
                  aria-label={`Learn more about ${item.title}`}>
                  <ArrowUpRightIcon className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                </Link>
              </div>

              {/* အောက်ပိုင်း: Text Content */}
              <div className="relative z-10 mt-auto">
                {/* Title ကို text-3xl မှ text-lg/xl/2xl သို့ လျှော့ချထားသည် */}
                <h3
                  className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 tracking-tight ${
                    item.isDark ? "text-white" : "text-gray-900"
                  }`}>
                  {item.title}
                </h3>
                {/* Description ကို text-base မှ text-xs/sm သို့ လျှော့ချထားသည် */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${
                    item.isDark ? "text-gray-400" : "text-gray-500"
                  }`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesBento;
