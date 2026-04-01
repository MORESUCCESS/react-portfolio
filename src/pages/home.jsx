import NavBar from "../components/navBar";
import Hero from "../components/hero";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import Footer from "../components/footer";
import HamburgerComponents from "../components/hamburger";
import heroImg from "../assets/msonthis.jpg";

const Home = () => {

    const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const techItem = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
}

    const projects=[
        {
            title: "Da-Lead",
            image: "dalead.PNG",
            description: "A platform that help freelancers and hustlers find the right leads, and let them know why the should reach out to them.",
            stack: "TypScript, TailwindCSS, Framer motion +1",
            live: "https://da-lead.vercel.app/",
            githubLink: "https://github.com/MORESUCCESS/da-lead.git",
            status: "Completed"
        },
        {
            title: "Gemini Clone",
            image: "geminiClone.png",
            description: "An elegant and fully responsive AI-powered chat web app built with React.js and Axios.",
            stack: "React js, TailwindCSS and Framer motion",
            live: "https://gemini-clone-beryl-rho.vercel.app/",
            githubLink: "https://github.com/MORESUCCESS/gemini-clone.git",
            status: "Completed"
        },
        {
            title: "An Emoji Finder Webpage",
            image: "emojiFinder.png",
            description: "A modern and responsive emoji search app that allowus users to search through a complete emoji dataset.",
            stack: "React js, TailwindCSS and Framer motion",
            live: "alsdkjflaskdf",
            githubLink: "sakldjflasdjflk",
            status: "Completed"
        },
        {
            title: "Portfolio Website",
            image: "pr1.PNG",
            description: "A sleek and fully responsive portfolio website which showcases projects, skills and fast perfomance.",
            stack: "React js, TailwindCSS and Framer motion",
            live: "alsdkjflaskdf",
            githubLink: "sakldjflasdjflk",
            status: "Completed"
        },
    ]

    const techStack=[
        {
            stack: "html5-original.svg",
            name: "HTML5"
        },
        
        {
            stack: "css3-original.svg",
            name: "CSS3"
        },
        {
            stack: "javascript-original.svg",
            name: "JAVASCRIPT"
        },
        {
            stack: "typescript-original.svg",
            name: "TYPESCRIPT"
        },
        {
            stack: "tailwindcss-original.svg",
            name: "TAILWINDCSS"
        },
        {
            stack: "react-original.svg",
            name: "REACT JS"
        },
        {
            stack: "git-original.svg",
            name: "GIT"
        },
        {
            stack: "MongoDB.svg",
            name: "MONGODB"
        },
        {
            stack: "Node.js.svg",
            name: "NODE JS"
        },
        {
            stack: "Express.svg",
            name: "EXPRESS JS"
        },
        {
            stack: "Vercel.svg",
            name: "VERCEL"
        }

    ]
  return (
    <>
      <motion.div
        className="font-mono lg:min-h-screen h-full lg:overflow-hidden bg-center bg-no-repeat bg-cover relative lg:py-30 py-40 lg:pb-0 pb-20"
         initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
          <img 
                src={heroImg} 
                className="fixed top-0 left-0 w-full h-full object-cover z-[-1]" 
                alt="hero background"
            />
        <div className="absolute top-0 w-full h-full bg-black/65"></div>
        <NavBar />
        <div className="top-0 py-7 lg:w-9/11 lg:mx-auto mx-5 relative z-0">
          <Hero />
        </div>
      </motion.div>

      {/* about me */}
      <section id="aboutme" className="bg-black/70 font-mono">
        <div className="w-9/11 mx-auto lg:py-25 py-20">
          <motion.div className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          >
            <h1 className="lg:text-6xl text-3xl text-white font-bold text-center font-mono">About Me</h1>
            <p className="mb-20 text-center lg:text-xl bg-[#522398] text-white py-1 rounded-full w-fit px-10 font-mono">Who am I?</p>
          </motion.div>
          <motion.div className="grid lg:grid-cols-2 gap-10 items-start"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="h-full">
              <img src="aboutme.jpg" 
                alt="aboutmeimage"
                className="rounded-xl w-full"
                />
            </div>

            <div>
              <p className="lg:text-lg text-white text-center font-mono">
                I’m <b>ms2dwrld</b> (Hammed Omoniyi), a passionate web developer dedicated to creating clean, responsive, and interactive digital experiences. Skilled in Html, CSS, JavaScript, React.js, Tailwind CSS, and JavaScript, I build websites and applications that are not only functional but visually engaging. I love turning ideas into reality through code, ensuring every project I work on is optimized, user-friendly, and mobile-responsive.

                <br/><br/>Beyond just writing code, I focus on design, usability, and performance, blending creativity with technical expertise. Constantly learning and experimenting with new technologies, I aim to deliver projects that leave a lasting impression.

                If you’re looking for a developer who combines skill, precision, and creativity, you’re in the right place, welcome to my digital world.
              </p>

              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <p className="mt-10 text-center lg:text-xl bg-[#522398] text-white py-1 rounded-full w-full"
                >Why choose me?</p>
                <div className="space-y-2 mt-4 lg:text-lg text-white">
                    <p>- I build responsive and mobile friendly websites</p>
                    <p>- UI/UX Implementation</p>
                    <p>- Website optimization and maintenance</p>
                    <p>- Super friendly professional communication</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="mt-20 flex flex-col items-center jsutify-center">
                <p className="mb-8 text-center bg-[#522398] lg:text-lg text-white py-1 rounded-full lg:w-sm lg-px-0 px-23">My Tech Stacks</p>
                <motion.div className="grid lg:grid-cols-5 grid-cols-2 place-items-start gap-4 bg-black/40 p-8 rounded-xl"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {
                        techStack.map((item, index)=>(
                            <motion.div key={index} 
                            variants={techItem}
                            className="duration-300 w-full hover:scale-110 transition-transform flex space-y-2 cursor-pointer rounded-xl flex-col bg-white p-5 items-center justify-center">
                                <div className="flex flex-col items-center jsutify-center">
                                    <img src={item.stack} 
                                    className="w-[40px] h-[40px]"
                                    alt={item.stack}/>
                                    <p className="text-[#020618] font-bold">{item.name}</p>
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-25 bg-black/75 font-mono">
        <div className="mx-auto w-9/11">
            <motion.div className="flex flex-col items-center justify-center space-y-5"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <h1 className="lg:text-6xl text-3xl font-bold text-center text-white">Projects</h1>
                <p className="lg:mb-10 text-center lg:text-xl bg-[#522398] text-white py-1 rounded-full w-fit px-5">Here are the lists of projects I have built successfully!</p>
            </motion.div>
            <div className="grid lg:grid-cols-3 py-20 lg:gap-10 gap-20">
                {
                    projects.map((item, index)=>(
                        <motion.div key={index} className="hover:scale-110 duration-300 transition-transform relative shadow-lg shadow-white/10 rounded-xl text-white"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1}}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                        >
                            <img src={item.image} alt="projectImage" className="rounded-t-xl h-[200px] w-full" />
                            <div className="p-5 space-y-3">
                                <h1 className="text-xl font-bold">{item.title}</h1>
                                <p className="text-white/70">{item.description}</p>
                                <p className="italic text-purple-400">{item.stack}</p>
                                <div className="flex items-center justify-between mt-5">
                                    <button>
                                        <a href={item.live} target="_blank" className="flex gap-2 bg-[#522398] py-2 px-5 rounded-lg hover:bg-purple-500">
                                            View Project
                                            <ArrowRight/>    
                                        </a>
                                    </button>

                                    <button>
                                        <a href={item.live} target="_blank"><Github className="w-9 h-9 text-white/70 hover:text-purple-400"/></a>
                                    </button>
                                </div>
                            </div>

                            <p className="absolute text-xs top-3 left-5 bg-green-400 px-5 py-1 rounded-full">{item.status}</p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
      </section>

      {/* Contact me */}
      <section id="contactme" className="bg-black/70 py-20 font-mono">
            <motion.div className="w-9/11 mx-auto"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <div className="flex flex-col items-center justify-center space-y-5">
                    <h1 className="lg:text-6xl text-3xl font-bold text-center text-white">Contact me</h1>
                    <p className="mb-20 text-center lg:text-xl bg-[#522398] text-white py-1 rounded-full w-fit px-5">Do you run a business brand and need a website to promote your business?</p>
                </div>
            </motion.div>

            <motion.div className="grid lg:grid-cols-2 gap-5 mx-auto w-9/11"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
            >
                <div className="space-y-5">
                    <h1 className="text-3xl font-bold text-white">Just a click away!</h1>
                    <p className="text-xl text-white">I'm always available to work, both remote and on-site, let's build something great together.</p>

                    <div className="lg:flex hidden items-center gap-4 mt-15">
                        <Mail className="w-10 h-10 text-[#522398]"/>
                        <p className="lg:text-xl text-white">ms2dwrld@gmail.com</p>
                    </div>
                </div>

                <div className="bg-black/40 p-8 rounded-xl">
                    <form action="mailto:ms2dwrld@gmail.com" method="post" encType="text/plain" className="text-white w-full space-y-3 flex flex-col">
                        <div className="space-y-3 text-white w-full flex flex-col">
                            <p className="text-xl">First Name</p>
                            <input type="text" 
                                required 
                                placeholder="First name..."
                                className="pl-2 border-1 border-white/10 outline-none py-2 text-lg rounded-xl"/>
                        </div>
                        <div className="space-y-3 flex flex-col">
                            <p className="text-xl">Last Name</p>
                            <input type="text" 
                                required 
                                placeholder="Last name..."
                                className="pl-2 border-1 border-white/10 outline-none py-2 text-lg rounded-xl"/>
                        </div>

                        <div className="space-y-3 w-full flex flex-col">
                            <p className="text-xl">Email <span className="text-red-600">*</span></p>
                            <input type="email" 
                                required 
                                placeholder="Email address.."
                                className="pl-2 border-1 border-white/10 outline-none py-2 text-lg rounded-xl"/>
                        </div>

                        <div className="space-y-3 w-full">
                            <p className="lg:text-xl">Message</p>
                            <textarea maxLength={5} 
                                required 
                                placeholder="Your message goes here..."
                                className="pl-2 border-1 border-white/10 outline-none py-2 text-lg rounded-xl w-full"/>
                        </div>

                        <div>
                            <button type="submit" className="bg-[#522398] text-white py-2 px-6 rounded-xl cursor-pointer active:scale-90 transition-transform duration-300">Send Message</button>
                        </div>
                    </form>
                </div>
            </motion.div>
      </section>

      {/* footer */}
      <motion.div>
        <Footer/>

      <HamburgerComponents/>
      </motion.div>
    </>
  );
};

export default Home;
