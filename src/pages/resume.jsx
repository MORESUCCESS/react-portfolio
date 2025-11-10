import { useState } from "react";
import NavBar from "../components/navBar";
import {motion} from "framer-motion"
import 'remixicon/fonts/remixicon.css'


const Resume = ()=>{

    const [tab, setTab] = useState("experience")

    return(
        <motion.div className="bg-gray-900 lg:min-h-screen h-full font-mono overflow-hidden"
             initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: "100%", transition: {duration: 0.1}}}
        >
            <div className="lg:w-9/12 lg:mx-auto mx-5 relative z-0">
                <NavBar/>
                <div className="grid lg:grid-cols-2 grid-cols-1 py-12 gap-10">
                    <div className="text-white space-y-7">
                        <h1 className="text-4xl">Why hire me?</h1>
                        <p className="text-gray-500">I deliver fast, responsive, and visually stunning websites that drive real results.</p>
                        <div className="flex flex-col gap-5">
                            <button  
                                onClick={()=>setTab("experience")}
                                className={`bg-gray-800 font-medium text-white py-3 rounded-lg cursor-pointer duration-300 ${tab === "experience"? "bg-purple-800" : "hover:bg-purple-800"}`}>
                                Experience
                            </button>
                            <button  
                                onClick={()=>setTab("education")}
                                className={`bg-gray-800 font-medium text-white py-3 rounded-lg cursor-pointer duration-300 ${tab === "education"? "bg-purple-800" : "hover:bg-purple-800"}`}>
                                Education
                            </button>
                            <button  
                                onClick={()=>setTab("skills")}
                                className={`bg-gray-800 font-medium text-white py-3 rounded-lg cursor-pointer duration-300 ${tab === "skills"? "bg-purple-800" : "hover:bg-purple-800"}`}>
                                Skills
                            </button>
                            <button  
                                onClick={()=>setTab("aboutMe")}
                                className={`bg-gray-800 font-medium text-white py-3 rounded-lg cursor-pointer duration-300 ${tab === "aboutMe"? "bg-purple-800" : "hover:bg-purple-800"}`}>
                                About Me
                            </button>
                        </div>
                    </div>

                    {
                        tab === "experience" &&
                        <motion.div className="space-y-7"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                        <h1 className="text-3xl text-white">My Experience</h1>
                        <p className="text-gray-500">Below are my different experiences:</p>

                        <div className="grid grid-cols-2 gap-6 h-[340px] flex-1 scroll">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="text-purple-600">2025 - Present</p>
                                <h1 className="text-white">Full Stack Developer</h1>
                                <p className="mt-3 text-gray-400"><span className="text-3xl text-purple-600">.</span> ms2dwrld inc.</p>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="text-purple-600">2025 - Present</p>
                                <h1 className="text-white">Full Stack Developer</h1>
                                <p className="mt-3 text-gray-400"><span className="text-3xl text-purple-600">.</span> ms2dwrld inc.</p>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="text-purple-600">2025 - Present</p>
                                <h1 className="text-white">Full Stack Developer</h1>
                                <p className="mt-3 text-gray-400"><span className="text-3xl text-purple-600">.</span> ms2dwrld inc.</p>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="text-purple-600">2025 - Present</p>
                                <h1 className="text-white">Full Stack Developer</h1>
                                <p className="mt-3 text-gray-400"><span className="text-3xl text-purple-600">.</span> ms2dwrld inc.</p>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="text-purple-600">2025 - Present</p>
                                <h1 className="text-white">Full Stack Developer</h1>
                                <p className="mt-3 text-gray-400"><span className="text-3xl text-purple-600">.</span> ms2dwrld inc.</p>
                            </div>
                        </div>
                        </motion.div>
                    }

                    {
                        tab === "education" &&
                         <motion.div className="space-y-7"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                        <h1 className="text-3xl text-white">My Education</h1>
                        <p className="text-gray-500">Education qualifications:</p>

                        <div className="grid grid-cols-2 gap-6 h-[340px] flex-1 scroll">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="text-purple-600">2025 - Present</p>
                                <h1 className="text-white">Primary School</h1>
                                <p className="mt-3 text-gray-400"><span className="text-3xl text-purple-600">.</span> ms2dwrld inc.</p>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="text-purple-600">2025 - Present</p>
                                <h1 className="text-white">Secondary School</h1>
                                <p className="mt-3 text-gray-400"><span className="text-3xl text-purple-600">.</span> ms2dwrld inc.</p>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="text-purple-600">2025 - Present</p>
                                <h1 className="text-white">Full Stack Developer</h1>
                                <p className="mt-3 text-gray-400"><span className="text-3xl text-purple-600">.</span> ms2dwrld inc.</p>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="text-purple-600">2025 - Present</p>
                                <h1 className="text-white">Full Stack Developer</h1>
                                <p className="mt-3 text-gray-400"><span className="text-3xl text-purple-600">.</span> ms2dwrld inc.</p>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg">
                                <p className="text-purple-600">2025 - Present</p>
                                <h1 className="text-white">Full Stack Developer</h1>
                                <p className="mt-3 text-gray-400"><span className="text-3xl text-purple-600">.</span> ms2dwrld inc.</p>
                            </div>
                        </div>
                        </motion.div>
                    }
                    {
                        tab === "skills" &&
                        <motion.div className="space-y-7"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                        <h1 className="text-3xl text-white">My Skills</h1>
                        <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius possimus necessitatibus.</p>

                        <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 flex-1">
                            <div className="bg-gray-800 p-4 rounded-lg text-center text-white hover:text-purple-600 cursor-pointer duration-300">
                                <i className="text-6xl ri-html5-fill"></i>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg text-center text-white hover:text-purple-600 cursor-pointer duration-300">
                                <i className="text-6xl ri-css3-fill"></i>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg text-center text-white hover:text-purple-600 cursor-pointer duration-300">
                               <i className="text-6xl ri-javascript-fill"></i>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg text-center text-white hover:text-purple-600 cursor-pointer duration-300">
                                <i className="text-6xl ri-reactjs-line"></i>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg text-center text-white hover:text-purple-600 cursor-pointer duration-300">
                                <i className="text-6xl ri-tailwind-css-fill"></i>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg text-center text-white hover:text-purple-600 cursor-pointer duration-300">
                                <i className="text-6xl ri-bootstrap-fill"></i>
                            </div>
                        </div>
                        </motion.div>
                    }
                    {
                        tab === "aboutMe" &&
                        <motion.div className="space-y-7"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                        >
                        <h1 className="text-3xl text-white">About me</h1>
                        <p className="text-gray-500">Passionate frontend developer crafting responsive, user-centered web experiences with clean, modern designs.</p>

                        <div className="grid grid-cols-2 gap-2 flex-1">
                            
                            <div className="rounded-lg text-left space-y-4">
                                <h1 className="text-gray-500">Name <span className="text-white">Hammed Omoniyi</span></h1>
                                <h1 className="text-gray-500">Experience <span className="text-white">3+ Years</span></h1>
                                <h1 className="text-gray-500">Nationality <span className="text-white">Nigeria</span></h1>
                                <h1 className="text-gray-500">Freelance <span className="text-white">Available</span></h1>
                            </div>

                            <div className="rounded-lg text-left space-y-4">
                                <h1 className="text-gray-500">Phone <span className="text-white">+234 907 584 1361</span></h1>
                                <h1 className="text-gray-500">Discord <span className="text-white">ms2dwrld</span></h1>
                                <h1 className="text-gray-500">Email <span className="text-white">ms2dwrld@gmail.com</span></h1>
                                <h1 className="text-gray-500">Languages <span className="text-white">English, Spanish</span></h1>
                            </div>

                        </div>
                        </motion.div>
                    }
                </div>
            </div>
        </motion.div>
    );
}

export default Resume;