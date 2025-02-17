"use client"
import React from "react";
import Image from "next/image";
import useThemeStore from "@/app/store/useThemeStore";
import projects from "../../data.json"

const ProjectsPage = () => {
  const darkMode:boolean = useThemeStore((store) => store.darkMode);
  return (
      <div className={`w-full pb-[40px] ${darkMode ? "bg-[#19191c]" : ""}`}>
        <div id="projects" className="w-3/4 mx-auto">
          <div className="text-center mb-10">
            <h1 className={`text-3xl ${darkMode ? "text-white" : ""} font-bold pt-5`}>PROJECTS</h1>
            <p className={`w-auto ${darkMode ? "text-[#F5F5F5]" : "text-gray-600"} md:w-[600px] py-[20px] text-[20px] text-center mx-auto`}>
              Here you will find some of the personal and client projects that I
              created with each project containing its own case study.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-0 md:px-[50px]">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={`${darkMode ? "bg-gray-700" : "bg-white"} rounded-lg shadow-lg overflow-hidden`}
                >
                  <Image
                      width={1200}
                      height={900}
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className={`text-xl ${darkMode ? "text-gray-200" : "text-black"} font-semibold mb-2`}>{project.title}</h2>
                    <p className={` ${darkMode ? "text-gray-200" : "text-gray-700"} mb-4`}>{project.description}</p>
                    <a
                        target="_blank"
                        href={project.link}
                        className="text-white bg-purple-600 hover:bg-purple-700 py-2 px-4 rounded"
                    >
                      See project
                    </a>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default ProjectsPage;
