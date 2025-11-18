"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background blur shapes */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-teal-700/30 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-purple-700/30 blur-3xl"></div>

      {/* Content */}
      <h1 className="text-[8rem] font-extrabold text-teal-400 drop-shadow-lg">
        404
      </h1>
      <p className="mt-4 text-2xl font-light text-gray-300">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <button
        onClick={() => router.push("/")}
        className="mt-8 rounded-2xl bg-teal-500 px-6 py-3 font-semibold text-white shadow-lg hover:bg-teal-600 transition-all"
      >
        Go Home
      </button>
    </div>
  );
}
