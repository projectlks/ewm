import React from "react";

export default function TermsOfServicePage(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6 font-sans">
        {/* Header */}
        <div className="mb-16 border-b border-gray-100 pb-10">
          <span className="text-[10px] font-bold tracking-widest text-gray-400 mb-6 block uppercase">
            [ LEGAL & COMPLIANCE ]
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Terms of Service
          </h1>
          <p className="text-gray-500 font-medium">Last updated: August 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-600 leading-relaxed text-sm md:text-base">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing our website and utilizing our services, you agree to
              be bound by these Terms of Service and all applicable laws and
              regulations. If you do not agree with any of these terms, you are
              prohibited from using or accessing this site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              2. Use License
            </h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on East Wind Myanmar Co.,
              Ltd.&apos;s website for personal, non-commercial transitory viewing
              only. This is the grant of a license, not a transfer of title, and
              under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-500">
              <li>Modify or copy the materials;</li>
              <li>
                Use the materials for any commercial purpose, or for any public
                display;
              </li>
              <li>
                Attempt to decompile or reverse engineer any software contained
                on our website;
              </li>
              <li>
                Remove any copyright or other proprietary notations from the
                materials.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              3. Disclaimer
            </h2>
            <p>
              The materials on our website are provided on an &apos;as is&apos; basis.
              East Wind Myanmar makes no warranties, expressed or implied, and
              hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              4. Limitations
            </h2>
            <p>
              In no event shall East Wind Myanmar, NK Venus, or its suppliers be
              liable for any damages (including, without limitation, damages for
              loss of data or profit, or due to business interruption) arising
              out of the use or inability to use the materials on our website,
              even if we have been notified orally or in writing of the
              possibility of such damage.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              5. Enterprise Services
            </h2>
            <p>
              For clients engaging in our telecom implementation, IT solutions,
              or E-government projects, specific Master Service Agreements (MSA)
              and Service Level Agreements (SLA) will supersede these general
              website terms where applicable.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
