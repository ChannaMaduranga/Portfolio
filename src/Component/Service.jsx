import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Service() {
    return (
        <div className='w-[90%] my-16 md:my-8 mx-auto'>
            <div>
                <p className='text-main2 opacity-60 text-base w-full text-center'>SERVICES</p>
                <h2 className='text-4xl md:text-6xl font-bold text-white font-outfit text-center'>What I Do ?</h2>
                <div className='w-[4px] h-[4vh] md:h-[6vh] bg-main2 justify-center items-center mx-auto my-4'></div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-[80%] my-8 mx-auto' data-aos="fade-up" data-aos-duration="1000">

                {/* first one */}
                <div className='bg-[#22211e] rounded-lg border-2 border-main2 p-8 relative group overflow-hidden'>
                    <div className="absolute inset-0 bg-main2 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></div>

                    <div className='relative z-10'>
                        <h2 className='text-6xl text-white opacity-20 font-bold group-hover:text-black transition-colors duration-500'>01.</h2>
                        <h2 className='text-3xl text-white font-bold py-4 group-hover:text-black transition-colors duration-500'>MERN Stack Development</h2>
                        <p className='text-lg text-main2 opacity-60 py-4 group-hover:text-black transition-colors duration-500'>
                            I build dynamic and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). From front-end to back-end, I ensure seamless integration and efficient performance.
                        </p>

                        <div className='w-[25%] bg-main2 h-2 my-4 rounded-md group-hover:bg-black transition-colors duration-500'></div>
                    </div>
                </div>

                {/* second one */}
                <div className="group relative bg-[#22211e] rounded-lg border-2 border-main2 p-8 overflow-hidden">
                    <div className="absolute inset-0 bg-main2 scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>
                    <div className="relative z-10">
                        <h2 className="text-6xl text-white opacity-20 font-bold group-hover:text-black transition-colors duration-300 ease-in-out">02.</h2>
                        <h2 className="text-3xl text-white font-bold py-4 group-hover:text-black transition-colors duration-300 ease-in-out">
                            Frontend Development
                        </h2>
                        <p className="text-lg text-main2 opacity-60 py-4 group-hover:text-black transition-colors duration-300 ease-in-out">
                            I create responsive and visually appealing user interfaces using React.js, Tailwind CSS, and animations. My focus is on delivering seamless and engaging web experiences.
                        </p>
                        <div className="w-[25%] bg-main2 h-2 my-4 rounded-md group-hover:bg-black transition-colors duration-300"></div>
                    </div>
                </div>


                {/* 3rd one */}
                <div className="group relative bg-[#22211e] rounded-lg border-2 border-main2 p-8 overflow-hidden">
                    <div className="absolute inset-0 bg-main2 scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>
                    <div className="relative z-10">
                        <h2 className="text-6xl text-white opacity-20 font-bold group-hover:text-black transition-colors duration-300 ease-in-out">03.</h2>
                        <h2 className="text-3xl text-white font-bold py-4 group-hover:text-black transition-colors duration-300 ease-in-out">
                            Professional Photography
                        </h2>
                        <p className="text-lg text-main2 opacity-60 py-4 group-hover:text-black transition-colors duration-300 ease-in-out">
                            I capture timeless moments for weddings, graduations, and any special event. My goal is to preserve your cherished memories with creativity and professionalism.
                        </p>
                        <div className="w-[25%] bg-main2 h-2 my-4 rounded-md group-hover:bg-black transition-colors duration-300"></div>
                    </div>
                </div>

            </div>

            <div className='mx-auto w-full flex justify-center'>
                <p className='text-main2 text-6xl flex gap-4'>
                    <HiOutlineArrowNarrowRight className='transform rotate-180' />
                    <HiOutlineArrowNarrowRight />
                </p>
            </div>
        </div>
    )
}

export default Service