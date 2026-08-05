import React from "react";
import Link from "next/link";

export default function NotFound(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <span className="text-xs font-bold tracking-[0.2em] text-gray-400 mb-6 uppercase">
        [ ERROR 404 ]
      </span>
      <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-900 tracking-tight mb-6">
        Page Not Found.
      </h1>
      <p className="text-gray-500 text-base md:text-lg max-w-md mb-12 font-medium leading-relaxed">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-10 py-4 rounded-full text-sm font-bold text-white bg-gray-900 hover:bg-blue-600 transition-all duration-300">
        Return to Homepage
      </Link>
    </main>
  );
}
