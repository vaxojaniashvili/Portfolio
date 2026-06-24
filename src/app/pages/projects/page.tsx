"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import useThemeStore from "@/app/store/useThemeStore";
import projects from "../../data.json";

const ProjectsPage = () => {
  const darkMode: boolean = useThemeStore((store) => store.darkMode);

  const sectionBg = darkMode ? "bg-[#0f0f12]" : "bg-gray-50";
  const heading = darkMode ? "text-white" : "text-gray-900";
  const body = darkMode ? "text-gray-400" : "text-gray-600";
  const cardBg = darkMode
    ? "bg-[#1a1a20] border-white/10"
    : "bg-white border-gray-100";

  return (
    <section id="projects" className={`w-full ${sectionBg} py-24`}>
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7843E9]">
            Portfolio
          </p>
          <h2 className={`mt-3 text-3xl sm:text-4xl font-bold ${heading}`}>
            Featured Projects
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${body}`}>
            A selection of personal and client projects I&apos;ve built and
            shipped across web and mobile.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className={`group card-hover flex flex-col overflow-hidden rounded-2xl border ${cardBg} shadow-sm hover:shadow-2xl hover:shadow-purple-500/10`}
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  width={1200}
                  height={900}
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className={`text-lg font-bold ${heading}`}>
                  {project.title}
                </h3>
                <p className={`mt-2 flex-grow text-sm leading-relaxed ${body}`}>
                  {project.description}
                </p>

                <div className="mt-5">
                  {project.link ? (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#7843E9] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#6a35d6]"
                    >
                      View project
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                  ) : (
                    <span
                      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ${
                        darkMode
                          ? "bg-white/5 text-gray-500"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      Private / NDA
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
