import React, { useState } from 'react'
import WebProjects from './WebProjects';
import PhotographyProjects from './PhotographyProjects';
import MobileApp from './MobileApp';



function Projects() {

    const [active, setActive] = useState('web'); // Set default active button

    const renderContent = () => {
        switch (active) {
            case 'web':
                return <div><WebProjects /></div>;
            case 'photography':
                return <div><PhotographyProjects /></div>;
            case 'mobile':
                return <div><MobileApp /></div>;
            default:
                return null;
        }
    };
    return (
        <div className='bg-[#22211e] w-full rounded-t-[50px] md:rounded-t-[150px] md:p-16 p-4'>
            <div data-aos="fade-up" data-aos-duration="1000">
                <p className='text-main2 opacity-60 text-base w-full text-center'>PORTFOLIO</p>
                <h2 className='text-4xl md:text-6xl font-bold text-white font-outfit text-center'>Latest Projects</h2>
                <div className='w-[4px] h-[4vh] md:h-[6vh] bg-main2 justify-center items-center mx-auto my-4'></div>
            </div>
            <div className='w-full md:w-[50%] mx-auto px-2 py-2   md:h-[10vh] border-2 border-main2 rounded-full items-center flex border-opacity-40 font-poppins' data-aos="fade-up" data-aos-duration="1000">
                <div
                    className={`w-auto mx-auto p-2 md:h-[8vh] ${active === 'web' ? 'bg-main2 text-black' : 'text-main2'
                        }  rounded-full justify-center px-8 flex items-center font-semibold text-center text-sm md:text-xl cursor-pointer`}
                    onClick={() => setActive('web')}
                >
                    Web Projects
                </div>
                <div
                    className={`w-auto mx-auto p-2 md:h-[8vh]  ${active === 'photography' ? 'bg-main2 text-black' : 'text-main2'
                        }  rounded-full justify-center px-8 flex items-center font-semibold text-center text-sm md:text-xl cursor-pointer`}
                    onClick={() => setActive('photography')}
                >
                    Photography Projects
                </div>
                <div
                    className={`w-auto  p-2 md:h-[8vh]   ${active === 'mobile' ? 'bg-main2 text-black' : 'text-main2'
                        }  rounded-full justify-center px-8 flex items-center font-semibold text-center text-sm md:text-xl cursor-pointer`}
                    onClick={() => setActive('mobile')}
                >
                    Mobile Apps
                </div>
            </div>

            {/* Content Section */}
            <div className='mt-8' data-aos="fade-up" data-aos-duration="1000">{renderContent()}</div>

        </div>
    )
}

export default Projects