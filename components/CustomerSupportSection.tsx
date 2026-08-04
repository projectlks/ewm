import React from "react";
import { motion } from "framer-motion";

export default function CustomerSupportSection(): React.JSX.Element {
  const supportFeatures: string[] = [
    "Support in start-up activities",
    "Assistance in carrying out procedures",
    "Training in the use of new features",
    "Short resolution time for any issue",
    "Excellent compliance with SLAs",
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8  overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* =====================
              Left: Text Content
              ===================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full">
            <span className="text-[10px] font-bold tracking-widest text-blue-600 mb-4 block uppercase">
              [ 24/7 SUPPORT ]
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
              24h Customer Support <br />& Help Desk
            </h2>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              Customer Support and Help Desk services are one of the main
              strengths of East Wind Myanmar&apos;s service. Our engineers
              provide excellence in technical and communication skills,
              maintaining an extremely positive, empathic, and friendly profile.
            </p>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
              The high level of satisfaction from our customers is related to
              our efficient organizational model, which allows for the
              resolution of requests in a short time.
            </p>

            <ul className="space-y-4 mb-10">
              {supportFeatures.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-4 mt-0.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-semibold text-sm md:text-base">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* =====================
              Right: Image & Card
              ===================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full relative">
            {/* Main Image */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] ">
              <img
                src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=1000"
                alt="24/7 Customer Support Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            </div>

            {/* Floating Info Card */}
            {/* Floating Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              // 💡 Cut-out Effect ရစေရန် border-[10px] border-white ကို အသုံးပြုပြီး Card ကို bg-blue-50 (အပြာနုရောင်) ပြောင်းထားပါသည်
              className="absolute -bottom-8 -left-4 md:-left-12 p-6 md:p-8 rounded-[1.5rem] border-[15px] border-white bg-blue-50  max-w-[280px] z-10">
              <div className="flex items-center gap-4 mb-3">
                {/* 💡 Card အခံက အပြာနုဖြစ်သွားသဖြင့် Icon ကို bg-white ဖြင့် ပိုကြွအောင် ပြင်ထားပါသည် */}
                <div className="w-12 h-12 rounded-full bg-white  flex items-center justify-center text-blue-600 shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-gray-900 font-extrabold text-lg tracking-tight">
                    Always On
                  </h4>
                  <p className="text-blue-600 text-sm font-bold tracking-widest via-0%">24 / 7</p>
                </div>
              </div>

              {/* 💡 အပြာနုရောင်ပေါ်တွင် စာဖတ်ရလွယ်စေရန် text-gray-600 သို့ ပြောင်းထားပါသည် */}
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                Ready to assist you anytime, ensuring maximum uptime for your
                business operations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
