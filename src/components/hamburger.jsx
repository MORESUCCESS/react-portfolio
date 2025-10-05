import Hamburger from "hamburger-react";
import { useState } from "react";
import NavLinksItems from "./navLinksItems";


const HamburgerComponents = ()=>{
    const [open, setOpen] = useState(false)
    return(
        <div className="text-purple-600 text-xl lg:hidden">
            <Hamburger
                toggle={setOpen}
                toggled={open}
                size={35}
            />
            {
                open && 
                
                <div className="fixed w-[300px] h-screen right-0 top-0 bg-gray-900 border-l-2 border-l-gray-500 py-5 px-3 z-2000">
                    <div className="w-full flex items-center justify-end py-2">
                        <Hamburger
                            toggle={setOpen}
                            toggled={open}
                            size={35}
                            className="absolute top-0"
                        />
                    </div>
                    <div className="w-full h-full flex flex-col items-center py-22">
                        <h1 className="text-white text-xl mb-8">ms2dwrld<span className="text-xl text-purple-600">.</span></h1>
                        <div className="flex flex-col items-center space-y-4">
                            <NavLinksItems/>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
export default HamburgerComponents;