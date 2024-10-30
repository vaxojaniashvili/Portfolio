'use client';

import Header from "./common/components/_organisms/Header/Header";
import AboutPage from "./pages/about/page";
import ContactPage from "./pages/contact/page";
import Footer from "./pages/footer/page";
import HomePage from "./pages/home/page";
// import ProjectsPage from "./pages/projects/page"; esec aq
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

    const variants = {
        hidden: { opacity: 0, scale: 1 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};

const Page = () => {
    return (
        <>
            <Header />
            <Section>
                <HomePage />
            </Section>
            <Section>
                <AboutPage />
            </Section>
            {/*<Section>* aq davakomentare aq mitoro projectebis peijze ar mushaobs kargad da gasasworebelia axla agaraq framer-motion am divs/}
                <ProjectsPage />
            {/*</Section>*/}
            <Section>
                <ContactPage />
            </Section>
            <Footer />
        </>
    );
};

export default Page;
