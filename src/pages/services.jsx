import { ArrowDownRight } from "lucide-react";
import NavBar from "../components/navBar"
import {motion} from "framer-motion"

const Services = ()=>{
    return(
        <motion.div className="bg-gray-900 lg:min-h-screen h-full font-mono overflow-hidden"
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: "100%", transition: {duration: 0.1}}}
        >
            <div className="lg:w-9/12 lg:mx-auto mx-5 relative z-0">
                <NavBar/>
                <div className="grid lg:grid-cols-2 grid-cols-1 py-11 gap-15 items-center justify-center">
                    <div className="text-white space-y-3 border-b pb-5 border-b-gray-700 cursor-pointer hover:text-purple-600 duration-300">
                        <div className="w-full flex items-center justify-between">
                            <h1 className="text-5xl">01</h1>
                            <div className="bg-purple-800 w-fit rounded-full p-2 cursor-pointer">
                                <ArrowDownRight
                                    className="w-10 h-10"
                                />
                            </div>
                        </div>
                        <h1 className="text-3xl">Responsive Web Development</h1>
                        <p>I specialize in creating modern, mobile-friendly, and visually appealing websites that look perfect on any device.
                        </p>
                    </div>

                     <div className="text-white space-y-3 border-b pb-5 border-b-gray-700 cursor-pointer hover:text-purple-600 duration-300">
                        <div className="w-full flex items-center justify-between">
                            <h1 className="text-5xl">02</h1>
                            <div className="bg-purple-800 w-fit rounded-full p-2 cursor-pointer">
                                <ArrowDownRight
                                    className="w-10 h-10"
                                />
                            </div>
                        </div>
                        <h1 className="text-3xl">Web App Development</h1>
                        <p>I build dynamic, high-performance, and user-friendly web applications that efficiently handle real-world tasks, ensuring speed, functionality, and engagement.</p>
                    </div>

                     <div className="text-white space-y-3 border-b pb-5 border-b-gray-700 cursor-pointer hover:text-purple-600 duration-300">
                        <div className="w-full flex items-center justify-between">
                            <h1 className="text-5xl">03</h1>
                            <div className="bg-purple-800 w-fit rounded-full p-2 cursor-pointer">
                                <ArrowDownRight
                                    className="w-10 h-10"
                                />
                            </div>
                        </div>
                        <h1 className="text-3xl">UI/UX Implementation</h1>
                        <p>I transform creative UI/UX designs into functional, responsive, and visually engaging user interfaces that deliver seamless user experiences.</p>
                    </div>

                     <div className="text-white space-y-3 border-b pb-5 border-b-gray-700 cursor-pointer hover:text-purple-600 duration-300">
                        <div className="w-full flex items-center justify-between">
                            <h1 className="text-5xl">04</h1>
                            <div className="bg-purple-800 w-fit rounded-full p-2 cursor-pointer">
                                <ArrowDownRight
                                    className="w-10 h-10"
                                />
                            </div>
                        </div>
                        <h1 className="text-3xl">Website Optimization & Maintenance</h1>
                        <p>I enhance website performance, boost loading speed, fix bugs, and ensure smooth, reliable functionality.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Services;