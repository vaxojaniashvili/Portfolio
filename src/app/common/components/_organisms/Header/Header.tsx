"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "../../_atoms/Icons/BurgerMenu";
import LightMode from "@/app/common/components/_atoms/Icons/LightMode";
import DarkMode from "@/app/common/components/_atoms/Icons/DarkMode";
import useThemeStore from "@/app/store/useThemeStore";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#contact", label: "CONTACT" },
];

const Header = () => {
  const [popUp, setPopUp] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const darkMode = useThemeStore((store) => store.darkMode);
  const toggleDarkMode = useThemeStore((store) => store.toggleDarkMode);
  const initializeTheme = useThemeStore((store) => store.initializeTheme);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = popUp ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [popUp]);

  const surface = darkMode
    ? scrolled
      ? "bg-[#0f0f12]/80 border-white/10"
      : "bg-transparent border-transparent"
    : scrolled
    ? "bg-white/80 border-gray-200"
    : "bg-transparent border-transparent";

  const textColor = darkMode ? "text-gray-200" : "text-gray-700";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`glass fixed top-0 left-0 z-50 w-full border-b transition-colors duration-300 ${surface}`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6 sm:px-10">
        <Link href="#home" className="flex items-center gap-3">
          <Image
            width={40}
            height={40}
            className="rounded-full ring-2 ring-[#7843E9]/50"
            src="https://lh3.googleusercontent.com/a/ACg8ocJdDdQAxRsQlv8wmdTt7wjSTxprbgJ_BOhDzKvyI3L1PZuooSWS=s576-c-no"
            alt="Vaxo Janiashvili"
          />
          <span className={`text-sm font-bold tracking-wide ${darkMode ? "text-white" : "text-gray-900"}`}>
            VAXO JANIASHVILI
          </span>
        </Link>

        <nav className={`hidden items-center gap-8 text-sm font-semibold md:flex ${textColor}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition-colors hover:text-[#7843E9] after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-[#7843E9] after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-[#7843e91a]"
          >
            {darkMode ? <LightMode /> : <DarkMode />}
          </button>

          <button
            onClick={() => setPopUp((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden"
          >
            {popUp ? (
              <span className={`text-2xl font-light ${darkMode ? "text-white" : "text-black"}`}>
                ✕
              </span>
            ) : (
              <BurgerMenu strokeColor={darkMode ? "white" : "black"} className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {popUp && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden ${darkMode ? "bg-[#0f0f12]" : "bg-white"} border-t ${darkMode ? "border-white/10" : "border-gray-200"}`}
          >
            <div className="flex flex-col px-6 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setPopUp(false)}
                  className={`border-b py-4 text-base font-semibold transition-colors hover:text-[#7843E9] ${
                    darkMode ? "border-white/5 text-gray-200" : "border-gray-100 text-gray-800"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
