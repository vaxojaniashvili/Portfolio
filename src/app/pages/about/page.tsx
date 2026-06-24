"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import useThemeStore from "@/app/store/useThemeStore";

const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "SASS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "Expo CLI", "EAS Build", "Firebase"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Nest.js", "PHP", "Laravel", "REST API", "GraphQL"],
  },
  {
    title: "Databases & Tools",
    skills: ["SQL", "MongoDB", "Docker", "Git", "GitHub", "Linux", "Jira", "SEO"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AboutPage = () => {
  const darkMode = useThemeStore((store) => store.darkMode);

  const sectionBg = darkMode ? "bg-[#141418]" : "bg-white";
  const heading = darkMode ? "text-white" : "text-gray-900";
  const body = darkMode ? "text-gray-400" : "text-gray-600";
  const cardBg = darkMode
    ? "bg-white/5 border-white/10"
    : "bg-gray-50 border-gray-100";

  return (
    <section id="about" className={`relative w-full ${sectionBg} py-24`}>
      <motion.div
        className="mx-auto w-full max-w-6xl px-6 sm:px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Heading */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7843E9]">
            Get to know me
          </p>
          <h2 className={`mt-3 text-3xl sm:text-4xl font-bold ${heading}`}>
            About Me
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${body}`}>
            More about who I am, what I do, and the technologies I work with
            across web and mobile.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Bio */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className={`text-2xl font-bold ${heading}`}>
              Building products that matter
            </h3>
            <p className={`leading-relaxed ${body}`}>
              I&apos;m a{" "}
              <strong className={darkMode ? "text-gray-200" : "text-gray-800"}>
                React Native Developer and Full-Stack Web Engineer
              </strong>{" "}
              with{" "}
              <strong className={darkMode ? "text-gray-200" : "text-gray-800"}>
                4 years of experience
              </strong>{" "}
              building cross-platform mobile apps with React Native &amp; the
              Expo CLI, and managing the full stack of web applications that
              lead to the success of the overall product. Check out some of my
              work in the{" "}
              <Link href="#projects" className="text-[#7843E9] font-medium hover:underline">
                Projects
              </Link>{" "}
              section.
            </p>
            <p className={`leading-relaxed ${body}`}>
              I also enjoy sharing what I&apos;ve learned over the years in{" "}
              <strong className={darkMode ? "text-gray-200" : "text-gray-800"}>
                Web Development
              </strong>{" "}
              to help others in the dev community. Feel free to connect with me
              on{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/vaxojaniashvili/"
                className="text-[#7843E9] font-medium hover:underline"
              >
                LinkedIn
              </a>{" "}
              and{" "}
              <a
                target="_blank"
                href="https://www.instagram.com/janiashvili_1"
                className="text-[#7843E9] font-medium hover:underline"
              >
                Instagram
              </a>
              .
            </p>
            <p className={`leading-relaxed ${body}`}>
              I&apos;m open to{" "}
              <strong className={darkMode ? "text-gray-200" : "text-gray-800"}>
                job opportunities
              </strong>{" "}
              where I can contribute, learn, and grow. If you have a role that
              matches my skills and experience, don&apos;t hesitate to reach out.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#7843E9] px-7 py-3 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:bg-[#6a35d6] hover:-translate-y-0.5"
            >
              Contact me
            </Link>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants} className="space-y-6">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className={`rounded-2xl border p-5 ${cardBg}`}
              >
                <h4
                  className={`mb-3 text-sm font-semibold uppercase tracking-wider ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-lg px-3.5 py-1.5 text-sm font-medium transition-all duration-300 cursor-default hover:bg-[#7843E9] hover:text-white hover:-translate-y-0.5 ${
                        darkMode
                          ? "bg-white/5 text-gray-300"
                          : "bg-white text-gray-700 shadow-sm"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
