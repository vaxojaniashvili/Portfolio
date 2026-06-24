"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const Success = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0f0f12] px-4">
      <div className="blob animate-float w-[400px] h-[400px] -top-20 -left-20 bg-[#7843e9]" />
      <div
        className="blob animate-float w-[360px] h-[360px] bottom-0 right-0 bg-[#9d5cff]"
        style={{ animationDelay: "2s" }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-500/20"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22c55e"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </motion.div>

        <h1 className="mt-6 text-2xl font-bold text-white">Thank you!</h1>
        <p className="mt-2 text-gray-400">
          Your message has been received. I&apos;ll get back to you as soon as
          possible.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-[#7843E9] px-6 py-3 font-semibold text-white transition-all hover:bg-[#6a35d6] hover:-translate-y-0.5"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to site
        </Link>
      </motion.div>
    </div>
  );
};

export default Success;
