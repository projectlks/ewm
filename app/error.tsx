"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): React.JSX.Element {
  useEffect(() => {
    // Console တွင် Error အား မှတ်တမ်းတင်ရန်
    console.error("Application Error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <span className="text-xs font-bold tracking-[0.2em] text-red-500 mb-6 uppercase">
        [ SYSTEM ERROR ]
      </span>
      <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
        Something went wrong.
      </h1>
      <p className="text-gray-500 text-base md:text-lg max-w-md mb-12 font-medium leading-relaxed">
        An unexpected error has occurred on our server. Please try again or
        return to the homepage.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
        {/* Try Again ခလုတ်ဖြင့် စာမျက်နှာကို ပြန်လည် ချိတ်ဆက်ရန် */}
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-white bg-gray-900 hover:bg-blue-600 transition-all duration-300 w-full sm:w-auto">
          Try again
        </button>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-bold text-gray-900 bg-white border border-gray-200 hover:border-gray-900 transition-all duration-300 w-full sm:w-auto">
          Return Home
        </Link>
      </div>
    </main>
  );
}
