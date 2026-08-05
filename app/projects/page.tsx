import React from "react";

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
      "Ministry of Planning and Finance, Ministry of Transport and Communications",
    year: "2024",
    desc: "Turnkey Central Equipment Identity Register solution delivering enterprise-level infrastructure to monitor, authenticate, and manage mobile devices across large-scale networks.",
    features: [
      "CENTRALIZED DATABASE",
      "ENTERPRISE INFRASTRUCTURE",
      "REAL-TIME MONITORING",
    ],
    image: "",
  },
  {
    id: "ew-2",
    title: "EIR Project",
    company: "East Wind Myanmar",
    category: "Telecom Infrastructure",
    client: "MPT, ATOM, U9, MYTEL",
    year: "2024",
    desc: "Turnkey Equipment Identity Register solution delivering enterprise-level infrastructure to manage IMEI registration, authenticate devices, and maintain comprehensive white and blacklists for mobile operators.",
    features: ["OPERATOR INTEGRATION", "IMEI MANAGEMENT", "HIGH AVAILABILITY"],
    image: "",
  },
  {
    id: "ew-3",
    title: "Surveillance System",
    company: "East Wind Myanmar",
    category: "Security & Control",
    client:
      "Posts and Telecommunications Department, Ministry of Transport and Communications",
    year: "2025",
    desc: "Deployed an Integrated Surveillance & IT Monitoring System for real-time monitoring of security and IT infrastructure.",
    features: ["ADVANCED CCTV", "CENTRAL FRAMEWORK", "24/7 RECORDING"],
    image: "",
  },
  {
    id: "ew-4",
    title: "24/7 Technical Support Center Solution",
    company: "East Wind Myanmar",
    category: "Support & Helpdesk",
    client: "Internal Revenue Department, Ministry of Planning and Finance",
    year: "2025",
    desc: "Systematically resolved public complaints for the CEIR system tax collection operations and VAVS system.",
    features: ["24/7 NOC & SOC", "TICKET MANAGEMENT", "SLA COMPLIANCE"],
    image: "",
  },
  {
    id: "ew-5",
    title: "24/7 Helpline Center Software Solution",
    company: "East Wind Myanmar",
    category: "Software Solution",
    client: "Myanmar Police Force, Ministry of Home Affairs",
    year: "2024-2025",
    desc: "Implementing a Helpline Center system to resolve and process crime reports and requests for assistance in real-time.",
    features: ["CALL ROUTING", "ANALYTICS DASHBOARD", "CRM INTEGRATION"],
    image: "",
  },
  {
    id: "ew-6",
    title: "Convergent Billing System Project",
    company: "East Wind Myanmar",
    category: "Telecom Operations",
    client:
      "Myanmar Posts and Telecommunications (MPT) & KDDI Summit Global Myanmar (KSGM)",
    year: "2022-2023",
    desc: "Systematically provided the necessary technical equipment for the smooth operation of the Convergent Billing System processes.",
    features: ["CRITICAL SERVERS", "BILLING ARCHITECTURE", "TELECOM HARDWARE"],
    image: "",
  },
  {
    id: "ew-7",
    title: "Material Supply",
    company: "East Wind Myanmar",
    category: "Logistics & Supply",
    client: "Ooredoo Myanmar Limited",
    year: "2023",
    desc: "Systematically delivered the necessary technical equipment for AI Server systems and Power Solution Systems.",
    features: ["PROCUREMENT", "QUALITY ASSURANCE", "TIMELY DELIVERY"],
    image: "",
  },
  {
    id: "ew-8",
    title: "Device Management System Project",
    company: "East Wind Myanmar",
    category: "System Management",
    client: "MPT & Whale Cloud Technology Limited",
    year: "2024",
    desc: "Systematically delivered the necessary technical equipment for the Device Management System.",
    features: ["REMOTE CONFIGURATION", "FIRMWARE UPDATES", "ASSET TRACKING"],
    image: "",
  },
  {
    id: "ew-9",
    title: "Business Intelligence System Project",
    company: "East Wind Myanmar",
    category: "Data & Analytics",
    client: "MPT & Whale Cloud Technology Limited",
    year: "2024",
    desc: "Systematically delivered the necessary technical equipment for the Business Intelligence Management System.",
    features: ["DATA WAREHOUSING", "CUSTOM REPORTING", "PREDICTIVE ANALYTICS"],
    image: "",
  },
];
export default function DetailedProjectsPage(): React.JSX.Element {
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

          <div className="border-b border-gray-200 pb-12">
            <p className="text-gray-500 text-base md:text-lg font-medium max-w-xl leading-relaxed">
              An in-depth look at our enterprise-level deployments,
              infrastructure designs, and software solutions executed by EastWind Myanmar.
            </p>
          </div>
        </div>

        {/* DETAILED LIST SECTION */}
        {/* 💡 framer-motion ကို အလုံးစုံ ဖယ်ရှားထားပါသည် */}
        <div className="flex flex-col">
          {allProjects.map((project) => (
            <AccordionProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}

// 💡 Props အပိုများ ဖြုတ်ပြီး Static Component အဖြစ် ပြောင်းလဲထားပါသည်
function AccordionProjectRow({
  project,
}: {
  project: ProjectDetail;
}): React.JSX.Element {
  return (
    <div className="group relative flex flex-col py-12 lg:py-16 border-b border-gray-200 transition-colors cursor-pointer hover:bg-gray-50/50">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start w-full relative z-10">
        {/* 1. Metadata Column */}
        <div className="w-full lg:w-1/4 flex flex-col gap-4">
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
                className="px-3 py-1.5 bg-white border transition-colors border-gray-200 text-gray-600 text-[10px] font-bold tracking-widest uppercase rounded-full">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
