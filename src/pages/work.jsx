import { useState } from "react";
import NavBar from "../components/navBar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

const Work = () => {
  const [project, setProject] = useState("project1");
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectPerPage] = useState(1);

  const projects = [
    {
      title: "Emoji Finder",
      description:
        "A modern and responsive emoji search app built with React and Tailwind CSS. This app allows users to easily browse and search through a complete emoji dataset with names, keywords, and categories.",
      tools: "ReactJs, TailwindCSS",
      live: "https://emoji-finder-seven.vercel.app/",
      gitLink: "https://github.com/MORESUCCESS/emoji-finder.git",
      projectImage: "/emojiFinder.png"
    },
    {
      title: "Gemini Clone",
      description:
        "An elegant and fully responsive AI-powered chat web app built with React.js and Axios. This app allows users to send prompts to an AI model and receive cleanly formatted, Markdown-rendered responses — just like Gemini AI!",
      tools: "ReactJs, TailwindCSS",
      live: "https://gemini-clone-beryl-rho.vercel.app",
      gitLink: "https://github.com/MORESUCCESS/gemini-clone.git",
      projectImage: "/geminiClone.png"
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek and fully responsive portfolio website built with React.js and TailwindCSS. It showcases projects and skills through clean layouts, smooth navigation, and fast performance, highlighting work with clarity, style, and impact effectively.",
      tools: "ReactJs, TailwindCSS",
      live: "https://ms2dwrld.vercel.app",
      gitLink: "https://github.com/MORESUCCESS/react-portfolio.git",
      projectImage: "/portfolio.png"
    },
  ];

  const lastPostIndex = currentPage * projectsPerPage;
  const firstProjectIndex = lastPostIndex - projectsPerPage;
  const currentProject = projects.slice(firstProjectIndex, lastPostIndex)

  return (
    <motion.div
      className="bg-gray-900 lg:min-h-screen h-full font-mono overflow-hidden"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: "100%", transition: { duration: 0.1 } }}
    >
      <div className="lg:w-9/12 lg:mx-auto mx-5 relative z-0">
        <NavBar />
        {currentProject.map((item, index) => (
          <div key={index}>
            <div className="grid lg:grid-cols-2 py-12 gap-5">
              <div className="text-white space-y-6">
                <h1 className="text-7xl">0{currentPage}</h1>
                <p className="text-3xl font-bold">{item.title}</p>
                <p className="textx-gray-500">
                  {item.description}
                </p>
                <p className="text-purple-600 w-full pb-5 border-b border-b-gray-700">
                  {item.tools}
                </p>

                <div className="flex gap-3">
                  <Link to={item.live} target="_blank" className="cursor-pointer hover:bg-purple-800 duration-300  text-xl bg-gray-800 py-2 px-3 rounded-full "><i className="ri-arrow-right-up-long-fill"></i></Link>
                  <Link to={item.gitLink} target="_blank" className="cursor-pointer hover:bg-purple-800 duration-300 text-xl bg-gray-800 py-2 px-3 rounded-full "><i className="ri-github-fill"></i></Link>
                </div>
              </div>

              <div>
                <img
                  src={item.projectImage}
                  alt="project1"
                  className="rounded-lg cursor-pointer shadow-lg shadow-white/10"
                />
              </div>
            </div>
          </div>
        ))}

       <div className="pagination-theme lg:mb-0 mb-8">
         <Pagination
            className="flex items-center justify-center gap-5"
            current={currentPage}
            total={projects.length}
            pageSize={projectsPerPage}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
        />
       </div>
      </div>
    </motion.div>
  );
};

export default Work;
