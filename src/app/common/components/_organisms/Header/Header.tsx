'use client';

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import BurgerMenu from "../../_atoms/Icons/BurgerMenu";
import LightMode from "@/app/common/components/_atoms/Icons/LightMode";
import DarkMode from "@/app/common/components/_atoms/Icons/DarkMode";
import useThemeStore from "@/app/store/useThemeStore";

const Header = () => {
  const [popUp, setPopUp] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.9 },
  };
  const darkMode = useThemeStore((store) => store.darkMode)

  const toggleDarkMode = useThemeStore((store) => store.toggleDarkMode)
  return (
      <motion.header
          className="fixed top-0 left-0 w-full z-50"
          initial="hidden"
          animate={controls}
          variants={headerVariants}
      >
        <div className={`w-full ${darkMode ? "bg-[#161616]" : "bg-white"} xl:h-[80px] h-[65px] flex items-center justify-between px-[30px] sm:px-5 md:px-10 lg:px-20`}>
          <div onClick={() => {
            location.href = "/"
          }} className="flex items-center w-[75%] md:w-fit gap-3 xl:gap-4 cursor-pointer">
            <Image
                width={40}
                height={40}
                className="rounded-full"
                src="https://media.licdn.com/dms/image/v2/D4D03AQFD40IkU8Ub3w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730895202711?e=1736985600&v=beta&t=x2hEgtCsKo9qGdAxbJyol8v88J-hIhUWqI3qm8ue71w"
                alt="vaxo's-image"
            />
            <h1 className={`font-body text-[14px] ${darkMode ? "text-[#F5F5F5] font-normal" : "text-black"} font-bold`}>VAXO JANIASHVILI</h1>
          </div>
          <div className={`md:flex hidden gap-[30px] ${darkMode ? "text-[#F5F5F5] font-normal" : "text-[#333]"} font-body font-bold`}>
            <a href="#home" className="hover:text-[#7843E9]">HOME</a>
            <a href="#about" className="hover:text-[#7843E9]">ABOUT</a>
            <a href="#projects" className="hover:text-[#7843E9]">PROJECTS</a>
            <a href="#contact" className="hover:text-[#7843E9]">CONTACT</a>
          </div>
          <div>
            {darkMode ? <LightMode onClick={toggleDarkMode} className="cursor-pointer"/> : (<DarkMode onClick={toggleDarkMode} className="cursor-pointer"/>)}
          </div>
          {popUp ? (
              <div className={`md:hidden text-[30px] ${darkMode ? "text-white" : "text-black"}`} onClick={() => setPopUp(!popUp)}>X</div>
          ) : (
              <div onClick={() => setPopUp(!popUp)} className="md:hidden">
                <BurgerMenu strokeColor={darkMode ? "white" : "black"} className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
              </div>
          )}
          <AnimatePresence>
            {popUp && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      duration: 0.5,
                    }}
                    className="absolute md:hidden z-[999] top-[60px] right-0 w-full bg-white text-gray-700 font-bold -tracking-normal"
                >
                  <div className={`w-full ${darkMode ? "bg-[#161616] text-white" : "bg-white text-black"} border-[#161616] py-6 px-3`}>
                    <a onClick={() => {
                      setPopUp(!popUp)
                    }} href="#home">HOME</a>
                  </div>
                  <div
                      className={`w-full ${darkMode ? "bg-[#161616] text-white" : "bg-white text-black"} border-[#161616] py-6 px-3`}>
                    <a onClick={() => {
                      setPopUp(!popUp)

                    }} href="#about">ABOUT</a>
                  </div>
                  <div
                      className={`w-full ${darkMode ? "bg-[#161616] text-white" : "bg-white text-black"} border-[#161616] py-6 px-3`}>
                    <a onClick={() => {
                      setPopUp(!popUp)
                    }} href="#projects">PROJECTS</a>
                  </div>
                  <div
                      className={`w-full ${darkMode ? "bg-[#161616] text-white" : "bg-white text-black"} border-[#161616] py-6 px-3`}>
                    <a onClick={() => {
                      setPopUp(!popUp)
                    }} href="#contact">CONTACT</a>
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
  );
};

export default Header;
