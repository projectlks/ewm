
"use client"
import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useCursorHover } from "@/hook/useCursorHover";

interface ServiceItem {
  name: string;
}

interface ServiceCategory {
  id: string;
  number: string; // နောက်ခံတွင် ပြသရန် နံပါတ်စဉ်
  title: string;
  description: string;
  items: ServiceItem[];
}

const servicesData: ServiceCategory[] = [
  {
    id: "consultation",
    number: "01",
    title: "Consultation & Design",
    description:
      "Expert guidance to plan and design scalable IT and telecom architectures tailored to your business needs.",
    items: [
      { name: "Site Surveys & Assessment" },
      { name: "Network Planning & Strategy" },
      { name: "Custom Solution Architecture" },
    ],
  },
  {
    id: "installation",
    number: "02",
    title: "Installation & Deployment",
    description:
      "Professional setup and configuration of equipment, ensuring seamless integration and optimal performance.",
    items: [
      { name: "Hardware & Equipment Installation" },
      { name: "Structured Cable Management" },
      { name: "System Configuration & Testing" },
    ],
  },
  {
    id: "maintenance",
    number: "03",
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance and highly responsive technical support to keep your critical operations running 24/7.",
    items: [
      { name: "Preventive & Corrective Maintenance" },
      { name: "24/7 Helpdesk & Remote Support" },
      { name: "On-site Troubleshooting & Repair" },
    ],
  },
  {
    id: "training",
    number: "04",
    title: "Training & Documentation",
    description:
      "Empowering your in-house team with the right knowledge, operational skills, and comprehensive manuals.",
    items: [
      { name: "Operational & Technical Training" },
      { name: "Seamless Knowledge Transfer" },
      { name: "Comprehensive System Documentation" },
    ],
  },
];

export function ComprehensiveServicesSection(): React.JSX.Element {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  return (
    <section id="solutions" className="py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Comprehensive Services
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            End-to-end service solutions from initial consultation and design to
            deployment, maintenance, and technical training.
          </p>
        </div>

        {/* 
          Grid Layout: Desktop တွင် 2-cols ဖြင့် နေရာချထားပါသည်
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {servicesData.map((service: ServiceCategory) => (
            <div
              onMouseEnter={(e) => handleMouseEnter(e)}
              onMouseLeave={handleMouseLeave}
              key={service.id}
              className="group relative overflow-hidden bg-white p-8 md:p-10 rounded-3xl border border-gray-100  transition-all duration-300 flex flex-col">
              {/* ================= BACKGROUND WATERMARK NUMBER ================= */}
              <div className="absolute -right-4 -bottom-6 text-[120px] md:text-[160px] font-black text-gray-50 group-hover:text-blue-50/60 group-hover:-translate-y-4 transition-all duration-500 pointer-events-none select-none z-0 leading-none">
                {service.number}
              </div>

              {/* ================= FOREGROUND CONTENT ================= */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Title */}

                <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight flex items-center">
                  {/* မျဉ်းပြာလေး ပိန်ုံမသွားစေရန် shrink-0 ထည့်ထားပါသည် */}
                  <span className="w-8 h-1 shrink-0 bg-blue-600 rounded-full mr-4 transition-all duration-300 group-hover:w-12"></span>

                  {/* စာသားရှည်သွားပါက အောက်တစ်ကြောင်းမဆင်းဘဲ ... ဖြင့်ဖြတ်ရန် truncate သုံးထားပါသည် */}
                  <span className="truncate">{service.title}</span>
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                {/* Items List */}
                <ul className="space-y-4">
                  {service.items.map((item: ServiceItem, index: number) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
                      <span className="text-sm  font-medium">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
