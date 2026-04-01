import SocialIcons from "./socialIcons";
import TerminalHero from "./terminal";


const Hero = ()=>{
    return(
        <div className="font-mono flex gap-10 lg:flex-row flex-col items-center justify-center lg:justify-between">
            <div className="lg:max-w-lg py-0 space-y-6 flex flex-col lg:items-center lg:text-start text-start lg:order-none order-2">
                <div className="text-white space-y-5"
                data-aos="fade-up"
                >
                    {/* <p className="text-xl lg:mb-0 mb-2">Full-Stack Web Developer</p> */}
                    <h1 className="lg:text-6xl text-4xl font-bold border-l-4 pl-4 border-[#522398] rounded-xl">Code</h1>
                    <p className="lg:text-6xl text-4xl text-white font-bold pl-4 border-l-4 border-[#522398] rounded-xl">Design</p>
                    <p className="lg:text-6xl text-4xl text-white font-bold pl-4 border-l-4 border-[#522398] rounded-xl">Implement</p>
                    <p className="lg:mt-5 mt-8 lg:text-[20px]">I'm Hammed O., a full-stack web developer crafting modern web experiences and digital tools. I build scalable websites that help business brands grow fast.</p>
                </div>
                <div className="items-start mt-10 flex lg:flex-row flex-col gap-8"
                    data-aos="fade-down"
                >
                    <a href="#contactme" className="bg-[#522398] text-white duration-300 cursor-pointer flex items-center gap-2 rounded-xl py-2 px-10">
                        Hire Me
                        {/* <Download className="w-4 h-4"/> */}
                    </a>
                    <SocialIcons/>
                </div>
            </div>

            <div className="relative lg:block hidden overflow-hidden items-center justify-center lg:order-none order-1 relative"
                data-aos="fade-right"
            >
                <TerminalHero/>
            </div>
        </div>
    );
}
export default Hero;