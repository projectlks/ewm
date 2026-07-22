import React from "react";
import {
  UserGroupIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";

// Typescript တွင် any အသုံးမပြုရန် Interface များကို တိကျစွာ သတ်မှတ်ထားပါသည်
interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const coreValuesData: CoreValue[] = [
  {
    id: "customer-focus",
    title: "Customer Focus",
    description:
      "We prioritize our clients' needs, ensuring satisfaction, trust, and long-term success through dedicated support.",
    icon: <UserGroupIcon className="w-8 h-8 text-blue-600" />,
  },
  {
    id: "innovation",
    title: "Innovation",
    description:
      "Embracing cutting-edge technology and forward-thinking strategies to deliver modern, efficient solutions.",
    icon: <LightBulbIcon className="w-8 h-8 text-amber-500" />,
  },
  {
    id: "integrity-quality",
    title: "Integrity & Quality",
    description:
      "Upholding the highest ethical standards while delivering premium, reliable, and standardized results.",
    icon: <ShieldCheckIcon className="w-8 h-8 text-emerald-600" />,
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description:
      "Committed to environmentally friendly practices, renewable energy, and the long-term viability of our projects.",
    icon: <GlobeAltIcon className="w-8 h-8 text-teal-600" />,
  },
  {
    id: "interoperability",
    title: "Interoperability",
    description:
      "Designing systems and infrastructure that seamlessly integrate, communicate, and work together flawlessly.",
    icon: <PuzzlePieceIcon className="w-8 h-8 text-indigo-600" />,
  },
];

export function CoreValuesSection(): React.JSX.Element {
  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-3">
            Our Core Values
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            The fundamental beliefs that guide our actions, shape our culture,
            and drive our commitment to excellence.
          </p>
        </div>

        {/* 
          အချက် (၅) ချက်ကို အပေါ် (၃) ခု၊ အောက် (၂) ခု အချိုးကျကျ အလယ်တည့်တည့် (Center) 
          တွင် ပေါ်စေရန် Flexbox ကို အသုံးပြု၍ နေရာချထားပါသည်
        */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {coreValuesData.map((value: CoreValue) => (
            <div
              key={value.id}
              // Width ကို တွက်ချက်ထားခြင်း: Mobile (100%), Tablet (50%), Desktop (33.33%)
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              {/* Icon Container with subtle background hover effect */}
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                {value.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-tight">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
