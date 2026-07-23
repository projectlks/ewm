import React from "react";

export function ContactSection(): React.JSX.Element {
  return (
    <section className="max-w-5xl mx-auto  px-4 lg:px-0 pt-10 lg:pt-20">
      {/* class= */}
      <div className="  px-4 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 md:mb-20 gap-4">
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

        {/* Form Section */}
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
                // placeholder="e.g. U Kyaw Min"
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
                // placeholder="kyawmin@example.com"
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
            //   placeholder="How can we help you?"
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
              className="w-full bg-transparent border-b border-gray-200 py-2.5 text-gray-900 placeholder-gray-300 focus:outline-none focus:border-blue-600 transition-all duration-300 resize-none"
            //   placeholder="Tell us about your project requirements..."
              >
                
              </textarea>
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
