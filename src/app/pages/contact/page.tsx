"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useThemeStore from "@/app/store/useThemeStore";
import SubmitButton from "@/app/common/components/_molecules/Button/Button";
import TextInput from "@/app/common/components/_molecules/Input/Input";

const ContactPage = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const router = useRouter();
    const darkMode = useThemeStore((store) => store.darkMode);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');
        setSuccessMessage('');

        if (!email.includes("@") || email.split("@")[1].length < 3) {
            setErrorMessage("Please enter a valid email address.");
            setIsSubmitting(false);
            return;
        }
        if (text.length < 10) {
            setErrorMessage("Message must be at least 10 characters long.");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, email, text }),
            });

            if (response.ok) {
                setSuccessMessage('Message sent successfully!');
                const generatedId = Math.random().toString(36).substring(2, 15);
                setTimeout(() => {
                    router.push(`/pages/success?id=${generatedId}`);
                }, 1000);
            } else {
                const data = await response.json();
                setErrorMessage(data.message || 'Failed to send email.');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An unexpected error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            id="contact"
            className={`min-h-screen ${
                darkMode ? "bg-[#17171c]" : "bg-gray-100"
            } flex flex-col items-center justify-center p-4 sm:p-8`}
        >
            <div className="flex p-4 sm:p-7">
                <h1
                    className={`mx-auto ${
                        darkMode ? "text-[#F5F5F5]" : ""
                    } text-[24px] sm:text-[30px] font-bold`}
                >
                    CONTACT
                </h1>
            </div>
            <div className="flex flex-wrap mb-4 sm:mb-8">
                <p
                    className={`mx-auto ${
                        darkMode ? "text-[#F5F5F5]" : "text-[#333]"
                    } text-lg sm:text-2xl font-medium text-center`}
                >
                    Feel free to contact me by submitting the form below and I will
                    get back to <br className="hidden sm:block" /> you as soon as
                    possible
                </p>
            </div>
            <form
                onSubmit={handleSubmit}
                className={`w-full max-w-[90%] sm:max-w-[850px] ${
                    darkMode ? "bg-[#2a2a35]" : "bg-white"
                } shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4`}
            >
                <div className="mb-4">
                    <label
                        className={`block ${
                            darkMode ? "text-[#F5F5F5]" : "text-gray-700"
                        } text-sm font-bold mb-2`}
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <TextInput
                        onChange={(e) => setUserName(e.target.value)}
                        className={`shadow font-bold appearance-none border rounded w-full py-2 sm:py-4 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                            darkMode
                                ? "bg-[#2a2a35] text-[#f5f5f5] placeholder-gray-400 border-gray-600"
                                : "bg-[#f0f0f0] text-[#333]"
                        }`}
                        id="name"
                        type="text"
                        placeholder="Enter Your Name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className={`block ${
                            darkMode ? "text-[#F5F5F5]" : "text-gray-700"
                        } text-sm font-bold mb-2`}
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <TextInput
                        onChange={(e) => setEmail(e.target.value)}
                        className={`shadow font-bold appearance-none border rounded w-full py-2 sm:py-4 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                            darkMode
                                ? "bg-[#2a2a35] text-[#f5f5f5] placeholder-gray-400 border-gray-600"
                                : "bg-[#f0f0f0] text-[#333]"
                        }`}
                        id="email"
                        type="email"
                        placeholder="Enter Your Email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className={`block ${
                            darkMode ? "text-[#F5F5F5]" : "text-gray-700"
                        } text-sm font-bold mb-2`}
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        onChange={(e) => setText(e.target.value)}
                        className={`shadow py-2 sm:py-4 font-bold appearance-none border rounded w-full px-3 leading-tight focus:outline-none focus:shadow-outline h-[120px] sm:h-[180px] ${
                            darkMode
                                ? "bg-[#2a2a35] text-[#f5f5f5] placeholder-gray-400 border-gray-600"
                                : "bg-[#f0f0f0] text-[#333]"
                        }`}
                        id="message"
                        placeholder="Enter Your Message"
                        required
                    />
                </div>
                <div className="flex items-center justify-center sm:justify-between">
                    <SubmitButton
                        disabled={isSubmitting}
                        className={`${
                            isSubmitting
                                ? "bg-gray-500"
                                : "bg-[#7843E9] hover:bg-purple-700"
                        } text-white font-bold py-2 sm:py-3 px-4 sm:px-5 rounded-xl focus:outline-none focus:shadow-outline`}
                        type="submit"
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </SubmitButton>
                </div>
                {errorMessage && (
                    <p className="text-red-500 text-center mt-4">{errorMessage}</p>
                )}
                {successMessage && (
                    <p className="text-green-500 text-center mt-4">{successMessage}</p>
                )}
            </form>
        </div>
    );
};

export default ContactPage;
