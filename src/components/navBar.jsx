import NavLinksItems from "./navLinksItems";

const NavBar = ()=>{
    return(
        <nav className="font-mono fixed top-0 w-full rounded-4xl lg:py-5 py-2 z-100 border-b border-white/8 backdrop-blur flex items-center justify-between lg:px-30 px-6">
            <div>
                <h1 className="lg:text-3xl text-white font-bold">ms2dwrld<span className="text-3xl text-[#522398]">.</span></h1>
                
            </div>
                <div className="flex gap-6 items-center">
                        <ul className="lg:block hidden text-white font-semibold text-sm cursor-pointer space-x-6">
                            <NavLinksItems/>
                        </ul>
                    <a href="#contactme" className="hidden lg:block hover:scale-105 duration-300 hover:bg-purple-600 cursor-pointer text-white font-bold bg-[#522398] py-2 px-8 rounded-lg">Get in touch</a>
                </div>

                <div className="lg:hidden">
                    <p className="text-white">&lt;/&gt;</p>
                </div>
        </nav>
    );
}

export default NavBar;