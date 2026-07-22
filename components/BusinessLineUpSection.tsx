import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface EquipmentItem {
  name: string;
  description: string;
}

interface EquipmentCategory {
  id: string;
  title: string;
  items: EquipmentItem[];
}

const equipmentData: EquipmentCategory[] = [
  {
    id: "networking",
    title: "Networking Equipment",

    items: [
      {
        name: "Routers & Switches",
        description:
          "Advanced high-speed network connectivity for enterprise infrastructure.",
      },
      {
        name: "Firewall Devices",
        description: "Next-generation protection for robust cybersecurity.",
      },
      {
        name: "IoT Devices",
        description: "Smart automation and real-time monitoring controls.",
      },
    ],
  },
  {
    id: "infrastructure",
    title: "IT Infrastructure",

    items: [
      {
        name: "Servers & Storage",
        description:
          "Secure and reliable storage solutions for large-scale data.",
      },
      {
        name: "Data Center Products",
        description:
          "Standardized equipment for modern data center deployment.",
      },
      {
        name: "UPS Systems",
        description: "24/7 backup power systems for uninterrupted operations.",
      },
    ],
  },
  {
    id: "telecom",
    title: "Telecom Equipment",

    items: [
      {
        name: "Tower Materials",
        description:
          "Durable components and accessories for tower construction.",
      },
      {
        name: "Solar Panels",
        description:
          "Renewable energy solutions for sustainable power generation.",
      },
      {
        name: "Battery & Backup",
        description: "Long-lasting power backup solutions for telecom sites.",
      },
    ],
  },
  {
    id: "cables",
    title: "Cables & Accessories",

    items: [
      {
        name: "Fiber Optic Cables",
        description:
          "Fastest and most stable cables for seamless data transmission.",
      },
      {
        name: "Ethernet & Connectors",
        description:
          "Reliable wiring solutions for standard network connectivity.",
      },
      {
        name: "Rack & Mounting",
        description:
          "Cabinets and racks for systematic equipment installation.",
      },
    ],
  },
];

export function BusinessLineUpSection(): React.JSX.Element {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-3">
            Business Line Up & Equipment Supply
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Comprehensive equipment supply solutions designed to empower and
            scale your digital infrastructure.
          </p>
        </div>

        {/* 
          Desktop တွင် 4-cols, Tablet တွင် 2-cols ဖြင့် နေရာချထားပါသည်
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12 md:gap-y-16">
          {" "}
          {equipmentData.map((category: EquipmentCategory) => (
            <div
              key={category.id}
              className="group relative   rounded-2xl   transition-all duration-300 flex flex-col h-full">
              {/* Icon (Container အပိုမပါဘဲ အရောင်လေးသာထည့်၍ တိုက်ရိုက်အသုံးပြုထားသည်) */}

              {/* Title */}

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-5 tracking-tight   pb-3">
                {category.title}
              </h3>

              {/* Items List */}
              <ul className="space-y-5 flex-1">
                {category.items.map((item: EquipmentItem, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-3 mt-1 shrink-0" />
                    <div>
                      {/* ပစ္စည်းအမည် */}
                      <div className="text-sm font-semibold text-gray-800 mb-0.5">
                        {item.name}
                      </div>
                      {/* အသုံးဝင်ပုံ ရှင်းလင်းချက် */}
                      <div className="text-xs text-gray-500 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
