"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import useThemeStore from "@/app/store/useThemeStore";
import {
  FacebookIcon,
  GithubIcon,
  LinkeDinIcon,
} from "@/app/common/components/_atoms/assets/common";
import profileImage from "@/app/common/components/_atoms/assets/heroImage.jpeg";

const socials = [
  {
    href: "https://www.linkedin.com/in/vaxojaniashvili/",
    label: "LinkedIn",
    Icon: LinkeDinIcon,
  },
  {
    href: "https://github.com/vaxojaniashvili",
    label: "GitHub",
    Icon: GithubIcon,
  },
  {
    href: "https://www.facebook.com/vaxo.janiashvilii",
    label: "Facebook",
    Icon: FacebookIcon,
  },
];

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "10+", label: "Technologies" },
];

const HomePage = () => {
  const darkMode = useThemeStore((store) => store.darkMode);

  return (
    <section
      id="home"
      className={`relative w-full overflow-hidden ${
        darkMode ? "bg-[#0f0f12]" : "bg-gray-50"
      } pt-[110px] pb-16 md:pt-0 md:min-h-screen md:flex md:items-center`}
    >
      {/* Decorative background blobs */}
      <div className="blob animate-float w-[420px] h-[420px] -top-24 -left-24 bg-[#7843e9]" />
      <div
        className="blob animate-float w-[360px] h-[360px] bottom-0 right-0 bg-[#9d5cff]"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center md:text-left order-2 md:order-1"
        >
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${
              darkMode
                ? "border-[#7843e94d] bg-[#7843e91a] text-[#c7b3ff]"
                : "border-purple-200 bg-purple-50 text-purple-700"
            }`}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            Available for new opportunities
          </span>

          <h1
            className={`mt-6 text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Hi, I&apos;m <span className="text-gradient">Vaxo Janiashvili</span>
          </h1>

          <p
            className={`mt-4 text-lg sm:text-xl font-semibold ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            React Native Developer &amp; Full-Stack Web Engineer
          </p>

          <p
            className={`mt-4 max-w-xl mx-auto md:mx-0 text-base sm:text-lg leading-relaxed ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A result-oriented developer with 4 years of experience building and
            shipping cross-platform mobile apps with React Native &amp; Expo,
            alongside performant full-stack web applications that drive product
            success.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link
              href="#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#7843E9] px-8 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:bg-[#6a35d6] hover:shadow-purple-500/40 hover:-translate-y-0.5"
            >
              View my work
            </Link>
            <Link
              href="#contact"
              className={`w-full sm:w-auto inline-flex items-center justify-center rounded-xl px-8 py-3.5 font-semibold transition-all hover:-translate-y-0.5 ${
                darkMode
                  ? "border border-gray-700 text-white hover:border-gray-500"
                  : "border border-gray-300 text-gray-800 hover:border-gray-400"
              }`}
            >
              Get in touch
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 flex items-center justify-center md:justify-start gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <div
                  className={`text-2xl sm:text-3xl font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-xs sm:text-sm ${
                    darkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center justify-center md:justify-start gap-3">
            <span
              className={`text-xs font-medium uppercase tracking-widest ${
                darkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Connect
            </span>
            <span
              className={`h-px w-8 ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}
            />
            {socials.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                aria-label={label}
                className={`group grid h-9 w-9 place-items-center rounded-lg border transition-all hover:-translate-y-0.5 hover:border-[#7843E9] hover:bg-[#7843E9] hover:shadow-lg hover:shadow-purple-500/30 ${
                  darkMode
                    ? "border-gray-700/70 text-gray-400 hover:text-white"
                    : "border-gray-200 text-gray-500 hover:text-white"
                }`}
              >
                <Icon className="w-[18px] h-[18px]" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#7843E9] to-[#9d5cff] opacity-30 blur-2xl" />
            <div className="relative h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 overflow-hidden rounded-full border-4 border-[#7843E9]/40 shadow-2xl">
              <Image
                src={profileImage}
                alt="Vaxo Janiashvili — React Native Developer & Full-Stack Web Engineer"
                fill
                priority
                sizes="(max-width: 640px) 14rem, 20rem"
                className="object-cover object-[center_78%]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1"
      >
        <span
          className={`text-xs uppercase tracking-widest ${
            darkMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          Scroll
        </span>
        <div
          className={`flex h-9 w-5 items-start justify-center rounded-full border-2 p-1 ${
            darkMode ? "border-gray-600" : "border-gray-400"
          }`}
        >
          <span className="animate-bounce-down h-1.5 w-1.5 rounded-full bg-[#7843E9]" />
        </div>
      </Link>
    </section>
  );
};

export default HomePage;
