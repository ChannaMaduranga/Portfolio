import React from 'react'
import aboutImg from "../assets/Image/IMG-3055.jpg";
import { FaDownload } from "react-icons/fa6";

function Biography() {

    const cv = "/cv.pdf";
    return (
        <div className='w-[90%]  mx-auto my-8 ' data-aos="fade-up" data-aos-duration="1000">
            <p className='text-main2 opacity-60 text-base w-full text-center'>BIOGRAPHY</p>
            <h2 className='text-4xl md:text-6xl font-bold text-white font-outfit text-center'>Who am I ?</h2>
            <div className='w-[4px] h-[4vh] md:h-[6vh] bg-main2 justify-center items-center mx-auto my-4'></div>

            <div className='md:flex w-full' data-aos="fade-up" data-aos-duration="1000">
                <div className='md:w-1/2 p-16 md:ml-32'>
                    <div className='md:w-[60%] mx-auto '>
                        <img src={aboutImg} alt="" className='drop-shadow-[4px_8px_2px_rgba(128,128,128,0.5)] md:drop-shadow-[12px_4px_6px_rgba(128,128,128,0.5)]' />

                    </div>
                </div>

                <div className='md:w-1/2 md:pr-16 mt-8'>
                    <h3 className='text-main2 text-2xl font-semibold text-center md:text-left'>About Me</h3>
                    <p className='text-sm md:text-base text-center md:text-left text-main2 opacity-70 py-8 md:pr-8'>I am a passionate Web Developer and a final-year Computer Science undergraduate at the University of Jaffna. With a strong foundation in modern web technologies, I specialize in creating responsive and dynamic web applications. I am proficient in React.js, Node.js, Tailwind CSS, and MySQL, enabling me to develop both intuitive front-end designs and efficient back-end solutions.</p>

                    <div className='md:flex gap-8 md:w-[90%] '>
                        <div className='bg-main2 bg-opacity-10  md:pr-8 rounded-md flex md:w-1/2 my-4 md:my-0 '>
                            <div className='bg-main2 h-full w-[2%]  left-0'></div>
                            <div className='px-4   w-full'>
                                <p className='text-white font-semibold text-xl pt-2 '>Name</p>
                                <p className='text-main2 opacity-60 font-medium pb-4 '>Channa Maduranga</p>
                            </div>
                        </div>
                        <div className='bg-main2 bg-opacity-10  md:pr-8 rounded-md flex md:w-1/2 my-4 md:my-0 '>
                            <div className='bg-main2 h-full w-[2%]  left-0'></div>
                            <div className='px-4   w-full'>
                                <p className='text-white font-semibold text-xl pt-2 '>Email</p>
                                <p className='text-main2 opacity-60 font-medium pb-4'>channmaduranga4@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className='md:flex gap-8 md:w-[90%] mt-4'>
                    <div className='bg-main2 bg-opacity-10  md:pr-8 rounded-md flex md:w-1/2 my-4 md:my-0 '>
                            <div className='bg-main2 h-full w-[2%]  left-0'></div>
                            <div className='px-4   w-full'>
                                <p className='text-white font-semibold text-xl pt-2 '>Address</p>
                                <p className='text-main2 opacity-60 font-medium pb-4 '>Matugama, Kalutara</p>
                            </div>
                        </div>
                        <div className='bg-main2 bg-opacity-10  md:pr-8 rounded-md flex md:w-1/2 my-4 md:my-0 '>
                            <div className='bg-main2 h-full w-[2%]  left-0'></div>
                            <div className='px-4   w-full'>
                                <p className='text-white font-semibold text-xl pt-2 '>Phone</p>
                                <p className='text-main2 opacity-60 font-medium pb-4 '>+94 76 7450489</p>
                            </div>
                        </div>
                    </div>

                    <div className='py-2 md:py-4 bg-main2 rounded-md w-[50%] md:w-[40%]  border-2 my-8 hover:bg-transparent hover:border-2 hover:border-main2  hover:text-main2  cursor-pointer mx-auto md:mx-0 '>
                        <a
                            href={cv}
                            download="Channa_Maduranga_CV.pdf" // downloaded file name
                            className='text-black text-center font-medium md:text-[20px] justify-center items-center flex gap-2 hover:text-main2'>
                            <FaDownload />
                            Download CV
                        </a>
                    </div>



                </div>

            </div>


        </div>
    )
}

export default Biography