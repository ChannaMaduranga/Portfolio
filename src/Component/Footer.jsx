import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-main2 text-black w-full md:h-[10vh] py-4 md:py-0 items-center md:flex '>
        <div className='w-full md:w-1/2  '>
        <div className='text-sm justify-center md:justify-start w-full md:text-lg  md:text-left px-8 h-full items-center flex '>Copyright 2024 All Right Reserved </div>
        </div>

        <div className='w-full md:w-1/2 flex gap-2 text-lg text-black justify-center md:justify-end px-16 py-1
        '>
        <FaWhatsapp/>
        <FaInstagram/>
        <FaFacebook/>
        <FaLinkedin/>
        </div>
        
        
        
    </div>
  )
}

export default Footer