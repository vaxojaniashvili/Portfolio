"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

const ContactPage = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (userName && email.includes("@") && text) {
            const generatedId = Math.random().toString(36).substring(2, 15);
            router.push(`/pages/success?id=${generatedId}`);
        }
    };

    return (
        <div id="contact" className="min-h-screen bg-gray-300 flex flex-col items-center justify-center p-4 sm:p-8">
            <div className="flex p-4 sm:p-7">
                <h1 className="mx-auto text-[24px] sm:text-[30px] font-bold">CONTACT</h1>
            </div>
            <div className="flex flex-wrap mb-4 sm:mb-8">
                <p className="mx-auto text-[#333] text-lg sm:text-2xl font-medium text-center">
                    Feel free to contact me by submitting the form below and I will get
                    back to <br className="hidden sm:block" /> you as soon as possible
                </p>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-[90%] sm:max-w-[850px] bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input onChange={(e) => setUserName(e.target.value)}
                           className="shadow font-bold bg-[#f0f0f0] appearance-none border rounded w-full py-2 sm:py-4 px-3 text-[#333] leading-tight focus:outline-none focus:shadow-outline"
                           id="name"
                           type="text"
                           placeholder="Enter Your Name"
                           required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow font-bold bg-[#f0f0f0] appearance-none border rounded w-full py-2 sm:py-4 px-3 text-[#333] leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter Your Email"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        onChange={(e) => setText(e.target.value)}
                        className="shadow py-2 sm:py-4 font-bold bg-[#f0f0f0] appearance-none border rounded w-full px-3 text-[#333] leading-tight focus:outline-none focus:shadow-outline h-[120px] sm:h-[180px]"
                        id="message"
                        placeholder="Enter Your Message"
                        required
                    />
                </div>
                <div className="flex items-center justify-center sm:justify-between">
                    <button
                        className="bg-[#7843E9] hover:bg-purple-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-5 rounded-xl focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactPage;
