import React from "react";

export function ContactSection(): React.JSX.Element {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-4 lg:px-0 pt-10 lg:pt-20">
      <div className="px-4 md:px-6">
        {/* =======================
            Contact Data Section (Services Bento ပုံစံ Typography ဖြင့် ပြင်ဆင်ထားပါသည်)
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
              {/* <br /> */}
              We look forward to collaborating with you.
            </p>
          </div>
        </div>

        {/* =======================
            Form Section (မိတ်ဆွေ၏ မူလဒီဇိုင်းကို လုံးဝ မပြောင်းလဲထားပါ)
            ======================= */}
        <form className="space-y-10 font-sans">
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
              className="w-full bg-transparent border-b border-gray-200 py-2.5 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300 resize-none"></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="bg-gray-900 hover:bg-blue-600 text-white text-sm font-bold px-10 py-3.5 rounded-full transition-colors duration-300 flex items-center justify-center">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
