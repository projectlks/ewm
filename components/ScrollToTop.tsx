"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function ScrollToTop(): React.JSX.Element | null {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Scroll အောက်ကို 300px ရောက်မှ Button ပေါ်လာစေရန်
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // 💡 အပေါ်ဆုံးသို့ ညင်သာစွာ (smooth) ပြန်တက်သွားစေရန်
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          // 💡 ညာဘက်အောက်ထောင့်တွင် အမြဲပေါ်နေစေရန် fixed နှင့် z-index အမြင့်ဆုံး ပေးထားပါသည်
          className="fixed bottom-8 right-6 md:right-8 z-[9999]">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full  hover:bg-blue-600  transition-all duration-300 hover:-translate-y-1 focus:outline-none">
            <ArrowUpIcon className="w-5 h-5 stroke-2" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
