"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CompanyType = "All" | "East Wind Myanmar" | "NK Venus";

interface ProjectDetail {
  id: string;
  title: string;
  company: "East Wind Myanmar" | "NK Venus";
  category: string;
  client: string;
  year: string;
  desc: string;
  features: string[];
  image: string;
}

const allProjects: ProjectDetail[] = [
  // ==========================================
  // EAST WIND MYANMAR PROJECTS
  // ==========================================
  {
    id: "ew-1",
    title: "CEIR Project",
    company: "East Wind Myanmar",
    category: "Identity Register",
    client: "MOPF / MOTC",
    year: "2024",
    desc: "Central Equipment Identity Register implementation to monitor and manage mobile devices across the national network securely.",
    features: [
      "National Database",
      "Security Compliance",
      "Real-time Monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: "ew-2",
    title: "EIR Project",
    company: "East Wind Myanmar",
    category: "Telecom Infrastructure",
    client: "MPT, U9, ATOM",
    year: "2024",
    desc: "National Equipment Identity Register specifically tailored for top mobile operators to authenticate and validate device statuses.",
    features: ["Operator Integration", "High Availability", "Device Tracking"],
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: "ew-3",
    title: "Surveillance System",
    company: "East Wind Myanmar",
    category: "Security & Control",
    client: "PTD",
    year: "2025",
    desc: "Deployment of advanced CCTV systems integrated with a centralized control framework for comprehensive area monitoring.",
    features: ["Advanced CCTV", "Central Framework", "24/7 Recording"],
    image:
      "https://images.unsplash.com/photo-1549109926-58f039549485?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: "ew-4",
    title: "24/7 Technical Support Center Solution",
    company: "East Wind Myanmar",
    category: "Support & Helpdesk",
    client: "IRD",
    year: "2025",
    desc: "A fully operational technical support center designed to provide uninterrupted IT assistance and infrastructure troubleshooting.",
    features: ["24/7 NOC/SOC", "Ticket Management", "SLA Compliance"],
    image:
      "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: "ew-5",
    title: "24/7 Helpline Center Software Solution",
    company: "East Wind Myanmar",
    category: "Software Solution",
    client: "Enterprise Clients",
    year: "2024-2025",
    desc: "Custom software architecture designed to handle large volumes of helpline queries with automated routing and response systems.",
    features: ["Call Routing", "Analytics Dashboard", "CRM Integration"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1920",
  },

  // ==========================================
  // NK VENUS PROJECTS
  // ==========================================
  {
    id: "nk-1",
    title: "Convergent Billing System Project",
    company: "NK Venus",
    category: "Telecom Operations",
    client: "MPT & KSGM",
    year: "2022-2023",
    desc: "Supply, installation, and maintenance of critical servers and telecom equipment essential for Convergent Billing System operations.",
    features: ["Critical Servers", "Billing Architecture", "Telecom Hardware"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: "nk-2",
    title: "Material Supply",
    company: "NK Venus",
    category: "Logistics & Supply",
    client: "Ooredoo Myanmar",
    year: "2023",
    desc: "End-to-end procurement and material supply chain management for nationwide telecommunication infrastructure expansion.",
    features: ["Procurement", "Quality Assurance", "Timely Delivery"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8ed7451401?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: "nk-3",
    title: "Device Management System Project",
    company: "NK Venus",
    category: "System Management",
    client: "Telecom Sector",
    year: "2024",
    desc: "Implementation of a centralized system to configure, update, and manage network devices remotely and efficiently.",
    features: ["Remote Configuration", "Firmware Updates", "Asset Tracking"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920",
  },
  {
    id: "nk-4",
    title: "Business Intelligence System Project",
    company: "NK Venus",
    category: "Data & Analytics",
    client: "Corporate Sector",
    year: "2024",
    desc: "Deployment of a BI infrastructure to transform raw organizational data into actionable insights for executive decision-making.",
    features: ["Data Warehousing", "Custom Reporting", "Predictive Analytics"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920",
  },
];
export default function DetailedProjectsPage(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<CompanyType>("All");

  // 💡 မည်သည့် Project ပွင့်နေသည်ကို မှတ်သားထားမည့် State (တစ်ခုတည်းသာ ပွင့်ခွင့်ပြုရန်)
const [openProjectId, setOpenProjectId] = useState<string | null>(
  allProjects[0].id,
);
  const filteredProjects = allProjects.filter((project) =>
    activeTab === "All" ? true : project.company === activeTab,
  );

  return (
    <main className="min-h-screen bg-white py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER SECTION */}
        <div className="mb-24 md:mb-32">
          <span className="text-[10px] font-bold tracking-widest text-gray-400 mb-6 block uppercase">
            [ PORTFOLIO ARCHIVE ]
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 tracking-tighter leading-none mb-10 uppercase">
            Selected <br /> Works.
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-gray-200 pb-12">
            <p className="text-gray-500 text-base md:text-lg font-medium max-w-xl leading-relaxed">
              An in-depth look at our enterprise-level deployments,
              infrastructure designs, and software solutions executed by East
              Wind Myanmar and NK Venus.
            </p>

            <div className="flex flex-wrap gap-3">
              {(["All", "East Wind Myanmar", "NK Venus"] as CompanyType[]).map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setOpenProjectId(null); // Tab ပြောင်းလျှင် ပွင့်နေတာတွေကို ပိတ်ပစ်မည်
                    }}
                    className={`px-5 py-2 text-xs font-bold tracking-widest uppercase transition-colors border-b-2 ${
                      activeTab === tab
                        ? "border-gray-900 text-gray-900"
                        : "border-transparent text-gray-400 hover:text-gray-600"
                    }`}>
                    {tab}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>

        {/* DETAILED LIST SECTION */}
        <motion.div layout className="flex flex-col">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <AccordionProjectRow
                key={project.id}
                project={project}
                // 💡 လက်ရှိ Project ID သည် ဖွင့်ထားသော ID နှင့် တူညီပါက ပွင့်မည်
                isOpen={openProjectId === project.id}
                // 💡 Click နှိပ်လိုက်ပါက ၎င်း၏ ID ကို Parent ထံသို့ ပို့ပေးမည် (ပွင့်နေပြီးသားဆိုလျှင် null အဖြစ်ထား၍ ပိတ်မည်)
                onToggle={() =>
                  setOpenProjectId(
                    openProjectId === project.id ? null : project.id,
                  )
                }
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}

// 💡 Props များတွင် isOpen နှင့် onToggle ကို ထပ်တိုးထားပါသည်
function AccordionProjectRow({
  project,
  isOpen,
  onToggle,
}: {
  project: ProjectDetail;
  isOpen: boolean;
  onToggle: () => void;
}): React.JSX.Element {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      // 💡 Local state အစား Parent မှ ပေးပို့သော onToggle ကို သုံးပါသည်
      onClick={onToggle}
      className={`group relative flex flex-col py-12 lg:py-16 border-b border-gray-200 transition-colors cursor-pointer
        

      
      `}>
      {/* 💡 Top Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full relative z-10">
        {/* 1. Metadata Column */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          <span
            className={`self-start inline-block px-2 py-1 text-[9px] font-bold tracking-widest uppercase border transition-colors ${
              project.company === "NK Venus"
                ? "text-purple-700 border-purple-200 bg-purple-50 group-hover:bg-transparent"
                : "text-blue-700 border-blue-200 bg-blue-50 group-hover:bg-transparent"
            }`}>
            {project.company}
          </span>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
              Year
            </p>
            <p className="text-sm font-semibold text-gray-900">
              {project.year}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">
              Client
            </p>
            <p className="text-sm font-semibold text-gray-900">
              {project.client}
            </p>
          </div>
        </div>

        {/* 2. Title Column */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4 transition-colors group-hover:text-gray-900">
            [ {project.category} ]
          </p>
          <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug transition-colors group-hover:text-blue-600">
            {project.title}
          </h3>
        </div>

        {/* 3. Detail & Features Column */}
        <div className="w-full lg:w-5/12 flex flex-col justify-between h-full pr-8 relative">
          {/* 💡 Plus/Minus Icon (စာသားတန်း၏ ညာဘက်အစွန်တွင် အလွယ်တကူ မြင်နိုင်စေရန် ပြင်ဆင်ထားသည်) */}
          <div className="flex items-center justify-end mt-6 lg:mt-0 text-gray-400  group-hover:text-gray-900">
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className=" w-fit p-1 rounded-full border border-gray-300 group-hover:border-gray-900">
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 12H4"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </motion.div>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed font-medium mb-8">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.features.map((feature, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-[10px] font-bold tracking-widest uppercase rounded-full">
                {feature}
              </span>
            ))}
          </div>

          {/* 💡 Plus/Minus Icon */}
          {/* <div className="absolute top-0 right-0 lg:top-1/2 lg:-translate-y-1/2 text-gray-400 transition-colors group-hover:text-gray-900">
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}>
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M20 12H4"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </motion.div>
          </div> */}
        </div>
      </div>

      {/* 💡 Expandable Image Section */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden">
            <div className="pt-10 w-full">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-[2rem] border border-gray-200"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
