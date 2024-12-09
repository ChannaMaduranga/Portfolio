import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`w-full z-50 fixed top-0 left-0 flex items-center justify-between h-16 px-6 md:px-24 py-4 md:py-12 font-poppins transition-all duration-300 ${
        isScrolled ? 'bg-main2 text-black' : 'bg-transparent text-main2'
      }`}
    >
      
      <div className="text-2xl font-bold">Portfolio</div>

      {/* Menu Icon  Mobile */}
      <div
        className={`md:hidden text-3xl cursor-pointer transition-colors duration-300 ${
          isScrolled ? 'text-black' : 'text-main2'
        }`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? <IoClose /> : <TiThMenu />}
      </div>

      {/* Navigation Links */}
      <div
        className={`absolute top-16 left-0 w-full bg-main2  md:bg-transparent md:relative md:top-0 md:flex md:items-center md:justify-between md:w-auto md:space-x-6 transition-all duration-300 ${
          isMenuOpen ? 'block text-black bg-main2' : 'hidden md:flex'
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-center py-4 md:py-0">
          <li>
            <Link
              to="biography"
              smooth={true}
              duration={500}
              className="relative hover:text-black cursor-pointer group"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              About me
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:h-0.5"></span>
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="relative hover:text-black cursor-pointer group"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:h-0.5"></span>
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="relative hover:text-black cursor-pointer group"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:h-0.5"></span>
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="relative hover:text-black cursor-pointer group"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full group-hover:h-0.5"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
