import { useState } from "react";
import NavBar from "../components/navBar";
import {motion} from "framer-motion"

const Work = ()=>{
    const [project, setProject] = useState("project1")

    return(
        <motion.div className="bg-gray-900 lg:min-h-screen h-full font-mono overflow-hidden"
             initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: "100%", transition: {duration: 0.1}}}
        >
            <div className="lg:w-9/12 lg:mx-auto mx-5 relative z-0">
                <NavBar/>
                <div className="grid lg:grid-cols-2 py-12 gap-5">
                    <div className="text-white space-y-6">
                        <h1 className="text-7xl">01</h1>
                        <p className="text-3xl font-bold">FrontEnd Project</p>
                        <p className="textx-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius possimus necessitatibus.</p>
                        <p className="text-purple-600 w-full pb-5 border-b border-b-gray-700">ReactJs, Tailwind, Css 3</p>

                        <div className="flex gap-3">
                            <i className="cursor-pointer hover:bg-purple-800 duration-300  text-xl bg-gray-800 py-2 px-3 rounded-full ri-arrow-right-up-long-fill"></i>
                            <i className="cursor-pointer hover:bg-purple-800 duration-300 text-xl bg-gray-800 py-2 px-3 rounded-full ri-github-fill"></i>
                        </div>
                    </div>

                    <div>
                        <img src="/project1.png" alt="project1" className="rounded-lg cursor-pointer"/>
                        <div className="flex gap-3 mt-5 items-center justify-end">
                            <i className="text-2xl bg-purple-800 py-2 px-3 ri-arrow-left-s-line cursor-pointer"></i>
                            <i className="text-2xl bg-purple-800 py-2 px-3 ri-arrow-right-s-line cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Work;