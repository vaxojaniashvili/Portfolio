"use client";
import { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";
import BurgerMenu from "../../_atoms/Icons/BurgerMenu";

const Header = () => {
  const [popUp, setPopUp] = useState(false);

  return (
      <header className="relative">
        <div className="w-full bg-white xl:h-[80px] h-[65px] flex items-center justify-between px-[30px] sm:px-5 md:px-10 lg:px-20">
          <div className="flex items-center gap-3 xl:gap-4">
            <Image
                width={40}
                height={40}
                className="rounded-full"
                src="https://lh3.googleusercontent.com/a/ACg8ocI1Bzymq6ysEqxe9Fu0yQLn-3wfEL4tPxH99YHKfWStRDg2xTSc=s288-c-no"
                alt="vaxo's-image"
            />
            <h1 className="font-body text-[14px] font-bold">VAXO JANIASHVILI</h1>
          </div>
          <div className="md:flex hidden gap-[30px] font-body font-bold text-[#333]">
            <button className="hover:text-[#7843E9]">HOME</button>
            <button className="hover:text-[#7843E9]">ABOUT</button>
            <button className="hover:text-[#7843E9]">PROJECTS</button>
            <button className="hover:text-[#7843E9]">CONTACT</button>
          </div>
          {popUp ? (
              <div className="md:hidden text-[30px]" onClick={() => {
                setPopUp(!popUp);
              }}>X</div>
          ) : (
              <div onClick={() => {
                setPopUp(!popUp);
              }} className="md:hidden">
                <BurgerMenu className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
              </div>
          )}
          <AnimatePresence>
            {popUp && (
                <motion.div
                    initial={{ opacity: 0, y: -50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -50, scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      duration: 0.5
                    }}
                    className="absolute md:hidden z-[999] top-[60px] right-0 w-full bg-white text-gray-700 font-bold -tracking-normal"
                >
                  <div className="w-full border py-6 px-3">
                    <h1>HOME</h1>
                  </div>
                  <div className="w-full border py-6 px-3">
                    <h1>ABOUT</h1>
                  </div>
                  <div className="w-full border py-6 px-3">
                    <h1>PROJECTS</h1>
                  </div>
                  <div className="w-full border py-6 px-3">
                    <h1>CONTACT</h1>
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
  );
};

export default Header;
