import React from "react";

export default function PrivacyPolicyPage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6 font-sans">
        {/* Header */}
        <div className="mb-16 border-b border-gray-100 pb-10">
          <span className="text-[10px] font-bold tracking-widest text-gray-400 mb-6 block uppercase">
            [ LEGAL & COMPLIANCE ]
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-gray-500 font-medium">Last updated: August 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-600 leading-relaxed text-sm md:text-base">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              1. Introduction
            </h2>
            <p>
              East Wind Myanmar Co., Ltd.  (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;)
              respect your privacy and are committed to protecting your personal
              data. This privacy policy will inform you as to how we look after
              your personal data when you visit our website and tell you about
              your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              2. The Data We Collect About You
            </h2>
            <p>
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-500">
              <li>
                <strong className="text-gray-700">Identity Data:</strong>{" "}
                includes first name, last name, username or similar identifier.
              </li>
              <li>
                <strong className="text-gray-700">Contact Data:</strong>{" "}
                includes email address and telephone numbers provided via our
                contact forms.
              </li>
              <li>
                <strong className="text-gray-700">Technical Data:</strong>{" "}
                includes internet protocol (IP) address, browser type and
                version, time zone setting and location.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              3. How We Use Your Data
            </h2>
            <p>
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data to respond to your
              inquiries, provide enterprise solutions you have requested, and to
              improve our website and customer relationships.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              4. Data Security
            </h2>
            <p>
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorized way, altered, or disclosed. We limit access to
              your personal data to those employees, agents, contractors, and
              other third parties who have a business need to know.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this privacy policy or our privacy
              practices, please contact us at: <br />
              <a
                href="mailto:info@eastwindmyanmar.com.mm"
                className="text-blue-600 hover:underline font-semibold mt-2 inline-block">
                info@eastwindmyanmar.com.mm
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
