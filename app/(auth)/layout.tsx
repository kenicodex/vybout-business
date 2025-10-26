import React from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full bg-white dark:bg-gray-950 overflow-hidden">
      <div className="w-full h-full bg-white dark:bg-gray-900 overflow-hidden grid grid-cols-1 lg:grid-cols-[35%_65%]">
        <div className="flex flex-col justify-center p-6 sm:p-12 overflow-y-auto lg:overflow-y-visible">
          <Link href="/" className="inline-flex items-center text-xl font-semibold tracking-tight mb-8">
            {/* Brand logo or name */}
          </Link>
          <div className="flex flex-col gap-4">
            {children}
          </div>
        </div>
        <div className="hidden lg:block relative h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-purple-700 to-blue-700" />
          <div className="absolute inset-0 mix-blend-overlay opacity-70">
            <div className="absolute top-10 left-10 w-24 h-24 rounded-xl bg-white/10" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white/15" />
            <div className="absolute bottom-16 right-24 w-32 h-32 rounded-b-[40%] rounded-t-[60%] bg-white/10" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}