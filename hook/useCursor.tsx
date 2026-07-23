// hooks/useCursor.ts
import { useEffect } from "react";
import gsap from "gsap";

export function useCursor() {
  useEffect(() => {
    if (window.innerWidth < 1000) {
      gsap.to("#cursor", { opacity: 0 });
      return; // Exit early if the window width is less than 1000px
    } else {
      gsap.to("#cursor", { opacity: 1 });
    }

    // Function to handle mouse movement

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      gsap.to("#cursor", {
        x: clientX - 10,
        y: clientY - 10,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to("#cursor", { opacity: 0, duration: 0.3 });
    };

    const handleMouseEnter = () => {
      gsap.to("#cursor", { opacity: 1, duration: 0.3 });
    };

    const handleResize = () => {
      if (window.innerWidth < 1000) {
        gsap.to("#cursor", { opacity: 0, duration: 0.3 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);
}
