import React from 'react'

function Hero() {
    return (
        <div className="flex px-[58px]  items-center h-screen">

            <div className="flex space-y-16 flex-col flex-1 w-1/2">
                <div className="flex flex-col">
                    <h1 className="text-7xl font-bold leading-[71.5px] py-4 bg-clip-text  text-transparent  bg-gradient-to-r from-[#653695] via-[#0F5BA2] to-[#0F5BA2]" >
                        Help  budding developers <br /> get the tools they need.
                    </h1>

                    <span className="text-2xl leading-8 w-3/4 mt-4">
                        We are building a <span className="text-[#653695]"> community</span> of people willing donate to the growth of budding developers across the globe.
                    </span>
                </div>

                <div className="flex items-center space-x-6">
                    <div className="rounded-3xl bg-[#653695] w-[224px] text-lg font-bold text-white text-center py-2">
                        <a href="/">Click here to Support</a>
                    </div>
                    <div className="rounded-3xl bg-gray-300 w-[224px] text-lg font-bold text-gray-800 text-center py-2">
                        <a href="/">Donate to a Developer</a>
                    </div>
                </div>
            </div>


            <div className="flex  w-1/2 flex-wrap justify-center items-center space-x-4">
                <div >
                    <img className="rounded-md h-[272px] w-[237px] mb-4" src="/assets/images/hero/1.png" alt="" />
                    <img className="rounded-md h-[272px] w-[237px]" src="/assets/images/hero/2.png" alt="" />
                </div>
                <img className="rounded-md h-[272px] w-[237px]" src="/assets/images/hero/3.png" alt="" />
            </div>
        </div>
    )
}

export default Hero
