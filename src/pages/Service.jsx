import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../constants';
// import { LuGraduationCap } from 'react-icons/lu';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsArrowUpRight } from 'react-icons/bs';
import ServiceImage from '../assets/ServiceImg.jpg';
import WebDevImage from '../assets/WebDevImage.jpg';
const Service = () => {

    const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpand = (id) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className=''>
      {/* Hero Section */}
      <div className='lg:h-[90vh] max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[80vh] flex flex-col lg:flex-row items-center w-full bg-radial-gradient justify-between lg:px-24 px-6 py-8 gap-8'>
        <div className='flex flex-col items-start justify-center text-start lg:w-[554px] w-full min-h-screen gap-[15px] py-20'>
          <h2 className='font-Montserrat font-normal lg:text-[56px] text-[40px] leading-[1.2] lg:w-[444px] w-full'>
            Our Services
          </h2>
          <p className='lg:w-[528px] w-full'>
            We offer and solve problems across various fields of tech. Find
            below some of our services and advanced tech to improve the
            efficiency of work done.
          </p>
        </div>
        <div>
          <img
            src={ServiceImage}
            alt='Service'
            className='lg:w-[580px] w-full lg:h-[450.1px] h-auto object-cover rounded-2xl'
          />
        </div>
      </div>

      {/* Services Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-20 px-4 py-8 lg:py-20'>
        {services.map((item, id) => (
          <div
            key={id}
            className='px-4 py-6 border-[1px] border-[#232323] transition-all duration-200 ease-in-out delay-200 hover:border-none hover:bg-pink hover:bg-opacity-5 hover:shadow-md hover:duration-200 rounded-2xl flex flex-col gap-4 cursor-pointer'
          >
            <div className='p-2 text-4xl rounded-xl bg-pink text-white w-fit'>
              {item.icon}
            </div>
            <h1 className='text-xl font-medium'>{item.title}</h1>
            <ol className='list-none space-y-2'>
              {item.skills
                .slice(0, expandedItems[id] ? undefined : 2)
                .map((skill, skillId) => (
                  <li key={skillId} className='text-sm flex items-start gap-2'>
                    <span className='text-purple mt-1'>•</span>
                    <span>{skill}</span>
                  </li>
                ))}
            </ol>
            {item.skills.length > 2 && (
              <button
                onClick={() => toggleExpand(id)}
                className='text-purple text-sm flex items-center gap-1 hover:text-pink transition-colors duration-300'
              >
                {expandedItems[id] ? (
                  <>
                    Hide <IoIosArrowUp className='text-lg' />
                  </>
                ) : (
                  <>
                    Read More <IoIosArrowDown className='text-lg' />
                  </>
                )}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className='lg:h-[90vh] max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[80vh] flex flex-col lg:flex-row items-center w-full lg:px-24 px-6 py-8 bg-[#BA97D10D] justify-between gap-8'>
        <div className='flex flex-col items-start lg:w-[554px] w-full gap-[15px]'>
          <h2 className='font-Montserrat font-normal lg:text-[44px] text-[32px] leading-[1.2] lg:w-[444px] w-full mb-[15px]'>
            Ready to start your next project?
          </h2>
          <div className='flex flex-col sm:flex-row items-center gap-6'>
            <div className='flex w-full sm:w-auto text-white lg:text-xl text-base justify-center items-center bg-gradient-to-r from-pink to-purple hover:bg-gradient-to-l hover:from-pink hover:to-purple rounded-3xl hover:scale-105 duration-500 ease-linear transition-all'>
              <Link
                to='/contact'
                className='py-1 lg:py-2 px-2 lg:px-4 flex items-center gap-2 w-full justify-center sm:justify-start'
              >
                Contact Us
                <BsArrowUpRight />
              </Link>
            </div>
            <div className='flex w-full sm:w-auto text-purple lg:text-xl text-base justify-center items-center rounded-3xl border border-purple hover:scale-105 duration-500 ease-linear'>
              <Link
                to='/pricing#'
                className='py-1 lg:py-2 px-2 lg:px-4 flex items-center gap-2 w-full justify-center sm:justify-start'
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img
            src={WebDevImage}
            alt='ReadyToWork'
            className='lg:w-[580px] w-full lg:h-[450.1px] h-auto object-cover rounded-2xl'
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
