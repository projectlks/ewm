"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// 💡 any Error မတက်စေရန် ProjectData Type ကို အတိအကျ ကြေညာထားပါသည်
// 💡 image?: string ကို ထပ်တိုးထားပါသည်


// 💡 Type အတိအကျ ကြေညာထားပါသည် (any လုံးဝ မပါဝင်ပါ)
type ProjectData = {
  company: "East Wind Myanmar" | "NK Venus";
  title: string;
  year: string;
  client: string;
  desc: string;
  image: string;
};

const projects: Record<string, ProjectData> = {
  small1: {
    company: "East Wind Myanmar",
    title: "CEIR Project",
    year: "2024",
    client: "MoPF / MOTC",
    desc: "Central Equipment Identity Register implementation to monitor and manage mobile devices.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1920",
  },
  small2: {
    company: "East Wind Myanmar",
    title: "EIR Project",
    year: "2024",
    client: "MPT, U9, ATOM",
    desc: "National Equipment Identity Register specifically tailored for top mobile operators.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1920",
  },
  small3: {
    company: "East Wind Myanmar",
    title: "Surveillance System",
    year: "2025",
    client: "PTD",
    desc: "Deployment of advanced CCTV systems integrated with a centralized control framework.",
    image:
      "https://images.unsplash.com/photo-1549109926-58f039549485?auto=format&fit=crop&q=80&w=1920",
  },
  small4: {
    company: "East Wind Myanmar",
    title: "24/7 Tech Support",
    year: "2025",
    client: "IRD",
    desc: "A fully operational technical support center designed to provide uninterrupted IT assistance.",
    image:
      "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1920",
  },
  wide: {
    company: "NK Venus",
    title: "Convergent Billing System",
    year: "2022-2023",
    client: "MPT & KSGM",
    desc: "Supply, installation, and maintenance of critical servers and telecom equipment.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1920",
  },
  tall: {
    company: "NK Venus",
    title: "Device Management System",
    year: "2024",
    client: "Telecom Sector",
    desc: "Implementation of a centralized system to configure, update, and manage network devices remotely.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920",
  },
};
export default function FeaturedProjectsSection(): React.JSX.Element {
  return (
    <section className="py-24 px-4 sm:px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16">
          <span className="text-[10px] font-bold tracking-widest text-gray-400 mb-4 block uppercase">
            [ OUR WORK ]
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
            Featured Projects.
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium max-w-xl">
            Delivering end-to-end digital solutions and enterprise-level
            infrastructure across Myanmar.
          </p>
        </motion.div>

        {/* =======================================
            MAIN GRID: 12 Columns Total
            Left = 7 Cols, Right = 5 Cols
            ======================================= */}
        <div className="border p-6 border-gray-300 rounded-[56px] bg-gray-200/50 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* 💡 LEFT SIDE: col-span-7 */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* ROW 1: (Span 3 + Span 4) */}
              <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
                <div className="md:col-span-3 aspect-square">
                  <ProjectCard data={projects.small1} />
                </div>
                <div className="md:col-span-4">
                  <ProjectCard data={projects.small2} />
                </div>
              </div>

              {/* ROW 2: (Span 4 + Span 3) ပြောင်းပြန် */}
              <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
                <div className="md:col-span-4">
                  <ProjectCard data={projects.small3} />
                </div>
                <div className="md:col-span-3 aspect-square">
                  <ProjectCard data={projects.small4} />
                </div>
              </div>

              {/* ROW 3: အောက်ဆုံးက အပြည့် (Full Width) */}
              <div className="w-full">
                <ProjectCard data={projects.wide} />
              </div>
            </div>

            {/* 💡 RIGHT SIDE: col-span-5 */}
            <div className="lg:col-span-5 flex">
              <div className="w-full h-full">
                <ProjectCard data={projects.tall} isTall={true} />
              </div>
            </div>
          </div>
        </div>

{/* 32 + 24  */}
        {/* =======================================
            VIEW ALL PROJECTS BUTTON
            ======================================= */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-200 rounded-full text-sm font-bold text-gray-900 bg-white hover:bg-gray-50 transition-colors w-full md:w-auto">
            View All Projects
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
// 💡 Project Card Component
function ProjectCard({
  data,
  isTall = false,
}: {
  data: ProjectData;
  isTall?: boolean;
}) {
  // ပုံပါ/မပါ စစ်ဆေးရန်
  const hasImage = !!data.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      // 💡 relative နှင့် overflow-hidden ကိုအသုံးပြု၍ ပုံအား Card အပြည့်ဖြစ်စေရန် ထိန်းချုပ်ထားပါသည်
      className={`relative overflow-hidden rounded-[2rem] border border-gray-200 p-6 md:p-8 flex flex-col transition-colors hover:border-blue-200 w-full h-full min-h-[250px] ${
        isTall ? "min-h-[400px] lg:min-h-full" : ""
      } ${hasImage ? "border-none" : "bg-white"}`}>
      {/* =======================================
          Background Image & Overlay (ပုံပါခဲ့လျှင်)
          ======================================= */}
      {hasImage && (
        <>
          {/* 💡 absolute inset-0 ဖြင့် ပုံကို သီးသန့်နေရာမယူစေဘဲ နောက်ခံအပြည့်ဖြစ်အောင် လုပ်ထားပါသည် */}
          <img
            src={data.image}
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover  z-0"
          />
          {/* စာသားများ ထင်ရှားစေရန် Gradient အလွှာပါးပါးခံပေးထားခြင်း */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-0"></div>
        </>
      )}

      {/* ပုံမပါဘဲ isTall သာဖြစ်နေလျှင် မူလ SVG Placeholder ကို ပြသမည် */}
      {!hasImage && isTall && (
        <div className="w-full h-48 bg-[#F8F9FA] rounded-2xl mb-8 flex items-center justify-center text-gray-300 relative z-10">
          <svg
            className="w-10 h-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        </div>
      )}

      {/* =======================================
          Text Content (စာသားများ)
          ======================================= */}
      {/* 💡 relative z-10 ဖြင့် စာသားများကို ပုံအပေါ်မှ ပေါ်စေပါသည် */}
      <div className="flex flex-col flex-grow  justify-end-safe relative z-10">
        {/* <span
          className={`text-[10px] font-bold tracking-widest mb-3 uppercase block ${
            hasImage ? "text-gray-300" : "text-gray-400"
          }`}>
          [ {data.client} • {data.year} ]
        </span> */}
        <h4
          className={`text-xl md:text-2xl font-extrabold mb-3 tracking-tight ${
            hasImage ? "text-white" : "text-gray-900"
          }`}>
          {data.title}
        </h4>
        <p
          className={`text-sm leading-relaxed font-medium  ${
            hasImage ? "text-gray-200" : "text-gray-500"
          }`}>
          {data.desc}
        </p>
      </div>
    </motion.div>
  );
}
