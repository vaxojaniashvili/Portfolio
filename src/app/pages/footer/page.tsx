"use client";
import React from "react";
import Link from "next/link";
import LinkeDinIcon from "@/app/common/components/_atoms/assets/LinkedinIcon";
import YoutubeIcon from "@/app/common/components/_atoms/assets/YoutubeIcon";
import GithubIcon from "@/app/common/components/_atoms/assets/GithubIcon";
import FacebookIcon from "@/app/common/components/_atoms/assets/FacebookIcon";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  { href: "https://www.linkedin.com/in/vaxojaniashvili/", label: "LinkedIn", Icon: LinkeDinIcon },
  { href: "https://www.youtube.com/@Vaxo-Janiashvili", label: "YouTube", Icon: YoutubeIcon },
  { href: "https://github.com/vaxojaniashvili", label: "GitHub", Icon: GithubIcon },
  { href: "https://www.facebook.com/vaxo.janiashvilii", label: "Facebook", Icon: FacebookIcon },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0c] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold tracking-wide">VAXO JANIASHVILI</h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-400">
              React Native Developer &amp; Full-Stack Web Engineer with 4 years
              of experience building cross-platform mobile apps and robust web
              applications that drive product success.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-[#9d5cff]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
              Social
            </h3>
            <div className="mt-4 flex gap-3">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/5 transition-all hover:-translate-y-1 hover:bg-[#7843e933]"
                >
                  <Icon view="footer" className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Vaxo Janiashvili. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
