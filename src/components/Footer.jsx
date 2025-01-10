import React from 'react'
import footer from '../assets/footer.png'
import logo from '../assets/footer-logo.png'
import { FaLinkedin, FaTwitter, FaYoutube, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex lg:h-[60%] h-[70vh] items-center justify-center w-full">
        <img src={footer} className="bg-cover bg-center relative w-full h-full" />
        <div className='bg-black absolute w-full bg-opacity-20'></div>
        <div className="absolute w-full flex flex-col gap-16 lg:gap-44 justify-center items-center">
            <div className="flex flex-col gap-2 items-center">
                <h1 className="text-2xl md:text-3xl font-medium">YOU DREAM, WE BUILD</h1>
                <p className="max-md:text-sm text-center lg:px-72">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita illo odit, distinctio vitae voluptates amet harum at labore consequuntur explicabo voluptas repellendus commodi, consectetur dicta saepe nam fugit id et possimus.</p>
            </div>
            <div className="flex items-center flex-col lg:flex-row justify-between gap-6 lg:gap-20">
                <img src={logo} alt="logo" className='w-72'/>
                <div className="flex items-center gap-6 max-md:text-sm">
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Our Work</p>
                    <p>Contact Us</p>
                </div>
                <div className='flex items-center gap-4 text-3xl'>
                    <FaLinkedin className='hover:text-purple duration-300 ease-linear cursor-pointer' />
                    <FaTwitter className='hover:text-purple duration-300 ease-linear cursor-pointer' />
                    <FaYoutube className='hover:text-purple duration-300 ease-linear cursor-pointer' />
                    <FaFacebookSquare className='hover:text-purple duration-300 ease-linear cursor-pointer' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer