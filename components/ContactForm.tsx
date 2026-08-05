"use client";

import { sendContactEmail } from "@/app/contact/action";
import React, { useState, useRef } from "react";
// import { sendContactEmail } from "@/app/actions/contact"; // လမ်းကြောင်းမှန်ကန်အောင် ပြင်ပေးပါ

export default function ContactForm(): React.JSX.Element {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleAction = async (formData: FormData) => {
    setIsSending(true);
    setIsSuccess(false);

    // Server Action ကို တိုက်ရိုက် လှမ်းခေါ်ခြင်း
    const result = await sendContactEmail(formData);

    setIsSending(false);

    if (result.success) {
      setIsSuccess(true);
      if (formRef.current) {
        formRef.current.reset();
      }
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } else {
      alert(result.error || "Failed to send message.");
    }
  };

  return (
    // onSubmit အစား Next.js 14 ၏ action attribute ကို ပြောင်းသုံးထားပါသည်
    <form ref={formRef} action={handleAction} className="space-y-10 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
        <div className="space-y-1 group">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600 transition-colors group-focus-within:text-blue-600">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name" // 💡 FormData တွင် အလုပ်လုပ်ရန် ထပ်တိုးထားသည်
            required
            className="w-full bg-transparent border-b border-gray-200 py-2.5 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300"
          />
        </div>

        <div className="space-y-1 group">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600 transition-colors group-focus-within:text-blue-600">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email" // 💡 FormData တွင် အလုပ်လုပ်ရန် ထပ်တိုးထားသည်
            required
            className="w-full bg-transparent border-b border-gray-200 py-2.5 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300"
          />
        </div>
      </div>

      <div className="space-y-1 group">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-600 transition-colors group-focus-within:text-blue-600">
          Message Subject (Optional)
        </label>
        <input
          type="text"
          id="subject"
          name="subject" // 💡 FormData တွင် အလုပ်လုပ်ရန် ထပ်တိုးထားသည်
          className="w-full bg-transparent border-b border-gray-200 py-2.5 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300"
        />
      </div>

      <div className="space-y-1 group">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-600 transition-colors group-focus-within:text-blue-600">
          Message
        </label>
        <textarea
          id="message"
          name="message" // 💡 FormData တွင် အလုပ်လုပ်ရန် ထပ်တိုးထားသည်
          rows={4}
          required
          className="w-full bg-transparent border-b border-gray-200 py-2.5 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300 resize-none"></textarea>
      </div>

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
  );
}
