// // "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const teamData = [
//   {
//     id: "pm",
//     label: "PROJECT MANAGEMENT",
//     title: "Project Management",
//     desc: "Planning & Strategy. Resource & Budget management. Communication, Risk & Quality Control.",
//     img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: "system",
//     label: "SYSTEM DESIGN",
//     title: "System Engineers",
//     desc: "Architecture Planning. Detailed Requirements Analysis. Seamless System Integration.",
//     img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: "network",
//     label: "NETWORK & OPS",
//     title: "Network Engineers",
//     desc: "Robust Network Infrastructure. System Operations. 24/7 SOC & NOC Monitoring.",
//     img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: "software",
//     label: "DEVELOPMENT",
//     title: "Software Development",
//     desc: "Software Architects. Full-Stack Developers. UI/UX, QA, and DevOps experts.",
//     img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
//   },
//   {
//     id: "logistics",
//     label: "PROCUREMENT",
//     title: "Logistics Logistics and Procuremen",
//     desc: "End-to-end Procurement Management. Logistics & Warehouse. Risk & Compliance.",
//     img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200",
//   },
// ];

// export default function TeamSection(): React.JSX.Element {
//   return (
//     <section className="py-24 px-4 sm:px-0 overflow-hidden">
//       {/* 💡 မလိုအပ်သော Max-width အကန့်အသတ်ကို ဖယ်ရှားပြီး w-[95%] ဖြင့် နေရာပိုကျယ်ပေးထားပါသည် */}
//       <div className=" mx-auto">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 px-2">
//           <div>
//             {/* 💡 ဤ [ THE TEAM ] Label လေးကို ပြန်ထည့်ပါမည် */}
//             <span className="text-[10px] font-bold tracking-widest text-gray-400 mb-4 block uppercase">
//               [ THE TEAM ]
//             </span>
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
//               Meet the minds.
//             </h2>
//             <p className="text-gray-500 text-sm md:text-base font-medium">
//               The driving force behind our turnkey infrastructure solutions.
//             </p>
//           </div>
//         </motion.div>

//         {/* 💡 Laptop အလတ်များတွင် ၃ ကွက်၊ Screen အလွန်ကြီးမှသာ ၅ ကွက်ပြသရန် xl:grid-cols-5 ကို ချိန်ညှိထားပါသည် */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 xl:gap-8 items-stretch">
//           {teamData.map((team, i) => (
//             <motion.div
//               key={team.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               className="flex flex-col gap-5 xl:gap-6 group h-full">
//               {/* Image Box */}
//               <div
//                 // 💡 ပုံများ အရမ်းရှည်မထွက်စေရန် aspect-[4/5] သို့ ပြောင်းထားပါသည်
//                 className={`w-full overflow-hidden rounded-[1.5rem] aspect-[126/164] bg-gray-200 relative shadow-sm ${
//                   i % 2 !== 0 ? "md:order-last" : ""
//                 }`}>
//                 <img
//                   src={team.img}
//                   alt={team.title}
//                   className="w-full h-full object-cover "
//                 />
//               </div>

//               {/* Text Box */}
//               <div
//                 className={` flex flex-col justify-start  min-h-[220px] ${
//                   i % 2 !== 0 ? "md:order-first" : ""
//                 }`}>
//                 {/* 💡 အဖွဲ့ခွဲများကို သိသာစေရန် Label အသေးလေး ပြန်ထည့်ပါမည် */}
//                 <span className="text-[10px] font-bold tracking-widest text-gray-400 mb-3 uppercase">
//                   [ {team.label} ]
//                 </span>
//                 <h4 className="text-lg font-extrabold text-gray-900 mb-3 tracking-tight">
//                   {team.title}
//                 </h4>
//                 <p className="text-sm text-gray-500 leading-relaxed text-pretty font-medium">
//                   {team.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
