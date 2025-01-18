import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../constants';
import { LuGraduationCap } from 'react-icons/lu';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BsArrowUpRight } from 'react-icons/bs';
import ServiceImage from '../assets/ServiceImg.jpg';
import WebDevImage from '../assets/WebDevImage.jpg';


const Service = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className='w-full'>
      <div className='lg:h-[90vh] max-[340px]:h-[90vh] max-sm:h-[70vh] md:h-[80vh] flex items-center w-full bg-radial-gradient justify-between px-4 lg:px-24'>
        <div className='flex flex-col items-start lg:w-[554px] h-[201px] t-[381px] l-[132px] gap-[15px]'>
          <h2 className='font-Montserrat font-normal text-3xl lg:text-[56px] leading-[52px] w-[444px] lg:flex-wrap max-md:text-center'>
            Our Services
          </h2>
          <p className='lg:w-[528px] flex-wrap'>
            We offer and solve problems across various fields of tech. Find
            below some of our services and advanced tech and improve the
            efficiency of work done.
          </p>
        </div>
        <div >
          <img
            src={ServiceImage}
            alt='ServiceImage'
            className='w-[580px] h-[450.1px] max-md:hidden'
            />
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-20 px-4 py-8 lg:py-20'>
        {services.map((item, id) => {
          return (
            <div
              key={id}
              className='px-4 py-6 border border-black hover:border-none transition-colors duration-300 ease-in-out rounded-2xl flex flex-col gap-4 cursor-mouse hover:bg-pink hover:bg-opacity-5 hover:shadow-md'
            >
              <div className='p-2 text-4xl rounded-xl bg-pink text-white w-fit'>
                <LuGraduationCap />
              </div>
              <h1 className='text-xl font-medium'>{item.title}</h1>
              <ol className='list-none space-y-2'>
                {item.skills
                  .slice(0, expandedItems[id] ? undefined : 2)
                  .map((skill, skillId) => (
                    <li
                      key={skillId}
                      className='text-sm flex items-start gap-2'
                    >
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
          );
        })}
      </div>
      {/* CTA */}
      <div className='lg:h-[90vh] max-[340px]:h-[60vh] max-sm:h-[50vh] md:h-[80vh] flex items-center w-full px-4 lg:px-24 bg-[#BA97D10D] justify-between'>
        <div className='flex flex-col items-start w-[554px] h-[201px] t-[381px] l-[132px] gap-[15px] flex-wrap'>
          <h2 className='font-Montserrat font-normal text-3xl lg:text-[44px] leading-[52px] w-[444px] flex-wrap mb-[15px]'>
            Ready to start your next project?
          </h2>
          <div className='flex items-center gap-6'>
            <div className='flex text-white lg:text-xl justify-center items-center bg-gradient-to-r from-pink to-purple hover:bg-gradient-to-l hover:from-pink hover:to-purple rounded-3xl hover:scale-105 duration-500 ease-linear transition-all'>
              <Link
                to='/contact'
                className='py-1 lg:py-2 px-2 lg:px-4 flex items-center gap-2'
              >
                Contact Us
                <BsArrowUpRight />
              </Link>
            </div>
            <div className='flex text-purple lg:text-xl justify-center items-center rounded-3xl border border-purple hover:scale-105 duration-500 ease-linear'>
              <Link
                to='/pricing#'
                className='py-1 lg:py-2 px-2 lg:px-4 flex items-center gap-2'
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
            className='w-[580px] h-[450.1px] max-md:hidden'
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Service;
