"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    client:
      " Ministry of Planning and Finance, Ministry of Transport and Communications",
    year: "2024",
    desc: "Turnkey Central Equipment Identity Register solution delivering enterprise-level infrastructure to monitor, authenticate, and manage mobile devices across large-scale networks.",
    features: [
      "CENTRALIZED DATABASE",
      "ENTERPRISE INFRASTRUCTURE",
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
    client: "MPT, U9, ATOM, MYTEL",
    year: "2024",
    desc: "Turnkey Equipment Identity Register solution delivering enterprise-level infrastructure to manage IMEI registration, authenticate devices, and maintain comprehensive white and blacklists for mobile operators.",
    features: ["Operator Integration", "High Availability", " IMEI MANAGEMENT"],
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
  // 💡 မည်သည့် Project ပွင့်နေသည်ကို မှတ်သားထားမည့် State (တစ်ခုတည်းသာ ပွင့်ခွင့်ပြုရန်)
  const [openProjectId, setOpenProjectId] = useState<string | null>(
    allProjects[0].id,
  );

  return (
    <main className="min-h-screen bg-white py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER SECTION */}
        <div className="mb-24 md:mb-32">
          <span className="text-[10px] font-bold tracking-widest text-gray-400 mb-6 block uppercase">
            [ PORTFOLIO ARCHIVE ]
          </span>
          <h1 className="mb-10 uppercase text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.15]">
            Selected <br /> Works.
          </h1>

          <div className=" border-b border-gray-200 pb-12">
            {/* 💡 ရှင်းလင်းသွားစေရန် စာသားအကျယ်ကို အနည်းငယ် တိုးပေးထားပါသည် */}
            <p className="text-gray-500 text-base md:text-lg font-medium max-w-xl leading-relaxed">
              An in-depth look at our enterprise-level deployments,
              infrastructure designs, and software solutions executed by East
              Wind Myanmar and NK Venus.
            </p>
          </div>
        </div>

        {/* DETAILED LIST SECTION */}
        <motion.div layout className="flex flex-col">
          <AnimatePresence mode="popLayout">
            {/* 💡 Filter မလိုတော့သဖြင့် allProjects ကို တိုက်ရိုက် အသုံးပြုထားပါသည် */}
            {allProjects.map((project) => (
              <AccordionProjectRow
                key={project.id}
                project={project}
                isOpen={openProjectId === project.id}
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

// Props များတွင် isOpen နှင့် onToggle ကို ထပ်တိုးထားပါသည်
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
      onClick={onToggle}
      className={`group relative flex flex-col py-12 lg:py-16 border-b border-gray-200 transition-colors cursor-pointer`}>
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full relative z-10">
        {/* 1. Metadata Column */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
          {/* <span
            className={`self-start inline-block px-2 py-1 text-[9px] font-bold tracking-widest uppercase border transition-colors ${
              project.company === "NK Venus"
                ? "text-purple-700 border-purple-200 bg-purple-50 group-hover:bg-transparent"
                : "text-blue-700 border-blue-200 bg-blue-50 group-hover:bg-transparent"
            }`}>
            {project.company}
          </span> */}
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
          <p className="text-sm text-gray-500 leading-relaxed font-medium mb-8">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.features.map((feature, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-white border  transition-colors border-gray-200 text-gray-600 text-[10px] font-bold tracking-widest uppercase rounded-full">
                {feature}
              </span>
              // hover:bg-gray-950 hover:text-gray-100
            ))}
          </div>
        </div>
      </div>

      {/* Expandable Image Section */}
      {/* <AnimatePresence initial={false}>
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
      </AnimatePresence> */}
    </motion.div>
  );
}
