// import React from "react";

// export function ContactSection(): React.JSX.Element {
//   return (
//     <section
//       id="contact"
//       className="max-w-5xl mx-auto px-4 lg:px-0 pt-10 lg:pt-20">
//       <div className="px-4 md:px-6">
//         {/* =======================
//             Contact Data Section (Services Bento ပုံစံ Typography ဖြင့် ပြင်ဆင်ထားပါသည်)
//             ======================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20 pb-16">
//           {/* YGN Head Office */}
//           <div>
//             <span className="text-xs font-bold tracking-widest text-blue-600 mb-4 block uppercase">
//               01 — Head Office
//             </span>
//             <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
//               Yangon
//             </h3>
//             <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-sm">
//               #506-16, Level 4, Building 16, MICT Park, Universities Hlaing
//               Campus, Hlaing Township, Yangon.
//             </p>
//           </div>

//           {/* Nay Pyi Taw Branch */}
//           <div>
//             <span className="text-xs font-bold tracking-widest text-blue-600 mb-4 block uppercase">
//               02 — Branch
//             </span>
//             <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
//               Nay Pyi Taw
//             </h3>
//             <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-sm">
//               No. 5578, Thit Khwa 4th Street, Zawana Theikdi Ward, Oattarathiri
//               Township.
//             </p>
//           </div>
//         </div>

//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-4">
//           <h2 className="font-heading ext-3xl md:text-4xl font-bold text-gray-900 tracking-tight ">
//             Get in touch.
//           </h2>
//           <div className="md:max-w-xs mt-2 md:mt-4">
//             <p className="text-xs text-gray-400 font-sans tracking-wide uppercase leading-relaxed">
//               Feel free to drop us a message anytime.
//               {/* <br /> */}
//               We look forward to collaborating with you.
//             </p>
//           </div>
//         </div>

//         {/* =======================
//             Form Section (မိတ်ဆွေ၏ မူလဒီဇိုင်းကို လုံးဝ မပြောင်းလဲထားပါ)
//             ======================= */}
//         <form className="space-y-10 font-sans">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
//             {/* Full Name */}
//             <div className="space-y-1 group">
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-600 transition-colors group-focus-within:text-blue-600">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full bg-transparent border-b border-gray-200 py-2.5 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300"
//               />
//             </div>

//             {/* Email Address */}
//             <div className="space-y-1 group">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-600 transition-colors group-focus-within:text-blue-600">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full bg-transparent border-b border-gray-200 py-2.5 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300"
//               />
//             </div>
//           </div>

//           {/* Message Subject */}
//           <div className="space-y-1 group">
//             <label
//               htmlFor="subject"
//               className="block text-sm font-medium text-gray-600 transition-colors group-focus-within:text-blue-600">
//               Message Subject (Optional)
//             </label>
//             <input
//               type="text"
//               id="subject"
//               className="w-full bg-transparent border-b border-gray-200 py-2.5 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300"
//             />
//           </div>

//           {/* Message */}
//           <div className="space-y-1 group">
//             <label
//               htmlFor="message"
//               className="block text-sm font-medium text-gray-600 transition-colors group-focus-within:text-blue-600">
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows={4}
//               className="w-full bg-transparent border-b border-gray-200 py-2.5 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300 resize-none"></textarea>
//           </div>

//           {/* Submit Button */}
//           <div className="pt-6">
//             <button
//               // type="submit"
//               type="button"
//               className="bg-gray-900 hover:bg-blue-600 text-white text-sm font-bold px-10 py-3.5 rounded-full transition-colors duration-300 flex items-center justify-center">
//               Send
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useRef } from "react";

