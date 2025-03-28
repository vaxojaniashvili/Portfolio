'use client';

import Header from "./common/components/_organisms/Header/Header";
import AboutPage from "./pages/about/page";
import ContactPage from "./pages/contact/page";
import Footer from "./pages/footer/page";
import HomePage from "./pages/home/page";
import ProjectsPage from "./pages/projects/page";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import useThemeStore from "@/app/store/useThemeStore";
import {MessageCircle} from "lucide-react";
import ChatModal from "@/app/common/components/_organisms/Chatbot/Chatbot";

interface SectionProps {
    children: ReactNode;
}

const Section = ({ children }: SectionProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
};

const CursorEffect = () => {
    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.classList.add('cursor-follow');
        document.body.appendChild(cursor);

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        const moveCursor = () => {
            const distanceX = mouseX - cursorX;
            const distanceY = mouseY - cursorY;
            cursorX += distanceX * 0.25;
            cursorY += distanceY * 0.25;

            cursor.style.left = `${cursorX - cursor.offsetWidth / 2}px`;
            cursor.style.top = `${cursorY - cursor.offsetHeight / 2}px`;

            requestAnimationFrame(moveCursor);
        };

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.pageX;
            mouseY = e.pageY;
        };

        document.addEventListener('mousemove', onMouseMove);

        moveCursor();

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.body.removeChild(cursor);
        };
    }, []);

    return null;
};

const Page = () => {
    const [showSplash, setShowSplash] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        if (!sessionStorage.getItem('animationPlayed')) {
            setShowSplash(true);
            sessionStorage.setItem('animationPlayed', 'true');
        }

        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);
    const darkMode:boolean = useThemeStore((store) => store.darkMode);

    return (
        <>
            {showSplash && (
                <motion.div
                    initial={{x: "-100%"}}
                    animate={{x: 0}}
                    exit={{x: "100%"}}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 25,
                        duration: 2,
                    }}
                    className="splash-screen"
                >
                    <div className="splash-background">
                        <div className="splash-div white"></div>
                        <div className="splash-div black"></div>
                        <div className="splash-div white"></div>
                    </div>
                    <div className="rotating-image-container">
                        <img
                            src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif"
                            alt="Rotating"
                            className="rotating-image"
                        />
                    </div>
                </motion.div>
            )}

            <CursorEffect/>
            <Header/>
            <Section>
                <HomePage/>
            </Section>
            <Section>
                <AboutPage/>
            </Section>
            {darkMode ? (
                <Section>
                    <ProjectsPage/>
                </Section>
            ) : (
                <motion.section
                    initial={{y: 50}}
                    whileInView={{y: 0}}
                    transition={{duration: 0.5}}
                >
                    <ProjectsPage/>
                </motion.section>
            )}
            <Section>
                <ContactPage/>
            </Section>
            <Footer/>
            <motion.div
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="fixed flex items-center justify-center w-[50px] h-[50px] rounded-full bottom-[20px] right-[20px] bg-blue-500 hover:bg-blue-600 text-white cursor-pointer z-20 shadow-lg transition-colors"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
            >
                <MessageCircle size={24}/>
            </motion.div>
            <ChatModal
                darkMode={darkMode}
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
            />
        </>
    );
};

export default Page;
