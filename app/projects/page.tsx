"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 💡 Type အတိအကျ ကြေညာထားပါသည်
type CompanyType = "All" | "East Wind Myanmar" | "NK Venus";

interface ProjectDetail {
  id: string;
  title: string;
  company: "East Wind Myanmar" | "NK Venus";
  category: string;
  client: string;
  year: string;
  desc: string;
  features: string[]; // 💡 Detail ပိုဖြစ်စေရန် Feature များ ထပ်တိုးထားပါသည်
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
    client: "MoPF / MOTC",
    year: "2024",
    desc: "Central Equipment Identity Register implementation to monitor and manage mobile devices across the national network securely.",
    features: [
      "National Database",
      "Security Compliance",
      "Real-time Monitoring",
    ],
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
  },
];

export default function DetailedProjectsPage(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState<CompanyType>("All");

  const filteredProjects = allProjects.filter((project) =>
    activeTab === "All" ? true : project.company === activeTab,
  );

  return (
    <main className="min-h-screen bg-white py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* =======================================
            HEADER SECTION
            ======================================= */}
        <div className="mb-24 md:mb-32">
          <span className="text-[10px] font-bold tracking-widest text-gray-400 mb-6 block uppercase">
            [ PORTFOLIO ARCHIVE ]
          </span>
          <h1 className="ttext-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.15] mb-10 uppercase">
            Selected <br /> Works.
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-gray-200 pb-12">
            <p
              className=" font-medium max-w-xl leading-relaxed 
            
            text-sm md:text-base text-gray-500 
            ">
              An in-depth look at our enterprise-level deployments,
              infrastructure designs, and software solutions executed by East
              Wind Myanmar and NK Venus.
            </p>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-3">
              {(["All", "East Wind Myanmar", "NK Venus"] as CompanyType[]).map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
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

        {/* =======================================
            DETAILED LIST SECTION
            ======================================= */}
        <motion.div layout className="flex flex-col">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                // 💡 Hover Scale မပါဘဲ Background Color အနည်းငယ်သာ ပြောင်းလဲပေးပါသည်
                className="group flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 lg:py-16 border-b border-gray-200 transition-colors hover:bg-gray-50/50 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-12 md:px-12">
                {/* 1. Metadata Column (Left) */}
                <div className="w-full lg:w-1/4 flex flex-col gap-4">
                  <span
                    className={`self-start inline-block px-2 py-1 text-[9px] font-bold tracking-widest uppercase border rounded-full ${
                      project.company === "NK Venus"
                        ? "text-purple-700 border-purple-200 bg-purple-50"
                        : "text-blue-700 border-blue-200 bg-blue-50"
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

                {/* 2. Title Column (Middle) */}
                <div className="w-full lg:w-1/3 flex flex-col">
                  <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-4">
                    [ {project.category} ]
                  </p>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* 3. Detail & Features Column (Right) */}
                <div className="w-full lg:w-5/12 flex flex-col justify-between">
                  <p className="text-sm text-gray-500 leading-relaxed font-medium mb-8 lg:mb-0">
                    {project.desc}
                  </p>

                  {/* Detailed Feature Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-[10px] font-bold tracking-widest uppercase rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
