import React, { useState } from 'react';
import logo from '../assets/biker_logo.jpg';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between w-full p-4 sm:p-6 md:p-8 bg-black text-white">

            <div className="hidden md:flex items-center space-x-20 ">
                <a href="#" className="text-white hover:text-gray-400 pl-10">Home</a>
                <a href="#" className="text-white hover:text-gray-400 ">About us</a>
            </div>

            <div className="flex items-center justify-center flex-grow">
                <img
                    src={logo}
                    alt="biker logo"
                    width={140}
                    height={60}
                    className="sm:w-[130px] sm:h-[40px]" />
            </div>

            <div className='hidden md:flex items-center space-x-20'>
                <a href="#" className="text-white hover:text-gray-400 ">Services</a>
                <a href="#" className="text-white hover:text-gray-400 pr-10">Contact</a>
            </div>

            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-gray-800 text-white p-4 md:hidden">
                    <div className="flex flex-col space-y-4">
                        <a href="#" className="hover:text-gray-300">Home</a>
                        <a href="#" className="hover:text-gray-300">About us</a>
                        <a href="#" className="hover:text-gray-300">Services</a>
                        <a href="#" className="hover:text-gray-300">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;