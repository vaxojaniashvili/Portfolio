'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Send, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    id: number;
    text: string;
    isBot: boolean;
}

interface QuickQuestion {
    id: number;
    text: string;
}

interface ChatModalProps {
    isOpen: boolean;
    onClose: () => void;
    darkMode: boolean;
}

interface BotResponses {
    hello: string;
    skills: string;
    experience: string;
    contact: string;
    projects: string;
    process: string;
    education: string;
    technologies: string;
    availability: string;
    timeline: string;
    pricing: string;
    services: string;
    default: string;
    [key: string]: string;
}

const botResponses:BotResponses = {
    hello: "გამარჯობა! რით შემიძლია დაგეხმაროთ?",
    skills: "მე ვმუშაობ შემდეგი ტექნოლოგიებით: JavaScript, TypeScript, React,React-Native, Next.js, Node.js,PHP,Laravel Tailwind CSS და Framer Motion. გარდა ამისა, მაქვს გამოცდილება UI/UX დიზაინში.",
    experience: "მაქვს 1+ წლის გამოცდილება ვებ დეველოპმენტში. ვთანამშრომლობდი როგორც სტარტაპებთან, ასევე მსხვილ კომპანიებთან. ჩემი პორტფოლიო მოიცავს სხვადასხვა სფეროს პროექტებს, მათ შორის ელექტრონული კომერციის პლატფორმებს, დეშბორდებს და მობილურ აპლიკაციებს.",
    contact: "შეგიძლიათ დამიკავშირდეთ ელ-ფოსტაზე: vaxojaniashvili186@gmail.com, ან სოციალურ ქსელებში - LinkedIn, GitHub, Twitter. ასევე შეგიძლიათ შეავსოთ საკონტაქტო ფორმა ჩემი პორტფოლიოს ვებგვერდზე.",
    projects: "ჩემი პროექტები მოიცავს: 1) Alliance ის პროექტი რომლის ვებსაიტზეც ვმუშაობ  2) HotCard ის აპლიკაცია რომელიც არის ქართული პროექტი, 3) მობილური აპლიკაცია ProPay მოსწვალე-მასწავლებლისთვის. ყველა პროექტის დეტალები შეგიძლიათ იხილოთ პორტფოლიოს პროექტების განყოფილებაში.",
    process: "ჩემი სამუშაო პროცესი იწყება კლიენტთან კონსულტაციით, საიდანაც ვაგროვებ მოთხოვნებს. შემდეგ ვქმნი დაბალი და მაღალი დეტალიზაციის დიზაინებს, რომლებიც მტკიცდება კლიენტის მიერ. დეველოპმენტის ფაზა იყოფა სპრინტებად, თითოეული სპრინტის ბოლოს ხდება შესრულებული სამუშაოს დემონსტრაცია. პროექტის დასრულების შემდეგ ვახორციელებ ტესტირებას და ვუზრუნველყოფ ტექნიკურ მხარდაჭერას.",
    education: "მაქვს ბაკალავრის ხარისხი კომპიუტერულ მეცნიერებებში და მაგისტრის ხარისხი ვებ დეველოპმენტში. გარდა ამისა, გავლილი მაქვს სხვადასხვა სერტიფიცირებული კურსები, მათ შორის React და Node.js-ის მიმართულებით.",
    technologies: "ძირითადი ტექნოლოგიები: React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL. Frontend: HTML5, CSS3, Tailwind, SASS, Framer Motion. Backend: Express.js, NestJS, Laravel GraphQL. DevOps: Git, SQL Docker, CI/CD, AWS.",
    availability: "ამჟამად ვიღებ ახალ პროექტებს. შემიძლია ვიმუშაო როგორც სრულ განაკვეთზე, ასევე ნაწილობრივ დატვირთვით. დამიკავშირდით დეტალებისთვის.",
    timeline: "პროექტის ხანგრძლივობა დამოკიდებულია მის მოცულობაზე და სირთულეზე. მარტივი ლენდინგ გვერდი შეიძლება დასრულდეს 1-2 კვირაში, საშუალო სირთულის პროექტები - 1-2 თვეში, ხოლო რთული პროექტები შეიძლება გაგრძელდეს 3-6 თვე.",
    pricing: "ფასები დამოკიდებულია პროექტის მოცულობაზე, სირთულეზე და ვადებზე. შემიძლია ვიმუშაო როგორც საათობრივად, ასევე ფიქსირებული ღირებულებით პროექტზე. დამიკავშირდით უფრო დეტალური შეთავაზებისთვის.",
    services: "ჩემი სერვისები მოიცავს: ვებ დეველოპმენტს, მობილური აპლიკაციების შექმნას, UI/UX დიზაინს, ტექნიკურ კონსულტაციას, არსებული პროექტების განახლებას და გაუმჯობესებას, SEO ოპტიმიზაციას.",
    default: "მადლობა თქვენი შეკითხვისთვის! თუ გსურთ უფრო კონკრეტული ინფორმაცია მიიღოთ, გთხოვთ შეარჩიოთ ერთ-ერთი ქვემოთ მოცემული თემა ან დამისვათ დამატებითი კითხვა."
};
const getBotResponse = (input:string) => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('გამარჯობა') || lowerInput.includes('სალამი') || lowerInput.includes('hello') || lowerInput.includes('hi')) {
        return botResponses.hello;
    } else if (lowerInput.includes('უნარ') || lowerInput.includes('skill') || lowerInput.includes('შეგიძლია') || lowerInput.includes('ტექნოლოგიებ') || lowerInput.includes('ცოდნა')) {
        return botResponses.skills;
    } else if (lowerInput.includes('გამოცდილება') || lowerInput.includes('experience') || lowerInput.includes('მუშაობ')) {
        return botResponses.experience;
    } else if (lowerInput.includes('კონტაქტ') || lowerInput.includes('დაკავშირება') || lowerInput.includes('მეილი') || lowerInput.includes('ტელეფონი')) {
        return botResponses.contact;
    } else if (lowerInput.includes('პროექტ') || lowerInput.includes('project') || lowerInput.includes('ნამუშევრებ') || lowerInput.includes('პორტფოლიო')) {
        return botResponses.projects;
    } else if (lowerInput.includes('პროცეს') || lowerInput.includes('მეთოდოლოგია') || lowerInput.includes('როგორ მუშაობ')) {
        return botResponses.process;
    } else if (lowerInput.includes('განათლება') || lowerInput.includes('სწავლა') || lowerInput.includes('უნივერსიტეტი') || lowerInput.includes('education')) {
        return botResponses.education;
    } else if (lowerInput.includes('ტექნოლოგი') || lowerInput.includes('tech stack') || lowerInput.includes('framework') || lowerInput.includes('language')) {
        return botResponses.technologies;
    } else if (lowerInput.includes('ხელმისაწვდომ') || lowerInput.includes('თავისუფალი') || lowerInput.includes('availability') || lowerInput.includes('მიიღებ')) {
        return botResponses.availability;
    } else if (lowerInput.includes('დრო') || lowerInput.includes('ვადა') || lowerInput.includes('timeline') || lowerInput.includes('როდის') || lowerInput.includes('ხანგრძლივობა')) {
        return botResponses.timeline;
    } else if (lowerInput.includes('ფას') || lowerInput.includes('ღირებულება') || lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('რა ჯდება')) {
        return botResponses.pricing;
    } else if (lowerInput.includes('სერვის') || lowerInput.includes('მომსახურება') || lowerInput.includes('რას აკეთებ') || lowerInput.includes('service')) {
        return botResponses.services;
    } else {
        return botResponses.default;
    }
};

