"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TeamItem {
  id: string;
  label: string;
  title: string;
  desc: string;
  img: string;
}

const teamData: TeamItem[] = [
  {
    id: "system",
    label: "SYSTEM DESIGN",
    title: "System Engineers",
    desc: "Architecture Planning. Detailed Requirements Analysis. Seamless System Integration.",
    img: "/teams/1.jpg",
  },
  {
    id: "network",
    label: "NETWORK & OPS",
    title: "Network Engineers",
    desc: "Robust Network Infrastructure. System Operations. 24/7 SOC & NOC Monitoring.",
    img: "/teams/2.jpg",
  },
  {
    id: "pm",
    label: "PROJECT MANAGEMENT",
    title: "Project MANAGEMENT",
    desc: "Planning & Strategy. Resource & Budget management. Risk & Quality Control.",
    img: "/teams/3.jpg",
  },
  {
    id: "software",
    label: "DEVELOPMENT",
    title: "Software Team",
    desc: "Software Architects. Full-Stack Developers. UI/UX, QA, and DevOps experts.",
    img: "/teams/4.jpg",
  },
  {
    id: "logistics",
    label: "PROCUREMENT",
    title: "Logistics Team",
    desc: "End-to-end Procurement Management. Logistics & Warehouse. Risk & Compliance.",
    img: "/teams/5.jpg",
  },
];

const TeamCard = ({
  team,
}: {
  team: TeamItem;
  index: number;
  globalIndex: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      // Card တစ်ခုလုံးကို မူလအတိုင်း အပေါ်(ပုံ) အောက်(စာ) ပုံစံပဲ ပြန်ထားပါမည်
      className="flex flex-col group w-full gap-5 items-center sm:items-start text-left"
    >
      {/* 💡 ပုံ၏ Aspect Ratio ကို Mobile တွင် [164/126] (အလျားလိုက်)၊ Tablet မှစ၍ [126/164] (အထောင်) ဖြစ်အောင် ပြောင်းထားပါသည် */}
      <div className="w-full overflow-hidden rounded-2xl aspect-3/2 sm:aspect-126/164 bg-gray-100 relative mb-0 lg:mb-4 shrink-0">
        <Image
          src={team.img}
          alt={team.title}
          className="object-cover "
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col px-2 w-full">
        <h4 className="text-xl md:text-2xl lg:text-xl font-extrabold text-gray-900 mb-2 md:mb-3 tracking-tight">
          {team.title}
        </h4>
        <p className="text-sm md:text-base lg:text-sm text-gray-500 leading-relaxed font-medium">
          {team.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function TeamSection(): React.JSX.Element {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-0  ">
      <div className="w-full relative grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-10 items-start mx-auto">

        {/* Left Column: Header */}
        <div className="z-50 bg-white static lg:sticky lg:top-40 mb-8 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start  text-left"
          >
            <div>
              <span className="text-[10px] font-bold tracking-widest text-gray-400 mb-4 block uppercase">
                THE TEAM
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                Meet the minds.
              </h2>
              <p className="text-gray-500 text-sm md:text-base font-medium">
                The driving force behind our turnkey infrastructure solutions.
              </p>
            </div>
          </motion.div>
        </div>
        {/* Right Column: Cards */}
        <div className="lg:col-span-2  2xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-6 sm:gap-6 gap-y-10 sm:gap-y-12">
          {teamData.map((team, index) => (
            <TeamCard
              key={team.id}
              team={team}
              index={index}
              globalIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}