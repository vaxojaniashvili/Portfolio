"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useThemeStore from "@/app/store/useThemeStore";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const darkMode = useThemeStore((store) => store.darkMode);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");

    if (userName.trim().length < 2) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!EMAIL_REGEX.test(email.trim())) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (text.trim().length < 10) {
      setErrorMessage("Message must be at least 10 characters long.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, email, text }),
      });

      if (response.ok) {
        const generatedId = Math.random().toString(36).substring(2, 15);
        router.push(`/pages/success?id=${generatedId}`);
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(data.message || "Failed to send email.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  const sectionBg = darkMode ? "bg-[#141418]" : "bg-white";
  const heading = darkMode ? "text-white" : "text-gray-900";
  const body = darkMode ? "text-gray-400" : "text-gray-600";
  const label = darkMode ? "text-gray-300" : "text-gray-700";
  const fieldClass = `w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#7843E9]/60 ${
    darkMode
      ? "bg-[#1a1a20] border-white/10 text-gray-100 placeholder-gray-500"
      : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400"
  }`;

  const contactInfo = [
    {
      label: "Email",
      value: "vaxojaniashvili186@gmail.com",
      href: "mailto:vaxojaniashvili186@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "in/vaxojaniashvili",
      href: "https://www.linkedin.com/in/vaxojaniashvili/",
    },
    {
      label: "GitHub",
      value: "@vaxojaniashvili",
      href: "https://github.com/vaxojaniashvili",
    },
  ];

  return (
    <section
      id="contact"
      className={`w-full ${sectionBg} py-24`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7843E9]">
            Contact
          </p>
          <h2 className={`mt-3 text-3xl sm:text-4xl font-bold ${heading}`}>
            Let&apos;s work together
          </h2>
          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${body}`}>
            Have a project in mind or an opportunity to discuss? Send me a
            message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className={`text-xl font-bold ${heading}`}>Get in touch</h3>
            <p className={`leading-relaxed ${body}`}>
              I&apos;m currently open to new opportunities and collaborations.
              Whether you have a question or just want to say hi, my inbox is
              always open.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex flex-col rounded-xl border p-4 transition-all hover:-translate-y-0.5 ${
                    darkMode
                      ? "border-white/10 bg-white/5 hover:border-[#7843E9]/50"
                      : "border-gray-100 bg-gray-50 hover:border-[#7843E9]/40"
                  }`}
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#7843E9]">
                    {item.label}
                  </span>
                  <span className={`mt-1 text-sm font-medium ${heading}`}>
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className={`lg:col-span-3 rounded-2xl border p-6 sm:p-8 shadow-sm ${
              darkMode ? "border-white/10 bg-[#1a1a20]" : "border-gray-100 bg-gray-50"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={`mb-2 block text-sm font-medium ${label}`}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className={fieldClass}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={`mb-2 block text-sm font-medium ${label}`}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={fieldClass}
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className={`mb-2 block text-sm font-medium ${label}`}>
                Message
              </label>
              <textarea
                id="message"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={`${fieldClass} h-40 resize-none`}
                placeholder="Tell me about your project or opportunity..."
                required
              />
            </div>

            {errorMessage && (
              <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-500">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-6 w-full rounded-xl px-6 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/25 transition-all ${
                isSubmitting
                  ? "cursor-not-allowed bg-gray-500"
                  : "bg-[#7843E9] hover:bg-[#6a35d6] hover:-translate-y-0.5"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
