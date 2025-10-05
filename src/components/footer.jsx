

const Footer = ()=>{
    return(
       <div className="flex flex-col items-center">
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:mt-10 gap-4 pb-10">
                <div className="flex items-center gap-1">
                    <h1 className="lg:text-6xl text-5xl font-bold text-gray-300">3</h1>
                    <div>
                        <p className="text-gray-300 lg:text-lg text-xs">Years of <br/> experience</p>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <h1 className="lg:text-6xl text-5xl font-bold text-gray-300">10</h1>
                    <div>
                        <p className="text-gray-300 lg:text-lg text-xs">Projects <br/> completed</p>
                    </div>
                </div>

             <div className="flex items-center gap-1">
                <h1 className="lg:text-6xl text-5xl font-bold text-gray-300">6</h1>
                <div>
                    <p className="text-gray-300 lg:text-lg text-xs">Technologies <br/> mastered</p>
                </div>
            </div>

             <div className="flex items-center gap-1">
                <h1 className="lg:text-6xl text-5xl font-bold text-gray-300">115</h1>
                <div>
                    <p className="text-gray-300 lg:text-lg text-xs">Code <br/> commits</p>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Footer;