import { Download } from "lucide-react";
import { motion } from "framer-motion";
import SocialIcons from "./socialIcons";


const Hero = ()=>{
    return(
        <div className="flex lg:flex-row flex-col items-center justify-center lg:justify-between">
            <div className="py-10 space-y-5 flex flex-col items-center lg:text-start text-center lg:items-start lg:order-none order-2">
                <div className="text-white">
                    <p className="text-xl lg:mb-0 mb-2">FullStack Developer(MERN Stack)</p>
                    <h1 className="lg:text-6xl text-4xl">Hello I'm</h1>
                    <p className="lg:text-6xl text-4xl text-purple-500">Hammed Omoniyi</p>
                    <p className="lg:mt-5 mt-8">An expert in developing perfect digital experiences <br className="lg:block hidden"/> and I'm proficient in various programming languages and <br className="lg:block hidden"/> technologies.</p>
                </div>
                <div className="mt-10 flex lg:flex-row flex-col items-start gap-8">
                    <a href="/cv_download.pdf" download className="hover:bg-purple-800 hover:text-white duration-300 cursor-pointer text-purple-500 border border-purple-500 flex items-center gap-2 rounded-xl py-2 px-10">
                        DOWNLOAD CV
                        <Download className="w-4 h-4"/>
                    </a>
                    <SocialIcons/>
                </div>
            </div>

            <div className="relative overflow-hidden items-center justify-center lg:w-[380px] lg:h-[380px] w-[290px] h-[290px] lg:order-none order-1 profile relative lg:mt-2 mt-10">
                <img 
                    src="/myprofile.png" 
                    alt="profile image"
                    className="object-contain rounded-full w-full h-full" 
                />
                <motion.svg 
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="https://www.w3.org/2000/svg"
                    className="lg:w-[400px] lg:h-[400px] w-[330px] h-[330px] absolute top-[-12px] right-[-18px]">
                    <motion.circle
                        cx="253" cy="253"
                        stroke="#400090"
                        strokeWidth="5"
                        r="250"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate:[120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </div>
        </div>
    );
}
export default Hero;