"use client";

import Header from "./common/components/_organisms/Header/Header";
import AboutPage from "./pages/about/page";
import ContactPage from "./pages/contact/page";
import Footer from "./pages/footer/page";
import HomePage from "./pages/home/page";
import ProjectsPage from "./pages/projects/page";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import useThemeStore from "@/app/store/useThemeStore";
import { MessageCircle } from "lucide-react";
import ChatModal from "@/app/common/components/_organisms/Chatbot/Chatbot";

interface SectionProps {
  children: ReactNode;
}

const Section = ({ children }: SectionProps) => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.05 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.section>
);

const CursorEffect = () => {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = document.createElement("div");
    cursor.classList.add("cursor-follow");
    document.body.appendChild(cursor);

    let mouseX = 0,
      mouseY = 0;
    let cursorX = 0,
      cursorY = 0;
    let raf = 0;

    const moveCursor = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      cursor.style.left = `${cursorX - cursor.offsetWidth / 2}px`;
      cursor.style.top = `${cursorY - cursor.offsetHeight / 2}px`;
      raf = requestAnimationFrame(moveCursor);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", onMouseMove);
    moveCursor();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      cursor.remove();
    };
  }, []);

  return null;
};

const Page = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const darkMode = useThemeStore((store) => store.darkMode);

  useEffect(() => {
    // Show the loader only on the first visit of the session.
    if (sessionStorage.getItem("animationPlayed")) {
      setShowSplash(false);
      return;
    }
    sessionStorage.setItem("animationPlayed", "true");
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="splash-screen"
          >
            <div className="splash-background">
              <div className="splash-div white" />
              <div className="splash-div black" />
              <div className="splash-div white" />
            </div>
            <div className="rotating-image-container">
              <img
                src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif"
                alt="Loading"
                className="rotating-image"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CursorEffect />
      <Header />
      <main>
        <HomePage />
        <Section>
          <AboutPage />
        </Section>
        <Section>
          <ProjectsPage />
        </Section>
        <Section>
          <ContactPage />
        </Section>
      </main>
      <Footer />

      <motion.button
        onClick={() => setIsChatOpen((v) => !v)}
        aria-label="Open chat"
        className="chat-button-pulse fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center rounded-full bg-[#7843E9] text-white shadow-lg transition-colors hover:bg-[#6a35d6]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </motion.button>

      <ChatModal
        darkMode={darkMode}
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </>
  );
};

export default Page;
