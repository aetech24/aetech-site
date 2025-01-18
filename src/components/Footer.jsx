import React from 'react';
import footer from '../assets/footer.png';
import logo from '../assets/footer-logo.png';
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagramSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex lg:h-[50%] h-[70vh] items-center justify-center w-full'>
      <img src={footer} className='bg-cover bg-center relative w-full h-full' />
      <div className='bg-black absolute w-full bg-opacity-20'></div>
      <div className='absolute w-full flex flex-col gap-16 lg:gap-44 justify-center items-center'>
        <div className='flex flex-col gap-2 items-center'>
          <h1 className='text-2xl md:text-3xl font-medium'>
            YOU DREAM, WE BUILD
          </h1>
          <p className='max-md:text-sm text-center lg:px-64'>
            At AeTech, we bring your vision and ideas to live through cutting
            edge technologies and innovation. You dream it, we build it -
            seemlessly transform ideas and impactful solutions.
          </p>
        </div>
        <div className='flex items-center flex-col lg:flex-row justify-between gap-6 lg:gap-20'>
          <img src={logo} alt='logo' className='w-72' />
          <div className='flex items-center max-md:gap-x-12 max-md:flex-wrap px-4 justify-center gap-6 max-md:text-sm'>
            <Link to='/'>
              <p className='hover:text-purple duration-300 ease-linear'>Home</p>
            </Link>
            <Link to='/about'>
              <p className='hover:text-purple duration-300 ease-linear'>
                About Us
              </p>
            </Link>
            <Link to='/service'>
              <p className='hover:text-purple duration-300 ease-linear'>
                Services
              </p>
            </Link>
            <Link to='/work'>
              <p className='hover:text-purple duration-300 ease-linear'>
                Our Work
              </p>
            </Link>
            {/* <Link to='/pricing'>
              <p className='hover:text-purple duration-300 ease-linear'>
                Pricing
              </p>
            </Link> */}
            <Link to='/contact'>
              <p className='hover:text-purple duration-300 ease-linear'>
                Contact Us
              </p>
            </Link>
          </div>
          <div className='flex items-center gap-4 text-3xl max-md:pt-6'>
            <Link to='https://www.linkedin.com/company/aetech-digital-hub/' target='_blank'>
              <FaLinkedin className='hover:text-purple duration-300 ease-linear cursor-pointer' />
            </Link>
            <Link to='#' target='_blank'>
              <FaTwitter className='hover:text-purple duration-300 ease-linear cursor-pointer' />
            </Link>
          <Link to='#' target='_blank'>
            <FaYoutube className='hover:text-purple duration-300 ease-linear cursor-pointer' />
          </Link>
          <Link to='https://www.instagram.com/aetech_hub/' target='_blank'>
            <FaInstagramSquare className='hover:text-purple duration-300 ease-linear cursor-pointer' />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
