"use client";
import Link from "next/link";
import Image from "next/image";
import useThemeStore from "@/app/store/useThemeStore";
import {
  FacebookIcon,
  GithubIcon,
  LinkeDinIcon,
  YoutubeIcon,
} from "@/app/common/components/_atoms/assets/common";
import SubmitButton from "@/app/common/components/_molecules/Button/Button";

const HomePage = () => {
  const darkMode = useThemeStore((store) => store.darkMode);
  return (
    <div
      id="home"
      className={`flex w-full md:h-screen ${
        darkMode ? "bg-[#19191c]" : "bg-gray-200"
      } pb-[40px] pt-[100px] md:mb-0 md:mt-0 relative`}
    >
      <div className="flex justify-start w-0 sm:w-1/2 items-center">
        <div className="px-1 hidden lg:flex flex-col justify-between py-3 h-[275px] bg-white rounded">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/vaxojaniashvili/"
          >
            <div className="px-2.5 py-4 hover:bg-[#7843e933] cursor-pointer rounded-lg">
              <LinkeDinIcon className="w-[30px] h-[30px]" />
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/@Vaxo-Janiashvili"
          >
            <div className=" py-4 flex justify-center hover:bg-[#7843e933] cursor-pointer rounded-lg">
              <YoutubeIcon className="w-[30px] h-[30px]" />
            </div>
          </Link>
          <Link target="_blank" href="https://github.com/vaxojaniashvili">
            <div className="px-2.5 py-4 hover:bg-[#7843e933] cursor-pointer rounded-lg">
              <GithubIcon className="w-[30px] h-[30px]" />
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://www.facebook.com/vaxo.janiashvilii"
          >
            <div className="px-2.5 py-4 hover:bg-[#7843e933] cursor-pointer rounded-lg">
              <FacebookIcon className="w-[30px] h-[30px]" />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-full sm:w-1 mx-auto sm:mx-0 px-6 sm:px-0 items-center">
        <div className="text-center flex flex-col gap-y-[20px] md:gap-y-[30px]">
          <h1
            className={`text-black font-bold ${
              darkMode ? "text-white font-medium" : "text-black"
            } text-[25px] sm:text-[30px] md:text-[50px] xl:text-[64px] whitespace-normal sm:whitespace-nowrap`}
          >
            Hey, I am VAXO JANIASHVILI
          </h1>
          <p
            className={`lg:text-[1.2rem] ${
              darkMode ? "text-[#F5F5F5] font-medium" : "text-black"
            }`}
          >
            A Result-Oriented Mobile Enginner & Full-Stack Web Developer with 3
            years experience, building and managing Websites and Mobile
            Applications that leads to the success of the overall product
          </p>
          <div className="w-full justify-center">
            <a href="#projects">
              <SubmitButton className="bg-[#7843E9] text-white w-[300px] py-3 rounded-xl">
                PROJECTS
              </SubmitButton>
            </a>
          </div>
        </div>
        <Image
          width={25}
          height={40}
          className="absolute w-[25px] h-[40px] bottom-0 bg-transparent rounded-full hidden lg:flex"
          src="https://cdn.dribbble.com/users/1459765/screenshots/3563580/scrolling_mousewheel.gif"
          alt="img-gif"
        />
      </div>
    </div>
  );
};

export default HomePage;
