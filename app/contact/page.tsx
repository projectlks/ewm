"use client";

import React, { useState, useRef } from "react";

export default function ContactPage(): React.JSX.Element {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setIsSuccess(false);

    // Simulate API Call
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      if (formRef.current) {
        formRef.current.reset();
      }
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    // 💡 သီးသန့် Page ဖြစ်သွားသဖြင့် Navbar နေရာလွတ်စေရန် pt-32 နှင့် min-h-screen ကို အသုံးပြုထားပါသည်
    <main className="min-h-screen bg-white py-32 px-4 sm:px-6 md:px-12">
      <div className=" mx-auto px-4 md:px-6">
        {/* =======================
            PAGE HEADER SECTION
            ======================= */}
        <div className="mb-20 md:mb-24">
          <span className="text-[10px] font-bold tracking-widest text-gray-400 mb-6 block uppercase">
            [ CONTACT US ]
          </span>
          <h1 className="md:text-7xl  mb-10 uppercase text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.15]">
            Let&apos;s <br /> Talk.
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b border-gray-200 pb-12">
            <p className="text-gray-500 text-base md:text-lg font-medium max-w-xl leading-relaxed">
              Our team is ready to assist you. Reach out to us for any inquiries
              regarding our infrastructure solutions and enterprise services.
            </p>
          </div>
        </div>

        {/* =======================
            CONTACT DATA SECTION
            ======================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 mb-24 pb-16 border-b border-gray-100">
          {/* Left Side: Contact Information */}
          <div className="flex flex-col justify-center lg:pr-16">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-8">
              Direct Channels.
            </h3>

            <div className="space-y-8">
              {/* Email */}
              <div>
                <span className="text-[10px] font-bold tracking-widest text-gray-400 block uppercase mb-2">
                  Email
                </span>
                <a
                  href="mailto:info@eastwindmyanmar.com.mm"
                  className="text-lg md:text-xl font-medium text-gray-900 hover:text-blue-600 transition-colors break-all">
                  info@eastwindmyanmar.com.mm
                </a>
              </div>

              {/* Phone */}
              <div>
                <span className="text-[10px] font-bold tracking-widest text-gray-400 block uppercase mb-2">
                  Direct Line
                </span>
                <div className="text-lg md:text-xl font-medium text-gray-900 flex flex-wrap gap-x-4 gap-y-2">
                  <a
                    href="tel:+959400800130"
                    className="hover:text-blue-600 transition-colors">
                    +959 400 800 130
                  </a>
                  <span className="text-gray-300 hidden sm:block">|</span>
                  <a
                    href="tel:+959400800170"
                    className="hover:text-blue-600 transition-colors">
                    +959 400 800 170
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Office Locations */}
          <div className="flex flex-col justify-center gap-10 pt-12 lg:pt-0 lg:border-l lg:border-gray-100 border-t border-gray-100 lg:border-t-0 lg:pl-16">
            {/* YGN Head Office */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-600 text-xs font-bold">
                  1
                </span>
                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">
                  Head Office
                </span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Yangon
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                MICT Park, Universities Hlaing Campus, Hlaing Township
              </p>
            </div>

            <div className="w-full h-px bg-gray-100"></div>

            {/* Nay Pyi Taw Branch */}
            <div className="group">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
                  2
                </span>
                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                  Branch
                </span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Nay Pyi Taw
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                Zawana TheikdiWard, Oattarathiri Township
              </p>
            </div>
          </div>
        </div>

        {/* =======================
            FORM SECTION
            ======================= */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Send a Message.
          </h2>
          <div className="md:max-w-xs mt-2 md:mt-4">
            <p className="text-xs text-gray-400 font-sans tracking-wide uppercase leading-relaxed">
              Feel free to drop us a message anytime.
              <br />
              We look forward to collaborating with you.
            </p>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-10 font-sans ">
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
              disabled={isSending}
              className="bg-gray-900 hover:bg-blue-600 disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-bold px-10 py-3.5 rounded-full transition-all duration-300 flex items-center justify-center shrink-0 min-w-[160px]">
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
    </main>
  );
}
