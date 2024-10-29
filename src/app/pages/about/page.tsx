import React from 'react';

const AboutPage = () => {
    return (
        <div id="about" className="bg-gray-100 w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 gap-0 sm:gap-25">
            <div className="text-center mb-8 max-w-xl">
                <h1 className="text-[40px] font-bold mb-2">ABOUT ME</h1>
                <p className="text-gray-700">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-20 max-w-4xl w-full">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">Get to know me!</h2>
                    <p className="text-gray-700 mb-4">
                        I’m a <strong>full-stack Focused Web Developer</strong> building and managing the full-stack of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
                    </p>
                    <p className="text-gray-700 mb-4">
                        I also like sharing content related to the stuff that I have learned over the years in <strong>Web Development</strong> so it can help other people in the Dev Community. Feel free to Connect or Follow me on my <a target="_blank" href="https://www.linkedin.com/in/vaxojaniashvili/" className="text-blue-500">LinkedIn</a> and <a target="_blank" href="https://www.instagram.com/vaxo_janiashvili1/" className="text-pink-500">Instagram</a> where I post useful content related to Web Development and Programming.
                    </p>
                    <p className="text-gray-700">
                        I am open to <strong>Job opportunities</strong> where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience, do not hesitate to <strong>contact</strong> me.
                    </p>
                    <button className="mt-4 px-6 py-2 bg-purple-600 text-white font-bold rounded hover:bg-purple-700">
                        Contact
                    </button>
                </div>

                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">My Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {['HTML', 'CSS', 'JavaScript', 'React', 'Next',"Node.js","express.js","nest.js", 'PHP',"Laravel", 'SASS', 'GitHub', 'Git', 'SEO',"Linux", 'Terminal'].map(skill => (
                            <span key={skill} className="px-4 duration-500 py-2 bg-gray-200 rounded text-center transition:1s font-semibold hover:rounded-2xl text-gray-700 hover:bg-violet-700 cursor-pointer hover:text-white">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