export function ContactSection(): React.JSX.Element {
  // 💡 Success Message နှင့် စောင့်ဆိုင်းနေသည့် (Loading) အခြေအနေများကို မှတ်သားရန်
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);

  // 💡 Form ကို Clear လုပ်ရန်အတွက် Reference ယူထားခြင်းဖြစ်ပါသည်
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true); // Sending အခြေအနေသို့ စတင်ပြောင်းလဲမည်
    setIsSuccess(false);

    // 💡 တကယ်ပို့နေသကဲ့သို့ ၁.၅ စက္ကန့် (1500ms) ခန့် စောင့်ိုင်းစေပါမည်
    setTimeout(() => {
      setIsSending(false); // စောင့်ဆိုင်းခြင်း ပြီးဆုံးသွားပြီ
      setIsSuccess(true); // Success Message ကို ပြသမည်

      // 💡 Form အတွင်း ရိုက်ထည့်ထားသော စာများအားလုံးကို ရှင်းလင်း (Clear) ပေးပါမည်
      if (formRef.current) {
        formRef.current.reset();
      }

      // (Optional) ၅ စက္ကန့်ကြာလျှင် Message ကို အလိုအလျောက် ပြန်ဖျောက်မည်
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500); // 💡 လိုအပ်ပါက အချိန်ကို ဤနေရာတွင် ပြင်နိုင်ပါသည်
  };

  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-4 lg:px-0 pt-10 lg:pt-20">
      <div className="px-4 md:px-6">
        {/* =======================
            Contact Data Section
            ======================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20 pb-16">
          {/* YGN Head Office */}
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-600 mb-4 block uppercase">
              01 — Head Office
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Yangon
            </h3>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-sm">
              #506-16, Level 4, Building 16, MICT Park, Universities Hlaing
              Campus, Hlaing Township, Yangon.
            </p>
          </div>

          {/* Nay Pyi Taw Branch */}
          <div>
            <span className="text-xs font-bold tracking-widest text-blue-600 mb-4 block uppercase">
              02 — Branch
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Nay Pyi Taw
            </h3>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-sm">
              No. 5578, Thit Khwa 4th Street, Zawana Theikdi Ward, Oattarathiri
              Township.
            </p>
          </div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-4">
          <h2 className="font-heading ext-3xl md:text-4xl font-bold text-gray-900 tracking-tight ">
            Get in touch.
          </h2>
          <div className="md:max-w-xs mt-2 md:mt-4">
            <p className="text-xs text-gray-400 font-sans tracking-wide uppercase leading-relaxed">
              Feel free to drop us a message anytime.
              <br />
              We look forward to collaborating with you.
            </p>
          </div>
        </div>

        {/* =======================
            Form Section
            ======================= */}
        {/* 💡 form ကို အလွယ်တကူ Clear လုပ်နိုင်ရန် ref={formRef} ဖြင့် ချိတ်ဆက်ထားပါသည် */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-10 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {/* Full Name */}
            <div className="space-y-1 group">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 transition-colors group-focus-within:text-blue-600">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-transparent border-b border-gray-200 py-2.5 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1 group">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 transition-colors group-focus-within:text-blue-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-transparent border-b border-gray-200 py-2.5 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300"
              />
            </div>
          </div>

          {/* Message Subject */}
          <div className="space-y-1 group">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-600 transition-colors group-focus-within:text-blue-600">
              Message Subject (Optional)
            </label>
            <input
              type="text"
              id="subject"
              className="w-full bg-transparent border-b border-gray-200 py-2.5 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div className="space-y-1 group">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-600 transition-colors group-focus-within:text-blue-600">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              className="w-full bg-transparent border-b border-gray-200 py-2.5 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300 resize-none"></textarea>
          </div>

          {/* Submit Button & Success Message */}
          <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button
              type="submit"
              disabled={isSending} // 💡 ပို့နေစဉ် (isSending) တွင် ထပ်နှိပ်၍မရအောင် ပိတ်ထားပါမည်
              className="bg-gray-900 hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-bold px-10 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center shrink-0 min-w-[160px]">
              {/* 💡 ပို့နေချိန်တွင် စာသားကိုပါ ပြောင်းလဲပေးပါမည် */}
              {isSending ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>

            {isSuccess && (
              <div className="px-5 py-3.5 bg-green-50 border border-green-200 text-green-700 text-sm font-medium rounded-xl animate-[fadeIn_0.5s_ease-out]">
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}