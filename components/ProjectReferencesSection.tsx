"use client"
import React from "react";
import {
  BuildingLibraryIcon,
  ShieldCheckIcon,
  SignalIcon,
  
} from "@heroicons/react/24/solid";
import { useCursorHover } from "@/hook/useCursorHover";

interface ProjectTag {
  name: string;
}

interface ProjectItem {
  id: string;
  title: string;
  client: string;
  description: string;
  icon: React.ReactNode;
  tags: ProjectTag[];
  status: string;
  statusColor: string;
}

const projectsData: ProjectItem[] = [
  {
    id: "ceir",
    title: "Central Equipment Identity Register (CEIR)",
    client: "Ministry of Digital Development and Communication",
    description:
      "Implementation of a nationwide system to manage and track mobile device identities, effectively preventing the use of counterfeit and stolen devices across the telecom network.",
    icon: <SignalIcon className="w-7 h-7 text-blue-600" />,
    tags: [
      { name: "Telecom" },
      { name: "Government" },
      { name: "Identity Management" },
    ],
    status: "Ongoing",
    statusColor: "text-blue-700 bg-blue-50 border-blue-200",
  },
  {
    id: "surveillance",
    title: "Integrated Surveillance System",
    client: "Ministry of Finance and Revenue",
    description:
      "Deployment of an advanced, integrated surveillance and IT monitoring infrastructure to ensure security, regulatory compliance, and seamless data management.",
    icon: <ShieldCheckIcon className="w-7 h-7 text-emerald-600" />,
    tags: [
      { name: "Security" },
      { name: "IT Infrastructure" },
      { name: "System Integration" },
    ],
    status: "Completed",
    statusColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
];

export function ProjectReferencesSection(): React.JSX.Element {
  const { handleMouseEnter, handleMouseLeave } = useCursorHover();
  return (
    // 💡 နောက်ခံကို မျက်စိအေးစေမယ့် မီးခိုးဖျော့ (Very Light Gray/Slate) အရောင်ပြောင်းထားပါသည် bg-[#F8FAFC]
    <section className="relative py-24 md:py-32 " id="projects">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Editorial Layout: Left Sticky Header, Right Scrolling Cards */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* =======================
              Left Column: Sticky Header
              ======================= */}
          <div className="lg:w-1/3 relative">
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-2 text-blue-600 font-bold tracking-widest uppercase text-xs mb-6">
                <span className="w-8 h-[2px] bg-blue-600"></span>
                Our Masterpieces
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                Featured <br className="hidden lg:block" />
                Projects.
              </h2>
              <p className="text-base text-gray-500 leading-relaxed max-w-sm mb-10">
                Delivering high-impact, national-scale infrastructure and
                telecom solutions for critical government sectors.
              </p>

              {/* Explore More Button (Optional) */}
              {/* <div className="hidden lg:flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer group">
                View all case studies
                <ArrowLongRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div> */}
            </div>
          </div>

          {/* =======================
              Right Column: Project Cards
              ======================= */}
          <div className="lg:w-2/3 flex flex-col gap-10">
            {projectsData.map((project: ProjectItem) => (
              <div
                onMouseEnter={(e) => handleMouseEnter(e)}
                onMouseLeave={handleMouseLeave}
                key={project.id}
                className="group relative bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm  transition-all overflow-hidden">
                {/* 💡 Watermark ကို သေချာလေး ပြန်ချိန်ပေးထားပါသည် */}
                <div className="absolute -right-8 -bottom-8 md:-right-12 md:-bottom-12 z-0 pointer-events-none select-none transition-all duration-700 ">
                  <BuildingLibraryIcon className="w-48 h-48 md:w-64 md:h-64 xl:w-100 xl:h-100 text-gray-50  transition-colors duration-700 stroke-1" />
                </div>

                {/* 💡 Hover လုပ်မှသာ ပေါ်လာမယ့် ခပ်ဖျော့ဖျော့ Gradient Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"></div>

                <div className="relative z-10">
                  {/* Icon & Status */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:scale-110 group-hover:bg-blue-50/50 transition-all duration-500">
                      {project.icon}
                    </div>
                    <span
                      className={`px-4 py-1.5 text-xs font-bold rounded-full border tracking-wide uppercase ${project.statusColor}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center text-sm font-semibold text-gray-500 mb-4">
                    <span>{project.client}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-600 leading-relaxed mb-10">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-100">
                    {project.tags.map((tag: ProjectTag, index: number) => {
                      // 💡 Tag များအတွက် အရောင်အစုံ ပါဝင်သော Array
                      const tagColors: string[] = [
                        "text-blue-600 bg-blue-50 border-blue-100 hover:bg-blue-600 hover:shadow-blue-600/20",
                        "text-emerald-600 bg-emerald-50 border-emerald-100 hover:bg-emerald-600 hover:shadow-emerald-600/20",
                        "text-purple-600 bg-purple-50 border-purple-100 hover:bg-purple-600 hover:shadow-purple-600/20",
                        "text-amber-600 bg-amber-50 border-amber-100 hover:bg-amber-600 hover:shadow-amber-600/20",
                        "text-rose-600 bg-rose-50 border-rose-100 hover:bg-rose-600 hover:shadow-rose-600/20",
                      ];

                      // 💡 အရောင်များကို အလှည့်ကျ ယူရန် (index % tagColors.length)
                      const colorClass = tagColors[index % tagColors.length];

                      return (
                        <span
                          key={index}
                          className={`px-4 py-2 text-xs font-bold rounded-full border hover:text-white  transition-all duration-300 cursor-default ${colorClass}`}>
                          {tag.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
