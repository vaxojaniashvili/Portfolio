'use client';

import Header from "./common/components/_organisms/Header/Header";
import AboutPage from "./pages/about/page";
import ContactPage from "./pages/contact/page";
import Footer from "./pages/footer/page";
import HomePage from "./pages/home/page";
import ProjectsPage from "./pages/projects/page";
import { motion, useAnimation } from "framer-motion";
import {ReactNode, useEffect} from "react";
import { useInView } from "react-intersection-observer";

interface SectionProps {
    children: ReactNode;
}

const Section = ({ children } :SectionProps) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);


    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}
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

    return null; // Nothing to render
};
const Page = () => {
    return (
        <>
            <CursorEffect/>
            <Header />
            <Section>
                <HomePage />
            </Section>
            <Section>
                <AboutPage />
            </Section>
            <motion.section
            initial={{y:50}}


            whileInView={{y:0}}
            transition={{duration:1}}
            >
                <ProjectsPage />
            </motion.section>

            <Section>
                <ContactPage />
            </Section>
            <Footer />
        </>
    );
};

export default Page;
