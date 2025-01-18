import React from 'react'
import { useState } from 'react'
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { BsArrowUpRight } from "react-icons/bs";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center flex-shrink-0">
                    <img src={logo} alt="" className='w-16 mr-1'/>
                </Link>
                <ul className="hidden lg:flex ml-14 space-x-12 font-medium text-lg">
                    <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in'><Link to="/">Home</Link></li>
                    <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in'><Link to="/about">About Us</Link></li>
                    {/* <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in'><Link to="/pricing">Pricing</Link></li> */}
                    <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in'><Link to="/service">Service</Link></li>
                    <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in'><Link to="/work">Our Works</Link></li>
                </ul>
                <div onClick={toggleNavbar} className="hidden lg:flex text-white text-xl justify-center items-center bg-gradient-to-r from-pink to-purple hover:bg-gradient-to-l hover:from-pink hover:to-purple rounded-3xl hover:scale-110 duration-500 ease-linear">
                    <Link to="/contact" className='py-2 px-4 flex items-center gap-2'>
                    Contact Us
                    <BsArrowUpRight />
                    </Link>
                </div>
                <div className="lg:hidden md:flex md:flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <AiOutlineClose className='text-2xl font-bold' /> : <CgMenu className='text-2xl font-bold' />}

                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden bg-purple text-white bg-opacity-70">
                    <ul className='font-semibold text-lg'>
                        <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in py-3 text-center'><Link to="/">Home</Link></li> <hr className='w-60'/>
                        <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in py-3 text-center'><Link to="/about">About Us</Link></li> <hr className='w-60'/>
                        {/* <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in py-3 text-center'><Link to="/pricing">Pricing</Link></li> <hr className='w-60'/> */}
                        <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in py-3 text-center'><Link to="/service">Services</Link></li> <hr className='w-60'/>
                        <li onClick={toggleNavbar} className='hover:text-purple duration-300 ease-in py-3 text-center'><Link to="/work">Our Work</Link></li> <hr className='w-60'/>
                    </ul>
                    <div onClick={toggleNavbar} className=" my-10 flex lg:hidden text-white text-xl justify-center items-center bg-gradient-to-r from-pink to-purple rounded-3xl hover:scale-110 duration-500 ease-linear">
                    <Link to="/contact" className='md:py-2 py-1 px-2 md:px-4 flex items-center gap-2'>
                    Contact Us
                    <BsArrowUpRight />
                    </Link>
                </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar