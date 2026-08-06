"use client"; // Interactive Animation (useState) သုံးထားသဖြင့် ထည့်ပေးရပါမည်

import Image from "next/image";
import React, { useState } from "react";

interface CoreValue {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const coreValuesData: CoreValue[] = [
  {
    id: "customer-focus",
    title: "Customer Focus",
    description:
      "We prioritize our clients' needs, ensuring satisfaction, trust, and long-term success through dedicated support.",
    imageUrl: "/core/1.jpg",
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "Embracing cutting-edge technology and forward-thinking strategies to deliver modern, efficient solutions.",
    imageUrl: "/core/2.jpg",
  },
  {
    id: "integrity-quality",
    title: "Integrity & Quality",
    description:
      "Upholding the highest ethical standards while delivering premium, reliable, and standardized results.",
    imageUrl: "/core/3.jpg",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description:
      "Committed to environmentally friendly practices, renewable energy, and the long-term viability of our projects.",
    imageUrl: "/core/4.jpg",
  },
  {
    id: "interoperability",
    title: "Interoperability",
    description:
      "Designing systems and infrastructure that seamlessly integrate, communicate, and work together flawlessly.",
    imageUrl: "/core/5.jpg",
  },
];

export function CoreValuesSection(): React.JSX.Element {
  const [activeId, setActiveId] = useState<string>("customer-focus");

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Our Core Values
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            The fundamental beliefs that guide our actions, shape our culture,
            and drive our commitment to excellence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 w-full h-[700px] lg:h-[500px]">
          {/* 💡 .map တွင် index ကိုပါ ထုတ်ယူထားပါသည် */}
          {coreValuesData.map((value, index) => {
            const isActive = activeId === value.id;

            return (
              <div
                key={value.id}
                onMouseEnter={() => setActiveId(value.id)}
                onClick={() => setActiveId(value.id)}
                className={`relative overflow-hidden rounded-[2rem] transition-all duration-700 ease-in-out cursor-pointer group flex flex-col justify-end
                  ${isActive ? "flex-[5]" : "flex-[1]"}
                `}>
                {/* Background Image */}
                <Image
                  src={value.imageUrl}
                  alt={value.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  // 💡 Browser Warning ပျောက်စေရန် sizes ထည့်သွင်းထားပါသည်
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
                  // 💡 LCP Warning ပျောက်စေရန် ပထမဆုံးပုံ (index 0) အတွက်သာ priority အလုပ်လုပ်စေပါသည်
                  priority={index === 0}
                />

                <div
                  className={`absolute inset-0 transition-all duration-700 
                  ${isActive ? "bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" : "bg-gray-900/50 group-hover:bg-gray-900/30"}`}></div>

                {/* Content Area */}
                <div className="relative z-10 p-5 md:p-8 flex flex-col justify-end h-full">
                  <div className="flex items-center gap-4">
                    <h3
                      className={`text-xl md:text-2xl font-bold text-white whitespace-nowrap transition-all duration-700 ease-in-out
                        ${isActive ? "opacity-100 translate-x-0 w-auto" : "opacity-0 translate-x-4 w-0 overflow-hidden"}
                      `}>
                      {value.title}
                    </h3>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out
                      ${isActive ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}
                    `}>
                    <p className="text-gray-200 text-sm md:text-[15px] leading-relaxed max-w-lg">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
