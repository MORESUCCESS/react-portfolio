import { Mail } from "lucide-react";


const Footer = ()=>{
    return(
       <div className="bg-black/80 py-10 font-mono">
            <div className="mx-auto w-9/11">
                <div className="grid lg:grid-cols-2">
                    <div className="flex items-start flex-col space-y-2 pb-4 border-b-white/60 w-fit">
                        <h1 className="lg:text-3xl text-white font-bold">ms2dwrld<span className="text-3xl text-purple-600">.</span></h1>
                        <p className="text-white/70">Helping business brands build websites that converts.</p>
                    </div>
                    
                    <div className="flex items-start flex-col space-y-2 pb-4 border-b-white/60 w-fit">
                        <h1 className="lg:text-3xl text-white font-bold">Get in touch today!</h1>
                        <p className="text-white/70 flex gap-2"><Mail/>ms2dwrld@gmail.com</p>
                    </div>
                </div>

            <div className="text-white/70 py-4 text-center mb-10 border-t-1 mt-5">
                <p className="text-sm">&copy; 2026 ms2dwrld (Hammed Omoniyi)</p>
            </div>
            </div>
       </div>
    );
}

export default Footer;