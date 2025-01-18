import React from "react";
import { work } from "../constants";
import ProjectCard from "../components/ProjectCard";
import workImg from '../assets/work.png'
import { Link } from 'react-router-dom';
// import { IoIosArrowDown } from 'react-icons/io';
import { BsArrowUpRight } from 'react-icons/bs';
import ScrollToTop from '../components/ScrollToTop';

const Work = () => {
  return (
    <div className="w-full">
        <div className='lg:h-[90vh] max-[340px]:h-[60vh] max-sm:h-[50vh] md:h-[80vh] flex  items-center w-full px-4 lg:px-24 bg-[#BA97D10D] justify-between'>
        <div className='flex flex-col items-center lg:items-start lg:w-[554px] h-[201px] t-[381px] l-[132px] gap-[15px]'>
          <h2 className='font-Montserrat font-normal text-3xl lg:text-[44px] lg:leading-[52px] lg:w-[444px] max-md:text-center lg:flex-wrap mb-[15px]'>
            Our Creations, Your Inspiration
          </h2>
          <p className='max-md:text-center'>Explore the projects that define innovation and excellence.</p>
          <div className='flex items-center gap-6'>
            <div className='flex text-white lg:text-xl justify-center items-center bg-gradient-to-r from-pink to-purple hover:bg-gradient-to-l hover:from-pink hover:to-purple rounded-3xl hover:scale-105 duration-500 ease-linear transition-all'>
              <Link
                to='/contact'
                className='py-1 lg:py-2 px-2 lg:px-4 flex items-center gap-2'
              >
                View Portfolio
                <BsArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            src={workImg}
            alt='ReadyToWork'
            className='w-[580px] h-[450.1px] max-md:hidden'
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 px-4 lg:px-24 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Portfolio</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Explore our diverse range of projects that demonstrate our expertise, 
            creativity, and commitment to delivering exceptional solutions.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {work.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Work;