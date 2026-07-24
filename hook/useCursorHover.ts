import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useCursorHover() {
    const activeElementRef = useRef<HTMLElement | null>(null);

    // 💡 Scroll ဆွဲသည့်အခါ Cursor နေရာမှန်ကန်စေရန် Hook အတွင်း၌ပင် တစ်ခါတည်း ထည့်သွင်းထားပါသည်
    useEffect(() => {
        const handleScroll = () => {
            if (activeElementRef.current) {
                const cursor = document.getElementById("cursor");
                if (cursor && cursor.classList.contains("locked")) {
                    const rect = activeElementRef.current.getBoundingClientRect();
                    gsap.set(cursor, {
                        x: rect.left + rect.width / 2,
                        y: rect.top + rect.height / 2,
                        xPercent: -50,
                        yPercent: -50,
                        overwrite: "auto",
                    });
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMouseEnter = (
        e: React.MouseEvent<HTMLElement>,
        rounded: string = "34px"
    ) => {
        const element = e.currentTarget;
        activeElementRef.current = element;

        const cursor = document.getElementById("cursor");
        if (cursor) {
            cursor.classList.add("locked");
            const rect = element.getBoundingClientRect();

            gsap.to(cursor, {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
                xPercent: -50,
                yPercent: -50,
                width: rect.width + 20,
                height: rect.height + 20,
                backgroundColor: "transparent",
                border: "1px solid gray",
                borderRadius: rounded,
                duration: 0.3,
                ease: "power2.out",
                overwrite: "auto",
            });
        }
    };

    // 💡 Mouse ပြန်ထွက်ချိန် အလုပ်လုပ်မည့် Function
    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
        activeElementRef.current = null;

        const cursor = document.getElementById("cursor");
        if (cursor) {
            cursor.classList.remove("locked");

            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                xPercent: -50,
                yPercent: -50,
                width: 20,
                height: 20,
                backgroundColor: "transparent",
                border: "1px solid white",
                borderRadius: "100%",
                duration: 0.3,
                ease: "power2.out",
                overwrite: "auto",
            });

            window.dispatchEvent(
                new MouseEvent("mousemove", {
                    clientX: e.clientX,
                    clientY: e.clientY,
                })
            );
        }
    };

    // 💡 Component များတွင် လွယ်ကူစွာ ယူသုံးနိုင်ရန် Function နှစ်ခုကို Return ပြန်ပေးပါမည်
    return { handleMouseEnter, handleMouseLeave };
}