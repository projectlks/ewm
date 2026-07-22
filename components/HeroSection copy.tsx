import React from "react";
import Image from "next/image";
import {
  SignalIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

// TypeScript တွင် 'any' ကို လုံးဝ အသုံးမပြုဘဲ Interface များကို တိကျစွာ သတ်မှတ်ထားခြင်း
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
      className={`absolute hidden lg:flex flex-col gap-3 backdrop-blur-xl bg-white/70 border border-white/50 p-5 rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 z-20 ${positionClasses}`}>
      <div className="flex items-center gap-4">
        <div className="bg-blue-50 p-3 rounded-xl text-blue-600">{icon}</div>
        <div>
          <h3 className="text-gray-900 font-bold text-sm tracking-wide">
            {title}
          </h3>
          <p className="text-gray-500 text-xs mt-1">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center  pt-20">
      {/* Soft Light Glowing Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-300/40 rounded-full blur-[120px] mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-300/30 rounded-full blur-[150px] mix-blend-multiply pointer-events-none" />

      {/* Decorative Light Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Main Typography - Light Mode Unique Layered Style */}
          <div className="relative mb-6">
            {/* <h2 className="text-transparent uppercase tracking-[0.5em] text-xs sm:text-sm font-bold bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4 block">
              EastWind Myanmar
            </h2> */}

            {/* စာလုံးအရွယ်အစားကို 4xl, 5xl, 6xl သို့ ပြောင်းလဲထားခြင်း */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
              {/* ပထမစာကြောင်း (EMPOWERING MYANMAR'S) */}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 mr-3 sm:mr-4">
                EMPOWERING
              </span>
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "2px rgba(21,93,252,0.5)" }}>
                MYANMAR&apos;S
              </span>

              <br />

              {/* ဒုတိယစာကြောင်း (DIGITAL FUTURE) */}
              <span className="block mt-2 sm:mt-4 text-gray-900">
                DIGITAL FUTURE
              </span>
            </h1>
          </div>

          {/* Paragraph ကို အနည်းငယ် သေးပေးထားခြင်း */}
          <p className="max-w-2xl text-gray-600 text-sm sm:text-base font-light mb-10 leading-relaxed">
            Delivering highly interoperable systems, cutting-edge IT
            infrastructure, and robust E-government solutions tailored to drive
            progress across the nation.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-30">
            <button className="group relative px-5 py-2.5 sm:px-6 sm:py-3 bg-gray-900 text-white font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-gray-900/20">
              <span className="relative z-10 flex items-center gap-2 text-sm">
                Explore Solutions
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-gray-200 text-gray-700 font-medium hover:bg-white transition-colors backdrop-blur-sm bg-white/50 shadow-sm text-sm">
              View CEIR Project
            </button>
          </div>
        </div>

        {/* Unique Floating Tech Nodes & Center Image (Light Version) */}
        <div className="relative mt-16 h-[350px] sm:h-[450px] w-full max-w-5xl mx-auto flex justify-center items-center">
          {/* Main Center Image */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 z-10 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-50 p-2 backdrop-blur-3xl border border-white shadow-2xl shadow-blue-900/10 animate-[spin_20s_linear_infinite]">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-white flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]">
              <Image
                src="/ai.png" // အလင်းရောင်နှင့် လိုက်ဖက်မည့် နည်းပညာပုံကို အသုံးပြုရန်
                alt="Technology Core Infrastructure"
                fill
                priority
                className="object-cover transition-all duration-700"
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          </div>
          {/* Floating Cards - Positioned absolutely around the center image */}

          {/* Top Left */}
          <FloatingCard
            title="E-Government"
            subtitle="CEIR & EIR Implementation"
            icon={<ShieldCheckIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            positionClasses="top-[5%] left-[2%] xl:-left-[8%]"
          />

          {/* Bottom Left */}
          <FloatingCard
            title="Telecom Setup"
            subtitle="Seamless Integration"
            icon={<SignalIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            positionClasses="bottom-[15%] left-[8%] xl:left-[0%]"
          />

          {/* Top Right */}
          <FloatingCard
            title="IT Infrastructure"
            subtitle="Network & Security"
            icon={<ServerStackIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            positionClasses="top-[15%] right-[2%] xl:-right-[8%]"
          />

          {/* Bottom Right (AI Card အတွက် Icon ပြောင်းထားခြင်း) */}
          <FloatingCard
            title="AI"
            subtitle="Data Center & Servers"
            icon={<CpuChipIcon className="w-5 h-5 sm:w-6 sm:h-6" />}
            positionClasses="bottom-[25%] right-[8%] xl:right-[0%]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
