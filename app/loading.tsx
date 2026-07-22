import React from "react";
import Image from "next/image";

export default function Loading(): React.JSX.Element {
  return (
    // မျက်နှာပြင်အပြည့်ယူရန် fixed နှင့် inset-0 ကို သုံးထားပါသည်
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F8F9FA]">
      {/* 
        Logo အတွက် Animation (Pulse) 
        အဝင်အထွက် မှိတ်တုတ်မှိတ်တုတ် ဖြစ်နေစေရန် animate-pulse သုံးထားပါသည်
      */}
      <div className="relative w-24 h-24 mb-8 animate-pulse">
        <Image
          src="/logo.png" // သင့် Website ၏ အစစ်အမှန် Logo လမ်းကြောင်းသို့ ပြောင်းပေးရန်
          alt="East Wind Myanmar Loading"
          fill
          className="object-contain"
          sizes="96px"
          priority // Loading ပုံဖြစ်သဖြင့် ချက်ချင်း load လုပ်ရန် priority ပေးထားပါသည်
        />
      </div>

      {/* 
        Loading Bouncing Dots
        အစက် ၃ စက်ကို တစ်လှည့်စီ ခုန်နေစေရန် animation-delay များ ထည့်သွင်းထားပါသည်
      */}
      <div className="flex space-x-2.5">
        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
      </div>

      {/* Brand Name သို့မဟုတ် Loading စာသား (Optional) */}
      <p className="mt-6 text-xs font-bold text-blue-800 uppercase tracking-[0.2em] animate-pulse opacity-80">
        East Wind Myanmar
      </p>
    </div>
  );
}
