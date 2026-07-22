import React from "react";
import {
  BuildingLibraryIcon,
  ShieldCheckIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

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
    statusColor: "bg-blue-50 text-blue-700 border-blue-200",
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
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
];

export function ProjectReferencesSection(): React.JSX.Element {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight mb-3">
            Featured Projects
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Delivering high-impact, national-scale infrastructure and telecom
            solutions for critical government sectors.
          </p>
        </div>

        {/* 
          Projects Grid: Desktop တွင် 2-cols (ပရောဂျက် ၂ ခုဖြစ်သောကြောင့် အချိုးကျပါသည်)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projectsData.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="group relative flex flex-col p-8 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all duration-300">
              {/* Top Header: Icon & Status */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-blue-50/50 group-hover:scale-110 transition-all duration-300">
                  {project.icon}
                </div>

                {/* Status Badge */}
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full border ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>

              {/* Client / Ministry Info */}
              <div className="flex items-center text-sm font-medium text-gray-500 mb-3">
                <BuildingLibraryIcon className="w-4 h-4 mr-2 shrink-0" />
                <span className="truncate">{project.client}</span>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-8 flex-1">
                {project.description}
              </p>

              {/* Tags / Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-100">
                {project.tags.map((tag: ProjectTag, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 rounded-lg border border-gray-100">
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
