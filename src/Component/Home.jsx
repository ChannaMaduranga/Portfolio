import React from 'react'
import dpImg from "../assets/Image/IMG portfolio.png"
import { FaDownload } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-scroll';

import Biography from './Biography';
import Service from './Service';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { FaArrowUp } from "react-icons/fa";


function Home() {
  const cv = "/cv.pdf";

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };
  return (
    <div className="h-full w-full bg-black">
      <div className="h-full w-[90vw] mx-auto bg-main1  md:flex">

        {/* left section */}
        <div className='md:w-1/3 md:h-[100vh] pt-[10vh] md:pt-0  justify-center flex flex-col ' data-aos="fade-up" data-aos-duration="1000">
          <h2 className='text-6xl md:text-8xl text-white font-bold'>
            Hello<span className='text-main2'>.</span>
          </h2>
          <div className='flex items-center  '>
            <div className='bg-main2 h-2 w-[6vw] flex items-center justify-center '></div>
            <h3 className='text-main2 text-2xl px-[1vw]'>I'am Channa Maduranga</h3>
          </div>
          <div className='md:py-8 py-4'>
            <h3 className='text-white text-base md:text-2xl font-semibold'>WEB DEVELOPER | PHOTOGRAPHER</h3>
          </div>


          <div className='hidden md:block py-4 bg-main2 border-2 text-black border-main2 rounded-md w-[50%] z-10 hover:bg-transparent hover:border-2 hover:border-main2  hover:text-main2  cursor-pointer'>
            <a
              href={cv}
              download="Channa_Maduranga_CV.pdf" // downloaded file name
              className='text-black text-center font-medium text-[20px] justify-center items-center flex gap-2 hover:text-main2  '>
              <FaDownload />
              Download CV
            </a>
          </div>
        </div>

        {/* middle section */}

        <div className='md:w-1/3'>

          {/* mobile view */}
          <div className='md:hidden md:w-1/3 h-auto   justify-center flex flex-col mx-auto ' data-aos="fade-up" data-aos-duration="1000">
            <div className='flex items-center justify-center '>
              <h3 className='w-full  text-main2 text-sm text-clip opacity-60 font-medium'>I am a Web Developer. My expertise is in crafting responsive and dynamic web applications. I focus on building user-friendly interfaces and seamless functionality to meet business objectives effectively.</h3>
            </div>
            <div className='w-full mt-2 mx-auto'>
              <Link
                to="contact"
                smooth={true}
                duration={500}>
                <h3 className='text-main2 text-xl font-semibold flex gap-4 items-center'>Let's Talk <span className='text-2xl'><FaArrowRightLong /></span></h3></Link>
            </div>
          </div>

          {/* mobile view about description end */}


          <div className="w-[70%] bg-main2 md:h-[100vh] h-[49vh] flex justify-center mx-auto mt-8 md:mt-0">
          </div>

          <div className="absolute bottom-0 left-0 w-full  overflow-hidden object-contain flex justify-center">
            <img
              src={dpImg}
              alt=""
              className=" w-[150vw] h-[54vh] md:w-[50%] md:h-auto  object-cover"
            />
          </div>
        </div>

        {/* right section */}
        <div className='hidden md:flex md:w-1/3 h-[100vh]  justify-center  flex-col mx-auto ' data-aos="fade-up" data-aos-duration="1000">

          <div className='flex items-center justify-center '>

            <h3 className='w-[80%]  text-main2 text-lg text-clip opacity-60 font-medium'>I am a Web Developer. My expertise is in crafting responsive and dynamic web applications. I focus on building user-friendly interfaces and seamless functionality to meet business objectives effectively.</h3>

          </div>
          <div className='w-[80%] mt-8 mx-auto'>
            <Link
              to="contact"
              smooth={true}
              duration={500}>
              <h3 className='text-main2 text-3xl font-semibold flex gap-4 items-center'>Let's Talk <span className='text-5xl'><FaArrowRightLong /></span></h3></Link>
          </div>
        </div>

        <div className=' absolute mx-auto w-[90%] bottom-0 h-[40vh] bg-gradient-to-t from-black to-transparent'></div>


      </div>

      <div className='mt-[5vh] w-full h-[10vh] bg-main2'>
      </div>

      {/* biography section */}
      <div id="biography" className="mt-[5vh]">
        <Biography />
      </div>

      {/* service section */}
      <div id="services" className="mt-[5vh]">
        <Service />
      </div>

      {/* projects section */}
      <div id="portfolio" className="mt-[5vh]">
        <Projects />
      </div>

      {/* contact section */}
      <div id="contact" className="mt-[5vh]">
        <Contact />
      </div>

      {/* footer */}
      <div className="mt-[5vh]">
        <Footer />
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-main2 text-gray-700 p-3 rounded-full shadow-lg hover:opacity-80">
        <FaArrowUp size={24} />
      </button>
    </div>

  )
}

export default Home