import Image from "next/image";
import React from "react";

interface Partner {
  name?: string;
  logoUrl?: React.ReactNode | string;
}

// ၁။ Strategic Partners Data (၁၀ ခု)
const strategicPartners: Partner[] = [
  { name: "Microsoft", logoUrl: "/logos/microsoft.svg" },
  { name: "Dell", logoUrl: "/logos/dell.svg" },
  { name: "RedHat", logoUrl: "/logos/redhat.svg" },
  { name: "Cisco", logoUrl: "/logos/cisco.svg" },
  { name: "VST ECS", logoUrl: "/logos/vst-ecs.webp" },
  { name: "Palo Alto", logoUrl: "/logos/palo-alto.svg" },
  { name: "Oracle", logoUrl: "/logos/oracle.svg" },
  { name: "SolarWinds", logoUrl: "/logos/solarwinds.svg" },
  { name: "GSMA", logoUrl: "/logos/gsma.svg" },
  { name: "VMware", logoUrl: "/logos/vmware.svg" },
  { name: "ZTE", logoUrl: "/logos/zte.svg" },
  { name: "Sangfor", logoUrl: "/logos/sangfor.png" },
  { name: "EastWindRU", logoUrl: "/logos/ewru.svg" },
  { name: "CAIH", logoUrl: "/logos/CAIH-side.png" },
  { name: "WhaleColud", logoUrl: "/logos/whale-cloud.png" },
];

// ၂။ Trusted By / Customers Data (၆ ခု)
const trustedCustomers: Partner[] = [
  { name: "Ministry of Home Affairs", logoUrl: "/logos/MOHA.png" },
  {
    name: "Post and Telecommunications Department",
    logoUrl: "/logos/PTD.png",
  },
  {
    name: "Internal Revenue Department",
    logoUrl: "/logos/ird.png",
  },
  {
    name: "Ministry of Finance and Revenue",
    logoUrl: "/logos/MFR.png",
  },
  { name: "MPT", logoUrl: "/logos/mpt.webp" },
  { name: "ATOM", logoUrl: "/logos/atom.png" },
  { name: "U9", logoUrl: "/logos/u9.svg" },
  { name: "MYTEL", logoUrl: "/logos/m.png" },
];

export function TrustedPartnersSection(): React.JSX.Element {
  return (
    <section className="py-16 md:py-24 ">
      <div className=" mx-auto px-4 md:px-0">
        {/* ======================= STRATEGIC PARTNERS SECTION ======================= */}
        <div className="mb-40">
          <h2 className="text-center text-xl md:text-2xl font-bold mb-10 text-gray-900 tracking-tight">
            Our Strategic Partners
          </h2>

          {/* Desktop တွင် grid-cols-3 နှင့် Mobile တွင် grid-cols-2 ဖြစ်အောင် ပြင်ဆင်ထားသည် */}

          <div className="grid grid-cols-2 md:grid-cols-5">
            {strategicPartners.map((partner: Partner) => (
              <div
                key={partner.name}
                className={`
        relative flex items-center group justify-center h-24 md:h-32 px-4 md:px-6
        
        /* ================= VERTICAL BORDER (ညာဘက်မျဉ်းတို) ================= */
        after:absolute after:right-0 after:w-px after:bg-gray-300/80
        after:top-4 after:bottom-4 md:after:top-6 md:after:bottom-6 
        /* ဖုန်းတွင် ၂ ခုမြောက်တိုင်း မျဉ်းဖျောက်၊ Desktop တွင် ၅ ခုမြောက်တိုင်း မျဉ်းဖျောက်၊ နောက်ဆုံးအကွက်ကိုပါ အပိုမျဉ်းမထွက်အောင် ဖျောက်ထားသည် */
        max-md:even:after:hidden md:nth-[5n]:after:hidden last:after:hidden
        
        /* ================= HORIZONTAL BORDER (အောက်ဘက်မျဉ်းတို) ================= */
        before:absolute before:bottom-0 before:h-px before:bg-gray-300/80
        before:left-4 before:right-4 md:before:left-6 md:before:right-6
        /* ဖုန်း (2-cols) တွင် နောက်ဆုံး ၂ ခုကို အောက်မျဉ်းဖျောက်၊ Desktop (5-cols) တွင် နောက်ဆုံး ၅ ခုကို ဖျောက် */
        max-md:nth-last-[-n+2]:before:hidden md:nth-last-[-n+5]:before:hidden
      `}>
                <div className="relative w-full max-w-[120px] md:max-w-[140px] h-8 md:h-10 flex items-center justify-center text-gray-900 transition-all grayscale group-hover:grayscale-0">
                  {typeof partner.logoUrl === "string" ? (
                    <Image
                      src={partner.logoUrl}
                      alt={partner?.name || "alt"}
                      fill
                      sizes="(max-width: 768px) 120px, 140px"
                      className="object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      {partner.logoUrl}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================= TRUSTED BY / CUSTOMERS SECTION ======================= */}
        <div>
          <h2 className="text-center text-xl md:text-2xl font-bold mb-10 text-gray-900 tracking-tight">
            Trusted By
          </h2>

          <div className="grid grid-cols-2  mx-auto md:grid-cols-3 lg:grid-cols-4">
            {trustedCustomers.map((partner: Partner) => (
              <div
                key={partner.name}
                className={`
                  relative flex items-center group justify-center h-24 md:h-32 px-4 md:px-6
                  
                  /* Vertical Borders (ညာဘက် မျဉ်းများ) */
                  after:absolute after:right-0 after:w-px after:bg-gray-300/80
                  after:top-4 after:bottom-4 md:after:top-6 md:after:bottom-6 
                  max-md:even:after:hidden 
                  md:max-lg:nth-[3n]:after:hidden 
                  lg:nth-[4n]:after:hidden 
                  last:after:hidden
                  
                  /* Horizontal Borders (အောက်ခြေ မျဉ်းများ) */
                  before:absolute before:bottom-0 before:h-px before:bg-gray-300/80
                  before:left-4 before:right-4 md:before:left-6 md:before:right-6
                  max-md:nth-last-[-n+2]:before:hidden 
                  md:max-lg:nth-last-[-n+3]:before:hidden 
                  lg:nth-last-[-n+4]:before:hidden
                `}>
                <div className="relative w-full max-w-[120px] md:max-w-[160px] h-10 md:h-14 flex items-center justify-center text-gray-900 transition-all grayscale group-hover:grayscale-0">
                  {typeof partner.logoUrl === "string" ? (
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name || "alt"}
                      fill
                      sizes="(max-width: 768px) 120px, 160px"
                      className="object-contain"
                      title={partner.name}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      {partner.logoUrl}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
