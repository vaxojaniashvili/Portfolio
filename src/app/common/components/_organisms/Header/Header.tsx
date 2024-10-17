"use client";
import { useEffect, useState } from "react";
import BurgerMenu from "../../_atoms/Icons/BurgerMenu";
import Image from "next/image";

const Header = () => {
  const [popUp, setPopUp] = useState(false);

  return (
    <header>
      <div className="w-full bg-white  xl:h-[80px] h-[65px] flex items-center justify-between px-[30px] sm:px-5 md:px-10 lg:px-20">
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
        <div className="hidden sm:flex gap-[30px] font-body font-bold text-[#333]">
          <button className="hover:text-[#7843E9]">HOME</button>
          <button className="hover:text-[#7843E9]">ABOUT</button>
          <button className="hover:text-[#7843E9]">PROJECTS</button>
          <button className="hover:text-[#7843E9]">CONTACT</button>
        </div>
        <div
          onClick={() => {
            setPopUp(!popUp);
          }}
          className="sm:hidden"
        >
          <BurgerMenu className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" />
        </div>
        {popUp && <div className="absolute right-0">123</div>}
      </div>
    </header>
  );
};

export default Header;