const quickQuestions:QuickQuestion[] = [
    { id: 1, text: "რა ტექნოლოგიებს ფლობთ?" },
    { id: 2, text: "თქვენი პროექტების შესახებ" },
    { id: 3, text: "საკონტაქტო ინფორმაცია" },
    { id: 4, text: "რა ღირს თქვენი მომსახურება?" },
    { id: 5, text: "ხელმისაწვდომი ხართ ახალი პროექტებისთვის?" }
];

export default function ChatModal({ isOpen, onClose }: ChatModalProps): JSX.Element | null {
    const [messages, setMessages] = useState([
        { id: 1, text: 'გამარჯობა! რაში შემიძლია დაგეხმაროთ?', isBot: true }
    ]);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // სქროლის პრევენცია
    const preventScroll = (e: WheelEvent) => {
        const element = e.currentTarget as HTMLElement;
        const scrollTop = element.scrollTop;
        const scrollHeight = element.scrollHeight;
        const height = element.clientHeight;
        const delta = e.deltaY;

        const isScrollingUp = delta < 0 && scrollTop === 0;

        const isScrollingDown = delta > 0 && scrollHeight - scrollTop === height;

        if (isScrollingUp || isScrollingDown) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    useEffect(() => {
        const messagesContainer = document.getElementById("chat-messages-container");
        const quickQuestionsContainer = document.getElementById("chat-quick-questions-container");

        if (messagesContainer) {
            messagesContainer.addEventListener('wheel', preventScroll, { passive: false });
        }

        if (quickQuestionsContainer) {
            quickQuestionsContainer.addEventListener('wheel', preventScroll, { passive: false });
        }

        return () => {
            if (messagesContainer) {
                messagesContainer.removeEventListener('wheel', preventScroll);
            }

            if (quickQuestionsContainer) {
                quickQuestionsContainer.removeEventListener('wheel', preventScroll);
            }
        };
    }, [isOpen]);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    useEffect(() => {
        if (isOpen && isMobile) {
            const scrollY = window.scrollY;

            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';

            return () => {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [isOpen, isMobile]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    useEffect(() => {
        if (isOpen) {
            setMessages([
                { id: 1, text: 'გამარჯობა! რაში შემიძლია დაგეხმაროთ?', isBot: true }
            ]);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && chatRef.current && !chatRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const element = e.currentTarget as HTMLDivElement;
        const scrollTop = element.scrollTop;
        const scrollHeight = element.scrollHeight;
        const height = element.clientHeight;

        if (scrollTop === 0 || scrollHeight - scrollTop === height) {
            e.stopPropagation();
        }
    };

    const handleSendMessage = (e?: React.FormEvent): void => {
        e?.preventDefault();

        if (newMessage.trim() === '') return;

        const userMessage: Message = { id: messages.length + 1, text: newMessage, isBot: false };
        setMessages(prev => [...prev, userMessage]);

        setTimeout(() => {
            const botMessage: Message = {
                id: messages.length + 2,
                text: getBotResponse(newMessage),
                isBot: true
            };
            setMessages(prev => [...prev, botMessage]);
        }, 500);

        setNewMessage('');
    };

    const handleQuickQuestion = (question: string): void => {
        setNewMessage(question);
        setTimeout(() => {
            handleSendMessage();
        }, 100);
    };

    if (!isOpen) return null;

    if (isMobile) {
        return (
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col h-[100vh] max-h-[100vh]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        style={{ touchAction: 'none' }}
                        ref={chatRef}
                    >
                        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700 bg-blue-500 text-white">
                            <button onClick={onClose} className="text-white hover:text-gray-200 flex items-center">
                                <ArrowLeft size={20} className="mr-2" />
                                <span>უკან დაბრუნება</span>
                            </button>
                            <h3 className="font-semibold">ჩატი</h3>
                        </div>

                        <div
                            id="chat-messages-container"
                            className="flex-1 overflow-y-auto p-4 space-y-4 h-full"
                            style={{ overscrollBehavior: 'contain' }}
                            onTouchStart={handleTouchStart}
                        >
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg ${
                                            message.isBot
                                                ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white bot-bubble chat-bubble'
                                                : 'bg-blue-500 text-white user-bubble chat-bubble'
                                        }`}
                                    >
                                        {message.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <div
                            id="chat-quick-questions-container"
                            className="px-2 py-[10px] h-[148px] overflow-y-scroll mb-[15px] gap-5 grid grid-cols-1 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                            style={{ overscrollBehavior: 'contain' }}
                            onTouchStart={handleTouchStart}
                        >
                            {quickQuestions.map((question) => (
                                <button
                                    key={question.id}
                                    onClick={() => handleQuickQuestion(question.text)}
                                    className="px-3 py-2.5 text-sm bg-gray-100 z-30 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full text-gray-800 dark:text-white transition-colors flex-shrink-0"
                                >
                                    {question.text}
                                </button>
                            ))}
                        </div>

                        <form
                            onSubmit={handleSendMessage}
                            className="p-4 flex bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700"
                        >
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="დაწერეთ შეტყობინება..."
                                className="flex-1 border rounded-l-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-3 rounded-r-lg hover:bg-blue-600 transition-colors"
                            >
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    ref={chatRef}
                    className="fixed bottom-[80px] right-[20px] z-50"
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 500,
                        duration: 0.3
                    }}
                >
                    <div
                        className={`bg-white dark:bg-gray-800 rounded-lg w-[350px] h-[550px] flex flex-col shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700`}>
                        <div
                            className="flex justify-between items-center p-3 border-b dark:border-gray-700 bg-blue-500 text-white sticky top-0 z-10"
                            onWheel={(e) => e.stopPropagation()}
                            onTouchStart={(e) => e.stopPropagation()}
                            onTouchMove={(e) => e.stopPropagation()}
                        >
                            <h3 className="font-semibold">ჩატი</h3>
                            <button onClick={onClose} className="text-white hover:text-gray-200">
                                <X size={18}/>
                            </button>
                        </div>
                        <div
                            id="chat-messages-container"
                            className="flex-1 overflow-y-auto p-3 space-y-3"
                            style={{overscrollBehavior: 'contain'}}
                        >
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                                    initial={{opacity: 0, y: 10}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.2}}
                                >
                                    <div
                                        className={`max-w-[90%] p-2 rounded-lg text-sm ${
                                            message.isBot
                                                ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white bot-bubble chat-bubble'
                                                : 'bg-blue-500 text-white user-bubble chat-bubble'
                                        }`}
                                    >
                                        {message.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef}/>
                        </div>
                        <div
                            id="chat-quick-questions-container"
                            className="px-3 h-[148px] py-2 grid grid-cols-1 gap-2 overflow-y-auto border-t border-gray-200 dark:border-gray-700"
                            style={{overscrollBehavior: 'contain'}}
                        >
                            {quickQuestions.map((question) => (
                                <button
                                    key={question.id}
                                    onClick={() => handleQuickQuestion(question.text)}
                                    className="px-2 py-2.5 text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-full text-gray-800 dark:text-white transition-colors flex-shrink-0"
                                >
                                    {question.text}
                                </button>
                            ))}
                        </div>
                        <form onSubmit={handleSendMessage}
                              className="border-t p-2 flex dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="დაწერეთ შეტყობინება..."
                                className="flex-1 border rounded-l-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition-colors"
                            >
                                <Send size={18}/>
                            </button>
                        </form>
                        <div
                            className="absolute -bottom-2 right-6 w-4 h-4 rotate-45 bg-gray-50 dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700"></div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}