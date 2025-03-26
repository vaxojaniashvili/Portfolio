"use client"
import React, {useEffect, useState} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import useThemeStore from "@/app/store/useThemeStore";
import {useRouter} from "next/navigation";
import SubmitButton from "@/app/common/components/_molecules/Button/Button";

const AboutPage = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [isMobile, setIsMobile] = useState(false);
    const darkMode = useThemeStore((store) => store.darkMode);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        if (isMobile) {
            controls.start("visible");
        } else if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls, isMobile]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: isMobile ? 0.3 : 0.1,
                staggerChildren: isMobile ? 0.1 : 0.15,
                when: "beforeChildren",
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: isMobile ? 10 : 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: isMobile ? 0.2 : 0.5 }
        }
    };

    const router = useRouter();

    if (!hasMounted) {
        return (
            <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 gap-0 sm:gap-25 bg-opacity-0"></div>
        );
    }

    const bgColorClass = darkMode ? "bg-[#17171c]" : "bg-gray-100";
    const textColorClass = darkMode ? "text-white" : "text-gray-700";
    const subtitleColorClass = darkMode ? "text-[#F5F5F5] font-normal" : "text-gray-700";
    const skillBgClass = darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-200 text-gray-700";

    return (
        <div id="about" className={`w-full ${bgColorClass} min-h-screen`}>
            <motion.div
                ref={ref}
                className="w-full flex flex-col items-center justify-center p-4 sm:p-8 gap-0 sm:gap-25"
                initial={isMobile ? "visible" : "hidden"}
                animate={controls}
                variants={containerVariants}
            >
                <motion.div className={`text-center ${textColorClass} mb-8 max-w-xl`} variants={itemVariants}>
                    <h1 className={`text-[40px] font-bold mb-2`}>ABOUT ME</h1>
                    <p className={textColorClass}>
                        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
                    </p>
                </motion.div>

                <motion.div
                    className="flex flex-col md:flex-row gap-20 max-w-4xl w-full"
                    variants={containerVariants}
                >
                    <motion.div className="flex-1" variants={itemVariants}>
                        <h2 className={`text-2xl ${textColorClass} font-bold mb-4`}>Get to know me!</h2>
                        <p className={`mb-4 ${subtitleColorClass}`}>
                            I m a <strong>full-stack Focused Web & Mobile Developer</strong> building and managing the full-stack of Websites and Mobile Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
                        </p>
                        <p className={`${subtitleColorClass} mb-4`}>
                            I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people in the Dev Community. Feel free to Connect or Follow me on my <a target="_blank" href="https://www.linkedin.com/in/vaxojaniashvili/" className="text-blue-500">LinkedIn</a> and <a target="_blank" href="https://www.instagram.com/vaxo_janiashvili1/" className="text-pink-500">Instagram</a> where I post useful content related to Web Development and Programming.
                        </p>
                        <p className={subtitleColorClass}>
                            I am open to <strong>Job opportunities</strong> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, do not hesitate to <strong>contact</strong> me.
                        </p>
                        <SubmitButton onClick={() => {
                            router.push("#contact")
                        }} className="mt-4 px-6 w-full sm:w-auto py-2 bg-purple-600 text-white font-bold rounded hover:bg-purple-700">
                            Contact
                        </SubmitButton>
                    </motion.div>

                    <motion.div className="flex-1" variants={itemVariants}>
                        <h2 className={`text-2xl ${subtitleColorClass} font-bold mb-4`}>My Skills</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {['HTML', 'CSS', 'JavaScript',"Typescript", 'React',"React Native", 'Next',"Firebase", "Node.js", "Express.js", "Nest.js", 'PHP', "Laravel", 'SASS', 'GitHub', 'Git',"Docker", 'SEO', "Linux", 'Terminal', "SQL","MongoDB","REST-API","GraphQL","Jira"].map(skill => (
                                <div
                                    key={skill}
                                    className={`px-4 whitespace-nowrap py-2 ${skillBgClass} rounded text-center font-semibold hover:rounded-2xl hover:bg-violet-700 cursor-pointer hover:text-white transition-all duration-500`}
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default AboutPage;