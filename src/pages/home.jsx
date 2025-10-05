import NavBar from "../components/navBar"
import Hero from "../components/hero"
import Footer from "../components/footer"
import {motion} from "framer-motion"

const Home = ()=>{
  return(
        <motion.div className="bg-gray-900 lg:min-h-screen h-full font-mono overflow-hidden"
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: "100%", transition: {duration: 0.1}}}
        >
            <div className="lg:w-9/12 lg:mx-auto mx-5 relative z-0">
                <NavBar/>
                <Hero/>
                <Footer/>
            </div>
        </motion.div>
  );
}

export default Home;