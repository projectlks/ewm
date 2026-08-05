"use client"; // Interactive Animation (useState) သုံးထားသဖြင့် ထည့်ပေးရပါမည်

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

    // imageUrl:
    imageUrl: "/3.jpg", // Professional Handshake / Trust
    // "https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?auto=format&fit=crop&q=80&w=800",
  },

  {
    id: "innovation",
    title: "Innovation",
    description:
      "Embracing cutting-edge technology and forward-thinking strategies to deliver modern, efficient solutions.",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800", // Modern Tech / Innovation Team
  },
  {
    id: "integrity-quality",
    title: "Integrity & Quality",
    description:
      "Upholding the highest ethical standards while delivering premium, reliable, and standardized results.",
    imageUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920", // Professional Handshake / Trust
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description:
      "Committed to environmentally friendly practices, renewable energy, and the long-term viability of our projects.",
    imageUrl:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=800", // Wind Turbines / Renewable Energy
  },
  {
    id: "interoperability",
    title: "Interoperability",
    description:
      "Designing systems and infrastructure that seamlessly integrate, communicate, and work together flawlessly.",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", // Global Network Connections
  },
];

// const coreValuesData: CoreValue[] = [
//   {
//     id: "ethics-legality",
//     title: "Ethics and Legality",
//     description:
//       "Ethics and legality are our foundations, the starting and ending point of a long-term project featuring a strong commitment to improvement, transparency, sustainability, and personal development.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: "excellence",
//     title: "Excellence",
//     description:
//       "We want to delight our customers by creating extremely innovative, complete, and easy-to-use products, working quickly and efficiently to achieve the goals and objectives.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: "digital-transformation",
//     title: "Simplification & Digital Transformation",
//     description:
//       "We guide our Customers in building a more agile business, automating manual processes, and providing tools to measure results in process efficiency and resources optimization.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: "professionalism",
//     title: "Individuality & Professionalism",
//     description:
//       "Intelligence, enthusiasm, and creativity are the key values of East Wind Myanmar's professionalism, aimed at continuous improvement to achieve ambitious goals.",
//     imageUrl:
//       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
//   },
// ];

export function CoreValuesSection(): React.JSX.Element {
  // ပထမဆုံး အကွက်ကို Default အနေဖြင့် ကျယ်နေစေရန် သတ်မှတ်ထားပါသည်
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

        {/* 
          Interactive Expanding Layout
          Mobile တွင် အပေါ်အောက်၊ Desktop တွင် ဘေးတိုက် ကျယ်လာမည့် ပုံစံဖြစ်ပါသည်
        */}
        <div className="flex flex-col lg:flex-row gap-4 w-full h-[700px] lg:h-[500px]">
          {coreValuesData.map((value) => {
            const isActive = activeId === value.id;

            return (
              <div
                key={value.id}
                onMouseEnter={() => setActiveId(value.id)}
                onClick={() => setActiveId(value.id)}
                // Flex box ၏ flex-grow ကို အသုံးပြု၍ အကျယ်အဝန်းကို အသက်သွင်းထားပါသည်
                className={`relative overflow-hidden rounded-[2rem] transition-all duration-700 ease-in-out cursor-pointer group flex flex-col justify-end
                  ${isActive ? "flex-[5]" : "flex-[1]"}
                `}>
                {/* Background Image */}
                <img
                  src={value.imageUrl}
                  alt={value.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay - Active ဖြစ်လျှင် ပိုမိုက်စေရန် */}
                <div
                  className={`absolute inset-0 transition-all duration-700 
                  ${isActive ? "bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" : "bg-gray-900/50 group-hover:bg-gray-900/30"}`}></div>

                {/* Content Area */}
                <div className="relative z-10 p-5 md:p-8 flex flex-col justify-end h-full">
                  {/* Number & Title */}
                  <div className="flex items-center gap-4">
                    {/* <span className="w-10 h-10 shrink-0 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white font-bold text-sm">
                      0{index + 1}
                    </span> */}
                    <h3
                      className={`text-xl md:text-2xl font-bold text-white whitespace-nowrap transition-all duration-700 ease-in-out
                        ${isActive ? "opacity-100 translate-x-0 w-auto" : "opacity-0 translate-x-4 w-0 overflow-hidden"}
                      `}>
                      {value.title}
                    </h3>
                  </div>

                  {/* Description - Active ဖြစ်မှသာ ပေါ်လာပါမည် */}
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
