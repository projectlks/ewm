"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  // 💡 Mouse သုံးသော Device ဟုတ်မဟုတ် မှတ်သားရန် State
  const [hasMouse, setHasMouse] = useState(true);

  useEffect(() => {
    // CSS Media Query အသုံးပြု၍ (pointer: fine) ဆိုလိုသည်မှာ Mouse ပါဝင်သော Device ကို စစ်ဆေးခြင်းဖြစ်သည်
    const checkPointer = () => {
      setHasMouse(window.matchMedia("(pointer: fine)").matches);
    };

    // ပထမဆုံး Component တက်လာချိန်တွင် စစ်ဆေးပါမည်
    checkPointer();
  }, []);

  useGSAP(() => {
    const cursor = cursorRef.current;

    // 💡 အကယ်၍ Mouse မရှိသော (ဖုန်း/Tablet) ဖြစ်ပါက GSAP Event များ လုံးဝ အလုပ်မလုပ်စေရန် ရပ်တန့်ထားပါမည်
    if (!cursor || !hasMouse) return;

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      scale: 0,
      borderRadius: "100%",
      width: "20px",
      height: "20px",
    });

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.15,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.15,
      ease: "power3.out",
    });

    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor.classList.contains("locked")) return;

      xTo(e.clientX);
      yTo(e.clientY);
      if (!isVisible) {
        gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.3 });
        isVisible = true;
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, scale: 0, duration: 0.3 });
      isVisible = false;
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.3 });
      isVisible = true;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [hasMouse]); // 💡 hasMouse State ကို Dependency အဖြစ် ထည့်ထားပါသည်

  // 💡 အကယ်၍ ဖုန်း/Tablet ဖြစ်နေပါက HTML ထဲတွင် Cursor Element အား လုံးဝ(လုံးဝ) မထည့်သွင်းဘဲ null ပြန်ပေးပါမည်
  if (!hasMouse) return null;

  return (
    <div
      id="cursor"
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 border border-white bg-transparent rounded-full pointer-events-none z-[9999] mix-blend-difference"
    />
  );
}
