"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <motion.div
      // 💡 အစပိုင်း: အနည်းငယ် သေးနေမည် (0.98)၊ အောက်ကို နည်းနည်းရောက်နေမည် (15px)၊ မှုန်နေမည်
      initial={{
        opacity: 0,
        y: 15,
        scale: 0.98,
        filter: "blur(8px)",
      }}
      // 💡 ပေါ်လာချိန်: မူလအရွယ်အစား (1) နှင့် နေရာမှန်သို့ ရောက်လာကာ ရှင်းလင်းသွားမည်
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      // 💡 အချိန်နှင့် အရှိန်: Premium Website များသုံးလေ့ရှိသော Custom Easing မျဉ်းကွေး
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // အစောပိုင်းတွင် မြန်ပြီး နောက်ပိုင်းတွင် ညင်သာစွာ ရပ်တန့်သွားမည်
      }}
      className="flex flex-col min-h-screen w-full">
      {children}
    </motion.div>
  );
}
