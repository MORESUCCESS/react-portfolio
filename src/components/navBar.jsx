
import { Link } from "react-router-dom";
import HamburgerComponents from "./hamburger";
import NavLinksItems from "./navLinksItems";

const NavBar = ()=>{
    return(
        <nav className="py-7 flex items-center justify-between w-full relative">
            <div>
                <h1 className="text-3xl text-white font-bold">ms2dwrld<span className="text-3xl text-purple-600">.</span></h1>
            </div>
                <div className="flex gap-6 items-center">
                        <ul className="lg:block hidden text-white font-semibold text-sm cursor-pointer space-x-6">
                            <NavLinksItems/>
                        </ul>
                    <Link to="/contact" className="hidden lg:block hover:scale-105 duration-300 hover:bg-purple-600 cursor-pointer text-white font-bold bg-purple-900 py-2 px-8 rounded-lg">Hire me</Link>
                    <HamburgerComponents/>
                </div>
        </nav>
    );
}

export default NavBar;