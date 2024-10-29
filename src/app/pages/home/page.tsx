import FacebookIcon from "@/app/common/components/_atoms/assets/FacebookIcon";
import GithubIcon from "@/app/common/components/_atoms/assets/GithubIcon";
import LinkeDinIcon from "@/app/common/components/_atoms/assets/LinkedinIcon";
import YoutubeIcon from "@/app/common/components/_atoms/assets/YoutubeIcon";
import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="flex w-full h-[500px] md:h-screen relative">
      <div className="flex justify-start w-0 sm:w-1/2 items-center">
        <div className="px-1 hidden lg:flex flex-col justify-between py-3 h-[275px] bg-white rounded">
          <Link
              target="_blank"
              href="https://www.linkedin.com/in/vaxojaniashvili/"
          >
            <div className="px-2.5 py-4 hover:bg-[#7843e933] cursor-pointer rounded-lg">
              <LinkeDinIcon className="w-[30px] h-[30px]"/>
            </div>
          </Link>
          <Link
              target="_blank"
              href="https://www.youtube.com/@Vaxo-Janiashvili"
          >
            <div className=" py-4 flex justify-center hover:bg-[#7843e933] cursor-pointer rounded-lg">
              <YoutubeIcon className="w-[30px] h-[30px]"/>
            </div>
          </Link>
          <Link target="_blank" href="https://github.com/vaxojaniashvili">
            <div className="px-2.5 py-4 hover:bg-[#7843e933] cursor-pointer rounded-lg">
              <GithubIcon className="w-[30px] h-[30px]"/>
            </div>
          </Link>
          <Link
              target="_blank"
              href="https://www.facebook.com/vaxo.janiashvilii"
          >
            <div className="px-2.5 py-4 hover:bg-[#7843e933] cursor-pointer rounded-lg">
              <FacebookIcon className="w-[30px] h-[30px]"/>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-full sm:w-1 mx-auto sm:mx-0 px-6 sm:px-0 items-center">
      <div className="text-center flex flex-col gap-y-[20px] md:gap-y-[30px]">
          <h1 className="text-black font-bold text-[20px] sm:text-[30px] md:text-[50px] xl:text-[64px] whitespace-nowrap">
            Hey, I am VAXO JANIASHVILI
          </h1>
          <p className="lg:text-[1.2rem]">
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that leads to the success of the overall product
          </p>
          <div className="w-full justify-center">
            <button className="bg-[#7843E9] text-white w-[300px] py-3 rounded-xl">
              PROJECTS
            </button>
          </div>
        </div>
        <img
          className="w-[25px] h-[40px] absolute bottom-0 bg-transparent rounded-full hidden lg:flex"
          src="https://cdn.dribbble.com/users/1459765/screenshots/3563580/scrolling_mousewheel.gif"
          alt="img-gif"
        />
      </div>
    </div>
  );
};

export default HomePage;
