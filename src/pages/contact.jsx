import NavBar from "../components/navBar";
import {motion} from "framer-motion"


const Contact = ()=>{
    return(
        <motion.div className="bg-gray-900 lg:min-h-screen h-full font-mono overflow-hidden"
             initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: "100%", transition: {duration: 0.1}}}
        >
            <div className="lg:w-9/12 lg:mx-auto mx-5 relative z-0">
                <NavBar/>
                <div className="py-7 grid lg:grid-cols-2 grid-cols-1 gap-7 lg:items-center lg:justify-center lg:p-0">
                    <div className="bg-gray-800 p-5 rounded-lg space-y-5">
                        <h1 className="text-3xl text-purple-600">Let's work together</h1>
                        <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius possimus necessitatibus.</p>
                        <form className="space-y-5" method="post" action="mailto:ms2dwrld@gmail.com" encType="text/plain">
                            <div className="flex lg:flex-row flex-col gap-3 lg:justify-between">
                                <input type="text"
                                    name="firstName" 
                                    className="bg-gray-900 text-gray-500 py-2 px-4 focus:outline-purple-800"
                                    placeholder="Firstname"
                                    required />
                                <input type="text" 
                                    name="lastName"
                                    className="bg-gray-900 text-gray-500 py-2 px-4 focus:outline-purple-800"
                                    placeholder="Lastname"
                                    required />
                            </div>

                            <div className="flex lg:flex-row flex-col gap-3 lg:justify-between">
                                <input type="text"
                                    name="email" 
                                    className="bg-gray-900 text-gray-500 py-2 px-4 focus:outline-purple-800"
                                    placeholder="Email address"
                                    required />
                                <input type="number" 
                                    required
                                    name="phoneNumber"
                                    className="bg-gray-900 text-gray-500 py-2 px-4 lg:w-[47%] w-full focus:outline-purple-800"
                                    placeholder="Phone number" />
                            </div>

                            <div className="bg-gray-900 py-2 px-3 text-gray-500">
                                <select required name="service" placeholder="Select a service" className="w-full cursor-pointer">
                                    <option value="webdev" className="bg-gray-900">Web development</option>
                                    <option value="uiux" className="bg-gray-900">UI/UX</option>
                                    <option value="graphics" className="bg-gray-900">Graphics design</option>
                                </select>
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Type your message here"
                                    className="bg-gray-900 py-2 px-3 text-gray-500 w-full focus:outline-purple-600"
                                    rows={4}
                                    required
                                />
                            </div>
                            <div>
                                <button className="bg-purple-800 py-2 px-8 rounded-xl cursor-pointer font-bold" type="submit">Send message</button>
                            </div>
                        </form>
                    </div>

                    <div className="flex items-start flex-col justify-center space-y-7 w-fit lg:ml-6">
                        <div className="flex gap-3">
                            <i className="py-3 px-3 text-purple-600  bg-gray-800 text-2xl ri-phone-fill"></i>
                            <div>
                                <p className="text-gray-500">Phone</p>
                                <p className="text-white">(+234) 907 584 1361</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <i className="py-3 px-3 text-purple-600  bg-gray-800 text-2xl ri-mail-fill"></i>
                            <div>
                                <p className="text-gray-500">Email</p>
                                <p className="text-white">ms2dwrld@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <i className="py-3 px-3 text-purple-600  bg-gray-800 text-2xl ri-map-pin-fill"></i>
                            <div>
                                <p className="text-gray-500">Address</p>
                                <p className="text-white">Ile-Ife, Osun State, Nigeria.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Contact;