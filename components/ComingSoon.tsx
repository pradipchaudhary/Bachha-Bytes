import React from "react";

export default function ComingSoon() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
      <div className="max-w-xl w-full text-center">

        {/* Logo */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-900 text-white text-2xl font-semibold mx-auto shadow-sm">
          दाइ
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto">
          We’re preparing something meaningful to help Nepali job seekers reach abroad—with clarity, honesty, and the right guidance.
        </p>



        {/* Minimal Loading Dots */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
        </div>

        {/* Footer */}
        <div className="mt-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Dale Dai
        </div>
      </div>
    </section>
  );
}