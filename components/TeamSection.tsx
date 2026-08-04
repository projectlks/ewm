"use client";

import React from "react";
import { motion } from "framer-motion";

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
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "network",
    label: "NETWORK & OPS",
    title: "Network Engineers",
    desc: "Robust Network Infrastructure. System Operations. 24/7 SOC & NOC Monitoring.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "pm",
    label: "PROJECT MANAGEMENT",
    title: "Project MANAGEMENT",
    desc: "Planning & Strategy. Resource & Budget management. Risk & Quality Control.",
    img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "software",
    label: "DEVELOPMENT",
    title: "Software Team",
    desc: "Software Architects. Full-Stack Developers. UI/UX, QA, and DevOps experts.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "logistics",
    label: "PROCUREMENT",
    title: "Logistics Team",
    desc: "End-to-end Procurement Management. Logistics & Warehouse. Risk & Compliance.",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200",
  },
];

// 💡 globalIndex ကိုပါ ထည့်လက်ခံပါမည် (အလှည့်ကျ စစ်ဆေးရန်)
const TeamCard = ({
  team,
  index,
  globalIndex,
}: {
  team: TeamItem;
  index: number;
  globalIndex: number;
}) => {
  // 💡 globalIndex က စုံ (Even) လား၊ မ (Odd) လား စစ်ဆေးပါမည်
  const isEven = globalIndex % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      // 💡 isEven ကိုစစ်ပြီး md:flex-row နှင့် md:flex-row-reverse ကို အလှည့်ကျ သုံးပါမည်
      className={`flex flex-col lg:flex-col group w-full gap-5 md:gap-8 lg:gap-0 items-center lg:items-start ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}>
      {/* 💡 ပုံအတွက် Tablet တွင် ၆၀% (md:w-[60%]) နေရာယူထားပါသည် */}
      <div className="w-full md:w-[60%] lg:w-full overflow-hidden rounded-[1rem] aspect-[164/126] bg-gray-100 relative mb-0 lg:mb-6 shrink-0">
        <img
          src={team.img}
          alt={team.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* 💡 စာသားများအတွက် Tablet တွင် ၄၀% (md:w-[40%]) နေရာယူထားပါသည် */}
      <div className="flex flex-col px-2 w-full md:w-[40%] lg:w-full">
        <span className="text-[10px] font-bold tracking-widest text-gray-400 mb-3 uppercase">
          [ {team.label} ]
        </span>
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
  const leftTeams = teamData.slice(0, 2);
  const middleTeam = teamData.slice(2, 3);
  const rightTeams = teamData.slice(3, 5);

  return (
    <section className="py-24 px-4 sm:px-6 overflow-hidden bg-white">
      <div className=" mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
          <div>
            <span className="text-[10px] font-bold tracking-widest text-gray-400 mb-4 block uppercase">
              [ THE TEAM ]
            </span>
            {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
              Meet the minds.
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium max-w-lg">
              The driving force behind our turnkey infrastructure solutions.
            </p> */}
        
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
               Meet the minds. 
            </h2>
       
            <p className="text-gray-500 text-sm md:text-base font-medium">
              The driving force behind our turnkey infrastructure solutions.
       
            </p>
          </div>
          <p className="text-[11px] font-bold tracking-widest text-blue-600 uppercase hidden md:block">
            [ EXPERT MINDS ]
          </p>
        </motion.div>

        {/* 3 Columns Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start justify-center">
          {/* LEFT COLUMN (Index 0, 1) */}
          <div className="flex-1 flex flex-col gap-12 w-full">
            {leftTeams.map((team, i) => (
              <TeamCard key={team.id} team={team} index={i} globalIndex={i} />
            ))}
          </div>

          {/* MIDDLE COLUMN (Index 2) */}
          <div className="flex-1 flex flex-col gap-12 w-full lg:mt-48">
            {middleTeam.map((team, i) => (
              <TeamCard
                key={team.id}
                team={team}
                index={i}
                globalIndex={i + 2}
              />
            ))}
          </div>

          {/* RIGHT COLUMN (Index 3, 4) */}
          <div className="flex-1 flex flex-col gap-12 w-full">
            {rightTeams.map((team, i) => (
              <TeamCard
                key={team.id}
                team={team}
                index={i}
                globalIndex={i + 3}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
