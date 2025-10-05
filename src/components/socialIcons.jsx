import { Facebook, Github, Instagram, Linkedin } from "lucide-react";

const SocialIcons = ()=>{
    return(
        <div className="flex gap-4">
            <a href="https://github.com/MORESUCCESS" target="_blank" className="flex duration-300 items-center py-2 px-2 hover:bg-purple-800 hover:text-white cursor-pointer rounded-full text-purple-600 border-2 border-purple-600">
                <Github className="w-5 h-5"/>
            </a>
            <a href="https://www.facebook.com/share/17LTrVz2jG/?mibextid=wwXlfr" target="_blank" className="flex duration-300 items-center py-1.5 px-2 hover:bg-purple-800 hover:text-white cursor-pointer rounded-full text-purple-600 border-2 border-purple-600">
                <Facebook className="w-5 h-5"/>
            </a>
            <a href="https://www.instagram.com/ms2dwrld" target="_blank" className="flex duration-300 items-center py-1.5 px-2 hover:bg-purple-800 hover:text-white cursor-pointer rounded-full text-purple-600 border-2 border-purple-600">
                <Instagram className="w-5 h-5"/>
            </a>
            <a href="https://www.linkedin.com/in/hammed-omoniyi-omotosho-386758279" target="_blank" className="flex duration-300 items-center py-1.5 px-2 hover:bg-purple-800 hover:text-white cursor-pointer rounded-full text-purple-600 border-2 border-purple-600">
                <Linkedin className="w-5 h-5 "/>
            </a>
        </div>
    );
}

export default SocialIcons;