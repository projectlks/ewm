// "use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import {
  SignalIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import TextType from "./TextType";

interface CardData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  positionClasses: string;
}

const serviceCards: CardData[] = [
  {
    id: "egov",
    title: "E-Government",
    subtitle: "CEIR & EIR Implementation",
    icon: <ShieldCheckIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    positionClasses: "top-0 left-0 sm:top-[0%] xl:top-[5%] xl:left-[-8%]",
  },
  {
    id: "telecom",
    title: "Telecom Setup",
    subtitle: "Seamless Integration",
    icon: <SignalIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    positionClasses: "bottom-[0%] left-[0%]  xl:bottom-[15%] xl:left-[0%]",
  },
  {
    id: "it",
    title: "IT Infrastructure",
    subtitle: "Network & Security",
    icon: <ServerStackIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    positionClasses: "top-[0%] right-[0%]  xl:top-[15%] xl:right-[-8%]",
  },
  {
    id: "ai",
    title: "AI Solutions",
    subtitle: "Data Center & Servers",
    icon: <CpuChipIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />,
    positionClasses: "bottom-[0%] right-[0%]  xl:bottom-[25%] xl:right-[0%]",
  },
];

interface FloatingCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  positionClasses: string;
}

const FloatingCard: React.FC<FloatingCardProps> = ({
  title,
  subtitle,
  icon,
  positionClasses,
}) => {
  return (
    <div
      className={`absolute flex flex-col gap-2 sm:gap-3 backdrop-blur-xl bg-white/80 
      p-2 sm:p-3 lg:p-5 rounded-xl sm:rounded-2xl border border-gray-200 hover:-translate-y-1  sm:hover:-translate-y-2 transition-all duration-500 z-20
      ${positionClasses}`}>
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
        <div className="bg-blue-50 p-1.5 sm:p-2 lg:p-3 rounded-lg sm:rounded-xl text-blue-600 shrink-0 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-gray-900 font-bold text-[10px] sm:text-xs lg:text-sm tracking-wide leading-tight truncate">
            {title}
          </h3>
          <p className="text-gray-500 text-[8px] sm:text-[10px] lg:text-xs mt-0.5 sm:mt-1 leading-tight truncate w-full">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  // 💡 မှတ်ချက်: မိတ်ဆွေ ပိတ်ထားသော Animation များကို ပြန်ဖွင့်ပေးထားပါသည်
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 3.2,
        staggerChildren: 0.2,
        delayChildren: 3.5,
      },
    },
  };

  const slideUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 4.0 },
    },
  };

  return (
    <section
      aria-label="Hero Section"
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 ">
      <div className="absolute bottom-0 right-1/4 w-100 lg:w-150 h-100 lg:h-150 bg-indigo-300/30 rounded-full blur-[100px] lg:blur-[150px] mix-blend-multiply pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[32px_32px] sm:bg-size-[64px_64px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center">
          <motion.div
            variants={slideUpVariants}
            className="relative mb-6 max-w-4xl mx-auto h-[120px] sm:h-[150px] lg:h-[200px] flex items-center justify-center">
            {/* 💡 ဒီနေရာမှာ h1 အစား TextType ကို ထည့်သွင်းထားပါသည် */}
            <TextType
              as="h1" // h1 tag အဖြစ် rendering လုပ်ပေးမည်
              text={[
                "Empowering Myanmar's Digital Future",
                "Delivering Robust E-Government Solutions",
                "Building Cutting-Edge IT Infrastructure",
              ]}
              // typingSpeed={75}
              // pauseDuration={1500}
              // deletingSpeed={30}
              // showCursor={true}
              // cursorCharacter="_"

              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"         
              deletingSpeed={50}
              // variableSpeedEnabled={false}
              // variableSpeedMin={60}
              // variableSpeedMax={120}
              cursorBlinkDuration={0.5}
              // Cursor လေးကို အပြာရောင်ဖြစ်အောင် ထည့်ထားပါသည်
              cursorClassName="text-blue-600 font-light"
              // မူလ h1 ၏ Class များကို ပြန်လည်ထည့်သွင်းထားပါသည်[cite: 10]
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.15]"
            />
          </motion.div>

          <motion.p
            variants={slideUpVariants}
            className="max-w-2xl text-gray-600 text-xs sm:text-sm md:text-base font-light mb-8 sm:mb-10 leading-relaxed px-2">
            Delivering highly interoperable systems, cutting-edge IT
            infrastructure, and robust E-government solutions tailored to drive
            progress across the nation.
          </motion.p>

          <motion.div
            variants={slideUpVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-30 w-full sm:w-auto px-4 sm:px-0">
            <Link
              href="#"
              className="group relative inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3 bg-gray-900 text-white font-bold rounded-full overflow-hidden transition-transform  active:scale-95 ">
              <span className="relative z-10 flex items-center gap-2 text-sm">
                Explore Solutions
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            {/* <Link
              href="/projects/ceir"
              className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3 rounded-full border border-gray-200 text-gray-700 font-medium hover:bg-white transition-colors backdrop-blur-sm bg-white/50 shadow-sm text-sm">
              View CEIR Project
            </Link> */}
          </motion.div>
        </motion.div>

        {/* Center Image နှင့် Floating Cards များ (နောက်ကျပြီးမှ ထွက်ပေါ်လာမည်) */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="relative mt-12 sm:mt-16 h-[300px] sm:h-[450px]  w-full max-w-5xl mx-auto flex justify-center items-center">
          <div className="relative w-44 h-44 sm:w-72 sm:h-72 md:w-80 md:h-80 xl:w-100 xl:h-100 z-10 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-50 p-1.5 sm:p-2 backdrop-blur-3xl border border-white shadow-2xl shadow-blue-900/10 animate-[spin_20s_linear_infinite]">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-white flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]">
              <Image
                src="/ai.png"
                alt="Technology Core Infrastructure"
                fill
                priority
                className="object-cover transition-all duration-700"
                sizes="(max-width: 768px) 176px, (max-width: 1280px) 320px, 400px"
              />
            </div>
          </div>

          {serviceCards.map((card) => (
            <FloatingCard
              key={card.id}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
              positionClasses={card.positionClasses}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
