import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import mock1 from "../assets/Image/projects/mock1.png";
import mock2 from "../assets/Image/projects/mock2.png";

function WebProjects() {
    return (
        <div className=' w-full  font-poppins'>
            <div className='w-full md:p-16 md:flex md:h-[90vh]'>
                <div className='md:w-1/2 h-full bg-blue-200 bg-opacity-20 rounded-3xl  '>
                    <img src={mock1} alt="" className='w-[80%]  mx-auto' />

                </div>
                <div className='md:w-1/2 h-full justify-center items-center flex-col p-4 pt-8  md:p-16'>
                    <h2 className='text-main2 text-xl md:text-2xl font-semibold'>WEB PROJECTS</h2>
                    <h2 className='text-white text-2xl md:text-4xl font-semibold py-4'>Photography Portfolio Website</h2>
                    <p className='text-main2 opacity-60 text-sm md:text-base md:py-8'>This website was designed for a professional photographer to showcase their work and services. Built using React.js and styled with Tailwind CSS, it features a clean, responsive design. Integrated with EmailJS, the site allows seamless email communication for inquiries and bookings.</p>

                    <p className='text-white font-semibold pt-8 md:pt-2'>- Follow links -</p>
                    <p className='text-main2 text-sm md:text-lg flex gap-4 items-center py-2'><FaGithub /> <a href="https://github.com/ChannaMaduranga/channa-maduranga-photography-web">Photography Portfolio Github Repository</a> </p>
                    <p className='text-main2 text-sm md:text-lg flex gap-4 items-center'><FaEarthAmericas /> <a href="https://channamadurangaphotography.me">channamaduranga phatography.me</a> </p>
                </div>
            </div>

            <div className='w-full md:p-16 md:flex md:h-[90vh] mt-8 md:mt-2'>
                <div className='md:w-1/2 h-full bg-blue-200 bg-opacity-20 rounded-3xl  '>
                    <img src={mock2} alt="" className='w-[80%]  mx-auto' />

                </div>
                <div className='md:w-1/2 h-full justify-center items-center flex-col p-4 pt-8  md:p-16'>
                    <h2 className='text-main2 text-xl md:text-2xl font-semibold'>WEB PROJECTS</h2>
                    <h2 className='text-white text-2xl md:text-4xl font-semibold py-4'>Camera Rent Shop Web Site</h2>
                    <p className='text-main2 text-sm md:text-base opacity-60  md:py-8'>This platform enables users to explore and rent photography equipment with ease. Built with React.js and styled using Tailwind CSS for a modern, responsive frontend. The backend is powered by Node.js and MongoDB, ensuring efficient data management. Integrated with EmailJS for smooth email communication and booking confirmations.</p>

                    <p className='text-white font-semibold pt-8 md:pt-2'>- Follow links -</p>
                    <p className='text-main2 text-sm md:text-lg flex gap-4 items-center py-2'><FaGithub /> <a href="https://github.com/ChannaMaduranga/Camera-Rent-House">Camera rent Shop Github Repository</a> </p>
                    <p className='text-main2 text-sm md:text-lg flex gap-4 items-center'><FaEarthAmericas /> <a href="https://channamaduranga.github.io/Camera-Rent-House/">camera rent shop web site</a> </p>
                </div>
            </div>
        </div>
    )
}

export default WebProjects