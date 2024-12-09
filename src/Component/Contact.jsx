import React from 'react'
import aboutImg from "../assets/Image/IMG-3055.jpg";

function Contact() {
    return (
        <div className='w-[90%] my-8 mx-auto'>
            <div data-aos="fade-up" data-aos-duration="1000">
                <p className='text-main2 opacity-60 text-base w-full text-center'>CONTACT INFO</p>
                <h2 className='text-4xl md:text-6xl font-bold text-white font-outfit text-center'>Get In Touch</h2>
                <div className='w-[4px] h-[4vh] md:h-[6vh] bg-main2 justify-center items-center mx-auto my-4'></div>
            </div>

            <div className='md:flex w-full' data-aos="fade-up" data-aos-duration="2000">
                <div className='hidden lg:block w-1/2 p-16 ml-32  items-center my-auto'>
                    <div className='w-[60%] mx-auto h-full '>
                        <img src={aboutImg} alt="" className='drop-shadow-[12px_4px_6px_rgba(128,128,128,0.5)]' />

                    </div>
                </div>

                <div className='md:w-1/2 md:pr-16 mt-8'>
                    <div className='py-4'>
                        <h3 className='text-main2 text-lg md:text-xl  font-semibold'>MESSAGE</h3>
                        <h3 className='text-white text-xl md:text-2xl py-2 pb-4  font-semibold'>WRITE ME SOMETHING</h3>
                        <p className='text-sm md:text-lg text-main2 text-opacity-50 py-2  font-semibold'>CALL ME : <span className='text-main2 opacity-100'>076 7450489</span></p>
                        <p className='text-sm md:text-lg text-main2 text-opacity-50 py-2  font-semibold'>EMAIL : <span className='text-main2 opacity-100'>channamaduranga4@gmail.com</span></p>
                    </div>
                    <form action="">
                        <div className="gap-8 md:w-[90%]">
                            {/* Name and Email Fields */}
                            <div className="md:flex w-full gap-4  md:my-2">
                                <div className="w-full my-4 md:my-0">
                                    <input
                                        type="text"
                                        className="text-main2 bg-main2 bg-opacity-10 md:text-xl font-semibold rounded-md py-4 px-4 h-full w-full"
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="text"
                                        className="text-main2 bg-main2 bg-opacity-10 md:text-xl font-semibold rounded-md py-4 px-4 h-full w-full"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>

                            {/* Subject Field */}
                            <div className="flex w-full gap-4 my-4">
                                <div className="w-full">
                                    <input
                                        type="text"
                                        className="text-main2 bg-main2 bg-opacity-10 md:text-xl font-semibold rounded-md py-4 px-4 h-full w-full"
                                        placeholder="Subject"
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="flex w-full gap-4 my-4">
                                <textarea
                                    className="text-main2 bg-main2 bg-opacity-10 md:text-xl font-semibold rounded-md py-4 px-4 h-[200px] w-full resize-none"
                                    placeholder="Message"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="py-2 md:py-4 bg-main2 border-2 rounded-md w-[40%] my-8 mx-auto md:mx-0 hover:bg-black hover:border-main2 hover:text-main2">
                                <input
                                    type="submit"
                                    value="Send Message"
                                    className="text-black font-semibold  w-full justify-center items-center flex gap-2 cursor-pointer hover:text-main2"
                                />
                            </div>
                        </div>
                    </form>







                </div>

            </div>


        </div>
    )
}

export default Contact