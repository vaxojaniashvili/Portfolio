import React from 'react'
import LinkeDinIcon from "@/app/common/components/_atoms/assets/LinkedinIcon";
import YoutubeIcon from "@/app/common/components/_atoms/assets/YoutubeIcon";
import GithubIcon from "@/app/common/components/_atoms/assets/GithubIcon";
import FacebookIcon from "@/app/common/components/_atoms/assets/FacebookIcon";

const Footer = () => {
  return (
    <div className="bg-black flex w-full text-white justify-center px-[12%]">
      <div className="xl:flex xl:gap-0 text-white w-full justify-between py-[50px] grid gap-6">
        <div>
            <h1 className="text-white font-bold text-[25px]">VAXO JANIASHVILI</h1>
            <p className="text-white w-full xl:w-[600px] text-[18px]">A Frontend focused Web Developer building the Frontend of Websites and
                Web Applications that leads to the success of the overall product
            </p>
        </div>
        <div>
            <h1 className="text-white font-bold">SOCIAL</h1>
            <div className="flex gap-4">
                <LinkeDinIcon className="h-[30px] w-[30px]"/>
                <YoutubeIcon view="footer" className="h-[30px] w-[30px]"/>
                <GithubIcon className="h-[30px] w-[30px]"/>
                <FacebookIcon className="h-[30px] w-[30px]"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer