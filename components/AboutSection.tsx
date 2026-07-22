import React from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

interface KeyPoint {
  id: string;
  title: string;
}

const keyPoints: KeyPoint[] = [
  { id: "1", title: "Equipment Supply & IT Solutions" },
  { id: "2", title: "Seamless Telecom Implementation" },
  { id: "3", title: "Expert Consultation Services" },
  { id: "4", title: "E-government & Interoperable Systems" },
];

export function AboutSection(): React.JSX.Element {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {/* Main Content Box */}
          <div className="col-span-1 lg:col-span-2 bg-[#F8F9FA] rounded-[1.5rem] p-8 md:p-10 border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-5">
                About Us
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-snug mb-5">
                Empowering Myanmar&apos;s <br className="hidden md:block" />
                <span className="text-blue-600">Digital Future</span>
              </h2>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8 max-w-2xl">
                East Wind Myanmar Company Limited was established to drive
                progress across Myanmar&apos;s Technology, Education, Economic,
                and Social sectors. Our team specializes in delivering
                comprehensive solutions, with a strong focus on Equipment
                Supply, Information Technology, and seamless Telecommunication
                Implementation.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mt-auto pt-6 border-t border-gray-200/80">
              {keyPoints.map((point) => (
                <li
                  key={point.id}
                  className="flex items-center text-gray-800 font-medium text-sm md:text-base">
                  <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-2.5 shrink-0" />
                  {point.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Box */}
          <div className="col-span-1 bg-gray-100 rounded-[1.5rem] border border-gray-100 overflow-hidden relative min-h-[280px] lg:min-h-full">
            <Image
              src="/about.png"
              alt="East Wind Myanmar Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Vision Box */}
          <div className="col-span-1 bg-blue-50/60 rounded-[1.5rem] p-8 md:p-10 border border-blue-100 flex flex-col ">
            <span className="text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-6 opacity-80">
              01 / Vision
            </span>
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">
                Our Vision
              </h3>
              <p className="text-sm text-blue-800/80 leading-relaxed">
                To continuously drive progress across Myanmar&apos;s core
                sectors by setting the benchmark for digital excellence and
                reliable infrastructure.
              </p>
            </div>
          </div>

          {/* Mission Box */}
          <div className="col-span-1 bg-[#F8F9FA] rounded-[1.5rem] p-8 md:p-10 border border-gray-100 flex flex-col ">
            <span className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-6">
              02 / Mission
            </span>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Our Mission
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Through our expert Consultation Services and E-government
                Solutions, we ensure reliable, highly interoperable systems
                tailored to our clients&apos; needs.
              </p>
            </div>
          </div>

          {/* Accent Box */}
          <div className="col-span-1 bg-gray-900 rounded-[1.5rem] p-8 md:p-10 border border-gray-800 flex items-center justify-center text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:14px_14px] opacity-20"></div>
            <p className="relative z-10 text-white text-base md:text-lg font-medium leading-relaxed">
              &quot; Reliable, highly{" "}
              <span className="text-blue-400">interoperable systems</span>{" "}
              tailored to your needs.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
