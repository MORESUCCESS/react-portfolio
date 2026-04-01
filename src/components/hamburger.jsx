import { FolderDotIcon, House, Info, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

const HamburgerComponents = ()=>{
    return(
        <motion.div className="text-[#522398] text-xl lg:hidden fixed w-full bottom-0 left-0 rounded-4xl z-100 backdrop-blur"
            initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.4 }}
                exit={{transition: { duration: 0.1 } }} 
        > 
                <div className="w-full py-4 px-3 z-50">
                    <div className="flex gap-2 items-center justify-around">
                        <a href="/" className="py-2 bg-black/30 px-4 rounded-xl"><House className="w-8 h-8"/></a>
                        <a href="#aboutme" className="bg-black/30 px-4 rounded-xl py-2"><Info className="w-8 h-8"/></a>
                        <a href="#projects" className="bg-black/30 px-4 rounded-xl py-2"><FolderDotIcon className="w-8 h-8"/></a>
                        <a href="#contactme" className="bg-black/30 px-4 rounded-xl py-2"><Megaphone className="w-8 h-8"/></a>
                    </div>
                </div>
        </motion.div>
    );
}
export default HamburgerComponents;