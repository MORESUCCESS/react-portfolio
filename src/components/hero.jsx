import { Download } from "lucide-react";
import SocialIcons from "./socialIcons";
import TerminalHero from "./terminal";
import { motion } from "framer-motion";


const Hero = ()=>{
    return(
        <div className="flex gap-10 lg:flex-row flex-col items-center justify-center lg:justify-between">
            <div className="lg:max-w-lg py-0 space-y-6 flex flex-col lg:items-center lg:text-start text-start lg:order-none order-2">
                <motion.div className="text-white space-y-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                exit={{ x: "100%", transition: { duration: 0.1 } }}
                >
                    {/* <p className="text-xl lg:mb-0 mb-2">Full-Stack Web Developer</p> */}
                    <h1 className="lg:text-7xl text-5xl font-bold border-l-4 pl-4 border-purple-700 rounded-xl">Code</h1>
                    <p className="lg:text-7xl text-5xl text-white font-bold pl-4 border-l-4 border-purple-700 rounded-xl">Design</p>
                    <p className="lg:text-7xl text-5xl text-white font-bold pl-4 border-l-4 border-purple-700 rounded-xl">Implement</p>
                    <p className="lg:mt-5 mt-8 text-[20px]">I'm Hammed O., a full-stack web developer crafting modern web experiences and digital tools. I build scalable websites that help business brands grow fast.</p>
                </motion.div>
                <motion.div className="items-start mt-10 flex lg:flex-row flex-col gap-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
                    exit={{ y: "100%", transition: { duration: 0.1 } }}
                >
                    <a href="/cv_download.pdf" download className="bg-purple-700 text-white hover:bg-purple-600 duration-300 cursor-pointer text-purple-400 border border-purple-500 flex items-center gap-2 rounded-xl py-2 px-10">
                        Download CV
                        <Download className="w-4 h-4"/>
                    </a>
                    <SocialIcons/>
                </motion.div>
            </div>

            <motion.div className="relative lg:block hidden overflow-hidden items-center justify-center lg:order-none order-1 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                exit={{ x: "100%", transition: { duration: 0.1 } }} 
            >
                <TerminalHero/>
            </motion.div>
        </div>
    );
}
export default Hero;