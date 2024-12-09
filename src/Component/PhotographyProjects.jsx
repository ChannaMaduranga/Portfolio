import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import Img1 from "../assets/Image/projects/0.jpg";
import Img2 from "../assets/Image/projects/1.jpg";
import Img3 from "../assets/Image/projects/2.jpg";
import Img4 from "../assets/Image/projects/3.jpg";
import Img5 from "../assets/Image/projects/4.jpg";
import Img6 from "../assets/Image/projects/5.jpg";
import Img7 from "../assets/Image/projects/6.jpg";
import Img8 from "../assets/Image/projects/7.jpg";
import Img9 from "../assets/Image/projects/9.jpg";
import Img10 from "../assets/Image/projects/10.jpg";
import Img11 from "../assets/Image/projects/11.jpg";
import Img12 from "../assets/Image/projects/12.jpg";

function PhotographyProjects() {
    return (
        <div className=' w-full  font-poppins'>
            <div className='w-full md:p-16 md:flex h-auto md:h-[90vh]'>
                <div className='md:w-1/2 h-[50vh] md:h-full bg-gray-200 bg-opacity-20 rounded-xl md:rounded-3xl p-2 md:p-8'>
                    <div className='grid grid-cols-2 gap-2 h-full w-full'>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img src={Img4} alt="Live In Concert 1" className="object-cover w-full h-full" />
                        </div>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img src={Img2} alt="Live In Concert 2" className="object-cover w-full h-full" />
                        </div>
                        <div className='overflow-hidden w-full h-full] rounded-lg'>
                            <img src={Img1} alt="Live In Concert 3" className="object-cover w-full h-full" />
                        </div>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img src={Img3} alt="Live In Concert 4" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 md:h-full justify-center items-center flex-col mt-4 md:p-16'>
                    <h2 className='text-main2 text-xl md:text-2xl font-semibold'>Photography Projects</h2>
                    <h2 className='text-white text-2xl md:text-4xl font-semibold py-2 md:py-4'>Live In Concert</h2>
                    <p className='text-main2 opacity-60 text-sm md:text-base md:py-8'>An electrifying night organized by the students of the University of Jaffna. I captured dynamic shots of artists performing on stage and the enthusiastic audience, preserving the energy and excitement of this unforgettable event.</p>

                    <p className='text-white font-semibold py-4'>- Follow link -</p>

                    <p className='text-main2 md:text-lg flex gap-2 md:gap-4 text-sm items-center'><FaEarthAmericas /> <a href="https://www.facebook.com/share/p/1WS4wM32MY/">Camiliya Live in Concert 24</a> </p>
                </div>
            </div>
            {/* second one */}
            <div className='w-full md:p-16 md:flex h-auto mt-12 md:mt-0 md:h-[90vh]'>
                <div className='md:w-1/2 h-[50vh] md:h-full bg-gray-200 bg-opacity-20 rounded-xl md:rounded-3xl p-2 md:p-8'>
                    <div className='grid grid-cols-2 gap-2 h-full w-full'>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img src={Img6} alt="Live In Concert 1" className="object-cover w-full h-full" />
                        </div>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img src={Img5} alt="Live In Concert 2" className="object-cover w-full h-full" />
                        </div>
                        <div className='overflow-hidden w-full h-full] rounded-lg'>
                            <img src={Img8} alt="Live In Concert 3" className="object-cover w-full h-full" />
                        </div>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img src={Img7} alt="Live In Concert 4" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 md:h-full justify-center items-center flex-col mt-4 md:p-16'>

                    <h2 className='text-main2 text-xl md:text-2xl font-semibold'>Photography Projects</h2>
                    <h2 className='text-white text-2xl md:text-4xl font-semibold py-2 md:py-4'>Batch Photo Day </h2>
                    <p className='text-main2 opacity-60 text-sm md:text-base md:py-8'>A vibrant and unforgettable photo day for the university batch, filled with smiles and cherished moments. I captured group portraits, candid interactions, and the joyous spirit of friends celebrating their journey together.</p>
                    <p className='text-white font-semibold py-4'>- Follow link -</p>

                    <p className='text-main2 md:text-lg flex gap-2 md:gap-4 text-sm items-center'><FaEarthAmericas /> <a href="https://www.facebook.com/share/p/1B7CogJvez/">Batch photo Day 24</a> </p>
                </div>
            </div>

            {/* 3rd one */}
            <div className='w-full md:p-16 md:flex h-auto mt-12 md:mt-0 md:h-[90vh]'>
                <div className='md:w-1/2 h-[50vh] md:h-full bg-gray-200 bg-opacity-20 rounded-xl md:rounded-3xl p-2 md:p-8'>
                    <div className='grid grid-cols-2 gap-2 h-full w-full'>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img src={Img12} alt="Live In Concert 1" className="object-cover w-full h-full" />
                        </div>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img src={Img11} alt="Live In Concert 2" className="object-cover w-full h-full" />
                        </div>
                        <div className='overflow-hidden w-full h-full] rounded-lg'>
                            <img src={Img9} alt="Live In Concert 3" className="object-cover w-full h-full" />
                        </div>
                        <div className='overflow-hidden w-full h-full rounded-lg'>
                            <img src={Img10} alt="Live In Concert 4" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>

                <div className='md:w-1/2 md:h-full justify-center items-center flex-col mt-4 md:p-16'>
                    <h2 className='text-main2 text-xl md:text-2xl font-semibold'>Photography Projects</h2>
                    <h2 className='text-white text-2xl md:text-4xl font-semibold py-2 md:py-4'>Wedding Photography </h2>
                    <p className='text-main2 opacity-60 text-sm md:text-base md:py-8'>A magical day filled with love and joy, capturing the beautiful moments of a couple’s special journey. From heartfelt ceremonies to candid emotions, I preserved every detail and memory of this unforgettable wedding celebration.</p>

                    <p className='text-white font-semibold py-4'>- Follow link -</p>

                    <p className='text-main2 md:text-lg flex gap-2 md:gap-4 text-sm items-center'><FaEarthAmericas /> <a href="https://www.facebook.com/share/p/1CzeGirpJA/">Wedding Highlights</a> </p>
                </div>
            </div>
        </div>
    )
}

export default PhotographyProjects